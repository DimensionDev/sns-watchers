;(window.webpackJsonp = window.webpackJsonp || []).push([
  [360],
  {
    '1Cz6': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        o = n.n(a),
        r = n('t62R'),
        i = n('MAI/'),
        l = n('3XMw'),
        c = n.n(l),
        s = n('3rX5'),
        p = n('cm6r'),
        u = n('cHvH'),
        d = n('Wd7d'),
        m = n('rHpw'),
        f = n('MWbm'),
        w = function (e) {
          var t = e.children,
            n = e.context,
            a = e.imageSrc,
            l = e.knownFollowers,
            w = e.onFacepilesClick,
            b = e.onFacepilesImpression,
            h = e.subtitle,
            y = e.title,
            x = e.withAdditionalControls,
            v = l || {},
            C = v.firstUsername,
            E = v.knownFollowersAvatarUrls,
            _ = v.trendingFollowersUrl,
            T = v.usersCount,
            F = l && l.knownFollowersAvatarUrls.length > 3
          o.a.useEffect(
            function () {
              F && b && b()
            },
            [F, b],
          )
          var I = a ? o.a.createElement(s.a, { source: a, style: g.iconCustom }) : null,
            S = n
              ? o.a.createElement(
                  f.a,
                  { style: x ? g.condensedContextV2 : g.condensedContext },
                  o.a.createElement(r.b, { align: 'left', color: 'gray700', numberOfLines: 3, size: 'subtext2' }, n),
                  o.a.createElement(
                    f.a,
                    { style: x ? g.buttonTopMargin : [g.buttonBottomMargin, g.buttonLeftMargin] },
                    t,
                  ),
                )
              : null,
            k = o.a.createElement(u.a, null, function (e) {
              var a = e.windowWidth,
                l = d.a.isNarrowScreenWidth(a) ? 'xLarge' : 'xxLarge',
                s = a < m.a.theme.breakpoints.xSmall ? g.buttonWrap : void 0,
                u = x ? g.facepileV2 : null
              return o.a.createElement(
                f.a,
                { style: x ? null : [g.knownFollowersContainer, s] },
                o.a.createElement(
                  p.a,
                  {
                    interactiveStyles: null,
                    link: _,
                    onPress: w,
                    style: x ? g.interactiveStyleV2 : g.interactiveStyle,
                  },
                  function (e) {
                    var t = e.isHovered
                    return o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(i.a, { style: [g.facepile, u], userAvatarSize: l, userAvatarUrls: E }),
                      o.a.createElement(
                        r.b,
                        { color: 'gray700', dir: 'ltr', numberOfLines: 2, size: 'subtext2', style: t && g.underline },
                        n ||
                          (function (e, t) {
                            return o.a.createElement(c.a.I18NFormatMessage, { $i18n: 'bb2cd6d3' }, e, t)
                          })(C, T),
                      ),
                    )
                  },
                ),
                (function (e) {
                  var n =
                    e < m.a.theme.breakpoints.xSmall ? g.buttonBottomMargin : [g.buttonBottomMargin, g.buttonLeftMargin]
                  return x ? [t] : o.a.createElement(f.a, { style: n }, t)
                })(a),
              )
            }),
            A = l && F ? k : S
          return o.a.createElement(
            o.a.Fragment,
            null,
            I,
            o.a.createElement(r.b, { size: 'title2', weight: 'heavy' }, y),
            h ? o.a.createElement(r.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, h) : null,
            A,
          )
        }
      w.defaultProps = { withAdditionalControls: !1 }
      var g = m.a.create(function (e) {
        return {
          buttonBottomMargin: { marginBottom: e.spaces.space16 },
          buttonLeftMargin: { marginLeft: e.spaces.space20 },
          buttonTopMargin: { marginTop: e.spaces.space20 },
          buttonWrap: { flexWrap: 'wrap-reverse' },
          condensedContext: {
            marginTop: e.spaces.space16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          condensedContextV2: { marginTop: e.spaces.space16 },
          iconCustom: {
            alignSelf: 'flex-start',
            borderRadius: e.borderRadii.infinite,
            height: e.spaces.space32,
            width: e.spaces.space32,
            marginTop: e.spaces.space8,
            marginBottom: e.spaces.space8,
          },
          facepile: { marginBottom: e.spaces.space16, alignSelf: 'flex-start' },
          facepileV2: { marginRight: e.spaces.space8, marginTop: e.spaces.space16 },
          interactiveStyle: { flexShrink: 1 },
          interactiveStyleV2: { flexDirection: 'row', alignItems: 'center' },
          knownFollowersContainer: {
            marginTop: e.spaces.space16,
            marginBottom: e.spaces.space16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexGrow: 1,
            flexShrink: 1,
          },
          underline: { textDecorationLine: 'underline' },
        }
      })
      t.a = w
    },
    K0xN: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicHeader', function () {
          return G
        })
      var a = n('VrFO'),
        o = n.n(a),
        r = n('Y9Ll'),
        i = n.n(r),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        p = n.n(s),
        u = n('2VqO'),
        d = n.n(u),
        m = n('KEM+'),
        f = n.n(m),
        w = (n('2G9S'), n('1t7P'), n('jQ/y'), n('ho0z'), n('z84I'), n('M+/F'), n('ERkP')),
        g = n.n(w),
        b = n('Qyxo'),
        h = n('Zejx'),
        y = n('G6rE'),
        x = n('rxPX'),
        v = n('0KEI'),
        C = function (e, t) {
          return h.a.select(e, t.topicId)
        },
        E = function (e, t) {
          var n = (function (e, t) {
            var n
            return y.e.selectMany(e, (null === (n = t.facepile) || void 0 === n ? void 0 : n.userIds) || [])
          })(e, t)
          return Object(b.a)(n, function (e) {
            return !e || e.blocking || e.muting ? void 0 : e
          })
        },
        _ = Object(x.a)()
          .propsFromState(function () {
            return { topic: C, users: E }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('TOPIC_HEADER'),
              follow: h.a.follow,
              unfollow: h.a.unfollow,
              undoTopicNotInterested: h.a.undoNotInterested,
            }
          })
          .withAnalytics(),
        T = n('LWCC'),
        F = n('9B+1'),
        I = n('3XMw'),
        S = n.n(I),
        k = n('Tp1h'),
        A = n('YICZ'),
        B = n('vYiB'),
        M = n('caTy'),
        L = n('Jkc4'),
        O = n('xM7j'),
        W = n('XcJG'),
        H = n('MWbm'),
        V = n('v6aA'),
        z = n('1Cz6'),
        N = n('cHvH'),
        j = n('Wd7d'),
        U = n('rHpw'),
        P = S.a.b1850062,
        R = S.a.d69b2d90,
        D = S.a.gf5e9ea6,
        G = (function (e) {
          p()(n, e)
          var t = d()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(
                c()(e),
                '_additionalControlsEnabled',
                e.context.featureSwitches.isTrue('topic_landing_page_clearer_controls_enabled'),
              ),
              f()(
                c()(e),
                '_followButtonTextVariant',
                Object(F.b)(e.context.featureSwitches.getStringValue('topic_landing_page_cta_text')),
              ),
              f()(c()(e), '_handleUndoTopicNotInterested', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.topic,
                  o = t.undoTopicNotInterested
                e._scribeAction({ element: 'topic', action: 'un_not_interested' }), a && o(a.id).catch(n())
              }),
              f()(c()(e), '_handleOnClickFacepiles', function () {
                e._scribeAction({ element: 'facepile', action: 'click' })
              }),
              f()(c()(e), '_handleFacepilesImpression', function () {
                e._scribeAction({ element: 'facepile', action: 'impression' })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.facepile,
                    a = t.onFollowHeaderOffscreen,
                    o = t.topic,
                    r = t.topicLandingContext,
                    i = t.users,
                    l = o || {},
                    c = l.description,
                    s = l.name,
                    p = i.slice(0, 4).map(function (e) {
                      return e.profile_image_url_https
                    }),
                    u = (null == n ? void 0 : n.facepileUrl) && Object(M.b)(n.facepileUrl),
                    d =
                      i && i.length > 3
                        ? {
                            firstUsername: i[0].name || '',
                            usersCount: i.length - 1,
                            knownFollowersAvatarUrls: p,
                            trendingFollowersUrl: u || '',
                          }
                        : void 0
                  return o
                    ? g.a.createElement(
                        H.a,
                        { style: K.root },
                        g.a.createElement(L.a, { customText: s, displayMode: k.a.topic }, function () {
                          return g.a.createElement(
                            B.a,
                            { onOffscreenChange: a },
                            g.a.createElement(z.a, {
                              children: e._renderTopicActions(),
                              context: r,
                              knownFollowers: d,
                              onFacepilesClick: e._handleOnClickFacepiles,
                              onFacepilesImpression: e._handleFacepilesImpression,
                              subtitle: c,
                              title: s,
                              withAdditionalControls: e._additionalControlsEnabled,
                            }),
                          )
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderTopicActions',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.displayType,
                    a = t.showRelationshipChangeConfirmation,
                    o = t.topic
                  return o
                    ? g.a.createElement(N.a, null, function (t) {
                        var r = t.windowWidth,
                          i = j.a.isNarrowScreenWidth(r) ? K.mainViewSmall : K.mainView,
                          l = e._additionalControlsEnabled
                            ? j.a.isNarrowScreenWidth(r)
                              ? K.followButtonSmall
                              : K.followButton
                            : null,
                          c = j.a.isNarrowScreenWidth(r) ? K.notInterestButtonSmall : K.notInterestButton
                        return g.a.createElement(
                          g.a.Fragment,
                          null,
                          o.not_interested && e._additionalControlsEnabled
                            ? e._renderTopicContextTombstone()
                            : n === W.c.Basic
                            ? g.a.createElement(
                                H.a,
                                { style: i },
                                !e._additionalControlsEnabled || o.following || o.not_interested
                                  ? null
                                  : g.a.createElement(A.a, {
                                      size: 'medium',
                                      style: c,
                                      text: P,
                                      topicId: o.id,
                                      type: 'primaryOutlined',
                                      withIconOnly: !1,
                                    }),
                                g.a.createElement(T.a, {
                                  showRelationshipChangeConfirmation: a,
                                  size: 'medium',
                                  style: l,
                                  textMode: e._followButtonTextVariant,
                                  topic: o,
                                }),
                              )
                            : null,
                        )
                      })
                    : null
                },
              },
              {
                key: '_renderTopicContextTombstone',
                value: function () {
                  return g.a.createElement(O.a, {
                    actionText: D,
                    children: R,
                    inline: !0,
                    onClick: this._handleUndoTopicNotInterested,
                  })
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(e)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      f()(G, 'contextType', V.a), f()(G, 'defaultProps', { displayType: W.c.Basic })
      var K = U.a.create(function (e) {
          return {
            root: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginVertical: e.componentDimensions.gutterVertical,
            },
            mainView: { flexDirection: 'row', flexGrow: 1 },
            mainViewSmall: { flexWrap: 'wrap' },
            notInterestButton: { justifyContent: 'center', flexBasis: 1, flexGrow: 1, marginRight: e.spaces.space4 },
            followButton: {
              justifyContent: 'center',
              flexBasis: 1,
              flexGrow: 1,
              marginLeft: e.spaces.space4,
              minWidth: 'inherit',
            },
            followButtonSmall: { marginTop: e.spaces.space8, marginLeft: 0, width: '100%' },
            notInterestButtonSmall: { width: '100%' },
          }
        }),
        X = _(G)
      t.default = X
    },
    WFPe: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('yiKp'),
        o = n.n(a),
        r = n('ezF+'),
        i = n('zh9S'),
        l = n('Rp9C'),
        c = n('K0xN')
      t.default = r.g({
        bindActions: function (e) {
          e.module
          return { scribe: i.c }
        },
        component: c.default,
        createProps: function (e) {
          var t = e.entry.content
          return {
            onFollowHeaderOffscreen: t.onFollowHeaderOffscreen,
            topicId: t.topicId,
            topicLandingContext: t.topicLandingContext,
            facepile: t.facepile,
            displayType: t.displayType,
          }
        },
        getScribeDataItem: function (e) {
          var t = e.content.topicId,
            n = e.itemMetadata.clientEventInfo
          return l.a.forTopic(t, n)
        },
        onImpression: function (e) {
          var t = e.actions.scribe,
            n = e.scribeData,
            a = e.scribeNamespace
          t(o()(o()({}, a), {}, { action: 'impression' }), n)
        },
      })
    },
  },
])
//# sourceMappingURL=WIPED
