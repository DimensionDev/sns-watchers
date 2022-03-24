;(window.webpackJsonp = window.webpackJsonp || []).push([
  [30, 21],
  {
    '5emT': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        l = a('Lsrn'),
        E = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              o.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
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
        E = (0, i.default)(
          '(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])',
          { validateUrlUnreserved: r.default, validateUrlPctEncoded: o.default, validateUrlSubDelims: l.default },
          'i',
        )
      ;(t.default = E), (e.exports = t.default)
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
        E = (0, i.default)(
          /(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i,
          {
            validateUrlSubDomainSegment: l.default,
            validateUrlDomainSegment: r.default,
            validateUrlDomainTld: o.default,
          },
        )
      ;(t.default = E), (e.exports = t.default)
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
      a.d(t, 't', function () {
        return c
      }),
        a.d(t, 's', function () {
          return s
        }),
        a.d(t, 'a', function () {
          return I
        }),
        a.d(t, 'd', function () {
          return T
        }),
        a.d(t, 'c', function () {
          return N
        }),
        a.d(t, 'p', function () {
          return u
        }),
        a.d(t, 'l', function () {
          return d
        }),
        a.d(t, 'm', function () {
          return _
        }),
        a.d(t, 'b', function () {
          return p
        }),
        a.d(t, 'e', function () {
          return A
        }),
        a.d(t, 'f', function () {
          return R
        }),
        a.d(t, 'i', function () {
          return C
        }),
        a.d(t, 'j', function () {
          return b
        }),
        a.d(t, 'k', function () {
          return O
        }),
        a.d(t, 'r', function () {
          return m
        }),
        a.d(t, 'n', function () {
          return f
        }),
        a.d(t, 'o', function () {
          return S
        }),
        a.d(t, 'q', function () {
          return L
        }),
        a.d(t, 'h', function () {
          return h
        }),
        a.d(t, 'g', function () {
          return y
        })
      var n,
        i,
        r = a('KEM+'),
        o = a.n(r),
        l = a('yiKp'),
        E = a.n(l),
        c = (a('yH/f'), Object.freeze({ IN_COMPLIANCE: 'in_compliance', OUT_OF_COMPLIANCE: 'out_of_compliance' })),
        s = Object.freeze({ PROFILE_COMPLETION: 'profile_completion', ACCOUNT_SECURITY: 'account_security' }),
        I = Object.freeze({
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
        T = Object.freeze({ IDENTITY_DOCUMENT: 'identity_document', EMAIL: 'email', WEBSITE: 'website' }),
        N = { WEBSITE: 'siteUrl' },
        u = Object.freeze({
          CONCLUSIVE: 'conclusive',
          INCONCLUSIVE: 'inconclusive',
          NOT_STARTED: 'not_started',
          PENDING: 'pending',
        }),
        d = Object.freeze({
          ACTIVISM: 'activism',
          COMPANY: 'brand_company_organization',
          ENTERTAINMENT: 'entertainment',
          GAMING: 'gaming',
          GOVERNMENT: 'government',
          INFLUENCER_OTHER: 'influencer_other',
          NEWS: 'news',
          SPORTS: 'sports',
        }),
        _ = {
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
        p = Object.freeze({ ACTIVIST: 'activist' }),
        A = Object.freeze({ COMPANY: 'company', EXECUTIVE: 'executive' }),
        R = Object.freeze({
          ENTERTAINMENT_COMPANY: 'entertainment_company',
          ENTERTAINMENT_INDIVIDUAL: 'entertainment_individual',
          PRODUCTION: 'production',
        }),
        C = Object.freeze({ CANDIDATE: 'candidate', OFFICE: 'office', OFFICIAL: 'official' }),
        b = Object.freeze({ CONTENT_CREATOR: 'content_creator', INFLUENTIAL_INDIVIDUAL: 'influential_individual' }),
        O = Object.freeze({ FREELANCER: 'freelancer', JOURNALIST: 'journalist', ORGANIZATION: 'organization' }),
        m = Object.freeze({
          SPORTS_INDIVIDUAL: 'sports_individual',
          SPORTS_ENTITY: 'sports_entity',
          GAMING_INDIVIDUAL: 'gaming_individual',
        }),
        f = Object.freeze(E()(E()(E()(E()(E()(E()(E()({}, p), A), R), C), b), O), m)),
        S = Object.freeze(
          ((n = {}),
          o()(n, p.ACTIVIST, d.ACTIVISM),
          o()(n, A.COMPANY, d.COMPANY),
          o()(n, A.EXECUTIVE, d.COMPANY),
          o()(n, R.ENTERTAINMENT_COMPANY, d.ENTERTAINMENT),
          o()(n, R.ENTERTAINMENT_INDIVIDUAL, d.ENTERTAINMENT),
          o()(n, R.PRODUCTION, d.ENTERTAINMENT),
          o()(n, C.CANDIDATE, d.GOVERNMENT),
          o()(n, C.OFFICE, d.GOVERNMENT),
          o()(n, C.OFFICIAL, d.GOVERNMENT),
          o()(n, b.CONTENT_CREATOR, d.INFLUENCER_OTHER),
          o()(n, b.INFLUENTIAL_INDIVIDUAL, d.INFLUENCER_OTHER),
          o()(n, O.FREELANCER, d.NEWS),
          o()(n, O.JOURNALIST, d.NEWS),
          o()(n, O.ORGANIZATION, d.NEWS),
          o()(n, m.SPORTS_INDIVIDUAL, d.SPORTS),
          o()(n, m.SPORTS_ENTITY, d.SPORTS),
          o()(n, m.GAMING_INDIVIDUAL, d.SPORTS),
          n),
        ),
        L = Object.freeze({
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
        h = Object.freeze({
          ACTIVIST_GOOGLE_TRENDS: 'ACTIVIST_GOOGLE_TRENDS',
          ACTIVIST_LEADERSHIP: 'ACTIVIST_LEADERSHIP',
          ACTIVIST_NEWS: 'ACTIVIST_NEWS',
          ACTIVIST_QUALIFICATIONS: 'ACTIVIST_QUALIFICATIONS',
          ACTIVIST_QUALIFICATIONS_INELIGIBLE: 'ACTIVIST_QUALIFICATIONS_INELIGIBLE',
          ACTIVIST_SUBCATEGORY: 'ACTIVIST_SUBCATEGORY',
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
          GAMING_SUBCATEGORY: 'GAMING_SUBCATEGORY',
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
        y = Object.freeze(
          ((i = {}),
          o()(i, h.LANDING_PAGE, { next: h.NOTABILITY_CATEGORY_SELECT, scribeComponent: L.LANDING_PAGE }),
          o()(i, h.NOTABILITY_CATEGORY_SELECT, { next: null, scribeComponent: L.NOTABILITY_CATEGORY }),
          o()(i, h.ACTIVIST_QUALIFICATIONS, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.ACTIVIST_GOOGLE_TRENDS, { next: h.AUTHENTICITY_TYPE_SELECT, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.ACTIVIST_LEADERSHIP, {
            next: h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.ACTIVIST_NEWS, { next: h.AUTHENTICITY_TYPE_SELECT, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.ACTIVIST_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          o()(i, h.ACTIVIST_SUBCATEGORY, { next: null, scribeComponent: L.NOTABILITY_SUBCATEGORY }),
          o()(i, h.ACTIVIST_WIKIPEDIA, { next: h.AUTHENTICITY_TYPE_SELECT, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.COMPANY_SUBCATEGORY, {
            next: h.COMPANY_NOTABILITY_METHOD,
            scribeComponent: L.NOTABILITY_SUBCATEGORY,
          }),
          o()(i, h.COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.COMPANY_WIKIPEDIA, { next: null, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.COMPANY_STOCK_EXCHANGE, { next: null, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.COMPANY_NEWS_REFERENCE, { next: h.AUTHENTICITY_TYPE_SELECT, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: h.COMPANY_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          o()(i, h.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.COMPANY_INDIVIDUAL_LEADERSHIP, {
            next: h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.COMPANY_INDIVIDUAL_NEWS_REFERENCE, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.CREATOR_PROFILE, { next: h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: null }),
          o()(i, h.CONTENT_CREATOR_GOOGLE_TRENDS, { next: h.CREATOR_PROFILE, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.CONTENT_CREATOR_NEWS, { next: h.CREATOR_PROFILE, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.CONTENT_CREATOR_QUALIFICATIONS, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.CONTENT_CREATOR_WIKIPEDIA, { next: h.CREATOR_PROFILE, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE, { next: null, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.ENTERTAINMENT_COMPANY_WIKIPEDIA, { next: null, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
            next: h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
            next: h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
            next: h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS, {
            next: null,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, {
            next: null,
            scribeComponent: L.NOTABILITY_METHOD,
          }),
          o()(i, h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE, {
            next: null,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA, {
            next: null,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.ENTERTAINMENT_QUALIFICATIONS, { next: null, scribeComponent: L.NOTABILITY_SUBCATEGORY }),
          o()(i, h.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
            next: h.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          o()(i, h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
            next: h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
            next: h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          o()(i, h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
            next: h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
            next: h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          o()(i, h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
            next: h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
            next: h.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          o()(i, h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
            next: h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
            next: h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          o()(i, h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
            next: h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.GOVERNMENT_SUBCATEGORY, { next: null, scribeComponent: L.NOTABILITY_SUBCATEGORY }),
          o()(i, h.INFLUENCER_GOOGLE_TRENDS, { next: h.AUTHENTICITY_TYPE_SELECT, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.INFLUENCER_NEWS, { next: h.AUTHENTICITY_TYPE_SELECT, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.INFLUENCER_QUALIFICATIONS, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.INFLUENCER_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          o()(i, h.INFLUENCER_SUBCATEGORY, { next: null, scribeComponent: L.NOTABILITY_SUBCATEGORY }),
          o()(i, h.INFLUENCER_WIKIPEDIA, { next: h.AUTHENTICITY_TYPE_SELECT, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
            next: h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: h.NEWS_NOTABILITY_CRITERIA_CONFIRMATION,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, {
            next: h.NEWS_JOURNALIST_QUALIFICATIONS,
            scribeComponent: null,
          }),
          o()(i, h.NEWS_JOURNALIST_QUALIFICATIONS, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, { next: h.AUTHENTICITY_TYPE_SELECT, scribeComponent: null }),
          o()(i, h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION, {
            next: h.NEWS_ORGANIZATION_QUALIFICATIONS,
            scribeComponent: null,
          }),
          o()(i, h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, {
            next: h.NEWS_JOURNALIST_CRITERIA_CONFIRMATION,
            scribeComponent: null,
          }),
          o()(i, h.NEWS_ORGANIZATION_QUALIFICATIONS, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.NEWS_QUALIFICATIONS, { next: null, scribeComponent: L.NOTABILITY_SUBCATEGORY }),
          o()(i, h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.GAMING_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: h.GAMING_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          o()(i, h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.GAMING_INDIVIDUAL_INELIGIBLE, { next: null, scribeComponent: null }),
          o()(i, h.GAMING_SUBCATEGORY, { next: null, scribeComponent: L.NOTABILITY_SUBCATEGORY }),
          o()(i, h.SPORTS_ENTITY_GOOGLE_TRENDS, { next: null, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.SPORTS_ENTITY_NEWS_REFERENCE, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.SPORTS_ENTITY_NOTABILITY_METHOD, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.SPORTS_ENTITY_STOCK_REFERENCE, { next: null, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.SPORTS_ENTITY_WEBSITE, { next: null, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.SPORTS_ENTITY_WIKIPEDIA, { next: null, scribeComponent: L.NOTABILITY_INPUT }),
          o()(i, h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: h.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: L.NOTABILITY_METHOD }),
          o()(i, h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: h.SPORTS_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          o()(i, h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: L.NOTABILITY_INPUT,
          }),
          o()(i, h.SPORTS_SUBCATEGORY, { next: null, scribeComponent: L.NOTABILITY_SUBCATEGORY }),
          o()(i, h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, { next: null, scribeComponent: L.ADD_WEBSITE }),
          o()(i, h.WEBSITE_REFERENCE_CONFIRM_PROCEED, { next: h.REVIEW_SUBMIT, scribeComponent: L.ADD_WEBSITE }),
          o()(i, h.AUTHENTICITY_TYPE_SELECT, { next: null, scribeComponent: L.AUTHENTICITY_TYPE }),
          o()(i, h.INTAKE_TYPE_SELECT, { next: h.INTAKE_UPLOAD, scribeComponent: null }),
          o()(i, h.ID_COUNTRY_SELECT, { next: h.INTAKE_TYPE_SELECT, scribeComponent: null }),
          o()(i, h.ID_TYPE_SELECT, { next: h.INTAKE_TYPE_SELECT, scribeComponent: null }),
          o()(i, h.INTAKE_UPLOAD, { next: h.INTAKE_LOADING, scribeComponent: L.ID_UPLOAD }),
          o()(i, h.INTAKE_LOADING, { next: h.REVIEW_SUBMIT, scribeComponent: L.ID_UPLOAD }),
          o()(i, h.EMAIL_VERIFICATION, { next: h.REVIEW_SUBMIT, scribeComponent: L.ADD_EMAIL }),
          o()(i, h.SITE_VERIFICATION, { next: h.WEBSITE_REFERENCE_CONFIRM_PROCEED, scribeComponent: null }),
          o()(i, h.REVIEW_SUBMIT, { next: h.THANK_YOU, scribeComponent: L.REVIEW_SUBMIT }),
          o()(i, h.THANK_YOU, { next: null, scribeComponent: L.THANK_YOU }),
          o()(i, h.TEST_INPUT, { next: h.TEST_RADIO, scribeComponent: null }),
          o()(i, h.TEST_PIVOT, { next: h.THANK_YOU, scribeComponent: null }),
          o()(i, h.TEST_RADIO, { next: h.THANK_YOU, scribeComponent: null }),
          i),
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
          var n = e.match(c.default)
          if (!n || n[0] !== e) return !1
          var T = n[1],
            N = n[2],
            u = n[3],
            d = n[4],
            _ = n[5]
          if (
            !(
              (!a || (I(T, E.default) && T.match(/^https?$/i))) &&
              I(u, o.default) &&
              I(d, l.default, !0) &&
              I(_, r.default, !0)
            )
          )
            return !1
          return (t && I(N, s.default)) || (!t && I(N, i.default))
        })
      var i = n(a('ta7H')),
        r = n(a('kAdf')),
        o = n(a('OVD+')),
        l = n(a('IM13')),
        E = n(a('IbdM')),
        c = n(a('6sfk')),
        s = n(a('b1+5'))
      function I(e, t, a) {
        return a ? !e || (e.match(t) && RegExp['$&'] === e) : 'string' == typeof e && e.match(t) && RegExp['$&'] === e
      }
      e.exports = t.default
    },
    T8pk: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        l = a('Lsrn'),
        E = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
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
          return Ee
        }),
        a.d(t, 'r', function () {
          return ce
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
          return Ne
        }),
        a.d(t, 'w', function () {
          return ue
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
          return Ae
        }),
        a.d(t, 'B', function () {
          return Ce
        }),
        a.d(t, 'E', function () {
          return be
        }),
        a.d(t, 'D', function () {
          return Oe
        }),
        a.d(t, 'C', function () {
          return me
        }),
        a.d(t, 'F', function () {
          return fe
        }),
        a.d(t, 'G', function () {
          return Se
        }),
        a.d(t, 'H', function () {
          return Le
        }),
        a.d(t, 'I', function () {
          return he
        }),
        a.d(t, 'J', function () {
          return ye
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
          return ge
        }),
        a.d(t, 'b', function () {
          return Pe
        }),
        a.d(t, 'a', function () {
          return Ge
        }),
        a.d(t, 'c', function () {
          return xe
        }),
        a.d(t, 'd', function () {
          return Ye
        }),
        a.d(t, 'e', function () {
          return Ve
        }),
        a.d(t, 'g', function () {
          return Be
        }),
        a.d(t, 'Q', function () {
          return We
        }),
        a.d(t, 'S', function () {
          return we
        }),
        a.d(t, 'T', function () {
          return ke
        }),
        a.d(t, 'U', function () {
          return He
        }),
        a.d(t, 'k', function () {
          return Ke
        }),
        a.d(t, 'i', function () {
          return je
        }),
        a.d(t, 'l', function () {
          return ze
        }),
        a.d(t, 'f', function () {
          return Qe
        }),
        a.d(t, 'X', function () {
          return qe
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
      var n = a('ddV6'),
        i = a.n(n),
        r = a('KEM+'),
        o = a.n(r),
        l = a('RhWx'),
        E = a.n(l),
        c = a('yiKp'),
        s = a.n(c),
        I =
          (a('yH/f'),
          a('2G9S'),
          a('TJCb'),
          a('7x/C'),
          a('DZ+c'),
          a('jQ3i'),
          a('x4t0'),
          a('JtPf'),
          a('M+/F'),
          a('oEOe')),
        T = a('iD2S'),
        N = a.n(T),
        u = a('kGix'),
        d = a('Ssj5'),
        _ = a('vEo5'),
        p = a('AspN'),
        A = a('QJRq'),
        R = 'accountVerification',
        C = 'rweb/accountVerification/APPEND_NOTABILITY_ARTICLE_DATA',
        b = 'rweb/accountVerification/APPEND_NOTABILITY_MAIN_REFERENCE_DATA',
        O = 'rweb/accountVerification/APPEND_NOTABILITY_NEWS_DATA',
        m = 'rweb/accountVerification/APPEND_NOTABILITY_PUBLIC_REFERENCE_DATA',
        f = 'rweb/accountVerification/RESET_AUTHENTICATION_RESULT',
        S = 'rweb/accountVerification/RESET_AUTHENTICITY_DATA',
        L = 'rweb/accountVerification/RESET_AUTHENTICITY_TYPE',
        h = 'rweb/accountVerification/RESET_DOCUMENT_ID_PROCESS',
        y = 'rweb/accountVerification/RESET_FLOW',
        D = 'rweb/accountVerification/RESET_INTAKE_UPLOAD',
        F = 'rweb/accountVerification/RESET_NOTABILITY_CATEGORY',
        U = 'rweb/accountVerification/RESET_NOTABILITY_DATA',
        v = 'rweb/accountVerification/RESET_SUBMIT_VERIFICATION',
        M = 'rweb/accountVerification/SET_AUTHENTICITY_DATA',
        g = 'rweb/accountVerification/SET_AUTHENTICITY_TYPE',
        P = 'rweb/accountVerification/SET_BACK_ID',
        G = 'rweb/accountVerification/SET_FRONT_ID',
        x = 'rweb/accountVerification/SET_ID_COUNTRY',
        Y = 'rweb/accountVerification/SET_ID_TYPE',
        V = 'rweb/accountVerification/SET_NEXT_FLOW',
        B = 'rweb/accountVerification/SET_NOTABILITY_CATEGORY',
        W = 'rweb/accountVerification/SET_NOTABILITY_DATA',
        w = 'rweb/accountVerification/SET_NOTABILITY_SUBCATEGORY',
        k = 'rweb/accountVerification/SET_PREV_FLOW',
        H = 'rweb/accountVerification/TOGGLE_CHECKBOX_CONFIRMATION',
        K = 'rweb/accountVerification/UPDATE_FORM_HISTORY',
        j = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCESS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCESS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCESS_FAILURE',
        }),
        z = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_FAILURE',
        }),
        Q = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_FAILURE',
        }),
        q = Object.freeze({
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
        ee = A.h.LANDING_PAGE,
        te = N()({
          access: {
            data: { applicationSubmissionTimeInMs: void 0, decisionMadeTimeInMs: void 0, status: A.a.DISABLED },
            error: null,
            fetchStatus: u.a.NONE,
          },
          accountEligibility: {
            data: { followers_eligible: !1, mentions_eligible: !1 },
            error: null,
            fetchStatus: u.a.NONE,
          },
          accountViolations: { data: { violations: [] }, error: null, fetchStatus: u.a.NONE },
          authenticationResult: { data: { errors: [], status: void 0 }, error: null, fetchStatus: u.a.NONE },
          badgeViolations: {
            data: {
              button_text: '',
              debadge_timestamp_ms: 0,
              violation_modal_title: '',
              violation_modal_desc: { entities: [], text: '' },
              violations: [],
            },
            error: null,
            fetchStatus: u.a.NONE,
          },
          documentFormats: { data: void 0, error: null, fetchStatus: u.a.NONE },
          documentIdProcess: { data: { errors: [], entity_id: void 0 }, error: null, fetchStatus: u.a.NONE },
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
          verifyAccount: { error: null, fetchStatus: u.a.NONE },
        })
      d.a.register(
        o()({}, R, function () {
          var e,
            t,
            a,
            n,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te,
            r = arguments.length > 1 ? arguments[1] : void 0
          switch (r.type) {
            case j.REQUEST:
              return s()(
                s()({}, i),
                {},
                { access: s()(s()({}, i.access), {}, { fetchStatus: u.a.LOADING, error: null }) },
              )
            case j.SUCCESS:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  {
                    access: {
                      data: s()(
                        s()({}, i.access.data),
                        {},
                        {
                          applicationSubmissionTimeInMs: r.payload.application_submission_time_in_ms,
                          decisionMadeTimeInMs: r.payload.decision_made_time_in_ms,
                          status: r.payload.status || A.a.DISABLED,
                        },
                      ),
                      error: null,
                      fetchStatus: u.a.LOADED,
                    },
                  },
                )
              break
            case j.FAILURE:
              return s()(
                s()({}, i),
                {},
                { access: s()(s()({}, i.access), {}, { error: r.payload, fetchStatus: u.a.FAILED }) },
              )
            case z.REQUEST:
              return s()(
                s()({}, i),
                {},
                {
                  accountEligibility: s()(s()({}, i.accountEligibility), {}, { fetchStatus: u.a.LOADING, error: null }),
                },
              )
            case z.SUCCESS:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  { accountEligibility: { data: s()({}, r.payload), error: null, fetchStatus: u.a.LOADED } },
                )
              break
            case z.FAILURE:
              return s()(
                s()({}, i),
                {},
                {
                  accountEligibility: s()(
                    s()({}, i.accountEligibility),
                    {},
                    { error: r.payload, fetchStatus: u.a.FAILED },
                  ),
                },
              )
            case Q.REQUEST:
              return s()(
                s()({}, i),
                {},
                { accountViolations: s()(s()({}, i.accountViolations), {}, { fetchStatus: u.a.LOADING, error: null }) },
              )
            case Q.SUCCESS:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  { accountViolations: { data: s()({}, r.payload), error: null, fetchStatus: u.a.LOADED } },
                )
              break
            case Q.FAILURE:
              return s()(
                s()({}, i),
                {},
                {
                  accountViolations: s()(
                    s()({}, i.accountViolations),
                    {},
                    { error: r.payload, fetchStatus: u.a.FAILED },
                  ),
                },
              )
            case q.REQUEST:
              return s()(
                s()({}, i),
                {},
                {
                  authenticationResult: s()(
                    s()({}, i.authenticationResult),
                    {},
                    { error: null, fetchStatus: u.a.LOADING },
                  ),
                },
              )
            case q.SUCCESS:
              return s()(
                s()({}, i),
                {},
                {
                  authenticationResult: {
                    data: s()(s()({}, i.authenticationResult.data), r.payload),
                    error: null,
                    fetchStatus: u.a.LOADED,
                  },
                },
              )
            case q.FAILURE:
              return s()(
                s()({}, i),
                {},
                {
                  authenticationResult: s()(
                    s()({}, i.authenticationResult),
                    {},
                    { error: r.payload, fetchStatus: u.a.FAILED },
                  ),
                },
              )
            case $.REQUEST:
              return s()(
                s()({}, i),
                {},
                { badgeViolations: s()(s()({}, i.badgeViolations), {}, { fetchStatus: u.a.LOADING }) },
              )
            case $.SUCCESS:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  { badgeViolations: { data: s()({}, r.payload), error: null, fetchStatus: u.a.LOADED } },
                )
              break
            case $.FAILURE:
              return s()(
                s()({}, i),
                {},
                { badgeViolations: s()(s()({}, i.badgeViolations), {}, { error: r.payload, fetchStatus: u.a.FAILED }) },
              )
            case Z.REQUEST:
              return s()(
                s()({}, i),
                {},
                { documentFormats: s()(s()({}, i.documentFormats), {}, { error: null, fetchStatus: u.a.LOADING }) },
              )
            case Z.SUCCESS:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  { documentFormats: { data: s()({}, r.payload), error: null, fetchStatus: u.a.LOADED } },
                )
              break
            case Z.FAILURE:
              return s()(
                s()({}, i),
                {},
                { documentFormats: s()(s()({}, i.documentFormats), {}, { error: r.payload, fetchStatus: u.a.FAILED }) },
              )
            case J.REQUEST:
              return s()(s()({}, i), {}, { verifyAccount: { error: null, fetchStatus: u.a.LOADING } })
            case J.SUCCESS:
              var l
              return (
                r.payload && (l = r.payload.survey_url),
                s()(s()({}, i), {}, { surveyUrl: l, verifyAccount: { error: null, fetchStatus: u.a.LOADED } })
              )
            case J.FAILURE:
              return s()(s()({}, i), {}, { verifyAccount: { error: r.payload, fetchStatus: u.a.FAILED } })
            case X.REQUEST:
              return s()(
                s()({}, i),
                {},
                { documentIdProcess: s()(s()({}, i.documentIdProcess), {}, { error: null, fetchStatus: u.a.LOADING }) },
              )
            case X.SUCCESS:
              return s()(
                s()({}, i),
                {},
                {
                  documentIdProcess: {
                    data: s()(s()({}, i.documentIdProcess.data), r.payload),
                    error: null,
                    fetchStatus: u.a.LOADED,
                  },
                },
              )
            case X.FAILURE:
              return s()(
                s()({}, i),
                {},
                {
                  documentIdProcess: s()(
                    s()({}, i.documentIdProcess),
                    {},
                    { error: r.payload, fetchStatus: u.a.FAILED },
                  ),
                },
              )
            case C:
              return s()(
                s()({}, i),
                {},
                {
                  formData: s()(
                    s()({}, i.formData),
                    {},
                    {
                      notabilityData: s()(
                        s()({}, i.formData.notabilityData),
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
            case b:
              return s()(
                s()({}, i),
                {},
                {
                  formData: s()(
                    s()({}, i.formData),
                    {},
                    {
                      notabilityData: s()(
                        s()({}, i.formData.notabilityData),
                        {},
                        { mainReferenceUrl: null === (t = r.payload) || void 0 === t ? void 0 : t.mainReferenceUrl },
                      ),
                    },
                  ),
                },
              )
            case O:
              return s()(
                s()({}, i),
                {},
                {
                  formData: s()(
                    s()({}, i.formData),
                    {},
                    {
                      notabilityData: s()(
                        s()({}, i.formData.notabilityData),
                        {},
                        { newsReferenceUrls: null === (a = r.payload) || void 0 === a ? void 0 : a.newsReferenceUrls },
                      ),
                    },
                  ),
                },
              )
            case m:
              return s()(
                s()({}, i),
                {},
                {
                  formData: s()(
                    s()({}, i.formData),
                    {},
                    {
                      notabilityData: s()(
                        s()({}, i.formData.notabilityData),
                        {},
                        {
                          publicReferenceUrl: null === (n = r.payload) || void 0 === n ? void 0 : n.publicReferenceUrl,
                        },
                      ),
                    },
                  ),
                },
              )
            case P:
              return s()(s()({}, i), {}, { backID: r.payload })
            case G:
              return s()(s()({}, i), {}, { frontID: r.payload })
            case x:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  {
                    idCountry: r.payload.countryCode,
                    idCountryName: r.payload.countryName,
                    idType: void 0,
                    idTypeName: void 0,
                  },
                )
              break
            case Y:
              if (r.payload) return s()(s()({}, i), {}, { idType: r.payload.idType, idTypeName: r.payload.idTypeName })
              break
            case D:
              return s()(s()({}, i), {}, { backID: te.backID, frontID: te.frontID, isConfirmed: te.isConfirmed })
            case v:
              var c = it(i.stepsTaken),
                I = c.previousStep,
                T = c.remainingSteps
              return s()(
                s()({}, i),
                {},
                { currentStep: I, stepsTaken: E()(T), verifyAccount: { error: null, fetchStatus: u.a.NONE } },
              )
            case H:
              return s()(s()({}, i), {}, { isConfirmed: !i.isConfirmed })
            case h:
              return s()(s()({}, i), {}, { documentIdProcess: s()({}, te.documentIdProcess) })
            case f:
              return s()(s()({}, i), {}, { authenticationResult: s()({}, te.authenticationResult) })
            case V:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  { currentStep: r.payload, stepsTaken: [].concat(E()(i.stepsTaken), [r.payload]) },
                )
              break
            case k:
              var N = it(i.stepsTaken),
                d = N.previousStep,
                _ = N.remainingSteps
              return s()(s()({}, i), {}, { currentStep: d, stepsTaken: E()(_) })
            case B:
              return s()(s()({}, i), {}, { formData: s()(s()({}, i.formData), {}, { notabilityCategory: r.payload }) })
            case F:
              return s()(
                s()({}, i),
                {},
                {
                  formData: s()(
                    s()({}, i.formData),
                    {},
                    {
                      notabilityCategory: te.formData.notabilityCategory,
                      notabilitySubcategory: te.formData.notabilitySubcategory,
                    },
                  ),
                },
              )
            case W:
              return s()(
                s()({}, i),
                {},
                { formData: s()(s()({}, i.formData), {}, { notabilityData: s()({}, r.payload) }) },
              )
            case U:
              return s()(
                s()({}, i),
                {},
                { formData: s()(s()({}, i.formData), {}, { notabilityData: te.formData.notabilityData }) },
              )
            case w:
              return s()(
                s()({}, i),
                {},
                { formData: s()(s()({}, i.formData), {}, { notabilitySubcategory: r.payload }) },
              )
            case g:
              return s()(
                s()({}, i),
                {},
                {
                  backID: te.backID,
                  frontID: te.frontID,
                  isConfirmed: te.isConfirmed,
                  idType: te.idType,
                  idTypeName: te.idTypeName,
                  formData: s()(
                    s()({}, i.formData),
                    {},
                    { authenticityType: r.payload, authenticityData: te.formData.authenticityData },
                  ),
                },
              )
            case L:
              return s()(
                s()({}, i),
                {},
                { formData: s()(s()({}, i.formData), {}, { authenticityType: te.formData.authenticityType }) },
              )
            case M:
              return s()(
                s()({}, i),
                {},
                { formData: s()(s()({}, i.formData), {}, { authenticityData: s()({}, r.payload) }) },
              )
            case S:
              return s()(
                s()({}, i),
                {},
                { formData: s()(s()({}, i.formData), {}, { authenticityData: te.formData.authenticityData }) },
              )
            case K:
              var p = i.currentStep.toString()
              return s()(
                s()({}, i),
                {},
                { formHistory: s()(s()({}, i.formHistory), {}, o()({}, p, s()({}, r.payload))) },
              )
            case y:
              return te
            default:
              return i
          }
          return i
        }),
      )
      var ae = function (e) {
          return e[R].access.data
        },
        ne = function (e) {
          return e[R].access.fetchStatus
        },
        ie = function (e) {
          return e[R].accountEligibility.data
        },
        re = function (e) {
          return e[R].accountEligibility.fetchStatus
        },
        oe = function (e) {
          return e[R].accountViolations.data
        },
        le = function (e) {
          return e[R].accountViolations.fetchStatus
        },
        Ee = function (e) {
          return e[R].authenticationResult.data.errors || []
        },
        ce = function (e) {
          return e[R].authenticationResult.data.status
        },
        se = function (e) {
          return e[R].formData.authenticityType
        },
        Ie = function (e) {
          return e[R].formData.authenticityData
        },
        Te = function (e) {
          return e[R].backID
        },
        Ne = function (e) {
          return e[R].badgeViolations.data
        },
        ue = function (e) {
          return e[R].badgeViolations.fetchStatus
        },
        de = function (e) {
          return e[R].isConfirmed
        },
        _e = function (e) {
          return e[R].currentStep
        },
        pe = function (e) {
          var t = _e(e)
          return e[R].formHistory[t] || void 0
        },
        Ae = function (e) {
          return e[R].documentFormats.data
        },
        Re = function (e) {
          return e[R].documentFormats.fetchStatus
        },
        Ce = function (e) {
          return e[R].documentIdProcess.data.entity_id
        },
        be = function (e) {
          return e[R].documentIdProcess.error
        },
        Oe = function (e) {
          return e[R].documentIdProcess.fetchStatus
        },
        me = function (e) {
          return e[R].documentIdProcess.data.errors || []
        },
        fe = function (e) {
          return e[R].frontID
        },
        Se = function (e) {
          return e[R].idCountry
        },
        Le = function (e) {
          return e[R].idCountryName
        },
        he = function (e) {
          return e[R].idType
        },
        ye = function (e) {
          return e[R].idTypeName
        },
        De = function (e) {
          return e[R].formData.notabilityCategory
        },
        Fe = function (e) {
          var t = e[R].formData,
            a = t.notabilityCategory,
            n = t.notabilityData,
            i = t.notabilitySubcategory
          switch (a) {
            case A.l.NEWS:
              return null == n ? void 0 : n.newsType
            default:
              return i
          }
        },
        Ue = function (e) {
          return e[R].formData.notabilityData
        },
        ve = function (e) {
          return e[R].surveyUrl
        },
        Me = function (e) {
          return e[R].verifyAccount.fetchStatus
        },
        ge = function (e) {
          var t = ne(e),
            a = re(e),
            n = le(e),
            i = Object(_.selectFetchStatus)(e),
            r = Re(e)
          return [t, a, n, i, r].includes(u.a.FAILED)
            ? u.a.FAILED
            : (function (e) {
                return e.includes(u.a.LOADING)
              })([t, a, n, i, r])
            ? u.a.LOADING
            : u.a.LOADED
        },
        Pe = function () {
          return function (e, t, a) {
            a.api
            var n = t(),
              i = ne(n)
            return i !== u.a.LOADING && i !== u.a.LOADED ? e(Ge()) : Promise.resolve()
          }
        },
        Ge = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(I.b)(e, { request: n.AccountVerification.fetchAccess })({
              actionTypes: j,
              context: 'FETCH_ACCESS',
            })
          }
        },
        xe = function () {
          return function (e, t, a) {
            a.api
            var n = t(),
              i = re(n)
            return i !== u.a.LOADING && i !== u.a.LOADED
              ? e(function (e, t, a) {
                  var n = a.api
                  return Object(I.b)(e, { request: n.AccountVerification.fetchAccountEligibility })({
                    actionTypes: z,
                    context: 'FETCH_ACCOUNT_ELIGIBILITY',
                  })
                })
              : Promise.resolve()
          }
        },
        Ye = function () {
          return function (e, t, a) {
            a.api
            var n = t(),
              i = le(n)
            return i !== u.a.LOADING && i !== u.a.LOADED
              ? e(function (e, t, a) {
                  var n = a.api
                  return Object(I.b)(e, { request: n.AccountVerification.fetchAccountViolations })({
                    actionTypes: Q,
                    context: 'FETCH_ACCOUNT_VIOLATIONS',
                  })
                })
              : Promise.resolve()
          }
        },
        Ve = function () {
          return function (e, t, a) {
            a.api
            return (function (e) {
              return e[R].authenticationResult.fetchStatus
            })(t()) !== u.a.LOADING
              ? e(function (e, t, a) {
                  var n = a.api
                  return Object(I.b)(e, { request: n.AccountVerification.fetchAuthenticationResult })({
                    actionTypes: q,
                    context: 'FETCH_AUTHENTICATION_RESULT',
                  })
                })
              : Promise.resolve()
          }
        },
        Be = function () {
          return function (e, t, a) {
            a.api
            var n = t(),
              i = Re(n)
            return i !== u.a.LOADING && i !== u.a.LOADED
              ? e(function (e, t, a) {
                  var n = a.api
                  return Object(I.b)(e, { request: n.AccountVerification.fetchDocumentFormats })({
                    actionTypes: Z,
                    context: 'FETCH_DOCUMENT_FORMATS',
                  })
                })
              : Promise.resolve()
          }
        },
        We = function (e) {
          return function (t, a, n) {
            n.api
            t({ type: P, payload: e })
          }
        },
        we = function (e) {
          return function (t, a, n) {
            n.api
            t({ type: G, payload: e })
          }
        },
        ke = function (e, t) {
          return function (a, n, i) {
            i.api
            a({ type: x, payload: { countryCode: e, countryName: t } })
          }
        },
        He = function (e, t) {
          return function (a, n, i) {
            i.api
            a({ type: Y, payload: { idType: e, idTypeName: t } })
          }
        },
        Ke = function () {
          return function (e, t, a) {
            a.api
            e({ type: D })
          }
        },
        je = function () {
          return function (e, t, a) {
            a.api
            e({ type: h })
          }
        },
        ze = function () {
          return function (e, t, a) {
            a.api
            e({ type: v })
          }
        },
        Qe = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(I.b)(e, { request: n.AccountVerification.fetchBadgeViolations })({
              actionTypes: $,
              context: 'FETCH_BADGE_VIOLATIONS',
            })
          }
        },
        qe = function () {
          return function (e, t, a) {
            a.api
            e({ type: H })
          }
        },
        $e = function () {
          return function (e, t, a) {
            a.api
            e({ type: f })
          }
        },
        Ze = function (e) {
          return function (t, a, n) {
            n.api
            t({ payload: e || A.g[_e(a())].next, type: V })
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
            e({ type: y })
          }
        },
        et = function (e) {
          return function (t, a, n) {
            n.api
            t({ payload: 'string' == typeof e ? { radioData: e } : { inputData: e }, type: K })
          }
        },
        tt = function () {
          return function (e, t, a) {
            var n,
              i,
              r = a.api,
              o = t(),
              l = se(o) || void 0,
              E = Ie(o) || void 0,
              c = De(o) || void 0,
              T = Ue(o) || {},
              N = Fe(o) || void 0,
              u = N && c !== A.l.NEWS,
              d = { authenticity_type: l }
            null != E &&
              E.siteUrl &&
              (d = s()(
                s()({}, d),
                {},
                { site_url: null == E || null === (n = E.siteUrl) || void 0 === n ? void 0 : n[0] },
              ))
            null != E &&
              E.email &&
              (d = s()(
                s()({}, d),
                {},
                { verified_email: null == E || null === (i = E.email) || void 0 === i ? void 0 : i[0] },
              ))
            var _,
              p,
              R,
              C,
              b,
              O,
              m,
              f,
              S,
              L,
              h,
              y = { category: c }
            ;(u && (y = s()(s()({}, y), {}, { notability_subcategory: N })),
            null != T &&
              T.articleReferenceUrls &&
              (y = s()(s()({}, y), {}, { article_reference_urls: null == T ? void 0 : T.articleReferenceUrls })),
            null != T && T.authorReferenceUrl) &&
              (y = s()(
                s()({}, y),
                {},
                {
                  author_reference_url:
                    null == T || null === (_ = T.authorReferenceUrl) || void 0 === _ ? void 0 : _[0],
                },
              ))
            null != T &&
              T.googleTrendsReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                {
                  google_trends_reference_url:
                    null == T || null === (p = T.googleTrendsReferenceUrl) || void 0 === p ? void 0 : p[0],
                },
              ))
            null != T &&
              T.hashtagReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                {
                  hashtag_reference_url:
                    null == T || null === (R = T.hashtagReferenceUrl) || void 0 === R ? void 0 : R[0],
                },
              ))
            null != T &&
              T.imdbReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                { imdb_reference_url: null == T || null === (C = T.imdbReferenceUrl) || void 0 === C ? void 0 : C[0] },
              ))
            null != T &&
              T.leadershipReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                {
                  leadership_reference_url:
                    null == T || null === (b = T.leadershipReferenceUrl) || void 0 === b ? void 0 : b[0],
                },
              ))
            null != T &&
              T.mainReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                { main_reference_url: null == T || null === (O = T.mainReferenceUrl) || void 0 === O ? void 0 : O[0] },
              ))
            ;(null != T &&
              T.newsReferenceUrls &&
              (y = s()(s()({}, y), {}, { news_reference_urls: null == T ? void 0 : T.newsReferenceUrls })),
            null != T && T.newsType && (y = s()(s()({}, y), {}, { news_type: null == T ? void 0 : T.newsType })),
            null != T && T.publicReferenceUrl) &&
              (y = s()(
                s()({}, y),
                {},
                {
                  public_reference_url:
                    null == T || null === (m = T.publicReferenceUrl) || void 0 === m ? void 0 : m[0],
                },
              ))
            null != T &&
              T.publicationReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                {
                  publication_reference_url:
                    null == T || null === (f = T.publicationReferenceUrl) || void 0 === f ? void 0 : f[0],
                },
              ))
            null != T &&
              T.stockReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                {
                  stock_reference_url: null == T || null === (S = T.stockReferenceUrl) || void 0 === S ? void 0 : S[0],
                },
              ))
            null != T &&
              T.teamReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                { team_reference_url: null == T || null === (L = T.teamReferenceUrl) || void 0 === L ? void 0 : L[0] },
              ))
            null != T &&
              T.wikipediaReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                {
                  wikipedia_reference_url:
                    null == T || null === (h = T.wikipediaReferenceUrl) || void 0 === h ? void 0 : h[0],
                },
              ))
            var D = { authenticity_claim: d, notability_claim: y }
            return Object(I.b)(e, { params: D, request: r.AccountVerification.verifyAccount })({
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
              E = Te(l),
              c = fe(l),
              s = he(l),
              T = Se(l)
            if (E) {
              var N,
                u = Object(p.k)(l, E),
                d = i()(u, 1)[0]
              r = null == d || null === (N = d.originalMediaFile) || void 0 === N ? void 0 : N.fileHandle
            }
            if (c) {
              var _,
                A = Object(p.k)(l, c),
                R = i()(A, 1)[0]
              n = null == R || null === (_ = R.originalMediaFile) || void 0 === _ ? void 0 : _.fileHandle
            }
            var C = { backImage: r, country: T, frontImage: n, idType: s }
            return Object(I.b)(e, { params: C, request: o.AccountVerification.verifyIdDocument })({
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
              E = ie(o),
              c = E.followers_eligible,
              I = E.mentions_eligible
            switch (e) {
              case A.h.NOTABILITY_CATEGORY_SELECT:
                a({ payload: t, type: B })
                break
              case A.h.ACTIVIST_SUBCATEGORY:
              case A.h.COMPANY_SUBCATEGORY:
              case A.h.ENTERTAINMENT_QUALIFICATIONS:
              case A.h.GAMING_SUBCATEGORY:
              case A.h.GOVERNMENT_SUBCATEGORY:
              case A.h.INFLUENCER_SUBCATEGORY:
              case A.h.SPORTS_SUBCATEGORY:
                'string' == typeof t &&
                  (a({ payload: A.o[t], type: B }),
                  A.o[t] === A.l.NEWS ? a({ payload: { newsType: t }, type: W }) : a({ payload: t, type: w }))
                break
              case A.h.NEWS_QUALIFICATIONS:
                a({ payload: { newsType: t }, type: W })
                break
              case A.h.ACTIVIST_QUALIFICATIONS:
                a({ payload: A.b.ACTIVIST, type: w })
                break
              case A.h.ACTIVIST_GOOGLE_TRENDS:
              case A.h.ACTIVIST_LEADERSHIP:
              case A.h.ACTIVIST_NEWS:
              case A.h.ACTIVIST_WIKIPEDIA:
              case A.h.COMPANY_GOOGLE_TRENDS:
              case A.h.COMPANY_INDIVIDUAL_LEADERSHIP:
              case A.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE:
              case A.h.COMPANY_STOCK_EXCHANGE:
              case A.h.COMPANY_WIKIPEDIA:
              case A.h.CONTENT_CREATOR_GOOGLE_TRENDS:
              case A.h.CONTENT_CREATOR_NEWS:
              case A.h.CONTENT_CREATOR_WIKIPEDIA:
              case A.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS:
              case A.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE:
              case A.h.ENTERTAINMENT_COMPANY_WIKIPEDIA:
              case A.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL:
              case A.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS:
              case A.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS:
              case A.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE:
              case A.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA:
              case A.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS:
              case A.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL:
              case A.h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS:
              case A.h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS:
              case A.h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS:
              case A.h.INFLUENCER_GOOGLE_TRENDS:
              case A.h.INFLUENCER_NEWS:
              case A.h.INFLUENCER_WIKIPEDIA:
              case A.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS:
              case A.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL:
              case A.h.SPORTS_ENTITY_GOOGLE_TRENDS:
              case A.h.SPORTS_ENTITY_STOCK_REFERENCE:
              case A.h.SPORTS_ENTITY_WEBSITE:
              case A.h.SPORTS_ENTITY_WIKIPEDIA:
                a({ payload: t, type: W })
                break
              case A.h.COMPANY_NEWS_REFERENCE:
              case A.h.SPORTS_ENTITY_NEWS_REFERENCE:
                a(c ? { payload: t, type: W } : { payload: t, type: O })
                break
              case A.h.CREATOR_PROFILE:
              case A.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL:
                a({ payload: t, type: b })
                break
              case A.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE:
              case A.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE:
                a(c || I ? { payload: t, type: W } : { payload: t, type: O })
                break
              case A.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL:
              case A.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL:
              case A.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL:
                a({ payload: t, type: m })
                break
              case A.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS:
              case A.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL:
              case A.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL:
              case A.h.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL:
              case A.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL:
              case A.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL:
              case A.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                a({ payload: s()(s()({}, t), {}, { newsType: l }), type: W })
                break
              case A.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                a(
                  c || I
                    ? { payload: s()(s()({}, t), {}, { newsType: l }), type: W }
                    : { payload: s()({}, t), type: C },
                )
                break
              case A.h.AUTHENTICITY_TYPE_SELECT:
                a({ payload: t, type: g })
                break
              case A.h.EMAIL_VERIFICATION:
                a({ payload: { email: [t] }, type: M })
                break
              case A.h.SITE_VERIFICATION:
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
            o = [ee].concat(E()(t.slice(1, -1)))
          return r === A.h.INTAKE_LOADING ? e(o) : { previousStep: r, remainingSteps: o }
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
        E = (0, i.default)(
          '(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?',
          { validateUrlUserinfo: r.default, validateUrlUnicodeHost: o.default, validateUrlPort: l.default },
          'i',
        )
      ;(t.default = E), (e.exports = t.default)
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
        E = (0, i.default)(
          '(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*',
          { validateUrlUnreserved: r.default, validateUrlPctEncoded: o.default, validateUrlSubDelims: l.default },
          'i',
        )
      ;(t.default = E), (e.exports = t.default)
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
          return gs
        }),
        a.d(t, 'AccountVerification', function () {
          return Ps
        })
      var n,
        i,
        r,
        o,
        l,
        E,
        c,
        s,
        I,
        T,
        N,
        u,
        d,
        _,
        p,
        A,
        R,
        C,
        b,
        O,
        m,
        f,
        S,
        L,
        h,
        y,
        D,
        F,
        U,
        v = a('97Jx'),
        M = a.n(v),
        g = a('yiKp'),
        P = a.n(g),
        G = a('VrFO'),
        x = a.n(G),
        Y = a('Y9Ll'),
        V = a.n(Y),
        B = a('1Pcy'),
        W = a.n(B),
        w = a('5Yy7'),
        k = a.n(w),
        H = a('2VqO'),
        K = a.n(H),
        j = a('KEM+'),
        z = a.n(j),
        Q =
          (a('2G9S'),
          a('5BYb'),
          a('7x/C'),
          a('lTEL'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          a('ho0z'),
          a('uFXj'),
          a('ERkP')),
        q = a.n(Q),
        $ = (a('hBpG'), a('849X'), a('TJCb'), a('1t7P'), a('jQ/y'), a('3XMw')),
        Z = a.n($),
        J = a('cmUU'),
        X = a('fs1G'),
        ee = a('aITJ'),
        te = a('QJRq'),
        ae = Z.a.d4f88600,
        ne = Z.a.b192ccad,
        ie = Z.a.a0487504,
        re = Z.a.fff7d93c,
        oe = Z.a.g969bfad,
        le = Z.a.gb2f35e4,
        Ee = ee.b.isTwitterApp()
          ? { external: !0, pathname: 'twitter://settings/account', openInSameFrame: !0 }
          : { pathname: '/settings/account', openInSameFrame: !0 },
        ce = ee.b.isTwitterApp()
          ? { external: !0, pathname: 'twitter://profiles/edit', openInSameFrame: !0 }
          : { external: !0, pathname: '/settings/profile', openInSameFrame: !0 },
        se = function (e) {
          var t,
            a = e.accountViolations,
            n = [te.s.PROFILE_COMPLETION, te.s.ACCOUNT_SECURITY],
            i =
              ((t = {}),
              z()(t, te.s.PROFILE_COMPLETION, { actionLink: ce, buttonText: re, description: le, title: oe }),
              z()(t, te.s.ACCOUNT_SECURITY, { actionLink: Ee, buttonText: ae, description: ie, title: ne }),
              t),
            r = n.find(function (e) {
              var t
              return null === (t = a.violations) || void 0 === t
                ? void 0
                : t.some(function (t) {
                    return t.violation_category === e && t.violation_status === te.t.OUT_OF_COMPLIANCE
                  })
            })
          if (void 0 === r) throw new Error('cannot render Account violations without valid violations')
          var o = i[r],
            l = o.actionLink,
            E = o.buttonText,
            c = o.description,
            s = o.title
          return q.a.createElement(J.a, {
            actionLabel: E,
            actionLink: l,
            graphicDisplayMode: 'none',
            headline: s,
            onAction: X.a,
            onClose: X.a,
            subtext: c,
            withCloseButton: !1,
          })
        },
        Ie = a('ddV6'),
        Te = a.n(Ie),
        Ne =
          (a('KqXw'),
          a('Ysgh'),
          a('z84I'),
          a('LW0h'),
          a('MvUL'),
          a('7xRU'),
          a('iKE+'),
          a('1LXv'),
          a('e/gN'),
          a('DZ+c'),
          a('3uku'),
          a('+/5o')),
        ue = a('rHpw'),
        de = ue.a.create(function (e) {
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
                .concat(ue.a.theme.lineHeights.headline1, ' + 2 * ')
                .concat(e.componentDimensions.gutterVertical, ')'),
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            narrowContainer: { marginHorizontal: e.spaces.space16 },
            scrollableContainer: { flexGrow: 1, flexShrink: 1, flexBasis: 0, overflowY: 'auto' },
            subheading: { paddingTop: e.spaces.space24 },
            subtext: { paddingTop: e.spaces.space4 },
            text: { paddingTop: e.spaces.space12 },
            topPaddingSmall: { paddingTop: e.spaces.space4 },
            verticalCenter: { justifyContent: 'center' },
          }
        }),
        _e = a('MWbm'),
        pe = a('t62R'),
        Ae = a('/yvb'),
        Re = a('w6IS'),
        Ce = a('tn7R'),
        be = Z.a.j24c37b2,
        Oe = Z.a.c1df579e,
        me = Z.a.ge483f9e,
        fe = Z.a.be03ecca,
        Se = Z.a.a411926a,
        Le = Z.a.c69a40de,
        he = Z.a.c83a1661,
        ye = {
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
        De = function (e) {
          var t,
            a,
            n = e.accountSettingsLink,
            i = e.email,
            r = e.handleOnClickInvalid,
            o = e.handleOnClickValid,
            l = e.isNarrow,
            E = 0 === i.length
          if (
            E ||
            (function (e) {
              var t = e.split('@'),
                a = Te()(t, 2)[1],
                n = Object(Re.a)(Object(Ce.a)(ye))
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
            var c = E ? Le : he,
              s = E
                ? (function (e) {
                    return q.a.createElement(
                      Z.a.I18NFormatMessage,
                      { $i18n: 'jf9308af' },
                      q.a.createElement(pe.b, { link: e }, Z.a.e1e878ed),
                    )
                  })(n)
                : (function (e) {
                    return q.a.createElement(
                      Z.a.I18NFormatMessage,
                      { $i18n: 'e9976a40' },
                      q.a.createElement(pe.b, { link: e }, Z.a.ced76119),
                    )
                  })(n)
            return q.a.createElement(J.a, {
              actionLabel: be,
              graphicDisplayMode: 'none',
              headline: c,
              onAction: r,
              onClose: X.a,
              subtext: s,
              withCloseButton: !1,
            })
          }
          return q.a.createElement(
            _e.a,
            { style: [de.container, l && de.narrowContainer] },
            q.a.createElement(
              pe.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: Ne.b,
                size: 'title4',
                style: de.header,
                weight: 'heavy',
              },
              Se,
            ),
            q.a.createElement(
              _e.a,
              { style: de.scrollableContainer },
              q.a.createElement(pe.b, { color: 'gray700' }, me),
              ((a = fe), q.a.createElement(pe.b, { size: 'subtext2', style: de.subheading, weight: 'heavy' }, a)),
              ((t = i), q.a.createElement(pe.b, { style: de.subtext }, t)),
            ),
            q.a.createElement(Ae.a, { onClick: o, style: de.buttonFixed, type: 'brandFilled' }, Oe),
          )
        },
        Fe = a('kGix'),
        Ue = a('v//M'),
        ve = a('jHSc'),
        Me = (a('yH/f'), a('TIdA')),
        ge = a('A91F'),
        Pe = 'https://abs.twimg.com/images/verification-form-start.png',
        Ge = 'https://abs.twimg.com/images/verification-form-loading.png',
        xe = 'https://abs.twimg.com/images/verification-form-sent.png',
        Ye = 600,
        Ve = 1200,
        Be = Object.freeze({ START: 'start', LOADING: 'loading', SENT: 'sent' }),
        We =
          ((n = {}),
          z()(n, Be.START, {
            aspectRatio: 2,
            default: Pe,
            variants: [
              { uri: Pe, width: Ye, height: 300 },
              { uri: 'https://abs.twimg.com/images/verification-form-start-large.png', width: Ve, height: 600 },
            ],
          }),
          z()(n, Be.LOADING, {
            aspectRatio: 1.5,
            default: Ge,
            variants: [
              { uri: Ge, width: Ye, height: 400 },
              { uri: 'https://abs.twimg.com/images/verification-form-loading-large.png', width: Ve, height: 800 },
            ],
          }),
          z()(n, Be.SENT, {
            aspectRatio: 2,
            default: xe,
            variants: [
              { uri: xe, width: Ye, height: 300 },
              { uri: 'https://abs.twimg.com/images/verification-form-sent-large.png', width: Ve, height: 600 },
            ],
          }),
          n),
        we = ue.a.create(function () {
          return { narrowBanner: { flex: 1 } }
        }),
        ke = function (e) {
          var t = e.isNarrow,
            a = e.type,
            n = We[a],
            i = q.a.createElement(Me.a, {
              accessibilityLabel: '',
              aspectMode: t ? ge.a.COVER : ge.a.exact(n.aspectRatio),
              customVariants: n.variants,
              image: n.default,
            })
          return t ? q.a.createElement(_e.a, { style: we.narrowBanner }, i) : i
        },
        He = Z.a.j163be32,
        Ke = Z.a.gaf821c8,
        je = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e5b4cc43' },
          q.a.createElement(
            pe.b,
            { link: 'https://help.twitter.com/managing-your-account/twitter-verified-accounts' },
            Z.a.e1ac0f9a,
          ),
        ),
        ze = function (e) {
          var t = e.handleOnClick,
            a = e.isNarrow
          return q.a.createElement(
            _e.a,
            { style: de.largeBannerContainer },
            q.a.createElement(ke, { isNarrow: a, type: Be.START }),
            q.a.createElement(
              _e.a,
              { style: [de.container, de.verticalCenter, a && de.narrowContainer] },
              q.a.createElement(
                pe.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: Ne.b,
                  size: 'title4',
                  style: de.header,
                  weight: 'heavy',
                },
                Ke,
              ),
              q.a.createElement(pe.b, { color: 'gray700' }, je),
              q.a.createElement(Ae.a, { onClick: t, style: de.buttonPadded, type: 'brandFilled' }, He),
            ),
          )
        },
        Qe = (a('tQbP'), a('+KXO'), a('WNMA'), a('rxPX')),
        qe = a('ZyHq'),
        $e = Object(Qe.a)()
          .propsFromState(function () {
            return { documentFormats: qe.A, idCountry: qe.G, idType: qe.I }
          })
          .propsFromActions(function () {
            return { setNextFlow: qe.V }
          })
          .withAnalytics(),
        Ze = Object(Qe.a)().propsFromActions(function () {
          return { setNextFlow: qe.V }
        }),
        Je = a('iySH'),
        Xe = a('htQn'),
        et = ue.a.create(function (e) {
          return {
            contentContainer: { alignItems: 'center', flexDirection: 'row', flexGrow: 1 },
            content: { flexGrow: 1, flexShrink: 1 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space12, flexShrink: 0 },
          }
        }),
        tt = Ze(function (e) {
          var t = e.button,
            a = void 0 === t ? null : t,
            n = e.description,
            i = e.isNarrow,
            r = e.items,
            o = e.setNextFlow,
            l = e.title
          return q.a.createElement(
            _e.a,
            { style: [de.container, i && de.narrowContainer] },
            q.a.createElement(
              pe.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: Ne.b,
                size: 'title4',
                style: de.header,
                weight: 'heavy',
              },
              l,
            ),
            q.a.createElement(
              _e.a,
              { style: de.scrollableContainer },
              n && q.a.createElement(pe.b, { color: 'gray700' }, n),
              q.a.createElement(
                _e.a,
                { accessibilityLabelledBy: Ne.b, accessibilityRole: 'group', style: de.contentContainer },
                r.map(function (e, t) {
                  var a = e.description,
                    n = e.disabled,
                    i = void 0 !== n && n,
                    r = e.label,
                    E = e.nextStep
                  return q.a.createElement(
                    Xe.a,
                    {
                      disabled: i,
                      key: ''.concat(l, '-pivot-').concat(t),
                      onClick: function () {
                        !(function (e) {
                          o(e)
                        })(E)
                      },
                      style: [de.listItem, de.bottomBorder],
                      withInteractiveStyling: !0,
                    },
                    q.a.createElement(
                      _e.a,
                      { style: et.contentContainer },
                      q.a.createElement(
                        _e.a,
                        { style: et.content },
                        q.a.createElement(pe.b, null, r),
                        a && q.a.createElement(pe.b, { color: 'gray700', size: 'subtext2' }, a),
                      ),
                      q.a.createElement(Je.a, { style: et.icon }),
                    ),
                  )
                }),
              ),
            ),
            a,
          )
        }),
        at = tt,
        nt = Z.a.e43425fa,
        it = Z.a.e43672a0,
        rt = Z.a.b246aa5d,
        ot = Z.a.d6fb5877,
        lt = Z.a.b72f97cc,
        Et = Z.a.b2ab6008,
        ct = Z.a.c1df579e,
        st = function (e, t) {
          return e && t ? e[t].country : ot
        },
        It = function (e, t, a) {
          return e && t && a ? e[t].id_types[a].name : Et
        },
        Tt = $e(function (e) {
          var t = e.documentFormats,
            a = e.idCountry,
            n = e.idType,
            i = e.isNarrow,
            r = e.setNextFlow
          return q.a.createElement(at, {
            button: q.a.createElement(
              Ae.a,
              {
                disabled: !(a && n),
                onClick: function () {
                  return r()
                },
                style: de.buttonFixed,
                type: 'brandFilled',
              },
              ct,
            ),
            description: it,
            isNarrow: i,
            items: [
              { description: st(t, a), label: rt, nextStep: te.h.ID_COUNTRY_SELECT },
              { description: It(t, a, n), disabled: !a, label: lt, nextStep: te.h.ID_TYPE_SELECT },
            ],
            title: nt,
          })
        }),
        Nt = Tt,
        ut = a('1byD'),
        dt = a('6OUF'),
        _t = Z.a.h9270b1b,
        pt = function (e) {
          var t = e.documentFormats,
            a = e.isNarrow,
            n = e.onCountryClick,
            i = q.a.useState(new RegExp('', 'i')),
            r = Te()(i, 2),
            o = r[0],
            l = r[1],
            E = q.a.useMemo(
              function () {
                return t
                  ? Object.keys(t).sort(function (e, a) {
                      return t[e].country.localeCompare(t[a].country)
                    })
                  : []
              },
              [t],
            )
          return q.a.createElement(
            _e.a,
            {
              accessibilityLabelledBy: Ne.b,
              accessibilityRole: 'group',
              style: [de.container, a && de.narrowContainer],
            },
            q.a.createElement(
              _e.a,
              { style: de.fixedContainer },
              q.a.createElement(
                pe.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: Ne.b,
                  size: 'title4',
                  style: de.header,
                  weight: 'heavy',
                },
                rt,
              ),
              q.a.createElement(
                _e.a,
                { style: [de.contentContainer, de.topPaddingSmall] },
                q.a.createElement(dt.a, {
                  Icon: ut.a,
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
                  placeholder: _t,
                }),
              ),
            ),
            q.a.createElement(
              _e.a,
              { style: de.scrollableContainer },
              E.map(function (e) {
                return t && t[e].country.match(o)
                  ? q.a.createElement(
                      Xe.a,
                      {
                        key: e,
                        onClick: function () {
                          return n(e, t[e].country)
                        },
                        style: [de.listItem, de.bottomBorder],
                        withInteractiveStyling: !0,
                      },
                      q.a.createElement(pe.b, null, t[e].country),
                    )
                  : null
              }),
            ),
          )
        },
        At = function (e) {
          var t = e.documentFormats,
            a = e.idCountry,
            n = e.isNarrow,
            i = e.onTypeClick,
            r = q.a.useMemo(
              function () {
                return t && a
                  ? Object(Ce.a)(t[a].id_types).sort(function (e, t) {
                      return e.name.localeCompare(t.name)
                    })
                  : []
              },
              [t, a],
            )
          return q.a.createElement(
            _e.a,
            {
              accessibilityLabelledBy: Ne.b,
              accessibilityRole: 'group',
              style: [de.container, n && de.narrowContainer],
            },
            q.a.createElement(
              _e.a,
              { style: de.fixedContainer },
              q.a.createElement(
                pe.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: Ne.b,
                  size: 'title4',
                  style: de.header,
                  weight: 'heavy',
                },
                lt,
              ),
            ),
            q.a.createElement(
              _e.a,
              { style: [de.contentContainer, de.scrollableContainer, de.topPaddingSmall] },
              r.map(function (e) {
                var t = e.id_type,
                  a = e.name
                return q.a.createElement(
                  Xe.a,
                  {
                    key: t,
                    onClick: function () {
                      return i(t, a)
                    },
                    style: [de.listItem, de.bottomBorder],
                    withInteractiveStyling: !0,
                  },
                  q.a.createElement(pe.b, null, a),
                )
              }),
            ),
          )
        },
        Rt = a('m3Bd'),
        Ct = a.n(Rt),
        bt = Object(Qe.a)()
          .propsFromActions(function () {
            return { setNextFlow: qe.V, setPreviousFlow: qe.W }
          })
          .withAnalytics(),
        Ot = [
          'analytics',
          'graphicDisplayMode',
          'onAction',
          'onTertiaryAction',
          'setNextFlow',
          'setPreviousFlow',
          'tertiaryActionLabel',
          'tertiaryActionLink',
          'withCloseButton',
        ],
        mt = bt(function (e) {
          var t = e.analytics,
            a = e.graphicDisplayMode,
            n = void 0 === a ? 'none' : a,
            i = e.onAction,
            r = e.onTertiaryAction,
            o = e.setNextFlow,
            l = e.setPreviousFlow,
            E = e.tertiaryActionLabel,
            c = e.tertiaryActionLink,
            s = e.withCloseButton,
            I = void 0 !== s && s,
            T = Ct()(e, Ot),
            N =
              r ||
              (c
                ? X.a
                : function () {
                    return l()
                  })
          return q.a.createElement(
            J.a,
            M()(
              {
                graphicDisplayMode: n,
                onAction: function (e) {
                  t.scribe(
                    P()(
                      P()({}, t.contextualScribeNamespace),
                      {},
                      { element: 'CTA', action: 'click', data: t.contextualScribeData },
                    ),
                  ),
                    i ? i(e) : E ? o() : l()
                },
                onTertiaryAction: N,
                tertiaryActionLabel: E,
                tertiaryActionLink: c,
                withCloseButton: I,
              },
              T,
            ),
          )
        }),
        ft = mt,
        St = a('RhWx'),
        Lt = a.n(St),
        ht =
          (a('M+/F'),
          a('jwue'),
          a('+oxZ'),
          a('jQ3i'),
          a('x4t0'),
          a('DfhM'),
          function (e) {
            var t,
              a = Object(qe.y)(e)
            return null !== (t = null == a ? void 0 : a.inputData) && void 0 !== t ? t : []
          }),
        yt = Object(Qe.a)()
          .propsFromState(function () {
            return { currentStep: qe.z, formHistory: ht }
          })
          .propsFromActions(function () {
            return { setFormStepData: qe.R, setNextFlow: qe.V, updateFormHistory: qe.Y }
          })
          .withAnalytics(),
        Dt = a('Qp/W'),
        Ft = a.n(Dt),
        Ut = (a('KOtZ'), a('ZVkB'), ['newsType']),
        vt = function (e) {
          return (
            e.charAt(0).toLowerCase() +
            e.slice(1, e.length).replace(/[A-Z]/g, function (e) {
              return '_'.concat(e.toLowerCase())
            })
          )
        },
        Mt = function (e) {
          return { component: te.g[e].scribeComponent || e }
        },
        gt = function (e, t, a, n, i, r, o, l, E) {
          var c = n || r,
            s =
              l &&
              (function (e) {
                e.newsType
                var t = Ct()(e, Ut)
                return Object.keys(t).map(function (e) {
                  return vt(e)
                })
              })(l),
            I = {}
          switch (te.g[a].scribeComponent) {
            case te.q.LANDING_PAGE:
              I = { access_status: e }
              break
            case te.q.NOTABILITY_CATEGORY:
              I = { meets_threshold: c, notability_category: o }
              break
            case te.q.NOTABILITY_SUBCATEGORY:
              I = { meets_threshold: c, notability_category: o, category_subtype: E }
              break
            case te.q.NOTABILITY_METHOD:
            case te.q.NOTABILITY_INPUT:
              I = { meets_threshold: c, notability_category: o, category_subtype: E, notability_method: s }
              break
            case te.q.AUTHENTICITY_TYPE:
              I = { notability_category: o, category_subtype: E, authenticity_type: t }
              break
            case te.q.ID_UPLOAD:
              I = { notability_category: o, category_subtype: E, authenticity_type: t, id_type: i }
              break
            case te.q.REVIEW_SUBMIT:
            case te.q.THANK_YOU:
              I = {
                meets_threshold: c,
                notability_category: o,
                category_subtype: E,
                notability_method: s,
                authenticity_type: t,
                id_type: i,
              }
          }
          return {
            verification_application_details: (I = Object.entries(I).reduce(function (e, t) {
              var a = Te()(t, 2),
                n = a[0],
                i = a[1]
              return void 0 === i || (e[n] = i), e
            }, {})),
          }
        },
        Pt = a('855f'),
        Gt = a('p+r5'),
        xt = a('XiMS'),
        Yt = ['isUrlInvalid', 'labelGenerator', 'required', 'value'],
        Vt = 'verification-checkbox-label',
        Bt = Z.a.i33cf691,
        Wt = Z.a.c1df579e,
        wt = Z.a.b679ff69,
        kt = function (e) {
          return (
            Ft()(e, !1, !1) &&
            (function (e) {
              if (e.includes('://')) {
                var t = e.split('://')
                return 'http' === t[0] || 'https' === t[0]
              }
              return !0
            })(e)
          )
        },
        Ht = ue.a.create(function (e) {
          return {
            input: { paddingHorizontal: 0 },
            addFieldText: { alignSelf: 'flex-start', marginLeft: e.borderWidths.medium, paddingTop: e.spaces.space12 },
            checkboxContainer: { paddingTop: 0 },
          }
        }),
        Kt = yt(function (e) {
          var t = e.addFieldText,
            a = void 0 === t ? Bt : t,
            n = e.allowAddFields,
            i = void 0 !== n && n,
            r = e.analytics,
            o = e.buttonText,
            l = void 0 === o ? Wt : o,
            E = e.confirmationText,
            c = e.currentStep,
            s = e.description,
            I = e.formHistory,
            T = e.isNarrow,
            N = e.items,
            u = e.maxItems,
            d = void 0 === u ? 10 : u,
            _ = e.nextFormStep,
            p = e.setFormStepData,
            A = e.setNextFlow,
            R = e.title,
            C = e.updateFormHistory,
            b = q.a.useState(
              (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  a = {},
                  n = e.slice(-1),
                  i = Te()(n, 1)[0],
                  r = void 0 === i ? {} : i
                return (
                  t.length
                    ? t.forEach(function (t, n) {
                        var i,
                          o = null !== (i = e[n]) && void 0 !== i ? i : P()(P()({}, r), {}, { required: !1 })
                        a[n] = P()(P()({}, o), {}, { value: t })
                      })
                    : e.forEach(function (e, t) {
                        a[t] = P()(P()({}, e), {}, { value: '' })
                      }),
                  a
                )
              })(N, I),
            ),
            O = Te()(b, 2),
            m = O[0],
            f = O[1],
            S = q.a.useState(!1),
            L = Te()(S, 2),
            h = L[0],
            y = L[1],
            D = q.a.useState(!1),
            F = Te()(D, 2),
            U = F[0],
            v = F[1],
            g = q.a.useState(!0),
            G = Te()(g, 2),
            x = G[0],
            Y = G[1],
            V = q.a.useState(null),
            B = Te()(V, 2),
            W = B[0],
            w = B[1],
            k = N.length
          q.a.useEffect(
            function () {
              var e = Object(Ce.a)(m),
                t = (i ? e.slice(0, k) : e).every(function (e) {
                  return kt(e.value)
                }),
                a = !t || !(!E || U)
              y(t), Y(a)
            },
            [i, E, m, U, k],
          )
          var H = function (e, t) {
            w(
              setTimeout(function () {
                var a = !kt(e)
                return f(P()(P()({}, m), {}, z()({}, t, P()(P()({}, m[t]), {}, { isUrlInvalid: a, value: e }))))
              }, 2e3),
            )
          }
          return q.a.createElement(
            _e.a,
            { style: [de.container, T && de.narrowContainer] },
            q.a.createElement(
              pe.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: Ne.b,
                size: 'title4',
                style: de.header,
                weight: 'heavy',
              },
              R,
            ),
            q.a.createElement(
              _e.a,
              { style: de.scrollableContainer },
              s && q.a.createElement(pe.b, { color: 'gray700' }, s),
              q.a.createElement(
                _e.a,
                { accessibilityLabelledBy: Ne.b, accessibilityRole: 'group', style: de.contentContainer },
                Object.keys(m).map(function (e, t) {
                  var a = m[e],
                    n = a.isUrlInvalid,
                    i = a.labelGenerator,
                    r = void 0 === i ? null : i,
                    o = (a.required, a.value),
                    l = Ct()(a, Yt),
                    E = l.label || '',
                    s = l.name || ''.concat(c, '-').concat(e),
                    I = l.errorText || wt,
                    T = Pt.a.getFormattedCount(t + 1),
                    N = r ? r({ n: T }) : E
                  return q.a.createElement(
                    Gt.a,
                    M()({}, l, {
                      errorText: I,
                      invalid: n,
                      key: e,
                      label: N,
                      name: s,
                      onBlur: function (t) {
                        return (function (e, t) {
                          clearTimeout(W)
                          var a = !kt(e.target.value)
                          return f(P()(P()({}, m), {}, z()({}, t, P()(P()({}, m[t]), {}, { isUrlInvalid: a }))))
                        })(t, e)
                      },
                      onChange: function (t) {
                        return (function (e, t) {
                          clearTimeout(W)
                          var a = !1,
                            n = e.target.value
                          return (
                            m[t].isUrlInvalid ? (a = !kt(n)) : H(n, t),
                            f(P()(P()({}, m), {}, z()({}, t, P()(P()({}, m[t]), {}, { isUrlInvalid: a, value: n }))))
                          )
                        })(t, e)
                      },
                      style: Ht.input,
                      value: o,
                    }),
                  )
                }),
                i && h && Object.keys(m).length < d
                  ? q.a.createElement(
                      pe.b,
                      {
                        color: 'primary',
                        onPress: function () {
                          return f(
                            (function (e) {
                              var t = Object.keys(e).length
                              return P()(
                                P()({}, e),
                                {},
                                z()({}, t, P()(P()({}, e[t - 1]), {}, { required: !1, value: '' })),
                              )
                            })(m),
                          )
                        },
                        style: Ht.addFieldText,
                      },
                      a,
                    )
                  : null,
              ),
              E &&
                q.a.createElement(
                  _e.a,
                  { style: [de.contentContainer, de.checkboxContainer, Ht.checkboxContainer] },
                  q.a.createElement(
                    _e.a,
                    { style: de.checkbox },
                    q.a.createElement(xt.a, {
                      accessibilityLabelledBy: Vt,
                      checked: U,
                      onChange: function () {
                        return v(!U)
                      },
                    }),
                  ),
                  q.a.createElement(
                    _e.a,
                    { nativeID: Vt, style: de.checkboxText },
                    q.a.createElement(pe.b, { color: 'gray700' }, E),
                  ),
                ),
            ),
            q.a.createElement(
              Ae.a,
              {
                disabled: x,
                onClick: function () {
                  var e = (function (e) {
                      var t = {}
                      return (
                        Object(Ce.a)(e).forEach(function (e) {
                          if (e.dataKey) {
                            var a,
                              n,
                              i = null !== (a = t[e.dataKey]) && void 0 !== a ? a : [],
                              r = null !== (n = e.value) && void 0 !== n ? n : ''
                            t = P()(P()({}, t), {}, z()({}, e.dataKey, [].concat(Lt()(i), [r])))
                          }
                        }),
                        t
                      )
                    })(m),
                    t = Object.keys(e).map(function (e) {
                      return vt(e)
                    })
                  p(c, e),
                    r.scribe(
                      P()(
                        P()({}, r.contextualScribeNamespace),
                        {},
                        {
                          element: 'CTA',
                          action: 'click',
                          data: P()(
                            P()({}, r.contextualScribeData),
                            {},
                            {
                              verification_application_details: P()(
                                P()({}, r.contextualScribeData.verification_application_details),
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
                        return Object(Ce.a)(e).map(function (e) {
                          var t
                          return null !== (t = e.value) && void 0 !== t ? t : ''
                        })
                      })(m),
                    ),
                    A(_)
                },
                style: de.buttonFixed,
                type: 'brandFilled',
              },
              l,
            ),
          )
        }),
        jt = Kt,
        zt = a('0KEI'),
        Qt = Object(Qe.a)()
          .propsFromState(function () {
            return { errors: qe.q, status: qe.r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(zt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_LOADING',
              ),
              fetchAuthenticationResult: qe.e,
              resetAuthenticationResult: qe.h,
              resetDocumentIdProcess: qe.i,
              setNextFlow: qe.V,
              setPreviousFlow: qe.W,
            }
          })
          .withAnalytics(),
        qt = a('B5iK'),
        $t = a('pXBW'),
        Zt = 'https://help.twitter.com/managing-your-account/twitter-verified-accounts',
        Jt = Z.a.abd587d1,
        Xt = Z.a.i0bba81a,
        ea = Z.a.a6a76e3c,
        ta = Z.a.ecd2abda,
        aa = Z.a.cb70b893,
        na = Z.a.g8b511fe,
        ia = Z.a.c7d50c96,
        ra = Z.a.a68b43ed,
        oa = Z.a.b5e3039f,
        la = Z.a.h146703d,
        Ea = Z.a.ee38d0f0,
        ca = Z.a.cb97ee3e,
        sa = Z.a.hc371f34,
        Ia = Z.a.b9d0ad9f,
        Ta = Z.a.ge137dce,
        Na = Z.a.h2b9a5fd,
        ua = Z.a.baccb708,
        da = Z.a.feadd98c,
        _a = Z.a.j7ae97a9,
        pa = Z.a.c368aa8d,
        Aa = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'j23c6258' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.c076e32d),
        ),
        Ra = Z.a.ded0edad,
        Ca = Z.a.bebae559,
        ba = Z.a.c557161f,
        Oa = Z.a.e2d42628,
        ma = Z.a.jc19b4e7,
        fa = Z.a.fc3ee695,
        Sa = Z.a.i3e65eb4,
        La = Z.a.jd014eba,
        ha = Z.a.a96901cb,
        ya = Z.a.cc424a21,
        Da = Z.a.ibfc1a5a,
        Fa = Z.a.e1c78795,
        Ua = Z.a.cf93bcbf,
        va = Z.a.a7f1cff6,
        Ma = function (e) {
          return { title: ra, description: e, label: oa }
        },
        ga = function (e) {
          return { title: da, description: e, articleLabelGenerator: Ra, addFieldText: Jt }
        },
        Pa = function (e) {
          return { title: ca, description: e, label: la }
        },
        Ga = function (e) {
          return { title: Oa, description: e, label: ma }
        },
        xa = Z.a.ff2ee0c1,
        Ya = Z.a.j0e2cfa7,
        Va = Z.a.hc61adfb,
        Ba = Z.a.e404203c,
        Wa = Z.a.d2042392,
        wa = Z.a.c365dcc5,
        ka = Z.a.c8ee31da,
        Ha = Z.a.d27beb9e,
        Ka =
          ((i = {}),
          z()(i, te.l.ACTIVISM, xa),
          z()(i, te.l.COMPANY, Ya),
          z()(i, te.l.ENTERTAINMENT, Va),
          z()(i, te.l.GAMING, Ba),
          z()(i, te.l.GOVERNMENT, Wa),
          z()(i, te.l.INFLUENCER_OTHER, wa),
          z()(i, te.l.NEWS, ka),
          z()(i, te.l.SPORTS, Ha),
          i),
        ja = Z.a.cc4b66b5,
        za = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'gee7fae8' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.e492eeb4),
        ),
        Qa = { title: ja, description: za },
        qa = Z.a.b37461a4,
        $a = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd454b49e' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.ece0b9bc),
        ),
        Za = Z.a.b27325f6,
        Ja = Z.a.a5a6affb,
        Xa = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'hd977dd9' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.db252639),
        ),
        en = Z.a.a15326dd,
        tn = Z.a.g704a939,
        an = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e3432573' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.b25b02c1),
        ),
        nn = {
          title: ea,
          description: Xa,
          notEligibleButton: aa,
          notEligibleDescription: an,
          notEligibleTitle: Da,
          items: [
            { helpText: ia, label: na },
            { helpText: Ea, label: la },
            { helpText: en, label: sa },
            { helpText: tn, label: fa },
          ],
        },
        rn = Z.a.c6bd60ec,
        on = Z.a.i97c0925,
        ln = Z.a.a18c6dfb,
        En = Z.a.h0b46533,
        cn = Z.a.ff929feb,
        sn = Z.a.jf537894,
        In = {
          title: qa,
          description: $a,
          items: [
            { helpText: on, label: rn },
            { helpText: En, label: ln },
            { helpText: sn, label: cn },
          ],
        },
        Tn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.j6ef6afa),
        ),
        Nn = Ma(Tn),
        un = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.d42d1629),
        ),
        dn = Pa(un),
        _n = { title: ua, description: Aa, articleLabelGenerator: Ra, addFieldText: Jt },
        pn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ie26d72d' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.ccadfc84),
        ),
        An = { title: ha, description: pn, label: ya, confirmationText: La },
        Rn = Z.a.d2ea2049,
        Cn = Z.a.h753ddd2,
        bn = {
          title: qa,
          description: $a,
          items: [
            { helpText: Ja, label: Za },
            { helpText: Cn, label: Rn },
          ],
        },
        On = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'af3fe861' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.ddb47f56),
        ),
        mn = Z.a.a15326dd,
        fn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a08d6af3' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.bf9e181a),
        ),
        Sn = {
          title: ea,
          description: On,
          notEligibleButton: aa,
          notEligibleDescription: fn,
          notEligibleTitle: Da,
          items: [
            { helpText: ia, label: na },
            { helpText: Ea, label: la },
            { helpText: mn, label: sa },
          ],
        },
        Ln = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.j6ef6afa),
        ),
        hn = Ma(Ln),
        yn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.d42d1629),
        ),
        Dn = Pa(yn),
        Fn = { title: ua, description: Aa, articleLabelGenerator: Ra, addFieldText: Jt },
        Un = (Z.a.I18NFormatMessage, pe.b, Z.a.ccadfc84, Z.a.i3e6aaa5),
        vn = Z.a.bbcbb9e6,
        Mn = {
          title: qa,
          description: $a,
          items: [
            { helpText: sn, label: cn },
            { helpText: En, label: ln },
            { helpText: vn, label: Un },
          ],
        },
        gn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f774e39d' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.e8e39f94),
        ),
        Pn = {
          title: ea,
          description: gn,
          items: [
            { helpText: ia, label: na },
            { helpText: Ea, label: la },
            { helpText: ba, label: Ca },
            { helpText: Na, label: sa },
          ],
        },
        Gn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd8510869' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.e126dd3e),
        ),
        xn = Ma(Gn),
        Yn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'h75e3640' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.gbdf1325),
        ),
        Vn = Pa(Yn),
        Bn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'de6d69a1' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.b0abbb16),
        ),
        Wn = Ga(Bn),
        wn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'be0e8fda' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.g4e815f3),
        ),
        kn = ga(wn),
        Hn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'baed7213' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.i560665d),
        ),
        Kn = Z.a.j0bc23f3,
        jn = { title: ta, description: Hn, confirmationText: Kn },
        zn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c5d688ce' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.eb8eeaf0),
        ),
        Qn = {
          title: ea,
          description: zn,
          items: [
            { helpText: pa, label: _a },
            { helpText: Sa, label: fa },
          ],
        },
        qn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fce3e22d' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.h486f753),
        ),
        $n = ga(qn),
        Zn = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f1b276f0' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.a77ed149),
        ),
        Jn = { title: Xt, description: Zn, label: fa, confirmationText: La },
        Xn = Z.a.aa6228de,
        ei = Z.a.d5b3cbc9,
        ti = Z.a.b5a3e590,
        ai = Z.a.e484f794,
        ni = Z.a.b8d8ea64,
        ii = Z.a.ff27db3c,
        ri = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e2465096' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.jc7215cd),
        ),
        oi = Ma(ri),
        li = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g83bcecc' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.gdb5ae61),
        ),
        Ei = ga(li),
        ci = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f3016c6f' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.icb5913e),
        ),
        si = {
          title: ea,
          description: ci,
          items: [
            { helpText: ia, label: na },
            { helpText: Ea, label: la },
            { helpText: ba, label: Ca },
            { helpText: Na, label: sa },
          ],
        },
        Ii = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'h74144bd' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.af819831),
        ),
        Ti = Ga(Ii),
        Ni = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jef5dfc5' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.d35525bf),
        ),
        ui = Pa(Ni),
        di = {
          title: qa,
          description: $a,
          items: [
            { helpText: ei, label: Xn },
            { helpText: Ja, label: Za },
            { helpText: ai, label: ti },
            { helpText: ii, label: ni },
          ],
        },
        _i = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'gf5a4309' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.cb181ed0),
        ),
        pi = {
          title: ea,
          description: _i,
          items: [
            { helpText: ia, label: na },
            { helpText: Ea, label: la },
            { helpText: ba, label: Ca },
            { helpText: Na, label: sa },
          ],
        },
        Ai = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g2e175b1' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.f6c3d3ff),
        ),
        Ri = Ma(Ai),
        Ci = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efc369c2' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.bad6af53),
        ),
        bi = ga(Ci),
        Oi = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ff03f07c' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.af0cb1b5),
        ),
        mi = Ga(Oi),
        fi = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a3e9dde2' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.h84f1fe0),
        ),
        Si = Pa(fi),
        Li = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c2b8fb3c' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.bd70d5d0),
        ),
        hi = Z.a.c0e57cb2,
        yi = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'da6e5b18' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.h9ec0778),
        ),
        Di = Z.a.f3c605b6,
        Fi = {
          title: ea,
          description: Li,
          items: [
            { helpText: ia, label: na },
            { helpText: Ea, label: la },
            { helpText: Ta, label: sa },
          ],
        },
        Ui = { title: hi, description: yi, items: [{ label: Di }] },
        vi = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.j6ef6afa),
        ),
        Mi = { title: ra, description: vi, label: oa },
        gi = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'bb47d2b9' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.f7998564),
        ),
        Pi = { title: ca, description: gi, label: la },
        Gi = { title: ua, description: Aa, articleLabelGenerator: Ra, addFieldText: Jt },
        xi = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'db930fb2' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.b4e93970),
        ),
        Yi = Z.a.h042d1a5,
        Vi = Z.a.d2310f0b,
        Bi = {
          title: ea,
          description: xi,
          items: [
            { description: Vi, label: Yi },
            { description: Ta, label: _a },
          ],
        },
        Wi = Z.a.ba04b4c1,
        wi = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'dc263ec0' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.jb3e663d),
        ),
        ki = { title: Wi, description: wi, label: Yi },
        Hi = { title: da, description: Aa, articleLabelGenerator: Ra, addFieldText: Jt },
        Ki = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd8b21ebb' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.a7a51b91),
        ),
        ji = { title: va, description: Ki, label: Fa },
        zi = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'i3b4217a' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.c58d2c6b),
        ),
        Qi = Z.a.i9b124b6,
        qi = Z.a.f84a99ee,
        $i = Z.a.j2cb5f50,
        Zi = Z.a.j2472894,
        Ji = Z.a.ha44c13f,
        Xi = Z.a.j8ae9d40,
        er = {
          title: qa,
          description: zi,
          items: [
            { helpText: qi, label: Qi },
            { helpText: Zi, label: $i },
            { helpText: Xi, label: Ji },
          ],
        },
        tr = Z.a.ef1d6175,
        ar = Z.a.f54ba6e6,
        nr = Z.a.dd85d0af,
        ir = Z.a.f0058c60,
        rr = Z.a.f420a711,
        or = Z.a.fb97d22b,
        lr = {
          candidateTitle: tr,
          candidateDescription: ar,
          officialTitle: nr,
          officialDescription: ir,
          confirmButtonLabel: rr,
          declineButtonLabel: or,
        },
        Er = Z.a.e16b1cc8,
        cr = Z.a.cf2ee92e,
        sr = Z.a.g544885e,
        Ir = Z.a.bd0b4542,
        Tr = Z.a.i45b224c,
        Nr = Z.a.fba1dd66,
        ur = Z.a.e95c44dd,
        dr = Z.a.fa5e15e1,
        _r = {
          candidateTitle: Er,
          candidateDescription: cr,
          officeTitle: sr,
          officeDescription: Ir,
          officialTitle: Tr,
          officialDescription: Nr,
          confirmButtonLabel: ur,
          declineButtonLabel: dr,
        },
        pr = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ja62479f' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.c04b4b1b),
        ),
        Ar = ga(pr),
        Rr = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f28bbbb0' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.a60039a6),
        ),
        Cr = ga(Rr),
        br = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b229f4b8' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.ba75f2ad),
        ),
        Or = ga(br),
        mr = Z.a.jdf47e8d,
        fr = Z.a.eeec7315,
        Sr = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ec71430d' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.d9486fbf),
        ),
        Lr = { title: fr, description: Sr, websiteLabel: mr },
        hr = Z.a.b163b653,
        yr = Z.a.d2378d34,
        Dr = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f9e2b0f2' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.e3b02224),
        ),
        Fr = { title: yr, description: Dr, websiteLabel: hr },
        Ur = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a394654e' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.e332fb11),
        ),
        vr = { title: Xt, description: Ur, websiteLabel: hr },
        Mr = Z.a.a05b8445,
        gr = Z.a.hdad12b1,
        Pr = Z.a.d2d7af4b,
        Gr = Z.a.d83e51db,
        xr = {
          title: qa,
          description: $a,
          items: [
            { description: En, label: ln },
            { description: gr, label: Mr },
            { description: Gr, label: Pr },
          ],
        },
        Yr = Z.a.g708cbdb,
        Vr = Z.a.b107ee5b,
        Br = Z.a.e95c44dd,
        Wr = Z.a.fa5e15e1,
        wr = { title: Yr, description: Vr, confirmButtonLabel: Br, declineButtonLabel: Wr },
        kr = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'dcb0da53' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.h04c272b),
        ),
        Hr = Z.a.e8746826,
        Kr = { title: ta, description: kr, confirmationText: Hr },
        jr = Z.a.jc09b420,
        zr = Z.a.gfbd7e58,
        Qr = Z.a.e95c44dd,
        qr = Z.a.fa5e15e1,
        $r = { headline: jr, subtext: zr, actionLabel: Qr, tertiaryActionLabel: qr },
        Zr = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd82a96af' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.j331c658),
        ),
        Jr = Z.a.h0ad4c9d,
        Xr = Z.a.a6553b5f,
        eo = Z.a.a29b2987,
        to = Z.a.ab4eae60,
        ao = {
          title: ea,
          description: Zr,
          items: [
            { description: Xr, label: Jr },
            { description: to, label: eo },
          ],
        },
        no = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd47b4101' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.h02fe64e),
        ),
        io = Z.a.b3fac982,
        ro = { title: Xt, description: no, websiteLabel: Fa, confirmationText: io },
        oo = Z.a.e26dc9e2,
        lo = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a3540593' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.a7df4b84),
        ),
        Eo = { title: oo, description: lo, articleNumerationLabelGenerator: Ra, addFieldText: Jt },
        co = Z.a.e164df2d,
        so = Z.a.i80ff05e,
        Io = Z.a.cf7482eb,
        To = Z.a.cb70b893,
        No = { title: co, description: so, actionLabel: Io, tertiaryActionLabel: To },
        uo = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'edb782e6' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.d575e579),
        ),
        _o = {
          title: ea,
          description: uo,
          items: [
            { description: ia, label: na },
            { description: Ea, label: la },
            { description: ba, label: Ca },
            { description: Ia, label: sa },
          ],
        },
        po = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'cc16af2c' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.ede35c04),
        ),
        Ao = Ma(po),
        Ro = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b42b7001' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.d5dedb7a),
        ),
        Co = Pa(Ro),
        bo = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fd2c6f62' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.ab604a66),
        ),
        Oo = Ga(bo),
        mo = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ec7027cc' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.i532d121),
        ),
        fo = ga(mo),
        So = Z.a.fcb96cfc,
        Lo = Z.a.ddc7d64a,
        ho = Z.a.c4e0d346,
        yo = Z.a.e3ce81fa,
        Do = Z.a.b2808f47,
        Fo = Z.a.db7b3557,
        Uo = {
          title: qa,
          description: $a,
          items: [
            { helpText: Fo, label: Do },
            { helpText: En, label: ln },
            { helpText: Ja, label: Za },
            { helpText: sn, label: cn },
          ],
        },
        vo = {
          title: qa,
          description: $a,
          items: [
            { helpText: Lo, label: So },
            { helpText: yo, label: ho },
            { helpText: En, label: ln },
            { helpText: Ja, label: Za },
          ],
        },
        Mo = q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'a0a9f835' }),
        go = Z.a.bbd9a911,
        Po = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'iba551d5' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.f22a6d0c),
        ),
        Go = { title: ta, description: Mo, confirmationText: go },
        xo = q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'h515e868' }),
        Yo = { title: ta, description: xo, confirmationText: go },
        Vo = { headline: Da, subtext: Po, actionLabel: aa },
        Bo = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd2cd7f89' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.i78c9fd3),
        ),
        Wo = Z.a.he9c5637,
        wo = {
          title: ea,
          description: Bo,
          items: [
            { helpText: ia, label: na },
            { helpText: Ea, label: la },
            { helpText: ba, label: Ca },
            { helpText: Wo, label: Ua },
            { helpText: Na, label: sa },
          ],
        },
        ko = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c68614a2' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.i78b0bd0),
        ),
        Ho = Ma(ko),
        Ko = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b4ea622e' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.i78103dc),
        ),
        jo = Pa(Ko),
        zo = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'acab99f6' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.ebfa8bb3),
        ),
        Qo = Ga(zo),
        qo = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'df0b2577' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.fcfad60b),
        ),
        $o = { title: va, description: qo, label: Fa },
        Zo = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jfda4c28' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.a5e8a43a),
        ),
        Jo = ga(Zo),
        Xo = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g3299df1' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.d9bd3821),
        ),
        el = Z.a.bf06e1d5,
        tl = Z.a.e241d35d,
        al = {
          title: ea,
          description: Xo,
          items: [
            { description: tl, label: _a },
            { description: el, label: Ua },
          ],
        },
        nl = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'id6bbc01' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.a67f27bc),
        ),
        il = Z.a.ad456030,
        rl = Z.a.hbe2e65b,
        ol = {
          title: ea,
          description: nl,
          items: [
            { description: il, label: _a },
            { description: rl, label: Ua },
          ],
        },
        ll = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fbe119c5' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.b8be7ad9),
        ),
        El = { title: va, description: ll, websiteLabel: Fa },
        cl = ga(Aa),
        sl = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'da0e7f32' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.fa437e4d),
        ),
        Il = { title: va, description: sl, websiteLabel: Fa },
        Tl = ga(Aa),
        Nl = Z.a.j24c37b2,
        ul = Z.a.j3da4de9,
        dl = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ca20e39f' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.b436b100),
        ),
        _l = Z.a.ff2ee0c1,
        pl = Z.a.af39265e,
        Al = Z.a.hc61adfb,
        Rl = Z.a.d2042392,
        Cl = Z.a.c365dcc5,
        bl = Z.a.c8ee31da,
        Ol = Z.a.bb51cd79,
        ml =
          ((r = {}),
          z()(r, te.l.ACTIVISM, _l),
          z()(r, te.l.COMPANY, pl),
          z()(r, te.l.ENTERTAINMENT, Al),
          z()(r, te.l.GAMING, Ol),
          z()(r, te.l.GOVERNMENT, Rl),
          z()(r, te.l.INFLUENCER_OTHER, Cl),
          z()(r, te.l.NEWS, bl),
          z()(r, te.l.SPORTS, Ol),
          r),
        fl = Z.a.d2ea2049,
        Sl =
          ((o = {}),
          z()(o, te.n.ACTIVIST, rn),
          z()(o, te.n.CANDIDATE, $i),
          z()(o, te.n.COMPANY, cn),
          z()(o, te.n.CONTENT_CREATOR, Za),
          z()(o, te.n.ENTERTAINMENT_COMPANY, Xn),
          z()(o, te.n.ENTERTAINMENT_INDIVIDUAL, ti),
          z()(o, te.n.EXECUTIVE, Un),
          z()(o, te.n.FREELANCER, Mr),
          z()(o, te.n.GAMING_INDIVIDUAL, Do),
          z()(o, te.n.INFLUENTIAL_INDIVIDUAL, fl),
          z()(o, te.n.JOURNALIST, ln),
          z()(o, te.n.OFFICE, Ji),
          z()(o, te.n.OFFICIAL, Qi),
          z()(o, te.n.ORGANIZATION, Pr),
          z()(o, te.n.PRODUCTION, ni),
          z()(o, te.n.SPORTS_ENTITY, ho),
          z()(o, te.n.SPORTS_INDIVIDUAL, So),
          o),
        Ll = Z.a.fc2a5c92,
        hl = Z.a.jf4b6f7f,
        yl = ul,
        Dl = dl,
        Fl = Z.a.d338f53e,
        Ul = function (e) {
          var t = e.error,
            a = e.onButtonClick,
            n = t instanceof $t.a ? t.status : void 0,
            i = Fl,
            r = Ll,
            o = hl
          return (
            429 === n && ((i = Nl), (r = yl), (o = Dl)),
            q.a.createElement(J.a, {
              actionLabel: i,
              graphicDisplayMode: 'none',
              headline: r,
              onAction: a,
              onClose: X.a,
              subtext: o,
              withCloseButton: !1,
            })
          )
        },
        vl = Z.a.h2d4ba55,
        Ml = Z.a.i2051842,
        gl = (function (e) {
          k()(a, e)
          var t = K()(a)
          function a(e) {
            var n
            return (
              x()(this, a),
              (n = t.call(this, e)),
              z()(W()(n), '_handleErrorButtonClick', function () {
                n.props.resetDocumentIdProcess(), n.props.setPreviousFlow()
              }),
              z()(W()(n), '_isPollingDone', function (e) {
                return e === te.p.NOT_STARTED || e === te.p.CONCLUSIVE || e === te.p.INCONCLUSIVE
              }),
              (n.state = { retryCount: 0 }),
              n
            )
          }
          return (
            V()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.createLocalApiErrorHandler,
                    n = t.fetchAuthenticationResult
                  n().catch(a()),
                    (this._pollingTimer = new qt.b(5e3).interval(function () {
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
                    r === e.status || r !== te.p.CONCLUSIVE || n.length || (this._handleScribe('success'), i())
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
                    P()(
                      P()({}, t.contextualScribeNamespace),
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
                  return t.length || a === te.p.INCONCLUSIVE || a === te.p.NOT_STARTED || 5 === this.state.retryCount
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
                    q.a.createElement(Ul, { onButtonClick: this._handleErrorButtonClick })
                  )
                },
              },
              {
                key: '_renderLoading',
                value: function () {
                  return q.a.createElement(
                    _e.a,
                    { style: de.largeBannerContainer },
                    q.a.createElement(ke, { isNarrow: this.props.isNarrow, type: Be.LOADING }),
                    q.a.createElement(
                      _e.a,
                      { style: [de.container, de.verticalCenter, this.props.isNarrow && de.narrowContainer] },
                      q.a.createElement(
                        pe.b,
                        {
                          accessibilityLevel: 1,
                          accessibilityRole: 'heading',
                          nativeID: Ne.b,
                          size: 'title4',
                          style: de.header,
                          weight: 'heavy',
                        },
                        vl,
                      ),
                      q.a.createElement(pe.b, { color: 'gray700' }, Ml),
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
        })(q.a.Component),
        Pl = Qt(gl),
        Gl = Pl,
        xl = a('AspN'),
        Yl = function (e) {
          var t = Object(qe.u)(e)
          return t ? Object(xl.k)(e, t)[0] : void 0
        },
        Vl = function (e) {
          var t = Object(qe.F)(e)
          return t ? Object(xl.k)(e, t)[0] : void 0
        },
        Bl = Object(Qe.a)()
          .propsFromState(function () {
            return {
              backID: qe.u,
              backImage: Yl,
              documentFormats: qe.A,
              frontID: qe.F,
              frontImage: Vl,
              idCountry: qe.G,
              idType: qe.I,
              isConfirmed: qe.x,
              uploadEntityId: qe.B,
              uploadErrors: qe.C,
              uploadFetchStatus: qe.D,
              uploadRequestError: qe.E,
            }
          })
          .propsFromActions(function () {
            return {
              addMedia: xl.b,
              createLocalApiErrorHandler: Object(zt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_UPLOAD',
              ),
              processMultipleMedia: xl.g,
              removeMedia: xl.h,
              resetAuthenticationResult: qe.h,
              resetDocumentIdProcess: qe.i,
              resetIntakeUpload: qe.k,
              setBackID: qe.Q,
              setFrontID: qe.S,
              setNextFlow: qe.V,
              toggleCheckboxConfirmation: qe.X,
              verifyIdDocument: qe.ab,
            }
          })
          .withAnalytics(),
        Wl = a('LCtV'),
        wl = a('T8pk'),
        kl = a('VPdC'),
        Hl = a('pKoL'),
        Kl = a('rFBM'),
        jl = ['application/pdf', 'image/bmp', 'image/jpeg', 'image/png', 'image/tiff'],
        zl = (function (e) {
          k()(a, e)
          var t = K()(a)
          function a() {
            var e
            x()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              z()(W()(e), '_handleDragDrop', function (t) {
                var a = e.props.onChange,
                  n = t.find(function (e) {
                    return jl.includes(e.type)
                  })
                n && a([n])
              }),
              z()(W()(e), '_renderDragDropTarget', function () {
                var t = e.props,
                  a = t.accessibilityLabel,
                  n = t.onChange
                return q.a.createElement(kl.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !1,
                  accessibilityLabel: a,
                  customMimeTypes: jl,
                  icon: q.a.createElement(wl.a, { style: Ql.mediaPickerIcon }),
                  onChange: n,
                  size: 'small',
                  style: Ql.mediaPicker,
                  withIcon: !0,
                })
              }),
              z()(W()(e), '_getResizeIfNeeded', function (e) {
                var t = e.externalMediaDetails && e.externalMediaDetails.height / e.externalMediaDetails.width
                return t && t > 1 ? 'width' : 'height'
              }),
              z()(W()(e), '_renderPreview', function (t) {
                var a = e.props.onRemove
                return q.a.createElement(Hl.a, {
                  borderRadius: Wl.a.MEDIUM,
                  mediaItem: t,
                  onRemove: a,
                  resizeIfNeeded: e._getResizeIfNeeded(t),
                  style: Ql.mediaPreview,
                  withCloseButton: !0,
                })
              }),
              e
            )
          }
          return (
            V()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mediaItem,
                    a = e.title,
                    n = t ? this._renderPreview(t) : this._renderDragDropTarget()
                  return q.a.createElement(
                    _e.a,
                    { style: Ql.dragDropContainer },
                    q.a.createElement(pe.b, { weight: 'bold' }, a),
                    q.a.createElement(Kl.a, { onFilesAdded: this._handleDragDrop, style: Ql.dragDropComponent }, n),
                  )
                },
              },
            ]),
            a
          )
        })(q.a.Component),
        Ql = ue.a.create(function (e) {
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
        ql = zl,
        $l = a('eyty'),
        Zl = 'verification-checkbox-label',
        Jl = Z.a.ff1d68f7,
        Xl = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b8f15ec4' },
          q.a.createElement(pe.b, { link: Zt }, Z.a.h0ed9034),
        ),
        eE = Z.a.bdada5a5,
        tE = Z.a.edfed0f6,
        aE = Z.a.b08821f3,
        nE = Z.a.b09aade5,
        iE = Z.a.b40ed190,
        rE = Z.a.c6650b55,
        oE = Z.a.d171ed16,
        lE = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd65a41c2' },
          q.a.createElement(pe.b, { link: 'https://twitter.com/privacy' }, Z.a.e9d83172),
        ),
        EE = Z.a.c1df579e,
        cE = (function (e) {
          k()(a, e)
          var t = K()(a)
          function a() {
            var e
            x()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              z()(W()(e), '_handleSubmit', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler,
                  n = t.handleOnClick,
                  i = void 0 === n ? function () {} : n
                ;(0, t.verifyIdDocument)().catch(a()), i()
              }),
              z()(W()(e), '_handleAddBackMedia', function (t) {
                var a = e.props,
                  n = a.addMedia,
                  i = a.processMultipleMedia,
                  r = a.setBackID
                n(t, { location: $l.d.Verification }).then(function (t) {
                  t.map(function (e) {
                    var t = e.id
                    r(t)
                  }),
                    i(t, { onFailure: e._handleRemoveBackID })
                })
              }),
              z()(W()(e), '_handleRemoveBackID', function () {
                var t = e.props,
                  a = t.backID,
                  n = t.removeMedia,
                  i = t.setBackID
                a && (n(a), i(void 0))
              }),
              z()(W()(e), '_handleAddFrontMedia', function (t) {
                var a = e.props,
                  n = a.addMedia,
                  i = a.processMultipleMedia,
                  r = a.setFrontID
                n(t, { location: $l.d.Verification }).then(function (t) {
                  t.map(function (e) {
                    var t = e.id
                    r(t)
                  }),
                    i(t, { onFailure: e._handleRemoveFrontID })
                })
              }),
              z()(W()(e), '_handleRemoveFrontID', function () {
                var t = e.props,
                  a = t.frontID,
                  n = t.removeMedia,
                  i = t.setFrontID
                a && (n(a), i(void 0))
              }),
              z()(W()(e), '_handleCheckboxChange', function () {
                e.props.toggleCheckboxConfirmation()
              }),
              z()(W()(e), '_handleErrorButtonClick', function () {
                e._resetForm(), e.props.resetDocumentIdProcess()
              }),
              z()(W()(e), '_isErrorState', function () {
                var t = e.props,
                  a = t.uploadErrors
                return t.uploadFetchStatus === Fe.a.FAILED || !!a.length
              }),
              z()(W()(e), '_isUploading', function () {
                return e.props.uploadFetchStatus === Fe.a.LOADING
              }),
              z()(W()(e), '_renderCheckbox', function () {
                var t = e.props.isConfirmed
                return q.a.createElement(
                  _e.a,
                  { style: [de.contentContainer, de.checkboxContainer] },
                  q.a.createElement(
                    _e.a,
                    { style: de.checkbox },
                    q.a.createElement(xt.a, {
                      accessibilityLabelledBy: Zl,
                      checked: t,
                      onChange: e._handleCheckboxChange,
                    }),
                  ),
                  q.a.createElement(
                    _e.a,
                    { nativeID: Zl, style: de.checkboxText },
                    q.a.createElement(pe.b, { color: 'gray700' }, oE),
                    q.a.createElement(pe.b, { color: 'gray700', style: de.text }, lE),
                  ),
                )
              }),
              z()(W()(e), '_needsBackside', function () {
                var t = e.props,
                  a = t.documentFormats,
                  n = t.idCountry,
                  i = t.idType
                return a && n && i && a[n].id_types[i].needs_backside
              }),
              z()(W()(e), '_renderUploadTargets', function () {
                var t = e.props,
                  a = t.backImage,
                  n = t.frontImage,
                  i = e._needsBackside(),
                  r = i ? tE : rE,
                  o = i ? eE : iE
                return q.a.createElement(
                  _e.a,
                  { accessibilityLabelledBy: Ne.b, accessibilityRole: 'group', style: sE.gridContainer },
                  q.a.createElement(ql, {
                    accessibilityLabel: r,
                    mediaItem: n,
                    onChange: e._handleAddFrontMedia,
                    onRemove: e._handleRemoveFrontID,
                    title: o,
                  }),
                  i &&
                    q.a.createElement(ql, {
                      accessibilityLabel: nE,
                      mediaItem: a,
                      onChange: e._handleAddBackMedia,
                      onRemove: e._handleRemoveBackID,
                      title: aE,
                    }),
                )
              }),
              e
            )
          }
          return (
            V()(a, [
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
                    P()(
                      P()({}, t.contextualScribeNamespace),
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
                    q.a.createElement(Ul, { error: e, onButtonClick: this._handleErrorButtonClick })
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
                  return q.a.createElement(
                    _e.a,
                    { style: [de.container, i && de.narrowContainer] },
                    q.a.createElement(
                      pe.b,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: Ne.b,
                        size: 'title4',
                        style: de.header,
                        weight: 'heavy',
                      },
                      Jl,
                    ),
                    q.a.createElement(
                      _e.a,
                      { style: de.scrollableContainer },
                      q.a.createElement(pe.b, { color: 'gray700' }, Xl),
                      this._renderUploadTargets(),
                      this._renderCheckbox(),
                    ),
                    q.a.createElement(
                      Ae.a,
                      { disabled: r, onPress: this._handleSubmit, style: de.buttonFixed, type: 'brandFilled' },
                      EE,
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
        })(q.a.Component),
        sE = ue.a.create(function (e) {
          return { gridContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: e.spaces.space16 } }
        }),
        IE = Bl(cE),
        TE = { hasId: !0, hasEmail: !0, hasWebsite: !0 },
        NE =
          ((T = {}),
          z()(T, te.l.ACTIVISM, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype: z()({}, te.b.ACTIVIST, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
          }),
          z()(T, te.l.COMPANY, {
            hasId: !1,
            hasEmail: !0,
            hasWebsite: !0,
            subtype:
              ((l = {}),
              z()(l, te.e.COMPANY, { hasId: !1, hasEmail: !0, hasWebsite: !0 }),
              z()(l, te.e.EXECUTIVE, { hasId: !0, hasEmail: !0, hasWebsite: !0 }),
              l),
          }),
          z()(T, te.l.ENTERTAINMENT, {
            hasId: !1,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((E = {}),
              z()(E, te.f.ENTERTAINMENT_INDIVIDUAL, { hasId: !1, hasEmail: !1, hasWebsite: !1 }),
              z()(E, te.f.ENTERTAINMENT_COMPANY, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              z()(E, te.f.PRODUCTION, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              E),
          }),
          z()(T, te.l.GOVERNMENT, {
            hasId: !1,
            hasEmail: !1,
            hasWebsite: !0,
            subtype: z()({}, te.i.CANDIDATE, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
          }),
          z()(T, te.l.INFLUENCER_OTHER, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((c = {}),
              z()(c, te.j.INFLUENTIAL_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              z()(c, te.j.CONTENT_CREATOR, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              c),
          }),
          z()(T, te.l.NEWS, {
            hasId: !1,
            hasEmail: !0,
            hasWebsite: !0,
            subtype:
              ((s = {}),
              z()(s, te.k.JOURNALIST, { hasId: !0, hasEmail: !0, hasWebsite: !0 }),
              z()(s, te.k.FREELANCER, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              z()(s, te.k.ORGANIZATION, { hasId: !1, hasEmail: !0, hasWebsite: !0 }),
              s),
          }),
          z()(T, te.l.SPORTS, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((I = {}),
              z()(I, te.r.SPORTS_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              z()(I, te.r.SPORTS_ENTITY, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              z()(I, te.r.GAMING_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              I),
          }),
          T),
        uE = Z.a.i79902b4,
        dE = Z.a.fb2fcb5b,
        _E = Z.a.e43425fa,
        pE = Z.a.cb7c2e2e,
        AE = Z.a.a411926a,
        RE = Z.a.g253cddf,
        CE = Z.a.cf93bcbf,
        bE = Z.a.ca5fb0d4,
        OE = Z.a.g40cd2c0,
        mE = { title: uE, description: dE },
        fE =
          ((N = {}),
          z()(N, te.d.IDENTITY_DOCUMENT, { label: _E, subtext: pE }),
          z()(N, te.d.EMAIL, { label: AE, subtext: RE }),
          z()(N, te.d.WEBSITE, { label: CE, subtext: bE }),
          N),
        SE = P()(P()({}, mE), {}, { items: P()({}, fE) }),
        LE = { title: Z.a.a7f1cff6, description: Z.a.ce40e7a5, websiteLabel: CE },
        hE = Z.a.dff1555f,
        yE = Z.a.ed751204,
        DE = Z.a.fbc023bf,
        FE = { headline: hE, subtext: yE, actionLabel: DE, tertiaryActionLabel: Z.a.e785ce06 },
        UE = Z.a.i8d58f3d,
        vE = P()(P()({}, FE), {}, { tertiaryActionLabel: UE }),
        ME = Z.a.eb21eca9,
        gE = P()(P()({}, FE), {}, { tertiaryActionLabel: ME }),
        PE = Z.a.f848a69d,
        GE = Z.a.d59b5365,
        xE = Z.a.bfb01c62,
        YE = { headline: hE, subtext: PE, actionLabel: DE, tertiaryActionLabel: xE },
        VE = P()(P()({}, YE), {}, { subtext: GE }),
        BE = { headline: hE, subtext: PE, actionLabel: DE, tertiaryActionLabel: xE },
        WE = Z.a.ibd16281,
        wE = Z.a.d5254e1b,
        kE = Z.a.h45b00d7,
        HE = Z.a.bd9d7f96,
        KE = Z.a.g32c2900,
        jE = Z.a.e6327f3b,
        zE = Z.a.c7f75eab,
        QE = Z.a.eb08a392,
        qE = Z.a.je4c4696,
        $E = Z.a.dcc23261,
        ZE = Z.a.h96ba9b6,
        JE = Z.a.e4610048,
        XE = Z.a.dedf41f1,
        ec = Z.a.c78e091a,
        tc = Z.a.g5657ec3,
        ac = Z.a.baf718c3,
        nc = Z.a.c65bbbc1,
        ic = Z.a.i31e3606,
        rc = Z.a.d85ef4a7,
        oc = Z.a.ddb19f72,
        lc = Z.a.a8d332f2,
        Ec = Z.a.f7afbaeb,
        cc = Z.a.d4ab0055,
        sc = Z.a.d2a77621,
        Ic = Z.a.e23b92c5,
        Tc = Z.a.b03ae068,
        Nc = Z.a.g0daba49,
        uc = Z.a.h85524c4,
        dc = Z.a.cdcd9cd5,
        _c = Z.a.gcee7aad,
        pc = Z.a.e6dc91b1,
        Ac = Z.a.ga603b22,
        Rc =
          ((y = { header: uE }),
          z()(
            y,
            te.l.ACTIVISM,
            z()({}, te.b.ACTIVIST, {
              description: $E,
              items:
                ((u = {}),
                z()(u, te.d.IDENTITY_DOCUMENT, { label: _E, subtext: pE }),
                z()(u, te.d.WEBSITE, { label: CE, subtext: ZE, description: JE, inputLabel: OE }),
                u),
            }),
          ),
          z()(
            y,
            te.l.INFLUENCER_OTHER,
            z()({}, te.j.INFLUENTIAL_INDIVIDUAL, {
              description: XE,
              items:
                ((d = {}),
                z()(d, te.d.IDENTITY_DOCUMENT, { label: _E, subtext: pE }),
                z()(d, te.d.WEBSITE, { label: CE, subtext: ec, description: tc, inputLabel: OE }),
                d),
            }),
          ),
          z()(
            y,
            te.l.COMPANY,
            ((A = {}),
            z()(A, te.e.COMPANY, {
              description: ac,
              items:
                ((_ = {}),
                z()(_, te.d.EMAIL, { label: AE, subtext: ic }),
                z()(_, te.d.WEBSITE, { label: CE, subtext: HE, description: oc, inputLabel: OE }),
                _),
            }),
            z()(A, te.e.EXECUTIVE, {
              description: nc,
              items:
                ((p = {}),
                z()(p, te.d.IDENTITY_DOCUMENT, { label: _E, subtext: pE }),
                z()(p, te.d.EMAIL, { label: AE, subtext: ic }),
                z()(p, te.d.WEBSITE, { label: CE, subtext: rc, description: lc, inputLabel: OE }),
                p),
            }),
            A),
          ),
          z()(
            y,
            te.l.ENTERTAINMENT,
            ((R = {}),
            z()(R, te.f.ENTERTAINMENT_COMPANY, {
              description: kE,
              items: z()({}, te.d.WEBSITE, { label: CE, subtext: zE, description: oc, inputLabel: OE }),
            }),
            z()(R, te.f.PRODUCTION, {
              description: KE,
              items: z()({}, te.d.WEBSITE, { label: CE, subtext: zE, description: jE, inputLabel: OE }),
            }),
            R),
          ),
          z()(
            y,
            te.l.GOVERNMENT,
            z()({}, te.i.CANDIDATE, {
              description: QE,
              items:
                ((C = {}),
                z()(C, te.d.IDENTITY_DOCUMENT, { label: _E, subtext: pE }),
                z()(C, te.d.WEBSITE, { label: CE, subtext: HE, description: qE, inputLabel: OE }),
                C),
            }),
          ),
          z()(
            y,
            te.l.NEWS,
            ((f = {}),
            z()(f, te.k.FREELANCER, {
              description: cc,
              items:
                ((b = {}),
                z()(b, te.d.IDENTITY_DOCUMENT, { label: _E, subtext: pE }),
                z()(b, te.d.WEBSITE, { label: CE, subtext: Ic, description: WE }),
                b),
            }),
            z()(f, te.k.JOURNALIST, {
              description: Ec,
              items:
                ((O = {}),
                z()(O, te.d.IDENTITY_DOCUMENT, { label: _E, subtext: pE }),
                z()(O, te.d.EMAIL, { label: AE, subtext: sc }),
                z()(O, te.d.WEBSITE, { label: CE, subtext: Ic, description: WE }),
                O),
            }),
            z()(f, te.k.ORGANIZATION, {
              description: Tc,
              items:
                ((m = {}),
                z()(m, te.d.EMAIL, { label: AE, subtext: sc }),
                z()(m, te.d.WEBSITE, { label: CE, subtext: HE, description: wE }),
                m),
            }),
            f),
          ),
          z()(
            y,
            te.l.SPORTS,
            ((h = {}),
            z()(h, te.r.SPORTS_INDIVIDUAL, {
              description: pc,
              items:
                ((S = {}),
                z()(S, te.d.IDENTITY_DOCUMENT, { label: _E, subtext: pE }),
                z()(S, te.d.WEBSITE, { label: CE, subtext: HE, description: Ac }),
                S),
            }),
            z()(h, te.r.SPORTS_ENTITY, {
              description: dc,
              items: z()({}, te.d.WEBSITE, { label: CE, subtext: HE, description: _c }),
            }),
            z()(h, te.r.GAMING_INDIVIDUAL, {
              description: Nc,
              items:
                ((L = {}),
                z()(L, te.d.IDENTITY_DOCUMENT, { label: _E, subtext: pE }),
                z()(L, te.d.WEBSITE, { label: CE, subtext: HE, description: uc }),
                L),
            }),
            h),
          ),
          y),
        Cc = function (e, t) {
          return e && t ? Rc[e][t] : SE
        },
        bc = function (e, t, a) {
          var n = Cc(t, a).items,
            i = TE
          t && a ? (i = NE[t].subtype[a]) : t && (i = NE[t])
          var r = []
          return (
            i.hasId &&
              r.push({
                helpText: n[te.d.IDENTITY_DOCUMENT].subtext,
                label: n[te.d.IDENTITY_DOCUMENT].label,
                value: te.d.IDENTITY_DOCUMENT,
              }),
            i.hasEmail &&
              e &&
              r.push({ helpText: n[te.d.EMAIL].subtext, label: n[te.d.EMAIL].label, value: te.d.EMAIL }),
            i.hasWebsite &&
              r.push({ helpText: n[te.d.WEBSITE].subtext, label: n[te.d.WEBSITE].label, value: te.d.WEBSITE }),
            r
          )
        },
        Oc = Object.freeze(
          ((D = {}),
          z()(D, te.h.AUTHENTICITY_TYPE_SELECT, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              n = e.userEmail
            return {
              type: 'radio',
              props: {
                description: Cc(t, a).description,
                getNextFormStep: function (e) {
                  switch (e) {
                    case te.d.IDENTITY_DOCUMENT:
                      return te.h.INTAKE_TYPE_SELECT
                    case te.d.EMAIL:
                      return te.h.EMAIL_VERIFICATION
                    case te.d.WEBSITE:
                      return te.h.SITE_VERIFICATION
                    default:
                      return te.h.THANK_YOU
                  }
                },
                items: bc(n, t, a),
                title: SE.title,
              },
            }
          }),
          z()(D, te.h.SITE_VERIFICATION, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              n = Cc(t, a).items[te.d.WEBSITE]
            return {
              type: 'input',
              props: {
                title: LE.title,
                description: n.description || LE.description,
                items: [{ dataKey: te.c.WEBSITE, label: n.inputLabel || LE.websiteLabel, required: !0 }],
              },
            }
          }),
          z()(D, te.h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, function (e) {
            var t,
              a,
              n,
              i,
              r,
              o = e.notabilityCategory,
              l = e.notabilityData,
              E = e.notabilitySubcategory,
              c = e.setFormStepData,
              s = e.setNextFlow,
              I = e.setPreviousFlow,
              T = []
            switch (o) {
              case te.l.COMPANY:
              case te.l.ACTIVISM:
                T = null !== (t = null == l ? void 0 : l.leadershipReferenceUrl) && void 0 !== t ? t : []
                break
              case te.l.INFLUENCER_OTHER:
              case te.l.ENTERTAINMENT:
                T = null !== (a = null == l ? void 0 : l.mainReferenceUrl) && void 0 !== a ? a : []
                break
              case te.l.GOVERNMENT:
                T = null !== (n = null == l ? void 0 : l.publicReferenceUrl) && void 0 !== n ? n : []
                break
              case te.l.NEWS:
                T = null !== (i = null == l ? void 0 : l.authorReferenceUrl) && void 0 !== i ? i : []
                break
              case te.l.SPORTS:
                T = null !== (r = null == l ? void 0 : l.teamReferenceUrl) && void 0 !== r ? r : []
            }
            var N = FE,
              u = function () {
                return s(te.h.AUTHENTICITY_TYPE_SELECT)
              }
            switch (E) {
              case te.n.CONTENT_CREATOR:
                ;(N = VE),
                  (u = function () {
                    return I()
                  })
                break
              case te.n.ENTERTAINMENT_INDIVIDUAL:
                ;(N = YE),
                  (u = function () {
                    return I()
                  })
                break
              case te.n.OFFICE:
                ;(N = gE),
                  (u = function () {
                    c(te.h.AUTHENTICITY_TYPE_SELECT, te.d.EMAIL), s(te.h.EMAIL_VERIFICATION)
                  })
                break
              case te.n.OFFICIAL:
                ;(N = vE),
                  (u = function () {
                    c(te.h.AUTHENTICITY_TYPE_SELECT, te.d.IDENTITY_DOCUMENT), s(te.h.INTAKE_TYPE_SELECT)
                  })
            }
            return {
              type: 'info',
              props: P()(
                P()({}, N),
                {},
                {
                  onAction: function () {
                    c(te.h.AUTHENTICITY_TYPE_SELECT, te.d.WEBSITE),
                      c(te.h.SITE_VERIFICATION, z()({}, te.c.WEBSITE, T)),
                      s(te.h.REVIEW_SUBMIT)
                  },
                  onTertiaryAction: function () {
                    return u()
                  },
                },
              ),
            }
          }),
          z()(D, te.h.WEBSITE_REFERENCE_CONFIRM_PROCEED, { type: 'info', props: P()({}, BE) }),
          D),
        ),
        mc =
          (a('i4UL'),
          Object.freeze(
            ((F = {}),
            z()(F, te.h.NOTABILITY_CATEGORY_SELECT, function (e) {
              e.followersEligible, e.mentionsEligible
              return {
                type: 'radio',
                props: {
                  description: Qa.description,
                  getNextFormStep: function (e) {
                    switch (e) {
                      case te.l.ACTIVISM:
                        return te.h.ACTIVIST_SUBCATEGORY
                      case te.l.INFLUENCER_OTHER:
                        return te.h.INFLUENCER_SUBCATEGORY
                      case te.l.COMPANY:
                        return te.h.COMPANY_SUBCATEGORY
                      case te.l.ENTERTAINMENT:
                        return te.h.ENTERTAINMENT_QUALIFICATIONS
                      case te.l.GOVERNMENT:
                        return te.h.GOVERNMENT_SUBCATEGORY
                      case te.l.NEWS:
                        return te.h.NEWS_QUALIFICATIONS
                      case te.l.SPORTS:
                        return te.h.SPORTS_SUBCATEGORY
                      case te.l.GAMING:
                        return te.h.GAMING_SUBCATEGORY
                      default:
                        return null
                    }
                  },
                  items: [
                    { label: Ka[te.l.ACTIVISM], value: te.l.ACTIVISM },
                    { label: Ka[te.l.COMPANY], value: te.l.COMPANY },
                    { label: Ka[te.l.ENTERTAINMENT], value: te.l.ENTERTAINMENT },
                    { label: Ka[te.l.GAMING], value: te.l.GAMING },
                    { label: Ka[te.l.GOVERNMENT], value: te.l.GOVERNMENT },
                    { label: Ka[te.l.NEWS], value: te.l.NEWS },
                    { label: Ka[te.l.SPORTS], value: te.l.SPORTS },
                    { label: Ka[te.l.INFLUENCER_OTHER], value: te.l.INFLUENCER_OTHER },
                  ],
                  title: Qa.title,
                },
              }
            }),
            z()(F, te.h.ACTIVIST_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: nn.title,
                description: nn.description,
                items: [
                  P()(P()({}, nn.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, nn.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, nn.items[2]), {}, { value: te.m.NEWS }),
                  P()(P()({}, nn.items[3]), {}, { value: te.m.LEADERSHIP }),
                ],
                getNextFormStep: function (e) {
                  return e === te.m.GOOGLE
                    ? te.h.ACTIVIST_GOOGLE_TRENDS
                    : e === te.m.WIKIPEDIA
                    ? te.h.ACTIVIST_WIKIPEDIA
                    : e === te.m.NEWS
                    ? te.h.ACTIVIST_NEWS
                    : e === te.m.LEADERSHIP
                    ? te.h.ACTIVIST_LEADERSHIP
                    : void 0
                },
              },
            }),
            z()(F, te.h.ACTIVIST_SUBCATEGORY, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'radio',
                props: {
                  title: In.title,
                  description: In.description,
                  items: [
                    P()(P()({}, In.items[0]), {}, { value: te.b.ACTIVIST }),
                    P()(P()({}, In.items[1]), {}, { value: te.k.JOURNALIST }),
                    P()(P()({}, In.items[2]), {}, { value: te.e.COMPANY }),
                  ],
                  getNextFormStep: function (e) {
                    return e === te.b.ACTIVIST
                      ? a || i
                        ? te.h.ACTIVIST_QUALIFICATIONS
                        : te.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE
                      : e === te.k.JOURNALIST
                      ? te.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION
                      : e === te.e.COMPANY
                      ? te.h.COMPANY_NOTABILITY_METHOD
                      : void 0
                  },
                },
              }
            }),
            z()(F, te.h.ACTIVIST_GOOGLE_TRENDS, {
              type: 'input',
              props: {
                title: Nn.title,
                description: Nn.description,
                items: [{ dataKey: te.m.GOOGLE, label: Nn.label, required: !0 }],
              },
            }),
            z()(F, te.h.ACTIVIST_LEADERSHIP, {
              type: 'input',
              props: {
                title: An.title,
                description: An.description,
                items: [{ dataKey: te.m.LEADERSHIP, label: An.label, required: !0 }],
                confirmationText: An.confirmationText,
              },
            }),
            z()(F, te.h.ACTIVIST_NEWS, {
              type: 'input',
              props: {
                title: _n.title,
                description: _n.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: _n.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: _n.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.ACTIVIST_WIKIPEDIA, {
              type: 'input',
              props: {
                title: dn.title,
                description: dn.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: dn.label, required: !0 }],
              },
            }),
            z()(F, te.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE, {
              type: 'info',
              props: {
                headline: nn.notEligibleTitle,
                subtext: nn.notEligibleDescription,
                actionLabel: nn.notEligibleButton,
              },
            }),
            z()(F, te.h.COMPANY_SUBCATEGORY, {
              type: 'radio',
              props: P()(
                P()({}, Mn),
                {},
                {
                  items: [
                    P()(P()({}, Mn.items[0]), {}, { value: te.e.COMPANY }),
                    P()(P()({}, Mn.items[1]), {}, { value: te.k.JOURNALIST }),
                    P()(P()({}, Mn.items[2]), {}, { value: te.e.EXECUTIVE }),
                  ],
                  getNextFormStep: function (e) {
                    return e === te.e.COMPANY
                      ? te.h.COMPANY_NOTABILITY_METHOD
                      : e === te.e.EXECUTIVE
                      ? te.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM
                      : e === te.k.JOURNALIST
                      ? te.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION
                      : void 0
                  },
                },
              ),
            }),
            z()(F, te.h.COMPANY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = [
                  P()(P()({}, Pn.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, Pn.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, Pn.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, Pn.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, Pn),
                  {},
                  {
                    items: a ? n : n.slice(0, -1),
                    getNextFormStep: function (e) {
                      return e === te.m.GOOGLE
                        ? te.h.COMPANY_GOOGLE_TRENDS
                        : e === te.m.WIKIPEDIA
                        ? te.h.COMPANY_WIKIPEDIA
                        : e === te.m.STOCK
                        ? te.h.COMPANY_STOCK_EXCHANGE
                        : e === te.m.NEWS
                        ? te.h.COMPANY_NEWS_REFERENCE
                        : void 0
                    },
                  },
                ),
              }
            }),
            z()(F, te.h.COMPANY_GOOGLE_TRENDS, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: xn.title,
                  description: xn.description,
                  items: [{ dataKey: te.m.GOOGLE, label: xn.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.COMPANY_WIKIPEDIA, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Vn.title,
                  description: Vn.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: Vn.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.COMPANY_STOCK_EXCHANGE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Wn.title,
                  description: Wn.description,
                  items: [{ dataKey: te.m.STOCK, label: Wn.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.COMPANY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: kn.title,
                description: kn.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: kn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: kn.addFieldText,
              },
            }),
            z()(F, te.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: P()({}, jn) }),
            z()(F, te.h.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: P()(
                P()({}, Qn),
                {},
                {
                  items: [
                    P()(P()({}, Qn.items[0]), {}, { value: te.m.NEWS }),
                    P()(P()({}, Qn.items[1]), {}, { value: te.m.LEADERSHIP }),
                  ],
                  getNextFormStep: function (e) {
                    return e === te.m.NEWS
                      ? te.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE
                      : e === te.m.LEADERSHIP
                      ? te.h.COMPANY_INDIVIDUAL_LEADERSHIP
                      : void 0
                  },
                },
              ),
            }),
            z()(F, te.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: $n.title,
                description: $n.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: $n.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: $n.addFieldText,
              },
            }),
            z()(F, te.h.COMPANY_INDIVIDUAL_LEADERSHIP, {
              type: 'input',
              props: {
                title: Jn.title,
                description: Jn.description,
                items: [{ dataKey: te.m.LEADERSHIP, label: Jn.label, required: !0 }],
                confirmationText: Jn.confirmationText,
              },
            }),
            z()(F, te.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'input',
                props: {
                  title: Ri.title,
                  description: Ri.description,
                  items: [{ dataKey: te.m.GOOGLE, label: Ri.label, required: !0 }],
                  nextFormStep: a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: bi.title,
                description: bi.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: bi.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: bi.addFieldText,
              },
            }),
            z()(F, te.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n,
                r = [
                  P()(P()({}, pi.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, pi.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, pi.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, pi.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, pi),
                  {},
                  {
                    items: a || i ? r : r.slice(0, -1),
                    getNextFormStep: function (e) {
                      return e === te.m.GOOGLE
                        ? te.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS
                        : e === te.m.WIKIPEDIA
                        ? te.h.ENTERTAINMENT_COMPANY_WIKIPEDIA
                        : e === te.m.STOCK
                        ? te.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE
                        : e === te.m.NEWS
                        ? te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE
                        : void 0
                    },
                  },
                ),
              }
            }),
            z()(F, te.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'input',
                props: {
                  title: mi.title,
                  description: mi.description,
                  items: [{ dataKey: te.m.STOCK, label: mi.label, required: !0 }],
                  nextFormStep: a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_COMPANY_WIKIPEDIA, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'input',
                props: {
                  title: Si.title,
                  description: Si.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: Si.label, required: !0 }],
                  nextFormStep: a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
              type: 'input',
              props: {
                title: ki.title,
                description: ki.description,
                items: [{ dataKey: te.m.IMDB, label: ki.label, required: !0 }],
              },
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
              type: 'input',
              props: {
                title: ji.title,
                description: ji.description,
                items: [{ dataKey: te.m.MAIN, label: ji.label, required: !0 }],
              },
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
              type: 'input',
              props: {
                title: Hi.title,
                description: Hi.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: kn.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Hi.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Bi.title,
                description: Bi.description,
                items: [
                  { helpText: Bi.items[0].description, label: Bi.items[0].label, value: te.m.IMDB },
                  { helpText: Bi.items[1].description, label: Bi.items[1].label, value: te.m.NEWS },
                ],
                getNextFormStep: function (e) {
                  return e === te.m.IMDB
                    ? te.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL
                    : e === te.m.NEWS
                    ? te.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS
                    : void 0
                },
              },
            }),
            z()(F, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'input',
                props: {
                  title: oi.title,
                  description: oi.description,
                  items: [{ dataKey: te.m.GOOGLE, label: oi.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: Ei.title,
                description: Ei.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Ei.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Ei.addFieldText,
              },
            }),
            z()(F, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n,
                r = [
                  P()(P()({}, si.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, si.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, si.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, si.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, si),
                  {},
                  {
                    items: a || i ? r : r.slice(0, -1),
                    getNextFormStep: function (e) {
                      return e === te.m.GOOGLE
                        ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS
                        : e === te.m.WIKIPEDIA
                        ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA
                        : e === te.m.STOCK
                        ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE
                        : e === te.m.NEWS
                        ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE
                        : void 0
                    },
                  },
                ),
              }
            }),
            z()(F, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'input',
                props: {
                  title: Ti.title,
                  description: Ti.description,
                  items: [{ dataKey: te.m.STOCK, label: Ti.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'input',
                props: {
                  title: ui.title,
                  description: ui.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: ui.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_QUALIFICATIONS, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'radio',
                props: {
                  title: di.title,
                  description: di.description,
                  items: [
                    P()(P()({}, di.items[0]), {}, { value: te.f.ENTERTAINMENT_COMPANY }),
                    P()(P()({}, di.items[1]), {}, { value: te.j.CONTENT_CREATOR }),
                    P()(P()({}, di.items[2]), {}, { value: te.f.ENTERTAINMENT_INDIVIDUAL }),
                    P()(P()({}, di.items[3]), {}, { value: te.f.PRODUCTION }),
                  ],
                  getNextFormStep: function (e) {
                    return e === te.f.ENTERTAINMENT_COMPANY
                      ? te.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD
                      : e === te.f.ENTERTAINMENT_INDIVIDUAL
                      ? te.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS
                      : e === te.f.PRODUCTION
                      ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD
                      : e === te.j.CONTENT_CREATOR
                      ? a || i
                        ? te.h.CONTENT_CREATOR_QUALIFICATIONS
                        : te.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE
                      : void 0
                  },
                },
              }
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
              type: 'info',
              props: {
                headline: lr.candidateTitle,
                subtext: lr.candidateDescription,
                actionLabel: lr.confirmButtonLabel,
                tertiaryActionLabel: lr.declineButtonLabel,
              },
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Ar.title,
                description: Ar.description,
                items: Lt()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: Ar.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Ar.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: _r.candidateTitle,
                subtext: _r.candidateDescription,
                actionLabel: _r.confirmButtonLabel,
                tertiaryActionLabel: _r.declineButtonLabel,
                tertiaryActionLink: ce,
              },
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: Lr.title,
                description: Lr.description,
                items: [{ dataKey: te.m.PUBLIC, label: Lr.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Cr.title,
                description: Cr.description,
                items: Lt()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: Cr.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Cr.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: _r.officeTitle,
                subtext: _r.officeDescription,
                actionLabel: _r.confirmButtonLabel,
                tertiaryActionLabel: _r.declineButtonLabel,
                tertiaryActionLink: ce,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: Fr.title,
                description: Fr.description,
                items: [{ dataKey: te.m.PUBLIC, label: Fr.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
              type: 'info',
              props: {
                headline: lr.officialTitle,
                subtext: lr.officialDescription,
                actionLabel: lr.confirmButtonLabel,
                tertiaryActionLabel: lr.declineButtonLabel,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Or.title,
                description: Or.description,
                items: Lt()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: Or.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Or.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: _r.officialTitle,
                subtext: _r.officialDescription,
                actionLabel: _r.confirmButtonLabel,
                tertiaryActionLabel: _r.declineButtonLabel,
                tertiaryActionLink: ce,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: vr.title,
                description: vr.description,
                items: [{ dataKey: te.m.PUBLIC, label: vr.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.GOVERNMENT_SUBCATEGORY, {
              type: 'radio',
              props: {
                title: er.title,
                description: er.description,
                items: [
                  P()(P()({}, er.items[0]), {}, { value: te.i.OFFICIAL }),
                  P()(P()({}, er.items[1]), {}, { value: te.i.CANDIDATE }),
                  P()(P()({}, er.items[2]), {}, { value: te.i.OFFICE }),
                ],
                getNextFormStep: function (e) {
                  return e === te.i.OFFICIAL
                    ? te.h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM
                    : e === te.i.CANDIDATE
                    ? te.h.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM
                    : e === te.i.OFFICE
                    ? te.h.GOVERNMENT_OFFICE_PROFILE_CONFIRM
                    : void 0
                },
              },
            }),
            z()(F, te.h.CONTENT_CREATOR_GOOGLE_TRENDS, {
              type: 'input',
              props: {
                title: Mi.title,
                description: Mi.description,
                items: [{ dataKey: te.m.GOOGLE, label: Mi.label, required: !0 }],
              },
            }),
            z()(F, te.h.CONTENT_CREATOR_NEWS, {
              type: 'input',
              props: {
                title: Gi.title,
                description: Gi.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Gi.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Gi.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.CONTENT_CREATOR_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Fi.title,
                description: Fi.description,
                items: [
                  P()(P()({}, Fi.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, Fi.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, Fi.items[2]), {}, { value: te.m.NEWS }),
                ],
                getNextFormStep: function (e) {
                  return e === te.m.GOOGLE
                    ? te.h.CONTENT_CREATOR_GOOGLE_TRENDS
                    : e === te.m.WIKIPEDIA
                    ? te.h.CONTENT_CREATOR_WIKIPEDIA
                    : e === te.m.NEWS
                    ? te.h.CONTENT_CREATOR_NEWS
                    : void 0
                },
              },
            }),
            z()(F, te.h.CONTENT_CREATOR_WIKIPEDIA, {
              type: 'input',
              props: {
                title: Pi.title,
                description: Pi.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: Pi.label, required: !0 }],
              },
            }),
            z()(F, te.h.CREATOR_PROFILE, {
              type: 'input',
              props: {
                title: Ui.title,
                description: Ui.description,
                items: [{ dataKey: te.m.MAIN, label: Ui.items[0].label, required: !0 }],
              },
            }),
            z()(F, te.h.INFLUENCER_GOOGLE_TRENDS, {
              type: 'input',
              props: {
                title: hn.title,
                description: hn.description,
                items: [{ dataKey: te.m.GOOGLE, label: hn.label, required: !0 }],
              },
            }),
            z()(F, te.h.INFLUENCER_NEWS, {
              type: 'input',
              props: {
                title: Fn.title,
                description: Fn.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Fn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Fn.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.INFLUENCER_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Sn.title,
                description: Sn.description,
                items: [
                  P()(P()({}, Sn.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, Sn.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, Sn.items[2]), {}, { value: te.m.NEWS }),
                ],
                getNextFormStep: function (e) {
                  return e === te.m.GOOGLE
                    ? te.h.INFLUENCER_GOOGLE_TRENDS
                    : e === te.m.WIKIPEDIA
                    ? te.h.INFLUENCER_WIKIPEDIA
                    : e === te.m.NEWS
                    ? te.h.INFLUENCER_NEWS
                    : void 0
                },
              },
            }),
            z()(F, te.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE, {
              type: 'info',
              props: {
                headline: Sn.notEligibleTitle,
                subtext: Sn.notEligibleDescription,
                actionLabel: Sn.notEligibleButton,
              },
            }),
            z()(F, te.h.INFLUENCER_SUBCATEGORY, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'radio',
                props: P()(
                  P()({}, bn),
                  {},
                  {
                    items: [
                      P()(P()({}, bn.items[0]), {}, { value: te.j.CONTENT_CREATOR }),
                      P()(P()({}, bn.items[1]), {}, { value: te.j.INFLUENTIAL_INDIVIDUAL }),
                    ],
                    getNextFormStep: function (e) {
                      return e === te.j.CONTENT_CREATOR
                        ? a || i
                          ? te.h.CONTENT_CREATOR_QUALIFICATIONS
                          : te.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE
                        : e === te.j.INFLUENTIAL_INDIVIDUAL
                        ? a || i
                          ? te.h.INFLUENCER_QUALIFICATIONS
                          : te.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE
                        : void 0
                    },
                  },
                ),
              }
            }),
            z()(F, te.h.INFLUENCER_WIKIPEDIA, {
              type: 'input',
              props: {
                title: Dn.title,
                description: Dn.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: Dn.label, required: !0 }],
              },
            }),
            z()(F, te.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Eo.title,
                description: Eo.description,
                items: Lt()(
                  Array(3).fill({
                    dataKey: te.m.ARTICLES,
                    labelGenerator: Eo.articleNumerationLabelGenerator,
                    required: !0,
                  }),
                ),
                addFieldText: Eo.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Eo.title,
                description: Eo.description,
                items: Lt()(
                  Array(3).fill({
                    dataKey: te.m.ARTICLES,
                    labelGenerator: Eo.articleNumerationLabelGenerator,
                    required: !0,
                  }),
                ),
                addFieldText: Eo.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
              type: 'input',
              props: {
                title: ro.title,
                description: ro.description,
                items: [{ dataKey: te.m.AUTHOR, label: ro.websiteLabel, required: !0 }],
                confirmationText: ro.confirmationText,
              },
            }),
            z()(F, te.h.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, {
              type: 'info',
              props: {
                headline: No.title,
                subtext: No.description,
                actionLabel: No.actionLabel,
                tertiaryActionLabel: No.tertiaryActionLabel,
              },
            }),
            z()(F, te.h.NEWS_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: xr.title,
                description: xr.description,
                items: [
                  { helpText: xr.items[0].description, label: xr.items[0].label, value: te.k.JOURNALIST },
                  { helpText: xr.items[1].description, label: xr.items[1].label, value: te.k.FREELANCER },
                  { helpText: xr.items[2].description, label: xr.items[2].label, value: te.k.ORGANIZATION },
                ],
                getNextFormStep: function (e) {
                  return e === te.k.JOURNALIST
                    ? te.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION
                    : e === te.k.FREELANCER
                    ? te.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS
                    : e === te.k.ORGANIZATION
                    ? te.h.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION
                    : void 0
                },
              },
            }),
            z()(F, te.h.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, {
              type: 'info',
              props: P()(P()({}, $r), {}, { tertiaryActionLink: ce }),
            }),
            z()(F, te.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, { type: 'screenName', props: P()({}, Kr) }),
            z()(F, te.h.NEWS_JOURNALIST_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: ao.title,
                description: ao.description,
                items: [
                  { helpText: ao.items[0].description, label: ao.items[0].label, value: te.m.AUTHOR },
                  { helpText: ao.items[1].description, label: ao.items[1].label, value: te.m.ARTICLES },
                ],
                getNextFormStep: function (e) {
                  return e === te.m.ARTICLES
                    ? te.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS
                    : e === te.m.AUTHOR
                    ? te.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL
                    : void 0
                },
              },
            }),
            z()(F, te.h.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION, {
              type: 'info',
              props: {
                headline: wr.title,
                subtext: wr.description,
                actionLabel: wr.confirmButtonLabel,
                tertiaryActionLabel: wr.declineButtonLabel,
                tertiaryActionLink: ce,
              },
            }),
            z()(F, te.h.NEWS_ORGANIZATION_QUALIFICATIONS, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'radio',
                props: {
                  title: _o.title,
                  description: _o.description,
                  items: [
                    { helpText: _o.items[0].description, label: _o.items[0].label, value: te.m.GOOGLE },
                    { helpText: _o.items[1].description, label: _o.items[1].label, value: te.m.WIKIPEDIA },
                    { helpText: _o.items[2].description, label: _o.items[2].label, value: te.m.STOCK },
                  ].concat(
                    Lt()(
                      a || i
                        ? [{ helpText: _o.items[3].description, label: _o.items[3].label, value: te.m.ARTICLES }]
                        : [],
                    ),
                  ),
                  getNextFormStep: function (e) {
                    return e === te.m.GOOGLE
                      ? te.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL
                      : e === te.m.WIKIPEDIA
                      ? te.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL
                      : e === te.m.STOCK
                      ? te.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL
                      : e === te.m.ARTICLES
                      ? te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS
                      : void 0
                  },
                },
              }
            }),
            z()(F, te.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'input',
                props: {
                  title: Ao.title,
                  description: Ao.description,
                  items: [{ dataKey: te.m.GOOGLE, label: Ao.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
                },
              }
            }),
            z()(F, te.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'input',
                props: {
                  title: Co.title,
                  description: Co.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: Co.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
                },
              }
            }),
            z()(F, te.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'input',
                props: {
                  title: Oo.title,
                  description: Oo.description,
                  items: [{ dataKey: te.m.STOCK, label: Oo.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
                },
              }
            }),
            z()(F, te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: fo.title,
                description: fo.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.ARTICLES, labelGenerator: fo.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: fo.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GAMING_SUBCATEGORY, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'radio',
                props: P()(
                  P()({}, Uo),
                  {},
                  {
                    items: [
                      P()(P()({}, Uo.items[0]), {}, { value: te.r.GAMING_INDIVIDUAL }),
                      P()(P()({}, Uo.items[1]), {}, { value: te.k.JOURNALIST }),
                      P()(P()({}, Uo.items[2]), {}, { value: te.j.CONTENT_CREATOR }),
                      P()(P()({}, Uo.items[3]), {}, { value: te.e.COMPANY }),
                    ],
                    getNextFormStep: function (e) {
                      return e === te.r.GAMING_INDIVIDUAL
                        ? a
                          ? te.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM
                          : te.h.GAMING_INDIVIDUAL_INELIGIBLE
                        : e === te.k.JOURNALIST
                        ? te.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION
                        : e === te.j.CONTENT_CREATOR
                        ? a || i
                          ? te.h.CONTENT_CREATOR_QUALIFICATIONS
                          : te.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE
                        : e === te.e.COMPANY
                        ? te.h.COMPANY_NOTABILITY_METHOD
                        : void 0
                    },
                  },
                ),
              }
            }),
            z()(F, te.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Tl.title,
                description: Tl.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Tl.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Tl.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GAMING_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: {
                title: ol.title,
                description: ol.description,
                items: [
                  { helpText: ol.items[0].description, label: ol.items[0].label, value: te.m.NEWS },
                  { helpText: ol.items[1].description, label: ol.items[1].label, value: te.m.TEAM },
                ],
                getNextFormStep: function (e) {
                  return e === te.m.TEAM
                    ? te.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL
                    : e === te.m.NEWS
                    ? te.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS
                    : void 0
                },
              },
            }),
            z()(F, te.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL, {
              type: 'input',
              props: {
                title: Il.title,
                description: Il.description,
                items: [{ dataKey: te.m.TEAM, label: Il.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: cl.title,
                description: cl.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: cl.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: cl.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
              type: 'input',
              props: {
                title: El.title,
                description: El.description,
                items: [{ dataKey: te.m.TEAM, label: El.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.SPORTS_ENTITY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = [
                  P()(P()({}, wo.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, wo.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, wo.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, wo.items[3]), {}, { value: te.m.TEAM }),
                  P()(P()({}, wo.items[4]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, wo),
                  {},
                  {
                    items: a ? n : n.slice(0, -1),
                    getNextFormStep: function (e) {
                      return e === te.m.GOOGLE
                        ? te.h.SPORTS_ENTITY_GOOGLE_TRENDS
                        : e === te.m.WIKIPEDIA
                        ? te.h.SPORTS_ENTITY_WIKIPEDIA
                        : e === te.m.STOCK
                        ? te.h.SPORTS_ENTITY_STOCK_REFERENCE
                        : e === te.m.TEAM
                        ? te.h.SPORTS_ENTITY_WEBSITE
                        : e === te.m.NEWS
                        ? te.h.SPORTS_ENTITY_NEWS_REFERENCE
                        : void 0
                    },
                  },
                ),
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_GOOGLE_TRENDS, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Ho.title,
                  description: Ho.description,
                  items: [{ dataKey: te.m.GOOGLE, label: Ho.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_WIKIPEDIA, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: jo.title,
                  description: jo.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: jo.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_STOCK_REFERENCE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Qo.title,
                  description: Qo.description,
                  items: [{ dataKey: te.m.STOCK, label: Qo.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_WEBSITE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: $o.title,
                  description: $o.description,
                  items: [{ dataKey: te.m.TEAM, label: $o.label, required: !0 }],
                  nextFormStep: t ? te.h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: Jo.title,
                description: Jo.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Jo.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Jo.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: P()({}, Go) }),
            z()(F, te.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: P()({}, Yo) }),
            z()(F, te.h.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: {
                title: al.title,
                description: al.description,
                items: [
                  { helpText: al.items[0].description, label: al.items[0].label, value: te.m.NEWS },
                  { helpText: al.items[1].description, label: al.items[1].label, value: te.m.TEAM },
                ],
                getNextFormStep: function (e) {
                  return e === te.m.TEAM
                    ? te.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL
                    : e === te.m.NEWS
                    ? te.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS
                    : void 0
                },
              },
            }),
            z()(F, te.h.GAMING_INDIVIDUAL_INELIGIBLE, { type: 'info', props: P()({}, Vo) }),
            z()(F, te.h.SPORTS_SUBCATEGORY, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'radio',
                props: P()(
                  P()({}, vo),
                  {},
                  {
                    items: [
                      P()(P()({}, vo.items[0]), {}, { value: te.r.SPORTS_INDIVIDUAL }),
                      P()(P()({}, vo.items[1]), {}, { value: te.r.SPORTS_ENTITY }),
                      P()(P()({}, vo.items[2]), {}, { value: te.k.JOURNALIST }),
                      P()(P()({}, vo.items[3]), {}, { value: te.j.CONTENT_CREATOR }),
                    ],
                    getNextFormStep: function (e) {
                      return e === te.r.SPORTS_INDIVIDUAL
                        ? te.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM
                        : e === te.r.SPORTS_ENTITY
                        ? te.h.SPORTS_ENTITY_NOTABILITY_METHOD
                        : e === te.k.JOURNALIST
                        ? te.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION
                        : e === te.j.CONTENT_CREATOR
                        ? a || i
                          ? te.h.CONTENT_CREATOR_QUALIFICATIONS
                          : te.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE
                        : void 0
                    },
                  },
                ),
              }
            }),
            F),
          )),
        fc = Object.freeze(
          ((U = {}),
          z()(U, te.h.TEST_INPUT, {
            type: 'input',
            props: {
              title: 'test input form',
              description: 'description here',
              items: [
                { dataKey: te.m.NEWS, label: 'news url', required: !0 },
                { dataKey: te.m.PUBLIC, label: 'public url', required: !1 },
              ],
              allowAddFields: !0,
            },
          }),
          z()(U, te.h.TEST_PIVOT, {
            type: 'pivot',
            props: {
              title: 'test pivot form',
              description: 'description here',
              items: [
                { description: 'go to test input screen', label: 'input', nextStep: te.h.TEST_INPUT },
                { description: 'go to test radio screen', label: 'radio', nextStep: te.h.TEST_RADIO },
              ],
            },
          }),
          z()(U, te.h.TEST_RADIO, function (e) {
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
                      ? te.h.TEST_PIVOT
                      : te.h.TEST_INPUT
                    : 'radio 2' === e
                    ? i
                      ? te.h.TEST_PIVOT
                      : te.h.TEST_INPUT
                    : a || i
                    ? te.h.TEST_PIVOT
                    : te.h.TEST_INPUT
                },
              },
            }
          }),
          U),
        ),
        Sc = Object.freeze(P()(P()(P()({}, Oc), mc), fc)),
        Lc = function (e) {
          var t = Object(qe.y)(e)
          return null != t && t.radioData ? t.radioData : ''
        },
        hc = Object(Qe.a)()
          .propsFromState(function () {
            return { currentStep: qe.z, formHistory: Lc }
          })
          .propsFromActions(function () {
            return { setFormStepData: qe.R, setNextFlow: qe.V, updateFormHistory: qe.Y }
          })
          .withAnalytics(),
        yc = a('fyvP'),
        Dc = Z.a.c1df579e,
        Fc = ue.a.create(function (e) {
          return {
            radioContainer: {
              paddingRight: 'calc('.concat(e.spaces.space12, ' + ').concat(e.borderWidths.medium, ')'),
            },
          }
        }),
        Uc = hc(function (e) {
          var t = e.analytics,
            a = e.buttonText,
            n = void 0 === a ? Dc : a,
            i = e.currentStep,
            r = e.description,
            o = e.footer,
            l = e.formHistory,
            E = e.getNextFormStep,
            c = e.isNarrow,
            s = e.items,
            I = e.setFormStepData,
            T = e.setNextFlow,
            N = e.title,
            u = e.updateFormHistory,
            d = q.a.useState(l),
            _ = Te()(d, 2),
            p = _[0],
            A = _[1]
          q.a.useEffect(
            function () {
              A(l), I(i, l)
            },
            [i, l, I],
          )
          return q.a.createElement(
            _e.a,
            { style: [de.container, c && de.narrowContainer] },
            q.a.createElement(
              pe.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: Ne.b,
                size: 'title4',
                style: de.header,
                weight: 'heavy',
              },
              N,
            ),
            q.a.createElement(
              _e.a,
              { style: de.scrollableContainer },
              r && q.a.createElement(pe.b, { color: 'gray700' }, r),
              q.a.createElement(
                _e.a,
                { style: [de.contentContainer, Fc.radioContainer] },
                q.a.createElement(yc.a, {
                  accessibilityLabel: N,
                  name: ''.concat(N, '-radiogroup'),
                  onChange: function (e, t) {
                    A(t), I(i, t)
                  },
                  options: s,
                  value: p,
                }),
              ),
              o && q.a.createElement(pe.b, { color: 'gray700' }, o),
            ),
            q.a.createElement(
              Ae.a,
              {
                disabled: !p,
                onClick: function () {
                  var e = P()(
                    P()({}, t.contextualScribeNamespace),
                    {},
                    { element: 'CTA', action: 'click', data: t.contextualScribeData },
                  )
                  'notability_qualifications_select' === t.contextualScribeNamespace.component &&
                    (e = P()(
                      P()({}, e),
                      {},
                      {
                        data: P()(
                          P()({}, e.data),
                          {},
                          {
                            verification_application_details: P()(
                              P()({}, e.data.verification_application_details),
                              {},
                              { notability_method: [vt(p)] },
                            ),
                          },
                        ),
                      },
                    )),
                    t.scribe(e),
                    u(p || '')
                  var a = E(p)
                  a && T(a)
                },
                style: de.buttonFixed,
                type: 'brandFilled',
              },
              n,
            ),
          )
        }),
        vc = a('5FtR'),
        Mc = Object(Qe.a)().propsFromActions(function () {
          return { setNextFlow: qe.V }
        }),
        gc = a('EweD'),
        Pc = 'verification-checkbox-label',
        Gc = Z.a.c1df579e,
        xc = Z.a.a6278dcb,
        Yc = function (e) {
          return !e.match(/\W/g)
        },
        Vc = ue.a.create(function (e) {
          return { input: { paddingHorizontal: 0 }, checkboxContainer: { paddingTop: 0 } }
        }),
        Bc = Mc(function (e) {
          var t = e.buttonText,
            a = void 0 === t ? Gc : t,
            n = e.confirmationText,
            i = e.description,
            r = e.isNarrow,
            o = e.setNextFlow,
            l = e.title,
            E = q.a.useState(''),
            c = Te()(E, 2),
            s = c[0],
            I = c[1],
            T = q.a.useState(!1),
            N = Te()(T, 2),
            u = N[0],
            d = N[1],
            _ = q.a.useState(!0),
            p = Te()(_, 2),
            A = p[0],
            R = p[1]
          return (
            q.a.useEffect(
              function () {
                var e = !!s && Yc(s)
                R(!e || !(!n || u))
              },
              [n, u, s, R],
            ),
            q.a.createElement(
              _e.a,
              { style: [de.container, r && de.narrowContainer] },
              q.a.createElement(
                pe.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: Ne.b,
                  size: 'title4',
                  style: de.header,
                  weight: 'heavy',
                },
                l,
              ),
              q.a.createElement(
                _e.a,
                { style: de.scrollableContainer },
                i && q.a.createElement(pe.b, { color: 'gray700' }, i),
                q.a.createElement(
                  _e.a,
                  { accessibilityLabelledBy: Ne.b, accessibilityRole: 'group', style: de.contentContainer },
                  q.a.createElement(Gt.a, {
                    Icon: gc.a,
                    invalid: !Yc(s),
                    label: xc,
                    name: '',
                    onChange: function (e) {
                      return I(e.target.value)
                    },
                    style: Vc.input,
                    value: s,
                  }),
                ),
                n &&
                  q.a.createElement(
                    _e.a,
                    { style: [de.contentContainer, de.checkboxContainer, Vc.checkboxContainer] },
                    q.a.createElement(
                      _e.a,
                      { style: de.checkbox },
                      q.a.createElement(xt.a, {
                        accessibilityLabelledBy: Pc,
                        checked: u,
                        onChange: function () {
                          return d(!u)
                        },
                      }),
                    ),
                    q.a.createElement(
                      _e.a,
                      { nativeID: Pc, style: de.checkboxText },
                      q.a.createElement(pe.b, { color: 'gray700' }, n),
                    ),
                  ),
              ),
              q.a.createElement(
                Ae.a,
                {
                  disabled: A,
                  onClick: function () {
                    return o()
                  },
                  style: de.buttonFixed,
                  type: 'brandFilled',
                },
                a,
              ),
            )
          )
        }),
        Wc = a('7JQg'),
        wc = (a('hBvt'), a('v6aA')),
        kc = Z.a.ec6801cb,
        Hc = Z.a.j24c37b2,
        Kc = function (e) {
          var t,
            a = e.daysForDecision,
            n = void 0 === a ? 14 : a,
            i = e.isNarrow,
            r = e.link,
            o = e.onSurveyClick,
            l = e.surveyUrl,
            E = q.a.useContext(wc.a).featureSwitches.isTrue('identity_verification_notable_demo_survey')
          return q.a.createElement(
            _e.a,
            { style: de.largeBannerContainer },
            q.a.createElement(ke, { isNarrow: i, type: Be.SENT }),
            q.a.createElement(
              _e.a,
              { style: [de.container, de.verticalCenter, i && de.narrowContainer] },
              q.a.createElement(
                pe.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: Ne.b,
                  size: 'title4',
                  style: de.header,
                  weight: 'heavy',
                },
                kc,
              ),
              q.a.createElement(
                pe.b,
                { color: 'gray700' },
                ((t = n),
                q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'a1c39f5b', days: Pt.a.getFormattedCount(t) })),
              ),
              E &&
                l &&
                q.a.createElement(
                  pe.b,
                  { color: 'gray700', style: de.text },
                  q.a.createElement(
                    Z.a.I18NFormatMessage,
                    { $i18n: 'ja826537' },
                    q.a.createElement(
                      pe.b,
                      { link: { pathname: l, openInSameFrame: ee.b.isAndroid() && ee.b.isTwitterApp() }, onClick: o },
                      Z.a.i6ef95ec,
                    ),
                  ),
                ),
              q.a.createElement(
                Ae.a,
                { link: { pathname: r, openInSameFrame: !0 }, style: de.buttonPadded, type: 'brandFilled' },
                Hc,
              ),
            ),
          )
        },
        jc = Z.a.b772cd65,
        zc = Z.a.j3da4de9,
        Qc = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'b7be91be', date: t(a) })
        },
        qc = Z.a.j94e995e,
        $c = Z.a.da458d6c,
        Zc = Z.a.j4ed9f0e,
        Jc = Z.a.b1ade78f,
        Xc = Z.a.b1ade78f,
        es = Z.a.j3da4de9,
        ts = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'jcb00a94', date: t(a) })
        },
        as = Z.a.aab67626,
        ns = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'j92ea4b8', date: t(a) })
        },
        is = Z.a.d3c1e25e,
        rs = q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jcd067dd' },
          q.a.createElement(pe.b, { link: 'https://help.twitter.com/rules-and-policies/twitter-rules' }, Z.a.g0bfb17a),
        ),
        os = function (e) {
          var t,
            a = e.applicationSubmissionTimeInMs,
            n = e.decisionMadeTimeInMs,
            i = e.isNarrow,
            r = e.link,
            o = e.status,
            l = ((t = {}),
            z()(t, te.a.DISABLED, { title: ul, content: dl, button: Nl }),
            z()(t, te.a.INTAKE_PROGRESS, { title: null, content: null, button: null }),
            z()(t, te.a.LOCKED, { title: zc, content: n ? Qc(n) : $c, button: Nl }),
            z()(t, te.a.NEW_ACCOUNT, { title: zc, content: Xc, button: Nl }),
            z()(t, te.a.NOT_ELIGIBLE, { title: zc, content: Jc, button: Nl }),
            z()(t, te.a.NOT_STARTED, { title: null, content: null, button: null }),
            z()(t, te.a.VERIFICATION_DENIED, { title: es, content: n ? ts(n) : qc, button: jc }),
            z()(t, te.a.VERIFICATION_PENDING, { title: as, content: a ? ns(a) : Zc, button: jc }),
            z()(t, te.a.VERIFIED, { title: is, content: rs, button: jc }),
            t)[o],
            E = l.button,
            c = l.content,
            s = l.title
          return s && c
            ? q.a.createElement(
                _e.a,
                { style: [de.container, de.verticalCenter, de.appBarOffset, i && de.narrowContainer] },
                q.a.createElement(
                  pe.b,
                  {
                    accessibilityLevel: 1,
                    accessibilityRole: 'heading',
                    nativeID: Ne.b,
                    size: 'title4',
                    style: de.header,
                    weight: 'heavy',
                  },
                  s,
                ),
                q.a.createElement(pe.b, { color: 'gray700' }, c),
                q.a.createElement(
                  Ae.a,
                  { link: { pathname: r, openInSameFrame: !0 }, style: de.buttonPadded, type: 'brandFilled' },
                  E,
                ),
              )
            : null
        },
        ls = a('zh9S'),
        Es = a('vEo5'),
        cs = { page: 'settings', section: 'account_verification' },
        ss = Object(Qe.a)()
          .propsFromState(function () {
            return {
              access: qe.m,
              accessFetchStatus: qe.n,
              accountEligibility: qe.o,
              accountViolations: qe.p,
              authenticityType: qe.t,
              currentStep: qe.z,
              documentFormats: qe.A,
              idCountry: qe.G,
              idType: qe.I,
              initialIntakeFetchStatus: qe.K,
              surveyUrl: qe.O,
              userEmail: Es.selectFirstEmail,
              verifyAccountFetchStatus: qe.P,
              notabilityCategory: qe.L,
              notabilityData: qe.M,
              notabilitySubcategory: qe.N,
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
              E = e.idCountry,
              c = e.idType,
              s = e.initialIntakeFetchStatus,
              I = e.notabilityCategory,
              T = e.notabilityData,
              N = e.notabilitySubcategory,
              u = e.surveyUrl,
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
              idCountry: E,
              idType: c,
              initialIntakeFetchStatus: s,
              mentionsEligible: n.mentions_eligible,
              surveyUrl: u,
              userEmail: d,
              verifyAccountFetchStatus: _,
              notabilityCategory: I,
              notabilityData: T,
              notabilitySubcategory: N,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(zt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION',
              ),
              fetchAccessIfNeeded: qe.b,
              fetchAccountEligibility: qe.c,
              fetchAccountViolations: qe.d,
              fetchDevices: Es.fetchDevicesIfNeeded,
              fetchDocumentFormats: qe.g,
              googleAnalyticsPageView: ls.a,
              resetFlow: qe.j,
              resetSubmitVerification: qe.l,
              setFormStepData: qe.R,
              setIdCountry: qe.T,
              setIdType: qe.U,
              setNextFlow: qe.V,
              setPreviousFlow: qe.W,
              verifyAccount: qe.Z,
            }
          })
          .withAnalytics(cs),
        Is = 'info',
        Ts = 'input',
        Ns = 'pivot',
        us = 'radio',
        ds = 'screenName',
        _s = a('oQhu'),
        ps = a('0zXz'),
        As = a('cHvH'),
        Rs =
          (a('ulNE'),
          a('urw/'),
          a('1IsZ'),
          Object(Qe.a)()
            .propsFromState(function () {
              return {
                authenticityType: qe.t,
                authenticityData: qe.s,
                idCountryName: qe.H,
                idTypeName: qe.J,
                notabilityCategory: qe.L,
                notabilitySubcategory: qe.N,
                notabilityData: qe.M,
              }
            })
            .propsFromActions(function () {
              return { verifyAccount: qe.Z }
            })),
        Cs = a('3A2y'),
        bs = Z.a.a91bb144,
        Os = Z.a.affce770,
        ms = Z.a.i0864917,
        fs = Z.a.c7942073,
        Ss = Z.a.b8121da9,
        Ls = Z.a.d247ca7f,
        hs = Z.a.b51afbb2,
        ys = Z.a.cc87b01c,
        Ds = function (e) {
          var t,
            a,
            n,
            i,
            r = e.authenticityType,
            o = e.createLocalApiErrorHandler,
            l = e.handleOnClick,
            E = e.isNarrow,
            c = e.notabilityCategory,
            s = e.notabilityData,
            I = e.notabilitySubcategory,
            T = e.verifyAccount,
            N = function (e) {
              return q.a.createElement(pe.b, { size: 'subtext2', style: de.subheading, weight: 'heavy' }, e)
            }
          return q.a.createElement(
            _e.a,
            { style: [de.container, E && de.narrowContainer] },
            q.a.createElement(
              pe.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: Ne.b,
                size: 'title4',
                style: de.header,
                weight: 'heavy',
              },
              ys,
            ),
            q.a.createElement(
              _e.a,
              { style: de.scrollableContainer },
              q.a.createElement(pe.b, { color: 'gray700' }, Ls),
              N(ms),
              c && q.a.createElement(pe.b, { style: de.subtext }, ml[c]),
              I &&
                ((i = Sl[I]), q.a.createElement(_e.a, null, N(fs), q.a.createElement(pe.b, { style: de.subtext }, i))),
              s &&
                (function (e) {
                  var t = Object(Cs.a)(e, 'newsType'),
                    a = Object.values(t).flat()
                  return q.a.createElement(
                    _e.a,
                    null,
                    N(Ss),
                    a.map(function (e, t) {
                      return q.a.createElement(pe.b, { key: t, style: de.subtext }, e)
                    }),
                  )
                })(s),
              N(hs),
              r &&
                ((t = r),
                (a = {}),
                z()(a, te.d.IDENTITY_DOCUMENT, Z.a.e43425fa),
                z()(a, te.d.EMAIL, Z.a.a411926a),
                z()(a, te.d.WEBSITE, Z.a.e1c78795),
                (n = a[t]),
                q.a.createElement(pe.b, { style: de.subtext }, n)),
              q.a.createElement(pe.b, { color: 'gray700', style: de.contentContainer }, Os),
            ),
            q.a.createElement(
              Ae.a,
              {
                onClick: function () {
                  T().catch(o()), l()
                },
                style: de.buttonFixed,
                type: 'brandFilled',
              },
              bs,
            ),
          )
        },
        Fs = Rs(Ds),
        Us = 'INITIAL_FETCH_STATUS_RENDERER',
        vs = 'SUBMIT_FETCH_STATUS_RENDERER',
        Ms = Z.a.g61ed8a4,
        gs = function (e) {
          return null
        },
        Ps = (function (e) {
          k()(a, e)
          var t = K()(a)
          function a() {
            var e
            x()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              z()(
                W()(e),
                '_accountSettingsLink',
                ee.b.isTwitterApp() ? 'twitter://settings/account' : '/settings/account',
              ),
              z()(W()(e), '_hasBadgeViolations', function (e) {
                var t
                return null === (t = e.violations) || void 0 === t
                  ? void 0
                  : t.some(function (e) {
                      return e.violation_status === te.t.OUT_OF_COMPLIANCE
                    })
              }),
              z()(
                W()(e),
                '_isVerificationIntakeEnabled',
                e.context.featureSwitches.isTrue('identity_verification_intake_enabled'),
              ),
              z()(
                W()(e),
                '_shouldStartFlow',
                e.props.accessStatus === te.a.NOT_STARTED || e.props.accessStatus === te.a.INTAKE_PROGRESS,
              ),
              z()(W()(e), '_fetchFormInformationIfNeeded', function () {
                var t = e.props,
                  a = t.fetchAccountEligibility,
                  n = t.fetchAccountViolations,
                  i = t.fetchDevices,
                  r = t.fetchDocumentFormats
                return e._shouldStartFlow ? Promise.all([a(), n(), i(), r()]) : Promise.resolve()
              }),
              z()(W()(e), '_initialFetchRetry', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchAccessIfNeeded)()
                  .then(function () {
                    return e._fetchFormInformationIfNeeded()
                  })
                  .catch(a())
              }),
              z()(
                W()(e),
                '_getMemoizedVerificationScribeNamespace',
                Object(_s.a)(function (e) {
                  return Mt(e)
                }),
              ),
              z()(
                W()(e),
                '_getMemoizedVerificationScribeData',
                Object(_s.a)(function (e) {
                  var t = e.accessStatus,
                    a = e.authenticityType,
                    n = e.currentStep,
                    i = e.followersEligible,
                    r = e.idType,
                    o = e.mentionsEligible,
                    l = e.notabilityCategory,
                    E = e.notabilityData,
                    c = e.notabilitySubcategory
                  return gt(t, a, n, i, r, o, l, E, c)
                }),
              ),
              z()(W()(e), '_scribeAction', function (t, a) {
                var n = e.props,
                  i = n.accessStatus,
                  r = n.analytics,
                  o = n.authenticityType,
                  l = n.currentStep,
                  E = n.followersEligible,
                  c = n.idType,
                  s = n.mentionsEligible,
                  I = n.notabilityCategory,
                  T = n.notabilityData,
                  N = n.notabilitySubcategory
                r.scribe(
                  P()(
                    P()({}, e._getMemoizedVerificationScribeNamespace(l)),
                    {},
                    {
                      action: t,
                      data: e._getMemoizedVerificationScribeData({
                        accessStatus: i,
                        authenticityType: o,
                        currentStep: l,
                        followersEligible: E,
                        idType: c,
                        mentionsEligible: s,
                        notabilityCategory: I,
                        notabilityData: T,
                        notabilitySubcategory: N,
                      }),
                      element: a,
                    },
                  ),
                )
              }),
              z()(W()(e), '_formComponentOptions', function () {
                var t,
                  a = e.props,
                  n = a.accessStatus,
                  i = a.createLocalApiErrorHandler,
                  r = a.currentStep,
                  o = a.decisionMadeTimeInMs,
                  l = a.documentFormats,
                  E = a.idCountry,
                  c = a.initialIntakeFetchStatus,
                  s = a.resetSubmitVerification,
                  I = a.setIdCountry,
                  T = a.setIdType,
                  N = a.setNextFlow,
                  u = a.setPreviousFlow,
                  d = a.surveyUrl,
                  _ = a.userEmail,
                  p = a.verifyAccount,
                  A = a.verifyAccountFetchStatus
                return (
                  (t = {}),
                  z()(t, ze.name, {
                    ComponentToRender: ze,
                    componentProps: {
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), N()
                      },
                    },
                    genericModalProps: { renderHeader: gs },
                  }),
                  z()(t, Ds.name, {
                    ComponentToRender: Fs,
                    componentProps: {
                      createLocalApiErrorHandler: i,
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), N()
                      },
                    },
                    genericModalProps: { onBackClick: u },
                  }),
                  z()(t, os.name, {
                    ComponentToRender: os,
                    componentProps: { decisionMadeTimeInMs: o, link: e._accountSettingsLink, status: n },
                    genericModalProps: { backButtonType: 'close', hideBackButton: ee.b.isTwitterApp() },
                  }),
                  z()(t, pt.name, {
                    ComponentToRender: pt,
                    componentProps: {
                      documentFormats: l,
                      onCountryClick: function (e, t) {
                        I(e, t), u()
                      },
                    },
                    genericModalProps: { onBackClick: u },
                  }),
                  z()(t, At.name, {
                    ComponentToRender: At,
                    componentProps: {
                      documentFormats: l,
                      idCountry: E,
                      onTypeClick: function (e, t) {
                        T(e, t), u()
                      },
                    },
                    genericModalProps: { onBackClick: u },
                  }),
                  z()(t, te.h.INTAKE_LOADING, {
                    ComponentToRender: Gl,
                    componentProps: {},
                    genericModalProps: { hideBackButton: !0, renderHeader: gs },
                  }),
                  z()(t, te.h.INTAKE_TYPE_SELECT, {
                    ComponentToRender: Nt,
                    componentProps: {},
                    genericModalProps: { onBackClick: u },
                  }),
                  z()(t, te.h.INTAKE_UPLOAD, {
                    ComponentToRender: IE,
                    componentProps: {
                      handleOnClick: function () {
                        return e._scribeAction('click', 'CTA')
                      },
                    },
                    genericModalProps: { onBackClick: u },
                  }),
                  z()(t, Kc.name, {
                    ComponentToRender: Kc,
                    componentProps: {
                      link: e._accountSettingsLink,
                      onSurveyClick: function () {
                        return e._scribeAction('click', 'survey_link')
                      },
                      surveyUrl: d,
                    },
                    genericModalProps: { renderHeader: gs },
                  }),
                  z()(t, se.name, {
                    ComponentToRender: se,
                    componentProps: { accountViolations: e.props.accountViolations },
                    genericModalProps: { backButtonType: 'close', hideBackButton: ee.b.isTwitterApp() },
                  }),
                  z()(t, De.name, {
                    ComponentToRender: De,
                    componentProps: {
                      accountSettingsLink: e._accountSettingsLink,
                      email: _ || '',
                      handleOnClickValid: function () {
                        _ && e.props.setFormStepData(r, _), e._scribeAction('click', 'CTA'), N()
                      },
                      handleOnClickInvalid: function () {
                        u()
                      },
                    },
                    genericModalProps: { onBackClick: u },
                  }),
                  z()(t, vs, {
                    ComponentToRender: Ue.a,
                    componentProps: {
                      fetchStatus: A,
                      onRequestRetry: function () {
                        p().catch(i())
                      },
                      render: ps.a,
                      retryMessage: Ms,
                    },
                    genericModalProps: { hideBackButton: A === Fe.a.LOADING, onBackClick: s },
                  }),
                  z()(t, Us, {
                    ComponentToRender: Ue.a,
                    componentProps: {
                      fetchStatus: c,
                      onRequestRetry: e._initialFetchRetry,
                      render: ps.a,
                      retryMessage: Ms,
                    },
                    genericModalProps: { backButtonType: 'close', hideBackButton: ee.b.isTwitterApp() },
                  }),
                  t
                )
              }),
              z()(W()(e), '_wrapInGenericModalScreen', function (t) {
                var a = e._formComponentOptions()[t],
                  n = a.ComponentToRender,
                  i = a.componentProps,
                  r = a.genericModalProps
                return q.a.createElement(
                  ve.b,
                  M()(
                    {
                      backButtonType: 'back',
                      backLocation: e._accountSettingsLink,
                      containerStyle: r.renderHeader ? de.rootNoAppBar : de.root,
                      hideBackButton: !1,
                      history: e.props.history,
                      withBottomBorder: !1,
                    },
                    r,
                  ),
                  q.a.createElement(
                    n,
                    M()({}, i, { isNarrow: e._isNarrow, key: ''.concat(e.props.currentStep, '-screen') }),
                  ),
                )
              }),
              z()(W()(e), '_createFormFromLayout', function (t) {
                var a = e.props,
                  n = a.history,
                  i = a.setPreviousFlow
                if (t && Sc[t]) {
                  var r = Sc[t],
                    o = 'function' == typeof r ? r(P()({}, e.props)) : r
                  return q.a.createElement(
                    ve.b,
                    { backButtonType: 'back', containerStyle: de.root, hideBackButton: !1, history: n, onBackClick: i },
                    e._renderLayoutComponent(o, t),
                  )
                }
                return q.a.createElement(vc.a, { to: '/settings/account' })
              }),
              z()(W()(e), '_renderLayoutComponent', function (t, a) {
                var n = { isNarrow: e._isNarrow, key: ''.concat(a, '-screen') }
                switch (t.type) {
                  case Is:
                    return q.a.createElement(ft, M()({}, t.props, { key: ''.concat(a, '-screen') }))
                  case Ts:
                    return q.a.createElement(jt, M()({}, t.props, n))
                  case Ns:
                    return q.a.createElement(at, M()({}, t.props, n))
                  case us:
                    return q.a.createElement(Uc, M()({}, t.props, n))
                  case ds:
                    return q.a.createElement(Bc, M()({}, t.props, n))
                  default:
                    return null
                }
              }),
              z()(W()(e), '_renderFlowStep', function () {
                var t = e.props,
                  a = t.accountViolations,
                  n = t.currentStep,
                  i = t.initialIntakeFetchStatus,
                  r = t.verifyAccountFetchStatus
                if (i !== Fe.a.LOADED) return e._wrapInGenericModalScreen(Us)
                if (r === Fe.a.LOADING || r === Fe.a.FAILED) return e._wrapInGenericModalScreen(vs)
                if (e._hasBadgeViolations(a)) return e._wrapInGenericModalScreen(se.name)
                switch (n) {
                  case te.h.LANDING_PAGE:
                    return e._wrapInGenericModalScreen(e._shouldStartFlow ? ze.name : os.name)
                  case te.h.INTAKE_TYPE_SELECT:
                    return e._wrapInGenericModalScreen(te.h.INTAKE_TYPE_SELECT)
                  case te.h.ID_COUNTRY_SELECT:
                    return e._wrapInGenericModalScreen(pt.name)
                  case te.h.ID_TYPE_SELECT:
                    return e._wrapInGenericModalScreen(At.name)
                  case te.h.INTAKE_UPLOAD:
                    return e._wrapInGenericModalScreen(te.h.INTAKE_UPLOAD)
                  case te.h.INTAKE_LOADING:
                    return e._wrapInGenericModalScreen(te.h.INTAKE_LOADING)
                  case te.h.EMAIL_VERIFICATION:
                    return e._wrapInGenericModalScreen(De.name)
                  case te.h.REVIEW_SUBMIT:
                    return e._wrapInGenericModalScreen(Ds.name)
                  case te.h.THANK_YOU:
                    return e._wrapInGenericModalScreen(Kc.name)
                  default:
                    return e._createFormFromLayout(n)
                }
              }),
              e
            )
          }
          return (
            V()(a, [
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
                    i(cs)
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
                    ((this._shouldStartFlow = a === te.a.NOT_STARTED || a === te.a.INTAKE_PROGRESS),
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
                    E = t.notabilityCategory,
                    c = t.notabilityData,
                    s = t.notabilitySubcategory
                  return this._isVerificationIntakeEnabled
                    ? q.a.createElement(As.a, null, function (t) {
                        var I = t.windowWidth < ue.a.theme.breakpoints.small
                        return (
                          I !== e._isNarrow && (e._isNarrow = I),
                          q.a.createElement(
                            Wc.c,
                            {
                              data: e._getMemoizedVerificationScribeData({
                                accessStatus: a,
                                authenticityType: n,
                                currentStep: i,
                                followersEligible: r,
                                idType: o,
                                mentionsEligible: l,
                                notabilityCategory: E,
                                notabilityData: c,
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
        })(q.a.Component)
      z()(Ps, 'contextType', wc.a)
      var Gs = ss(Ps)
      t.default = Gs
    },
    je27: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = n(a('AYyr')),
        r = n(a('W7+t')),
        o = n(a('pvEE')),
        l = n(a('vLEV')),
        E = (0, i.default)(
          /(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i,
          {
            validateUrlUnicodeSubDomainSegment: r.default,
            validateUrlUnicodeDomainSegment: o.default,
            validateUrlUnicodeDomainTld: l.default,
          },
        )
      ;(t.default = E), (e.exports = t.default)
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
    'p+r5': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return k
      })
      a('yiKp')
      var n = a('97Jx'),
        i = a.n(n),
        r = a('m3Bd'),
        o = a.n(r),
        l = a('VrFO'),
        E = a.n(l),
        c = a('Y9Ll'),
        s = a.n(c),
        I = a('1Pcy'),
        T = a.n(I),
        N = a('5Yy7'),
        u = a.n(N),
        d = a('2VqO'),
        _ = a.n(d),
        p = a('KEM+'),
        A = a.n(p),
        R = (a('2G9S'), a('ERkP')),
        C = a.n(R),
        b = a('38/B'),
        O = a('t62R'),
        m = a('/yvb'),
        f = a('piX5'),
        S = a('3XMw'),
        L = a.n(S),
        h = a('tI3i'),
        y = a.n(h),
        D = a('oQhu'),
        F = a('rHpw'),
        U = a('aITJ'),
        v = a('MWbm'),
        M = a('n5fo'),
        g = a('5emT'),
        P = a('Oib4'),
        G = a('WtWS'),
        x = a('ioan'),
        Y = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        V = function (e) {
          return e.length
        },
        B = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V
          return t(e)
        },
        W = L.a.de540c32,
        w = L.a.b4abfdb3,
        k = (function (e) {
          u()(a, e)
          var t = _()(a)
          function a(e) {
            var n
            E()(this, a),
              (n = t.call(this, e)),
              A()(T()(n), '_blurOnBackspaceKeyUpForKaiOS', !1),
              A()(T()(n), '_isLabelLarge', function () {
                var e = n.state,
                  t = e.actualCount,
                  a = e.isFocused
                return !t && !a
              }),
              A()(
                T()(n),
                '_getTextInputStyle',
                Object(D.a)(function (e) {
                  return [H.root, !e && H.disabled]
                }),
              ),
              A()(T()(n), '_getTextInputType', function () {
                var e = n.props,
                  t = e.showPasswordVisibilityIcon,
                  a = e.type,
                  i = n.state.isPasswordRevealed
                return 'password' === a && t ? (i ? 'text' : 'password') : a
              }),
              A()(T()(n), '_calculateLength', function (e) {
                return B(e, n.props.calculateLength)
              }),
              A()(T()(n), '_shouldRenderDisplayCount', function () {
                var e = n.state.isFocused,
                  t = n._isFormInvalid()
                return Boolean((e || t) && n._getMaxDisplayCount())
              }),
              A()(T()(n), '_isInvalidNumber', function () {
                var e,
                  t,
                  a,
                  i,
                  r,
                  o = n.props.type,
                  l =
                    null === (e = n._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  E =
                    null === (a = n._textInput) ||
                    void 0 === a ||
                    null === (i = a.textInputNode) ||
                    void 0 === i ||
                    null === (r = i.validity) ||
                    void 0 === r
                      ? void 0
                      : r.badInput
                return 'number' === o && '' === l && !0 === E
              }),
              A()(T()(n), '_getActualCount', function (e) {
                var t = e.length
                return n._isInvalidNumber() && (t = 1), t
              }),
              A()(T()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur,
                  a = e.currentTarget.value,
                  i = n._calculateLength(a),
                  r = n._getActualCount(a)
                n.setState({ isFocused: !1, displayCount: i, actualCount: r }), t && t(e)
              }),
              A()(T()(n), '_handleChange', function (e) {
                var t = n.props.onChange,
                  a = n.state.previousValue,
                  i = e.currentTarget.value,
                  r = n._calculateLength(i),
                  o = n._getActualCount(i),
                  l = n._getAdjustedMaxLength()
                void 0 !== l && i.length > l && a.length < i.length
                  ? (e.currentTarget.value = a)
                  : (n.setState({
                      isFocused: !0,
                      displayCount: r,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              A()(T()(n), '_handleFocus', function () {
                var e = n.props.onFocus
                n.setState({ isFocused: !0 }), e && e()
              }),
              A()(T()(n), '_handleKeyPress', function (e) {
                var t = n.props,
                  a = t.multiline,
                  i = t.onKeyPress,
                  r = t.onSubmitEditing
                i && i(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || a || !r || (e.preventDefault(), r(e))
              }),
              A()(T()(n), '_handleKeyDown', function (e) {
                var t = n.props.onKeyDown,
                  a = 0 === n.state.displayCount
                U.b.isKaiOS() && 'Backspace' === e.key && a ? (n._blurOnBackspaceKeyUpForKaiOS = a) : t && t(e)
              }),
              A()(T()(n), '_handleKeyUp', function (e) {
                var t = n.props.onKeyUp
                U.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  n._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), n.blur()),
                  t && t(e)
              }),
              A()(T()(n), '_handlePasswordVisibilityClick', function (e) {
                n.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              A()(T()(n), '_setTextInputRef', function (e) {
                n._textInput = e
              }),
              A()(T()(n), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  a = e.maxLength,
                  n = e.onChange,
                  i = e.validLength,
                  r = !!n,
                  o = 'string' == typeof e.value,
                  l = 'string' == typeof t
                y()(
                  !(!l && o && !r),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  y()(!(a && i && i > a), 'Max length should be equal or greater than valid length.'),
                  y()(
                    !((void 0 !== a && a <= 0) || (void 0 !== i && i <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              A()(T()(n), '_exceedsValidLength', function (e) {
                var t = n._getMaxDisplayCount()
                return !!t && e > t
              }),
              A()(T()(n), '_getMaxDisplayCount', function () {
                return n.props.validLength || n.props.maxLength
              }),
              A()(T()(n), '_getAdjustedMaxLength', function () {
                var e = n.props.maxLength,
                  t = n.getValue(),
                  a = n._calculateLength(t)
                return e ? e + t.length - a : void 0
              }),
              n._checkComponentPropsUsageCorrectness(e)
            var i = e.defaultValue,
              r = e.value || i || ''
            return (
              (n.state = {
                displayCount: n._calculateLength(r),
                actualCount: V(r),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: r,
              }),
              n
            )
          }
          return (
            s()(
              a,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      a = t.maxLength,
                      n = t.onChange,
                      i = t.validLength,
                      r = t.value,
                      o = e.maxLength,
                      l = e.onChange,
                      E = e.validLength,
                      c = e.value
                    ;(E === i && a === o && !!n === !!l && ('string' == typeof r) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      a = e.editable,
                      n = e.errorText,
                      i = e.helperText,
                      r = e.style,
                      o = this.state.isFocused,
                      l = this._isFormInvalid()
                    return C.a.createElement(
                      v.a,
                      { style: [K.root, r] },
                      C.a.createElement(
                        v.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            f.a.border,
                            K.textInputFormStyle,
                            l && f.a.invalidBorderColor,
                            o && l && f.a.focusedBorderInvalid,
                            o && !l && f.a.focusedBorderValid,
                            !a && f.a.disabled,
                          ],
                        },
                        C.a.createElement(
                          v.a,
                          { style: K.textInputFormWrapper },
                          C.a.createElement(
                            v.a,
                            { style: K.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      C.a.createElement(
                        v.a,
                        { style: [K.sidePadding, K.underTextInputForm] },
                        C.a.createElement(
                          v.a,
                          { style: K.subtextWrapper },
                          i ? this._renderHelperText() : null,
                          l && n ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      a = this._isFormInvalid() ? 'red500' : t,
                      n = this._isLabelLarge()
                    return C.a.createElement(
                      O.b,
                      {
                        color: n ? 'gray700' : a,
                        numberOfLines: 1,
                        size: n ? 'headline1' : 'subtext2',
                        style: [
                          K.textInputHeaderItem,
                          n && K.placeholderText,
                          !b.a.reducedMotionEnabled && K.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      t = e.Icon,
                      a = (e.accessibilityLabel, e.calculateLength, e.editable),
                      n =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      r = (e.style, e.type, e.validLength, o()(e, Y))
                    return C.a.createElement(
                      v.a,
                      { style: H.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      C.a.createElement(
                        O.b,
                        { size: 'headline1', style: H.wrapper },
                        C.a.createElement(
                          x.a,
                          i()({}, r, {
                            editable: a,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(a),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      n && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      a = e.type,
                      n = this.state.isPasswordRevealed
                    return 'password' === a && t
                      ? C.a.createElement(
                          v.a,
                          { style: K.passwordVisibilityIconContainer },
                          C.a.createElement(m.a, {
                            accessibilityLabel: n ? w : W,
                            focusable: !0,
                            hoverLabel: { label: n ? w : W },
                            icon: n ? C.a.createElement(M.a, null) : C.a.createElement(g.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return C.a.createElement(
                      v.a,
                      { accessibilityLiveRegion: 'polite' },
                      C.a.createElement(
                        O.b,
                        { color: 'gray700', size: 'subtext2', style: K.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return C.a.createElement(
                      v.a,
                      { accessibilityLiveRegion: 'assertive' },
                      C.a.createElement(
                        O.b,
                        { color: 'red500', size: 'subtext2', style: K.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      a = this._exceedsValidLength(e),
                      n = t && L.a.ia24dc8c(t),
                      i = L.a.ia24dc8c(e)
                    return C.a.createElement(
                      v.a,
                      { accessibilityLiveRegion: 'polite', style: [K.textInputHeaderItem, K.displayCount] },
                      C.a.createElement(
                        O.b,
                        { color: a ? 'red500' : 'gray700', size: 'subtext2' },
                        n ? ''.concat(i, ' / ').concat(n) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      a = [K.icon, t && K.focusedIcon]
                    return e && C.a.createElement(e, { style: a })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? C.a.createElement(P.a, { style: [K.validationIcon, f.a.invalidColor] })
                      : C.a.createElement(G.a, { style: [K.validationIcon, f.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var a = e.calculateLength,
                      n = e.value,
                      i = 'string' == typeof n ? B(n, a) : 0
                    return 'string' == typeof n && i !== t.displayCount
                      ? { displayCount: i, actualCount: n.length }
                      : null
                  },
                },
              ],
            ),
            a
          )
        })(C.a.Component)
      A()(k, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (k.propTypes = {})
      var H = F.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        K = F.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
          }
        })
    },
    piX5: function (e, t, a) {
      'use strict'
      a('uFXj'), a('2G9S')
      var n = a('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      t.a = n
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
        E = (0, i.default)(
          '(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?',
          { validateUrlUserinfo: r.default, validateUrlHost: o.default, validateUrlPort: l.default },
          'i',
        )
      ;(t.default = E), (e.exports = t.default)
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
