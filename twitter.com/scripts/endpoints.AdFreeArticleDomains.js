;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  ['endpoints.AdFreeArticleDomains'],
  {
    804215: function _(e) {
      e.exports = {
        queryId: 'zwTrX9CtnMvWlBXjsx95RQ',
        operationName: 'adFreeArticleDomains',
        operationType: 'query',
        metadata: { featureSwitches: [] },
      }
    },
    78268: function _(e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function _default() {
            return a
          },
        })
      var n = r(804215),
        i = r.n(n)
      var a = function a(e) {
        var t = e.apiClient
        e.featureSwitches
        return {
          fetchAdFreeArticleDomainsGraphQL: function fetchAdFreeArticleDomainsGraphQL() {
            return t.graphQL(i(), {}).then(function (e) {
              return null == e ? void 0 : e.ad_free_article_domains
            })
          },
        }
      }
    },
  },
])

//# sourceMappingURL=WIPED
