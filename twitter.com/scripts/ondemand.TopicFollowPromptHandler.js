;(window.webpackJsonp = window.webpackJsonp || []).push([
  [239],
  {
    VSZh: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('yiKp'),
        o = n.n(i),
        a = n('ezF+'),
        c = n('zh9S'),
        r = n('Rp9C'),
        s = (n('uFXj'), n('ERkP')),
        l = n.n(s),
        p = n('fRsM'),
        d = (n('yH/f'), Object.freeze({ IncentiveFocus: 'IncentiveFocus', TopicFocus: 'TopicFocus' })),
        u = n('MWbm'),
        m = n('t62R'),
        h = function (e) {
          var t = e.displayType,
            n = e.subtext,
            i = e.title,
            o = e.topic,
            a = t === d.IncentiveFocus
          return l.a.createElement(
            u.a,
            { style: a && I.incentiveFocus },
            l.a.createElement(p.a, { educateOnFollow: !0, nameWeight: a ? void 0 : 'heavy', topic: o, withIcon: !0 }),
            i || n
              ? l.a.createElement(
                  u.a,
                  { style: [I.text, a ? I.noMarginBottom : I.border] },
                  i ? l.a.createElement(m.b, { size: 'headline1', weight: 'bold' }, i) : null,
                  n ? l.a.createElement(m.b, { color: 'gray700' }, n) : null,
                )
              : null,
          )
        },
        I = n('rHpw').a.create(function (e) {
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
        f = n('Zejx'),
        b = a.g({
          component: h,
          bindActions: function () {
            return { scribe: c.c }
          },
          selectData: function (e) {
            var t = e.entry.content
            return {
              topic: function (e) {
                return f.a.select(e, t.topicId)
              },
            }
          },
          createProps: function (e) {
            var t = e.data.topic,
              n = e.entry
            if (!t) return null
            var i = n.content
            return {
              displayType: i.displayType,
              subtext: i.followIncentiveText,
              title: i.followIncentiveTitle,
              topic: t,
            }
          },
          getScribeDataItem: function (e) {
            return r.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo)
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.scribeData,
              i = e.scribeNamespace
            t(o()(o()({}, i), {}, { action: 'impression' }), n)
          },
        })
      t.default = b
    },
    fRsM: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        a = n('VrFO'),
        c = n.n(a),
        r = n('Y9Ll'),
        s = n.n(r),
        l = n('1Pcy'),
        p = n.n(l),
        d = n('5Yy7'),
        u = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        I = n('KEM+'),
        f = n.n(I),
        b = (n('1t7P'), n('jQ/y'), n('ho0z'), n('7xRU'), n('ERkP')),
        g = n.n(b),
        v = n('LWCC'),
        y = n('3XMw'),
        D = n.n(y),
        w = n('EHV7'),
        _ = n('YICZ'),
        x = n('3IPs'),
        k = n('X04g'),
        E = n('MWbm'),
        S = n('Irs7'),
        T = n('hxu0'),
        C = n('htQn'),
        L = n('t62R'),
        R = n('j7Bv'),
        F = n('rHpw'),
        O = n('v6aA'),
        B = D.a.a2a3824a,
        z = 0,
        P = (function (e) {
          u()(n, e)
          var t = h()(n)
          function n(e, i) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e, i)),
              f()(p()(a), '_topicLink', {
                pathname: '/i/topics/'.concat(a.props.topic.id),
                state: {
                  referringScribeNamespace: o()(
                    o()({}, a.props.analytics.contextualScribeNamespace),
                    {},
                    { action: 'click' },
                  ),
                },
              }),
              f()(p()(a), '_handleOnClick', function () {
                var e = a.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  i = e.topic,
                  o = i.description,
                  c = i.id,
                  r = i.name
                t &&
                  n &&
                  n(k.a.ItemType.TOPIC) &&
                  t({ topic: { id: c, name: r, description: o || '', type: x.a.Topic } }),
                  a._handleScribe('click')
              }),
              (a._topicDomId = 'topic'.concat(z)),
              (a._nameDomId = 'topic-name'.concat(z)),
              (a._descriptionDomId = 'topic-description'.concat(z)),
              (a._followButtonDomId = 'topic-follow-button'.concat(z)),
              (a._notInterestedButtonDomId = 'topic-not-interested-button'.concat(z)),
              (z += 1),
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
                    i = e.nameWeight,
                    o = e.notInterestedOnClick,
                    a = e.topic,
                    c = a.description,
                    r = a.name,
                    s = this.context.loggedInUserId
                  return g.a.createElement(
                    C.a,
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
                      style: [j.root, j.flexStart],
                      withDarkerInteractiveBackground: n,
                    },
                    g.a.createElement(
                      E.a,
                      { style: j.topic },
                      g.a.createElement(E.a, { accessibilityLabel: B, nativeID: this._topicDomId }),
                      this._renderIcon(),
                      g.a.createElement(
                        E.a,
                        { style: j.text },
                        g.a.createElement(
                          L.b,
                          { nativeID: this._nameDomId, weight: i, withInteractiveStyling: !!this._topicLink },
                          r,
                        ),
                        c
                          ? g.a.createElement(
                              L.b,
                              { color: 'gray700', nativeID: this._descriptionDomId, numberOfLines: 2 },
                              c,
                            )
                          : null,
                      ),
                    ),
                    g.a.createElement(
                      E.a,
                      { style: j.buttons },
                      g.a.createElement(v.a, { educateOnFollow: t, nativeID: this._followButtonDomId, topic: a }),
                      s && o
                        ? g.a.createElement(_.a, {
                            nativeID: this._notInterestedButtonDomId,
                            onPress: o,
                            style: j.marginLeft,
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
                    ? g.a.createElement(R.a, { Icon: w.a, size: 'large', style: j.icon })
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
      f()(P, 'contextType', O.a), f()(P, 'defaultProps', { nameWeight: 'bold', withIcon: !0 })
      var j = F.a.create(function (e) {
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
      t.a = Object(T.a)(Object(S.a)(P))
    },
    hxu0: function (e, t, n) {
      'use strict'
      var i = n('97Jx'),
        o = n.n(i),
        a = n('ERkP'),
        c = n.n(a),
        r = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return c.a.createElement(r.a.Consumer, null, function (n) {
            return c.a.createElement(e, o()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
  },
])
//# sourceMappingURL=WIPED
