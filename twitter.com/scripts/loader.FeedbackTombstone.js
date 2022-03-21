;(window.webpackJsonp = window.webpackJsonp || []).push([
  [175],
  {
    '6l+S': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'FeedbackTombstoneContainer', function () {
          return O
        })
      var o = t('VrFO'),
        c = t.n(o),
        a = t('Y9Ll'),
        i = t.n(a),
        r = t('1Pcy'),
        d = t.n(r),
        s = t('5Yy7'),
        l = t.n(s),
        u = t('2VqO'),
        f = t.n(u),
        b = t('KEM+'),
        k = t.n(b),
        p = t('RhWx'),
        v = t.n(p),
        y = (t('z84I'), t('2G9S'), t('euJ+')),
        h = t('ERkP'),
        m = t.n(h),
        A = t('rxPX'),
        F = Object(A.a)()
          .propsFromState(function () {
            return {
              feedbackActions: function (e, n) {
                return n.module.selectFeedbackActions(e)
              },
              feedbackKey: function (e, n) {
                return n.feedbackKeys.length && n.feedbackKeys[0]
              },
            }
          })
          .adjustStateProps(function (e) {
            var n = e.feedbackKey ? e.feedbackActions[e.feedbackKey] : void 0,
              t =
                n && n.childKeys
                  ? n.childKeys.map(function (n) {
                      return { key: n, action: e.feedbackActions[n] }
                    })
                  : []
            return { feedbackAction: n, childFeedbackActions: t }
          })
          .propsFromActions(function (e) {
            var n = e.module
            return { applyFeedbackAction: n.applyFeedbackAction, undoFeedbackAction: n.undoFeedbackAction }
          })
          .withAnalytics({ element: 'feedback_dontlike' }),
        w = t('3XMw'),
        K = t.n(w),
        g = t('oQhu'),
        E = t('xM7j'),
        M = K.a.aaf2c6e9,
        _ = K.a.e2f2b658,
        P = K.a.gf5e9ea6,
        T = function (e, n) {
          return e && y.g(e, n)
        },
        x = function (e) {
          var n = e.itemMetadata
          return n && n.clientEventInfo && n.clientEventInfo.component
        },
        C = Object(g.a)(function (e, n, t, o, c) {
          return (t || []).map(function (t) {
            var a,
              i = t.action,
              r = t.key
            return {
              label: null !== (a = i.prompt) && void 0 !== a ? a : '',
              onClick: function () {
                var t,
                  a = T(i, o),
                  d = x(o),
                  s = (t = i.clientEventInfo) && t.action
                c.scribe({ component: d, element: a, action: s || 'click' }),
                  n({ entry: o, feedbackKeys: [r].concat(v()(e)) })
              },
            }
          })
        }),
        O = (function (e) {
          l()(t, e)
          var n = f()(t)
          function t() {
            var e
            c()(this, t)
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(a))),
              k()(d()(e), '_getFollowUpOptions', function () {
                var n = e.props,
                  t = n.analytics,
                  o = n.applyFeedbackAction,
                  c = n.childFeedbackActions,
                  a = n.entry,
                  i = n.feedbackKeys
                return C(i, o, c, a, t)
              }),
              k()(d()(e), '_handleUndo', function () {
                var n = e.props,
                  t = n.analytics,
                  o = n.entry,
                  c = n.feedbackAction,
                  a = n.feedbackKeys,
                  i = n.onUndoRichAction,
                  r = n.undoFeedbackAction
                if (c) {
                  r({ entry: o, feedbackKeys: a }), i && i()
                  var d = T(c, o) || 'feedback_unknown',
                    s = x(o),
                    l = y.h(c, o)
                  t.scribe({ component: s, element: d, action: l })
                }
              }),
              k()(d()(e), '_getTombstoneMessage', function () {
                var n,
                  t = e.props.feedbackAction
                return null != t && t.confirmation
                  ? t.confirmation
                  : null != t && null !== (n = t.richBehavior) && void 0 !== n && n.markNotInterestedTopic
                  ? _
                  : M
              }),
              e
            )
          }
          return (
            i()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.behavioralEventContext,
                    t = e.carousel,
                    o = e.conversationPosition,
                    c = e.conversationTreeMetadata,
                    a = e.feedbackAction,
                    i = this._getTombstoneMessage(),
                    r = null == a ? void 0 : a.hasUndoAction
                  return m.a.createElement(
                    E.a,
                    {
                      actionText: r ? P : void 0,
                      additionalActions: this._getFollowUpOptions(),
                      behavioralEventContext: n,
                      carousel: t,
                      conversationPosition: o,
                      conversationTreeMetadata: c,
                      onClick: r ? this._handleUndo : void 0,
                    },
                    i,
                  )
                },
              },
            ]),
            t
          )
        })(m.a.Component)
      k()(O, 'defaultProps', { carousel: !1 })
      var U = F(O)
      n.default = U
    },
  },
])
//# sourceMappingURL=WIPED
