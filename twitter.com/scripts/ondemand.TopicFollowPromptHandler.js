;(window.webpackJsonp = window.webpackJsonp || []).push([
  [234],
  {
    VSZh: function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o = n('KEM+'),
        r = n.n(o),
        i = n('ezF+'),
        c = n('zh9S'),
        a = n('Rp9C'),
        s = (n('uFXj'), n('ERkP')),
        l = n.n(s),
        p = n('fRsM'),
        u = (n('yH/f'), Object.freeze({ IncentiveFocus: 'IncentiveFocus', TopicFocus: 'TopicFocus' })),
        d = n('MWbm'),
        f = n('t62R'),
        m = function (e) {
          var t = e.displayType,
            n = e.subtext,
            o = e.title,
            r = e.topic,
            i = t === u.IncentiveFocus
          return l.a.createElement(
            d.a,
            { style: i && b.incentiveFocus },
            l.a.createElement(p.a, { educateOnFollow: !0, nameWeight: i ? void 0 : 'heavy', topic: r, withIcon: !0 }),
            o || n
              ? l.a.createElement(
                  d.a,
                  { style: [b.text, i ? b.noMarginBottom : b.border] },
                  o ? l.a.createElement(f.b, { size: 'headline1', weight: 'bold' }, o) : null,
                  n ? l.a.createElement(f.b, { color: 'gray700' }, n) : null,
                )
              : null,
          )
        },
        b = n('rHpw').a.create(function (e) {
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
        h = n('Zejx')
      function y(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var I = i.g({
        component: m,
        bindActions: function () {
          return { scribe: c.c }
        },
        selectData: function (e) {
          var t = e.entry.content
          return {
            topic: function (e) {
              return h.a.select(e, t.topicId)
            },
          }
        },
        createProps: function (e) {
          var t = e.data.topic,
            n = e.entry
          if (!t) return null
          var o = n.content
          return { displayType: o.displayType, subtext: o.followIncentiveText, title: o.followIncentiveTitle, topic: t }
        },
        getScribeDataItem: function (e) {
          return a.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo)
        },
        onImpression: function (e) {
          var t = e.actions.scribe,
            n = e.scribeData
          t(g(g({}, e.scribeNamespace), {}, { action: 'impression' }), n)
        },
      })
      t.default = I
    },
    fRsM: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o = n('VrFO'),
        r = n.n(o),
        i = n('Y9Ll'),
        c = n.n(i),
        a = n('1Pcy'),
        s = n.n(a),
        l = n('5Yy7'),
        p = n.n(l),
        u = n('N+ot'),
        d = n.n(u),
        f = n('AuHH'),
        m = n.n(f),
        b = n('KEM+'),
        h = n.n(b),
        y = (n('1t7P'), n('jQ/y'), n('ho0z'), n('7xRU'), n('ERkP')),
        g = n.n(y),
        I = n('LWCC'),
        v = n('3XMw'),
        O = n.n(v),
        w = n('EHV7'),
        D = n('YICZ'),
        j = n('3IPs'),
        x = n('X04g'),
        E = n('MWbm'),
        P = n('Irs7'),
        k = n('hxu0'),
        _ = n('htQn'),
        S = n('t62R'),
        R = n('j7Bv'),
        T = n('rHpw'),
        L = n('v6aA')
      function F(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function C(e) {
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
            o = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return d()(this, n)
        }
      }
      var H = O.a.a2a3824a,
        M = 0,
        z = (function (e) {
          p()(n, e)
          var t = C(n)
          function n(e, o) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, o)),
              h()(s()(i), '_topicLink', {
                pathname: '/i/topics/'.concat(i.props.topic.id),
                state: {
                  referringScribeNamespace: B(
                    B({}, i.props.analytics.contextualScribeNamespace),
                    {},
                    { action: 'click' },
                  ),
                },
              }),
              h()(s()(i), '_handleOnClick', function () {
                var e = i.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  o = e.topic,
                  r = o.description,
                  c = o.id,
                  a = o.name
                t &&
                  n &&
                  n(x.a.ItemType.TOPIC) &&
                  t({ topic: { id: c, name: a, description: r || '', type: j.a.Topic } }),
                  i._handleScribe('click')
              }),
              (i._topicDomId = 'topic'.concat(M)),
              (i._nameDomId = 'topic-name'.concat(M)),
              (i._descriptionDomId = 'topic-description'.concat(M)),
              (i._followButtonDomId = 'topic-follow-button'.concat(M)),
              (i._notInterestedButtonDomId = 'topic-not-interested-button'.concat(M)),
              (M += 1),
              i
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.educateOnFollow,
                    n = e.isInSidebar,
                    o = e.nameWeight,
                    r = e.notInterestedOnClick,
                    i = e.topic,
                    c = i.description,
                    a = i.name,
                    s = this.context.loggedInUserId
                  return g.a.createElement(
                    _.a,
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
                      style: [W.root, W.flexStart],
                      withDarkerInteractiveBackground: n,
                    },
                    g.a.createElement(
                      E.a,
                      { style: W.topic },
                      g.a.createElement(E.a, { accessibilityLabel: H, nativeID: this._topicDomId }),
                      this._renderIcon(),
                      g.a.createElement(
                        E.a,
                        { style: W.text },
                        g.a.createElement(
                          S.b,
                          { nativeID: this._nameDomId, weight: o, withInteractiveStyling: !!this._topicLink },
                          a,
                        ),
                        c
                          ? g.a.createElement(
                              S.b,
                              { color: 'gray700', nativeID: this._descriptionDomId, numberOfLines: 2 },
                              c,
                            )
                          : null,
                      ),
                    ),
                    g.a.createElement(
                      E.a,
                      { style: W.buttons },
                      g.a.createElement(I.a, { educateOnFollow: t, nativeID: this._followButtonDomId, topic: i }),
                      s && r
                        ? g.a.createElement(D.a, {
                            nativeID: this._notInterestedButtonDomId,
                            onPress: r,
                            style: W.marginLeft,
                            topicId: i.id,
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
                    ? g.a.createElement(R.a, { Icon: w.a, size: 'large', style: W.icon })
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
      h()(z, 'contextType', L.a), h()(z, 'defaultProps', { nameWeight: 'bold', withIcon: !0 })
      var W = T.a.create(function (e) {
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
      t.a = Object(k.a)(Object(P.a)(z))
    },
    hxu0: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        r = n.n(o),
        i = n('ERkP'),
        c = n.n(i),
        a = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return c.a.createElement(a.a.Consumer, null, function (n) {
            return c.a.createElement(e, r()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
  },
])
//# sourceMappingURL=WIPED
