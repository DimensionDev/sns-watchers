;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27, 15],
  {
    '5kR0': function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /(?:%[0-9a-f]{2})/i
      ;(t.default = n), (e.exports = t.default)
    },
    '6sfk': function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = (0, n(a('AYyr')).default)('^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$', 'i')
      ;(t.default = i), (e.exports = t.default)
    },
    '8Y9H': function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('kfbJ')),
        o = n(a('5kR0')),
        l = n(a('Flng')),
        c = (0, i.default)(
          '(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])',
          { validateUrlUnreserved: r.default, validateUrlPctEncoded: o.default, validateUrlSubDelims: l.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
    },
    Flng: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /[!$&'()*+,;=]/i
      ;(t.default = n), (e.exports = t.default)
    },
    H1lm: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('W9cO')),
        o = n(a('vXsr')),
        l = n(a('oAj9')),
        c = (0, i.default)(
          /(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i,
          {
            validateUrlSubDomainSegment: l.default,
            validateUrlDomainSegment: r.default,
            validateUrlDomainTld: o.default,
          },
        )
      ;(t.default = c), (e.exports = t.default)
    },
    IM13: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('8Y9H')),
        o = (0, i.default)(/(#{validateUrlPchar}|\/|\?)*/i, { validateUrlPchar: r.default })
      ;(t.default = o), (e.exports = t.default)
    },
    IbdM: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /(?:[a-z][a-z0-9+\-.]*)/i
      ;(t.default = n), (e.exports = t.default)
    },
    NRlp: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i
      ;(t.default = n), (e.exports = t.default)
    },
    'NoO/': function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('mmgW')),
        o = n(a('eWSo')),
        l = (0, i.default)(
          '(?:#{validateUrlIpv4}|#{validateUrlIpv6})',
          { validateUrlIpv4: r.default, validateUrlIpv6: o.default },
          'i',
        )
      ;(t.default = l), (e.exports = t.default)
    },
    'OVD+': function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('8Y9H')),
        o = (0, i.default)(/(\/#{validateUrlPchar}*)*/i, { validateUrlPchar: r.default })
      ;(t.default = o), (e.exports = t.default)
    },
    QJRq: function (e, t, a) {
      'use strict'
      a.d(t, 's', function () {
        return c
      }),
        a.d(t, 'r', function () {
          return E
        }),
        a.d(t, 'a', function () {
          return s
        }),
        a.d(t, 'd', function () {
          return I
        }),
        a.d(t, 'c', function () {
          return T
        }),
        a.d(t, 'o', function () {
          return u
        }),
        a.d(t, 'l', function () {
          return N
        }),
        a.d(t, 'm', function () {
          return d
        }),
        a.d(t, 'b', function () {
          return _
        }),
        a.d(t, 'e', function () {
          return p
        }),
        a.d(t, 'f', function () {
          return O
        }),
        a.d(t, 'i', function () {
          return b
        }),
        a.d(t, 'j', function () {
          return A
        }),
        a.d(t, 'k', function () {
          return R
        }),
        a.d(t, 'q', function () {
          return f
        }),
        a.d(t, 'n', function () {
          return C
        }),
        a.d(t, 'p', function () {
          return m
        }),
        a.d(t, 'h', function () {
          return S
        }),
        a.d(t, 'g', function () {
          return L
        })
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n,
        i = a('KEM+'),
        r = a.n(i)
      a('yH/f')
      function o(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? o(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : o(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var c = Object.freeze({ IN_COMPLIANCE: 'in_compliance', OUT_OF_COMPLIANCE: 'out_of_compliance' }),
        E = Object.freeze({ PROFILE_COMPLETION: 'profile_completion', ACCOUNT_SECURITY: 'account_security' }),
        s = Object.freeze({
          DISABLED: 'disabled',
          INTAKE_PROGRESS: 'intake_progress',
          LOCKED: 'locked',
          NEW_ACCOUNT: 'new_account',
          NOT_ELIGIBLE: 'not_eligible',
          NOT_STARTED: 'not_started',
          VERIFICATION_DENIED: 'verification_denied',
          VERIFICATION_PENDING: 'verification_pending',
          VERIFIED: 'verified',
        }),
        I = Object.freeze({ IDENTITY_DOCUMENT: 'identity_document', EMAIL: 'email', WEBSITE: 'website' }),
        T = { WEBSITE: 'siteUrl' },
        u = Object.freeze({
          CONCLUSIVE: 'conclusive',
          INCONCLUSIVE: 'inconclusive',
          NOT_STARTED: 'not_started',
          PENDING: 'pending',
        }),
        N = Object.freeze({
          ACTIVISM: 'activism',
          COMPANY: 'brand_company_organization',
          ENTERTAINMENT: 'entertainment',
          GOVERNMENT: 'government',
          INFLUENCER_OTHER: 'influencer_other',
          NEWS: 'news',
          SPORTS: 'sports',
        }),
        d = {
          ARTICLES: 'articleReferenceUrls',
          AUTHOR: 'authorReferenceUrl',
          GOOGLE: 'googleTrendsReferenceUrl',
          HASHTAG: 'hashtagReferenceUrl',
          IMDB: 'imdbReferenceUrl',
          LEADERSHIP: 'leadershipReferenceUrl',
          MAIN: 'mainReferenceUrl',
          NEWS: 'newsReferenceUrls',
          PUBLIC: 'publicReferenceUrl',
          PUBLICATION: 'publicationReferenceUrl',
          STOCK: 'stockReferenceUrl',
          TEAM: 'teamReferenceUrl',
          WIKIPEDIA: 'wikipediaReferenceUrl',
        },
        _ = Object.freeze({ ACTIVIST: 'activist' }),
        p = Object.freeze({ COMPANY: 'company', EXECUTIVE: 'executive' }),
        O = Object.freeze({
          ENTERTAINMENT_COMPANY: 'entertainment_company',
          ENTERTAINMENT_INDIVIDUAL: 'entertainment_individual',
          PRODUCTION: 'production',
        }),
        b = Object.freeze({ CANDIDATE: 'candidate', OFFICE: 'office', OFFICIAL: 'official' }),
        A = Object.freeze({ CONTENT_CREATOR: 'content_creator', INFLUENTIAL_INDIVIDUAL: 'influential_individual' }),
        R = Object.freeze({ FREELANCER: 'freelancer', JOURNALIST: 'journalist', ORGANIZATION: 'organization' }),
        f = Object.freeze({
          SPORTS_INDIVIDUAL: 'sports_individual',
          SPORTS_ENTITY: 'sports_entity',
          GAMING_INDIVIDUAL: 'gaming_individual',
        }),
        C = Object.freeze(l(l(l(l(l(l(l({}, _), p), O), b), A), R), f)),
        m = Object.freeze({
          LANDING_PAGE: 'landing_page',
          NOTABILITY_CATEGORY: 'notability_category_select',
          NOTABILITY_SUBCATEGORY: 'notability_subtype_select',
          NOTABILITY_METHOD: 'notability_qualifications_select',
          NOTABILITY_INPUT: 'notability_qualifications_input',
          AUTHENTICITY_TYPE: 'authenticity_type_select',
          ADD_EMAIL: 'authenticity_add_email',
          ADD_WEBSITE: 'authenticity_add_website',
          ID_UPLOAD: 'authenticity_id_upload',
          REVIEW_SUBMIT: 'review_submit',
          THANK_YOU: 'thank_you',
        }),
        S = Object.freeze({
          ACTIVIST_GOOGLE_TRENDS: 'ACTIVIST_GOOGLE_TRENDS',
          ACTIVIST_LEADERSHIP: 'ACTIVIST_LEADERSHIP',
          ACTIVIST_NEWS: 'ACTIVIST_NEWS',
          ACTIVIST_QUALIFICATIONS: 'ACTIVIST_QUALIFICATIONS',
          ACTIVIST_QUALIFICATIONS_INELIGIBLE: 'ACTIVIST_QUALIFICATIONS_INELIGIBLE',
          ACTIVIST_WIKIPEDIA: 'ACTIVIST_WIKIPEDIA',
          AUTHENTICITY_TYPE_SELECT: 'AUTHENTICITY_TYPE_SELECT',
          COMPANY_GOOGLE_TRENDS: 'COMPANY_GOOGLE_TRENDS',
          COMPANY_INDIVIDUAL_LEADERSHIP: 'COMPANY_INDIVIDUAL_LEADERSHIP',
          COMPANY_INDIVIDUAL_NEWS_REFERENCE: 'COMPANY_INDIVIDUAL_NEWS_REFERENCE',
          COMPANY_INDIVIDUAL_NOTABILITY_METHOD: 'COMPANY_INDIVIDUAL_NOTABILITY_METHOD',
          COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM: 'COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM',
          COMPANY_NEWS_REFERENCE: 'COMPANY_NEWS_REFERENCE',
          COMPANY_NOTABILITY_METHOD: 'COMPANY_NOTABILITY_METHOD',
          COMPANY_STOCK_EXCHANGE: 'COMPANY_STOCK_EXCHANGE',
          COMPANY_SUBCATEGORY: 'COMPANY_SUBCATEGORY',
          COMPANY_WIKIPEDIA: 'COMPANY_WIKIPEDIA',
          CONTENT_CREATOR_GOOGLE_TRENDS: 'CONTENT_CREATOR_GOOGLE_TRENDS',
          CONTENT_CREATOR_NEWS: 'CONTENT_CREATOR_NEWS',
          CONTENT_CREATOR_QUALIFICATIONS: 'CONTENT_CREATOR_QUALIFICATIONS',
          CONTENT_CREATOR_WIKIPEDIA: 'CONTENT_CREATOR_WIKIPEDIA',
          CREATOR_PROFILE: 'CREATOR_PROFILE',
          EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
          ENTERTAINMENT_COMPANY_GOOGLE_TRENDS: 'ENTERTAINMENT_COMPANY_GOOGLE_TRENDS',
          ENTERTAINMENT_COMPANY_NEWS_REFERENCE: 'ENTERTAINMENT_COMPANY_NEWS_REFERENCE',
          ENTERTAINMENT_COMPANY_NOTABILITY_METHOD: 'ENTERTAINMENT_COMPANY_NOTABILITY_METHOD',
          ENTERTAINMENT_COMPANY_STOCK_REFERENCE: 'ENTERTAINMENT_COMPANY_STOCK_REFERENCE',
          ENTERTAINMENT_COMPANY_WIKIPEDIA: 'ENTERTAINMENT_COMPANY_WIKIPEDIA',
          ENTERTAINMENT_INDIVIDUAL_IMDB_URL: 'ENTERTAINMENT_INDIVIDUAL_IMDB_URL',
          ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL: 'ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL',
          ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS: 'ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS',
          ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS: 'ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS',
          ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS: 'ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS',
          ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE: 'ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE',
          ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD:
            'ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD',
          ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE: 'ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE',
          ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA: 'ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA',
          ENTERTAINMENT_QUALIFICATIONS: 'ENTERTAINMENT_QUALIFICATIONS',
          GAMING_INDIVIDUAL_INELIGIBLE: 'GAMING_INDIVIDUAL_INELIGIBLE',
          GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS: 'GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS',
          GAMING_INDIVIDUAL_NOTABILITY_METHOD: 'GAMING_INDIVIDUAL_NOTABILITY_METHOD',
          GAMING_INDIVIDUAL_SCREENNAME_CONFIRM: 'GAMING_INDIVIDUAL_SCREENNAME_CONFIRM',
          GAMING_INDIVIDUAL_TEAM_REFERENCE_URL: 'GAMING_INDIVIDUAL_TEAM_REFERENCE_URL',
          GOVERNMENT_CANDIDATE_LEVEL_CONFIRM: 'GOVERNMENT_CANDIDATE_LEVEL_CONFIRM',
          GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS: 'GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS',
          GOVERNMENT_CANDIDATE_PROFILE_CONFIRM: 'GOVERNMENT_CANDIDATE_PROFILE_CONFIRM',
          GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL: 'GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL',
          GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS: 'GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS',
          GOVERNMENT_OFFICE_PROFILE_CONFIRM: 'GOVERNMENT_OFFICE_PROFILE_CONFIRM',
          GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL: 'GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL',
          GOVERNMENT_OFFICIAL_LEVEL_CONFIRM: 'GOVERNMENT_OFFICIAL_LEVEL_CONFIRM',
          GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS: 'GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS',
          GOVERNMENT_OFFICIAL_PROFILE_CONFIRM: 'GOVERNMENT_OFFICIAL_PROFILE_CONFIRM',
          GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL: 'GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL',
          GOVERNMENT_SUBCATEGORY: 'GOVERNMENT_SUBCATEGORY',
          ID_COUNTRY_SELECT: 'ID_COUNTRY_SELECT',
          ID_TYPE_SELECT: 'ID_TYPE_SELECT',
          INFLUENCER_GOOGLE_TRENDS: 'INFLUENCER_GOOGLE_TRENDS',
          INFLUENCER_NEWS: 'INFLUENCER_NEWS',
          INFLUENCER_QUALIFICATIONS: 'INFLUENCER_QUALIFICATIONS',
          INFLUENCER_QUALIFICATIONS_INELIGIBLE: 'INFLUENCER_QUALIFICATIONS_INELIGIBLE',
          INFLUENCER_SUBCATEGORY: 'INFLUENCER_SUBCATEGORY',
          INFLUENCER_WIKIPEDIA: 'INFLUENCER_WIKIPEDIA',
          INTAKE_LOADING: 'INTAKE_LOADING',
          INTAKE_TYPE_SELECT: 'INTAKE_TYPE_SELECT',
          INTAKE_UPLOAD: 'INTAKE_UPLOAD',
          LANDING_PAGE: 'LANDING_PAGE',
          NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS: 'NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS',
          NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL: 'NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL',
          NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL: 'NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL',
          NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL: 'NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL',
          NEWS_CREDIBILITY_STOCK_REFERENCE_URL: 'NEWS_CREDIBILITY_STOCK_REFERENCE_URL',
          NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL: 'NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL',
          NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS: 'NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS',
          NEWS_JOURNALIST_CRITERIA_CONFIRMATION: 'NEWS_JOURNALIST_CRITERIA_CONFIRMATION',
          NEWS_JOURNALIST_QUALIFICATIONS: 'NEWS_JOURNALIST_QUALIFICATIONS',
          NEWS_JOURNALIST_SCREENNAME_CONFIRMATION: 'NEWS_JOURNALIST_SCREENNAME_CONFIRMATION',
          NEWS_NOTABILITY_CRITERIA_CONFIRMATION: 'NEWS_NOTABILITY_CRITERIA_CONFIRMATION',
          NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS: 'NEWS_ORGANIZATION_CREDIBILITY_ARTICLES_REFERENCE_URLS',
          NEWS_ORGANIZATION_QUALIFICATIONS: 'NEWS_ORGANIZATION_QUALIFICATIONS',
          NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION: 'NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION',
          NEWS_QUALIFICATIONS: 'NEWS_QUALIFICATIONS',
          NOTABILITY_CATEGORY_SELECT: 'NOTABILITY_CATEGORY_SELECT',
          REVIEW_SUBMIT: 'REVIEW_SUBMIT',
          SITE_VERIFICATION: 'SITE_VERIFICATION',
          SPORTS_ENTITY_GOOGLE_TRENDS: 'SPORTS_ENTITY_GOOGLE_TRENDS',
          SPORTS_ENTITY_NEWS_REFERENCE: 'SPORTS_ENTITY_NEWS_REFERENCE',
          SPORTS_ENTITY_NOTABILITY_METHOD: 'SPORTS_ENTITY_NOTABILITY_METHOD',
          SPORTS_ENTITY_STOCK_REFERENCE: 'SPORTS_ENTITY_STOCK_REFERENCE',
          SPORTS_ENTITY_WEBSITE: 'SPORTS_ENTITY_WEBSITE',
          SPORTS_ENTITY_WIKIPEDIA: 'SPORTS_ENTITY_WIKIPEDIA',
          SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS: 'SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS',
          SPORTS_INDIVIDUAL_NOTABILITY_METHOD: 'SPORTS_INDIVIDUAL_NOTABILITY_METHOD',
          SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM: 'SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM',
          SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL: 'SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL',
          SPORTS_SUBCATEGORY: 'SPORTS_SUBCATEGORY',
          TEST_INPUT: 'TEST_INPUT',
          TEST_PIVOT: 'TEST_PIVOT',
          TEST_RADIO: 'TEST_RADIO',
          THANK_YOU: 'THANK_YOU',
          WEBSITE_REFERENCE_CONFIRM_AUTOFILL: 'WEBSITE_REFERENCE_CONFIRM_AUTOFILL',
          WEBSITE_REFERENCE_CONFIRM_PROCEED: 'WEBSITE_REFERENCE_CONFIRM_PROCEED',
        }),
        L = Object.freeze(
          ((n = {}),
          r()(n, S.LANDING_PAGE, { next: S.NOTABILITY_CATEGORY_SELECT, scribeComponent: m.LANDING_PAGE }),
          r()(n, S.NOTABILITY_CATEGORY_SELECT, { next: null, scribeComponent: m.NOTABILITY_CATEGORY }),
          r()(n, S.ACTIVIST_QUALIFICATIONS, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.ACTIVIST_GOOGLE_TRENDS, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.ACTIVIST_LEADERSHIP, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.ACTIVIST_NEWS, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.ACTIVIST_QUALIFICATIONS, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.ACTIVIST_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          r()(n, S.ACTIVIST_WIKIPEDIA, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.COMPANY_SUBCATEGORY, {
            next: S.COMPANY_NOTABILITY_METHOD,
            scribeComponent: m.NOTABILITY_SUBCATEGORY,
          }),
          r()(n, S.COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.COMPANY_WIKIPEDIA, { next: null, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.COMPANY_STOCK_EXCHANGE, { next: null, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.COMPANY_NEWS_REFERENCE, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: S.COMPANY_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          r()(n, S.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.COMPANY_INDIVIDUAL_LEADERSHIP, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.COMPANY_INDIVIDUAL_NEWS_REFERENCE, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.CREATOR_PROFILE, { next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: null }),
          r()(n, S.CONTENT_CREATOR_GOOGLE_TRENDS, { next: S.CREATOR_PROFILE, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.CONTENT_CREATOR_NEWS, { next: S.CREATOR_PROFILE, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.CONTENT_CREATOR_QUALIFICATIONS, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.CONTENT_CREATOR_WIKIPEDIA, { next: S.CREATOR_PROFILE, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.ENTERTAINMENT_COMPANY_STOCK_REFERENCE, { next: null, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.ENTERTAINMENT_COMPANY_WIKIPEDIA, { next: null, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
            next: S.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
            next: S.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS, {
            next: null,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, {
            next: null,
            scribeComponent: m.NOTABILITY_METHOD,
          }),
          r()(n, S.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE, {
            next: null,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA, {
            next: null,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_QUALIFICATIONS, { next: null, scribeComponent: m.NOTABILITY_SUBCATEGORY }),
          r()(n, S.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
            next: S.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          r()(n, S.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
            next: S.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
            next: S.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          r()(n, S.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
            next: S.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
            next: S.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          r()(n, S.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
            next: S.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          r()(n, S.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
            next: S.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
            next: S.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          r()(n, S.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_SUBCATEGORY, { next: null, scribeComponent: m.NOTABILITY_SUBCATEGORY }),
          r()(n, S.INFLUENCER_GOOGLE_TRENDS, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.INFLUENCER_NEWS, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.INFLUENCER_QUALIFICATIONS, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.INFLUENCER_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          r()(n, S.INFLUENCER_SUBCATEGORY, { next: null, scribeComponent: m.NOTABILITY_SUBCATEGORY }),
          r()(n, S.INFLUENCER_WIKIPEDIA, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_CREDIBILITY_STOCK_REFERENCE_URL, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: S.NEWS_NOTABILITY_CRITERIA_CONFIRMATION,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, {
            next: S.NEWS_JOURNALIST_QUALIFICATIONS,
            scribeComponent: null,
          }),
          r()(n, S.NEWS_JOURNALIST_QUALIFICATIONS, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: null }),
          r()(n, S.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION, {
            next: S.NEWS_ORGANIZATION_QUALIFICATIONS,
            scribeComponent: null,
          }),
          r()(n, S.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, {
            next: S.NEWS_JOURNALIST_CRITERIA_CONFIRMATION,
            scribeComponent: null,
          }),
          r()(n, S.NEWS_ORGANIZATION_QUALIFICATIONS, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.NEWS_QUALIFICATIONS, { next: null, scribeComponent: m.NOTABILITY_SUBCATEGORY }),
          r()(n, S.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.GAMING_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: S.GAMING_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          r()(n, S.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.GAMING_INDIVIDUAL_INELIGIBLE, { next: null, scribeComponent: null }),
          r()(n, S.SPORTS_ENTITY_GOOGLE_TRENDS, { next: null, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.SPORTS_ENTITY_NEWS_REFERENCE, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.SPORTS_ENTITY_NOTABILITY_METHOD, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.SPORTS_ENTITY_STOCK_REFERENCE, { next: null, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.SPORTS_ENTITY_WEBSITE, { next: null, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.SPORTS_ENTITY_WIKIPEDIA, { next: null, scribeComponent: m.NOTABILITY_INPUT }),
          r()(n, S.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: m.NOTABILITY_METHOD }),
          r()(n, S.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: S.SPORTS_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          r()(n, S.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: m.NOTABILITY_INPUT,
          }),
          r()(n, S.SPORTS_SUBCATEGORY, { next: null, scribeComponent: m.NOTABILITY_SUBCATEGORY }),
          r()(n, S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, { next: null, scribeComponent: m.ADD_WEBSITE }),
          r()(n, S.WEBSITE_REFERENCE_CONFIRM_PROCEED, { next: S.REVIEW_SUBMIT, scribeComponent: m.ADD_WEBSITE }),
          r()(n, S.AUTHENTICITY_TYPE_SELECT, { next: null, scribeComponent: m.AUTHENTICITY_TYPE }),
          r()(n, S.INTAKE_TYPE_SELECT, { next: S.INTAKE_UPLOAD, scribeComponent: null }),
          r()(n, S.ID_COUNTRY_SELECT, { next: S.INTAKE_TYPE_SELECT, scribeComponent: null }),
          r()(n, S.ID_TYPE_SELECT, { next: S.INTAKE_TYPE_SELECT, scribeComponent: null }),
          r()(n, S.INTAKE_UPLOAD, { next: S.INTAKE_LOADING, scribeComponent: m.ID_UPLOAD }),
          r()(n, S.INTAKE_LOADING, { next: S.REVIEW_SUBMIT, scribeComponent: m.ID_UPLOAD }),
          r()(n, S.EMAIL_VERIFICATION, { next: S.REVIEW_SUBMIT, scribeComponent: m.ADD_EMAIL }),
          r()(n, S.SITE_VERIFICATION, { next: S.WEBSITE_REFERENCE_CONFIRM_PROCEED, scribeComponent: null }),
          r()(n, S.REVIEW_SUBMIT, { next: S.THANK_YOU, scribeComponent: m.REVIEW_SUBMIT }),
          r()(n, S.THANK_YOU, { next: null, scribeComponent: m.THANK_YOU }),
          r()(n, S.TEST_INPUT, { next: S.TEST_RADIO, scribeComponent: null }),
          r()(n, S.TEST_PIVOT, { next: S.THANK_YOU, scribeComponent: null }),
          r()(n, S.TEST_RADIO, { next: S.THANK_YOU, scribeComponent: null }),
          n),
        )
    },
    'Qp/W': function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      a('iKE+'),
        a('KqXw'),
        a('DZ+c'),
        a('WNMA'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, a) {
          null == t && (t = !0)
          null == a && (a = !0)
          if (!e) return !1
          var n = e.match(E.default)
          if (!n || n[0] !== e) return !1
          var T = n[1],
            u = n[2],
            N = n[3],
            d = n[4],
            _ = n[5]
          if (
            !(
              (!a || (I(T, c.default) && T.match(/^https?$/i))) &&
              I(N, o.default) &&
              I(d, l.default, !0) &&
              I(_, r.default, !0)
            )
          )
            return !1
          return (t && I(u, s.default)) || (!t && I(u, i.default))
        })
      var i = n(a('ta7H')),
        r = n(a('kAdf')),
        o = n(a('OVD+')),
        l = n(a('IM13')),
        c = n(a('IbdM')),
        E = n(a('6sfk')),
        s = n(a('b1+5'))
      function I(e, t, a) {
        return a ? !e || (e.match(t) && RegExp['$&'] === e) : 'string' == typeof e && e.match(t) && RegExp['$&'] === e
      }
      e.exports = t.default
    },
    T8pk: function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        i = a.n(n),
        r = a('ERkP'),
        o = a('Lsrn'),
        l = a('k/Ka')
      function c(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(a), !0).forEach(function (t) {
                i()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : c(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var s = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          E(
            E({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          r.createElement(
            'g',
            null,
            r.createElement('path', {
              d: 'M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z',
            }),
            r.createElement('path', {
              d: 'M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z',
            }),
          ),
        )
      }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    Umjq: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /[0-9]{1,5}/
      ;(t.default = n), (e.exports = t.default)
    },
    'W7+t': function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
      ;(t.default = n), (e.exports = t.default)
    },
    W9cO: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i
      ;(t.default = n), (e.exports = t.default)
    },
    Wqil: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('H1lm')),
        o = n(a('NoO/')),
        l = (0, i.default)(
          '(?:#{validateUrlIp}|#{validateUrlDomain})',
          { validateUrlIp: o.default, validateUrlDomain: r.default },
          'i',
        )
      ;(t.default = l), (e.exports = t.default)
    },
    ZyHq: function (e, t, a) {
      'use strict'
      a.d(t, 'm', function () {
        return ae
      }),
        a.d(t, 'n', function () {
          return ne
        }),
        a.d(t, 'o', function () {
          return ie
        }),
        a.d(t, 'p', function () {
          return oe
        }),
        a.d(t, 'q', function () {
          return ce
        }),
        a.d(t, 'r', function () {
          return Ee
        }),
        a.d(t, 't', function () {
          return se
        }),
        a.d(t, 's', function () {
          return Ie
        }),
        a.d(t, 'u', function () {
          return Te
        }),
        a.d(t, 'v', function () {
          return ue
        }),
        a.d(t, 'w', function () {
          return Ne
        }),
        a.d(t, 'x', function () {
          return de
        }),
        a.d(t, 'z', function () {
          return _e
        }),
        a.d(t, 'y', function () {
          return pe
        }),
        a.d(t, 'A', function () {
          return Oe
        }),
        a.d(t, 'B', function () {
          return Ae
        }),
        a.d(t, 'E', function () {
          return Re
        }),
        a.d(t, 'D', function () {
          return fe
        }),
        a.d(t, 'C', function () {
          return Ce
        }),
        a.d(t, 'F', function () {
          return me
        }),
        a.d(t, 'G', function () {
          return Se
        }),
        a.d(t, 'H', function () {
          return Le
        }),
        a.d(t, 'I', function () {
          return ye
        }),
        a.d(t, 'J', function () {
          return he
        }),
        a.d(t, 'L', function () {
          return De
        }),
        a.d(t, 'N', function () {
          return Fe
        }),
        a.d(t, 'M', function () {
          return Ue
        }),
        a.d(t, 'O', function () {
          return ve
        }),
        a.d(t, 'P', function () {
          return Me
        }),
        a.d(t, 'K', function () {
          return Pe
        }),
        a.d(t, 'b', function () {
          return ge
        }),
        a.d(t, 'a', function () {
          return Ge
        }),
        a.d(t, 'c', function () {
          return Ye
        }),
        a.d(t, 'd', function () {
          return xe
        }),
        a.d(t, 'e', function () {
          return Be
        }),
        a.d(t, 'g', function () {
          return Ve
        }),
        a.d(t, 'Q', function () {
          return we
        }),
        a.d(t, 'S', function () {
          return We
        }),
        a.d(t, 'T', function () {
          return ke
        }),
        a.d(t, 'U', function () {
          return je
        }),
        a.d(t, 'k', function () {
          return He
        }),
        a.d(t, 'i', function () {
          return Ke
        }),
        a.d(t, 'l', function () {
          return qe
        }),
        a.d(t, 'f', function () {
          return ze
        }),
        a.d(t, 'X', function () {
          return Qe
        }),
        a.d(t, 'h', function () {
          return $e
        }),
        a.d(t, 'V', function () {
          return Ze
        }),
        a.d(t, 'W', function () {
          return Je
        }),
        a.d(t, 'j', function () {
          return Xe
        }),
        a.d(t, 'Y', function () {
          return et
        }),
        a.d(t, 'Z', function () {
          return tt
        }),
        a.d(t, 'ab', function () {
          return at
        }),
        a.d(t, 'R', function () {
          return nt
        })
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('ddV6'),
        i = a.n(n),
        r = a('RhWx'),
        o = a.n(r),
        l = a('KEM+'),
        c = a.n(l),
        E = (a('yH/f'), a('2G9S'), a('7x/C'), a('DZ+c'), a('jQ3i'), a('x4t0'), a('JtPf'), a('M+/F'), a('oEOe')),
        s = a('iD2S'),
        I = a.n(s),
        T = a('kGix'),
        u = a('Ssj5'),
        N = a('vEo5'),
        d = a('AspN'),
        _ = a('QJRq')
      function p(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(a), !0).forEach(function (t) {
                c()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : p(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var b = 'accountVerification',
        A = 'rweb/accountVerification/APPEND_NOTABILITY_ARTICLE_DATA',
        R = 'rweb/accountVerification/APPEND_NOTABILITY_MAIN_REFERENCE_DATA',
        f = 'rweb/accountVerification/APPEND_NOTABILITY_NEWS_DATA',
        C = 'rweb/accountVerification/APPEND_NOTABILITY_PUBLIC_REFERENCE_DATA',
        m = 'rweb/accountVerification/RESET_AUTHENTICATION_RESULT',
        S = 'rweb/accountVerification/RESET_AUTHENTICITY_DATA',
        L = 'rweb/accountVerification/RESET_AUTHENTICITY_TYPE',
        y = 'rweb/accountVerification/RESET_DOCUMENT_ID_PROCESS',
        h = 'rweb/accountVerification/RESET_FLOW',
        D = 'rweb/accountVerification/RESET_INTAKE_UPLOAD',
        F = 'rweb/accountVerification/RESET_NOTABILITY_CATEGORY',
        U = 'rweb/accountVerification/RESET_NOTABILITY_DATA',
        v = 'rweb/accountVerification/RESET_SUBMIT_VERIFICATION',
        M = 'rweb/accountVerification/SET_AUTHENTICITY_DATA',
        P = 'rweb/accountVerification/SET_AUTHENTICITY_TYPE',
        g = 'rweb/accountVerification/SET_BACK_ID',
        G = 'rweb/accountVerification/SET_FRONT_ID',
        Y = 'rweb/accountVerification/SET_ID_COUNTRY',
        x = 'rweb/accountVerification/SET_ID_TYPE',
        B = 'rweb/accountVerification/SET_NEXT_FLOW',
        V = 'rweb/accountVerification/SET_NOTABILITY_CATEGORY',
        w = 'rweb/accountVerification/SET_NOTABILITY_DATA',
        W = 'rweb/accountVerification/SET_NOTABILITY_SUBCATEGORY',
        k = 'rweb/accountVerification/SET_PREV_FLOW',
        j = 'rweb/accountVerification/TOGGLE_CHECKBOX_CONFIRMATION',
        H = 'rweb/accountVerification/UPDATE_FORM_HISTORY',
        K = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCESS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCESS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCESS_FAILURE',
        }),
        q = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_FAILURE',
        }),
        z = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_FAILURE',
        }),
        Q = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_FAILURE',
        }),
        $ = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_BADGE_VIOLATIONS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_BADGE_VIOLATIONS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_BADGE_VIOLATIONS_FAILURE',
        }),
        Z = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_DOCUMENT_FORMATS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_DOCUMENT_FORMATS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_DOCUMENT_FORMATS_FAILURE',
        }),
        J = Object.freeze({
          REQUEST: 'rweb/accountVerification/VERIFY_ACCOUNT_REQUEST',
          SUCCESS: 'rweb/accountVerification/VERIFY_ACCOUNT_SUCCESS',
          FAILURE: 'rweb/accountVerification/VERIFY_ACCOUNT_FAILURE',
        }),
        X = Object.freeze({
          REQUEST: 'rweb/accountVerification/VERIFY_ID_DOCUMENT_REQUEST',
          SUCCESS: 'rweb/accountVerification/VERIFY_ID_DOCUMENT_SUCCESS',
          FAILURE: 'rweb/accountVerification/VERIFY_ID_DOCUMENT_FAILURE',
        }),
        ee = _.h.LANDING_PAGE,
        te = I()({
          access: {
            data: { applicationSubmissionTimeInMs: void 0, decisionMadeTimeInMs: void 0, status: _.a.DISABLED },
            error: null,
            fetchStatus: T.a.NONE,
          },
          accountEligibility: {
            data: { followers_eligible: !1, mentions_eligible: !1 },
            error: null,
            fetchStatus: T.a.NONE,
          },
          accountViolations: { data: { violations: [] }, error: null, fetchStatus: T.a.NONE },
          authenticationResult: { data: { errors: [], status: void 0 }, error: null, fetchStatus: T.a.NONE },
          badgeViolations: {
            data: {
              button_text: '',
              debadge_timestamp_ms: 0,
              violation_modal_title: '',
              violation_modal_desc: { entities: [], text: '' },
              violations: [],
            },
            error: null,
            fetchStatus: T.a.NONE,
          },
          documentFormats: { data: void 0, error: null, fetchStatus: T.a.NONE },
          documentIdProcess: { data: { errors: [], entity_id: void 0 }, error: null, fetchStatus: T.a.NONE },
          formData: {
            authenticityType: void 0,
            authenticityData: void 0,
            notabilityCategory: void 0,
            notabilityData: void 0,
            notabilitySubcategory: void 0,
          },
          backID: void 0,
          formHistory: {},
          frontID: void 0,
          idCountry: void 0,
          idCountryName: void 0,
          idType: void 0,
          idTypeName: void 0,
          isConfirmed: !1,
          currentStep: ee,
          stepsTaken: [ee],
          surveyUrl: void 0,
          verifyAccount: { error: null, fetchStatus: T.a.NONE },
        })
      u.a.register(
        c()({}, b, function () {
          var e,
            t,
            a,
            n,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te,
            r = arguments.length > 1 ? arguments[1] : void 0
          switch (r.type) {
            case K.REQUEST:
              return O(O({}, i), {}, { access: O(O({}, i.access), {}, { fetchStatus: T.a.LOADING, error: null }) })
            case K.SUCCESS:
              if (r.payload)
                return O(
                  O({}, i),
                  {},
                  {
                    access: {
                      data: O(
                        O({}, i.access.data),
                        {},
                        {
                          applicationSubmissionTimeInMs: r.payload.application_submission_time_in_ms,
                          decisionMadeTimeInMs: r.payload.decision_made_time_in_ms,
                          status: r.payload.status || _.a.DISABLED,
                        },
                      ),
                      error: null,
                      fetchStatus: T.a.LOADED,
                    },
                  },
                )
              break
            case K.FAILURE:
              return O(O({}, i), {}, { access: O(O({}, i.access), {}, { error: r.payload, fetchStatus: T.a.FAILED }) })
            case q.REQUEST:
              return O(
                O({}, i),
                {},
                { accountEligibility: O(O({}, i.accountEligibility), {}, { fetchStatus: T.a.LOADING, error: null }) },
              )
            case q.SUCCESS:
              if (r.payload)
                return O(
                  O({}, i),
                  {},
                  { accountEligibility: { data: O({}, r.payload), error: null, fetchStatus: T.a.LOADED } },
                )
              break
            case q.FAILURE:
              return O(
                O({}, i),
                {},
                {
                  accountEligibility: O(O({}, i.accountEligibility), {}, { error: r.payload, fetchStatus: T.a.FAILED }),
                },
              )
            case z.REQUEST:
              return O(
                O({}, i),
                {},
                { accountViolations: O(O({}, i.accountViolations), {}, { fetchStatus: T.a.LOADING, error: null }) },
              )
            case z.SUCCESS:
              if (r.payload)
                return O(
                  O({}, i),
                  {},
                  { accountViolations: { data: O({}, r.payload), error: null, fetchStatus: T.a.LOADED } },
                )
              break
            case z.FAILURE:
              return O(
                O({}, i),
                {},
                { accountViolations: O(O({}, i.accountViolations), {}, { error: r.payload, fetchStatus: T.a.FAILED }) },
              )
            case Q.REQUEST:
              return O(
                O({}, i),
                {},
                {
                  authenticationResult: O(O({}, i.authenticationResult), {}, { error: null, fetchStatus: T.a.LOADING }),
                },
              )
            case Q.SUCCESS:
              return O(
                O({}, i),
                {},
                {
                  authenticationResult: {
                    data: O(O({}, i.authenticationResult.data), r.payload),
                    error: null,
                    fetchStatus: T.a.LOADED,
                  },
                },
              )
            case Q.FAILURE:
              return O(
                O({}, i),
                {},
                {
                  authenticationResult: O(
                    O({}, i.authenticationResult),
                    {},
                    { error: r.payload, fetchStatus: T.a.FAILED },
                  ),
                },
              )
            case $.REQUEST:
              return O(O({}, i), {}, { badgeViolations: O(O({}, i.badgeViolations), {}, { fetchStatus: T.a.LOADING }) })
            case $.SUCCESS:
              if (r.payload)
                return O(
                  O({}, i),
                  {},
                  { badgeViolations: { data: O({}, r.payload), error: null, fetchStatus: T.a.LOADED } },
                )
              break
            case $.FAILURE:
              return O(
                O({}, i),
                {},
                { badgeViolations: O(O({}, i.badgeViolations), {}, { error: r.payload, fetchStatus: T.a.FAILED }) },
              )
            case Z.REQUEST:
              return O(
                O({}, i),
                {},
                { documentFormats: O(O({}, i.documentFormats), {}, { error: null, fetchStatus: T.a.LOADING }) },
              )
            case Z.SUCCESS:
              if (r.payload)
                return O(
                  O({}, i),
                  {},
                  { documentFormats: { data: O({}, r.payload), error: null, fetchStatus: T.a.LOADED } },
                )
              break
            case Z.FAILURE:
              return O(
                O({}, i),
                {},
                { documentFormats: O(O({}, i.documentFormats), {}, { error: r.payload, fetchStatus: T.a.FAILED }) },
              )
            case J.REQUEST:
              return O(O({}, i), {}, { verifyAccount: { error: null, fetchStatus: T.a.LOADING } })
            case J.SUCCESS:
              var l
              return (
                r.payload && (l = r.payload.survey_url),
                O(O({}, i), {}, { surveyUrl: l, verifyAccount: { error: null, fetchStatus: T.a.LOADED } })
              )
            case J.FAILURE:
              return O(O({}, i), {}, { verifyAccount: { error: r.payload, fetchStatus: T.a.FAILED } })
            case X.REQUEST:
              return O(
                O({}, i),
                {},
                { documentIdProcess: O(O({}, i.documentIdProcess), {}, { error: null, fetchStatus: T.a.LOADING }) },
              )
            case X.SUCCESS:
              return O(
                O({}, i),
                {},
                {
                  documentIdProcess: {
                    data: O(O({}, i.documentIdProcess.data), r.payload),
                    error: null,
                    fetchStatus: T.a.LOADED,
                  },
                },
              )
            case X.FAILURE:
              return O(
                O({}, i),
                {},
                { documentIdProcess: O(O({}, i.documentIdProcess), {}, { error: r.payload, fetchStatus: T.a.FAILED }) },
              )
            case A:
              return O(
                O({}, i),
                {},
                {
                  formData: O(
                    O({}, i.formData),
                    {},
                    {
                      notabilityData: O(
                        O({}, i.formData.notabilityData),
                        {},
                        {
                          articleReferenceUrls:
                            null === (e = r.payload) || void 0 === e ? void 0 : e.articleReferenceUrls,
                        },
                      ),
                    },
                  ),
                },
              )
            case R:
              return O(
                O({}, i),
                {},
                {
                  formData: O(
                    O({}, i.formData),
                    {},
                    {
                      notabilityData: O(
                        O({}, i.formData.notabilityData),
                        {},
                        { mainReferenceUrl: null === (t = r.payload) || void 0 === t ? void 0 : t.mainReferenceUrl },
                      ),
                    },
                  ),
                },
              )
            case f:
              return O(
                O({}, i),
                {},
                {
                  formData: O(
                    O({}, i.formData),
                    {},
                    {
                      notabilityData: O(
                        O({}, i.formData.notabilityData),
                        {},
                        { newsReferenceUrls: null === (a = r.payload) || void 0 === a ? void 0 : a.newsReferenceUrls },
                      ),
                    },
                  ),
                },
              )
            case C:
              return O(
                O({}, i),
                {},
                {
                  formData: O(
                    O({}, i.formData),
                    {},
                    {
                      notabilityData: O(
                        O({}, i.formData.notabilityData),
                        {},
                        {
                          publicReferenceUrl: null === (n = r.payload) || void 0 === n ? void 0 : n.publicReferenceUrl,
                        },
                      ),
                    },
                  ),
                },
              )
            case g:
              return O(O({}, i), {}, { backID: r.payload })
            case G:
              return O(O({}, i), {}, { frontID: r.payload })
            case Y:
              if (r.payload)
                return O(
                  O({}, i),
                  {},
                  {
                    idCountry: r.payload.countryCode,
                    idCountryName: r.payload.countryName,
                    idType: void 0,
                    idTypeName: void 0,
                  },
                )
              break
            case x:
              if (r.payload) return O(O({}, i), {}, { idType: r.payload.idType, idTypeName: r.payload.idTypeName })
              break
            case D:
              return O(O({}, i), {}, { backID: te.backID, frontID: te.frontID, isConfirmed: te.isConfirmed })
            case v:
              var E = it(i.stepsTaken),
                s = E.previousStep,
                I = E.remainingSteps
              return O(
                O({}, i),
                {},
                { currentStep: s, stepsTaken: o()(I), verifyAccount: { error: null, fetchStatus: T.a.NONE } },
              )
            case j:
              return O(O({}, i), {}, { isConfirmed: !i.isConfirmed })
            case y:
              return O(O({}, i), {}, { documentIdProcess: O({}, te.documentIdProcess) })
            case m:
              return O(O({}, i), {}, { authenticationResult: O({}, te.authenticationResult) })
            case B:
              if (r.payload)
                return O(
                  O({}, i),
                  {},
                  { currentStep: r.payload, stepsTaken: [].concat(o()(i.stepsTaken), [r.payload]) },
                )
              break
            case k:
              var u = it(i.stepsTaken),
                N = u.previousStep,
                d = u.remainingSteps
              return O(O({}, i), {}, { currentStep: N, stepsTaken: o()(d) })
            case V:
              return O(O({}, i), {}, { formData: O(O({}, i.formData), {}, { notabilityCategory: r.payload }) })
            case F:
              return O(
                O({}, i),
                {},
                {
                  formData: O(
                    O({}, i.formData),
                    {},
                    {
                      notabilityCategory: te.formData.notabilityCategory,
                      notabilitySubcategory: te.formData.notabilitySubcategory,
                    },
                  ),
                },
              )
            case w:
              return O(O({}, i), {}, { formData: O(O({}, i.formData), {}, { notabilityData: O({}, r.payload) }) })
            case U:
              return O(
                O({}, i),
                {},
                { formData: O(O({}, i.formData), {}, { notabilityData: te.formData.notabilityData }) },
              )
            case W:
              return O(O({}, i), {}, { formData: O(O({}, i.formData), {}, { notabilitySubcategory: r.payload }) })
            case P:
              return O(
                O({}, i),
                {},
                {
                  backID: te.backID,
                  frontID: te.frontID,
                  isConfirmed: te.isConfirmed,
                  idType: te.idType,
                  idTypeName: te.idTypeName,
                  formData: O(
                    O({}, i.formData),
                    {},
                    { authenticityType: r.payload, authenticityData: te.formData.authenticityData },
                  ),
                },
              )
            case L:
              return O(
                O({}, i),
                {},
                { formData: O(O({}, i.formData), {}, { authenticityType: te.formData.authenticityType }) },
              )
            case M:
              return O(O({}, i), {}, { formData: O(O({}, i.formData), {}, { authenticityData: O({}, r.payload) }) })
            case S:
              return O(
                O({}, i),
                {},
                { formData: O(O({}, i.formData), {}, { authenticityData: te.formData.authenticityData }) },
              )
            case H:
              var p = i.currentStep.toString()
              return O(O({}, i), {}, { formHistory: O(O({}, i.formHistory), {}, c()({}, p, O({}, r.payload))) })
            case h:
              return te
            default:
              return i
          }
          return i
        }),
      )
      var ae = function (e) {
          return e[b].access.data
        },
        ne = function (e) {
          return e[b].access.fetchStatus
        },
        ie = function (e) {
          return e[b].accountEligibility.data
        },
        re = function (e) {
          return e[b].accountEligibility.fetchStatus
        },
        oe = function (e) {
          return e[b].accountViolations.data
        },
        le = function (e) {
          return e[b].accountViolations.fetchStatus
        },
        ce = function (e) {
          return e[b].authenticationResult.data.errors || []
        },
        Ee = function (e) {
          return e[b].authenticationResult.data.status
        },
        se = function (e) {
          return e[b].formData.authenticityType
        },
        Ie = function (e) {
          return e[b].formData.authenticityData
        },
        Te = function (e) {
          return e[b].backID
        },
        ue = function (e) {
          return e[b].badgeViolations.data
        },
        Ne = function (e) {
          return e[b].badgeViolations.fetchStatus
        },
        de = function (e) {
          return e[b].isConfirmed
        },
        _e = function (e) {
          return e[b].currentStep
        },
        pe = function (e) {
          var t = _e(e)
          return e[b].formHistory[t] || void 0
        },
        Oe = function (e) {
          return e[b].documentFormats.data
        },
        be = function (e) {
          return e[b].documentFormats.fetchStatus
        },
        Ae = function (e) {
          return e[b].documentIdProcess.data.entity_id
        },
        Re = function (e) {
          return e[b].documentIdProcess.error
        },
        fe = function (e) {
          return e[b].documentIdProcess.fetchStatus
        },
        Ce = function (e) {
          return e[b].documentIdProcess.data.errors || []
        },
        me = function (e) {
          return e[b].frontID
        },
        Se = function (e) {
          return e[b].idCountry
        },
        Le = function (e) {
          return e[b].idCountryName
        },
        ye = function (e) {
          return e[b].idType
        },
        he = function (e) {
          return e[b].idTypeName
        },
        De = function (e) {
          return e[b].formData.notabilityCategory
        },
        Fe = function (e) {
          var t = e[b].formData,
            a = t.notabilityCategory,
            n = t.notabilityData,
            i = t.notabilitySubcategory
          switch (a) {
            case _.l.NEWS:
              return null == n ? void 0 : n.newsType
            default:
              return i
          }
        },
        Ue = function (e) {
          return e[b].formData.notabilityData
        },
        ve = function (e) {
          return e[b].surveyUrl
        },
        Me = function (e) {
          return e[b].verifyAccount.fetchStatus
        },
        Pe = function (e) {
          var t = ne(e),
            a = re(e),
            n = le(e),
            i = Object(N.selectFetchStatus)(e),
            r = be(e)
          return [t, a, n, i, r].includes(T.a.FAILED)
            ? T.a.FAILED
            : (function (e) {
                return e.includes(T.a.LOADING)
              })([t, a, n, i, r])
            ? T.a.LOADING
            : T.a.LOADED
        },
        ge = function () {
          return function (e, t, a) {
            a.api
            var n = t(),
              i = ne(n)
            return i !== T.a.LOADING && i !== T.a.LOADED ? e(Ge()) : Promise.resolve()
          }
        },
        Ge = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(E.b)(e, { request: n.AccountVerification.fetchAccess })({
              actionTypes: K,
              context: 'FETCH_ACCESS',
            })
          }
        },
        Ye = function () {
          return function (e, t, a) {
            a.api
            var n = t(),
              i = re(n)
            return i !== T.a.LOADING && i !== T.a.LOADED
              ? e(function (e, t, a) {
                  var n = a.api
                  return Object(E.b)(e, { request: n.AccountVerification.fetchAccountEligibility })({
                    actionTypes: q,
                    context: 'FETCH_ACCOUNT_ELIGIBILITY',
                  })
                })
              : Promise.resolve()
          }
        },
        xe = function () {
          return function (e, t, a) {
            a.api
            var n = t(),
              i = le(n)
            return i !== T.a.LOADING && i !== T.a.LOADED
              ? e(function (e, t, a) {
                  var n = a.api
                  return Object(E.b)(e, { request: n.AccountVerification.fetchAccountViolations })({
                    actionTypes: z,
                    context: 'FETCH_ACCOUNT_VIOLATIONS',
                  })
                })
              : Promise.resolve()
          }
        },
        Be = function () {
          return function (e, t, a) {
            a.api
            return (function (e) {
              return e[b].authenticationResult.fetchStatus
            })(t()) !== T.a.LOADING
              ? e(function (e, t, a) {
                  var n = a.api
                  return Object(E.b)(e, { request: n.AccountVerification.fetchAuthenticationResult })({
                    actionTypes: Q,
                    context: 'FETCH_AUTHENTICATION_RESULT',
                  })
                })
              : Promise.resolve()
          }
        },
        Ve = function () {
          return function (e, t, a) {
            a.api
            var n = t(),
              i = be(n)
            return i !== T.a.LOADING && i !== T.a.LOADED
              ? e(function (e, t, a) {
                  var n = a.api
                  return Object(E.b)(e, { request: n.AccountVerification.fetchDocumentFormats })({
                    actionTypes: Z,
                    context: 'FETCH_DOCUMENT_FORMATS',
                  })
                })
              : Promise.resolve()
          }
        },
        we = function (e) {
          return function (t, a, n) {
            n.api
            t({ type: g, payload: e })
          }
        },
        We = function (e) {
          return function (t, a, n) {
            n.api
            t({ type: G, payload: e })
          }
        },
        ke = function (e, t) {
          return function (a, n, i) {
            i.api
            a({ type: Y, payload: { countryCode: e, countryName: t } })
          }
        },
        je = function (e, t) {
          return function (a, n, i) {
            i.api
            a({ type: x, payload: { idType: e, idTypeName: t } })
          }
        },
        He = function () {
          return function (e, t, a) {
            a.api
            e({ type: D })
          }
        },
        Ke = function () {
          return function (e, t, a) {
            a.api
            e({ type: y })
          }
        },
        qe = function () {
          return function (e, t, a) {
            a.api
            e({ type: v })
          }
        },
        ze = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(E.b)(e, { request: n.AccountVerification.fetchBadgeViolations })({
              actionTypes: $,
              context: 'FETCH_BADGE_VIOLATIONS',
            })
          }
        },
        Qe = function () {
          return function (e, t, a) {
            a.api
            e({ type: j })
          }
        },
        $e = function () {
          return function (e, t, a) {
            a.api
            e({ type: m })
          }
        },
        Ze = function (e) {
          return function (t, a, n) {
            n.api
            t({ payload: e || _.g[_e(a())].next, type: B })
          }
        },
        Je = function () {
          return function (e, t, a) {
            a.api
            e({ type: k })
          }
        },
        Xe = function () {
          return function (e, t, a) {
            a.api
            e({ type: h })
          }
        },
        et = function (e) {
          return function (t, a, n) {
            n.api
            t({ payload: 'string' == typeof e ? { radioData: e } : { inputData: e }, type: H })
          }
        },
        tt = function () {
          return function (e, t, a) {
            var n,
              i,
              r = a.api,
              o = t(),
              l = se(o) || void 0,
              c = Ie(o) || void 0,
              s = De(o) || void 0,
              I = Ue(o) || {},
              T = Fe(o) || void 0,
              u = T && s !== _.l.NEWS,
              N = { authenticity_type: l }
            null != c &&
              c.siteUrl &&
              (N = O(O({}, N), {}, { site_url: null == c || null === (n = c.siteUrl) || void 0 === n ? void 0 : n[0] }))
            null != c &&
              c.email &&
              (N = O(
                O({}, N),
                {},
                { verified_email: null == c || null === (i = c.email) || void 0 === i ? void 0 : i[0] },
              ))
            var d,
              p,
              b,
              A,
              R,
              f,
              C,
              m,
              S,
              L,
              y,
              h = { category: s }
            ;(u && (h = O(O({}, h), {}, { notability_subcategory: T })),
            null != I &&
              I.articleReferenceUrls &&
              (h = O(O({}, h), {}, { article_reference_urls: null == I ? void 0 : I.articleReferenceUrls })),
            null != I && I.authorReferenceUrl) &&
              (h = O(
                O({}, h),
                {},
                {
                  author_reference_url:
                    null == I || null === (d = I.authorReferenceUrl) || void 0 === d ? void 0 : d[0],
                },
              ))
            null != I &&
              I.googleTrendsReferenceUrl &&
              (h = O(
                O({}, h),
                {},
                {
                  google_trends_reference_url:
                    null == I || null === (p = I.googleTrendsReferenceUrl) || void 0 === p ? void 0 : p[0],
                },
              ))
            null != I &&
              I.hashtagReferenceUrl &&
              (h = O(
                O({}, h),
                {},
                {
                  hashtag_reference_url:
                    null == I || null === (b = I.hashtagReferenceUrl) || void 0 === b ? void 0 : b[0],
                },
              ))
            null != I &&
              I.imdbReferenceUrl &&
              (h = O(
                O({}, h),
                {},
                { imdb_reference_url: null == I || null === (A = I.imdbReferenceUrl) || void 0 === A ? void 0 : A[0] },
              ))
            null != I &&
              I.leadershipReferenceUrl &&
              (h = O(
                O({}, h),
                {},
                {
                  leadership_reference_url:
                    null == I || null === (R = I.leadershipReferenceUrl) || void 0 === R ? void 0 : R[0],
                },
              ))
            null != I &&
              I.mainReferenceUrl &&
              (h = O(
                O({}, h),
                {},
                { main_reference_url: null == I || null === (f = I.mainReferenceUrl) || void 0 === f ? void 0 : f[0] },
              ))
            ;(null != I &&
              I.newsReferenceUrls &&
              (h = O(O({}, h), {}, { news_reference_urls: null == I ? void 0 : I.newsReferenceUrls })),
            null != I && I.newsType && (h = O(O({}, h), {}, { news_type: null == I ? void 0 : I.newsType })),
            null != I && I.publicReferenceUrl) &&
              (h = O(
                O({}, h),
                {},
                {
                  public_reference_url:
                    null == I || null === (C = I.publicReferenceUrl) || void 0 === C ? void 0 : C[0],
                },
              ))
            null != I &&
              I.publicationReferenceUrl &&
              (h = O(
                O({}, h),
                {},
                {
                  publication_reference_url:
                    null == I || null === (m = I.publicationReferenceUrl) || void 0 === m ? void 0 : m[0],
                },
              ))
            null != I &&
              I.stockReferenceUrl &&
              (h = O(
                O({}, h),
                {},
                {
                  stock_reference_url: null == I || null === (S = I.stockReferenceUrl) || void 0 === S ? void 0 : S[0],
                },
              ))
            null != I &&
              I.teamReferenceUrl &&
              (h = O(
                O({}, h),
                {},
                { team_reference_url: null == I || null === (L = I.teamReferenceUrl) || void 0 === L ? void 0 : L[0] },
              ))
            null != I &&
              I.wikipediaReferenceUrl &&
              (h = O(
                O({}, h),
                {},
                {
                  wikipedia_reference_url:
                    null == I || null === (y = I.wikipediaReferenceUrl) || void 0 === y ? void 0 : y[0],
                },
              ))
            var D = { authenticity_claim: N, notability_claim: h }
            return Object(E.b)(e, { params: D, request: r.AccountVerification.verifyAccount })({
              actionTypes: J,
              context: 'VERIFY_ACCOUNT',
            })
          }
        },
        at = function () {
          return function (e, t, a) {
            var n,
              r,
              o = a.api,
              l = t(),
              c = Te(l),
              s = me(l),
              I = ye(l),
              T = Se(l)
            if (c) {
              var u,
                N = Object(d.k)(l, c),
                _ = i()(N, 1)[0]
              r = null == _ || null === (u = _.originalMediaFile) || void 0 === u ? void 0 : u.fileHandle
            }
            if (s) {
              var p,
                O = Object(d.k)(l, s),
                b = i()(O, 1)[0]
              n = null == b || null === (p = b.originalMediaFile) || void 0 === p ? void 0 : p.fileHandle
            }
            var A = { backImage: r, country: T, frontImage: n, idType: I }
            return Object(E.b)(e, { params: A, request: o.AccountVerification.verifyIdDocument })({
              actionTypes: X,
              context: 'VERIFY_ID_DOCUMENT',
            })
          }
        },
        nt = function (e, t) {
          return function (a, n, i) {
            i.api
            var r,
              o = n(),
              l = null === (r = Ue(o)) || void 0 === r ? void 0 : r.newsType,
              c = ie(o),
              E = c.followers_eligible,
              s = c.mentions_eligible
            switch (e) {
              case _.h.NOTABILITY_CATEGORY_SELECT:
                a({ payload: t, type: V })
                break
              case _.h.COMPANY_SUBCATEGORY:
              case _.h.ENTERTAINMENT_QUALIFICATIONS:
              case _.h.GOVERNMENT_SUBCATEGORY:
              case _.h.INFLUENCER_SUBCATEGORY:
              case _.h.SPORTS_SUBCATEGORY:
                a({ payload: t, type: W })
                break
              case _.h.NEWS_QUALIFICATIONS:
                a({ payload: { newsType: t }, type: w })
                break
              case _.h.ACTIVIST_QUALIFICATIONS:
                a({ payload: _.b.ACTIVIST, type: W })
                break
              case _.h.ACTIVIST_GOOGLE_TRENDS:
              case _.h.ACTIVIST_LEADERSHIP:
              case _.h.ACTIVIST_NEWS:
              case _.h.ACTIVIST_WIKIPEDIA:
              case _.h.COMPANY_GOOGLE_TRENDS:
              case _.h.COMPANY_INDIVIDUAL_LEADERSHIP:
              case _.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE:
              case _.h.COMPANY_STOCK_EXCHANGE:
              case _.h.COMPANY_WIKIPEDIA:
              case _.h.CONTENT_CREATOR_GOOGLE_TRENDS:
              case _.h.CONTENT_CREATOR_NEWS:
              case _.h.CONTENT_CREATOR_WIKIPEDIA:
              case _.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS:
              case _.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE:
              case _.h.ENTERTAINMENT_COMPANY_WIKIPEDIA:
              case _.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL:
              case _.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS:
              case _.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS:
              case _.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE:
              case _.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA:
              case _.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS:
              case _.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL:
              case _.h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS:
              case _.h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS:
              case _.h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS:
              case _.h.INFLUENCER_GOOGLE_TRENDS:
              case _.h.INFLUENCER_NEWS:
              case _.h.INFLUENCER_WIKIPEDIA:
              case _.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS:
              case _.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL:
              case _.h.SPORTS_ENTITY_GOOGLE_TRENDS:
              case _.h.SPORTS_ENTITY_STOCK_REFERENCE:
              case _.h.SPORTS_ENTITY_WEBSITE:
              case _.h.SPORTS_ENTITY_WIKIPEDIA:
                a({ payload: t, type: w })
                break
              case _.h.COMPANY_NEWS_REFERENCE:
              case _.h.SPORTS_ENTITY_NEWS_REFERENCE:
                a(E ? { payload: t, type: w } : { payload: t, type: f })
                break
              case _.h.CREATOR_PROFILE:
              case _.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL:
                a({ payload: t, type: R })
                break
              case _.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE:
              case _.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE:
                a(E || s ? { payload: t, type: w } : { payload: t, type: f })
                break
              case _.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL:
              case _.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL:
              case _.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL:
                a({ payload: t, type: C })
                break
              case _.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS:
              case _.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL:
              case _.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL:
              case _.h.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL:
              case _.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL:
              case _.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL:
              case _.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                a({ payload: O(O({}, t), {}, { newsType: l }), type: w })
                break
              case _.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                a(E || s ? { payload: O(O({}, t), {}, { newsType: l }), type: w } : { payload: O({}, t), type: A })
                break
              case _.h.AUTHENTICITY_TYPE_SELECT:
                a({ payload: t, type: P })
                break
              case _.h.EMAIL_VERIFICATION:
                a({ payload: { email: [t] }, type: M })
                break
              case _.h.SITE_VERIFICATION:
                a({ payload: t, type: M })
                break
              default:
                return
            }
          }
        },
        it = function e(t) {
          var a = t.slice(-2),
            n = i()(a, 1)[0],
            r = void 0 === n ? ee : n,
            l = [ee].concat(o()(t.slice(1, -1)))
          return r === _.h.INTAKE_LOADING ? e(l) : { previousStep: r, remainingSteps: l }
        }
    },
    'b1+5': function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('fl4i')),
        o = n(a('ccgC')),
        l = n(a('Umjq')),
        c = (0, i.default)(
          '(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?',
          { validateUrlUserinfo: r.default, validateUrlUnicodeHost: o.default, validateUrlPort: l.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
    },
    ccgC: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('NoO/')),
        o = n(a('je27')),
        l = (0, i.default)(
          '(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})',
          { validateUrlIp: r.default, validateUrlUnicodeDomain: o.default },
          'i',
        )
      ;(t.default = l), (e.exports = t.default)
    },
    eWSo: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /(?:\[[a-f0-9:\.]+\])/i
      ;(t.default = n), (e.exports = t.default)
    },
    fl4i: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('kfbJ')),
        o = n(a('5kR0')),
        l = n(a('Flng')),
        c = (0, i.default)(
          '(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*',
          { validateUrlUnreserved: r.default, validateUrlPctEncoded: o.default, validateUrlSubDelims: l.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
    },
    iD2S: function (e, t) {
      e.exports = function e(t) {
        return (
          Object.freeze(t),
          Object.getOwnPropertyNames(t).forEach(function (a) {
            !t.hasOwnProperty(a) ||
              null === t[a] ||
              ('object' != typeof t[a] && 'function' != typeof t[a]) ||
              Object.isFrozen(t[a]) ||
              e(t[a])
          }),
          t
        )
      }
    },
    iQBX: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'renderNullHeader', function () {
          return mE
        }),
        a.d(t, 'AccountVerification', function () {
          return SE
        })
      a('OZaJ'), a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n,
        i = a('97Jx'),
        r = a.n(i),
        o = a('VrFO'),
        l = a.n(o),
        c = a('Y9Ll'),
        E = a.n(c),
        s = a('1Pcy'),
        I = a.n(s),
        T = a('5Yy7'),
        u = a.n(T),
        N = a('N+ot'),
        d = a.n(N),
        _ = a('AuHH'),
        p = a.n(_),
        O = a('KEM+'),
        b = a.n(O),
        A =
          (a('2G9S'),
          a('5BYb'),
          a('JtPf'),
          a('7x/C'),
          a('87if'),
          a('lTEL'),
          a('kYxP'),
          a('ho0z'),
          a('uFXj'),
          a('ERkP')),
        R = (a('hBpG'), a('jQ/y'), a('3XMw')),
        f = a.n(R),
        C = a('cmUU'),
        m = a('fs1G'),
        S = a('aITJ'),
        L = a('QJRq'),
        y = f.a.d4f88600,
        h = f.a.b192ccad,
        D = f.a.a0487504,
        F = f.a.fff7d93c,
        U = f.a.g969bfad,
        v = f.a.gb2f35e4,
        M = S.b.isTwitterApp()
          ? { external: !0, pathname: 'twitter://settings/account', openInSameFrame: !0 }
          : { pathname: '/settings/account', openInSameFrame: !0 },
        P = S.b.isTwitterApp()
          ? { external: !0, pathname: 'twitter://profiles/edit', openInSameFrame: !0 }
          : { external: !0, pathname: '/settings/profile', openInSameFrame: !0 },
        g = function (e) {
          var t,
            a = e.accountViolations,
            n = [L.r.PROFILE_COMPLETION, L.r.ACCOUNT_SECURITY],
            i =
              ((t = {}),
              b()(t, L.r.PROFILE_COMPLETION, { actionLink: P, buttonText: F, description: v, title: U }),
              b()(t, L.r.ACCOUNT_SECURITY, { actionLink: M, buttonText: y, description: D, title: h }),
              t),
            r = n.find(function (e) {
              var t
              return null === (t = a.violations) || void 0 === t
                ? void 0
                : t.some(function (t) {
                    return t.violation_category === e && t.violation_status === L.s.OUT_OF_COMPLIANCE
                  })
            })
          if (void 0 === r) throw new Error('cannot render Account violations without valid violations')
          var o = i[r],
            l = o.actionLink,
            c = o.buttonText,
            E = o.description,
            s = o.title
          return A.createElement(C.a, {
            actionLabel: c,
            actionLink: l,
            graphicDisplayMode: 'none',
            headline: s,
            onAction: m.a,
            onClose: m.a,
            subtext: E,
            withCloseButton: !1,
          })
        },
        G = a('ddV6'),
        Y = a.n(G),
        x = (a('Ysgh'), a('KqXw'), a('z84I'), a('MvUL'), a('7xRU'), a('iKE+'), a('DZ+c'), a('+/5o')),
        B = a('rHpw'),
        V = B.a.create(function (e) {
          return {
            root: {
              height: 'calc(600px - '.concat(e.componentDimensions.appBarHeight, ')'),
              paddingBottom: e.spaces.space48,
            },
            rootNoAppBar: { height: 600, paddingBottom: e.spaces.space48 },
            appBarOffset: { marginTop: 'calc(-0.5 * '.concat(e.componentDimensions.appBarHeight, ')') },
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            buttonFixed: { marginTop: e.spaces.space16, marginBottom: e.borderWidths.medium },
            buttonPadded: { marginTop: e.spaces.space32, marginBottom: e.borderWidths.medium },
            checkbox: { alignItems: 'flex-start' },
            checkboxContainer: {
              flexDirection: 'row-reverse',
              flexWrap: 'nowrap',
              paddingRight: 'calc('.concat(e.spaces.space12, ' + ').concat(e.borderWidths.medium, ')'),
            },
            checkboxText: { flexShrink: 1, marginRight: e.spaces.space8 },
            container: { flex: 1, marginHorizontal: 'calc(2 * '.concat(e.spaces.space48, ')') },
            contentContainer: { paddingVertical: e.spaces.space16 },
            fixedContainer: { flexGrow: 0 },
            header: { paddingVertical: e.spaces.space12 },
            largeBannerContainer: { flex: 1 },
            listItem: {
              justifyContent: 'space-between',
              minHeight: 'calc('
                .concat(B.a.theme.lineHeights.headline1, ' + 2 * ')
                .concat(e.componentDimensions.gutterVertical, ')'),
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            narrowContainer: { marginHorizontal: e.spaces.space16 },
            scrollableContainer: { flex: '1 1 0', overflowY: 'auto' },
            subheading: { paddingTop: e.spaces.space24 },
            subtext: { paddingTop: e.spaces.space4 },
            text: { paddingTop: e.spaces.space12 },
            topPaddingSmall: { paddingTop: e.spaces.space4 },
            verticalCenter: { justifyContent: 'center' },
          }
        }),
        w = a('MWbm'),
        W = a('t62R'),
        k = a('/yvb'),
        j = a('w6IS'),
        H = a('tn7R'),
        K = f.a.j24c37b2,
        q = f.a.c1df579e,
        z = f.a.ge483f9e,
        Q = f.a.be03ecca,
        $ = f.a.a411926a,
        Z = f.a.c69a40de,
        J = f.a.c83a1661,
        X = {
          '10minutemail': [''],
          aol: ['aol.com'],
          gmail: ['googlemail.com', 'gmail.com'],
          gmx: ['gmx.com'],
          icloud: ['icloud.com', 'me.com', 'mac.com'],
          'mail.com': ['mail.com'],
          outlook: ['outlook.com'],
          protonmail: ['protonmail.com', 'pm.me'],
          sendinblue: ['sendinblue.com'],
          tutanota: ['tutanota.com'],
          yahoo: ['yahoo.com'],
          yandex: ['yandex.com'],
          zoho: ['zoho.com'],
        },
        ee = function (e) {
          var t,
            a,
            n = e.accountSettingsLink,
            i = e.email,
            r = e.handleOnClickInvalid,
            o = e.handleOnClickValid,
            l = e.isNarrow,
            c = 0 === i.length
          if (
            c ||
            (function (e) {
              var t = e.split('@'),
                a = Y()(t, 2)[1],
                n = Object(j.a)(Object(H.a)(X))
                  .filter(function (e) {
                    return e
                  })
                  .map(function (e) {
                    return e.replace('.', '\\.')
                  }),
                i = ''.concat(n.join('|'))
              return new RegExp(i, 'i').test(a)
            })(i)
          ) {
            var E = c ? Z : J,
              s = c
                ? (function (e) {
                    return A.createElement(
                      f.a.I18NFormatMessage,
                      { $i18n: 'jf9308af' },
                      A.createElement(W.b, { link: e }, f.a.e1e878ed),
                    )
                  })(n)
                : (function (e) {
                    return A.createElement(
                      f.a.I18NFormatMessage,
                      { $i18n: 'e9976a40' },
                      A.createElement(W.b, { link: e }, f.a.ced76119),
                    )
                  })(n)
            return A.createElement(C.a, {
              actionLabel: K,
              graphicDisplayMode: 'none',
              headline: E,
              onAction: r,
              onClose: m.a,
              subtext: s,
              withCloseButton: !1,
            })
          }
          return A.createElement(
            w.a,
            { style: [V.container, l && V.narrowContainer] },
            A.createElement(
              W.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: x.b,
                size: 'title4',
                style: V.header,
                weight: 'heavy',
              },
              $,
            ),
            A.createElement(
              w.a,
              { style: V.scrollableContainer },
              A.createElement(W.b, { color: 'gray700' }, z),
              ((a = Q), A.createElement(W.b, { size: 'subtext2', style: V.subheading, weight: 'heavy' }, a)),
              ((t = i), A.createElement(W.b, { style: V.subtext }, t)),
            ),
            A.createElement(k.a, { onClick: o, style: V.buttonFixed, type: 'brandFilled' }, q),
          )
        },
        te = a('kGix'),
        ae = a('v//M'),
        ne = a('jHSc'),
        ie = (a('yH/f'), a.p + 'verification-form-start.2817b0c5.png'),
        re = a.p + 'verification-form-start-large.7e335815.png',
        oe = a.p + 'verification-form-loading.5bb26665.png',
        le = a.p + 'verification-form-loading-large.801f2ee5.png',
        ce = a.p + 'verification-form-sent.ac5bd485.png',
        Ee = a.p + 'verification-form-sent-large.555a7815.png',
        se = a('TIdA'),
        Ie = a('A91F'),
        Te = 600,
        ue = 1200,
        Ne = Object.freeze({ START: 'start', LOADING: 'loading', SENT: 'sent' }),
        de =
          ((n = {}),
          b()(n, Ne.START, {
            aspectRatio: 2,
            default: ie,
            variants: [
              { uri: ie, width: Te, height: 300 },
              { uri: re, width: ue, height: 600 },
            ],
          }),
          b()(n, Ne.LOADING, {
            aspectRatio: 1.5,
            default: oe,
            variants: [
              { uri: oe, width: Te, height: 400 },
              { uri: le, width: ue, height: 800 },
            ],
          }),
          b()(n, Ne.SENT, {
            aspectRatio: 2,
            default: ce,
            variants: [
              { uri: ce, width: Te, height: 300 },
              { uri: Ee, width: ue, height: 600 },
            ],
          }),
          n),
        _e = B.a.create(function () {
          return { narrowBanner: { flex: 1 } }
        }),
        pe = function (e) {
          var t = e.isNarrow,
            a = e.type,
            n = de[a],
            i = A.createElement(se.a, {
              accessibilityLabel: '',
              aspectMode: t ? Ie.a.COVER : Ie.a.exact(n.aspectRatio),
              customVariants: n.variants,
              image: n.default,
            })
          return t ? A.createElement(w.a, { style: _e.narrowBanner }, i) : i
        },
        Oe = f.a.j163be32,
        be = f.a.gaf821c8,
        Ae = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'e5b4cc43' },
          A.createElement(
            W.b,
            { link: 'https://help.twitter.com/managing-your-account/twitter-verified-accounts' },
            f.a.e1ac0f9a,
          ),
        ),
        Re = function (e) {
          var t = e.handleOnClick,
            a = e.isNarrow
          return A.createElement(
            w.a,
            { style: V.largeBannerContainer },
            A.createElement(pe, { isNarrow: a, type: Ne.START }),
            A.createElement(
              w.a,
              { style: [V.container, V.verticalCenter, a && V.narrowContainer] },
              A.createElement(
                W.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: x.b,
                  size: 'title4',
                  style: V.header,
                  weight: 'heavy',
                },
                be,
              ),
              A.createElement(W.b, { color: 'gray700' }, Ae),
              A.createElement(k.a, { onClick: t, style: V.buttonPadded, type: 'brandFilled' }, Oe),
            ),
          )
        },
        fe = (a('tQbP'), a('WNMA'), a('rxPX')),
        Ce = a('ZyHq'),
        me = Object(fe.a)()
          .propsFromState(function () {
            return { documentFormats: Ce.A, idCountry: Ce.G, idType: Ce.I }
          })
          .propsFromActions(function () {
            return { setNextFlow: Ce.V }
          })
          .withAnalytics(),
        Se = Object(fe.a)().propsFromActions(function () {
          return { setNextFlow: Ce.V }
        }),
        Le = a('iySH'),
        ye = a('htQn'),
        he = B.a.create(function (e) {
          return {
            contentContainer: { alignItems: 'center', flexDirection: 'row', flexGrow: 1 },
            content: { flexGrow: 1, flexShrink: 1 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space12, flexShrink: 0 },
          }
        }),
        De = Se(function (e) {
          var t = e.button,
            a = void 0 === t ? null : t,
            n = e.description,
            i = e.isNarrow,
            r = e.items,
            o = e.setNextFlow,
            l = e.title
          return A.createElement(
            w.a,
            { style: [V.container, i && V.narrowContainer] },
            A.createElement(
              W.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: x.b,
                size: 'title4',
                style: V.header,
                weight: 'heavy',
              },
              l,
            ),
            A.createElement(
              w.a,
              { style: V.scrollableContainer },
              n && A.createElement(W.b, { color: 'gray700' }, n),
              A.createElement(
                w.a,
                { accessibilityLabelledBy: x.b, accessibilityRole: 'group', style: V.contentContainer },
                r.map(function (e, t) {
                  var a = e.description,
                    n = e.disabled,
                    i = void 0 !== n && n,
                    r = e.label,
                    c = e.nextStep
                  return A.createElement(
                    ye.a,
                    {
                      disabled: i,
                      key: ''.concat(l, '-pivot-').concat(t),
                      onClick: function () {
                        !(function (e) {
                          o(e)
                        })(c)
                      },
                      style: [V.listItem, V.bottomBorder],
                      withInteractiveStyling: !0,
                    },
                    A.createElement(
                      w.a,
                      { style: he.contentContainer },
                      A.createElement(
                        w.a,
                        { style: he.content },
                        A.createElement(W.b, null, r),
                        a && A.createElement(W.b, { color: 'gray700', size: 'subtext2' }, a),
                      ),
                      A.createElement(Le.a, { style: he.icon }),
                    ),
                  )
                }),
              ),
            ),
            a,
          )
        }),
        Fe = f.a.e43425fa,
        Ue = f.a.e43672a0,
        ve = f.a.b246aa5d,
        Me = f.a.d6fb5877,
        Pe = f.a.b72f97cc,
        ge = f.a.b2ab6008,
        Ge = f.a.c1df579e,
        Ye = function (e, t) {
          return e && t ? e[t].country : Me
        },
        xe = function (e, t, a) {
          return e && t && a ? e[t].id_types[a].name : ge
        },
        Be = me(function (e) {
          var t = e.documentFormats,
            a = e.idCountry,
            n = e.idType,
            i = e.isNarrow,
            r = e.setNextFlow
          return A.createElement(De, {
            button: A.createElement(
              k.a,
              {
                disabled: !(a && n),
                onClick: function () {
                  return r()
                },
                style: V.buttonFixed,
                type: 'brandFilled',
              },
              Ge,
            ),
            description: Ue,
            isNarrow: i,
            items: [
              { description: Ye(t, a), label: ve, nextStep: L.h.ID_COUNTRY_SELECT },
              { description: xe(t, a, n), disabled: !a, label: Pe, nextStep: L.h.ID_TYPE_SELECT },
            ],
            title: Fe,
          })
        }),
        Ve = a('1byD'),
        we = a('6OUF'),
        We = f.a.h9270b1b,
        ke = function (e) {
          var t = e.documentFormats,
            a = e.isNarrow,
            n = e.onCountryClick,
            i = A.useState(new RegExp('', 'i')),
            r = Y()(i, 2),
            o = r[0],
            l = r[1],
            c = A.useMemo(
              function () {
                return t
                  ? Object.keys(t).sort(function (e, a) {
                      return t[e].country.localeCompare(t[a].country)
                    })
                  : []
              },
              [t],
            )
          return A.createElement(
            w.a,
            { accessibilityLabelledBy: x.b, accessibilityRole: 'group', style: [V.container, a && V.narrowContainer] },
            A.createElement(
              w.a,
              { style: V.fixedContainer },
              A.createElement(
                W.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: x.b,
                  size: 'title4',
                  style: V.header,
                  weight: 'heavy',
                },
                ve,
              ),
              A.createElement(
                w.a,
                { style: [V.contentContainer, V.topPaddingSmall] },
                A.createElement(we.a, {
                  Icon: Ve.a,
                  onChange: function (e) {
                    return l(
                      new RegExp(
                        e.target.value.replace(/\W/g, function (e) {
                          return '\\'.concat(e)
                        }),
                        'i',
                      ),
                    )
                  },
                  placeholder: We,
                }),
              ),
            ),
            A.createElement(
              w.a,
              { style: V.scrollableContainer },
              c.map(function (e) {
                return t && t[e].country.match(o)
                  ? A.createElement(
                      ye.a,
                      {
                        key: e,
                        onClick: function () {
                          return n(e, t[e].country)
                        },
                        style: [V.listItem, V.bottomBorder],
                        withInteractiveStyling: !0,
                      },
                      A.createElement(W.b, null, t[e].country),
                    )
                  : null
              }),
            ),
          )
        },
        je = function (e) {
          var t = e.documentFormats,
            a = e.idCountry,
            n = e.isNarrow,
            i = e.onTypeClick,
            r = A.useMemo(
              function () {
                return t && a
                  ? Object(H.a)(t[a].id_types).sort(function (e, t) {
                      return e.name.localeCompare(t.name)
                    })
                  : []
              },
              [t, a],
            )
          return A.createElement(
            w.a,
            { accessibilityLabelledBy: x.b, accessibilityRole: 'group', style: [V.container, n && V.narrowContainer] },
            A.createElement(
              w.a,
              { style: V.fixedContainer },
              A.createElement(
                W.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: x.b,
                  size: 'title4',
                  style: V.header,
                  weight: 'heavy',
                },
                Pe,
              ),
            ),
            A.createElement(
              w.a,
              { style: [V.contentContainer, V.scrollableContainer, V.topPaddingSmall] },
              r.map(function (e) {
                var t = e.id_type,
                  a = e.name
                return A.createElement(
                  ye.a,
                  {
                    key: t,
                    onClick: function () {
                      return i(t, a)
                    },
                    style: [V.listItem, V.bottomBorder],
                    withInteractiveStyling: !0,
                  },
                  A.createElement(W.b, null, a),
                )
              }),
            ),
          )
        },
        He = a('m3Bd'),
        Ke = a.n(He)
      function qe(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qe(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : qe(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var Qe = Object(fe.a)()
          .propsFromActions(function () {
            return { setNextFlow: Ce.V, setPreviousFlow: Ce.W }
          })
          .withAnalytics()(function (e) {
          var t = e.analytics,
            a = e.graphicDisplayMode,
            n = void 0 === a ? 'none' : a,
            i = e.onAction,
            o = e.onTertiaryAction,
            l = e.setNextFlow,
            c = e.setPreviousFlow,
            E = e.tertiaryActionLabel,
            s = e.tertiaryActionLink,
            I = e.withCloseButton,
            T = void 0 !== I && I,
            u = Ke()(e, [
              'analytics',
              'graphicDisplayMode',
              'onAction',
              'onTertiaryAction',
              'setNextFlow',
              'setPreviousFlow',
              'tertiaryActionLabel',
              'tertiaryActionLink',
              'withCloseButton',
            ]),
            N =
              o ||
              (s
                ? m.a
                : function () {
                    return c()
                  })
          return A.createElement(
            C.a,
            r()(
              {
                graphicDisplayMode: n,
                onAction: function (e) {
                  t.scribe(
                    ze(
                      ze({}, t.contextualScribeNamespace),
                      {},
                      { element: 'CTA', action: 'click', data: t.contextualScribeData },
                    ),
                  ),
                    i ? i(e) : E ? l() : c()
                },
                onTertiaryAction: N,
                tertiaryActionLabel: E,
                tertiaryActionLink: s,
                withCloseButton: T,
              },
              u,
            ),
          )
        }),
        $e = a('RhWx'),
        Ze = a.n($e),
        Je =
          (a('M+/F'),
          a('jQ3i'),
          a('x4t0'),
          a('DfhM'),
          function (e) {
            var t,
              a = Object(Ce.y)(e)
            return null !== (t = null == a ? void 0 : a.inputData) && void 0 !== t ? t : []
          }),
        Xe = Object(fe.a)()
          .propsFromState(function () {
            return { currentStep: Ce.z, formHistory: Je }
          })
          .propsFromActions(function () {
            return { setFormStepData: Ce.R, setNextFlow: Ce.V, updateFormHistory: Ce.Y }
          })
          .withAnalytics(),
        et = a('Qp/W'),
        tt = a.n(et),
        at =
          (a('KOtZ'),
          a('ZVkB'),
          function (e) {
            return (
              e.charAt(0).toLowerCase() +
              e.slice(1, e.length).replace(/[A-Z]/g, function (e) {
                return '_'.concat(e.toLowerCase())
              })
            )
          }),
        nt = function (e) {
          return { component: L.g[e].scribeComponent || e }
        },
        it = function (e, t, a, n, i, r, o, l, c) {
          var E = n || r,
            s =
              l &&
              (function (e) {
                e.newsType
                var t = Ke()(e, ['newsType'])
                return Object.keys(t).map(function (e) {
                  return at(e)
                })
              })(l),
            I = {}
          switch (L.g[a].scribeComponent) {
            case L.p.LANDING_PAGE:
              I = { access_status: e }
              break
            case L.p.NOTABILITY_CATEGORY:
              I = { meets_threshold: E, notability_category: o }
              break
            case L.p.NOTABILITY_SUBCATEGORY:
              I = { meets_threshold: E, notability_category: o, category_subtype: c }
              break
            case L.p.NOTABILITY_METHOD:
            case L.p.NOTABILITY_INPUT:
              I = { meets_threshold: E, notability_category: o, category_subtype: c, notability_method: s }
              break
            case L.p.AUTHENTICITY_TYPE:
              I = { notability_category: o, category_subtype: c, authenticity_type: t }
              break
            case L.p.ID_UPLOAD:
              I = { notability_category: o, category_subtype: c, authenticity_type: t, id_type: i }
              break
            case L.p.REVIEW_SUBMIT:
            case L.p.THANK_YOU:
              I = {
                meets_threshold: E,
                notability_category: o,
                category_subtype: c,
                notability_method: s,
                authenticity_type: t,
                id_type: i,
              }
          }
          return {
            verification_application_details: (I = Object.entries(I).reduce(function (e, t) {
              var a = Y()(t, 2),
                n = a[0],
                i = a[1]
              return void 0 === i || (e[n] = i), e
            }, {})),
          }
        },
        rt = a('855f'),
        ot = a('p+r5'),
        lt = a('XiMS')
      function ct(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function Et(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ct(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ct(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var st,
        It,
        Tt,
        ut = 'verification-checkbox-label',
        Nt = f.a.i33cf691,
        dt = f.a.c1df579e,
        _t = f.a.b679ff69,
        pt = function (e) {
          return (
            tt()(e, !1, !1) &&
            (function (e) {
              if (e.includes('://')) {
                var t = e.split('://')
                return 'http' === t[0] || 'https' === t[0]
              }
              return !0
            })(e)
          )
        },
        Ot = B.a.create(function (e) {
          return {
            input: { paddingHorizontal: 0 },
            addFieldText: { alignSelf: 'flex-start', marginLeft: e.borderWidths.medium, paddingTop: e.spaces.space12 },
            checkboxContainer: { paddingTop: 0 },
          }
        }),
        bt = Xe(function (e) {
          var t = e.addFieldText,
            a = void 0 === t ? Nt : t,
            n = e.allowAddFields,
            i = void 0 !== n && n,
            o = e.analytics,
            l = e.buttonText,
            c = void 0 === l ? dt : l,
            E = e.confirmationText,
            s = e.currentStep,
            I = e.description,
            T = e.formHistory,
            u = e.isNarrow,
            N = e.items,
            d = e.maxItems,
            _ = void 0 === d ? 10 : d,
            p = e.nextFormStep,
            O = e.setFormStepData,
            R = e.setNextFlow,
            f = e.title,
            C = e.updateFormHistory,
            m = A.useState(
              (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  a = {},
                  n = e.slice(-1),
                  i = Y()(n, 1)[0],
                  r = void 0 === i ? {} : i
                return (
                  t.length
                    ? t.forEach(function (t, n) {
                        var i,
                          o = null !== (i = e[n]) && void 0 !== i ? i : Et(Et({}, r), {}, { required: !1 })
                        a[n] = Et(Et({}, o), {}, { value: t })
                      })
                    : e.forEach(function (e, t) {
                        a[t] = Et(Et({}, e), {}, { value: '' })
                      }),
                  a
                )
              })(N, T),
            ),
            S = Y()(m, 2),
            L = S[0],
            y = S[1],
            h = A.useState(!1),
            D = Y()(h, 2),
            F = D[0],
            U = D[1],
            v = A.useState(!1),
            M = Y()(v, 2),
            P = M[0],
            g = M[1],
            G = A.useState(!0),
            B = Y()(G, 2),
            j = B[0],
            K = B[1],
            q = A.useState(null),
            z = Y()(q, 2),
            Q = z[0],
            $ = z[1],
            Z = N.length
          A.useEffect(
            function () {
              var e = Object(H.a)(L),
                t = (i ? e.slice(0, Z) : e).every(function (e) {
                  return pt(e.value)
                }),
                a = !t || !(!E || P)
              U(t), K(a)
            },
            [i, E, L, P, Z],
          )
          var J = function (e, t) {
            $(
              setTimeout(function () {
                var a = !pt(e)
                return y(Et(Et({}, L), {}, b()({}, t, Et(Et({}, L[t]), {}, { isUrlInvalid: a, value: e }))))
              }, 2e3),
            )
          }
          return A.createElement(
            w.a,
            { style: [V.container, u && V.narrowContainer] },
            A.createElement(
              W.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: x.b,
                size: 'title4',
                style: V.header,
                weight: 'heavy',
              },
              f,
            ),
            A.createElement(
              w.a,
              { style: V.scrollableContainer },
              I && A.createElement(W.b, { color: 'gray700' }, I),
              A.createElement(
                w.a,
                { accessibilityLabelledBy: x.b, accessibilityRole: 'group', style: V.contentContainer },
                Object.keys(L).map(function (e, t) {
                  var a = L[e],
                    n = a.isUrlInvalid,
                    i = a.labelGenerator,
                    o = void 0 === i ? null : i,
                    l = (a.required, a.value),
                    c = Ke()(a, ['isUrlInvalid', 'labelGenerator', 'required', 'value']),
                    E = c.label || '',
                    I = c.name || ''.concat(s, '-').concat(e),
                    T = c.errorText || _t,
                    u = rt.a.getFormattedCount(t + 1),
                    N = o ? o({ n: u }) : E
                  return A.createElement(
                    ot.a,
                    r()({}, c, {
                      errorText: T,
                      invalid: n,
                      key: e,
                      label: N,
                      name: I,
                      onBlur: function (t) {
                        return (function (e, t) {
                          clearTimeout(Q)
                          var a = !pt(e.target.value)
                          return y(Et(Et({}, L), {}, b()({}, t, Et(Et({}, L[t]), {}, { isUrlInvalid: a }))))
                        })(t, e)
                      },
                      onChange: function (t) {
                        return (function (e, t) {
                          clearTimeout(Q)
                          var a = !1,
                            n = e.target.value
                          return (
                            L[t].isUrlInvalid ? (a = !pt(n)) : J(n, t),
                            y(Et(Et({}, L), {}, b()({}, t, Et(Et({}, L[t]), {}, { isUrlInvalid: a, value: n }))))
                          )
                        })(t, e)
                      },
                      style: Ot.input,
                      value: l,
                    }),
                  )
                }),
                i && F && Object.keys(L).length < _
                  ? A.createElement(
                      W.b,
                      {
                        color: 'primary',
                        onPress: function () {
                          return y(
                            (function (e) {
                              var t = Object.keys(e).length
                              return Et(
                                Et({}, e),
                                {},
                                b()({}, t, Et(Et({}, e[t - 1]), {}, { required: !1, value: '' })),
                              )
                            })(L),
                          )
                        },
                        style: Ot.addFieldText,
                      },
                      a,
                    )
                  : null,
              ),
              E &&
                A.createElement(
                  w.a,
                  { style: [V.contentContainer, V.checkboxContainer, Ot.checkboxContainer] },
                  A.createElement(
                    w.a,
                    { style: V.checkbox },
                    A.createElement(lt.a, {
                      accessibilityLabelledBy: ut,
                      checked: P,
                      onChange: function () {
                        return g(!P)
                      },
                    }),
                  ),
                  A.createElement(
                    w.a,
                    { nativeID: ut, style: V.checkboxText },
                    A.createElement(W.b, { color: 'gray700' }, E),
                  ),
                ),
            ),
            A.createElement(
              k.a,
              {
                disabled: j,
                onClick: function () {
                  var e = (function (e) {
                      var t = {}
                      return (
                        Object(H.a)(e).forEach(function (e) {
                          if (e.dataKey) {
                            var a,
                              n,
                              i = null !== (a = t[e.dataKey]) && void 0 !== a ? a : [],
                              r = null !== (n = e.value) && void 0 !== n ? n : ''
                            t = Et(Et({}, t), {}, b()({}, e.dataKey, [].concat(Ze()(i), [r])))
                          }
                        }),
                        t
                      )
                    })(L),
                    t = Object.keys(e).map(function (e) {
                      return at(e)
                    })
                  O(s, e),
                    o.scribe(
                      Et(
                        Et({}, o.contextualScribeNamespace),
                        {},
                        {
                          element: 'CTA',
                          action: 'click',
                          data: Et(
                            Et({}, o.contextualScribeData),
                            {},
                            {
                              verification_application_details: Et(
                                Et({}, o.contextualScribeData.verification_application_details),
                                {},
                                { notability_method: t },
                              ),
                            },
                          ),
                        },
                      ),
                    ),
                    C(
                      (function (e) {
                        return Object(H.a)(e).map(function (e) {
                          var t
                          return null !== (t = e.value) && void 0 !== t ? t : ''
                        })
                      })(L),
                    ),
                    R(p)
                },
                style: V.buttonFixed,
                type: 'brandFilled',
              },
              c,
            ),
          )
        }),
        At = bt,
        Rt = a('0KEI'),
        ft = Object(fe.a)()
          .propsFromState(function () {
            return { errors: Ce.q, status: Ce.r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Rt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_LOADING',
              ),
              fetchAuthenticationResult: Ce.e,
              resetAuthenticationResult: Ce.h,
              resetDocumentIdProcess: Ce.i,
              setNextFlow: Ce.V,
              setPreviousFlow: Ce.W,
            }
          })
          .withAnalytics(),
        Ct = a('B5iK'),
        mt = a('pXBW'),
        St = 'https://help.twitter.com/managing-your-account/twitter-verified-accounts',
        Lt = f.a.abd587d1,
        yt = f.a.i0bba81a,
        ht = f.a.a6a76e3c,
        Dt = f.a.ecd2abda,
        Ft = f.a.cb70b893,
        Ut = f.a.g8b511fe,
        vt = f.a.c7d50c96,
        Mt = f.a.a68b43ed,
        Pt = f.a.b5e3039f,
        gt = f.a.h146703d,
        Gt = f.a.ee38d0f0,
        Yt = f.a.cb97ee3e,
        xt = f.a.hc371f34,
        Bt = f.a.b9d0ad9f,
        Vt = f.a.ge137dce,
        wt = f.a.h2b9a5fd,
        Wt = f.a.baccb708,
        kt = f.a.feadd98c,
        jt = f.a.j7ae97a9,
        Ht = f.a.c368aa8d,
        Kt = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'j23c6258' },
          A.createElement(W.b, { link: St }, f.a.c076e32d),
        ),
        qt = f.a.ded0edad,
        zt = f.a.bebae559,
        Qt = f.a.c557161f,
        $t = f.a.e2d42628,
        Zt = f.a.jc19b4e7,
        Jt = f.a.fc3ee695,
        Xt = f.a.i3e65eb4,
        ea = f.a.jd014eba,
        ta = f.a.a96901cb,
        aa = f.a.cc424a21,
        na = f.a.ibfc1a5a,
        ia = f.a.e1c78795,
        ra = f.a.cf93bcbf,
        oa = f.a.a7f1cff6,
        la = function (e) {
          return { title: Mt, description: e, label: Pt }
        },
        ca = function (e) {
          return { title: kt, description: e, articleLabelGenerator: qt, addFieldText: Lt }
        },
        Ea = function (e) {
          return { title: Yt, description: e, label: gt }
        },
        sa = function (e) {
          return { title: $t, description: e, label: Zt }
        },
        Ia = f.a.c6bd60ec,
        Ta = f.a.je403ac5,
        ua = f.a.ff8c97fb,
        Na = f.a.h4d652fb,
        da = f.a.c5b72ac5,
        _a = f.a.f7ff070c,
        pa = f.a.eb7de689,
        Oa =
          ((st = {}),
          b()(st, L.l.ACTIVISM, Ia),
          b()(st, L.l.COMPANY, Ta),
          b()(st, L.l.ENTERTAINMENT, ua),
          b()(st, L.l.GOVERNMENT, Na),
          b()(st, L.l.INFLUENCER_OTHER, da),
          b()(st, L.l.NEWS, _a),
          b()(st, L.l.SPORTS, pa),
          st),
        ba = f.a.cc4b66b5,
        Aa = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'gee7fae8' },
          A.createElement(W.b, { link: St }, f.a.e492eeb4),
        ),
        Ra = { title: ba, description: Aa },
        fa = f.a.b37461a4,
        Ca = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'd454b49e' },
          A.createElement(W.b, { link: St }, f.a.ece0b9bc),
        ),
        ma = f.a.b27325f6,
        Sa = f.a.a5a6affb,
        La = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'hd977dd9' },
          A.createElement(W.b, { link: St }, f.a.db252639),
        ),
        ya = f.a.a15326dd,
        ha = f.a.g704a939,
        Da = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'e3432573' },
          A.createElement(W.b, { link: St }, f.a.b25b02c1),
        ),
        Fa = {
          title: ht,
          description: La,
          notEligibleButton: Ft,
          notEligibleDescription: Da,
          notEligibleTitle: na,
          items: [
            { helpText: vt, label: Ut },
            { helpText: Gt, label: gt },
            { helpText: ya, label: xt },
            { helpText: ha, label: Jt },
          ],
        },
        Ua = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          A.createElement(W.b, { link: St }, f.a.j6ef6afa),
        ),
        va = la(Ua),
        Ma = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          A.createElement(W.b, { link: St }, f.a.d42d1629),
        ),
        Pa = Ea(Ma),
        ga = { title: Wt, description: Kt, articleLabelGenerator: qt, addFieldText: Lt },
        Ga = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'ie26d72d' },
          A.createElement(W.b, { link: St }, f.a.ccadfc84),
        ),
        Ya = { title: ta, description: Ga, label: aa, confirmationText: ea },
        xa = f.a.d2ea2049,
        Ba = f.a.h753ddd2,
        Va = {
          title: fa,
          description: Ca,
          items: [
            { helpText: Sa, label: ma },
            { helpText: Ba, label: xa },
          ],
        },
        wa = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'af3fe861' },
          A.createElement(W.b, { link: St }, f.a.ddb47f56),
        ),
        Wa = f.a.a15326dd,
        ka = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'a08d6af3' },
          A.createElement(W.b, { link: St }, f.a.bf9e181a),
        ),
        ja = {
          title: ht,
          description: wa,
          notEligibleButton: Ft,
          notEligibleDescription: ka,
          notEligibleTitle: na,
          items: [
            { helpText: vt, label: Ut },
            { helpText: Gt, label: gt },
            { helpText: Wa, label: xt },
          ],
        },
        Ha = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          A.createElement(W.b, { link: St }, f.a.j6ef6afa),
        ),
        Ka = la(Ha),
        qa = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          A.createElement(W.b, { link: St }, f.a.d42d1629),
        ),
        za = Ea(qa),
        Qa = { title: Wt, description: Kt, articleLabelGenerator: qt, addFieldText: Lt },
        $a = (f.a.I18NFormatMessage, W.b, f.a.ccadfc84, f.a.ff929feb),
        Za = f.a.jf537894,
        Ja = f.a.i3e6aaa5,
        Xa = f.a.bbcbb9e6,
        en = {
          title: fa,
          description: Ca,
          items: [
            { helpText: Za, label: $a },
            { helpText: Xa, label: Ja },
          ],
        },
        tn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'f774e39d' },
          A.createElement(W.b, { link: St }, f.a.e8e39f94),
        ),
        an = {
          title: ht,
          description: tn,
          items: [
            { helpText: vt, label: Ut },
            { helpText: Gt, label: gt },
            { helpText: Qt, label: zt },
            { helpText: wt, label: xt },
          ],
        },
        nn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'd8510869' },
          A.createElement(W.b, { link: St }, f.a.e126dd3e),
        ),
        rn = la(nn),
        on = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'h75e3640' },
          A.createElement(W.b, { link: St }, f.a.gbdf1325),
        ),
        ln = Ea(on),
        cn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'de6d69a1' },
          A.createElement(W.b, { link: St }, f.a.b0abbb16),
        ),
        En = sa(cn),
        sn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'be0e8fda' },
          A.createElement(W.b, { link: St }, f.a.g4e815f3),
        ),
        In = ca(sn),
        Tn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'baed7213' },
          A.createElement(W.b, { link: St }, f.a.i560665d),
        ),
        un = f.a.j0bc23f3,
        Nn = { title: Dt, description: Tn, confirmationText: un },
        dn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'c5d688ce' },
          A.createElement(W.b, { link: St }, f.a.eb8eeaf0),
        ),
        _n = {
          title: ht,
          description: dn,
          items: [
            { helpText: Ht, label: jt },
            { helpText: Xt, label: Jt },
          ],
        },
        pn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'fce3e22d' },
          A.createElement(W.b, { link: St }, f.a.h486f753),
        ),
        On = ca(pn),
        bn = {
          title: yt,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'f1b276f0' },
            A.createElement(W.b, { link: St }, f.a.a77ed149),
          ),
          label: Jt,
          confirmationText: ea,
        },
        An = f.a.aa6228de,
        Rn = f.a.d5b3cbc9,
        fn = f.a.b5a3e590,
        Cn = f.a.e484f794,
        mn = f.a.b8d8ea64,
        Sn = f.a.ff27db3c,
        Ln = la(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'e2465096' },
            A.createElement(W.b, { link: St }, f.a.jc7215cd),
          ),
        ),
        yn = ca(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'g83bcecc' },
            A.createElement(W.b, { link: St }, f.a.gdb5ae61),
          ),
        ),
        hn = {
          title: ht,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'f3016c6f' },
            A.createElement(W.b, { link: St }, f.a.icb5913e),
          ),
          items: [
            { helpText: vt, label: Ut },
            { helpText: Gt, label: gt },
            { helpText: Qt, label: zt },
            { helpText: wt, label: xt },
          ],
        },
        Dn = sa(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'h74144bd' },
            A.createElement(W.b, { link: St }, f.a.af819831),
          ),
        ),
        Fn = Ea(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'jef5dfc5' },
            A.createElement(W.b, { link: St }, f.a.d35525bf),
          ),
        ),
        Un = {
          title: fa,
          description: Ca,
          items: [
            { helpText: Rn, label: An },
            { helpText: Cn, label: fn },
            { helpText: Sn, label: mn },
          ],
        },
        vn = {
          title: ht,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'gf5a4309' },
            A.createElement(W.b, { link: St }, f.a.cb181ed0),
          ),
          items: [
            { helpText: vt, label: Ut },
            { helpText: Gt, label: gt },
            { helpText: Qt, label: zt },
            { helpText: wt, label: xt },
          ],
        },
        Mn = la(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'g2e175b1' },
            A.createElement(W.b, { link: St }, f.a.f6c3d3ff),
          ),
        ),
        Pn = ca(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'efc369c2' },
            A.createElement(W.b, { link: St }, f.a.bad6af53),
          ),
        ),
        gn = sa(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'ff03f07c' },
            A.createElement(W.b, { link: St }, f.a.af0cb1b5),
          ),
        ),
        Gn = Ea(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'a3e9dde2' },
            A.createElement(W.b, { link: St }, f.a.h84f1fe0),
          ),
        ),
        Yn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'c2b8fb3c' },
          A.createElement(W.b, { link: St }, f.a.bd70d5d0),
        ),
        xn = f.a.c0e57cb2,
        Bn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'da6e5b18' },
          A.createElement(W.b, { link: St }, f.a.h9ec0778),
        ),
        Vn = f.a.f3c605b6,
        wn = {
          title: ht,
          description: Yn,
          items: [
            { helpText: vt, label: Ut },
            { helpText: Gt, label: gt },
            { helpText: Vt, label: xt },
          ],
        },
        Wn = { title: xn, description: Bn, items: [{ label: Vn }] },
        kn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          A.createElement(W.b, { link: St }, f.a.j6ef6afa),
        ),
        jn = { title: Mt, description: kn, label: Pt },
        Hn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'bb47d2b9' },
          A.createElement(W.b, { link: St }, f.a.f7998564),
        ),
        Kn = { title: Yt, description: Hn, label: gt },
        qn = { title: Wt, description: Kt, articleLabelGenerator: qt, addFieldText: Lt },
        zn = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'db930fb2' },
          A.createElement(W.b, { link: St }, f.a.b4e93970),
        ),
        Qn = f.a.h042d1a5,
        $n = {
          title: ht,
          description: zn,
          items: [
            { description: f.a.d2310f0b, label: Qn },
            { description: Vt, label: jt },
          ],
        },
        Zn = {
          title: f.a.ba04b4c1,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'dc263ec0' },
            A.createElement(W.b, { link: St }, f.a.jb3e663d),
          ),
          label: Qn,
        },
        Jn = { title: kt, description: Kt, articleLabelGenerator: qt, addFieldText: Lt },
        Xn = {
          title: oa,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'd8b21ebb' },
            A.createElement(W.b, { link: St }, f.a.a7a51b91),
          ),
          label: ia,
        },
        ei = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'i3b4217a' },
          A.createElement(W.b, { link: St }, f.a.c58d2c6b),
        ),
        ti = f.a.i9b124b6,
        ai = f.a.f84a99ee,
        ni = f.a.j2cb5f50,
        ii = f.a.j2472894,
        ri = f.a.ha44c13f,
        oi = {
          title: fa,
          description: ei,
          items: [
            { helpText: ai, label: ti },
            { helpText: ii, label: ni },
            { helpText: f.a.j8ae9d40, label: ri },
          ],
        },
        li = {
          candidateTitle: f.a.ef1d6175,
          candidateDescription: f.a.f54ba6e6,
          officialTitle: f.a.dd85d0af,
          officialDescription: f.a.f0058c60,
          confirmButtonLabel: f.a.f420a711,
          declineButtonLabel: f.a.fb97d22b,
        },
        ci = {
          candidateTitle: f.a.e16b1cc8,
          candidateDescription: f.a.cf2ee92e,
          officeTitle: f.a.g544885e,
          officeDescription: f.a.bd0b4542,
          officialTitle: f.a.i45b224c,
          officialDescription: f.a.fba1dd66,
          confirmButtonLabel: f.a.e95c44dd,
          declineButtonLabel: f.a.fa5e15e1,
        },
        Ei = ca(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'ja62479f' },
            A.createElement(W.b, { link: St }, f.a.c04b4b1b),
          ),
        ),
        si = ca(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'f28bbbb0' },
            A.createElement(W.b, { link: St }, f.a.a60039a6),
          ),
        ),
        Ii = ca(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'b229f4b8' },
            A.createElement(W.b, { link: St }, f.a.ba75f2ad),
          ),
        ),
        Ti = f.a.jdf47e8d,
        ui = {
          title: f.a.eeec7315,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'ec71430d' },
            A.createElement(W.b, { link: St }, f.a.d9486fbf),
          ),
          websiteLabel: Ti,
        },
        Ni = f.a.b163b653,
        di = {
          title: f.a.d2378d34,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'f9e2b0f2' },
            A.createElement(W.b, { link: St }, f.a.e3b02224),
          ),
          websiteLabel: Ni,
        },
        _i = {
          title: yt,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'a394654e' },
            A.createElement(W.b, { link: St }, f.a.e332fb11),
          ),
          websiteLabel: Ni,
        },
        pi = f.a.a05b8445,
        Oi = f.a.hdad12b1,
        bi = f.a.a18c6dfb,
        Ai = f.a.h0b46533,
        Ri = f.a.d2d7af4b,
        fi = {
          title: fa,
          description: Ca,
          items: [
            { description: Ai, label: bi },
            { description: Oi, label: pi },
            { description: f.a.d83e51db, label: Ri },
          ],
        },
        Ci = {
          title: f.a.g708cbdb,
          description: f.a.b107ee5b,
          confirmButtonLabel: f.a.e95c44dd,
          declineButtonLabel: f.a.fa5e15e1,
        },
        mi = {
          title: Dt,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'dcb0da53' },
            A.createElement(W.b, { link: St }, f.a.h04c272b),
          ),
          confirmationText: f.a.e8746826,
        },
        Si = {
          headline: f.a.jc09b420,
          subtext: f.a.gfbd7e58,
          actionLabel: f.a.e95c44dd,
          tertiaryActionLabel: f.a.fa5e15e1,
        },
        Li = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'd82a96af' },
          A.createElement(W.b, { link: St }, f.a.j331c658),
        ),
        yi = f.a.h0ad4c9d,
        hi = f.a.a6553b5f,
        Di = f.a.a29b2987,
        Fi = {
          title: ht,
          description: Li,
          items: [
            { description: hi, label: yi },
            { description: f.a.ab4eae60, label: Di },
          ],
        },
        Ui = {
          title: yt,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'd47b4101' },
            A.createElement(W.b, { link: St }, f.a.h02fe64e),
          ),
          websiteLabel: ia,
          confirmationText: f.a.b3fac982,
        },
        vi = {
          title: f.a.e26dc9e2,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'a3540593' },
            A.createElement(W.b, { link: St }, f.a.a7df4b84),
          ),
          articleNumerationLabelGenerator: qt,
          addFieldText: Lt,
        },
        Mi = {
          title: f.a.e164df2d,
          description: f.a.i80ff05e,
          actionLabel: f.a.cf7482eb,
          tertiaryActionLabel: f.a.cb70b893,
        },
        Pi = {
          title: ht,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'edb782e6' },
            A.createElement(W.b, { link: St }, f.a.d575e579),
          ),
          items: [
            { description: vt, label: Ut },
            { description: Gt, label: gt },
            { description: Qt, label: zt },
            { description: Bt, label: xt },
          ],
        },
        gi = la(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'cc16af2c' },
            A.createElement(W.b, { link: St }, f.a.ede35c04),
          ),
        ),
        Gi = Ea(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'b42b7001' },
            A.createElement(W.b, { link: St }, f.a.d5dedb7a),
          ),
        ),
        Yi = sa(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'fd2c6f62' },
            A.createElement(W.b, { link: St }, f.a.ab604a66),
          ),
        ),
        xi = ca(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'ec7027cc' },
            A.createElement(W.b, { link: St }, f.a.i532d121),
          ),
        ),
        Bi = f.a.fcb96cfc,
        Vi = f.a.ddc7d64a,
        wi = f.a.c4e0d346,
        Wi = f.a.e3ce81fa,
        ki = f.a.b2808f47,
        ji = {
          title: fa,
          description: Ca,
          items: [
            { helpText: Vi, label: Bi },
            { helpText: Wi, label: wi },
            { helpText: f.a.jaa90f86, label: ki },
          ],
        },
        Hi = A.createElement(f.a.I18NFormatMessage, { $i18n: 'a0a9f835' }),
        Ki = f.a.bbd9a911,
        qi = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'iba551d5' },
          A.createElement(W.b, { link: St }, f.a.f22a6d0c),
        ),
        zi = { title: Dt, description: Hi, confirmationText: Ki },
        Qi = {
          title: Dt,
          description: A.createElement(f.a.I18NFormatMessage, { $i18n: 'h515e868' }),
          confirmationText: Ki,
        },
        $i = { headline: na, subtext: qi, actionLabel: Ft },
        Zi = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'd2cd7f89' },
          A.createElement(W.b, { link: St }, f.a.i78c9fd3),
        ),
        Ji = f.a.he9c5637,
        Xi = {
          title: ht,
          description: Zi,
          items: [
            { helpText: vt, label: Ut },
            { helpText: Gt, label: gt },
            { helpText: Qt, label: zt },
            { helpText: Ji, label: ra },
            { helpText: wt, label: xt },
          ],
        },
        er = la(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'c68614a2' },
            A.createElement(W.b, { link: St }, f.a.i78b0bd0),
          ),
        ),
        tr = Ea(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'b4ea622e' },
            A.createElement(W.b, { link: St }, f.a.i78103dc),
          ),
        ),
        ar = sa(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'acab99f6' },
            A.createElement(W.b, { link: St }, f.a.ebfa8bb3),
          ),
        ),
        nr = {
          title: oa,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'df0b2577' },
            A.createElement(W.b, { link: St }, f.a.fcfad60b),
          ),
          label: ia,
        },
        ir = ca(
          A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'jfda4c28' },
            A.createElement(W.b, { link: St }, f.a.a5e8a43a),
          ),
        ),
        rr = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'g3299df1' },
          A.createElement(W.b, { link: St }, f.a.d9bd3821),
        ),
        or = f.a.bf06e1d5,
        lr = {
          title: ht,
          description: rr,
          items: [
            { description: f.a.e241d35d, label: jt },
            { description: or, label: ra },
          ],
        },
        cr = {
          title: ht,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'id6bbc01' },
            A.createElement(W.b, { link: St }, f.a.a67f27bc),
          ),
          items: [
            { description: f.a.ad456030, label: jt },
            { description: f.a.hbe2e65b, label: ra },
          ],
        },
        Er = {
          title: oa,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'fbe119c5' },
            A.createElement(W.b, { link: St }, f.a.b8be7ad9),
          ),
          websiteLabel: ia,
        },
        sr = ca(Kt),
        Ir = {
          title: oa,
          description: A.createElement(
            f.a.I18NFormatMessage,
            { $i18n: 'da0e7f32' },
            A.createElement(W.b, { link: St }, f.a.fa437e4d),
          ),
          websiteLabel: ia,
        },
        Tr = ca(Kt),
        ur = f.a.j24c37b2,
        Nr = f.a.j3da4de9,
        dr = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'ca20e39f' },
          A.createElement(W.b, { link: St }, f.a.b436b100),
        ),
        _r = f.a.ff2ee0c1,
        pr = f.a.af39265e,
        Or = f.a.hc61adfb,
        br = f.a.d2042392,
        Ar = f.a.c365dcc5,
        Rr = f.a.c8ee31da,
        fr = f.a.bb51cd79,
        Cr =
          ((It = {}),
          b()(It, L.l.ACTIVISM, _r),
          b()(It, L.l.COMPANY, pr),
          b()(It, L.l.ENTERTAINMENT, Or),
          b()(It, L.l.GOVERNMENT, br),
          b()(It, L.l.INFLUENCER_OTHER, Ar),
          b()(It, L.l.NEWS, Rr),
          b()(It, L.l.SPORTS, fr),
          It),
        mr = f.a.d2ea2049,
        Sr =
          ((Tt = {}),
          b()(Tt, L.n.ACTIVIST, Ia),
          b()(Tt, L.n.CANDIDATE, ni),
          b()(Tt, L.n.COMPANY, $a),
          b()(Tt, L.n.CONTENT_CREATOR, ma),
          b()(Tt, L.n.ENTERTAINMENT_COMPANY, An),
          b()(Tt, L.n.ENTERTAINMENT_INDIVIDUAL, fn),
          b()(Tt, L.n.EXECUTIVE, Ja),
          b()(Tt, L.n.FREELANCER, pi),
          b()(Tt, L.n.GAMING_INDIVIDUAL, ki),
          b()(Tt, L.n.INFLUENTIAL_INDIVIDUAL, mr),
          b()(Tt, L.n.JOURNALIST, bi),
          b()(Tt, L.n.OFFICE, ri),
          b()(Tt, L.n.OFFICIAL, ti),
          b()(Tt, L.n.ORGANIZATION, Ri),
          b()(Tt, L.n.PRODUCTION, mn),
          b()(Tt, L.n.SPORTS_ENTITY, wi),
          b()(Tt, L.n.SPORTS_INDIVIDUAL, Bi),
          Tt),
        Lr = f.a.fc2a5c92,
        yr = f.a.jf4b6f7f,
        hr = Nr,
        Dr = dr,
        Fr = f.a.d338f53e,
        Ur = function (e) {
          var t = e.error,
            a = e.onButtonClick,
            n = t instanceof mt.a ? t.status : void 0,
            i = Fr,
            r = Lr,
            o = yr
          return (
            429 === n && ((i = ur), (r = hr), (o = Dr)),
            A.createElement(C.a, {
              actionLabel: i,
              graphicDisplayMode: 'none',
              headline: r,
              onAction: a,
              onClose: m.a,
              subtext: o,
              withCloseButton: !1,
            })
          )
        }
      function vr(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function Mr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? vr(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : vr(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      function Pr(e) {
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
          var a,
            n = p()(e)
          if (t) {
            var i = p()(this).constructor
            a = Reflect.construct(n, arguments, i)
          } else a = n.apply(this, arguments)
          return d()(this, a)
        }
      }
      var gr = f.a.h2d4ba55,
        Gr = f.a.i2051842,
        Yr = ft(
          (function (e) {
            u()(a, e)
            var t = Pr(a)
            function a(e) {
              var n
              return (
                l()(this, a),
                (n = t.call(this, e)),
                b()(I()(n), '_handleErrorButtonClick', function () {
                  n.props.resetDocumentIdProcess(), n.props.setPreviousFlow()
                }),
                b()(I()(n), '_isPollingDone', function (e) {
                  return e === L.o.NOT_STARTED || e === L.o.CONCLUSIVE || e === L.o.INCONCLUSIVE
                }),
                (n.state = { retryCount: 0 }),
                n
              )
            }
            return (
              E()(a, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this,
                      t = this.props,
                      a = t.createLocalApiErrorHandler,
                      n = t.fetchAuthenticationResult
                    n().catch(a()),
                      (this._pollingTimer = new Ct.b(5e3).interval(function () {
                        n().catch(function () {
                          e.setState(function (e) {
                            return { retryCount: e.retryCount + 1 }
                          }),
                            a()
                        })
                      })),
                      this._pollingTimer.start()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e, t) {
                    var a = this.props,
                      n = a.errors,
                      i = a.setNextFlow,
                      r = a.status,
                      o = this.state.retryCount
                    ;((r !== e.status && this._isPollingDone(r)) ||
                      (n.length !== e.errors.length && n.length) ||
                      (o !== t.retryCount && 5 === o)) &&
                      this._stopTimer(),
                      r === e.status || r !== L.o.CONCLUSIVE || n.length || (this._handleScribe('success'), i())
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this._stopTimer()
                  },
                },
                {
                  key: '_handleScribe',
                  value: function (e) {
                    var t = this.props.analytics
                    t.scribe(
                      Mr(
                        Mr({}, t.contextualScribeNamespace),
                        {},
                        { element: 'process', action: e, data: t.contextualScribeData },
                      ),
                    )
                  },
                },
                {
                  key: '_isErrorState',
                  value: function () {
                    var e = this.props,
                      t = e.errors,
                      a = e.status
                    return t.length || a === L.o.INCONCLUSIVE || a === L.o.NOT_STARTED || 5 === this.state.retryCount
                  },
                },
                {
                  key: '_stopTimer',
                  value: function () {
                    this._pollingTimer && this._pollingTimer.stop()
                  },
                },
                {
                  key: '_renderError',
                  value: function () {
                    return (
                      this._handleScribe('failure'),
                      A.createElement(Ur, { onButtonClick: this._handleErrorButtonClick })
                    )
                  },
                },
                {
                  key: '_renderLoading',
                  value: function () {
                    return A.createElement(
                      w.a,
                      { style: V.largeBannerContainer },
                      A.createElement(pe, { isNarrow: this.props.isNarrow, type: Ne.LOADING }),
                      A.createElement(
                        w.a,
                        { style: [V.container, V.verticalCenter, this.props.isNarrow && V.narrowContainer] },
                        A.createElement(
                          W.b,
                          {
                            accessibilityLevel: 1,
                            accessibilityRole: 'heading',
                            nativeID: x.b,
                            size: 'title4',
                            style: V.header,
                            weight: 'heavy',
                          },
                          gr,
                        ),
                        A.createElement(W.b, { color: 'gray700' }, Gr),
                      ),
                    )
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this._isErrorState() ? this._renderError() : this._renderLoading()
                  },
                },
              ]),
              a
            )
          })(A.Component),
        ),
        xr = a('AspN'),
        Br = function (e) {
          var t = Object(Ce.u)(e)
          return t ? Object(xr.k)(e, t)[0] : void 0
        },
        Vr = function (e) {
          var t = Object(Ce.F)(e)
          return t ? Object(xr.k)(e, t)[0] : void 0
        },
        wr = Object(fe.a)()
          .propsFromState(function () {
            return {
              backID: Ce.u,
              backImage: Br,
              documentFormats: Ce.A,
              frontID: Ce.F,
              frontImage: Vr,
              idCountry: Ce.G,
              idType: Ce.I,
              isConfirmed: Ce.x,
              uploadEntityId: Ce.B,
              uploadErrors: Ce.C,
              uploadFetchStatus: Ce.D,
              uploadRequestError: Ce.E,
            }
          })
          .propsFromActions(function () {
            return {
              addMedia: xr.b,
              createLocalApiErrorHandler: Object(Rt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_UPLOAD',
              ),
              processMultipleMedia: xr.g,
              removeMedia: xr.h,
              resetAuthenticationResult: Ce.h,
              resetDocumentIdProcess: Ce.i,
              resetIntakeUpload: Ce.k,
              setBackID: Ce.Q,
              setFrontID: Ce.S,
              setNextFlow: Ce.V,
              toggleCheckboxConfirmation: Ce.X,
              verifyIdDocument: Ce.ab,
            }
          })
          .withAnalytics(),
        Wr = a('LCtV'),
        kr = a('T8pk'),
        jr = a('VPdC'),
        Hr = a('pKoL'),
        Kr = a('rFBM')
      function qr(e) {
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
          var a,
            n = p()(e)
          if (t) {
            var i = p()(this).constructor
            a = Reflect.construct(n, arguments, i)
          } else a = n.apply(this, arguments)
          return d()(this, a)
        }
      }
      var zr = ['application/pdf', 'image/bmp', 'image/jpeg', 'image/png', 'image/tiff'],
        Qr = (function (e) {
          u()(a, e)
          var t = qr(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(I()(e), '_handleDragDrop', function (t) {
                var a = e.props.onChange,
                  n = t.find(function (e) {
                    return zr.includes(e.type)
                  })
                n && a([n])
              }),
              b()(I()(e), '_renderDragDropTarget', function () {
                var t = e.props,
                  a = t.accessibilityLabel,
                  n = t.onChange
                return A.createElement(jr.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !1,
                  accessibilityLabel: a,
                  customMimeTypes: zr,
                  icon: A.createElement(kr.a, { style: $r.mediaPickerIcon }),
                  onChange: n,
                  size: 'small',
                  style: $r.mediaPicker,
                  withIcon: !0,
                })
              }),
              b()(I()(e), '_getResizeIfNeeded', function (e) {
                var t = e.externalMediaDetails && e.externalMediaDetails.height / e.externalMediaDetails.width
                return t && t > 1 ? 'width' : 'height'
              }),
              b()(I()(e), '_renderPreview', function (t) {
                var a = e.props.onRemove
                return A.createElement(Hr.a, {
                  borderRadius: Wr.a.MEDIUM,
                  mediaItem: t,
                  onRemove: a,
                  resizeIfNeeded: e._getResizeIfNeeded(t),
                  style: $r.mediaPreview,
                  withCloseButton: !0,
                })
              }),
              e
            )
          }
          return (
            E()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mediaItem,
                    a = e.title,
                    n = t ? this._renderPreview(t) : this._renderDragDropTarget()
                  return A.createElement(
                    w.a,
                    { style: $r.dragDropContainer },
                    A.createElement(W.b, { weight: 'bold' }, a),
                    A.createElement(Kr.a, { onFilesAdded: this._handleDragDrop, style: $r.dragDropComponent }, n),
                  )
                },
              },
            ]),
            a
          )
        })(A.Component),
        $r = B.a.create(function (e) {
          return {
            dragDropContainer: {
              flex: 1,
              marginTop: e.spaces.space16,
              maxWidth: '50%',
              minWidth: 'calc('.concat(e.spaces.space80, ' + ').concat(e.spaces.space48, ')'),
            },
            dragDropComponent: {
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.medium,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              boxSizing: 'border-box',
              flexGrow: 0,
              height: 135,
              marginVertical: e.spaces.space8,
              overflow: 'hidden',
            },
            mediaPicker: { borderStyle: 'none', borderRadius: 'none', flex: 'auto' },
            mediaPickerIcon: { color: e.colors.primary },
            mediaPreview: { justifyContent: 'center', flex: 1 },
          }
        }),
        Zr = Qr,
        Jr = a('eyty')
      function Xr(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function eo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xr(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Xr(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      function to(e) {
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
          var a,
            n = p()(e)
          if (t) {
            var i = p()(this).constructor
            a = Reflect.construct(n, arguments, i)
          } else a = n.apply(this, arguments)
          return d()(this, a)
        }
      }
      var ao,
        no,
        io,
        ro,
        oo,
        lo,
        co,
        Eo,
        so,
        Io,
        To,
        uo,
        No,
        _o,
        po,
        Oo,
        bo,
        Ao,
        Ro,
        fo,
        Co,
        mo,
        So = 'verification-checkbox-label',
        Lo = f.a.ff1d68f7,
        yo = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'b8f15ec4' },
          A.createElement(W.b, { link: St }, f.a.h0ed9034),
        ),
        ho = f.a.bdada5a5,
        Do = f.a.edfed0f6,
        Fo = f.a.b08821f3,
        Uo = f.a.b09aade5,
        vo = f.a.b40ed190,
        Mo = f.a.c6650b55,
        Po = f.a.d171ed16,
        go = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'd65a41c2' },
          A.createElement(W.b, { link: 'https://twitter.com/privacy' }, f.a.e9d83172),
        ),
        Go = f.a.c1df579e,
        Yo = (function (e) {
          u()(a, e)
          var t = to(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(I()(e), '_handleSubmit', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler,
                  n = t.handleOnClick,
                  i = void 0 === n ? function () {} : n
                ;(0, t.verifyIdDocument)().catch(a()), i()
              }),
              b()(I()(e), '_handleAddBackMedia', function (t) {
                var a = e.props,
                  n = a.addMedia,
                  i = a.processMultipleMedia,
                  r = a.setBackID
                n(t, { location: Jr.d.Verification }).then(function (t) {
                  t.map(function (e) {
                    var t = e.id
                    r(t)
                  }),
                    i(t, { onFailure: e._handleRemoveBackID })
                })
              }),
              b()(I()(e), '_handleRemoveBackID', function () {
                var t = e.props,
                  a = t.backID,
                  n = t.removeMedia,
                  i = t.setBackID
                a && (n(a), i(void 0))
              }),
              b()(I()(e), '_handleAddFrontMedia', function (t) {
                var a = e.props,
                  n = a.addMedia,
                  i = a.processMultipleMedia,
                  r = a.setFrontID
                n(t, { location: Jr.d.Verification }).then(function (t) {
                  t.map(function (e) {
                    var t = e.id
                    r(t)
                  }),
                    i(t, { onFailure: e._handleRemoveFrontID })
                })
              }),
              b()(I()(e), '_handleRemoveFrontID', function () {
                var t = e.props,
                  a = t.frontID,
                  n = t.removeMedia,
                  i = t.setFrontID
                a && (n(a), i(void 0))
              }),
              b()(I()(e), '_handleCheckboxChange', function () {
                e.props.toggleCheckboxConfirmation()
              }),
              b()(I()(e), '_handleErrorButtonClick', function () {
                e._resetForm(), e.props.resetDocumentIdProcess()
              }),
              b()(I()(e), '_isErrorState', function () {
                var t = e.props,
                  a = t.uploadErrors
                return t.uploadFetchStatus === te.a.FAILED || !!a.length
              }),
              b()(I()(e), '_isUploading', function () {
                return e.props.uploadFetchStatus === te.a.LOADING
              }),
              b()(I()(e), '_renderCheckbox', function () {
                var t = e.props.isConfirmed
                return A.createElement(
                  w.a,
                  { style: [V.contentContainer, V.checkboxContainer] },
                  A.createElement(
                    w.a,
                    { style: V.checkbox },
                    A.createElement(lt.a, {
                      accessibilityLabelledBy: So,
                      checked: t,
                      onChange: e._handleCheckboxChange,
                    }),
                  ),
                  A.createElement(
                    w.a,
                    { nativeID: So, style: V.checkboxText },
                    A.createElement(W.b, { color: 'gray700' }, Po),
                    A.createElement(W.b, { color: 'gray700', style: V.text }, go),
                  ),
                )
              }),
              b()(I()(e), '_needsBackside', function () {
                var t = e.props,
                  a = t.documentFormats,
                  n = t.idCountry,
                  i = t.idType
                return a && n && i && a[n].id_types[i].needs_backside
              }),
              b()(I()(e), '_renderUploadTargets', function () {
                var t = e.props,
                  a = t.backImage,
                  n = t.frontImage,
                  i = e._needsBackside(),
                  r = i ? Do : Mo,
                  o = i ? ho : vo
                return A.createElement(
                  w.a,
                  { accessibilityLabelledBy: x.b, accessibilityRole: 'group', style: xo.gridContainer },
                  A.createElement(Zr, {
                    accessibilityLabel: r,
                    mediaItem: n,
                    onChange: e._handleAddFrontMedia,
                    onRemove: e._handleRemoveFrontID,
                    title: o,
                  }),
                  i &&
                    A.createElement(Zr, {
                      accessibilityLabel: Uo,
                      mediaItem: a,
                      onChange: e._handleAddBackMedia,
                      onRemove: e._handleRemoveBackID,
                      title: Fo,
                    }),
                )
              }),
              e
            )
          }
          return (
            E()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.resetAuthenticationResult(), this.props.resetDocumentIdProcess()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.uploadEntityId
                  t !== e.uploadEntityId &&
                    t &&
                    !this._isErrorState() &&
                    (this._handleScribe('success'), this._resetForm(), this.props.setNextFlow())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._resetForm()
                },
              },
              {
                key: '_resetForm',
                value: function () {
                  this._handleRemoveBackID(), this._handleRemoveFrontID(), this.props.resetIntakeUpload()
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  var t = this.props.analytics
                  t.scribe(
                    eo(
                      eo({}, t.contextualScribeNamespace),
                      {},
                      { element: 'upload', action: e, data: t.contextualScribeData },
                    ),
                  )
                },
              },
              {
                key: '_renderError',
                value: function () {
                  var e = this.props.uploadRequestError
                  return (
                    this._handleScribe('failure'),
                    A.createElement(Ur, { error: e, onButtonClick: this._handleErrorButtonClick })
                  )
                },
              },
              {
                key: '_render',
                value: function () {
                  var e = this.props,
                    t = e.backID,
                    a = e.frontID,
                    n = e.isConfirmed,
                    i = e.isNarrow,
                    r = (this._needsBackside() && !t) || !a || !n || this._isUploading()
                  return A.createElement(
                    w.a,
                    { style: [V.container, i && V.narrowContainer] },
                    A.createElement(
                      W.b,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: x.b,
                        size: 'title4',
                        style: V.header,
                        weight: 'heavy',
                      },
                      Lo,
                    ),
                    A.createElement(
                      w.a,
                      { style: V.scrollableContainer },
                      A.createElement(W.b, { color: 'gray700' }, yo),
                      this._renderUploadTargets(),
                      this._renderCheckbox(),
                    ),
                    A.createElement(
                      k.a,
                      { disabled: r, onPress: this._handleSubmit, style: V.buttonFixed, type: 'brandFilled' },
                      Go,
                    ),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  return this._isErrorState() ? this._renderError() : this._render()
                },
              },
            ]),
            a
          )
        })(A.Component),
        xo = B.a.create(function (e) {
          return { gridContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: e.spaces.space16 } }
        }),
        Bo = wr(Yo),
        Vo = { hasId: !0, hasEmail: !0, hasWebsite: !0 },
        wo =
          ((lo = {}),
          b()(lo, L.l.ACTIVISM, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype: b()({}, L.b.ACTIVIST, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
          }),
          b()(lo, L.l.COMPANY, {
            hasId: !1,
            hasEmail: !0,
            hasWebsite: !0,
            subtype:
              ((ao = {}),
              b()(ao, L.e.COMPANY, { hasId: !1, hasEmail: !0, hasWebsite: !0 }),
              b()(ao, L.e.EXECUTIVE, { hasId: !0, hasEmail: !0, hasWebsite: !0 }),
              ao),
          }),
          b()(lo, L.l.ENTERTAINMENT, {
            hasId: !1,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((no = {}),
              b()(no, L.f.ENTERTAINMENT_INDIVIDUAL, { hasId: !1, hasEmail: !1, hasWebsite: !1 }),
              b()(no, L.f.ENTERTAINMENT_COMPANY, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              b()(no, L.f.PRODUCTION, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              no),
          }),
          b()(lo, L.l.GOVERNMENT, {
            hasId: !1,
            hasEmail: !1,
            hasWebsite: !0,
            subtype: b()({}, L.i.CANDIDATE, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
          }),
          b()(lo, L.l.INFLUENCER_OTHER, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((io = {}),
              b()(io, L.j.INFLUENTIAL_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              b()(io, L.j.CONTENT_CREATOR, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              io),
          }),
          b()(lo, L.l.NEWS, {
            hasId: !1,
            hasEmail: !0,
            hasWebsite: !0,
            subtype:
              ((ro = {}),
              b()(ro, L.k.JOURNALIST, { hasId: !0, hasEmail: !0, hasWebsite: !0 }),
              b()(ro, L.k.FREELANCER, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              b()(ro, L.k.ORGANIZATION, { hasId: !1, hasEmail: !0, hasWebsite: !0 }),
              ro),
          }),
          b()(lo, L.l.SPORTS, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((oo = {}),
              b()(oo, L.q.SPORTS_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              b()(oo, L.q.SPORTS_ENTITY, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              b()(oo, L.q.GAMING_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              oo),
          }),
          lo)
      function Wo(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function ko(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Wo(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Wo(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var jo,
        Ho = f.a.i79902b4,
        Ko = f.a.fb2fcb5b,
        qo = f.a.e43425fa,
        zo = f.a.cb7c2e2e,
        Qo = f.a.a411926a,
        $o = f.a.g253cddf,
        Zo = f.a.cf93bcbf,
        Jo = f.a.ca5fb0d4,
        Xo = f.a.g40cd2c0,
        el = { title: Ho, description: Ko },
        tl =
          ((co = {}),
          b()(co, L.d.IDENTITY_DOCUMENT, { label: qo, subtext: zo }),
          b()(co, L.d.EMAIL, { label: Qo, subtext: $o }),
          b()(co, L.d.WEBSITE, { label: Zo, subtext: Jo }),
          co),
        al = ko(ko({}, el), {}, { items: ko({}, tl) }),
        nl = { title: f.a.a7f1cff6, description: f.a.ce40e7a5, websiteLabel: Zo },
        il = f.a.dff1555f,
        rl = f.a.ed751204,
        ol = f.a.fbc023bf,
        ll = { headline: il, subtext: rl, actionLabel: ol, tertiaryActionLabel: f.a.e785ce06 },
        cl = f.a.i8d58f3d,
        El = ko(ko({}, ll), {}, { tertiaryActionLabel: cl }),
        sl = f.a.eb21eca9,
        Il = ko(ko({}, ll), {}, { tertiaryActionLabel: sl }),
        Tl = f.a.f848a69d,
        ul = f.a.d59b5365,
        Nl = f.a.bfb01c62,
        dl = { headline: il, subtext: Tl, actionLabel: ol, tertiaryActionLabel: Nl },
        _l = ko(ko({}, dl), {}, { subtext: ul }),
        pl = { headline: il, subtext: Tl, actionLabel: ol, tertiaryActionLabel: Nl },
        Ol = f.a.ibd16281,
        bl = f.a.d5254e1b,
        Al = f.a.h45b00d7,
        Rl = f.a.bd9d7f96,
        fl = f.a.g32c2900,
        Cl = f.a.e6327f3b,
        ml = f.a.c7f75eab,
        Sl = f.a.eb08a392,
        Ll = f.a.je4c4696,
        yl = f.a.dcc23261,
        hl = f.a.h96ba9b6,
        Dl = f.a.e4610048,
        Fl = f.a.dedf41f1,
        Ul = f.a.c78e091a,
        vl = f.a.g5657ec3,
        Ml = f.a.baf718c3,
        Pl = f.a.c65bbbc1,
        gl = f.a.i31e3606,
        Gl = f.a.d85ef4a7,
        Yl = f.a.ddb19f72,
        xl = f.a.a8d332f2,
        Bl = f.a.f7afbaeb,
        Vl = f.a.d4ab0055,
        wl = f.a.d2a77621,
        Wl = f.a.e23b92c5,
        kl = f.a.b03ae068,
        jl = f.a.g0daba49,
        Hl = f.a.h85524c4,
        Kl = f.a.cdcd9cd5,
        ql = f.a.gcee7aad,
        zl = f.a.e6dc91b1,
        Ql = f.a.ga603b22,
        $l =
          ((mo = { header: Ho }),
          b()(
            mo,
            L.l.ACTIVISM,
            b()({}, L.b.ACTIVIST, {
              description: yl,
              items:
                ((Eo = {}),
                b()(Eo, L.d.IDENTITY_DOCUMENT, { label: qo, subtext: zo }),
                b()(Eo, L.d.WEBSITE, { label: Zo, subtext: hl, description: Dl, inputLabel: Xo }),
                Eo),
            }),
          ),
          b()(
            mo,
            L.l.INFLUENCER_OTHER,
            b()({}, L.j.INFLUENTIAL_INDIVIDUAL, {
              description: Fl,
              items:
                ((so = {}),
                b()(so, L.d.IDENTITY_DOCUMENT, { label: qo, subtext: zo }),
                b()(so, L.d.WEBSITE, { label: Zo, subtext: Ul, description: vl, inputLabel: Xo }),
                so),
            }),
          ),
          b()(
            mo,
            L.l.COMPANY,
            ((uo = {}),
            b()(uo, L.e.COMPANY, {
              description: Ml,
              items:
                ((Io = {}),
                b()(Io, L.d.EMAIL, { label: Qo, subtext: gl }),
                b()(Io, L.d.WEBSITE, { label: Zo, subtext: Rl, description: Yl, inputLabel: Xo }),
                Io),
            }),
            b()(uo, L.e.EXECUTIVE, {
              description: Pl,
              items:
                ((To = {}),
                b()(To, L.d.IDENTITY_DOCUMENT, { label: qo, subtext: zo }),
                b()(To, L.d.EMAIL, { label: Qo, subtext: gl }),
                b()(To, L.d.WEBSITE, { label: Zo, subtext: Gl, description: xl, inputLabel: Xo }),
                To),
            }),
            uo),
          ),
          b()(
            mo,
            L.l.ENTERTAINMENT,
            ((No = {}),
            b()(No, L.f.ENTERTAINMENT_COMPANY, {
              description: Al,
              items: b()({}, L.d.WEBSITE, { label: Zo, subtext: ml, description: Yl, inputLabel: Xo }),
            }),
            b()(No, L.f.PRODUCTION, {
              description: fl,
              items: b()({}, L.d.WEBSITE, { label: Zo, subtext: ml, description: Cl, inputLabel: Xo }),
            }),
            No),
          ),
          b()(
            mo,
            L.l.GOVERNMENT,
            b()({}, L.i.CANDIDATE, {
              description: Sl,
              items:
                ((_o = {}),
                b()(_o, L.d.IDENTITY_DOCUMENT, { label: qo, subtext: zo }),
                b()(_o, L.d.WEBSITE, { label: Zo, subtext: Rl, description: Ll, inputLabel: Xo }),
                _o),
            }),
          ),
          b()(
            mo,
            L.l.NEWS,
            ((Ao = {}),
            b()(Ao, L.k.FREELANCER, {
              description: Vl,
              items:
                ((po = {}),
                b()(po, L.d.IDENTITY_DOCUMENT, { label: qo, subtext: zo }),
                b()(po, L.d.WEBSITE, { label: Zo, subtext: Wl, description: Ol }),
                po),
            }),
            b()(Ao, L.k.JOURNALIST, {
              description: Bl,
              items:
                ((Oo = {}),
                b()(Oo, L.d.IDENTITY_DOCUMENT, { label: qo, subtext: zo }),
                b()(Oo, L.d.EMAIL, { label: Qo, subtext: wl }),
                b()(Oo, L.d.WEBSITE, { label: Zo, subtext: Wl, description: Ol }),
                Oo),
            }),
            b()(Ao, L.k.ORGANIZATION, {
              description: kl,
              items:
                ((bo = {}),
                b()(bo, L.d.EMAIL, { label: Qo, subtext: wl }),
                b()(bo, L.d.WEBSITE, { label: Zo, subtext: Rl, description: bl }),
                bo),
            }),
            Ao),
          ),
          b()(
            mo,
            L.l.SPORTS,
            ((Co = {}),
            b()(Co, L.q.SPORTS_INDIVIDUAL, {
              description: zl,
              items:
                ((Ro = {}),
                b()(Ro, L.d.IDENTITY_DOCUMENT, { label: qo, subtext: zo }),
                b()(Ro, L.d.WEBSITE, { label: Zo, subtext: Rl, description: Ql }),
                Ro),
            }),
            b()(Co, L.q.SPORTS_ENTITY, {
              description: Kl,
              items: b()({}, L.d.WEBSITE, { label: Zo, subtext: Rl, description: ql }),
            }),
            b()(Co, L.q.GAMING_INDIVIDUAL, {
              description: jl,
              items:
                ((fo = {}),
                b()(fo, L.d.IDENTITY_DOCUMENT, { label: qo, subtext: zo }),
                b()(fo, L.d.WEBSITE, { label: Zo, subtext: Rl, description: Hl }),
                fo),
            }),
            Co),
          ),
          mo)
      function Zl(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function Jl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Zl(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Zl(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var Xl,
        ec = function (e, t) {
          return e && t ? $l[e][t] : al
        },
        tc = function (e, t, a) {
          var n = ec(t, a).items,
            i = Vo
          t && a ? (i = wo[t].subtype[a]) : t && (i = wo[t])
          var r = []
          return (
            i.hasId &&
              r.push({
                helpText: n[L.d.IDENTITY_DOCUMENT].subtext,
                label: n[L.d.IDENTITY_DOCUMENT].label,
                value: L.d.IDENTITY_DOCUMENT,
              }),
            i.hasEmail && e && r.push({ helpText: n[L.d.EMAIL].subtext, label: n[L.d.EMAIL].label, value: L.d.EMAIL }),
            i.hasWebsite &&
              r.push({ helpText: n[L.d.WEBSITE].subtext, label: n[L.d.WEBSITE].label, value: L.d.WEBSITE }),
            r
          )
        },
        ac = Object.freeze(
          ((jo = {}),
          b()(jo, L.h.AUTHENTICITY_TYPE_SELECT, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              n = e.userEmail
            return {
              type: 'radio',
              props: {
                description: ec(t, a).description,
                getNextFormStep: function (e) {
                  switch (e) {
                    case L.d.IDENTITY_DOCUMENT:
                      return L.h.INTAKE_TYPE_SELECT
                    case L.d.EMAIL:
                      return L.h.EMAIL_VERIFICATION
                    case L.d.WEBSITE:
                      return L.h.SITE_VERIFICATION
                    default:
                      return L.h.THANK_YOU
                  }
                },
                items: tc(n, t, a),
                title: al.title,
              },
            }
          }),
          b()(jo, L.h.SITE_VERIFICATION, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              n = ec(t, a).items[L.d.WEBSITE]
            return {
              type: 'input',
              props: {
                title: nl.title,
                description: n.description || nl.description,
                items: [{ dataKey: L.c.WEBSITE, label: n.inputLabel || nl.websiteLabel, required: !0 }],
              },
            }
          }),
          b()(jo, L.h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, function (e) {
            var t,
              a,
              n,
              i,
              r,
              o = e.notabilityCategory,
              l = e.notabilityData,
              c = e.notabilitySubcategory,
              E = e.setFormStepData,
              s = e.setNextFlow,
              I = e.setPreviousFlow,
              T = []
            switch (o) {
              case L.l.COMPANY:
              case L.l.ACTIVISM:
                T = null !== (t = null == l ? void 0 : l.leadershipReferenceUrl) && void 0 !== t ? t : []
                break
              case L.l.INFLUENCER_OTHER:
              case L.l.ENTERTAINMENT:
                T = null !== (a = null == l ? void 0 : l.mainReferenceUrl) && void 0 !== a ? a : []
                break
              case L.l.GOVERNMENT:
                T = null !== (n = null == l ? void 0 : l.publicReferenceUrl) && void 0 !== n ? n : []
                break
              case L.l.NEWS:
                T = null !== (i = null == l ? void 0 : l.authorReferenceUrl) && void 0 !== i ? i : []
                break
              case L.l.SPORTS:
                T = null !== (r = null == l ? void 0 : l.teamReferenceUrl) && void 0 !== r ? r : []
            }
            var u = ll,
              N = function () {
                return s(L.h.AUTHENTICITY_TYPE_SELECT)
              }
            switch (c) {
              case L.n.CONTENT_CREATOR:
                ;(u = _l),
                  (N = function () {
                    return I()
                  })
                break
              case L.n.ENTERTAINMENT_INDIVIDUAL:
                ;(u = dl),
                  (N = function () {
                    return I()
                  })
                break
              case L.n.OFFICE:
                ;(u = Il),
                  (N = function () {
                    E(L.h.AUTHENTICITY_TYPE_SELECT, L.d.EMAIL), s(L.h.EMAIL_VERIFICATION)
                  })
                break
              case L.n.OFFICIAL:
                ;(u = El),
                  (N = function () {
                    E(L.h.AUTHENTICITY_TYPE_SELECT, L.d.IDENTITY_DOCUMENT), s(L.h.INTAKE_TYPE_SELECT)
                  })
            }
            return {
              type: 'info',
              props: Jl(
                Jl({}, u),
                {},
                {
                  onAction: function () {
                    E(L.h.AUTHENTICITY_TYPE_SELECT, L.d.WEBSITE),
                      E(L.h.SITE_VERIFICATION, b()({}, L.c.WEBSITE, T)),
                      s(L.h.REVIEW_SUBMIT)
                  },
                  onTertiaryAction: function () {
                    return N()
                  },
                },
              ),
            }
          }),
          b()(jo, L.h.WEBSITE_REFERENCE_CONFIRM_PROCEED, { type: 'info', props: Jl({}, pl) }),
          jo),
        )
      a('i4UL')
      function nc(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function ic(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nc(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : nc(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var rc,
        oc = Object.freeze(
          ((Xl = {}),
          b()(Xl, L.h.NOTABILITY_CATEGORY_SELECT, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'radio',
              props: {
                description: Ra.description,
                getNextFormStep: function (e) {
                  switch (e) {
                    case L.l.ACTIVISM:
                      return a || i ? L.h.ACTIVIST_QUALIFICATIONS : L.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE
                    case L.l.INFLUENCER_OTHER:
                      return a || i ? L.h.INFLUENCER_SUBCATEGORY : L.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE
                    case L.l.COMPANY:
                      return L.h.COMPANY_SUBCATEGORY
                    case L.l.ENTERTAINMENT:
                      return L.h.ENTERTAINMENT_QUALIFICATIONS
                    case L.l.GOVERNMENT:
                      return L.h.GOVERNMENT_SUBCATEGORY
                    case L.l.NEWS:
                      return L.h.NEWS_QUALIFICATIONS
                    case L.l.SPORTS:
                      return L.h.SPORTS_SUBCATEGORY
                    default:
                      return null
                  }
                },
                items: [
                  { label: Oa[L.l.GOVERNMENT], value: L.l.GOVERNMENT },
                  { label: Oa[L.l.COMPANY], value: L.l.COMPANY },
                  { label: Oa[L.l.NEWS], value: L.l.NEWS },
                  { label: Oa[L.l.ENTERTAINMENT], value: L.l.ENTERTAINMENT },
                  { label: Oa[L.l.SPORTS], value: L.l.SPORTS },
                  { label: Oa[L.l.INFLUENCER_OTHER], value: L.l.INFLUENCER_OTHER },
                  { label: Oa[L.l.ACTIVISM], value: L.l.ACTIVISM },
                ],
                title: Ra.title,
              },
            }
          }),
          b()(Xl, L.h.ACTIVIST_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: Fa.title,
              description: Fa.description,
              items: [
                ic(ic({}, Fa.items[0]), {}, { value: L.m.GOOGLE }),
                ic(ic({}, Fa.items[1]), {}, { value: L.m.WIKIPEDIA }),
                ic(ic({}, Fa.items[2]), {}, { value: L.m.NEWS }),
                ic(ic({}, Fa.items[3]), {}, { value: L.m.LEADERSHIP }),
              ],
              getNextFormStep: function (e) {
                return e === L.m.GOOGLE
                  ? L.h.ACTIVIST_GOOGLE_TRENDS
                  : e === L.m.WIKIPEDIA
                  ? L.h.ACTIVIST_WIKIPEDIA
                  : e === L.m.NEWS
                  ? L.h.ACTIVIST_NEWS
                  : e === L.m.LEADERSHIP
                  ? L.h.ACTIVIST_LEADERSHIP
                  : void 0
              },
            },
          }),
          b()(Xl, L.h.ACTIVIST_GOOGLE_TRENDS, {
            type: 'input',
            props: {
              title: va.title,
              description: va.description,
              items: [{ dataKey: L.m.GOOGLE, label: va.label, required: !0 }],
            },
          }),
          b()(Xl, L.h.ACTIVIST_LEADERSHIP, {
            type: 'input',
            props: {
              title: Ya.title,
              description: Ya.description,
              items: [{ dataKey: L.m.LEADERSHIP, label: Ya.label, required: !0 }],
              confirmationText: Ya.confirmationText,
            },
          }),
          b()(Xl, L.h.ACTIVIST_NEWS, {
            type: 'input',
            props: {
              title: ga.title,
              description: ga.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: ga.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: ga.addFieldText,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.ACTIVIST_WIKIPEDIA, {
            type: 'input',
            props: {
              title: Pa.title,
              description: Pa.description,
              items: [{ dataKey: L.m.WIKIPEDIA, label: Pa.label, required: !0 }],
            },
          }),
          b()(Xl, L.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE, {
            type: 'info',
            props: {
              headline: Fa.notEligibleTitle,
              subtext: Fa.notEligibleDescription,
              actionLabel: Fa.notEligibleButton,
            },
          }),
          b()(Xl, L.h.COMPANY_SUBCATEGORY, {
            type: 'radio',
            props: ic(
              ic({}, en),
              {},
              {
                items: [
                  ic(ic({}, en.items[0]), {}, { value: L.e.COMPANY }),
                  ic(ic({}, en.items[1]), {}, { value: L.e.EXECUTIVE }),
                ],
                getNextFormStep: function (e) {
                  return e === L.e.COMPANY
                    ? L.h.COMPANY_NOTABILITY_METHOD
                    : e === L.e.EXECUTIVE
                    ? L.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM
                    : void 0
                },
              },
            ),
          }),
          b()(Xl, L.h.COMPANY_NOTABILITY_METHOD, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = [
                ic(ic({}, an.items[0]), {}, { value: L.m.GOOGLE }),
                ic(ic({}, an.items[1]), {}, { value: L.m.WIKIPEDIA }),
                ic(ic({}, an.items[2]), {}, { value: L.m.STOCK }),
                ic(ic({}, an.items[3]), {}, { value: L.m.NEWS }),
              ]
            return {
              type: 'radio',
              props: ic(
                ic({}, an),
                {},
                {
                  items: a ? n : n.slice(0, -1),
                  getNextFormStep: function (e) {
                    return e === L.m.GOOGLE
                      ? L.h.COMPANY_GOOGLE_TRENDS
                      : e === L.m.WIKIPEDIA
                      ? L.h.COMPANY_WIKIPEDIA
                      : e === L.m.STOCK
                      ? L.h.COMPANY_STOCK_EXCHANGE
                      : e === L.m.NEWS
                      ? L.h.COMPANY_NEWS_REFERENCE
                      : void 0
                  },
                },
              ),
            }
          }),
          b()(Xl, L.h.COMPANY_GOOGLE_TRENDS, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: rn.title,
                description: rn.description,
                items: [{ dataKey: L.m.GOOGLE, label: rn.label, required: !0 }],
                nextFormStep: t ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.COMPANY_WIKIPEDIA, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: ln.title,
                description: ln.description,
                items: [{ dataKey: L.m.WIKIPEDIA, label: ln.label, required: !0 }],
                nextFormStep: t ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.COMPANY_STOCK_EXCHANGE, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: En.title,
                description: En.description,
                items: [{ dataKey: L.m.STOCK, label: En.label, required: !0 }],
                nextFormStep: t ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.COMPANY_NEWS_REFERENCE, {
            type: 'input',
            props: {
              title: In.title,
              description: In.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: In.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: In.addFieldText,
            },
          }),
          b()(Xl, L.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: ic({}, Nn) }),
          b()(Xl, L.h.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, {
            type: 'radio',
            props: ic(
              ic({}, _n),
              {},
              {
                items: [
                  ic(ic({}, _n.items[0]), {}, { value: L.m.NEWS }),
                  ic(ic({}, _n.items[1]), {}, { value: L.m.LEADERSHIP }),
                ],
                getNextFormStep: function (e) {
                  return e === L.m.NEWS
                    ? L.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE
                    : e === L.m.LEADERSHIP
                    ? L.h.COMPANY_INDIVIDUAL_LEADERSHIP
                    : void 0
                },
              },
            ),
          }),
          b()(Xl, L.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE, {
            type: 'input',
            props: {
              title: On.title,
              description: On.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: On.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: On.addFieldText,
            },
          }),
          b()(Xl, L.h.COMPANY_INDIVIDUAL_LEADERSHIP, {
            type: 'input',
            props: {
              title: bn.title,
              description: bn.description,
              items: [{ dataKey: L.m.LEADERSHIP, label: bn.label, required: !0 }],
              confirmationText: bn.confirmationText,
            },
          }),
          b()(Xl, L.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Mn.title,
                description: Mn.description,
                items: [{ dataKey: L.m.GOOGLE, label: Mn.label, required: !0 }],
                nextFormStep: a || i ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
            type: 'input',
            props: {
              title: Pn.title,
              description: Pn.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: Pn.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: Pn.addFieldText,
            },
          }),
          b()(Xl, L.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n,
              r = [
                ic(ic({}, vn.items[0]), {}, { value: L.m.GOOGLE }),
                ic(ic({}, vn.items[1]), {}, { value: L.m.WIKIPEDIA }),
                ic(ic({}, vn.items[2]), {}, { value: L.m.STOCK }),
                ic(ic({}, vn.items[3]), {}, { value: L.m.NEWS }),
              ]
            return {
              type: 'radio',
              props: ic(
                ic({}, vn),
                {},
                {
                  items: a || i ? r : r.slice(0, -1),
                  getNextFormStep: function (e) {
                    return e === L.m.GOOGLE
                      ? L.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS
                      : e === L.m.WIKIPEDIA
                      ? L.h.ENTERTAINMENT_COMPANY_WIKIPEDIA
                      : e === L.m.STOCK
                      ? L.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE
                      : e === L.m.NEWS
                      ? L.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE
                      : void 0
                  },
                },
              ),
            }
          }),
          b()(Xl, L.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: gn.title,
                description: gn.description,
                items: [{ dataKey: L.m.STOCK, label: gn.label, required: !0 }],
                nextFormStep: a || i ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.ENTERTAINMENT_COMPANY_WIKIPEDIA, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Gn.title,
                description: Gn.description,
                items: [{ dataKey: L.m.WIKIPEDIA, label: Gn.label, required: !0 }],
                nextFormStep: a || i ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
            type: 'input',
            props: {
              title: Zn.title,
              description: Zn.description,
              items: [{ dataKey: L.m.IMDB, label: Zn.label, required: !0 }],
            },
          }),
          b()(Xl, L.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
            type: 'input',
            props: {
              title: Xn.title,
              description: Xn.description,
              items: [{ dataKey: L.m.MAIN, label: Xn.label, required: !0 }],
            },
          }),
          b()(Xl, L.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
            type: 'input',
            props: {
              title: Jn.title,
              description: Jn.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: In.articleLabelGenerator, required: !0 })),
              addFieldText: Jn.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: $n.title,
              description: $n.description,
              items: [
                { helpText: $n.items[0].description, label: $n.items[0].label, value: L.m.IMDB },
                { helpText: $n.items[1].description, label: $n.items[1].label, value: L.m.NEWS },
              ],
              getNextFormStep: function (e) {
                return e === L.m.IMDB
                  ? L.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL
                  : e === L.m.NEWS
                  ? L.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS
                  : void 0
              },
            },
          }),
          b()(Xl, L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Ln.title,
                description: Ln.description,
                items: [{ dataKey: L.m.GOOGLE, label: Ln.label, required: !0 }],
                nextFormStep:
                  a || i ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
            type: 'input',
            props: {
              title: yn.title,
              description: yn.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: yn.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: yn.addFieldText,
            },
          }),
          b()(Xl, L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n,
              r = [
                ic(ic({}, hn.items[0]), {}, { value: L.m.GOOGLE }),
                ic(ic({}, hn.items[1]), {}, { value: L.m.WIKIPEDIA }),
                ic(ic({}, hn.items[2]), {}, { value: L.m.STOCK }),
                ic(ic({}, hn.items[3]), {}, { value: L.m.NEWS }),
              ]
            return {
              type: 'radio',
              props: ic(
                ic({}, hn),
                {},
                {
                  items: a || i ? r : r.slice(0, -1),
                  getNextFormStep: function (e) {
                    return e === L.m.GOOGLE
                      ? L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS
                      : e === L.m.WIKIPEDIA
                      ? L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA
                      : e === L.m.STOCK
                      ? L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE
                      : e === L.m.NEWS
                      ? L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE
                      : void 0
                  },
                },
              ),
            }
          }),
          b()(Xl, L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Dn.title,
                description: Dn.description,
                items: [{ dataKey: L.m.STOCK, label: Dn.label, required: !0 }],
                nextFormStep:
                  a || i ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Fn.title,
                description: Fn.description,
                items: [{ dataKey: L.m.WIKIPEDIA, label: Fn.label, required: !0 }],
                nextFormStep:
                  a || i ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.ENTERTAINMENT_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: Un.title,
              description: Un.description,
              items: [
                ic(ic({}, Un.items[0]), {}, { value: L.f.ENTERTAINMENT_COMPANY }),
                ic(ic({}, Un.items[1]), {}, { value: L.f.ENTERTAINMENT_INDIVIDUAL }),
                ic(ic({}, Un.items[2]), {}, { value: L.f.PRODUCTION }),
              ],
              getNextFormStep: function (e) {
                return e === L.f.ENTERTAINMENT_COMPANY
                  ? L.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD
                  : e === L.f.ENTERTAINMENT_INDIVIDUAL
                  ? L.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS
                  : e === L.f.PRODUCTION
                  ? L.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD
                  : void 0
              },
            },
          }),
          b()(Xl, L.h.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
            type: 'info',
            props: {
              headline: li.candidateTitle,
              subtext: li.candidateDescription,
              actionLabel: li.confirmButtonLabel,
              tertiaryActionLabel: li.declineButtonLabel,
            },
          }),
          b()(Xl, L.h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: Ei.title,
              description: Ei.description,
              items: Ze()(Array(5).fill({ dataKey: L.m.NEWS, labelGenerator: Ei.articleLabelGenerator, required: !0 })),
              addFieldText: Ei.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
            type: 'info',
            props: {
              headline: ci.candidateTitle,
              subtext: ci.candidateDescription,
              actionLabel: ci.confirmButtonLabel,
              tertiaryActionLabel: ci.declineButtonLabel,
              tertiaryActionLink: P,
            },
          }),
          b()(Xl, L.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
            type: 'input',
            props: {
              title: ui.title,
              description: ui.description,
              items: [{ dataKey: L.m.PUBLIC, label: ui.websiteLabel, required: !0 }],
            },
          }),
          b()(Xl, L.h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: si.title,
              description: si.description,
              items: Ze()(Array(5).fill({ dataKey: L.m.NEWS, labelGenerator: si.articleLabelGenerator, required: !0 })),
              addFieldText: si.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
            type: 'info',
            props: {
              headline: ci.officeTitle,
              subtext: ci.officeDescription,
              actionLabel: ci.confirmButtonLabel,
              tertiaryActionLabel: ci.declineButtonLabel,
              tertiaryActionLink: P,
            },
          }),
          b()(Xl, L.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
            type: 'input',
            props: {
              title: di.title,
              description: di.description,
              items: [{ dataKey: L.m.PUBLIC, label: di.websiteLabel, required: !0 }],
            },
          }),
          b()(Xl, L.h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
            type: 'info',
            props: {
              headline: li.officialTitle,
              subtext: li.officialDescription,
              actionLabel: li.confirmButtonLabel,
              tertiaryActionLabel: li.declineButtonLabel,
            },
          }),
          b()(Xl, L.h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: Ii.title,
              description: Ii.description,
              items: Ze()(Array(5).fill({ dataKey: L.m.NEWS, labelGenerator: Ii.articleLabelGenerator, required: !0 })),
              addFieldText: Ii.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
            type: 'info',
            props: {
              headline: ci.officialTitle,
              subtext: ci.officialDescription,
              actionLabel: ci.confirmButtonLabel,
              tertiaryActionLabel: ci.declineButtonLabel,
              tertiaryActionLink: P,
            },
          }),
          b()(Xl, L.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
            type: 'input',
            props: {
              title: _i.title,
              description: _i.description,
              items: [{ dataKey: L.m.PUBLIC, label: _i.websiteLabel, required: !0 }],
            },
          }),
          b()(Xl, L.h.GOVERNMENT_SUBCATEGORY, {
            type: 'radio',
            props: {
              title: oi.title,
              description: oi.description,
              items: [
                ic(ic({}, oi.items[0]), {}, { value: L.i.OFFICIAL }),
                ic(ic({}, oi.items[1]), {}, { value: L.i.CANDIDATE }),
                ic(ic({}, oi.items[2]), {}, { value: L.i.OFFICE }),
              ],
              getNextFormStep: function (e) {
                return e === L.i.OFFICIAL
                  ? L.h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM
                  : e === L.i.CANDIDATE
                  ? L.h.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM
                  : e === L.i.OFFICE
                  ? L.h.GOVERNMENT_OFFICE_PROFILE_CONFIRM
                  : void 0
              },
            },
          }),
          b()(Xl, L.h.CONTENT_CREATOR_GOOGLE_TRENDS, {
            type: 'input',
            props: {
              title: jn.title,
              description: jn.description,
              items: [{ dataKey: L.m.GOOGLE, label: jn.label, required: !0 }],
            },
          }),
          b()(Xl, L.h.CONTENT_CREATOR_NEWS, {
            type: 'input',
            props: {
              title: qn.title,
              description: qn.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: qn.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: qn.addFieldText,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.CONTENT_CREATOR_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: wn.title,
              description: wn.description,
              items: [
                ic(ic({}, wn.items[0]), {}, { value: L.m.GOOGLE }),
                ic(ic({}, wn.items[1]), {}, { value: L.m.WIKIPEDIA }),
                ic(ic({}, wn.items[2]), {}, { value: L.m.NEWS }),
              ],
              getNextFormStep: function (e) {
                return e === L.m.GOOGLE
                  ? L.h.CONTENT_CREATOR_GOOGLE_TRENDS
                  : e === L.m.WIKIPEDIA
                  ? L.h.CONTENT_CREATOR_WIKIPEDIA
                  : e === L.m.NEWS
                  ? L.h.CONTENT_CREATOR_NEWS
                  : void 0
              },
            },
          }),
          b()(Xl, L.h.CONTENT_CREATOR_WIKIPEDIA, {
            type: 'input',
            props: {
              title: Kn.title,
              description: Kn.description,
              items: [{ dataKey: L.m.WIKIPEDIA, label: Kn.label, required: !0 }],
            },
          }),
          b()(Xl, L.h.CREATOR_PROFILE, {
            type: 'input',
            props: {
              title: Wn.title,
              description: Wn.description,
              items: [{ dataKey: L.m.MAIN, label: Wn.items[0].label, required: !0 }],
            },
          }),
          b()(Xl, L.h.INFLUENCER_GOOGLE_TRENDS, {
            type: 'input',
            props: {
              title: Ka.title,
              description: Ka.description,
              items: [{ dataKey: L.m.GOOGLE, label: Ka.label, required: !0 }],
            },
          }),
          b()(Xl, L.h.INFLUENCER_NEWS, {
            type: 'input',
            props: {
              title: Qa.title,
              description: Qa.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: Qa.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: Qa.addFieldText,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.INFLUENCER_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: ja.title,
              description: ja.description,
              items: [
                ic(ic({}, ja.items[0]), {}, { value: L.m.GOOGLE }),
                ic(ic({}, ja.items[1]), {}, { value: L.m.WIKIPEDIA }),
                ic(ic({}, ja.items[2]), {}, { value: L.m.NEWS }),
              ],
              getNextFormStep: function (e) {
                return e === L.m.GOOGLE
                  ? L.h.INFLUENCER_GOOGLE_TRENDS
                  : e === L.m.WIKIPEDIA
                  ? L.h.INFLUENCER_WIKIPEDIA
                  : e === L.m.NEWS
                  ? L.h.INFLUENCER_NEWS
                  : void 0
              },
            },
          }),
          b()(Xl, L.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE, {
            type: 'info',
            props: {
              headline: ja.notEligibleTitle,
              subtext: ja.notEligibleDescription,
              actionLabel: ja.notEligibleButton,
            },
          }),
          b()(Xl, L.h.INFLUENCER_SUBCATEGORY, {
            type: 'radio',
            props: ic(
              ic({}, Va),
              {},
              {
                items: [
                  ic(ic({}, Va.items[0]), {}, { value: L.j.CONTENT_CREATOR }),
                  ic(ic({}, Va.items[1]), {}, { value: L.j.INFLUENTIAL_INDIVIDUAL }),
                ],
                getNextFormStep: function (e) {
                  return e === L.j.CONTENT_CREATOR
                    ? L.h.CONTENT_CREATOR_QUALIFICATIONS
                    : e === L.j.INFLUENTIAL_INDIVIDUAL
                    ? L.h.INFLUENCER_QUALIFICATIONS
                    : void 0
                },
              },
            ),
          }),
          b()(Xl, L.h.INFLUENCER_WIKIPEDIA, {
            type: 'input',
            props: {
              title: za.title,
              description: za.description,
              items: [{ dataKey: L.m.WIKIPEDIA, label: za.label, required: !0 }],
            },
          }),
          b()(Xl, L.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: vi.title,
              description: vi.description,
              items: Ze()(
                Array(3).fill({
                  dataKey: L.m.ARTICLES,
                  labelGenerator: vi.articleNumerationLabelGenerator,
                  required: !0,
                }),
              ),
              addFieldText: vi.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: vi.title,
              description: vi.description,
              items: Ze()(
                Array(3).fill({
                  dataKey: L.m.ARTICLES,
                  labelGenerator: vi.articleNumerationLabelGenerator,
                  required: !0,
                }),
              ),
              addFieldText: vi.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
            type: 'input',
            props: {
              title: Ui.title,
              description: Ui.description,
              items: [{ dataKey: L.m.AUTHOR, label: Ui.websiteLabel, required: !0 }],
              confirmationText: Ui.confirmationText,
            },
          }),
          b()(Xl, L.h.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, {
            type: 'info',
            props: {
              headline: Mi.title,
              subtext: Mi.description,
              actionLabel: Mi.actionLabel,
              tertiaryActionLabel: Mi.tertiaryActionLabel,
            },
          }),
          b()(Xl, L.h.NEWS_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: fi.title,
              description: fi.description,
              items: [
                { helpText: fi.items[0].description, label: fi.items[0].label, value: L.k.JOURNALIST },
                { helpText: fi.items[1].description, label: fi.items[1].label, value: L.k.FREELANCER },
                { helpText: fi.items[2].description, label: fi.items[2].label, value: L.k.ORGANIZATION },
              ],
              getNextFormStep: function (e) {
                return e === L.k.JOURNALIST
                  ? L.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION
                  : e === L.k.FREELANCER
                  ? L.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS
                  : e === L.k.ORGANIZATION
                  ? L.h.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION
                  : void 0
              },
            },
          }),
          b()(Xl, L.h.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, {
            type: 'info',
            props: ic(ic({}, Si), {}, { tertiaryActionLink: P }),
          }),
          b()(Xl, L.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, { type: 'screenName', props: ic({}, mi) }),
          b()(Xl, L.h.NEWS_JOURNALIST_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: Fi.title,
              description: Fi.description,
              items: [
                { helpText: Fi.items[0].description, label: Fi.items[0].label, value: L.m.AUTHOR },
                { helpText: Fi.items[1].description, label: Fi.items[1].label, value: L.m.ARTICLES },
              ],
              getNextFormStep: function (e) {
                return e === L.m.ARTICLES
                  ? L.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS
                  : e === L.m.AUTHOR
                  ? L.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL
                  : void 0
              },
            },
          }),
          b()(Xl, L.h.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION, {
            type: 'info',
            props: {
              headline: Ci.title,
              subtext: Ci.description,
              actionLabel: Ci.confirmButtonLabel,
              tertiaryActionLabel: Ci.declineButtonLabel,
              tertiaryActionLink: P,
            },
          }),
          b()(Xl, L.h.NEWS_ORGANIZATION_QUALIFICATIONS, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'radio',
              props: {
                title: Pi.title,
                description: Pi.description,
                items: [
                  { helpText: Pi.items[0].description, label: Pi.items[0].label, value: L.m.GOOGLE },
                  { helpText: Pi.items[1].description, label: Pi.items[1].label, value: L.m.WIKIPEDIA },
                  { helpText: Pi.items[2].description, label: Pi.items[2].label, value: L.m.STOCK },
                ].concat(
                  Ze()(
                    a || i
                      ? [{ helpText: Pi.items[3].description, label: Pi.items[3].label, value: L.m.ARTICLES }]
                      : [],
                  ),
                ),
                getNextFormStep: function (e) {
                  return e === L.m.GOOGLE
                    ? L.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL
                    : e === L.m.WIKIPEDIA
                    ? L.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL
                    : e === L.m.STOCK
                    ? L.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL
                    : e === L.m.ARTICLES
                    ? L.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS
                    : void 0
                },
              },
            }
          }),
          b()(Xl, L.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: gi.title,
                description: gi.description,
                items: [{ dataKey: L.m.GOOGLE, label: gi.label, required: !0 }],
                nextFormStep:
                  a || i ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
              },
            }
          }),
          b()(Xl, L.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Gi.title,
                description: Gi.description,
                items: [{ dataKey: L.m.WIKIPEDIA, label: Gi.label, required: !0 }],
                nextFormStep:
                  a || i ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
              },
            }
          }),
          b()(Xl, L.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Yi.title,
                description: Yi.description,
                items: [{ dataKey: L.m.STOCK, label: Yi.label, required: !0 }],
                nextFormStep:
                  a || i ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
              },
            }
          }),
          b()(Xl, L.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: xi.title,
              description: xi.description,
              items: Ze()(
                Array(3).fill({ dataKey: L.m.ARTICLES, labelGenerator: xi.articleLabelGenerator, required: !0 }),
              ),
              addFieldText: xi.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: Tr.title,
              description: Tr.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: Tr.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: Tr.addFieldText,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.GAMING_INDIVIDUAL_NOTABILITY_METHOD, {
            type: 'radio',
            props: {
              title: cr.title,
              description: cr.description,
              items: [
                { helpText: cr.items[0].description, label: cr.items[0].label, value: L.m.NEWS },
                { helpText: cr.items[1].description, label: cr.items[1].label, value: L.m.TEAM },
              ],
              getNextFormStep: function (e) {
                return e === L.m.TEAM
                  ? L.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL
                  : e === L.m.NEWS
                  ? L.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS
                  : void 0
              },
            },
          }),
          b()(Xl, L.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL, {
            type: 'input',
            props: {
              title: Ir.title,
              description: Ir.description,
              items: [{ dataKey: L.m.TEAM, label: Ir.websiteLabel, required: !0 }],
            },
          }),
          b()(Xl, L.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: sr.title,
              description: sr.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: sr.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: sr.addFieldText,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
            type: 'input',
            props: {
              title: Er.title,
              description: Er.description,
              items: [{ dataKey: L.m.TEAM, label: Er.websiteLabel, required: !0 }],
            },
          }),
          b()(Xl, L.h.SPORTS_ENTITY_NOTABILITY_METHOD, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = [
                ic(ic({}, Xi.items[0]), {}, { value: L.m.GOOGLE }),
                ic(ic({}, Xi.items[1]), {}, { value: L.m.WIKIPEDIA }),
                ic(ic({}, Xi.items[2]), {}, { value: L.m.STOCK }),
                ic(ic({}, Xi.items[3]), {}, { value: L.m.TEAM }),
                ic(ic({}, Xi.items[4]), {}, { value: L.m.NEWS }),
              ]
            return {
              type: 'radio',
              props: ic(
                ic({}, Xi),
                {},
                {
                  items: a ? n : n.slice(0, -1),
                  getNextFormStep: function (e) {
                    return e === L.m.GOOGLE
                      ? L.h.SPORTS_ENTITY_GOOGLE_TRENDS
                      : e === L.m.WIKIPEDIA
                      ? L.h.SPORTS_ENTITY_WIKIPEDIA
                      : e === L.m.STOCK
                      ? L.h.SPORTS_ENTITY_STOCK_REFERENCE
                      : e === L.m.TEAM
                      ? L.h.SPORTS_ENTITY_WEBSITE
                      : e === L.m.NEWS
                      ? L.h.SPORTS_ENTITY_NEWS_REFERENCE
                      : void 0
                  },
                },
              ),
            }
          }),
          b()(Xl, L.h.SPORTS_ENTITY_GOOGLE_TRENDS, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: er.title,
                description: er.description,
                items: [{ dataKey: L.m.GOOGLE, label: er.label, required: !0 }],
                nextFormStep: t ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.SPORTS_ENTITY_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.SPORTS_ENTITY_WIKIPEDIA, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: tr.title,
                description: tr.description,
                items: [{ dataKey: L.m.WIKIPEDIA, label: tr.label, required: !0 }],
                nextFormStep: t ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.SPORTS_ENTITY_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.SPORTS_ENTITY_STOCK_REFERENCE, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: ar.title,
                description: ar.description,
                items: [{ dataKey: L.m.STOCK, label: ar.label, required: !0 }],
                nextFormStep: t ? L.h.AUTHENTICITY_TYPE_SELECT : L.h.SPORTS_ENTITY_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.SPORTS_ENTITY_WEBSITE, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: nr.title,
                description: nr.description,
                items: [{ dataKey: L.m.TEAM, label: nr.label, required: !0 }],
                nextFormStep: t ? L.h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL : L.h.SPORTS_ENTITY_NEWS_REFERENCE,
              },
            }
          }),
          b()(Xl, L.h.SPORTS_ENTITY_NEWS_REFERENCE, {
            type: 'input',
            props: {
              title: ir.title,
              description: ir.description,
              items: Ze()(Array(3).fill({ dataKey: L.m.NEWS, labelGenerator: ir.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: ir.addFieldText,
              maxItems: 10,
            },
          }),
          b()(Xl, L.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: ic({}, zi) }),
          b()(Xl, L.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: ic({}, Qi) }),
          b()(Xl, L.h.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, {
            type: 'radio',
            props: {
              title: lr.title,
              description: lr.description,
              items: [
                { helpText: lr.items[0].description, label: lr.items[0].label, value: L.m.NEWS },
                { helpText: lr.items[1].description, label: lr.items[1].label, value: L.m.TEAM },
              ],
              getNextFormStep: function (e) {
                return e === L.m.TEAM
                  ? L.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL
                  : e === L.m.NEWS
                  ? L.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS
                  : void 0
              },
            },
          }),
          b()(Xl, L.h.GAMING_INDIVIDUAL_INELIGIBLE, { type: 'info', props: ic({}, $i) }),
          b()(Xl, L.h.SPORTS_SUBCATEGORY, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t
            return {
              type: 'radio',
              props: ic(
                ic({}, ji),
                {},
                {
                  items: [
                    ic(ic({}, ji.items[0]), {}, { value: L.q.SPORTS_INDIVIDUAL }),
                    ic(ic({}, ji.items[1]), {}, { value: L.q.SPORTS_ENTITY }),
                    ic(ic({}, ji.items[2]), {}, { value: L.q.GAMING_INDIVIDUAL }),
                  ],
                  getNextFormStep: function (e) {
                    return e === L.q.SPORTS_INDIVIDUAL
                      ? L.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM
                      : e === L.q.SPORTS_ENTITY
                      ? L.h.SPORTS_ENTITY_NOTABILITY_METHOD
                      : e === L.q.GAMING_INDIVIDUAL
                      ? a
                        ? L.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM
                        : L.h.GAMING_INDIVIDUAL_INELIGIBLE
                      : void 0
                  },
                },
              ),
            }
          }),
          Xl),
        ),
        lc = Object.freeze(
          ((rc = {}),
          b()(rc, L.h.TEST_INPUT, {
            type: 'input',
            props: {
              title: 'test input form',
              description: 'description here',
              items: [
                { dataKey: L.m.NEWS, label: 'news url', required: !0 },
                { dataKey: L.m.PUBLIC, label: 'public url', required: !1 },
              ],
              allowAddFields: !0,
            },
          }),
          b()(rc, L.h.TEST_PIVOT, {
            type: 'pivot',
            props: {
              title: 'test pivot form',
              description: 'description here',
              items: [
                { description: 'go to test input screen', label: 'input', nextStep: L.h.TEST_INPUT },
                { description: 'go to test radio screen', label: 'radio', nextStep: L.h.TEST_RADIO },
              ],
            },
          }),
          b()(rc, L.h.TEST_RADIO, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'radio',
              props: {
                title: 'test radio form',
                description: 'description here',
                footer: 'footer here',
                items: [
                  {
                    helpText: 'if followers eligible go to test pivot else test input',
                    label: 'followers test',
                    value: 'radio 1',
                  },
                  {
                    helpText: 'if mentions eligible go to test pivot else test input',
                    label: 'mentions test',
                    value: 'radio 2',
                  },
                  {
                    helpText: 'if either eligible go to test pivot else test input',
                    label: 'followers/mentions test',
                    value: 'radio 3',
                  },
                ],
                getNextFormStep: function (e) {
                  return 'radio 1' === e
                    ? a
                      ? L.h.TEST_PIVOT
                      : L.h.TEST_INPUT
                    : 'radio 2' === e
                    ? i
                      ? L.h.TEST_PIVOT
                      : L.h.TEST_INPUT
                    : a || i
                    ? L.h.TEST_PIVOT
                    : L.h.TEST_INPUT
                },
              },
            }
          }),
          rc),
        )
      function cc(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function Ec(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? cc(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : cc(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var sc = Object.freeze(Ec(Ec(Ec({}, ac), oc), lc)),
        Ic = a('oQhu'),
        Tc = function (e) {
          var t = Object(Ce.y)(e)
          return null != t && t.radioData ? t.radioData : ''
        },
        uc = Object(fe.a)()
          .propsFromState(function () {
            return { currentStep: Ce.z, formHistory: Tc }
          })
          .propsFromActions(function () {
            return { setFormStepData: Ce.R, setNextFlow: Ce.V, updateFormHistory: Ce.Y }
          })
          .withAnalytics(),
        Nc = a('fyvP')
      function dc(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function _c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? dc(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : dc(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var pc = f.a.c1df579e,
        Oc = B.a.create(function (e) {
          return {
            radioContainer: {
              paddingRight: 'calc('.concat(e.spaces.space12, ' + ').concat(e.borderWidths.medium, ')'),
            },
          }
        }),
        bc = uc(function (e) {
          var t = e.analytics,
            a = e.buttonText,
            n = void 0 === a ? pc : a,
            i = e.currentStep,
            r = e.description,
            o = e.footer,
            l = e.formHistory,
            c = e.getNextFormStep,
            E = e.isNarrow,
            s = e.items,
            I = e.setFormStepData,
            T = e.setNextFlow,
            u = e.title,
            N = e.updateFormHistory,
            d = A.useState(l),
            _ = Y()(d, 2),
            p = _[0],
            O = _[1]
          A.useEffect(
            function () {
              O(l), I(i, l)
            },
            [i, l, I],
          )
          return A.createElement(
            w.a,
            { style: [V.container, E && V.narrowContainer] },
            A.createElement(
              W.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: x.b,
                size: 'title4',
                style: V.header,
                weight: 'heavy',
              },
              u,
            ),
            A.createElement(
              w.a,
              { style: V.scrollableContainer },
              r && A.createElement(W.b, { color: 'gray700' }, r),
              A.createElement(
                w.a,
                { style: [V.contentContainer, Oc.radioContainer] },
                A.createElement(Nc.a, {
                  accessibilityLabel: u,
                  name: ''.concat(u, '-radiogroup'),
                  onChange: function (e, t) {
                    O(t), I(i, t)
                  },
                  options: s,
                  value: p,
                }),
              ),
              o && A.createElement(W.b, { color: 'gray700' }, o),
            ),
            A.createElement(
              k.a,
              {
                disabled: !p,
                onClick: function () {
                  var e = _c(
                    _c({}, t.contextualScribeNamespace),
                    {},
                    { element: 'CTA', action: 'click', data: t.contextualScribeData },
                  )
                  'notability_qualifications_select' === t.contextualScribeNamespace.component &&
                    (e = _c(
                      _c({}, e),
                      {},
                      {
                        data: _c(
                          _c({}, e.data),
                          {},
                          {
                            verification_application_details: _c(
                              _c({}, e.data.verification_application_details),
                              {},
                              { notability_method: [at(p)] },
                            ),
                          },
                        ),
                      },
                    )),
                    t.scribe(e),
                    N(p || '')
                  var a = c(p)
                  a && T(a)
                },
                style: V.buttonFixed,
                type: 'brandFilled',
              },
              n,
            ),
          )
        }),
        Ac = a('5FtR'),
        Rc = Object(fe.a)().propsFromActions(function () {
          return { setNextFlow: Ce.V }
        }),
        fc = a('EweD'),
        Cc = 'verification-checkbox-label',
        mc = f.a.c1df579e,
        Sc = f.a.a6278dcb,
        Lc = function (e) {
          return !e.match(/\W/g)
        },
        yc = B.a.create(function (e) {
          return { input: { paddingHorizontal: 0 }, checkboxContainer: { paddingTop: 0 } }
        }),
        hc = Rc(function (e) {
          var t = e.buttonText,
            a = void 0 === t ? mc : t,
            n = e.confirmationText,
            i = e.description,
            r = e.isNarrow,
            o = e.setNextFlow,
            l = e.title,
            c = A.useState(''),
            E = Y()(c, 2),
            s = E[0],
            I = E[1],
            T = A.useState(!1),
            u = Y()(T, 2),
            N = u[0],
            d = u[1],
            _ = A.useState(!0),
            p = Y()(_, 2),
            O = p[0],
            b = p[1]
          return (
            A.useEffect(
              function () {
                var e = !!s && Lc(s)
                b(!e || !(!n || N))
              },
              [n, N, s, b],
            ),
            A.createElement(
              w.a,
              { style: [V.container, r && V.narrowContainer] },
              A.createElement(
                W.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: x.b,
                  size: 'title4',
                  style: V.header,
                  weight: 'heavy',
                },
                l,
              ),
              A.createElement(
                w.a,
                { style: V.scrollableContainer },
                i && A.createElement(W.b, { color: 'gray700' }, i),
                A.createElement(
                  w.a,
                  { accessibilityLabelledBy: x.b, accessibilityRole: 'group', style: V.contentContainer },
                  A.createElement(ot.a, {
                    Icon: fc.a,
                    invalid: !Lc(s),
                    label: Sc,
                    name: '',
                    onChange: function (e) {
                      return I(e.target.value)
                    },
                    style: yc.input,
                    value: s,
                  }),
                ),
                n &&
                  A.createElement(
                    w.a,
                    { style: [V.contentContainer, V.checkboxContainer, yc.checkboxContainer] },
                    A.createElement(
                      w.a,
                      { style: V.checkbox },
                      A.createElement(lt.a, {
                        accessibilityLabelledBy: Cc,
                        checked: N,
                        onChange: function () {
                          return d(!N)
                        },
                      }),
                    ),
                    A.createElement(
                      w.a,
                      { nativeID: Cc, style: V.checkboxText },
                      A.createElement(W.b, { color: 'gray700' }, n),
                    ),
                  ),
              ),
              A.createElement(
                k.a,
                {
                  disabled: O,
                  onClick: function () {
                    return o()
                  },
                  style: V.buttonFixed,
                  type: 'brandFilled',
                },
                a,
              ),
            )
          )
        }),
        Dc = a('7JQg'),
        Fc = (a('hBvt'), a('v6aA')),
        Uc = f.a.ec6801cb,
        vc = f.a.j24c37b2,
        Mc = function (e) {
          var t,
            a = e.daysForDecision,
            n = void 0 === a ? 14 : a,
            i = e.isNarrow,
            r = e.link,
            o = e.onSurveyClick,
            l = e.surveyUrl,
            c = A.useContext(Fc.a).featureSwitches.isTrue('identity_verification_notable_demo_survey')
          return A.createElement(
            w.a,
            { style: V.largeBannerContainer },
            A.createElement(pe, { isNarrow: i, type: Ne.SENT }),
            A.createElement(
              w.a,
              { style: [V.container, V.verticalCenter, i && V.narrowContainer] },
              A.createElement(
                W.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: x.b,
                  size: 'title4',
                  style: V.header,
                  weight: 'heavy',
                },
                Uc,
              ),
              A.createElement(
                W.b,
                { color: 'gray700' },
                ((t = n),
                A.createElement(f.a.I18NFormatMessage, { $i18n: 'a1c39f5b', days: rt.a.getFormattedCount(t) })),
              ),
              c &&
                l &&
                A.createElement(
                  W.b,
                  { color: 'gray700', style: V.text },
                  A.createElement(
                    f.a.I18NFormatMessage,
                    { $i18n: 'ja826537' },
                    A.createElement(
                      W.b,
                      { link: { pathname: l, openInSameFrame: S.b.isAndroid() && S.b.isTwitterApp() }, onClick: o },
                      f.a.i6ef95ec,
                    ),
                  ),
                ),
              A.createElement(
                k.a,
                { link: { pathname: r, openInSameFrame: !0 }, style: V.buttonPadded, type: 'brandFilled' },
                vc,
              ),
            ),
          )
        },
        Pc = f.a.b772cd65,
        gc = f.a.j3da4de9,
        Gc = function (e) {
          var t = f.a.da44942d,
            a = new Date(e)
          return A.createElement(f.a.I18NFormatMessage, { $i18n: 'b7be91be', date: t(a) })
        },
        Yc = f.a.j94e995e,
        xc = f.a.da458d6c,
        Bc = f.a.j4ed9f0e,
        Vc = f.a.b1ade78f,
        wc = f.a.b1ade78f,
        Wc = f.a.j3da4de9,
        kc = function (e) {
          var t = f.a.da44942d,
            a = new Date(e)
          return A.createElement(f.a.I18NFormatMessage, { $i18n: 'jcb00a94', date: t(a) })
        },
        jc = f.a.aab67626,
        Hc = function (e) {
          var t = f.a.da44942d,
            a = new Date(e)
          return A.createElement(f.a.I18NFormatMessage, { $i18n: 'j92ea4b8', date: t(a) })
        },
        Kc = f.a.d3c1e25e,
        qc = A.createElement(
          f.a.I18NFormatMessage,
          { $i18n: 'jcd067dd' },
          A.createElement(W.b, { link: 'https://help.twitter.com/rules-and-policies/twitter-rules' }, f.a.g0bfb17a),
        ),
        zc = function (e) {
          var t,
            a = e.applicationSubmissionTimeInMs,
            n = e.decisionMadeTimeInMs,
            i = e.isNarrow,
            r = e.link,
            o = e.status,
            l = ((t = {}),
            b()(t, L.a.DISABLED, { title: Nr, content: dr, button: ur }),
            b()(t, L.a.INTAKE_PROGRESS, { title: null, content: null, button: null }),
            b()(t, L.a.LOCKED, { title: gc, content: n ? Gc(n) : xc, button: ur }),
            b()(t, L.a.NEW_ACCOUNT, { title: gc, content: wc, button: ur }),
            b()(t, L.a.NOT_ELIGIBLE, { title: gc, content: Vc, button: ur }),
            b()(t, L.a.NOT_STARTED, { title: null, content: null, button: null }),
            b()(t, L.a.VERIFICATION_DENIED, { title: Wc, content: n ? kc(n) : Yc, button: Pc }),
            b()(t, L.a.VERIFICATION_PENDING, { title: jc, content: a ? Hc(a) : Bc, button: Pc }),
            b()(t, L.a.VERIFIED, { title: Kc, content: qc, button: Pc }),
            t)[o],
            c = l.button,
            E = l.content,
            s = l.title
          return s && E
            ? A.createElement(
                w.a,
                { style: [V.container, V.verticalCenter, V.appBarOffset, i && V.narrowContainer] },
                A.createElement(
                  W.b,
                  {
                    accessibilityLevel: 1,
                    accessibilityRole: 'heading',
                    nativeID: x.b,
                    size: 'title4',
                    style: V.header,
                    weight: 'heavy',
                  },
                  s,
                ),
                A.createElement(W.b, { color: 'gray700' }, E),
                A.createElement(
                  k.a,
                  { link: { pathname: r, openInSameFrame: !0 }, style: V.buttonPadded, type: 'brandFilled' },
                  c,
                ),
              )
            : null
        },
        Qc = a('zh9S'),
        $c = a('vEo5'),
        Zc = { page: 'settings', section: 'account_verification' },
        Jc = Object(fe.a)()
          .propsFromState(function () {
            return {
              access: Ce.m,
              accessFetchStatus: Ce.n,
              accountEligibility: Ce.o,
              accountViolations: Ce.p,
              authenticityType: Ce.t,
              currentStep: Ce.z,
              documentFormats: Ce.A,
              idCountry: Ce.G,
              idType: Ce.I,
              initialIntakeFetchStatus: Ce.K,
              surveyUrl: Ce.O,
              userEmail: $c.selectFirstEmail,
              verifyAccountFetchStatus: Ce.P,
              notabilityCategory: Ce.L,
              notabilityData: Ce.M,
              notabilitySubcategory: Ce.N,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.access,
              a = e.accessFetchStatus,
              n = e.accountEligibility,
              i = e.accountViolations,
              r = e.authenticityType,
              o = e.currentStep,
              l = e.documentFormats,
              c = e.idCountry,
              E = e.idType,
              s = e.initialIntakeFetchStatus,
              I = e.notabilityCategory,
              T = e.notabilityData,
              u = e.notabilitySubcategory,
              N = e.surveyUrl,
              d = e.userEmail,
              _ = e.verifyAccountFetchStatus
            return {
              accessFetchStatus: a,
              accessStatus: t.status,
              accountViolations: i,
              applicationSubmissionTimeInMs: t.applicationSubmissionTimeInMs,
              authenticityType: r,
              currentStep: o,
              decisionMadeTimeInMs: t.decisionMadeTimeInMs,
              documentFormats: l,
              followersEligible: n.followers_eligible,
              idCountry: c,
              idType: E,
              initialIntakeFetchStatus: s,
              mentionsEligible: n.mentions_eligible,
              surveyUrl: N,
              userEmail: d,
              verifyAccountFetchStatus: _,
              notabilityCategory: I,
              notabilityData: T,
              notabilitySubcategory: u,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Rt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION',
              ),
              fetchAccessIfNeeded: Ce.b,
              fetchAccountEligibility: Ce.c,
              fetchAccountViolations: Ce.d,
              fetchDevices: $c.fetchDevicesIfNeeded,
              fetchDocumentFormats: Ce.g,
              googleAnalyticsPageView: Qc.a,
              resetFlow: Ce.j,
              resetSubmitVerification: Ce.l,
              setFormStepData: Ce.R,
              setIdCountry: Ce.T,
              setIdType: Ce.U,
              setNextFlow: Ce.V,
              setPreviousFlow: Ce.W,
              verifyAccount: Ce.Z,
            }
          })
          .withAnalytics(Zc),
        Xc = 'info',
        eE = 'input',
        tE = 'pivot',
        aE = 'radio',
        nE = 'screenName',
        iE = a('cHvH'),
        rE =
          (a('ulNE'),
          a('1IsZ'),
          Object(fe.a)()
            .propsFromState(function () {
              return {
                authenticityType: Ce.t,
                authenticityData: Ce.s,
                idCountryName: Ce.H,
                idTypeName: Ce.J,
                notabilityCategory: Ce.L,
                notabilitySubcategory: Ce.N,
                notabilityData: Ce.M,
              }
            })
            .propsFromActions(function () {
              return { verifyAccount: Ce.Z }
            })),
        oE = a('3A2y'),
        lE = f.a.a91bb144,
        cE = f.a.affce770,
        EE = f.a.i0864917,
        sE = f.a.c7942073,
        IE = f.a.b8121da9,
        TE = f.a.d247ca7f,
        uE = f.a.b51afbb2,
        NE = f.a.cc87b01c,
        dE = function (e) {
          var t,
            a,
            n,
            i,
            r = e.authenticityType,
            o = e.createLocalApiErrorHandler,
            l = e.handleOnClick,
            c = e.isNarrow,
            E = e.notabilityCategory,
            s = e.notabilityData,
            I = e.notabilitySubcategory,
            T = e.verifyAccount,
            u = function (e) {
              return A.createElement(W.b, { size: 'subtext2', style: V.subheading, weight: 'heavy' }, e)
            }
          return A.createElement(
            w.a,
            { style: [V.container, c && V.narrowContainer] },
            A.createElement(
              W.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: x.b,
                size: 'title4',
                style: V.header,
                weight: 'heavy',
              },
              NE,
            ),
            A.createElement(
              w.a,
              { style: V.scrollableContainer },
              A.createElement(W.b, { color: 'gray700' }, TE),
              u(EE),
              E && A.createElement(W.b, { style: V.subtext }, Cr[E]),
              I && ((i = Sr[I]), A.createElement(w.a, null, u(sE), A.createElement(W.b, { style: V.subtext }, i))),
              s &&
                (function (e) {
                  var t = Object(oE.a)(e, 'newsType'),
                    a = Object.values(t).flat()
                  return A.createElement(
                    w.a,
                    null,
                    u(IE),
                    a.map(function (e, t) {
                      return A.createElement(W.b, { key: t, style: V.subtext }, e)
                    }),
                  )
                })(s),
              u(uE),
              r &&
                ((t = r),
                (a = {}),
                b()(a, L.d.IDENTITY_DOCUMENT, f.a.e43425fa),
                b()(a, L.d.EMAIL, f.a.a411926a),
                b()(a, L.d.WEBSITE, f.a.e1c78795),
                (n = a[t]),
                A.createElement(W.b, { style: V.subtext }, n)),
              A.createElement(W.b, { color: 'gray700', style: V.contentContainer }, cE),
            ),
            A.createElement(
              k.a,
              {
                onClick: function () {
                  T().catch(o()), l()
                },
                style: V.buttonFixed,
                type: 'brandFilled',
              },
              lE,
            ),
          )
        },
        _E = rE(dE)
      function pE(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function OE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pE(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : pE(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      function bE(e) {
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
          var a,
            n = p()(e)
          if (t) {
            var i = p()(this).constructor
            a = Reflect.construct(n, arguments, i)
          } else a = n.apply(this, arguments)
          return d()(this, a)
        }
      }
      var AE = 'INITIAL_FETCH_STATUS_RENDERER',
        RE = 'SUBMIT_FETCH_STATUS_RENDERER',
        fE = f.a.g61ed8a4,
        CE = function () {
          return null
        },
        mE = function (e) {
          return null
        },
        SE = (function (e) {
          u()(a, e)
          var t = bE(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(
                I()(e),
                '_accountSettingsLink',
                S.b.isTwitterApp() ? 'twitter://settings/account' : '/settings/account',
              ),
              b()(I()(e), '_hasBadgeViolations', function (e) {
                var t
                return null === (t = e.violations) || void 0 === t
                  ? void 0
                  : t.some(function (e) {
                      return e.violation_status === L.s.OUT_OF_COMPLIANCE
                    })
              }),
              b()(
                I()(e),
                '_isVerificationIntakeEnabled',
                e.context.featureSwitches.isTrue('identity_verification_intake_enabled'),
              ),
              b()(
                I()(e),
                '_shouldStartFlow',
                e.props.accessStatus === L.a.NOT_STARTED || e.props.accessStatus === L.a.INTAKE_PROGRESS,
              ),
              b()(I()(e), '_fetchFormInformationIfNeeded', function () {
                var t = e.props,
                  a = t.fetchAccountEligibility,
                  n = t.fetchAccountViolations,
                  i = t.fetchDevices,
                  r = t.fetchDocumentFormats
                return e._shouldStartFlow ? Promise.all([a(), n(), i(), r()]) : Promise.resolve()
              }),
              b()(I()(e), '_initialFetchRetry', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchAccessIfNeeded)()
                  .then(function () {
                    return e._fetchFormInformationIfNeeded()
                  })
                  .catch(a())
              }),
              b()(
                I()(e),
                '_getMemoizedVerificationScribeNamespace',
                Object(Ic.a)(function (e) {
                  return nt(e)
                }),
              ),
              b()(
                I()(e),
                '_getMemoizedVerificationScribeData',
                Object(Ic.a)(function (e) {
                  var t = e.accessStatus,
                    a = e.authenticityType,
                    n = e.currentStep,
                    i = e.followersEligible,
                    r = e.idType,
                    o = e.mentionsEligible,
                    l = e.notabilityCategory,
                    c = e.notabilityData,
                    E = e.notabilitySubcategory
                  return it(t, a, n, i, r, o, l, c, E)
                }),
              ),
              b()(I()(e), '_scribeAction', function (t, a) {
                var n = e.props,
                  i = n.accessStatus,
                  r = n.analytics,
                  o = n.authenticityType,
                  l = n.currentStep,
                  c = n.followersEligible,
                  E = n.idType,
                  s = n.mentionsEligible,
                  I = n.notabilityCategory,
                  T = n.notabilityData,
                  u = n.notabilitySubcategory
                r.scribe(
                  OE(
                    OE({}, e._getMemoizedVerificationScribeNamespace(l)),
                    {},
                    {
                      action: t,
                      data: e._getMemoizedVerificationScribeData({
                        accessStatus: i,
                        authenticityType: o,
                        currentStep: l,
                        followersEligible: c,
                        idType: E,
                        mentionsEligible: s,
                        notabilityCategory: I,
                        notabilityData: T,
                        notabilitySubcategory: u,
                      }),
                      element: a,
                    },
                  ),
                )
              }),
              b()(I()(e), '_formComponentOptions', function () {
                var t,
                  a = e.props,
                  n = a.accessStatus,
                  i = a.createLocalApiErrorHandler,
                  r = a.currentStep,
                  o = a.decisionMadeTimeInMs,
                  l = a.documentFormats,
                  c = a.idCountry,
                  E = a.initialIntakeFetchStatus,
                  s = a.resetSubmitVerification,
                  I = a.setIdCountry,
                  T = a.setIdType,
                  u = a.setNextFlow,
                  N = a.setPreviousFlow,
                  d = a.surveyUrl,
                  _ = a.userEmail,
                  p = a.verifyAccount,
                  O = a.verifyAccountFetchStatus
                return (
                  (t = {}),
                  b()(t, Re.name, {
                    ComponentToRender: Re,
                    componentProps: {
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), u()
                      },
                    },
                    genericModalProps: { renderHeader: mE },
                  }),
                  b()(t, dE.name, {
                    ComponentToRender: _E,
                    componentProps: {
                      createLocalApiErrorHandler: i,
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), u()
                      },
                    },
                    genericModalProps: { onBackClick: N },
                  }),
                  b()(t, zc.name, {
                    ComponentToRender: zc,
                    componentProps: { decisionMadeTimeInMs: o, link: e._accountSettingsLink, status: n },
                    genericModalProps: { backButtonType: 'close', hideBackButton: S.b.isTwitterApp() },
                  }),
                  b()(t, ke.name, {
                    ComponentToRender: ke,
                    componentProps: {
                      documentFormats: l,
                      onCountryClick: function (e, t) {
                        I(e, t), N()
                      },
                    },
                    genericModalProps: { onBackClick: N },
                  }),
                  b()(t, je.name, {
                    ComponentToRender: je,
                    componentProps: {
                      documentFormats: l,
                      idCountry: c,
                      onTypeClick: function (e, t) {
                        T(e, t), N()
                      },
                    },
                    genericModalProps: { onBackClick: N },
                  }),
                  b()(t, L.h.INTAKE_LOADING, {
                    ComponentToRender: Yr,
                    componentProps: {},
                    genericModalProps: { hideBackButton: !0, renderHeader: mE },
                  }),
                  b()(t, L.h.INTAKE_TYPE_SELECT, {
                    ComponentToRender: Be,
                    componentProps: {},
                    genericModalProps: { onBackClick: N },
                  }),
                  b()(t, L.h.INTAKE_UPLOAD, {
                    ComponentToRender: Bo,
                    componentProps: {
                      handleOnClick: function () {
                        return e._scribeAction('click', 'CTA')
                      },
                    },
                    genericModalProps: { onBackClick: N },
                  }),
                  b()(t, Mc.name, {
                    ComponentToRender: Mc,
                    componentProps: {
                      link: e._accountSettingsLink,
                      onSurveyClick: function () {
                        return e._scribeAction('click', 'survey_link')
                      },
                      surveyUrl: d,
                    },
                    genericModalProps: { renderHeader: mE },
                  }),
                  b()(t, g.name, {
                    ComponentToRender: g,
                    componentProps: { accountViolations: e.props.accountViolations },
                    genericModalProps: { backButtonType: 'close', hideBackButton: S.b.isTwitterApp() },
                  }),
                  b()(t, ee.name, {
                    ComponentToRender: ee,
                    componentProps: {
                      accountSettingsLink: e._accountSettingsLink,
                      email: _ || '',
                      handleOnClickValid: function () {
                        _ && e.props.setFormStepData(r, _), e._scribeAction('click', 'CTA'), u()
                      },
                      handleOnClickInvalid: function () {
                        N()
                      },
                    },
                    genericModalProps: { onBackClick: N },
                  }),
                  b()(t, RE, {
                    ComponentToRender: ae.a,
                    componentProps: {
                      fetchStatus: O,
                      onRequestRetry: function () {
                        p().catch(i())
                      },
                      render: CE,
                      retryMessage: fE,
                    },
                    genericModalProps: { hideBackButton: O === te.a.LOADING, onBackClick: s },
                  }),
                  b()(t, AE, {
                    ComponentToRender: ae.a,
                    componentProps: {
                      fetchStatus: E,
                      onRequestRetry: e._initialFetchRetry,
                      render: CE,
                      retryMessage: fE,
                    },
                    genericModalProps: { backButtonType: 'close', hideBackButton: S.b.isTwitterApp() },
                  }),
                  t
                )
              }),
              b()(I()(e), '_wrapInGenericModalScreen', function (t) {
                var a = e._formComponentOptions()[t],
                  n = a.ComponentToRender,
                  i = a.componentProps,
                  o = a.genericModalProps
                return A.createElement(
                  ne.b,
                  r()(
                    {
                      backButtonType: 'back',
                      backLocation: e._accountSettingsLink,
                      containerStyle: o.renderHeader ? V.rootNoAppBar : V.root,
                      hideBackButton: !1,
                      history: e.props.history,
                      withBottomBorder: !1,
                    },
                    o,
                  ),
                  A.createElement(
                    n,
                    r()({}, i, { isNarrow: e._isNarrow, key: ''.concat(e.props.currentStep, '-screen') }),
                  ),
                )
              }),
              b()(I()(e), '_createFormFromLayout', function (t) {
                var a = e.props,
                  n = a.history,
                  i = a.setPreviousFlow
                if (t && sc[t]) {
                  var r = sc[t],
                    o = 'function' == typeof r ? r(OE({}, e.props)) : r
                  return A.createElement(
                    ne.b,
                    {
                      backButtonType: 'back',
                      containerStyle: V.root,
                      hideBackButton: !1,
                      history: n,
                      onBackClick: i,
                      withBottomBorder: !1,
                    },
                    e._renderLayoutComponent(o, t),
                  )
                }
                return A.createElement(Ac.a, { to: '/settings/account' })
              }),
              b()(I()(e), '_renderLayoutComponent', function (t, a) {
                var n = { isNarrow: e._isNarrow, key: ''.concat(a, '-screen') }
                switch (t.type) {
                  case Xc:
                    return A.createElement(Qe, r()({}, t.props, { key: ''.concat(a, '-screen') }))
                  case eE:
                    return A.createElement(At, r()({}, t.props, n))
                  case tE:
                    return A.createElement(De, r()({}, t.props, n))
                  case aE:
                    return A.createElement(bc, r()({}, t.props, n))
                  case nE:
                    return A.createElement(hc, r()({}, t.props, n))
                  default:
                    return null
                }
              }),
              b()(I()(e), '_renderFlowStep', function () {
                var t = e.props,
                  a = t.accountViolations,
                  n = t.currentStep,
                  i = t.initialIntakeFetchStatus,
                  r = t.verifyAccountFetchStatus
                if (i !== te.a.LOADED) return e._wrapInGenericModalScreen(AE)
                if (r === te.a.LOADING || r === te.a.FAILED) return e._wrapInGenericModalScreen(RE)
                if (e._hasBadgeViolations(a)) return e._wrapInGenericModalScreen(g.name)
                switch (n) {
                  case L.h.LANDING_PAGE:
                    return e._wrapInGenericModalScreen(e._shouldStartFlow ? Re.name : zc.name)
                  case L.h.INTAKE_TYPE_SELECT:
                    return e._wrapInGenericModalScreen(L.h.INTAKE_TYPE_SELECT)
                  case L.h.ID_COUNTRY_SELECT:
                    return e._wrapInGenericModalScreen(ke.name)
                  case L.h.ID_TYPE_SELECT:
                    return e._wrapInGenericModalScreen(je.name)
                  case L.h.INTAKE_UPLOAD:
                    return e._wrapInGenericModalScreen(L.h.INTAKE_UPLOAD)
                  case L.h.INTAKE_LOADING:
                    return e._wrapInGenericModalScreen(L.h.INTAKE_LOADING)
                  case L.h.EMAIL_VERIFICATION:
                    return e._wrapInGenericModalScreen(ee.name)
                  case L.h.REVIEW_SUBMIT:
                    return e._wrapInGenericModalScreen(dE.name)
                  case L.h.THANK_YOU:
                    return e._wrapInGenericModalScreen(Mc.name)
                  default:
                    return e._createFormFromLayout(n)
                }
              }),
              e
            )
          }
          return (
            E()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.createLocalApiErrorHandler,
                    n = t.fetchAccessIfNeeded,
                    i = t.googleAnalyticsPageView
                  n()
                    .then(function () {
                      return e._fetchFormInformationIfNeeded()
                    })
                    .then(function () {
                      return e._scribeAction('get_initial')
                    })
                    .catch(a()),
                    i(Zc)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.accessStatus,
                    n = t.createLocalApiErrorHandler,
                    i = t.currentStep
                  e.accessStatus !== a &&
                    ((this._shouldStartFlow = a === L.a.NOT_STARTED || a === L.a.INTAKE_PROGRESS),
                    this._shouldStartFlow && this._fetchFormInformationIfNeeded().catch(n())),
                    e.currentStep !== i && this._scribeAction('show')
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.resetFlow()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.accessStatus,
                    n = t.authenticityType,
                    i = t.currentStep,
                    r = t.followersEligible,
                    o = t.idType,
                    l = t.mentionsEligible,
                    c = t.notabilityCategory,
                    E = t.notabilityData,
                    s = t.notabilitySubcategory
                  return this._isVerificationIntakeEnabled
                    ? A.createElement(iE.a, null, function (t) {
                        var I = t.windowWidth < B.a.theme.breakpoints.small
                        return (
                          I !== e._isNarrow && (e._isNarrow = I),
                          A.createElement(
                            Dc.b,
                            {
                              data: e._getMemoizedVerificationScribeData({
                                accessStatus: a,
                                authenticityType: n,
                                currentStep: i,
                                followersEligible: r,
                                idType: o,
                                mentionsEligible: l,
                                notabilityCategory: c,
                                notabilityData: E,
                                notabilitySubcategory: s,
                              }),
                              namespace: e._getMemoizedVerificationScribeNamespace(i),
                            },
                            e._renderFlowStep(),
                          )
                        )
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(A.Component)
      b()(SE, 'contextType', Fc.a)
      var LE = Jc(SE)
      t.default = LE
    },
    je27: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('W7+t')),
        o = n(a('pvEE')),
        l = n(a('vLEV')),
        c = (0, i.default)(
          /(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i,
          {
            validateUrlUnicodeSubDomainSegment: r.default,
            validateUrlUnicodeDomainSegment: o.default,
            validateUrlUnicodeDomainTld: l.default,
          },
        )
      ;(t.default = c), (e.exports = t.default)
    },
    kAdf: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('8Y9H')),
        o = (0, i.default)(/(#{validateUrlPchar}|\/|\?)*/i, { validateUrlPchar: r.default })
      ;(t.default = o), (e.exports = t.default)
    },
    kfbJ: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /[a-z\u0400-\u04FF0-9\-._~]/i
      ;(t.default = n), (e.exports = t.default)
    },
    mmgW: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('NRlp')),
        o = (0, i.default)(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i, {
          validateUrlDecOctet: r.default,
        })
      ;(t.default = o), (e.exports = t.default)
    },
    oAj9: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i
      ;(t.default = n), (e.exports = t.default)
    },
    pvEE: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
      ;(t.default = n), (e.exports = t.default)
    },
    ta7H: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('fl4i')),
        o = n(a('Wqil')),
        l = n(a('Umjq')),
        c = (0, i.default)(
          '(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?',
          { validateUrlUserinfo: r.default, validateUrlHost: o.default, validateUrlPort: l.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
    },
    ulNE: function (e, t, a) {
      'use strict'
      var n = a('ax0f'),
        i = a('42ly'),
        r = a('N9G2'),
        o = a('tJVe'),
        l = a('i7Kn'),
        c = a('aoZ+')
      n(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = r(this),
              a = o(t.length),
              n = c(t, 0)
            return (n.length = i(n, t, t, a, 0, void 0 === e ? 1 : l(e))), n
          },
        },
      )
    },
    vLEV: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
      ;(t.default = n), (e.exports = t.default)
    },
    vXsr: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i
      ;(t.default = n), (e.exports = t.default)
    },
  },
])
//# sourceMappingURL=WIPED
