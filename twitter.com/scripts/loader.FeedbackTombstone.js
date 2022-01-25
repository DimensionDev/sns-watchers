;(window.webpackJsonp = window.webpackJsonp || []).push([
  [167],
  {
    '6l+S': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'FeedbackTombstoneContainer', function () {
          return U
        })
      var o = t('VrFO'),
        c = t.n(o),
        a = t('Y9Ll'),
        r = t.n(a),
        i = t('1Pcy'),
        u = t.n(i),
        s = t('5Yy7'),
        l = t.n(s),
        f = t('N+ot'),
        d = t.n(f),
        p = t('AuHH'),
        b = t.n(p),
        k = t('KEM+'),
        v = t.n(k),
        y = t('RhWx'),
        h = t.n(y),
        m = (t('z84I'), t('2G9S'), t('OZaJ'), t('euJ+')),
        A = t('ERkP'),
        F = t('rxPX'),
        w = Object(F.a)()
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
        K = t('3XMw'),
        g = t.n(K),
        E = t('oQhu'),
        M = t('xM7j')
      function P(e) {
        var n = (function () {
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
          var t,
            o = b()(e)
          if (n) {
            var c = b()(this).constructor
            t = Reflect.construct(o, arguments, c)
          } else t = o.apply(this, arguments)
          return d()(this, t)
        }
      }
      var R = g.a.aaf2c6e9,
        _ = g.a.e2f2b658,
        x = g.a.gf5e9ea6,
        O = function (e, n) {
          return e && m.g(e, n)
        },
        T = function (e) {
          var n = e.itemMetadata
          return n && n.clientEventInfo && n.clientEventInfo.component
        },
        C = Object(E.a)(function (e, n, t, o, c) {
          return (t || []).map(function (t) {
            var a,
              r = t.action,
              i = t.key
            return {
              label: null !== (a = r.prompt) && void 0 !== a ? a : '',
              onClick: function () {
                var t,
                  a = O(r, o),
                  u = T(o),
                  s = (t = r.clientEventInfo) && t.action
                c.scribe({ component: u, element: a, action: s || 'click' }),
                  n({ entry: o, feedbackKeys: [i].concat(h()(e)) })
              },
            }
          })
        }),
        U = (function (e) {
          l()(t, e)
          var n = P(t)
          function t() {
            var e
            c()(this, t)
            for (var o = arguments.length, a = new Array(o), r = 0; r < o; r++) a[r] = arguments[r]
            return (
              (e = n.call.apply(n, [this].concat(a))),
              v()(u()(e), '_getFollowUpOptions', function () {
                var n = e.props,
                  t = n.analytics,
                  o = n.applyFeedbackAction,
                  c = n.childFeedbackActions,
                  a = n.entry,
                  r = n.feedbackKeys
                return C(r, o, c, a, t)
              }),
              v()(u()(e), '_handleUndo', function () {
                var n = e.props,
                  t = n.analytics,
                  o = n.entry,
                  c = n.feedbackAction,
                  a = n.feedbackKeys,
                  r = n.onUndoRichAction,
                  i = n.undoFeedbackAction
                if (c) {
                  i({ entry: o, feedbackKeys: a }), r && r()
                  var u = O(c, o) || 'feedback_unknown',
                    s = T(o),
                    l = m.h(c, o)
                  t.scribe({ component: s, element: u, action: l })
                }
              }),
              v()(u()(e), '_getTombstoneMessage', function () {
                var n,
                  t = e.props.feedbackAction
                return null != t && t.confirmation
                  ? t.confirmation
                  : null != t && null !== (n = t.richBehavior) && void 0 !== n && n.markNotInterestedTopic
                  ? _
                  : R
              }),
              e
            )
          }
          return (
            r()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.behavioralEventContext,
                    t = e.carousel,
                    o = e.conversationPosition,
                    c = e.conversationTreeMetadata,
                    a = e.feedbackAction,
                    r = this._getTombstoneMessage(),
                    i = null == a ? void 0 : a.hasUndoAction
                  return A.createElement(
                    M.a,
                    {
                      actionText: i ? x : void 0,
                      additionalActions: this._getFollowUpOptions(),
                      behavioralEventContext: n,
                      carousel: t,
                      conversationPosition: o,
                      conversationTreeMetadata: c,
                      onClick: i ? this._handleUndo : void 0,
                    },
                    r,
                  )
                },
              },
            ]),
            t
          )
        })(A.Component)
      v()(U, 'defaultProps', { carousel: !1 })
      var I = w(U)
      n.default = I
    },
  },
])
//# sourceMappingURL=WIPED
