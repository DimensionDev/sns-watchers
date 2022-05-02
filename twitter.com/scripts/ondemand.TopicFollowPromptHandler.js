;(window.webpackJsonp = window.webpackJsonp || []).push([
  [244],
  {
    VSZh: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('ezF+'),
        i = n('Rp9C'),
        a = (n('uFXj'), n('ERkP')),
        c = n.n(a),
        r = n('Zejx'),
        s = n('rxPX'),
        l = function (e, t) {
          return r.a.select(e, t.entry.content.topicId)
        },
        p = Object(s.a)().propsFromState(function () {
          return { topic: l }
        }),
        d = n('fRsM'),
        m = (n('yH/f'), Object.freeze({ IncentiveFocus: 'IncentiveFocus', TopicFocus: 'TopicFocus' })),
        u = n('Irs7'),
        h = n('MWbm'),
        I = n('t62R'),
        f = n('rHpw'),
        b = function (e) {
          var t = e.entry,
            n = e.topic,
            o = Object(u.b)(),
            i = t.content,
            a = i.displayType,
            r = i.followIncentiveText,
            s = i.followIncentiveTitle,
            l = a === m.IncentiveFocus
          return (
            c.a.useEffect(function () {
              n && o.scribeAction('impression')
            }, []),
            n
              ? c.a.createElement(
                  h.a,
                  { style: l && y.incentiveFocus },
                  c.a.createElement(d.a, {
                    educateOnFollow: !0,
                    nameWeight: l ? void 0 : 'heavy',
                    topic: n,
                    withIcon: !0,
                  }),
                  s || r
                    ? c.a.createElement(
                        h.a,
                        { style: [y.text, l ? y.noMarginBottom : y.border] },
                        s ? c.a.createElement(I.b, { size: 'headline1', weight: 'bold' }, s) : null,
                        r ? c.a.createElement(I.b, { color: 'gray700' }, r) : null,
                      )
                    : null,
                )
              : null
          )
        },
        g = p(c.a.memo(b)),
        y = f.a.create(function (e) {
          return {
            border: {
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              borderTopColor: e.colors.borderColor,
              marginTop: 0,
              paddingTop: e.spaces.space12,
            },
            incentiveFocus: { flexDirection: 'column-reverse' },
            noMarginBottom: { marginBottom: 0 },
            text: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        v = o
          .b({
            component: g,
            getScribeDataItem: function (e) {
              return i.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo)
            },
          })
          .getHandler()
      t.default = v
    },
    fRsM: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        i = n.n(o),
        a = n('VrFO'),
        c = n.n(a),
        r = n('Y9Ll'),
        s = n.n(r),
        l = n('1Pcy'),
        p = n.n(l),
        d = n('5Yy7'),
        m = n.n(d),
        u = n('2VqO'),
        h = n.n(u),
        I = n('KEM+'),
        f = n.n(I),
        b = (n('1t7P'), n('jQ/y'), n('ho0z'), n('7xRU'), n('ERkP')),
        g = n.n(b),
        y = n('LWCC'),
        v = n('3XMw'),
        w = n.n(v),
        D = n('EHV7'),
        _ = n('YICZ'),
        k = n('3IPs'),
        x = n('X04g'),
        E = n('MWbm'),
        S = n('Irs7'),
        T = n('hxu0'),
        O = n('htQn'),
        F = n('t62R'),
        L = n('j7Bv'),
        C = n('rHpw'),
        R = n('v6aA'),
        B = w.a.a2a3824a,
        j = 0,
        z = (function (e) {
          m()(n, e)
          var t = h()(n)
          function n(e, o) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e, o)),
              f()(p()(a), '_topicLink', {
                pathname: '/i/topics/'.concat(a.props.topic.id),
                state: {
                  referringScribeNamespace: i()(
                    i()({}, a.props.analytics.contextualScribeNamespace),
                    {},
                    { action: 'click' },
                  ),
                },
              }),
              f()(p()(a), '_handleOnClick', function () {
                var e = a.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  o = e.topic,
                  i = o.description,
                  c = o.id,
                  r = o.name
                t &&
                  n &&
                  n(x.a.ItemType.TOPIC) &&
                  t({ topic: { id: c, name: r, description: i || '', type: k.a.Topic } }),
                  a._handleScribe('click')
              }),
              (a._topicDomId = 'topic'.concat(j)),
              (a._nameDomId = 'topic-name'.concat(j)),
              (a._descriptionDomId = 'topic-description'.concat(j)),
              (a._followButtonDomId = 'topic-follow-button'.concat(j)),
              (a._notInterestedButtonDomId = 'topic-not-interested-button'.concat(j)),
              (j += 1),
              a
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.educateOnFollow,
                    n = e.isInSidebar,
                    o = e.nameWeight,
                    i = e.notInterestedOnClick,
                    a = e.topic,
                    c = a.description,
                    r = a.name,
                    s = this.context.loggedInUserId
                  return g.a.createElement(
                    O.a,
                    {
                      accessibilityLabelledBy: [
                        this._topicDomId,
                        this._nameDomId,
                        this._descriptionDomId,
                        this._followButtonDomId,
                        this._notInterestedButtonDomId,
                      ].join(' '),
                      interactiveStyles: this._topicLink ? void 0 : null,
                      link: this._topicLink,
                      onClick: this._topicLink ? this._handleOnClick : void 0,
                      style: [H.root, H.flexStart],
                      withDarkerInteractiveBackground: n,
                    },
                    g.a.createElement(
                      E.a,
                      { style: H.topic },
                      g.a.createElement(E.a, { accessibilityLabel: B, nativeID: this._topicDomId }),
                      this._renderIcon(),
                      g.a.createElement(
                        E.a,
                        { style: H.text },
                        g.a.createElement(
                          F.b,
                          { nativeID: this._nameDomId, weight: o, withInteractiveStyling: !!this._topicLink },
                          r,
                        ),
                        c
                          ? g.a.createElement(
                              F.b,
                              { color: 'gray700', nativeID: this._descriptionDomId, numberOfLines: 2 },
                              c,
                            )
                          : null,
                      ),
                    ),
                    g.a.createElement(
                      E.a,
                      { style: H.buttons },
                      g.a.createElement(y.a, { educateOnFollow: t, nativeID: this._followButtonDomId, topic: a }),
                      s && i
                        ? g.a.createElement(_.a, {
                            nativeID: this._notInterestedButtonDomId,
                            onPress: i,
                            style: H.marginLeft,
                            topicId: a.id,
                          })
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderIcon',
                value: function () {
                  return this.props.withIcon
                    ? g.a.createElement(L.a, { Icon: D.a, size: 'large', style: H.icon })
                    : null
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribeAction(e)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      f()(z, 'contextType', R.a), f()(z, 'defaultProps', { nameWeight: 'bold', withIcon: !0 })
      var H = C.a.create(function (e) {
        return {
          root: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          flexStart: { alignItems: 'flex-start' },
          icon: { alignSelf: 'flex-start', marginRight: e.spaces.space12 },
          customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 },
          text: { flexShrink: 1 },
          buttons: { alignItems: 'center', alignSelf: 'center', flexDirection: 'row', paddingLeft: e.spaces.space8 },
          marginLeft: { marginLeft: e.spaces.space4 },
          topic: { alignItems: 'center', flexDirection: 'row', flexShrink: 1, paddingRight: e.spaces.space4 },
        }
      })
      t.a = Object(T.a)(Object(S.a)(z))
    },
  },
])
//# sourceMappingURL=WIPED
