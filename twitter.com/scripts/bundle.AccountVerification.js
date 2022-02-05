;(window.webpackJsonp = window.webpackJsonp || []).push([
  [28, 16],
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
        o = a.n(r),
        l = a('Lsrn'),
        c = a('k/Ka')
      function E(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(a), !0).forEach(function (t) {
                i()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : E(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var I = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [l.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z',
            }),
            o.a.createElement('path', {
              d: 'M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z',
            }),
          ),
        )
      }
      ;(I.metadata = { width: 24, height: 24 }), (t.a = I)
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
          return ze
        }),
        a.d(t, 'f', function () {
          return qe
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
        z = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_FAILURE',
        }),
        q = Object.freeze({
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
            case z.REQUEST:
              return O(
                O({}, i),
                {},
                { accountEligibility: O(O({}, i.accountEligibility), {}, { fetchStatus: T.a.LOADING, error: null }) },
              )
            case z.SUCCESS:
              if (r.payload)
                return O(
                  O({}, i),
                  {},
                  { accountEligibility: { data: O({}, r.payload), error: null, fetchStatus: T.a.LOADED } },
                )
              break
            case z.FAILURE:
              return O(
                O({}, i),
                {},
                {
                  accountEligibility: O(O({}, i.accountEligibility), {}, { error: r.payload, fetchStatus: T.a.FAILED }),
                },
              )
            case q.REQUEST:
              return O(
                O({}, i),
                {},
                { accountViolations: O(O({}, i.accountViolations), {}, { fetchStatus: T.a.LOADING, error: null }) },
              )
            case q.SUCCESS:
              if (r.payload)
                return O(
                  O({}, i),
                  {},
                  { accountViolations: { data: O({}, r.payload), error: null, fetchStatus: T.a.LOADED } },
                )
              break
            case q.FAILURE:
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
                    actionTypes: z,
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
                    actionTypes: q,
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
        ze = function () {
          return function (e, t, a) {
            a.api
            e({ type: v })
          }
        },
        qe = function () {
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
          return SE
        }),
        a.d(t, 'AccountVerification', function () {
          return LE
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
        R = a.n(A),
        f = (a('hBpG'), a('jQ/y'), a('3XMw')),
        C = a.n(f),
        m = a('cmUU'),
        S = a('fs1G'),
        L = a('aITJ'),
        y = a('QJRq'),
        h = C.a.d4f88600,
        D = C.a.b192ccad,
        F = C.a.a0487504,
        U = C.a.fff7d93c,
        v = C.a.g969bfad,
        M = C.a.gb2f35e4,
        P = L.b.isTwitterApp()
          ? { external: !0, pathname: 'twitter://settings/account', openInSameFrame: !0 }
          : { pathname: '/settings/account', openInSameFrame: !0 },
        g = L.b.isTwitterApp()
          ? { external: !0, pathname: 'twitter://profiles/edit', openInSameFrame: !0 }
          : { external: !0, pathname: '/settings/profile', openInSameFrame: !0 },
        G = function (e) {
          var t,
            a = e.accountViolations,
            n = [y.r.PROFILE_COMPLETION, y.r.ACCOUNT_SECURITY],
            i =
              ((t = {}),
              b()(t, y.r.PROFILE_COMPLETION, { actionLink: g, buttonText: U, description: M, title: v }),
              b()(t, y.r.ACCOUNT_SECURITY, { actionLink: P, buttonText: h, description: F, title: D }),
              t),
            r = n.find(function (e) {
              var t
              return null === (t = a.violations) || void 0 === t
                ? void 0
                : t.some(function (t) {
                    return t.violation_category === e && t.violation_status === y.s.OUT_OF_COMPLIANCE
                  })
            })
          if (void 0 === r) throw new Error('cannot render Account violations without valid violations')
          var o = i[r],
            l = o.actionLink,
            c = o.buttonText,
            E = o.description,
            s = o.title
          return R.a.createElement(m.a, {
            actionLabel: c,
            actionLink: l,
            graphicDisplayMode: 'none',
            headline: s,
            onAction: S.a,
            onClose: S.a,
            subtext: E,
            withCloseButton: !1,
          })
        },
        Y = a('ddV6'),
        x = a.n(Y),
        B = (a('Ysgh'), a('KqXw'), a('z84I'), a('MvUL'), a('7xRU'), a('iKE+'), a('DZ+c'), a('+/5o')),
        V = a('rHpw'),
        w = V.a.create(function (e) {
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
                .concat(V.a.theme.lineHeights.headline1, ' + 2 * ')
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
        W = a('MWbm'),
        k = a('t62R'),
        j = a('/yvb'),
        H = a('w6IS'),
        K = a('tn7R'),
        z = C.a.j24c37b2,
        q = C.a.c1df579e,
        Q = C.a.ge483f9e,
        $ = C.a.be03ecca,
        Z = C.a.a411926a,
        J = C.a.c69a40de,
        X = C.a.c83a1661,
        ee = {
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
        te = function (e) {
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
                a = x()(t, 2)[1],
                n = Object(H.a)(Object(K.a)(ee))
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
            var E = c ? J : X,
              s = c
                ? (function (e) {
                    return R.a.createElement(
                      C.a.I18NFormatMessage,
                      { $i18n: 'jf9308af' },
                      R.a.createElement(k.b, { link: e }, C.a.e1e878ed),
                    )
                  })(n)
                : (function (e) {
                    return R.a.createElement(
                      C.a.I18NFormatMessage,
                      { $i18n: 'e9976a40' },
                      R.a.createElement(k.b, { link: e }, C.a.ced76119),
                    )
                  })(n)
            return R.a.createElement(m.a, {
              actionLabel: z,
              graphicDisplayMode: 'none',
              headline: E,
              onAction: r,
              onClose: S.a,
              subtext: s,
              withCloseButton: !1,
            })
          }
          return R.a.createElement(
            W.a,
            { style: [w.container, l && w.narrowContainer] },
            R.a.createElement(
              k.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: B.b,
                size: 'title4',
                style: w.header,
                weight: 'heavy',
              },
              Z,
            ),
            R.a.createElement(
              W.a,
              { style: w.scrollableContainer },
              R.a.createElement(k.b, { color: 'gray700' }, Q),
              ((a = $), R.a.createElement(k.b, { size: 'subtext2', style: w.subheading, weight: 'heavy' }, a)),
              ((t = i), R.a.createElement(k.b, { style: w.subtext }, t)),
            ),
            R.a.createElement(j.a, { onClick: o, style: w.buttonFixed, type: 'brandFilled' }, q),
          )
        },
        ae = a('kGix'),
        ne = a('v//M'),
        ie = a('jHSc'),
        re = (a('yH/f'), a.p + 'verification-form-start.2817b0c5.png'),
        oe = a.p + 'verification-form-start-large.7e335815.png',
        le = a.p + 'verification-form-loading.5bb26665.png',
        ce = a.p + 'verification-form-loading-large.801f2ee5.png',
        Ee = a.p + 'verification-form-sent.ac5bd485.png',
        se = a.p + 'verification-form-sent-large.555a7815.png',
        Ie = a('TIdA'),
        Te = a('A91F'),
        ue = 600,
        Ne = 1200,
        de = Object.freeze({ START: 'start', LOADING: 'loading', SENT: 'sent' }),
        _e =
          ((n = {}),
          b()(n, de.START, {
            aspectRatio: 2,
            default: re,
            variants: [
              { uri: re, width: ue, height: 300 },
              { uri: oe, width: Ne, height: 600 },
            ],
          }),
          b()(n, de.LOADING, {
            aspectRatio: 1.5,
            default: le,
            variants: [
              { uri: le, width: ue, height: 400 },
              { uri: ce, width: Ne, height: 800 },
            ],
          }),
          b()(n, de.SENT, {
            aspectRatio: 2,
            default: Ee,
            variants: [
              { uri: Ee, width: ue, height: 300 },
              { uri: se, width: Ne, height: 600 },
            ],
          }),
          n),
        pe = V.a.create(function () {
          return { narrowBanner: { flex: 1 } }
        }),
        Oe = function (e) {
          var t = e.isNarrow,
            a = e.type,
            n = _e[a],
            i = R.a.createElement(Ie.a, {
              accessibilityLabel: '',
              aspectMode: t ? Te.a.COVER : Te.a.exact(n.aspectRatio),
              customVariants: n.variants,
              image: n.default,
            })
          return t ? R.a.createElement(W.a, { style: pe.narrowBanner }, i) : i
        },
        be = C.a.j163be32,
        Ae = C.a.gaf821c8,
        Re = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'e5b4cc43' },
          R.a.createElement(
            k.b,
            { link: 'https://help.twitter.com/managing-your-account/twitter-verified-accounts' },
            C.a.e1ac0f9a,
          ),
        ),
        fe = function (e) {
          var t = e.handleOnClick,
            a = e.isNarrow
          return R.a.createElement(
            W.a,
            { style: w.largeBannerContainer },
            R.a.createElement(Oe, { isNarrow: a, type: de.START }),
            R.a.createElement(
              W.a,
              { style: [w.container, w.verticalCenter, a && w.narrowContainer] },
              R.a.createElement(
                k.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: B.b,
                  size: 'title4',
                  style: w.header,
                  weight: 'heavy',
                },
                Ae,
              ),
              R.a.createElement(k.b, { color: 'gray700' }, Re),
              R.a.createElement(j.a, { onClick: t, style: w.buttonPadded, type: 'brandFilled' }, be),
            ),
          )
        },
        Ce = (a('tQbP'), a('WNMA'), a('rxPX')),
        me = a('ZyHq'),
        Se = Object(Ce.a)()
          .propsFromState(function () {
            return { documentFormats: me.A, idCountry: me.G, idType: me.I }
          })
          .propsFromActions(function () {
            return { setNextFlow: me.V }
          })
          .withAnalytics(),
        Le = Object(Ce.a)().propsFromActions(function () {
          return { setNextFlow: me.V }
        }),
        ye = a('iySH'),
        he = a('htQn'),
        De = V.a.create(function (e) {
          return {
            contentContainer: { alignItems: 'center', flexDirection: 'row', flexGrow: 1 },
            content: { flexGrow: 1, flexShrink: 1 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space12, flexShrink: 0 },
          }
        }),
        Fe = Le(function (e) {
          var t = e.button,
            a = void 0 === t ? null : t,
            n = e.description,
            i = e.isNarrow,
            r = e.items,
            o = e.setNextFlow,
            l = e.title
          return R.a.createElement(
            W.a,
            { style: [w.container, i && w.narrowContainer] },
            R.a.createElement(
              k.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: B.b,
                size: 'title4',
                style: w.header,
                weight: 'heavy',
              },
              l,
            ),
            R.a.createElement(
              W.a,
              { style: w.scrollableContainer },
              n && R.a.createElement(k.b, { color: 'gray700' }, n),
              R.a.createElement(
                W.a,
                { accessibilityLabelledBy: B.b, accessibilityRole: 'group', style: w.contentContainer },
                r.map(function (e, t) {
                  var a = e.description,
                    n = e.disabled,
                    i = void 0 !== n && n,
                    r = e.label,
                    c = e.nextStep
                  return R.a.createElement(
                    he.a,
                    {
                      disabled: i,
                      key: ''.concat(l, '-pivot-').concat(t),
                      onClick: function () {
                        !(function (e) {
                          o(e)
                        })(c)
                      },
                      style: [w.listItem, w.bottomBorder],
                      withInteractiveStyling: !0,
                    },
                    R.a.createElement(
                      W.a,
                      { style: De.contentContainer },
                      R.a.createElement(
                        W.a,
                        { style: De.content },
                        R.a.createElement(k.b, null, r),
                        a && R.a.createElement(k.b, { color: 'gray700', size: 'subtext2' }, a),
                      ),
                      R.a.createElement(ye.a, { style: De.icon }),
                    ),
                  )
                }),
              ),
            ),
            a,
          )
        }),
        Ue = C.a.e43425fa,
        ve = C.a.e43672a0,
        Me = C.a.b246aa5d,
        Pe = C.a.d6fb5877,
        ge = C.a.b72f97cc,
        Ge = C.a.b2ab6008,
        Ye = C.a.c1df579e,
        xe = function (e, t) {
          return e && t ? e[t].country : Pe
        },
        Be = function (e, t, a) {
          return e && t && a ? e[t].id_types[a].name : Ge
        },
        Ve = Se(function (e) {
          var t = e.documentFormats,
            a = e.idCountry,
            n = e.idType,
            i = e.isNarrow,
            r = e.setNextFlow
          return R.a.createElement(Fe, {
            button: R.a.createElement(
              j.a,
              {
                disabled: !(a && n),
                onClick: function () {
                  return r()
                },
                style: w.buttonFixed,
                type: 'brandFilled',
              },
              Ye,
            ),
            description: ve,
            isNarrow: i,
            items: [
              { description: xe(t, a), label: Me, nextStep: y.h.ID_COUNTRY_SELECT },
              { description: Be(t, a, n), disabled: !a, label: ge, nextStep: y.h.ID_TYPE_SELECT },
            ],
            title: Ue,
          })
        }),
        we = a('1byD'),
        We = a('6OUF'),
        ke = C.a.h9270b1b,
        je = function (e) {
          var t = e.documentFormats,
            a = e.isNarrow,
            n = e.onCountryClick,
            i = R.a.useState(new RegExp('', 'i')),
            r = x()(i, 2),
            o = r[0],
            l = r[1],
            c = R.a.useMemo(
              function () {
                return t
                  ? Object.keys(t).sort(function (e, a) {
                      return t[e].country.localeCompare(t[a].country)
                    })
                  : []
              },
              [t],
            )
          return R.a.createElement(
            W.a,
            { accessibilityLabelledBy: B.b, accessibilityRole: 'group', style: [w.container, a && w.narrowContainer] },
            R.a.createElement(
              W.a,
              { style: w.fixedContainer },
              R.a.createElement(
                k.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: B.b,
                  size: 'title4',
                  style: w.header,
                  weight: 'heavy',
                },
                Me,
              ),
              R.a.createElement(
                W.a,
                { style: [w.contentContainer, w.topPaddingSmall] },
                R.a.createElement(We.a, {
                  Icon: we.a,
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
                  placeholder: ke,
                }),
              ),
            ),
            R.a.createElement(
              W.a,
              { style: w.scrollableContainer },
              c.map(function (e) {
                return t && t[e].country.match(o)
                  ? R.a.createElement(
                      he.a,
                      {
                        key: e,
                        onClick: function () {
                          return n(e, t[e].country)
                        },
                        style: [w.listItem, w.bottomBorder],
                        withInteractiveStyling: !0,
                      },
                      R.a.createElement(k.b, null, t[e].country),
                    )
                  : null
              }),
            ),
          )
        },
        He = function (e) {
          var t = e.documentFormats,
            a = e.idCountry,
            n = e.isNarrow,
            i = e.onTypeClick,
            r = R.a.useMemo(
              function () {
                return t && a
                  ? Object(K.a)(t[a].id_types).sort(function (e, t) {
                      return e.name.localeCompare(t.name)
                    })
                  : []
              },
              [t, a],
            )
          return R.a.createElement(
            W.a,
            { accessibilityLabelledBy: B.b, accessibilityRole: 'group', style: [w.container, n && w.narrowContainer] },
            R.a.createElement(
              W.a,
              { style: w.fixedContainer },
              R.a.createElement(
                k.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: B.b,
                  size: 'title4',
                  style: w.header,
                  weight: 'heavy',
                },
                ge,
              ),
            ),
            R.a.createElement(
              W.a,
              { style: [w.contentContainer, w.scrollableContainer, w.topPaddingSmall] },
              r.map(function (e) {
                var t = e.id_type,
                  a = e.name
                return R.a.createElement(
                  he.a,
                  {
                    key: t,
                    onClick: function () {
                      return i(t, a)
                    },
                    style: [w.listItem, w.bottomBorder],
                    withInteractiveStyling: !0,
                  },
                  R.a.createElement(k.b, null, a),
                )
              }),
            ),
          )
        },
        Ke = a('m3Bd'),
        ze = a.n(Ke)
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
      function Qe(e) {
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
      var $e = Object(Ce.a)()
          .propsFromActions(function () {
            return { setNextFlow: me.V, setPreviousFlow: me.W }
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
            u = ze()(e, [
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
                ? S.a
                : function () {
                    return c()
                  })
          return R.a.createElement(
            m.a,
            r()(
              {
                graphicDisplayMode: n,
                onAction: function (e) {
                  t.scribe(
                    Qe(
                      Qe({}, t.contextualScribeNamespace),
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
        Ze = a('RhWx'),
        Je = a.n(Ze),
        Xe =
          (a('M+/F'),
          a('jQ3i'),
          a('x4t0'),
          a('DfhM'),
          function (e) {
            var t,
              a = Object(me.y)(e)
            return null !== (t = null == a ? void 0 : a.inputData) && void 0 !== t ? t : []
          }),
        et = Object(Ce.a)()
          .propsFromState(function () {
            return { currentStep: me.z, formHistory: Xe }
          })
          .propsFromActions(function () {
            return { setFormStepData: me.R, setNextFlow: me.V, updateFormHistory: me.Y }
          })
          .withAnalytics(),
        tt = a('Qp/W'),
        at = a.n(tt),
        nt =
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
        it = function (e) {
          return { component: y.g[e].scribeComponent || e }
        },
        rt = function (e, t, a, n, i, r, o, l, c) {
          var E = n || r,
            s =
              l &&
              (function (e) {
                e.newsType
                var t = ze()(e, ['newsType'])
                return Object.keys(t).map(function (e) {
                  return nt(e)
                })
              })(l),
            I = {}
          switch (y.g[a].scribeComponent) {
            case y.p.LANDING_PAGE:
              I = { access_status: e }
              break
            case y.p.NOTABILITY_CATEGORY:
              I = { meets_threshold: E, notability_category: o }
              break
            case y.p.NOTABILITY_SUBCATEGORY:
              I = { meets_threshold: E, notability_category: o, category_subtype: c }
              break
            case y.p.NOTABILITY_METHOD:
            case y.p.NOTABILITY_INPUT:
              I = { meets_threshold: E, notability_category: o, category_subtype: c, notability_method: s }
              break
            case y.p.AUTHENTICITY_TYPE:
              I = { notability_category: o, category_subtype: c, authenticity_type: t }
              break
            case y.p.ID_UPLOAD:
              I = { notability_category: o, category_subtype: c, authenticity_type: t, id_type: i }
              break
            case y.p.REVIEW_SUBMIT:
            case y.p.THANK_YOU:
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
              var a = x()(t, 2),
                n = a[0],
                i = a[1]
              return void 0 === i || (e[n] = i), e
            }, {})),
          }
        },
        ot = a('855f'),
        lt = a('p+r5'),
        ct = a('XiMS')
      function Et(e, t) {
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
      function st(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Et(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Et(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var It,
        Tt,
        ut,
        Nt = 'verification-checkbox-label',
        dt = C.a.i33cf691,
        _t = C.a.c1df579e,
        pt = C.a.b679ff69,
        Ot = function (e) {
          return (
            at()(e, !1, !1) &&
            (function (e) {
              if (e.includes('://')) {
                var t = e.split('://')
                return 'http' === t[0] || 'https' === t[0]
              }
              return !0
            })(e)
          )
        },
        bt = V.a.create(function (e) {
          return {
            input: { paddingHorizontal: 0 },
            addFieldText: { alignSelf: 'flex-start', marginLeft: e.borderWidths.medium, paddingTop: e.spaces.space12 },
            checkboxContainer: { paddingTop: 0 },
          }
        }),
        At = et(function (e) {
          var t = e.addFieldText,
            a = void 0 === t ? dt : t,
            n = e.allowAddFields,
            i = void 0 !== n && n,
            o = e.analytics,
            l = e.buttonText,
            c = void 0 === l ? _t : l,
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
            A = e.setNextFlow,
            f = e.title,
            C = e.updateFormHistory,
            m = R.a.useState(
              (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  a = {},
                  n = e.slice(-1),
                  i = x()(n, 1)[0],
                  r = void 0 === i ? {} : i
                return (
                  t.length
                    ? t.forEach(function (t, n) {
                        var i,
                          o = null !== (i = e[n]) && void 0 !== i ? i : st(st({}, r), {}, { required: !1 })
                        a[n] = st(st({}, o), {}, { value: t })
                      })
                    : e.forEach(function (e, t) {
                        a[t] = st(st({}, e), {}, { value: '' })
                      }),
                  a
                )
              })(N, T),
            ),
            S = x()(m, 2),
            L = S[0],
            y = S[1],
            h = R.a.useState(!1),
            D = x()(h, 2),
            F = D[0],
            U = D[1],
            v = R.a.useState(!1),
            M = x()(v, 2),
            P = M[0],
            g = M[1],
            G = R.a.useState(!0),
            Y = x()(G, 2),
            V = Y[0],
            H = Y[1],
            z = R.a.useState(null),
            q = x()(z, 2),
            Q = q[0],
            $ = q[1],
            Z = N.length
          R.a.useEffect(
            function () {
              var e = Object(K.a)(L),
                t = (i ? e.slice(0, Z) : e).every(function (e) {
                  return Ot(e.value)
                }),
                a = !t || !(!E || P)
              U(t), H(a)
            },
            [i, E, L, P, Z],
          )
          var J = function (e, t) {
            $(
              setTimeout(function () {
                var a = !Ot(e)
                return y(st(st({}, L), {}, b()({}, t, st(st({}, L[t]), {}, { isUrlInvalid: a, value: e }))))
              }, 2e3),
            )
          }
          return R.a.createElement(
            W.a,
            { style: [w.container, u && w.narrowContainer] },
            R.a.createElement(
              k.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: B.b,
                size: 'title4',
                style: w.header,
                weight: 'heavy',
              },
              f,
            ),
            R.a.createElement(
              W.a,
              { style: w.scrollableContainer },
              I && R.a.createElement(k.b, { color: 'gray700' }, I),
              R.a.createElement(
                W.a,
                { accessibilityLabelledBy: B.b, accessibilityRole: 'group', style: w.contentContainer },
                Object.keys(L).map(function (e, t) {
                  var a = L[e],
                    n = a.isUrlInvalid,
                    i = a.labelGenerator,
                    o = void 0 === i ? null : i,
                    l = (a.required, a.value),
                    c = ze()(a, ['isUrlInvalid', 'labelGenerator', 'required', 'value']),
                    E = c.label || '',
                    I = c.name || ''.concat(s, '-').concat(e),
                    T = c.errorText || pt,
                    u = ot.a.getFormattedCount(t + 1),
                    N = o ? o({ n: u }) : E
                  return R.a.createElement(
                    lt.a,
                    r()({}, c, {
                      errorText: T,
                      invalid: n,
                      key: e,
                      label: N,
                      name: I,
                      onBlur: function (t) {
                        return (function (e, t) {
                          clearTimeout(Q)
                          var a = !Ot(e.target.value)
                          return y(st(st({}, L), {}, b()({}, t, st(st({}, L[t]), {}, { isUrlInvalid: a }))))
                        })(t, e)
                      },
                      onChange: function (t) {
                        return (function (e, t) {
                          clearTimeout(Q)
                          var a = !1,
                            n = e.target.value
                          return (
                            L[t].isUrlInvalid ? (a = !Ot(n)) : J(n, t),
                            y(st(st({}, L), {}, b()({}, t, st(st({}, L[t]), {}, { isUrlInvalid: a, value: n }))))
                          )
                        })(t, e)
                      },
                      style: bt.input,
                      value: l,
                    }),
                  )
                }),
                i && F && Object.keys(L).length < _
                  ? R.a.createElement(
                      k.b,
                      {
                        color: 'primary',
                        onPress: function () {
                          return y(
                            (function (e) {
                              var t = Object.keys(e).length
                              return st(
                                st({}, e),
                                {},
                                b()({}, t, st(st({}, e[t - 1]), {}, { required: !1, value: '' })),
                              )
                            })(L),
                          )
                        },
                        style: bt.addFieldText,
                      },
                      a,
                    )
                  : null,
              ),
              E &&
                R.a.createElement(
                  W.a,
                  { style: [w.contentContainer, w.checkboxContainer, bt.checkboxContainer] },
                  R.a.createElement(
                    W.a,
                    { style: w.checkbox },
                    R.a.createElement(ct.a, {
                      accessibilityLabelledBy: Nt,
                      checked: P,
                      onChange: function () {
                        return g(!P)
                      },
                    }),
                  ),
                  R.a.createElement(
                    W.a,
                    { nativeID: Nt, style: w.checkboxText },
                    R.a.createElement(k.b, { color: 'gray700' }, E),
                  ),
                ),
            ),
            R.a.createElement(
              j.a,
              {
                disabled: V,
                onClick: function () {
                  var e = (function (e) {
                      var t = {}
                      return (
                        Object(K.a)(e).forEach(function (e) {
                          if (e.dataKey) {
                            var a,
                              n,
                              i = null !== (a = t[e.dataKey]) && void 0 !== a ? a : [],
                              r = null !== (n = e.value) && void 0 !== n ? n : ''
                            t = st(st({}, t), {}, b()({}, e.dataKey, [].concat(Je()(i), [r])))
                          }
                        }),
                        t
                      )
                    })(L),
                    t = Object.keys(e).map(function (e) {
                      return nt(e)
                    })
                  O(s, e),
                    o.scribe(
                      st(
                        st({}, o.contextualScribeNamespace),
                        {},
                        {
                          element: 'CTA',
                          action: 'click',
                          data: st(
                            st({}, o.contextualScribeData),
                            {},
                            {
                              verification_application_details: st(
                                st({}, o.contextualScribeData.verification_application_details),
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
                        return Object(K.a)(e).map(function (e) {
                          var t
                          return null !== (t = e.value) && void 0 !== t ? t : ''
                        })
                      })(L),
                    ),
                    A(p)
                },
                style: w.buttonFixed,
                type: 'brandFilled',
              },
              c,
            ),
          )
        }),
        Rt = At,
        ft = a('0KEI'),
        Ct = Object(Ce.a)()
          .propsFromState(function () {
            return { errors: me.q, status: me.r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ft.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_LOADING',
              ),
              fetchAuthenticationResult: me.e,
              resetAuthenticationResult: me.h,
              resetDocumentIdProcess: me.i,
              setNextFlow: me.V,
              setPreviousFlow: me.W,
            }
          })
          .withAnalytics(),
        mt = a('B5iK'),
        St = a('pXBW'),
        Lt = 'https://help.twitter.com/managing-your-account/twitter-verified-accounts',
        yt = C.a.abd587d1,
        ht = C.a.i0bba81a,
        Dt = C.a.a6a76e3c,
        Ft = C.a.ecd2abda,
        Ut = C.a.cb70b893,
        vt = C.a.g8b511fe,
        Mt = C.a.c7d50c96,
        Pt = C.a.a68b43ed,
        gt = C.a.b5e3039f,
        Gt = C.a.h146703d,
        Yt = C.a.ee38d0f0,
        xt = C.a.cb97ee3e,
        Bt = C.a.hc371f34,
        Vt = C.a.b9d0ad9f,
        wt = C.a.ge137dce,
        Wt = C.a.h2b9a5fd,
        kt = C.a.baccb708,
        jt = C.a.feadd98c,
        Ht = C.a.j7ae97a9,
        Kt = C.a.c368aa8d,
        zt = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'j23c6258' },
          R.a.createElement(k.b, { link: Lt }, C.a.c076e32d),
        ),
        qt = C.a.ded0edad,
        Qt = C.a.bebae559,
        $t = C.a.c557161f,
        Zt = C.a.e2d42628,
        Jt = C.a.jc19b4e7,
        Xt = C.a.fc3ee695,
        ea = C.a.i3e65eb4,
        ta = C.a.jd014eba,
        aa = C.a.a96901cb,
        na = C.a.cc424a21,
        ia = C.a.ibfc1a5a,
        ra = C.a.e1c78795,
        oa = C.a.cf93bcbf,
        la = C.a.a7f1cff6,
        ca = function (e) {
          return { title: Pt, description: e, label: gt }
        },
        Ea = function (e) {
          return { title: jt, description: e, articleLabelGenerator: qt, addFieldText: yt }
        },
        sa = function (e) {
          return { title: xt, description: e, label: Gt }
        },
        Ia = function (e) {
          return { title: Zt, description: e, label: Jt }
        },
        Ta = C.a.c6bd60ec,
        ua = C.a.je403ac5,
        Na = C.a.ff8c97fb,
        da = C.a.h4d652fb,
        _a = C.a.c5b72ac5,
        pa = C.a.f7ff070c,
        Oa = C.a.eb7de689,
        ba =
          ((It = {}),
          b()(It, y.l.ACTIVISM, Ta),
          b()(It, y.l.COMPANY, ua),
          b()(It, y.l.ENTERTAINMENT, Na),
          b()(It, y.l.GOVERNMENT, da),
          b()(It, y.l.INFLUENCER_OTHER, _a),
          b()(It, y.l.NEWS, pa),
          b()(It, y.l.SPORTS, Oa),
          It),
        Aa = C.a.cc4b66b5,
        Ra = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'gee7fae8' },
          R.a.createElement(k.b, { link: Lt }, C.a.e492eeb4),
        ),
        fa = { title: Aa, description: Ra },
        Ca = C.a.b37461a4,
        ma = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'd454b49e' },
          R.a.createElement(k.b, { link: Lt }, C.a.ece0b9bc),
        ),
        Sa = C.a.b27325f6,
        La = C.a.a5a6affb,
        ya = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'hd977dd9' },
          R.a.createElement(k.b, { link: Lt }, C.a.db252639),
        ),
        ha = C.a.a15326dd,
        Da = C.a.g704a939,
        Fa = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'e3432573' },
          R.a.createElement(k.b, { link: Lt }, C.a.b25b02c1),
        ),
        Ua = {
          title: Dt,
          description: ya,
          notEligibleButton: Ut,
          notEligibleDescription: Fa,
          notEligibleTitle: ia,
          items: [
            { helpText: Mt, label: vt },
            { helpText: Yt, label: Gt },
            { helpText: ha, label: Bt },
            { helpText: Da, label: Xt },
          ],
        },
        va = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          R.a.createElement(k.b, { link: Lt }, C.a.j6ef6afa),
        ),
        Ma = ca(va),
        Pa = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          R.a.createElement(k.b, { link: Lt }, C.a.d42d1629),
        ),
        ga = sa(Pa),
        Ga = { title: kt, description: zt, articleLabelGenerator: qt, addFieldText: yt },
        Ya = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'ie26d72d' },
          R.a.createElement(k.b, { link: Lt }, C.a.ccadfc84),
        ),
        xa = { title: aa, description: Ya, label: na, confirmationText: ta },
        Ba = C.a.d2ea2049,
        Va = C.a.h753ddd2,
        wa = {
          title: Ca,
          description: ma,
          items: [
            { helpText: La, label: Sa },
            { helpText: Va, label: Ba },
          ],
        },
        Wa = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'af3fe861' },
          R.a.createElement(k.b, { link: Lt }, C.a.ddb47f56),
        ),
        ka = C.a.a15326dd,
        ja = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'a08d6af3' },
          R.a.createElement(k.b, { link: Lt }, C.a.bf9e181a),
        ),
        Ha = {
          title: Dt,
          description: Wa,
          notEligibleButton: Ut,
          notEligibleDescription: ja,
          notEligibleTitle: ia,
          items: [
            { helpText: Mt, label: vt },
            { helpText: Yt, label: Gt },
            { helpText: ka, label: Bt },
          ],
        },
        Ka = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          R.a.createElement(k.b, { link: Lt }, C.a.j6ef6afa),
        ),
        za = ca(Ka),
        qa = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          R.a.createElement(k.b, { link: Lt }, C.a.d42d1629),
        ),
        Qa = sa(qa),
        $a = { title: kt, description: zt, articleLabelGenerator: qt, addFieldText: yt },
        Za = (C.a.I18NFormatMessage, k.b, C.a.ccadfc84, C.a.ff929feb),
        Ja = C.a.jf537894,
        Xa = C.a.i3e6aaa5,
        en = C.a.bbcbb9e6,
        tn = {
          title: Ca,
          description: ma,
          items: [
            { helpText: Ja, label: Za },
            { helpText: en, label: Xa },
          ],
        },
        an = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'f774e39d' },
          R.a.createElement(k.b, { link: Lt }, C.a.e8e39f94),
        ),
        nn = {
          title: Dt,
          description: an,
          items: [
            { helpText: Mt, label: vt },
            { helpText: Yt, label: Gt },
            { helpText: $t, label: Qt },
            { helpText: Wt, label: Bt },
          ],
        },
        rn = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'd8510869' },
          R.a.createElement(k.b, { link: Lt }, C.a.e126dd3e),
        ),
        on = ca(rn),
        ln = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'h75e3640' },
          R.a.createElement(k.b, { link: Lt }, C.a.gbdf1325),
        ),
        cn = sa(ln),
        En = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'de6d69a1' },
          R.a.createElement(k.b, { link: Lt }, C.a.b0abbb16),
        ),
        sn = Ia(En),
        In = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'be0e8fda' },
          R.a.createElement(k.b, { link: Lt }, C.a.g4e815f3),
        ),
        Tn = Ea(In),
        un = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'baed7213' },
          R.a.createElement(k.b, { link: Lt }, C.a.i560665d),
        ),
        Nn = C.a.j0bc23f3,
        dn = { title: Ft, description: un, confirmationText: Nn },
        _n = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'c5d688ce' },
          R.a.createElement(k.b, { link: Lt }, C.a.eb8eeaf0),
        ),
        pn = {
          title: Dt,
          description: _n,
          items: [
            { helpText: Kt, label: Ht },
            { helpText: ea, label: Xt },
          ],
        },
        On = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'fce3e22d' },
          R.a.createElement(k.b, { link: Lt }, C.a.h486f753),
        ),
        bn = Ea(On),
        An = {
          title: ht,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'f1b276f0' },
            R.a.createElement(k.b, { link: Lt }, C.a.a77ed149),
          ),
          label: Xt,
          confirmationText: ta,
        },
        Rn = C.a.aa6228de,
        fn = C.a.d5b3cbc9,
        Cn = C.a.b5a3e590,
        mn = C.a.e484f794,
        Sn = C.a.b8d8ea64,
        Ln = C.a.ff27db3c,
        yn = ca(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'e2465096' },
            R.a.createElement(k.b, { link: Lt }, C.a.jc7215cd),
          ),
        ),
        hn = Ea(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'g83bcecc' },
            R.a.createElement(k.b, { link: Lt }, C.a.gdb5ae61),
          ),
        ),
        Dn = {
          title: Dt,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'f3016c6f' },
            R.a.createElement(k.b, { link: Lt }, C.a.icb5913e),
          ),
          items: [
            { helpText: Mt, label: vt },
            { helpText: Yt, label: Gt },
            { helpText: $t, label: Qt },
            { helpText: Wt, label: Bt },
          ],
        },
        Fn = Ia(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'h74144bd' },
            R.a.createElement(k.b, { link: Lt }, C.a.af819831),
          ),
        ),
        Un = sa(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'jef5dfc5' },
            R.a.createElement(k.b, { link: Lt }, C.a.d35525bf),
          ),
        ),
        vn = {
          title: Ca,
          description: ma,
          items: [
            { helpText: fn, label: Rn },
            { helpText: mn, label: Cn },
            { helpText: Ln, label: Sn },
          ],
        },
        Mn = {
          title: Dt,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'gf5a4309' },
            R.a.createElement(k.b, { link: Lt }, C.a.cb181ed0),
          ),
          items: [
            { helpText: Mt, label: vt },
            { helpText: Yt, label: Gt },
            { helpText: $t, label: Qt },
            { helpText: Wt, label: Bt },
          ],
        },
        Pn = ca(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'g2e175b1' },
            R.a.createElement(k.b, { link: Lt }, C.a.f6c3d3ff),
          ),
        ),
        gn = Ea(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'efc369c2' },
            R.a.createElement(k.b, { link: Lt }, C.a.bad6af53),
          ),
        ),
        Gn = Ia(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'ff03f07c' },
            R.a.createElement(k.b, { link: Lt }, C.a.af0cb1b5),
          ),
        ),
        Yn = sa(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'a3e9dde2' },
            R.a.createElement(k.b, { link: Lt }, C.a.h84f1fe0),
          ),
        ),
        xn = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'c2b8fb3c' },
          R.a.createElement(k.b, { link: Lt }, C.a.bd70d5d0),
        ),
        Bn = C.a.c0e57cb2,
        Vn = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'da6e5b18' },
          R.a.createElement(k.b, { link: Lt }, C.a.h9ec0778),
        ),
        wn = C.a.f3c605b6,
        Wn = {
          title: Dt,
          description: xn,
          items: [
            { helpText: Mt, label: vt },
            { helpText: Yt, label: Gt },
            { helpText: wt, label: Bt },
          ],
        },
        kn = { title: Bn, description: Vn, items: [{ label: wn }] },
        jn = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          R.a.createElement(k.b, { link: Lt }, C.a.j6ef6afa),
        ),
        Hn = { title: Pt, description: jn, label: gt },
        Kn = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'bb47d2b9' },
          R.a.createElement(k.b, { link: Lt }, C.a.f7998564),
        ),
        zn = { title: xt, description: Kn, label: Gt },
        qn = { title: kt, description: zt, articleLabelGenerator: qt, addFieldText: yt },
        Qn = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'db930fb2' },
          R.a.createElement(k.b, { link: Lt }, C.a.b4e93970),
        ),
        $n = C.a.h042d1a5,
        Zn = {
          title: Dt,
          description: Qn,
          items: [
            { description: C.a.d2310f0b, label: $n },
            { description: wt, label: Ht },
          ],
        },
        Jn = {
          title: C.a.ba04b4c1,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'dc263ec0' },
            R.a.createElement(k.b, { link: Lt }, C.a.jb3e663d),
          ),
          label: $n,
        },
        Xn = { title: jt, description: zt, articleLabelGenerator: qt, addFieldText: yt },
        ei = {
          title: la,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'd8b21ebb' },
            R.a.createElement(k.b, { link: Lt }, C.a.a7a51b91),
          ),
          label: ra,
        },
        ti = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'i3b4217a' },
          R.a.createElement(k.b, { link: Lt }, C.a.c58d2c6b),
        ),
        ai = C.a.i9b124b6,
        ni = C.a.f84a99ee,
        ii = C.a.j2cb5f50,
        ri = C.a.j2472894,
        oi = C.a.ha44c13f,
        li = {
          title: Ca,
          description: ti,
          items: [
            { helpText: ni, label: ai },
            { helpText: ri, label: ii },
            { helpText: C.a.j8ae9d40, label: oi },
          ],
        },
        ci = {
          candidateTitle: C.a.ef1d6175,
          candidateDescription: C.a.f54ba6e6,
          officialTitle: C.a.dd85d0af,
          officialDescription: C.a.f0058c60,
          confirmButtonLabel: C.a.f420a711,
          declineButtonLabel: C.a.fb97d22b,
        },
        Ei = {
          candidateTitle: C.a.e16b1cc8,
          candidateDescription: C.a.cf2ee92e,
          officeTitle: C.a.g544885e,
          officeDescription: C.a.bd0b4542,
          officialTitle: C.a.i45b224c,
          officialDescription: C.a.fba1dd66,
          confirmButtonLabel: C.a.e95c44dd,
          declineButtonLabel: C.a.fa5e15e1,
        },
        si = Ea(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'ja62479f' },
            R.a.createElement(k.b, { link: Lt }, C.a.c04b4b1b),
          ),
        ),
        Ii = Ea(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'f28bbbb0' },
            R.a.createElement(k.b, { link: Lt }, C.a.a60039a6),
          ),
        ),
        Ti = Ea(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'b229f4b8' },
            R.a.createElement(k.b, { link: Lt }, C.a.ba75f2ad),
          ),
        ),
        ui = C.a.jdf47e8d,
        Ni = {
          title: C.a.eeec7315,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'ec71430d' },
            R.a.createElement(k.b, { link: Lt }, C.a.d9486fbf),
          ),
          websiteLabel: ui,
        },
        di = C.a.b163b653,
        _i = {
          title: C.a.d2378d34,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'f9e2b0f2' },
            R.a.createElement(k.b, { link: Lt }, C.a.e3b02224),
          ),
          websiteLabel: di,
        },
        pi = {
          title: ht,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'a394654e' },
            R.a.createElement(k.b, { link: Lt }, C.a.e332fb11),
          ),
          websiteLabel: di,
        },
        Oi = C.a.a05b8445,
        bi = C.a.hdad12b1,
        Ai = C.a.a18c6dfb,
        Ri = C.a.h0b46533,
        fi = C.a.d2d7af4b,
        Ci = {
          title: Ca,
          description: ma,
          items: [
            { description: Ri, label: Ai },
            { description: bi, label: Oi },
            { description: C.a.d83e51db, label: fi },
          ],
        },
        mi = {
          title: C.a.g708cbdb,
          description: C.a.b107ee5b,
          confirmButtonLabel: C.a.e95c44dd,
          declineButtonLabel: C.a.fa5e15e1,
        },
        Si = {
          title: Ft,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'dcb0da53' },
            R.a.createElement(k.b, { link: Lt }, C.a.h04c272b),
          ),
          confirmationText: C.a.e8746826,
        },
        Li = {
          headline: C.a.jc09b420,
          subtext: C.a.gfbd7e58,
          actionLabel: C.a.e95c44dd,
          tertiaryActionLabel: C.a.fa5e15e1,
        },
        yi = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'd82a96af' },
          R.a.createElement(k.b, { link: Lt }, C.a.j331c658),
        ),
        hi = C.a.h0ad4c9d,
        Di = C.a.a6553b5f,
        Fi = C.a.a29b2987,
        Ui = {
          title: Dt,
          description: yi,
          items: [
            { description: Di, label: hi },
            { description: C.a.ab4eae60, label: Fi },
          ],
        },
        vi = {
          title: ht,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'd47b4101' },
            R.a.createElement(k.b, { link: Lt }, C.a.h02fe64e),
          ),
          websiteLabel: ra,
          confirmationText: C.a.b3fac982,
        },
        Mi = {
          title: C.a.e26dc9e2,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'a3540593' },
            R.a.createElement(k.b, { link: Lt }, C.a.a7df4b84),
          ),
          articleNumerationLabelGenerator: qt,
          addFieldText: yt,
        },
        Pi = {
          title: C.a.e164df2d,
          description: C.a.i80ff05e,
          actionLabel: C.a.cf7482eb,
          tertiaryActionLabel: C.a.cb70b893,
        },
        gi = {
          title: Dt,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'edb782e6' },
            R.a.createElement(k.b, { link: Lt }, C.a.d575e579),
          ),
          items: [
            { description: Mt, label: vt },
            { description: Yt, label: Gt },
            { description: $t, label: Qt },
            { description: Vt, label: Bt },
          ],
        },
        Gi = ca(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'cc16af2c' },
            R.a.createElement(k.b, { link: Lt }, C.a.ede35c04),
          ),
        ),
        Yi = sa(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'b42b7001' },
            R.a.createElement(k.b, { link: Lt }, C.a.d5dedb7a),
          ),
        ),
        xi = Ia(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'fd2c6f62' },
            R.a.createElement(k.b, { link: Lt }, C.a.ab604a66),
          ),
        ),
        Bi = Ea(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'ec7027cc' },
            R.a.createElement(k.b, { link: Lt }, C.a.i532d121),
          ),
        ),
        Vi = C.a.fcb96cfc,
        wi = C.a.ddc7d64a,
        Wi = C.a.c4e0d346,
        ki = C.a.e3ce81fa,
        ji = C.a.b2808f47,
        Hi = {
          title: Ca,
          description: ma,
          items: [
            { helpText: wi, label: Vi },
            { helpText: ki, label: Wi },
            { helpText: C.a.jaa90f86, label: ji },
          ],
        },
        Ki = R.a.createElement(C.a.I18NFormatMessage, { $i18n: 'a0a9f835' }),
        zi = C.a.bbd9a911,
        qi = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'iba551d5' },
          R.a.createElement(k.b, { link: Lt }, C.a.f22a6d0c),
        ),
        Qi = { title: Ft, description: Ki, confirmationText: zi },
        $i = {
          title: Ft,
          description: R.a.createElement(C.a.I18NFormatMessage, { $i18n: 'h515e868' }),
          confirmationText: zi,
        },
        Zi = { headline: ia, subtext: qi, actionLabel: Ut },
        Ji = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'd2cd7f89' },
          R.a.createElement(k.b, { link: Lt }, C.a.i78c9fd3),
        ),
        Xi = C.a.he9c5637,
        er = {
          title: Dt,
          description: Ji,
          items: [
            { helpText: Mt, label: vt },
            { helpText: Yt, label: Gt },
            { helpText: $t, label: Qt },
            { helpText: Xi, label: oa },
            { helpText: Wt, label: Bt },
          ],
        },
        tr = ca(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'c68614a2' },
            R.a.createElement(k.b, { link: Lt }, C.a.i78b0bd0),
          ),
        ),
        ar = sa(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'b4ea622e' },
            R.a.createElement(k.b, { link: Lt }, C.a.i78103dc),
          ),
        ),
        nr = Ia(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'acab99f6' },
            R.a.createElement(k.b, { link: Lt }, C.a.ebfa8bb3),
          ),
        ),
        ir = {
          title: la,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'df0b2577' },
            R.a.createElement(k.b, { link: Lt }, C.a.fcfad60b),
          ),
          label: ra,
        },
        rr = Ea(
          R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'jfda4c28' },
            R.a.createElement(k.b, { link: Lt }, C.a.a5e8a43a),
          ),
        ),
        or = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'g3299df1' },
          R.a.createElement(k.b, { link: Lt }, C.a.d9bd3821),
        ),
        lr = C.a.bf06e1d5,
        cr = {
          title: Dt,
          description: or,
          items: [
            { description: C.a.e241d35d, label: Ht },
            { description: lr, label: oa },
          ],
        },
        Er = {
          title: Dt,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'id6bbc01' },
            R.a.createElement(k.b, { link: Lt }, C.a.a67f27bc),
          ),
          items: [
            { description: C.a.ad456030, label: Ht },
            { description: C.a.hbe2e65b, label: oa },
          ],
        },
        sr = {
          title: la,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'fbe119c5' },
            R.a.createElement(k.b, { link: Lt }, C.a.b8be7ad9),
          ),
          websiteLabel: ra,
        },
        Ir = Ea(zt),
        Tr = {
          title: la,
          description: R.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'da0e7f32' },
            R.a.createElement(k.b, { link: Lt }, C.a.fa437e4d),
          ),
          websiteLabel: ra,
        },
        ur = Ea(zt),
        Nr = C.a.j24c37b2,
        dr = C.a.j3da4de9,
        _r = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'ca20e39f' },
          R.a.createElement(k.b, { link: Lt }, C.a.b436b100),
        ),
        pr = C.a.ff2ee0c1,
        Or = C.a.af39265e,
        br = C.a.hc61adfb,
        Ar = C.a.d2042392,
        Rr = C.a.c365dcc5,
        fr = C.a.c8ee31da,
        Cr = C.a.bb51cd79,
        mr =
          ((Tt = {}),
          b()(Tt, y.l.ACTIVISM, pr),
          b()(Tt, y.l.COMPANY, Or),
          b()(Tt, y.l.ENTERTAINMENT, br),
          b()(Tt, y.l.GOVERNMENT, Ar),
          b()(Tt, y.l.INFLUENCER_OTHER, Rr),
          b()(Tt, y.l.NEWS, fr),
          b()(Tt, y.l.SPORTS, Cr),
          Tt),
        Sr = C.a.d2ea2049,
        Lr =
          ((ut = {}),
          b()(ut, y.n.ACTIVIST, Ta),
          b()(ut, y.n.CANDIDATE, ii),
          b()(ut, y.n.COMPANY, Za),
          b()(ut, y.n.CONTENT_CREATOR, Sa),
          b()(ut, y.n.ENTERTAINMENT_COMPANY, Rn),
          b()(ut, y.n.ENTERTAINMENT_INDIVIDUAL, Cn),
          b()(ut, y.n.EXECUTIVE, Xa),
          b()(ut, y.n.FREELANCER, Oi),
          b()(ut, y.n.GAMING_INDIVIDUAL, ji),
          b()(ut, y.n.INFLUENTIAL_INDIVIDUAL, Sr),
          b()(ut, y.n.JOURNALIST, Ai),
          b()(ut, y.n.OFFICE, oi),
          b()(ut, y.n.OFFICIAL, ai),
          b()(ut, y.n.ORGANIZATION, fi),
          b()(ut, y.n.PRODUCTION, Sn),
          b()(ut, y.n.SPORTS_ENTITY, Wi),
          b()(ut, y.n.SPORTS_INDIVIDUAL, Vi),
          ut),
        yr = C.a.fc2a5c92,
        hr = C.a.jf4b6f7f,
        Dr = dr,
        Fr = _r,
        Ur = C.a.d338f53e,
        vr = function (e) {
          var t = e.error,
            a = e.onButtonClick,
            n = t instanceof St.a ? t.status : void 0,
            i = Ur,
            r = yr,
            o = hr
          return (
            429 === n && ((i = Nr), (r = Dr), (o = Fr)),
            R.a.createElement(m.a, {
              actionLabel: i,
              graphicDisplayMode: 'none',
              headline: r,
              onAction: a,
              onClose: S.a,
              subtext: o,
              withCloseButton: !1,
            })
          )
        }
      function Mr(e, t) {
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
      function Pr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Mr(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Mr(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      function gr(e) {
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
      var Gr = C.a.h2d4ba55,
        Yr = C.a.i2051842,
        xr = Ct(
          (function (e) {
            u()(a, e)
            var t = gr(a)
            function a(e) {
              var n
              return (
                l()(this, a),
                (n = t.call(this, e)),
                b()(I()(n), '_handleErrorButtonClick', function () {
                  n.props.resetDocumentIdProcess(), n.props.setPreviousFlow()
                }),
                b()(I()(n), '_isPollingDone', function (e) {
                  return e === y.o.NOT_STARTED || e === y.o.CONCLUSIVE || e === y.o.INCONCLUSIVE
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
                      (this._pollingTimer = new mt.b(5e3).interval(function () {
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
                      r === e.status || r !== y.o.CONCLUSIVE || n.length || (this._handleScribe('success'), i())
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
                      Pr(
                        Pr({}, t.contextualScribeNamespace),
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
                    return t.length || a === y.o.INCONCLUSIVE || a === y.o.NOT_STARTED || 5 === this.state.retryCount
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
                      R.a.createElement(vr, { onButtonClick: this._handleErrorButtonClick })
                    )
                  },
                },
                {
                  key: '_renderLoading',
                  value: function () {
                    return R.a.createElement(
                      W.a,
                      { style: w.largeBannerContainer },
                      R.a.createElement(Oe, { isNarrow: this.props.isNarrow, type: de.LOADING }),
                      R.a.createElement(
                        W.a,
                        { style: [w.container, w.verticalCenter, this.props.isNarrow && w.narrowContainer] },
                        R.a.createElement(
                          k.b,
                          {
                            accessibilityLevel: 1,
                            accessibilityRole: 'heading',
                            nativeID: B.b,
                            size: 'title4',
                            style: w.header,
                            weight: 'heavy',
                          },
                          Gr,
                        ),
                        R.a.createElement(k.b, { color: 'gray700' }, Yr),
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
          })(R.a.Component),
        ),
        Br = a('AspN'),
        Vr = function (e) {
          var t = Object(me.u)(e)
          return t ? Object(Br.k)(e, t)[0] : void 0
        },
        wr = function (e) {
          var t = Object(me.F)(e)
          return t ? Object(Br.k)(e, t)[0] : void 0
        },
        Wr = Object(Ce.a)()
          .propsFromState(function () {
            return {
              backID: me.u,
              backImage: Vr,
              documentFormats: me.A,
              frontID: me.F,
              frontImage: wr,
              idCountry: me.G,
              idType: me.I,
              isConfirmed: me.x,
              uploadEntityId: me.B,
              uploadErrors: me.C,
              uploadFetchStatus: me.D,
              uploadRequestError: me.E,
            }
          })
          .propsFromActions(function () {
            return {
              addMedia: Br.b,
              createLocalApiErrorHandler: Object(ft.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_UPLOAD',
              ),
              processMultipleMedia: Br.g,
              removeMedia: Br.h,
              resetAuthenticationResult: me.h,
              resetDocumentIdProcess: me.i,
              resetIntakeUpload: me.k,
              setBackID: me.Q,
              setFrontID: me.S,
              setNextFlow: me.V,
              toggleCheckboxConfirmation: me.X,
              verifyIdDocument: me.ab,
            }
          })
          .withAnalytics(),
        kr = a('LCtV'),
        jr = a('T8pk'),
        Hr = a('VPdC'),
        Kr = a('pKoL'),
        zr = a('rFBM')
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
      var Qr = ['application/pdf', 'image/bmp', 'image/jpeg', 'image/png', 'image/tiff'],
        $r = (function (e) {
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
                    return Qr.includes(e.type)
                  })
                n && a([n])
              }),
              b()(I()(e), '_renderDragDropTarget', function () {
                var t = e.props,
                  a = t.accessibilityLabel,
                  n = t.onChange
                return R.a.createElement(Hr.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !1,
                  accessibilityLabel: a,
                  customMimeTypes: Qr,
                  icon: R.a.createElement(jr.a, { style: Zr.mediaPickerIcon }),
                  onChange: n,
                  size: 'small',
                  style: Zr.mediaPicker,
                  withIcon: !0,
                })
              }),
              b()(I()(e), '_getResizeIfNeeded', function (e) {
                var t = e.externalMediaDetails && e.externalMediaDetails.height / e.externalMediaDetails.width
                return t && t > 1 ? 'width' : 'height'
              }),
              b()(I()(e), '_renderPreview', function (t) {
                var a = e.props.onRemove
                return R.a.createElement(Kr.a, {
                  borderRadius: kr.a.MEDIUM,
                  mediaItem: t,
                  onRemove: a,
                  resizeIfNeeded: e._getResizeIfNeeded(t),
                  style: Zr.mediaPreview,
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
                  return R.a.createElement(
                    W.a,
                    { style: Zr.dragDropContainer },
                    R.a.createElement(k.b, { weight: 'bold' }, a),
                    R.a.createElement(zr.a, { onFilesAdded: this._handleDragDrop, style: Zr.dragDropComponent }, n),
                  )
                },
              },
            ]),
            a
          )
        })(R.a.Component),
        Zr = V.a.create(function (e) {
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
        Jr = $r,
        Xr = a('eyty')
      function eo(e, t) {
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
      function to(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? eo(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : eo(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      function ao(e) {
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
      var no,
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
        So,
        Lo = 'verification-checkbox-label',
        yo = C.a.ff1d68f7,
        ho = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'b8f15ec4' },
          R.a.createElement(k.b, { link: Lt }, C.a.h0ed9034),
        ),
        Do = C.a.bdada5a5,
        Fo = C.a.edfed0f6,
        Uo = C.a.b08821f3,
        vo = C.a.b09aade5,
        Mo = C.a.b40ed190,
        Po = C.a.c6650b55,
        go = C.a.d171ed16,
        Go = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'd65a41c2' },
          R.a.createElement(k.b, { link: 'https://twitter.com/privacy' }, C.a.e9d83172),
        ),
        Yo = C.a.c1df579e,
        xo = (function (e) {
          u()(a, e)
          var t = ao(a)
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
                n(t, { location: Xr.d.Verification }).then(function (t) {
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
                n(t, { location: Xr.d.Verification }).then(function (t) {
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
                return t.uploadFetchStatus === ae.a.FAILED || !!a.length
              }),
              b()(I()(e), '_isUploading', function () {
                return e.props.uploadFetchStatus === ae.a.LOADING
              }),
              b()(I()(e), '_renderCheckbox', function () {
                var t = e.props.isConfirmed
                return R.a.createElement(
                  W.a,
                  { style: [w.contentContainer, w.checkboxContainer] },
                  R.a.createElement(
                    W.a,
                    { style: w.checkbox },
                    R.a.createElement(ct.a, {
                      accessibilityLabelledBy: Lo,
                      checked: t,
                      onChange: e._handleCheckboxChange,
                    }),
                  ),
                  R.a.createElement(
                    W.a,
                    { nativeID: Lo, style: w.checkboxText },
                    R.a.createElement(k.b, { color: 'gray700' }, go),
                    R.a.createElement(k.b, { color: 'gray700', style: w.text }, Go),
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
                  r = i ? Fo : Po,
                  o = i ? Do : Mo
                return R.a.createElement(
                  W.a,
                  { accessibilityLabelledBy: B.b, accessibilityRole: 'group', style: Bo.gridContainer },
                  R.a.createElement(Jr, {
                    accessibilityLabel: r,
                    mediaItem: n,
                    onChange: e._handleAddFrontMedia,
                    onRemove: e._handleRemoveFrontID,
                    title: o,
                  }),
                  i &&
                    R.a.createElement(Jr, {
                      accessibilityLabel: vo,
                      mediaItem: a,
                      onChange: e._handleAddBackMedia,
                      onRemove: e._handleRemoveBackID,
                      title: Uo,
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
                    to(
                      to({}, t.contextualScribeNamespace),
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
                    R.a.createElement(vr, { error: e, onButtonClick: this._handleErrorButtonClick })
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
                  return R.a.createElement(
                    W.a,
                    { style: [w.container, i && w.narrowContainer] },
                    R.a.createElement(
                      k.b,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: B.b,
                        size: 'title4',
                        style: w.header,
                        weight: 'heavy',
                      },
                      yo,
                    ),
                    R.a.createElement(
                      W.a,
                      { style: w.scrollableContainer },
                      R.a.createElement(k.b, { color: 'gray700' }, ho),
                      this._renderUploadTargets(),
                      this._renderCheckbox(),
                    ),
                    R.a.createElement(
                      j.a,
                      { disabled: r, onPress: this._handleSubmit, style: w.buttonFixed, type: 'brandFilled' },
                      Yo,
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
        })(R.a.Component),
        Bo = V.a.create(function (e) {
          return { gridContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: e.spaces.space16 } }
        }),
        Vo = Wr(xo),
        wo = { hasId: !0, hasEmail: !0, hasWebsite: !0 },
        Wo =
          ((co = {}),
          b()(co, y.l.ACTIVISM, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype: b()({}, y.b.ACTIVIST, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
          }),
          b()(co, y.l.COMPANY, {
            hasId: !1,
            hasEmail: !0,
            hasWebsite: !0,
            subtype:
              ((no = {}),
              b()(no, y.e.COMPANY, { hasId: !1, hasEmail: !0, hasWebsite: !0 }),
              b()(no, y.e.EXECUTIVE, { hasId: !0, hasEmail: !0, hasWebsite: !0 }),
              no),
          }),
          b()(co, y.l.ENTERTAINMENT, {
            hasId: !1,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((io = {}),
              b()(io, y.f.ENTERTAINMENT_INDIVIDUAL, { hasId: !1, hasEmail: !1, hasWebsite: !1 }),
              b()(io, y.f.ENTERTAINMENT_COMPANY, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              b()(io, y.f.PRODUCTION, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              io),
          }),
          b()(co, y.l.GOVERNMENT, {
            hasId: !1,
            hasEmail: !1,
            hasWebsite: !0,
            subtype: b()({}, y.i.CANDIDATE, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
          }),
          b()(co, y.l.INFLUENCER_OTHER, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((ro = {}),
              b()(ro, y.j.INFLUENTIAL_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              b()(ro, y.j.CONTENT_CREATOR, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              ro),
          }),
          b()(co, y.l.NEWS, {
            hasId: !1,
            hasEmail: !0,
            hasWebsite: !0,
            subtype:
              ((oo = {}),
              b()(oo, y.k.JOURNALIST, { hasId: !0, hasEmail: !0, hasWebsite: !0 }),
              b()(oo, y.k.FREELANCER, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              b()(oo, y.k.ORGANIZATION, { hasId: !1, hasEmail: !0, hasWebsite: !0 }),
              oo),
          }),
          b()(co, y.l.SPORTS, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((lo = {}),
              b()(lo, y.q.SPORTS_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              b()(lo, y.q.SPORTS_ENTITY, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              b()(lo, y.q.GAMING_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              lo),
          }),
          co)
      function ko(e, t) {
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
      function jo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ko(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ko(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var Ho,
        Ko = C.a.i79902b4,
        zo = C.a.fb2fcb5b,
        qo = C.a.e43425fa,
        Qo = C.a.cb7c2e2e,
        $o = C.a.a411926a,
        Zo = C.a.g253cddf,
        Jo = C.a.cf93bcbf,
        Xo = C.a.ca5fb0d4,
        el = C.a.g40cd2c0,
        tl = { title: Ko, description: zo },
        al =
          ((Eo = {}),
          b()(Eo, y.d.IDENTITY_DOCUMENT, { label: qo, subtext: Qo }),
          b()(Eo, y.d.EMAIL, { label: $o, subtext: Zo }),
          b()(Eo, y.d.WEBSITE, { label: Jo, subtext: Xo }),
          Eo),
        nl = jo(jo({}, tl), {}, { items: jo({}, al) }),
        il = { title: C.a.a7f1cff6, description: C.a.ce40e7a5, websiteLabel: Jo },
        rl = C.a.dff1555f,
        ol = C.a.ed751204,
        ll = C.a.fbc023bf,
        cl = { headline: rl, subtext: ol, actionLabel: ll, tertiaryActionLabel: C.a.e785ce06 },
        El = C.a.i8d58f3d,
        sl = jo(jo({}, cl), {}, { tertiaryActionLabel: El }),
        Il = C.a.eb21eca9,
        Tl = jo(jo({}, cl), {}, { tertiaryActionLabel: Il }),
        ul = C.a.f848a69d,
        Nl = C.a.d59b5365,
        dl = C.a.bfb01c62,
        _l = { headline: rl, subtext: ul, actionLabel: ll, tertiaryActionLabel: dl },
        pl = jo(jo({}, _l), {}, { subtext: Nl }),
        Ol = { headline: rl, subtext: ul, actionLabel: ll, tertiaryActionLabel: dl },
        bl = C.a.ibd16281,
        Al = C.a.d5254e1b,
        Rl = C.a.h45b00d7,
        fl = C.a.bd9d7f96,
        Cl = C.a.g32c2900,
        ml = C.a.e6327f3b,
        Sl = C.a.c7f75eab,
        Ll = C.a.eb08a392,
        yl = C.a.je4c4696,
        hl = C.a.dcc23261,
        Dl = C.a.h96ba9b6,
        Fl = C.a.e4610048,
        Ul = C.a.dedf41f1,
        vl = C.a.c78e091a,
        Ml = C.a.g5657ec3,
        Pl = C.a.baf718c3,
        gl = C.a.c65bbbc1,
        Gl = C.a.i31e3606,
        Yl = C.a.d85ef4a7,
        xl = C.a.ddb19f72,
        Bl = C.a.a8d332f2,
        Vl = C.a.f7afbaeb,
        wl = C.a.d4ab0055,
        Wl = C.a.d2a77621,
        kl = C.a.e23b92c5,
        jl = C.a.b03ae068,
        Hl = C.a.g0daba49,
        Kl = C.a.h85524c4,
        zl = C.a.cdcd9cd5,
        ql = C.a.gcee7aad,
        Ql = C.a.e6dc91b1,
        $l = C.a.ga603b22,
        Zl =
          ((So = { header: Ko }),
          b()(
            So,
            y.l.ACTIVISM,
            b()({}, y.b.ACTIVIST, {
              description: hl,
              items:
                ((so = {}),
                b()(so, y.d.IDENTITY_DOCUMENT, { label: qo, subtext: Qo }),
                b()(so, y.d.WEBSITE, { label: Jo, subtext: Dl, description: Fl, inputLabel: el }),
                so),
            }),
          ),
          b()(
            So,
            y.l.INFLUENCER_OTHER,
            b()({}, y.j.INFLUENTIAL_INDIVIDUAL, {
              description: Ul,
              items:
                ((Io = {}),
                b()(Io, y.d.IDENTITY_DOCUMENT, { label: qo, subtext: Qo }),
                b()(Io, y.d.WEBSITE, { label: Jo, subtext: vl, description: Ml, inputLabel: el }),
                Io),
            }),
          ),
          b()(
            So,
            y.l.COMPANY,
            ((No = {}),
            b()(No, y.e.COMPANY, {
              description: Pl,
              items:
                ((To = {}),
                b()(To, y.d.EMAIL, { label: $o, subtext: Gl }),
                b()(To, y.d.WEBSITE, { label: Jo, subtext: fl, description: xl, inputLabel: el }),
                To),
            }),
            b()(No, y.e.EXECUTIVE, {
              description: gl,
              items:
                ((uo = {}),
                b()(uo, y.d.IDENTITY_DOCUMENT, { label: qo, subtext: Qo }),
                b()(uo, y.d.EMAIL, { label: $o, subtext: Gl }),
                b()(uo, y.d.WEBSITE, { label: Jo, subtext: Yl, description: Bl, inputLabel: el }),
                uo),
            }),
            No),
          ),
          b()(
            So,
            y.l.ENTERTAINMENT,
            ((_o = {}),
            b()(_o, y.f.ENTERTAINMENT_COMPANY, {
              description: Rl,
              items: b()({}, y.d.WEBSITE, { label: Jo, subtext: Sl, description: xl, inputLabel: el }),
            }),
            b()(_o, y.f.PRODUCTION, {
              description: Cl,
              items: b()({}, y.d.WEBSITE, { label: Jo, subtext: Sl, description: ml, inputLabel: el }),
            }),
            _o),
          ),
          b()(
            So,
            y.l.GOVERNMENT,
            b()({}, y.i.CANDIDATE, {
              description: Ll,
              items:
                ((po = {}),
                b()(po, y.d.IDENTITY_DOCUMENT, { label: qo, subtext: Qo }),
                b()(po, y.d.WEBSITE, { label: Jo, subtext: fl, description: yl, inputLabel: el }),
                po),
            }),
          ),
          b()(
            So,
            y.l.NEWS,
            ((Ro = {}),
            b()(Ro, y.k.FREELANCER, {
              description: wl,
              items:
                ((Oo = {}),
                b()(Oo, y.d.IDENTITY_DOCUMENT, { label: qo, subtext: Qo }),
                b()(Oo, y.d.WEBSITE, { label: Jo, subtext: kl, description: bl }),
                Oo),
            }),
            b()(Ro, y.k.JOURNALIST, {
              description: Vl,
              items:
                ((bo = {}),
                b()(bo, y.d.IDENTITY_DOCUMENT, { label: qo, subtext: Qo }),
                b()(bo, y.d.EMAIL, { label: $o, subtext: Wl }),
                b()(bo, y.d.WEBSITE, { label: Jo, subtext: kl, description: bl }),
                bo),
            }),
            b()(Ro, y.k.ORGANIZATION, {
              description: jl,
              items:
                ((Ao = {}),
                b()(Ao, y.d.EMAIL, { label: $o, subtext: Wl }),
                b()(Ao, y.d.WEBSITE, { label: Jo, subtext: fl, description: Al }),
                Ao),
            }),
            Ro),
          ),
          b()(
            So,
            y.l.SPORTS,
            ((mo = {}),
            b()(mo, y.q.SPORTS_INDIVIDUAL, {
              description: Ql,
              items:
                ((fo = {}),
                b()(fo, y.d.IDENTITY_DOCUMENT, { label: qo, subtext: Qo }),
                b()(fo, y.d.WEBSITE, { label: Jo, subtext: fl, description: $l }),
                fo),
            }),
            b()(mo, y.q.SPORTS_ENTITY, {
              description: zl,
              items: b()({}, y.d.WEBSITE, { label: Jo, subtext: fl, description: ql }),
            }),
            b()(mo, y.q.GAMING_INDIVIDUAL, {
              description: Hl,
              items:
                ((Co = {}),
                b()(Co, y.d.IDENTITY_DOCUMENT, { label: qo, subtext: Qo }),
                b()(Co, y.d.WEBSITE, { label: Jo, subtext: fl, description: Kl }),
                Co),
            }),
            mo),
          ),
          So)
      function Jl(e, t) {
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
      function Xl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Jl(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Jl(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var ec,
        tc = function (e, t) {
          return e && t ? Zl[e][t] : nl
        },
        ac = function (e, t, a) {
          var n = tc(t, a).items,
            i = wo
          t && a ? (i = Wo[t].subtype[a]) : t && (i = Wo[t])
          var r = []
          return (
            i.hasId &&
              r.push({
                helpText: n[y.d.IDENTITY_DOCUMENT].subtext,
                label: n[y.d.IDENTITY_DOCUMENT].label,
                value: y.d.IDENTITY_DOCUMENT,
              }),
            i.hasEmail && e && r.push({ helpText: n[y.d.EMAIL].subtext, label: n[y.d.EMAIL].label, value: y.d.EMAIL }),
            i.hasWebsite &&
              r.push({ helpText: n[y.d.WEBSITE].subtext, label: n[y.d.WEBSITE].label, value: y.d.WEBSITE }),
            r
          )
        },
        nc = Object.freeze(
          ((Ho = {}),
          b()(Ho, y.h.AUTHENTICITY_TYPE_SELECT, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              n = e.userEmail
            return {
              type: 'radio',
              props: {
                description: tc(t, a).description,
                getNextFormStep: function (e) {
                  switch (e) {
                    case y.d.IDENTITY_DOCUMENT:
                      return y.h.INTAKE_TYPE_SELECT
                    case y.d.EMAIL:
                      return y.h.EMAIL_VERIFICATION
                    case y.d.WEBSITE:
                      return y.h.SITE_VERIFICATION
                    default:
                      return y.h.THANK_YOU
                  }
                },
                items: ac(n, t, a),
                title: nl.title,
              },
            }
          }),
          b()(Ho, y.h.SITE_VERIFICATION, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              n = tc(t, a).items[y.d.WEBSITE]
            return {
              type: 'input',
              props: {
                title: il.title,
                description: n.description || il.description,
                items: [{ dataKey: y.c.WEBSITE, label: n.inputLabel || il.websiteLabel, required: !0 }],
              },
            }
          }),
          b()(Ho, y.h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, function (e) {
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
              case y.l.COMPANY:
              case y.l.ACTIVISM:
                T = null !== (t = null == l ? void 0 : l.leadershipReferenceUrl) && void 0 !== t ? t : []
                break
              case y.l.INFLUENCER_OTHER:
              case y.l.ENTERTAINMENT:
                T = null !== (a = null == l ? void 0 : l.mainReferenceUrl) && void 0 !== a ? a : []
                break
              case y.l.GOVERNMENT:
                T = null !== (n = null == l ? void 0 : l.publicReferenceUrl) && void 0 !== n ? n : []
                break
              case y.l.NEWS:
                T = null !== (i = null == l ? void 0 : l.authorReferenceUrl) && void 0 !== i ? i : []
                break
              case y.l.SPORTS:
                T = null !== (r = null == l ? void 0 : l.teamReferenceUrl) && void 0 !== r ? r : []
            }
            var u = cl,
              N = function () {
                return s(y.h.AUTHENTICITY_TYPE_SELECT)
              }
            switch (c) {
              case y.n.CONTENT_CREATOR:
                ;(u = pl),
                  (N = function () {
                    return I()
                  })
                break
              case y.n.ENTERTAINMENT_INDIVIDUAL:
                ;(u = _l),
                  (N = function () {
                    return I()
                  })
                break
              case y.n.OFFICE:
                ;(u = Tl),
                  (N = function () {
                    E(y.h.AUTHENTICITY_TYPE_SELECT, y.d.EMAIL), s(y.h.EMAIL_VERIFICATION)
                  })
                break
              case y.n.OFFICIAL:
                ;(u = sl),
                  (N = function () {
                    E(y.h.AUTHENTICITY_TYPE_SELECT, y.d.IDENTITY_DOCUMENT), s(y.h.INTAKE_TYPE_SELECT)
                  })
            }
            return {
              type: 'info',
              props: Xl(
                Xl({}, u),
                {},
                {
                  onAction: function () {
                    E(y.h.AUTHENTICITY_TYPE_SELECT, y.d.WEBSITE),
                      E(y.h.SITE_VERIFICATION, b()({}, y.c.WEBSITE, T)),
                      s(y.h.REVIEW_SUBMIT)
                  },
                  onTertiaryAction: function () {
                    return N()
                  },
                },
              ),
            }
          }),
          b()(Ho, y.h.WEBSITE_REFERENCE_CONFIRM_PROCEED, { type: 'info', props: Xl({}, Ol) }),
          Ho),
        )
      a('i4UL')
      function ic(e, t) {
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
      function rc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ic(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ic(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var oc,
        lc = Object.freeze(
          ((ec = {}),
          b()(ec, y.h.NOTABILITY_CATEGORY_SELECT, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'radio',
              props: {
                description: fa.description,
                getNextFormStep: function (e) {
                  switch (e) {
                    case y.l.ACTIVISM:
                      return a || i ? y.h.ACTIVIST_QUALIFICATIONS : y.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE
                    case y.l.INFLUENCER_OTHER:
                      return a || i ? y.h.INFLUENCER_SUBCATEGORY : y.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE
                    case y.l.COMPANY:
                      return y.h.COMPANY_SUBCATEGORY
                    case y.l.ENTERTAINMENT:
                      return y.h.ENTERTAINMENT_QUALIFICATIONS
                    case y.l.GOVERNMENT:
                      return y.h.GOVERNMENT_SUBCATEGORY
                    case y.l.NEWS:
                      return y.h.NEWS_QUALIFICATIONS
                    case y.l.SPORTS:
                      return y.h.SPORTS_SUBCATEGORY
                    default:
                      return null
                  }
                },
                items: [
                  { label: ba[y.l.GOVERNMENT], value: y.l.GOVERNMENT },
                  { label: ba[y.l.COMPANY], value: y.l.COMPANY },
                  { label: ba[y.l.NEWS], value: y.l.NEWS },
                  { label: ba[y.l.ENTERTAINMENT], value: y.l.ENTERTAINMENT },
                  { label: ba[y.l.SPORTS], value: y.l.SPORTS },
                  { label: ba[y.l.INFLUENCER_OTHER], value: y.l.INFLUENCER_OTHER },
                  { label: ba[y.l.ACTIVISM], value: y.l.ACTIVISM },
                ],
                title: fa.title,
              },
            }
          }),
          b()(ec, y.h.ACTIVIST_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: Ua.title,
              description: Ua.description,
              items: [
                rc(rc({}, Ua.items[0]), {}, { value: y.m.GOOGLE }),
                rc(rc({}, Ua.items[1]), {}, { value: y.m.WIKIPEDIA }),
                rc(rc({}, Ua.items[2]), {}, { value: y.m.NEWS }),
                rc(rc({}, Ua.items[3]), {}, { value: y.m.LEADERSHIP }),
              ],
              getNextFormStep: function (e) {
                return e === y.m.GOOGLE
                  ? y.h.ACTIVIST_GOOGLE_TRENDS
                  : e === y.m.WIKIPEDIA
                  ? y.h.ACTIVIST_WIKIPEDIA
                  : e === y.m.NEWS
                  ? y.h.ACTIVIST_NEWS
                  : e === y.m.LEADERSHIP
                  ? y.h.ACTIVIST_LEADERSHIP
                  : void 0
              },
            },
          }),
          b()(ec, y.h.ACTIVIST_GOOGLE_TRENDS, {
            type: 'input',
            props: {
              title: Ma.title,
              description: Ma.description,
              items: [{ dataKey: y.m.GOOGLE, label: Ma.label, required: !0 }],
            },
          }),
          b()(ec, y.h.ACTIVIST_LEADERSHIP, {
            type: 'input',
            props: {
              title: xa.title,
              description: xa.description,
              items: [{ dataKey: y.m.LEADERSHIP, label: xa.label, required: !0 }],
              confirmationText: xa.confirmationText,
            },
          }),
          b()(ec, y.h.ACTIVIST_NEWS, {
            type: 'input',
            props: {
              title: Ga.title,
              description: Ga.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: Ga.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: Ga.addFieldText,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.ACTIVIST_WIKIPEDIA, {
            type: 'input',
            props: {
              title: ga.title,
              description: ga.description,
              items: [{ dataKey: y.m.WIKIPEDIA, label: ga.label, required: !0 }],
            },
          }),
          b()(ec, y.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE, {
            type: 'info',
            props: {
              headline: Ua.notEligibleTitle,
              subtext: Ua.notEligibleDescription,
              actionLabel: Ua.notEligibleButton,
            },
          }),
          b()(ec, y.h.COMPANY_SUBCATEGORY, {
            type: 'radio',
            props: rc(
              rc({}, tn),
              {},
              {
                items: [
                  rc(rc({}, tn.items[0]), {}, { value: y.e.COMPANY }),
                  rc(rc({}, tn.items[1]), {}, { value: y.e.EXECUTIVE }),
                ],
                getNextFormStep: function (e) {
                  return e === y.e.COMPANY
                    ? y.h.COMPANY_NOTABILITY_METHOD
                    : e === y.e.EXECUTIVE
                    ? y.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM
                    : void 0
                },
              },
            ),
          }),
          b()(ec, y.h.COMPANY_NOTABILITY_METHOD, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = [
                rc(rc({}, nn.items[0]), {}, { value: y.m.GOOGLE }),
                rc(rc({}, nn.items[1]), {}, { value: y.m.WIKIPEDIA }),
                rc(rc({}, nn.items[2]), {}, { value: y.m.STOCK }),
                rc(rc({}, nn.items[3]), {}, { value: y.m.NEWS }),
              ]
            return {
              type: 'radio',
              props: rc(
                rc({}, nn),
                {},
                {
                  items: a ? n : n.slice(0, -1),
                  getNextFormStep: function (e) {
                    return e === y.m.GOOGLE
                      ? y.h.COMPANY_GOOGLE_TRENDS
                      : e === y.m.WIKIPEDIA
                      ? y.h.COMPANY_WIKIPEDIA
                      : e === y.m.STOCK
                      ? y.h.COMPANY_STOCK_EXCHANGE
                      : e === y.m.NEWS
                      ? y.h.COMPANY_NEWS_REFERENCE
                      : void 0
                  },
                },
              ),
            }
          }),
          b()(ec, y.h.COMPANY_GOOGLE_TRENDS, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: on.title,
                description: on.description,
                items: [{ dataKey: y.m.GOOGLE, label: on.label, required: !0 }],
                nextFormStep: t ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.COMPANY_WIKIPEDIA, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: cn.title,
                description: cn.description,
                items: [{ dataKey: y.m.WIKIPEDIA, label: cn.label, required: !0 }],
                nextFormStep: t ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.COMPANY_STOCK_EXCHANGE, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: sn.title,
                description: sn.description,
                items: [{ dataKey: y.m.STOCK, label: sn.label, required: !0 }],
                nextFormStep: t ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.COMPANY_NEWS_REFERENCE, {
            type: 'input',
            props: {
              title: Tn.title,
              description: Tn.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: Tn.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: Tn.addFieldText,
            },
          }),
          b()(ec, y.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: rc({}, dn) }),
          b()(ec, y.h.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, {
            type: 'radio',
            props: rc(
              rc({}, pn),
              {},
              {
                items: [
                  rc(rc({}, pn.items[0]), {}, { value: y.m.NEWS }),
                  rc(rc({}, pn.items[1]), {}, { value: y.m.LEADERSHIP }),
                ],
                getNextFormStep: function (e) {
                  return e === y.m.NEWS
                    ? y.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE
                    : e === y.m.LEADERSHIP
                    ? y.h.COMPANY_INDIVIDUAL_LEADERSHIP
                    : void 0
                },
              },
            ),
          }),
          b()(ec, y.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE, {
            type: 'input',
            props: {
              title: bn.title,
              description: bn.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: bn.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: bn.addFieldText,
            },
          }),
          b()(ec, y.h.COMPANY_INDIVIDUAL_LEADERSHIP, {
            type: 'input',
            props: {
              title: An.title,
              description: An.description,
              items: [{ dataKey: y.m.LEADERSHIP, label: An.label, required: !0 }],
              confirmationText: An.confirmationText,
            },
          }),
          b()(ec, y.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Pn.title,
                description: Pn.description,
                items: [{ dataKey: y.m.GOOGLE, label: Pn.label, required: !0 }],
                nextFormStep: a || i ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
            type: 'input',
            props: {
              title: gn.title,
              description: gn.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: gn.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: gn.addFieldText,
            },
          }),
          b()(ec, y.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n,
              r = [
                rc(rc({}, Mn.items[0]), {}, { value: y.m.GOOGLE }),
                rc(rc({}, Mn.items[1]), {}, { value: y.m.WIKIPEDIA }),
                rc(rc({}, Mn.items[2]), {}, { value: y.m.STOCK }),
                rc(rc({}, Mn.items[3]), {}, { value: y.m.NEWS }),
              ]
            return {
              type: 'radio',
              props: rc(
                rc({}, Mn),
                {},
                {
                  items: a || i ? r : r.slice(0, -1),
                  getNextFormStep: function (e) {
                    return e === y.m.GOOGLE
                      ? y.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS
                      : e === y.m.WIKIPEDIA
                      ? y.h.ENTERTAINMENT_COMPANY_WIKIPEDIA
                      : e === y.m.STOCK
                      ? y.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE
                      : e === y.m.NEWS
                      ? y.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE
                      : void 0
                  },
                },
              ),
            }
          }),
          b()(ec, y.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Gn.title,
                description: Gn.description,
                items: [{ dataKey: y.m.STOCK, label: Gn.label, required: !0 }],
                nextFormStep: a || i ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.ENTERTAINMENT_COMPANY_WIKIPEDIA, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Yn.title,
                description: Yn.description,
                items: [{ dataKey: y.m.WIKIPEDIA, label: Yn.label, required: !0 }],
                nextFormStep: a || i ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
            type: 'input',
            props: {
              title: Jn.title,
              description: Jn.description,
              items: [{ dataKey: y.m.IMDB, label: Jn.label, required: !0 }],
            },
          }),
          b()(ec, y.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
            type: 'input',
            props: {
              title: ei.title,
              description: ei.description,
              items: [{ dataKey: y.m.MAIN, label: ei.label, required: !0 }],
            },
          }),
          b()(ec, y.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
            type: 'input',
            props: {
              title: Xn.title,
              description: Xn.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: Tn.articleLabelGenerator, required: !0 })),
              addFieldText: Xn.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: Zn.title,
              description: Zn.description,
              items: [
                { helpText: Zn.items[0].description, label: Zn.items[0].label, value: y.m.IMDB },
                { helpText: Zn.items[1].description, label: Zn.items[1].label, value: y.m.NEWS },
              ],
              getNextFormStep: function (e) {
                return e === y.m.IMDB
                  ? y.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL
                  : e === y.m.NEWS
                  ? y.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS
                  : void 0
              },
            },
          }),
          b()(ec, y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: yn.title,
                description: yn.description,
                items: [{ dataKey: y.m.GOOGLE, label: yn.label, required: !0 }],
                nextFormStep:
                  a || i ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
            type: 'input',
            props: {
              title: hn.title,
              description: hn.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: hn.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: hn.addFieldText,
            },
          }),
          b()(ec, y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n,
              r = [
                rc(rc({}, Dn.items[0]), {}, { value: y.m.GOOGLE }),
                rc(rc({}, Dn.items[1]), {}, { value: y.m.WIKIPEDIA }),
                rc(rc({}, Dn.items[2]), {}, { value: y.m.STOCK }),
                rc(rc({}, Dn.items[3]), {}, { value: y.m.NEWS }),
              ]
            return {
              type: 'radio',
              props: rc(
                rc({}, Dn),
                {},
                {
                  items: a || i ? r : r.slice(0, -1),
                  getNextFormStep: function (e) {
                    return e === y.m.GOOGLE
                      ? y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS
                      : e === y.m.WIKIPEDIA
                      ? y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA
                      : e === y.m.STOCK
                      ? y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE
                      : e === y.m.NEWS
                      ? y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE
                      : void 0
                  },
                },
              ),
            }
          }),
          b()(ec, y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Fn.title,
                description: Fn.description,
                items: [{ dataKey: y.m.STOCK, label: Fn.label, required: !0 }],
                nextFormStep:
                  a || i ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Un.title,
                description: Un.description,
                items: [{ dataKey: y.m.WIKIPEDIA, label: Un.label, required: !0 }],
                nextFormStep:
                  a || i ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.ENTERTAINMENT_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: vn.title,
              description: vn.description,
              items: [
                rc(rc({}, vn.items[0]), {}, { value: y.f.ENTERTAINMENT_COMPANY }),
                rc(rc({}, vn.items[1]), {}, { value: y.f.ENTERTAINMENT_INDIVIDUAL }),
                rc(rc({}, vn.items[2]), {}, { value: y.f.PRODUCTION }),
              ],
              getNextFormStep: function (e) {
                return e === y.f.ENTERTAINMENT_COMPANY
                  ? y.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD
                  : e === y.f.ENTERTAINMENT_INDIVIDUAL
                  ? y.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS
                  : e === y.f.PRODUCTION
                  ? y.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD
                  : void 0
              },
            },
          }),
          b()(ec, y.h.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
            type: 'info',
            props: {
              headline: ci.candidateTitle,
              subtext: ci.candidateDescription,
              actionLabel: ci.confirmButtonLabel,
              tertiaryActionLabel: ci.declineButtonLabel,
            },
          }),
          b()(ec, y.h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: si.title,
              description: si.description,
              items: Je()(Array(5).fill({ dataKey: y.m.NEWS, labelGenerator: si.articleLabelGenerator, required: !0 })),
              addFieldText: si.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
            type: 'info',
            props: {
              headline: Ei.candidateTitle,
              subtext: Ei.candidateDescription,
              actionLabel: Ei.confirmButtonLabel,
              tertiaryActionLabel: Ei.declineButtonLabel,
              tertiaryActionLink: g,
            },
          }),
          b()(ec, y.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
            type: 'input',
            props: {
              title: Ni.title,
              description: Ni.description,
              items: [{ dataKey: y.m.PUBLIC, label: Ni.websiteLabel, required: !0 }],
            },
          }),
          b()(ec, y.h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: Ii.title,
              description: Ii.description,
              items: Je()(Array(5).fill({ dataKey: y.m.NEWS, labelGenerator: Ii.articleLabelGenerator, required: !0 })),
              addFieldText: Ii.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
            type: 'info',
            props: {
              headline: Ei.officeTitle,
              subtext: Ei.officeDescription,
              actionLabel: Ei.confirmButtonLabel,
              tertiaryActionLabel: Ei.declineButtonLabel,
              tertiaryActionLink: g,
            },
          }),
          b()(ec, y.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
            type: 'input',
            props: {
              title: _i.title,
              description: _i.description,
              items: [{ dataKey: y.m.PUBLIC, label: _i.websiteLabel, required: !0 }],
            },
          }),
          b()(ec, y.h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
            type: 'info',
            props: {
              headline: ci.officialTitle,
              subtext: ci.officialDescription,
              actionLabel: ci.confirmButtonLabel,
              tertiaryActionLabel: ci.declineButtonLabel,
            },
          }),
          b()(ec, y.h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: Ti.title,
              description: Ti.description,
              items: Je()(Array(5).fill({ dataKey: y.m.NEWS, labelGenerator: Ti.articleLabelGenerator, required: !0 })),
              addFieldText: Ti.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
            type: 'info',
            props: {
              headline: Ei.officialTitle,
              subtext: Ei.officialDescription,
              actionLabel: Ei.confirmButtonLabel,
              tertiaryActionLabel: Ei.declineButtonLabel,
              tertiaryActionLink: g,
            },
          }),
          b()(ec, y.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
            type: 'input',
            props: {
              title: pi.title,
              description: pi.description,
              items: [{ dataKey: y.m.PUBLIC, label: pi.websiteLabel, required: !0 }],
            },
          }),
          b()(ec, y.h.GOVERNMENT_SUBCATEGORY, {
            type: 'radio',
            props: {
              title: li.title,
              description: li.description,
              items: [
                rc(rc({}, li.items[0]), {}, { value: y.i.OFFICIAL }),
                rc(rc({}, li.items[1]), {}, { value: y.i.CANDIDATE }),
                rc(rc({}, li.items[2]), {}, { value: y.i.OFFICE }),
              ],
              getNextFormStep: function (e) {
                return e === y.i.OFFICIAL
                  ? y.h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM
                  : e === y.i.CANDIDATE
                  ? y.h.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM
                  : e === y.i.OFFICE
                  ? y.h.GOVERNMENT_OFFICE_PROFILE_CONFIRM
                  : void 0
              },
            },
          }),
          b()(ec, y.h.CONTENT_CREATOR_GOOGLE_TRENDS, {
            type: 'input',
            props: {
              title: Hn.title,
              description: Hn.description,
              items: [{ dataKey: y.m.GOOGLE, label: Hn.label, required: !0 }],
            },
          }),
          b()(ec, y.h.CONTENT_CREATOR_NEWS, {
            type: 'input',
            props: {
              title: qn.title,
              description: qn.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: qn.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: qn.addFieldText,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.CONTENT_CREATOR_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: Wn.title,
              description: Wn.description,
              items: [
                rc(rc({}, Wn.items[0]), {}, { value: y.m.GOOGLE }),
                rc(rc({}, Wn.items[1]), {}, { value: y.m.WIKIPEDIA }),
                rc(rc({}, Wn.items[2]), {}, { value: y.m.NEWS }),
              ],
              getNextFormStep: function (e) {
                return e === y.m.GOOGLE
                  ? y.h.CONTENT_CREATOR_GOOGLE_TRENDS
                  : e === y.m.WIKIPEDIA
                  ? y.h.CONTENT_CREATOR_WIKIPEDIA
                  : e === y.m.NEWS
                  ? y.h.CONTENT_CREATOR_NEWS
                  : void 0
              },
            },
          }),
          b()(ec, y.h.CONTENT_CREATOR_WIKIPEDIA, {
            type: 'input',
            props: {
              title: zn.title,
              description: zn.description,
              items: [{ dataKey: y.m.WIKIPEDIA, label: zn.label, required: !0 }],
            },
          }),
          b()(ec, y.h.CREATOR_PROFILE, {
            type: 'input',
            props: {
              title: kn.title,
              description: kn.description,
              items: [{ dataKey: y.m.MAIN, label: kn.items[0].label, required: !0 }],
            },
          }),
          b()(ec, y.h.INFLUENCER_GOOGLE_TRENDS, {
            type: 'input',
            props: {
              title: za.title,
              description: za.description,
              items: [{ dataKey: y.m.GOOGLE, label: za.label, required: !0 }],
            },
          }),
          b()(ec, y.h.INFLUENCER_NEWS, {
            type: 'input',
            props: {
              title: $a.title,
              description: $a.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: $a.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: $a.addFieldText,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.INFLUENCER_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: Ha.title,
              description: Ha.description,
              items: [
                rc(rc({}, Ha.items[0]), {}, { value: y.m.GOOGLE }),
                rc(rc({}, Ha.items[1]), {}, { value: y.m.WIKIPEDIA }),
                rc(rc({}, Ha.items[2]), {}, { value: y.m.NEWS }),
              ],
              getNextFormStep: function (e) {
                return e === y.m.GOOGLE
                  ? y.h.INFLUENCER_GOOGLE_TRENDS
                  : e === y.m.WIKIPEDIA
                  ? y.h.INFLUENCER_WIKIPEDIA
                  : e === y.m.NEWS
                  ? y.h.INFLUENCER_NEWS
                  : void 0
              },
            },
          }),
          b()(ec, y.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE, {
            type: 'info',
            props: {
              headline: Ha.notEligibleTitle,
              subtext: Ha.notEligibleDescription,
              actionLabel: Ha.notEligibleButton,
            },
          }),
          b()(ec, y.h.INFLUENCER_SUBCATEGORY, {
            type: 'radio',
            props: rc(
              rc({}, wa),
              {},
              {
                items: [
                  rc(rc({}, wa.items[0]), {}, { value: y.j.CONTENT_CREATOR }),
                  rc(rc({}, wa.items[1]), {}, { value: y.j.INFLUENTIAL_INDIVIDUAL }),
                ],
                getNextFormStep: function (e) {
                  return e === y.j.CONTENT_CREATOR
                    ? y.h.CONTENT_CREATOR_QUALIFICATIONS
                    : e === y.j.INFLUENTIAL_INDIVIDUAL
                    ? y.h.INFLUENCER_QUALIFICATIONS
                    : void 0
                },
              },
            ),
          }),
          b()(ec, y.h.INFLUENCER_WIKIPEDIA, {
            type: 'input',
            props: {
              title: Qa.title,
              description: Qa.description,
              items: [{ dataKey: y.m.WIKIPEDIA, label: Qa.label, required: !0 }],
            },
          }),
          b()(ec, y.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: Mi.title,
              description: Mi.description,
              items: Je()(
                Array(3).fill({
                  dataKey: y.m.ARTICLES,
                  labelGenerator: Mi.articleNumerationLabelGenerator,
                  required: !0,
                }),
              ),
              addFieldText: Mi.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: Mi.title,
              description: Mi.description,
              items: Je()(
                Array(3).fill({
                  dataKey: y.m.ARTICLES,
                  labelGenerator: Mi.articleNumerationLabelGenerator,
                  required: !0,
                }),
              ),
              addFieldText: Mi.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
            type: 'input',
            props: {
              title: vi.title,
              description: vi.description,
              items: [{ dataKey: y.m.AUTHOR, label: vi.websiteLabel, required: !0 }],
              confirmationText: vi.confirmationText,
            },
          }),
          b()(ec, y.h.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, {
            type: 'info',
            props: {
              headline: Pi.title,
              subtext: Pi.description,
              actionLabel: Pi.actionLabel,
              tertiaryActionLabel: Pi.tertiaryActionLabel,
            },
          }),
          b()(ec, y.h.NEWS_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: Ci.title,
              description: Ci.description,
              items: [
                { helpText: Ci.items[0].description, label: Ci.items[0].label, value: y.k.JOURNALIST },
                { helpText: Ci.items[1].description, label: Ci.items[1].label, value: y.k.FREELANCER },
                { helpText: Ci.items[2].description, label: Ci.items[2].label, value: y.k.ORGANIZATION },
              ],
              getNextFormStep: function (e) {
                return e === y.k.JOURNALIST
                  ? y.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION
                  : e === y.k.FREELANCER
                  ? y.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS
                  : e === y.k.ORGANIZATION
                  ? y.h.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION
                  : void 0
              },
            },
          }),
          b()(ec, y.h.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, {
            type: 'info',
            props: rc(rc({}, Li), {}, { tertiaryActionLink: g }),
          }),
          b()(ec, y.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, { type: 'screenName', props: rc({}, Si) }),
          b()(ec, y.h.NEWS_JOURNALIST_QUALIFICATIONS, {
            type: 'radio',
            props: {
              title: Ui.title,
              description: Ui.description,
              items: [
                { helpText: Ui.items[0].description, label: Ui.items[0].label, value: y.m.AUTHOR },
                { helpText: Ui.items[1].description, label: Ui.items[1].label, value: y.m.ARTICLES },
              ],
              getNextFormStep: function (e) {
                return e === y.m.ARTICLES
                  ? y.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS
                  : e === y.m.AUTHOR
                  ? y.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL
                  : void 0
              },
            },
          }),
          b()(ec, y.h.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION, {
            type: 'info',
            props: {
              headline: mi.title,
              subtext: mi.description,
              actionLabel: mi.confirmButtonLabel,
              tertiaryActionLabel: mi.declineButtonLabel,
              tertiaryActionLink: g,
            },
          }),
          b()(ec, y.h.NEWS_ORGANIZATION_QUALIFICATIONS, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'radio',
              props: {
                title: gi.title,
                description: gi.description,
                items: [
                  { helpText: gi.items[0].description, label: gi.items[0].label, value: y.m.GOOGLE },
                  { helpText: gi.items[1].description, label: gi.items[1].label, value: y.m.WIKIPEDIA },
                  { helpText: gi.items[2].description, label: gi.items[2].label, value: y.m.STOCK },
                ].concat(
                  Je()(
                    a || i
                      ? [{ helpText: gi.items[3].description, label: gi.items[3].label, value: y.m.ARTICLES }]
                      : [],
                  ),
                ),
                getNextFormStep: function (e) {
                  return e === y.m.GOOGLE
                    ? y.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL
                    : e === y.m.WIKIPEDIA
                    ? y.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL
                    : e === y.m.STOCK
                    ? y.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL
                    : e === y.m.ARTICLES
                    ? y.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS
                    : void 0
                },
              },
            }
          }),
          b()(ec, y.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Gi.title,
                description: Gi.description,
                items: [{ dataKey: y.m.GOOGLE, label: Gi.label, required: !0 }],
                nextFormStep:
                  a || i ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
              },
            }
          }),
          b()(ec, y.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: Yi.title,
                description: Yi.description,
                items: [{ dataKey: y.m.WIKIPEDIA, label: Yi.label, required: !0 }],
                nextFormStep:
                  a || i ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
              },
            }
          }),
          b()(ec, y.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = e.mentionsEligible,
              i = void 0 !== n && n
            return {
              type: 'input',
              props: {
                title: xi.title,
                description: xi.description,
                items: [{ dataKey: y.m.STOCK, label: xi.label, required: !0 }],
                nextFormStep:
                  a || i ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
              },
            }
          }),
          b()(ec, y.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: Bi.title,
              description: Bi.description,
              items: Je()(
                Array(3).fill({ dataKey: y.m.ARTICLES, labelGenerator: Bi.articleLabelGenerator, required: !0 }),
              ),
              addFieldText: Bi.addFieldText,
              allowAddFields: !0,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: ur.title,
              description: ur.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: ur.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: ur.addFieldText,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.GAMING_INDIVIDUAL_NOTABILITY_METHOD, {
            type: 'radio',
            props: {
              title: Er.title,
              description: Er.description,
              items: [
                { helpText: Er.items[0].description, label: Er.items[0].label, value: y.m.NEWS },
                { helpText: Er.items[1].description, label: Er.items[1].label, value: y.m.TEAM },
              ],
              getNextFormStep: function (e) {
                return e === y.m.TEAM
                  ? y.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL
                  : e === y.m.NEWS
                  ? y.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS
                  : void 0
              },
            },
          }),
          b()(ec, y.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL, {
            type: 'input',
            props: {
              title: Tr.title,
              description: Tr.description,
              items: [{ dataKey: y.m.TEAM, label: Tr.websiteLabel, required: !0 }],
            },
          }),
          b()(ec, y.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            type: 'input',
            props: {
              title: Ir.title,
              description: Ir.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: Ir.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: Ir.addFieldText,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
            type: 'input',
            props: {
              title: sr.title,
              description: sr.description,
              items: [{ dataKey: y.m.TEAM, label: sr.websiteLabel, required: !0 }],
            },
          }),
          b()(ec, y.h.SPORTS_ENTITY_NOTABILITY_METHOD, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              n = [
                rc(rc({}, er.items[0]), {}, { value: y.m.GOOGLE }),
                rc(rc({}, er.items[1]), {}, { value: y.m.WIKIPEDIA }),
                rc(rc({}, er.items[2]), {}, { value: y.m.STOCK }),
                rc(rc({}, er.items[3]), {}, { value: y.m.TEAM }),
                rc(rc({}, er.items[4]), {}, { value: y.m.NEWS }),
              ]
            return {
              type: 'radio',
              props: rc(
                rc({}, er),
                {},
                {
                  items: a ? n : n.slice(0, -1),
                  getNextFormStep: function (e) {
                    return e === y.m.GOOGLE
                      ? y.h.SPORTS_ENTITY_GOOGLE_TRENDS
                      : e === y.m.WIKIPEDIA
                      ? y.h.SPORTS_ENTITY_WIKIPEDIA
                      : e === y.m.STOCK
                      ? y.h.SPORTS_ENTITY_STOCK_REFERENCE
                      : e === y.m.TEAM
                      ? y.h.SPORTS_ENTITY_WEBSITE
                      : e === y.m.NEWS
                      ? y.h.SPORTS_ENTITY_NEWS_REFERENCE
                      : void 0
                  },
                },
              ),
            }
          }),
          b()(ec, y.h.SPORTS_ENTITY_GOOGLE_TRENDS, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: tr.title,
                description: tr.description,
                items: [{ dataKey: y.m.GOOGLE, label: tr.label, required: !0 }],
                nextFormStep: t ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.SPORTS_ENTITY_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.SPORTS_ENTITY_WIKIPEDIA, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: ar.title,
                description: ar.description,
                items: [{ dataKey: y.m.WIKIPEDIA, label: ar.label, required: !0 }],
                nextFormStep: t ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.SPORTS_ENTITY_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.SPORTS_ENTITY_STOCK_REFERENCE, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: nr.title,
                description: nr.description,
                items: [{ dataKey: y.m.STOCK, label: nr.label, required: !0 }],
                nextFormStep: t ? y.h.AUTHENTICITY_TYPE_SELECT : y.h.SPORTS_ENTITY_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.SPORTS_ENTITY_WEBSITE, function (e) {
            var t = e.followersEligible
            return {
              type: 'input',
              props: {
                title: ir.title,
                description: ir.description,
                items: [{ dataKey: y.m.TEAM, label: ir.label, required: !0 }],
                nextFormStep: t ? y.h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL : y.h.SPORTS_ENTITY_NEWS_REFERENCE,
              },
            }
          }),
          b()(ec, y.h.SPORTS_ENTITY_NEWS_REFERENCE, {
            type: 'input',
            props: {
              title: rr.title,
              description: rr.description,
              items: Je()(Array(3).fill({ dataKey: y.m.NEWS, labelGenerator: rr.articleLabelGenerator, required: !0 })),
              allowAddFields: !0,
              addFieldText: rr.addFieldText,
              maxItems: 10,
            },
          }),
          b()(ec, y.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: rc({}, Qi) }),
          b()(ec, y.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: rc({}, $i) }),
          b()(ec, y.h.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, {
            type: 'radio',
            props: {
              title: cr.title,
              description: cr.description,
              items: [
                { helpText: cr.items[0].description, label: cr.items[0].label, value: y.m.NEWS },
                { helpText: cr.items[1].description, label: cr.items[1].label, value: y.m.TEAM },
              ],
              getNextFormStep: function (e) {
                return e === y.m.TEAM
                  ? y.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL
                  : e === y.m.NEWS
                  ? y.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS
                  : void 0
              },
            },
          }),
          b()(ec, y.h.GAMING_INDIVIDUAL_INELIGIBLE, { type: 'info', props: rc({}, Zi) }),
          b()(ec, y.h.SPORTS_SUBCATEGORY, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t
            return {
              type: 'radio',
              props: rc(
                rc({}, Hi),
                {},
                {
                  items: [
                    rc(rc({}, Hi.items[0]), {}, { value: y.q.SPORTS_INDIVIDUAL }),
                    rc(rc({}, Hi.items[1]), {}, { value: y.q.SPORTS_ENTITY }),
                    rc(rc({}, Hi.items[2]), {}, { value: y.q.GAMING_INDIVIDUAL }),
                  ],
                  getNextFormStep: function (e) {
                    return e === y.q.SPORTS_INDIVIDUAL
                      ? y.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM
                      : e === y.q.SPORTS_ENTITY
                      ? y.h.SPORTS_ENTITY_NOTABILITY_METHOD
                      : e === y.q.GAMING_INDIVIDUAL
                      ? a
                        ? y.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM
                        : y.h.GAMING_INDIVIDUAL_INELIGIBLE
                      : void 0
                  },
                },
              ),
            }
          }),
          ec),
        ),
        cc = Object.freeze(
          ((oc = {}),
          b()(oc, y.h.TEST_INPUT, {
            type: 'input',
            props: {
              title: 'test input form',
              description: 'description here',
              items: [
                { dataKey: y.m.NEWS, label: 'news url', required: !0 },
                { dataKey: y.m.PUBLIC, label: 'public url', required: !1 },
              ],
              allowAddFields: !0,
            },
          }),
          b()(oc, y.h.TEST_PIVOT, {
            type: 'pivot',
            props: {
              title: 'test pivot form',
              description: 'description here',
              items: [
                { description: 'go to test input screen', label: 'input', nextStep: y.h.TEST_INPUT },
                { description: 'go to test radio screen', label: 'radio', nextStep: y.h.TEST_RADIO },
              ],
            },
          }),
          b()(oc, y.h.TEST_RADIO, function (e) {
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
                      ? y.h.TEST_PIVOT
                      : y.h.TEST_INPUT
                    : 'radio 2' === e
                    ? i
                      ? y.h.TEST_PIVOT
                      : y.h.TEST_INPUT
                    : a || i
                    ? y.h.TEST_PIVOT
                    : y.h.TEST_INPUT
                },
              },
            }
          }),
          oc),
        )
      function Ec(e, t) {
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
      function sc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ec(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Ec(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var Ic = Object.freeze(sc(sc(sc({}, nc), lc), cc)),
        Tc = function (e) {
          var t = Object(me.y)(e)
          return null != t && t.radioData ? t.radioData : ''
        },
        uc = Object(Ce.a)()
          .propsFromState(function () {
            return { currentStep: me.z, formHistory: Tc }
          })
          .propsFromActions(function () {
            return { setFormStepData: me.R, setNextFlow: me.V, updateFormHistory: me.Y }
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
      var pc = C.a.c1df579e,
        Oc = V.a.create(function (e) {
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
            d = R.a.useState(l),
            _ = x()(d, 2),
            p = _[0],
            O = _[1]
          R.a.useEffect(
            function () {
              O(l), I(i, l)
            },
            [i, l, I],
          )
          return R.a.createElement(
            W.a,
            { style: [w.container, E && w.narrowContainer] },
            R.a.createElement(
              k.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: B.b,
                size: 'title4',
                style: w.header,
                weight: 'heavy',
              },
              u,
            ),
            R.a.createElement(
              W.a,
              { style: w.scrollableContainer },
              r && R.a.createElement(k.b, { color: 'gray700' }, r),
              R.a.createElement(
                W.a,
                { style: [w.contentContainer, Oc.radioContainer] },
                R.a.createElement(Nc.a, {
                  accessibilityLabel: u,
                  name: ''.concat(u, '-radiogroup'),
                  onChange: function (e, t) {
                    O(t), I(i, t)
                  },
                  options: s,
                  value: p,
                }),
              ),
              o && R.a.createElement(k.b, { color: 'gray700' }, o),
            ),
            R.a.createElement(
              j.a,
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
                              { notability_method: [nt(p)] },
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
                style: w.buttonFixed,
                type: 'brandFilled',
              },
              n,
            ),
          )
        }),
        Ac = a('5FtR'),
        Rc = Object(Ce.a)().propsFromActions(function () {
          return { setNextFlow: me.V }
        }),
        fc = a('EweD'),
        Cc = 'verification-checkbox-label',
        mc = C.a.c1df579e,
        Sc = C.a.a6278dcb,
        Lc = function (e) {
          return !e.match(/\W/g)
        },
        yc = V.a.create(function (e) {
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
            c = R.a.useState(''),
            E = x()(c, 2),
            s = E[0],
            I = E[1],
            T = R.a.useState(!1),
            u = x()(T, 2),
            N = u[0],
            d = u[1],
            _ = R.a.useState(!0),
            p = x()(_, 2),
            O = p[0],
            b = p[1]
          return (
            R.a.useEffect(
              function () {
                var e = !!s && Lc(s)
                b(!e || !(!n || N))
              },
              [n, N, s, b],
            ),
            R.a.createElement(
              W.a,
              { style: [w.container, r && w.narrowContainer] },
              R.a.createElement(
                k.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: B.b,
                  size: 'title4',
                  style: w.header,
                  weight: 'heavy',
                },
                l,
              ),
              R.a.createElement(
                W.a,
                { style: w.scrollableContainer },
                i && R.a.createElement(k.b, { color: 'gray700' }, i),
                R.a.createElement(
                  W.a,
                  { accessibilityLabelledBy: B.b, accessibilityRole: 'group', style: w.contentContainer },
                  R.a.createElement(lt.a, {
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
                  R.a.createElement(
                    W.a,
                    { style: [w.contentContainer, w.checkboxContainer, yc.checkboxContainer] },
                    R.a.createElement(
                      W.a,
                      { style: w.checkbox },
                      R.a.createElement(ct.a, {
                        accessibilityLabelledBy: Cc,
                        checked: N,
                        onChange: function () {
                          return d(!N)
                        },
                      }),
                    ),
                    R.a.createElement(
                      W.a,
                      { nativeID: Cc, style: w.checkboxText },
                      R.a.createElement(k.b, { color: 'gray700' }, n),
                    ),
                  ),
              ),
              R.a.createElement(
                j.a,
                {
                  disabled: O,
                  onClick: function () {
                    return o()
                  },
                  style: w.buttonFixed,
                  type: 'brandFilled',
                },
                a,
              ),
            )
          )
        }),
        Dc = a('7JQg'),
        Fc = (a('hBvt'), a('v6aA')),
        Uc = C.a.ec6801cb,
        vc = C.a.j24c37b2,
        Mc = function (e) {
          var t,
            a = e.daysForDecision,
            n = void 0 === a ? 14 : a,
            i = e.isNarrow,
            r = e.link,
            o = e.onSurveyClick,
            l = e.surveyUrl,
            c = R.a.useContext(Fc.a).featureSwitches.isTrue('identity_verification_notable_demo_survey')
          return R.a.createElement(
            W.a,
            { style: w.largeBannerContainer },
            R.a.createElement(Oe, { isNarrow: i, type: de.SENT }),
            R.a.createElement(
              W.a,
              { style: [w.container, w.verticalCenter, i && w.narrowContainer] },
              R.a.createElement(
                k.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: B.b,
                  size: 'title4',
                  style: w.header,
                  weight: 'heavy',
                },
                Uc,
              ),
              R.a.createElement(
                k.b,
                { color: 'gray700' },
                ((t = n),
                R.a.createElement(C.a.I18NFormatMessage, { $i18n: 'a1c39f5b', days: ot.a.getFormattedCount(t) })),
              ),
              c &&
                l &&
                R.a.createElement(
                  k.b,
                  { color: 'gray700', style: w.text },
                  R.a.createElement(
                    C.a.I18NFormatMessage,
                    { $i18n: 'ja826537' },
                    R.a.createElement(
                      k.b,
                      { link: { pathname: l, openInSameFrame: L.b.isAndroid() && L.b.isTwitterApp() }, onClick: o },
                      C.a.i6ef95ec,
                    ),
                  ),
                ),
              R.a.createElement(
                j.a,
                { link: { pathname: r, openInSameFrame: !0 }, style: w.buttonPadded, type: 'brandFilled' },
                vc,
              ),
            ),
          )
        },
        Pc = C.a.b772cd65,
        gc = C.a.j3da4de9,
        Gc = function (e) {
          var t = C.a.da44942d,
            a = new Date(e)
          return R.a.createElement(C.a.I18NFormatMessage, { $i18n: 'b7be91be', date: t(a) })
        },
        Yc = C.a.j94e995e,
        xc = C.a.da458d6c,
        Bc = C.a.j4ed9f0e,
        Vc = C.a.b1ade78f,
        wc = C.a.b1ade78f,
        Wc = C.a.j3da4de9,
        kc = function (e) {
          var t = C.a.da44942d,
            a = new Date(e)
          return R.a.createElement(C.a.I18NFormatMessage, { $i18n: 'jcb00a94', date: t(a) })
        },
        jc = C.a.aab67626,
        Hc = function (e) {
          var t = C.a.da44942d,
            a = new Date(e)
          return R.a.createElement(C.a.I18NFormatMessage, { $i18n: 'j92ea4b8', date: t(a) })
        },
        Kc = C.a.d3c1e25e,
        zc = R.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'jcd067dd' },
          R.a.createElement(k.b, { link: 'https://help.twitter.com/rules-and-policies/twitter-rules' }, C.a.g0bfb17a),
        ),
        qc = function (e) {
          var t,
            a = e.applicationSubmissionTimeInMs,
            n = e.decisionMadeTimeInMs,
            i = e.isNarrow,
            r = e.link,
            o = e.status,
            l = ((t = {}),
            b()(t, y.a.DISABLED, { title: dr, content: _r, button: Nr }),
            b()(t, y.a.INTAKE_PROGRESS, { title: null, content: null, button: null }),
            b()(t, y.a.LOCKED, { title: gc, content: n ? Gc(n) : xc, button: Nr }),
            b()(t, y.a.NEW_ACCOUNT, { title: gc, content: wc, button: Nr }),
            b()(t, y.a.NOT_ELIGIBLE, { title: gc, content: Vc, button: Nr }),
            b()(t, y.a.NOT_STARTED, { title: null, content: null, button: null }),
            b()(t, y.a.VERIFICATION_DENIED, { title: Wc, content: n ? kc(n) : Yc, button: Pc }),
            b()(t, y.a.VERIFICATION_PENDING, { title: jc, content: a ? Hc(a) : Bc, button: Pc }),
            b()(t, y.a.VERIFIED, { title: Kc, content: zc, button: Pc }),
            t)[o],
            c = l.button,
            E = l.content,
            s = l.title
          return s && E
            ? R.a.createElement(
                W.a,
                { style: [w.container, w.verticalCenter, w.appBarOffset, i && w.narrowContainer] },
                R.a.createElement(
                  k.b,
                  {
                    accessibilityLevel: 1,
                    accessibilityRole: 'heading',
                    nativeID: B.b,
                    size: 'title4',
                    style: w.header,
                    weight: 'heavy',
                  },
                  s,
                ),
                R.a.createElement(k.b, { color: 'gray700' }, E),
                R.a.createElement(
                  j.a,
                  { link: { pathname: r, openInSameFrame: !0 }, style: w.buttonPadded, type: 'brandFilled' },
                  c,
                ),
              )
            : null
        },
        Qc = a('zh9S'),
        $c = a('vEo5'),
        Zc = { page: 'settings', section: 'account_verification' },
        Jc = Object(Ce.a)()
          .propsFromState(function () {
            return {
              access: me.m,
              accessFetchStatus: me.n,
              accountEligibility: me.o,
              accountViolations: me.p,
              authenticityType: me.t,
              currentStep: me.z,
              documentFormats: me.A,
              idCountry: me.G,
              idType: me.I,
              initialIntakeFetchStatus: me.K,
              surveyUrl: me.O,
              userEmail: $c.selectFirstEmail,
              verifyAccountFetchStatus: me.P,
              notabilityCategory: me.L,
              notabilityData: me.M,
              notabilitySubcategory: me.N,
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
              createLocalApiErrorHandler: Object(ft.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION',
              ),
              fetchAccessIfNeeded: me.b,
              fetchAccountEligibility: me.c,
              fetchAccountViolations: me.d,
              fetchDevices: $c.fetchDevicesIfNeeded,
              fetchDocumentFormats: me.g,
              googleAnalyticsPageView: Qc.a,
              resetFlow: me.j,
              resetSubmitVerification: me.l,
              setFormStepData: me.R,
              setIdCountry: me.T,
              setIdType: me.U,
              setNextFlow: me.V,
              setPreviousFlow: me.W,
              verifyAccount: me.Z,
            }
          })
          .withAnalytics(Zc),
        Xc = 'info',
        eE = 'input',
        tE = 'pivot',
        aE = 'radio',
        nE = 'screenName',
        iE = a('oQhu'),
        rE = a('0zXz'),
        oE = a('cHvH'),
        lE =
          (a('ulNE'),
          a('1IsZ'),
          Object(Ce.a)()
            .propsFromState(function () {
              return {
                authenticityType: me.t,
                authenticityData: me.s,
                idCountryName: me.H,
                idTypeName: me.J,
                notabilityCategory: me.L,
                notabilitySubcategory: me.N,
                notabilityData: me.M,
              }
            })
            .propsFromActions(function () {
              return { verifyAccount: me.Z }
            })),
        cE = a('3A2y'),
        EE = C.a.a91bb144,
        sE = C.a.affce770,
        IE = C.a.i0864917,
        TE = C.a.c7942073,
        uE = C.a.b8121da9,
        NE = C.a.d247ca7f,
        dE = C.a.b51afbb2,
        _E = C.a.cc87b01c,
        pE = function (e) {
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
              return R.a.createElement(k.b, { size: 'subtext2', style: w.subheading, weight: 'heavy' }, e)
            }
          return R.a.createElement(
            W.a,
            { style: [w.container, c && w.narrowContainer] },
            R.a.createElement(
              k.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: B.b,
                size: 'title4',
                style: w.header,
                weight: 'heavy',
              },
              _E,
            ),
            R.a.createElement(
              W.a,
              { style: w.scrollableContainer },
              R.a.createElement(k.b, { color: 'gray700' }, NE),
              u(IE),
              E && R.a.createElement(k.b, { style: w.subtext }, mr[E]),
              I && ((i = Lr[I]), R.a.createElement(W.a, null, u(TE), R.a.createElement(k.b, { style: w.subtext }, i))),
              s &&
                (function (e) {
                  var t = Object(cE.a)(e, 'newsType'),
                    a = Object.values(t).flat()
                  return R.a.createElement(
                    W.a,
                    null,
                    u(uE),
                    a.map(function (e, t) {
                      return R.a.createElement(k.b, { key: t, style: w.subtext }, e)
                    }),
                  )
                })(s),
              u(dE),
              r &&
                ((t = r),
                (a = {}),
                b()(a, y.d.IDENTITY_DOCUMENT, C.a.e43425fa),
                b()(a, y.d.EMAIL, C.a.a411926a),
                b()(a, y.d.WEBSITE, C.a.e1c78795),
                (n = a[t]),
                R.a.createElement(k.b, { style: w.subtext }, n)),
              R.a.createElement(k.b, { color: 'gray700', style: w.contentContainer }, sE),
            ),
            R.a.createElement(
              j.a,
              {
                onClick: function () {
                  T().catch(o()), l()
                },
                style: w.buttonFixed,
                type: 'brandFilled',
              },
              EE,
            ),
          )
        },
        OE = lE(pE)
      function bE(e, t) {
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
      function AE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? bE(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : bE(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      function RE(e) {
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
      var fE = 'INITIAL_FETCH_STATUS_RENDERER',
        CE = 'SUBMIT_FETCH_STATUS_RENDERER',
        mE = C.a.g61ed8a4,
        SE = function (e) {
          return null
        },
        LE = (function (e) {
          u()(a, e)
          var t = RE(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(
                I()(e),
                '_accountSettingsLink',
                L.b.isTwitterApp() ? 'twitter://settings/account' : '/settings/account',
              ),
              b()(I()(e), '_hasBadgeViolations', function (e) {
                var t
                return null === (t = e.violations) || void 0 === t
                  ? void 0
                  : t.some(function (e) {
                      return e.violation_status === y.s.OUT_OF_COMPLIANCE
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
                e.props.accessStatus === y.a.NOT_STARTED || e.props.accessStatus === y.a.INTAKE_PROGRESS,
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
                Object(iE.a)(function (e) {
                  return it(e)
                }),
              ),
              b()(
                I()(e),
                '_getMemoizedVerificationScribeData',
                Object(iE.a)(function (e) {
                  var t = e.accessStatus,
                    a = e.authenticityType,
                    n = e.currentStep,
                    i = e.followersEligible,
                    r = e.idType,
                    o = e.mentionsEligible,
                    l = e.notabilityCategory,
                    c = e.notabilityData,
                    E = e.notabilitySubcategory
                  return rt(t, a, n, i, r, o, l, c, E)
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
                  AE(
                    AE({}, e._getMemoizedVerificationScribeNamespace(l)),
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
                  b()(t, fe.name, {
                    ComponentToRender: fe,
                    componentProps: {
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), u()
                      },
                    },
                    genericModalProps: { renderHeader: SE },
                  }),
                  b()(t, pE.name, {
                    ComponentToRender: OE,
                    componentProps: {
                      createLocalApiErrorHandler: i,
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), u()
                      },
                    },
                    genericModalProps: { onBackClick: N },
                  }),
                  b()(t, qc.name, {
                    ComponentToRender: qc,
                    componentProps: { decisionMadeTimeInMs: o, link: e._accountSettingsLink, status: n },
                    genericModalProps: { backButtonType: 'close', hideBackButton: L.b.isTwitterApp() },
                  }),
                  b()(t, je.name, {
                    ComponentToRender: je,
                    componentProps: {
                      documentFormats: l,
                      onCountryClick: function (e, t) {
                        I(e, t), N()
                      },
                    },
                    genericModalProps: { onBackClick: N },
                  }),
                  b()(t, He.name, {
                    ComponentToRender: He,
                    componentProps: {
                      documentFormats: l,
                      idCountry: c,
                      onTypeClick: function (e, t) {
                        T(e, t), N()
                      },
                    },
                    genericModalProps: { onBackClick: N },
                  }),
                  b()(t, y.h.INTAKE_LOADING, {
                    ComponentToRender: xr,
                    componentProps: {},
                    genericModalProps: { hideBackButton: !0, renderHeader: SE },
                  }),
                  b()(t, y.h.INTAKE_TYPE_SELECT, {
                    ComponentToRender: Ve,
                    componentProps: {},
                    genericModalProps: { onBackClick: N },
                  }),
                  b()(t, y.h.INTAKE_UPLOAD, {
                    ComponentToRender: Vo,
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
                    genericModalProps: { renderHeader: SE },
                  }),
                  b()(t, G.name, {
                    ComponentToRender: G,
                    componentProps: { accountViolations: e.props.accountViolations },
                    genericModalProps: { backButtonType: 'close', hideBackButton: L.b.isTwitterApp() },
                  }),
                  b()(t, te.name, {
                    ComponentToRender: te,
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
                  b()(t, CE, {
                    ComponentToRender: ne.a,
                    componentProps: {
                      fetchStatus: O,
                      onRequestRetry: function () {
                        p().catch(i())
                      },
                      render: rE.a,
                      retryMessage: mE,
                    },
                    genericModalProps: { hideBackButton: O === ae.a.LOADING, onBackClick: s },
                  }),
                  b()(t, fE, {
                    ComponentToRender: ne.a,
                    componentProps: {
                      fetchStatus: E,
                      onRequestRetry: e._initialFetchRetry,
                      render: rE.a,
                      retryMessage: mE,
                    },
                    genericModalProps: { backButtonType: 'close', hideBackButton: L.b.isTwitterApp() },
                  }),
                  t
                )
              }),
              b()(I()(e), '_wrapInGenericModalScreen', function (t) {
                var a = e._formComponentOptions()[t],
                  n = a.ComponentToRender,
                  i = a.componentProps,
                  o = a.genericModalProps
                return R.a.createElement(
                  ie.b,
                  r()(
                    {
                      backButtonType: 'back',
                      backLocation: e._accountSettingsLink,
                      containerStyle: o.renderHeader ? w.rootNoAppBar : w.root,
                      hideBackButton: !1,
                      history: e.props.history,
                      withBottomBorder: !1,
                    },
                    o,
                  ),
                  R.a.createElement(
                    n,
                    r()({}, i, { isNarrow: e._isNarrow, key: ''.concat(e.props.currentStep, '-screen') }),
                  ),
                )
              }),
              b()(I()(e), '_createFormFromLayout', function (t) {
                var a = e.props,
                  n = a.history,
                  i = a.setPreviousFlow
                if (t && Ic[t]) {
                  var r = Ic[t],
                    o = 'function' == typeof r ? r(AE({}, e.props)) : r
                  return R.a.createElement(
                    ie.b,
                    {
                      backButtonType: 'back',
                      containerStyle: w.root,
                      hideBackButton: !1,
                      history: n,
                      onBackClick: i,
                      withBottomBorder: !1,
                    },
                    e._renderLayoutComponent(o, t),
                  )
                }
                return R.a.createElement(Ac.a, { to: '/settings/account' })
              }),
              b()(I()(e), '_renderLayoutComponent', function (t, a) {
                var n = { isNarrow: e._isNarrow, key: ''.concat(a, '-screen') }
                switch (t.type) {
                  case Xc:
                    return R.a.createElement($e, r()({}, t.props, { key: ''.concat(a, '-screen') }))
                  case eE:
                    return R.a.createElement(Rt, r()({}, t.props, n))
                  case tE:
                    return R.a.createElement(Fe, r()({}, t.props, n))
                  case aE:
                    return R.a.createElement(bc, r()({}, t.props, n))
                  case nE:
                    return R.a.createElement(hc, r()({}, t.props, n))
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
                if (i !== ae.a.LOADED) return e._wrapInGenericModalScreen(fE)
                if (r === ae.a.LOADING || r === ae.a.FAILED) return e._wrapInGenericModalScreen(CE)
                if (e._hasBadgeViolations(a)) return e._wrapInGenericModalScreen(G.name)
                switch (n) {
                  case y.h.LANDING_PAGE:
                    return e._wrapInGenericModalScreen(e._shouldStartFlow ? fe.name : qc.name)
                  case y.h.INTAKE_TYPE_SELECT:
                    return e._wrapInGenericModalScreen(y.h.INTAKE_TYPE_SELECT)
                  case y.h.ID_COUNTRY_SELECT:
                    return e._wrapInGenericModalScreen(je.name)
                  case y.h.ID_TYPE_SELECT:
                    return e._wrapInGenericModalScreen(He.name)
                  case y.h.INTAKE_UPLOAD:
                    return e._wrapInGenericModalScreen(y.h.INTAKE_UPLOAD)
                  case y.h.INTAKE_LOADING:
                    return e._wrapInGenericModalScreen(y.h.INTAKE_LOADING)
                  case y.h.EMAIL_VERIFICATION:
                    return e._wrapInGenericModalScreen(te.name)
                  case y.h.REVIEW_SUBMIT:
                    return e._wrapInGenericModalScreen(pE.name)
                  case y.h.THANK_YOU:
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
                    ((this._shouldStartFlow = a === y.a.NOT_STARTED || a === y.a.INTAKE_PROGRESS),
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
                    ? R.a.createElement(oE.a, null, function (t) {
                        var I = t.windowWidth < V.a.theme.breakpoints.small
                        return (
                          I !== e._isNarrow && (e._isNarrow = I),
                          R.a.createElement(
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
        })(R.a.Component)
      b()(LE, 'contextType', Fc.a)
      var yE = Jc(LE)
      t.default = yE
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
