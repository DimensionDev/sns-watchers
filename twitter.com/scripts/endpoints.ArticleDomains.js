;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  ['endpoints.ArticleDomains'],
  {
    929643: function _(e) {
      e.exports = {
        queryId: '88Bu08U2ddaVVjKmmXjVYg',
        operationName: 'articleNudgeDomains',
        operationType: 'query',
        metadata: { featureSwitches: [] },
      }
    },
    965660: function _(e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function _default() {
            return a
          },
        })
      var n = r(929643),
        i = r.n(n)
      var a = function a(e) {
        var t = e.apiClient
        e.featureSwitches
        return {
          fetchArticleDomainsGraphQL: function fetchArticleDomainsGraphQL() {
            return t.graphQL(i(), {}).then(function (e) {
              var t
              return null === (t = e.viewer) || void 0 === t ? void 0 : t.article_nudge_domains
            })
          },
        }
      }
    },
  },
])

//# sourceMappingURL=WIPED
