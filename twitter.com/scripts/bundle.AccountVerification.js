;(window.webpackJsonp = window.webpackJsonp || []).push([
  [31, 19],
  {
    '5emT': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        l = a('Lsrn'),
        c = a('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
      ;(E.metadata = { width: 24, height: 24 }), (t.a = E)
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
          return d
        }),
        a.d(t, 'm', function () {
          return N
        }),
        a.d(t, 'b', function () {
          return _
        }),
        a.d(t, 'e', function () {
          return p
        }),
        a.d(t, 'f', function () {
          return A
        }),
        a.d(t, 'i', function () {
          return b
        }),
        a.d(t, 'j', function () {
          return R
        }),
        a.d(t, 'k', function () {
          return C
        }),
        a.d(t, 'q', function () {
          return m
        }),
        a.d(t, 'n', function () {
          return O
        }),
        a.d(t, 'p', function () {
          return f
        }),
        a.d(t, 'h', function () {
          return S
        }),
        a.d(t, 'g', function () {
          return L
        })
      var n,
        i = a('KEM+'),
        r = a.n(i),
        o = a('yiKp'),
        l = a.n(o),
        c = (a('yH/f'), Object.freeze({ IN_COMPLIANCE: 'in_compliance', OUT_OF_COMPLIANCE: 'out_of_compliance' })),
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
        d = Object.freeze({
          ACTIVISM: 'activism',
          COMPANY: 'brand_company_organization',
          ENTERTAINMENT: 'entertainment',
          GOVERNMENT: 'government',
          INFLUENCER_OTHER: 'influencer_other',
          NEWS: 'news',
          SPORTS: 'sports',
        }),
        N = {
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
        A = Object.freeze({
          ENTERTAINMENT_COMPANY: 'entertainment_company',
          ENTERTAINMENT_INDIVIDUAL: 'entertainment_individual',
          PRODUCTION: 'production',
        }),
        b = Object.freeze({ CANDIDATE: 'candidate', OFFICE: 'office', OFFICIAL: 'official' }),
        R = Object.freeze({ CONTENT_CREATOR: 'content_creator', INFLUENTIAL_INDIVIDUAL: 'influential_individual' }),
        C = Object.freeze({ FREELANCER: 'freelancer', JOURNALIST: 'journalist', ORGANIZATION: 'organization' }),
        m = Object.freeze({
          SPORTS_INDIVIDUAL: 'sports_individual',
          SPORTS_ENTITY: 'sports_entity',
          GAMING_INDIVIDUAL: 'gaming_individual',
        }),
        O = Object.freeze(l()(l()(l()(l()(l()(l()(l()({}, _), p), A), b), R), C), m)),
        f = Object.freeze({
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
          r()(n, S.LANDING_PAGE, { next: S.NOTABILITY_CATEGORY_SELECT, scribeComponent: f.LANDING_PAGE }),
          r()(n, S.NOTABILITY_CATEGORY_SELECT, { next: null, scribeComponent: f.NOTABILITY_CATEGORY }),
          r()(n, S.ACTIVIST_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.ACTIVIST_GOOGLE_TRENDS, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.ACTIVIST_LEADERSHIP, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.ACTIVIST_NEWS, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.ACTIVIST_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.ACTIVIST_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          r()(n, S.ACTIVIST_WIKIPEDIA, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.COMPANY_SUBCATEGORY, {
            next: S.COMPANY_NOTABILITY_METHOD,
            scribeComponent: f.NOTABILITY_SUBCATEGORY,
          }),
          r()(n, S.COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.COMPANY_WIKIPEDIA, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.COMPANY_STOCK_EXCHANGE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.COMPANY_NEWS_REFERENCE, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: S.COMPANY_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          r()(n, S.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.COMPANY_INDIVIDUAL_LEADERSHIP, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.COMPANY_INDIVIDUAL_NEWS_REFERENCE, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.CREATOR_PROFILE, { next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: null }),
          r()(n, S.CONTENT_CREATOR_GOOGLE_TRENDS, { next: S.CREATOR_PROFILE, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.CONTENT_CREATOR_NEWS, { next: S.CREATOR_PROFILE, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.CONTENT_CREATOR_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.CONTENT_CREATOR_WIKIPEDIA, { next: S.CREATOR_PROFILE, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.ENTERTAINMENT_COMPANY_STOCK_REFERENCE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.ENTERTAINMENT_COMPANY_WIKIPEDIA, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
            next: S.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
            next: S.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS, {
            next: null,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, {
            next: null,
            scribeComponent: f.NOTABILITY_METHOD,
          }),
          r()(n, S.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE, {
            next: null,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA, {
            next: null,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.ENTERTAINMENT_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          r()(n, S.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
            next: S.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          r()(n, S.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
            next: S.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
            next: S.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          r()(n, S.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
            next: S.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
            next: S.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          r()(n, S.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
            next: S.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          r()(n, S.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
            next: S.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
            next: S.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          r()(n, S.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.GOVERNMENT_SUBCATEGORY, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          r()(n, S.INFLUENCER_GOOGLE_TRENDS, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.INFLUENCER_NEWS, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.INFLUENCER_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.INFLUENCER_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          r()(n, S.INFLUENCER_SUBCATEGORY, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          r()(n, S.INFLUENCER_WIKIPEDIA, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_CREDIBILITY_STOCK_REFERENCE_URL, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: S.NEWS_NOTABILITY_CRITERIA_CONFIRMATION,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, {
            next: S.NEWS_JOURNALIST_QUALIFICATIONS,
            scribeComponent: null,
          }),
          r()(n, S.NEWS_JOURNALIST_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, { next: S.AUTHENTICITY_TYPE_SELECT, scribeComponent: null }),
          r()(n, S.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION, {
            next: S.NEWS_ORGANIZATION_QUALIFICATIONS,
            scribeComponent: null,
          }),
          r()(n, S.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, {
            next: S.NEWS_JOURNALIST_CRITERIA_CONFIRMATION,
            scribeComponent: null,
          }),
          r()(n, S.NEWS_ORGANIZATION_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.NEWS_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          r()(n, S.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.GAMING_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: S.GAMING_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          r()(n, S.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.GAMING_INDIVIDUAL_INELIGIBLE, { next: null, scribeComponent: null }),
          r()(n, S.SPORTS_ENTITY_GOOGLE_TRENDS, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.SPORTS_ENTITY_NEWS_REFERENCE, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.SPORTS_ENTITY_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.SPORTS_ENTITY_STOCK_REFERENCE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.SPORTS_ENTITY_WEBSITE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.SPORTS_ENTITY_WIKIPEDIA, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          r()(n, S.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: S.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          r()(n, S.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: S.SPORTS_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          r()(n, S.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          r()(n, S.SPORTS_SUBCATEGORY, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          r()(n, S.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, { next: null, scribeComponent: f.ADD_WEBSITE }),
          r()(n, S.WEBSITE_REFERENCE_CONFIRM_PROCEED, { next: S.REVIEW_SUBMIT, scribeComponent: f.ADD_WEBSITE }),
          r()(n, S.AUTHENTICITY_TYPE_SELECT, { next: null, scribeComponent: f.AUTHENTICITY_TYPE }),
          r()(n, S.INTAKE_TYPE_SELECT, { next: S.INTAKE_UPLOAD, scribeComponent: null }),
          r()(n, S.ID_COUNTRY_SELECT, { next: S.INTAKE_TYPE_SELECT, scribeComponent: null }),
          r()(n, S.ID_TYPE_SELECT, { next: S.INTAKE_TYPE_SELECT, scribeComponent: null }),
          r()(n, S.INTAKE_UPLOAD, { next: S.INTAKE_LOADING, scribeComponent: f.ID_UPLOAD }),
          r()(n, S.INTAKE_LOADING, { next: S.REVIEW_SUBMIT, scribeComponent: f.ID_UPLOAD }),
          r()(n, S.EMAIL_VERIFICATION, { next: S.REVIEW_SUBMIT, scribeComponent: f.ADD_EMAIL }),
          r()(n, S.SITE_VERIFICATION, { next: S.WEBSITE_REFERENCE_CONFIRM_PROCEED, scribeComponent: null }),
          r()(n, S.REVIEW_SUBMIT, { next: S.THANK_YOU, scribeComponent: f.REVIEW_SUBMIT }),
          r()(n, S.THANK_YOU, { next: null, scribeComponent: f.THANK_YOU }),
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
            d = n[3],
            N = n[4],
            _ = n[5]
          if (
            !(
              (!a || (I(T, c.default) && T.match(/^https?$/i))) &&
              I(d, o.default) &&
              I(N, l.default, !0) &&
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
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        o = a.n(r),
        l = a('Lsrn'),
        c = a('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
      ;(E.metadata = { width: 24, height: 24 }), (t.a = E)
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
          return de
        }),
        a.d(t, 'x', function () {
          return Ne
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
          return Re
        }),
        a.d(t, 'E', function () {
          return Ce
        }),
        a.d(t, 'D', function () {
          return me
        }),
        a.d(t, 'C', function () {
          return Oe
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
          return xe
        }),
        a.d(t, 'c', function () {
          return Ge
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
      var n = a('ddV6'),
        i = a.n(n),
        r = a('KEM+'),
        o = a.n(r),
        l = a('RhWx'),
        c = a.n(l),
        E = a('yiKp'),
        s = a.n(E),
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
        u = a.n(T),
        d = a('kGix'),
        N = a('Ssj5'),
        _ = a('vEo5'),
        p = a('AspN'),
        A = a('QJRq'),
        b = 'accountVerification',
        R = 'rweb/accountVerification/APPEND_NOTABILITY_ARTICLE_DATA',
        C = 'rweb/accountVerification/APPEND_NOTABILITY_MAIN_REFERENCE_DATA',
        m = 'rweb/accountVerification/APPEND_NOTABILITY_NEWS_DATA',
        O = 'rweb/accountVerification/APPEND_NOTABILITY_PUBLIC_REFERENCE_DATA',
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
        x = 'rweb/accountVerification/SET_FRONT_ID',
        G = 'rweb/accountVerification/SET_ID_COUNTRY',
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
        ee = A.h.LANDING_PAGE,
        te = u()({
          access: {
            data: { applicationSubmissionTimeInMs: void 0, decisionMadeTimeInMs: void 0, status: A.a.DISABLED },
            error: null,
            fetchStatus: d.a.NONE,
          },
          accountEligibility: {
            data: { followers_eligible: !1, mentions_eligible: !1 },
            error: null,
            fetchStatus: d.a.NONE,
          },
          accountViolations: { data: { violations: [] }, error: null, fetchStatus: d.a.NONE },
          authenticationResult: { data: { errors: [], status: void 0 }, error: null, fetchStatus: d.a.NONE },
          badgeViolations: {
            data: {
              button_text: '',
              debadge_timestamp_ms: 0,
              violation_modal_title: '',
              violation_modal_desc: { entities: [], text: '' },
              violations: [],
            },
            error: null,
            fetchStatus: d.a.NONE,
          },
          documentFormats: { data: void 0, error: null, fetchStatus: d.a.NONE },
          documentIdProcess: { data: { errors: [], entity_id: void 0 }, error: null, fetchStatus: d.a.NONE },
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
          verifyAccount: { error: null, fetchStatus: d.a.NONE },
        })
      N.a.register(
        o()({}, b, function () {
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
                { access: s()(s()({}, i.access), {}, { fetchStatus: d.a.LOADING, error: null }) },
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
                      fetchStatus: d.a.LOADED,
                    },
                  },
                )
              break
            case j.FAILURE:
              return s()(
                s()({}, i),
                {},
                { access: s()(s()({}, i.access), {}, { error: r.payload, fetchStatus: d.a.FAILED }) },
              )
            case z.REQUEST:
              return s()(
                s()({}, i),
                {},
                {
                  accountEligibility: s()(s()({}, i.accountEligibility), {}, { fetchStatus: d.a.LOADING, error: null }),
                },
              )
            case z.SUCCESS:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  { accountEligibility: { data: s()({}, r.payload), error: null, fetchStatus: d.a.LOADED } },
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
                    { error: r.payload, fetchStatus: d.a.FAILED },
                  ),
                },
              )
            case q.REQUEST:
              return s()(
                s()({}, i),
                {},
                { accountViolations: s()(s()({}, i.accountViolations), {}, { fetchStatus: d.a.LOADING, error: null }) },
              )
            case q.SUCCESS:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  { accountViolations: { data: s()({}, r.payload), error: null, fetchStatus: d.a.LOADED } },
                )
              break
            case q.FAILURE:
              return s()(
                s()({}, i),
                {},
                {
                  accountViolations: s()(
                    s()({}, i.accountViolations),
                    {},
                    { error: r.payload, fetchStatus: d.a.FAILED },
                  ),
                },
              )
            case Q.REQUEST:
              return s()(
                s()({}, i),
                {},
                {
                  authenticationResult: s()(
                    s()({}, i.authenticationResult),
                    {},
                    { error: null, fetchStatus: d.a.LOADING },
                  ),
                },
              )
            case Q.SUCCESS:
              return s()(
                s()({}, i),
                {},
                {
                  authenticationResult: {
                    data: s()(s()({}, i.authenticationResult.data), r.payload),
                    error: null,
                    fetchStatus: d.a.LOADED,
                  },
                },
              )
            case Q.FAILURE:
              return s()(
                s()({}, i),
                {},
                {
                  authenticationResult: s()(
                    s()({}, i.authenticationResult),
                    {},
                    { error: r.payload, fetchStatus: d.a.FAILED },
                  ),
                },
              )
            case $.REQUEST:
              return s()(
                s()({}, i),
                {},
                { badgeViolations: s()(s()({}, i.badgeViolations), {}, { fetchStatus: d.a.LOADING }) },
              )
            case $.SUCCESS:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  { badgeViolations: { data: s()({}, r.payload), error: null, fetchStatus: d.a.LOADED } },
                )
              break
            case $.FAILURE:
              return s()(
                s()({}, i),
                {},
                { badgeViolations: s()(s()({}, i.badgeViolations), {}, { error: r.payload, fetchStatus: d.a.FAILED }) },
              )
            case Z.REQUEST:
              return s()(
                s()({}, i),
                {},
                { documentFormats: s()(s()({}, i.documentFormats), {}, { error: null, fetchStatus: d.a.LOADING }) },
              )
            case Z.SUCCESS:
              if (r.payload)
                return s()(
                  s()({}, i),
                  {},
                  { documentFormats: { data: s()({}, r.payload), error: null, fetchStatus: d.a.LOADED } },
                )
              break
            case Z.FAILURE:
              return s()(
                s()({}, i),
                {},
                { documentFormats: s()(s()({}, i.documentFormats), {}, { error: r.payload, fetchStatus: d.a.FAILED }) },
              )
            case J.REQUEST:
              return s()(s()({}, i), {}, { verifyAccount: { error: null, fetchStatus: d.a.LOADING } })
            case J.SUCCESS:
              var l
              return (
                r.payload && (l = r.payload.survey_url),
                s()(s()({}, i), {}, { surveyUrl: l, verifyAccount: { error: null, fetchStatus: d.a.LOADED } })
              )
            case J.FAILURE:
              return s()(s()({}, i), {}, { verifyAccount: { error: r.payload, fetchStatus: d.a.FAILED } })
            case X.REQUEST:
              return s()(
                s()({}, i),
                {},
                { documentIdProcess: s()(s()({}, i.documentIdProcess), {}, { error: null, fetchStatus: d.a.LOADING }) },
              )
            case X.SUCCESS:
              return s()(
                s()({}, i),
                {},
                {
                  documentIdProcess: {
                    data: s()(s()({}, i.documentIdProcess.data), r.payload),
                    error: null,
                    fetchStatus: d.a.LOADED,
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
                    { error: r.payload, fetchStatus: d.a.FAILED },
                  ),
                },
              )
            case R:
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
                        { mainReferenceUrl: null === (t = r.payload) || void 0 === t ? void 0 : t.mainReferenceUrl },
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
                        { newsReferenceUrls: null === (a = r.payload) || void 0 === a ? void 0 : a.newsReferenceUrls },
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
            case x:
              return s()(s()({}, i), {}, { frontID: r.payload })
            case G:
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
              var E = it(i.stepsTaken),
                I = E.previousStep,
                T = E.remainingSteps
              return s()(
                s()({}, i),
                {},
                { currentStep: I, stepsTaken: c()(T), verifyAccount: { error: null, fetchStatus: d.a.NONE } },
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
                  { currentStep: r.payload, stepsTaken: [].concat(c()(i.stepsTaken), [r.payload]) },
                )
              break
            case k:
              var u = it(i.stepsTaken),
                N = u.previousStep,
                _ = u.remainingSteps
              return s()(s()({}, i), {}, { currentStep: N, stepsTaken: c()(_) })
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
        de = function (e) {
          return e[b].badgeViolations.fetchStatus
        },
        Ne = function (e) {
          return e[b].isConfirmed
        },
        _e = function (e) {
          return e[b].currentStep
        },
        pe = function (e) {
          var t = _e(e)
          return e[b].formHistory[t] || void 0
        },
        Ae = function (e) {
          return e[b].documentFormats.data
        },
        be = function (e) {
          return e[b].documentFormats.fetchStatus
        },
        Re = function (e) {
          return e[b].documentIdProcess.data.entity_id
        },
        Ce = function (e) {
          return e[b].documentIdProcess.error
        },
        me = function (e) {
          return e[b].documentIdProcess.fetchStatus
        },
        Oe = function (e) {
          return e[b].documentIdProcess.data.errors || []
        },
        fe = function (e) {
          return e[b].frontID
        },
        Se = function (e) {
          return e[b].idCountry
        },
        Le = function (e) {
          return e[b].idCountryName
        },
        he = function (e) {
          return e[b].idType
        },
        ye = function (e) {
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
            case A.l.NEWS:
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
        ge = function (e) {
          var t = ne(e),
            a = re(e),
            n = le(e),
            i = Object(_.selectFetchStatus)(e),
            r = be(e)
          return [t, a, n, i, r].includes(d.a.FAILED)
            ? d.a.FAILED
            : (function (e) {
                return e.includes(d.a.LOADING)
              })([t, a, n, i, r])
            ? d.a.LOADING
            : d.a.LOADED
        },
        Pe = function () {
          return function (e, t, a) {
            a.api
            var n = t(),
              i = ne(n)
            return i !== d.a.LOADING && i !== d.a.LOADED ? e(xe()) : Promise.resolve()
          }
        },
        xe = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(I.b)(e, { request: n.AccountVerification.fetchAccess })({
              actionTypes: j,
              context: 'FETCH_ACCESS',
            })
          }
        },
        Ge = function () {
          return function (e, t, a) {
            a.api
            var n = t(),
              i = re(n)
            return i !== d.a.LOADING && i !== d.a.LOADED
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
            return i !== d.a.LOADING && i !== d.a.LOADED
              ? e(function (e, t, a) {
                  var n = a.api
                  return Object(I.b)(e, { request: n.AccountVerification.fetchAccountViolations })({
                    actionTypes: q,
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
              return e[b].authenticationResult.fetchStatus
            })(t()) !== d.a.LOADING
              ? e(function (e, t, a) {
                  var n = a.api
                  return Object(I.b)(e, { request: n.AccountVerification.fetchAuthenticationResult })({
                    actionTypes: Q,
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
              i = be(n)
            return i !== d.a.LOADING && i !== d.a.LOADED
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
            t({ type: x, payload: e })
          }
        },
        ke = function (e, t) {
          return function (a, n, i) {
            i.api
            a({ type: G, payload: { countryCode: e, countryName: t } })
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
        qe = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(I.b)(e, { request: n.AccountVerification.fetchBadgeViolations })({
              actionTypes: $,
              context: 'FETCH_BADGE_VIOLATIONS',
            })
          }
        },
        Qe = function () {
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
              c = Ie(o) || void 0,
              E = De(o) || void 0,
              T = Ue(o) || {},
              u = Fe(o) || void 0,
              d = u && E !== A.l.NEWS,
              N = { authenticity_type: l }
            null != c &&
              c.siteUrl &&
              (N = s()(
                s()({}, N),
                {},
                { site_url: null == c || null === (n = c.siteUrl) || void 0 === n ? void 0 : n[0] },
              ))
            null != c &&
              c.email &&
              (N = s()(
                s()({}, N),
                {},
                { verified_email: null == c || null === (i = c.email) || void 0 === i ? void 0 : i[0] },
              ))
            var _,
              p,
              b,
              R,
              C,
              m,
              O,
              f,
              S,
              L,
              h,
              y = { category: E }
            ;(d && (y = s()(s()({}, y), {}, { notability_subcategory: u })),
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
                    null == T || null === (b = T.hashtagReferenceUrl) || void 0 === b ? void 0 : b[0],
                },
              ))
            null != T &&
              T.imdbReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                { imdb_reference_url: null == T || null === (R = T.imdbReferenceUrl) || void 0 === R ? void 0 : R[0] },
              ))
            null != T &&
              T.leadershipReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                {
                  leadership_reference_url:
                    null == T || null === (C = T.leadershipReferenceUrl) || void 0 === C ? void 0 : C[0],
                },
              ))
            null != T &&
              T.mainReferenceUrl &&
              (y = s()(
                s()({}, y),
                {},
                { main_reference_url: null == T || null === (m = T.mainReferenceUrl) || void 0 === m ? void 0 : m[0] },
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
                    null == T || null === (O = T.publicReferenceUrl) || void 0 === O ? void 0 : O[0],
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
            var D = { authenticity_claim: N, notability_claim: y }
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
              c = Te(l),
              E = fe(l),
              s = he(l),
              T = Se(l)
            if (c) {
              var u,
                d = Object(p.k)(l, c),
                N = i()(d, 1)[0]
              r = null == N || null === (u = N.originalMediaFile) || void 0 === u ? void 0 : u.fileHandle
            }
            if (E) {
              var _,
                A = Object(p.k)(l, E),
                b = i()(A, 1)[0]
              n = null == b || null === (_ = b.originalMediaFile) || void 0 === _ ? void 0 : _.fileHandle
            }
            var R = { backImage: r, country: T, frontImage: n, idType: s }
            return Object(I.b)(e, { params: R, request: o.AccountVerification.verifyIdDocument })({
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
              I = c.mentions_eligible
            switch (e) {
              case A.h.NOTABILITY_CATEGORY_SELECT:
                a({ payload: t, type: B })
                break
              case A.h.COMPANY_SUBCATEGORY:
              case A.h.ENTERTAINMENT_QUALIFICATIONS:
              case A.h.GOVERNMENT_SUBCATEGORY:
              case A.h.INFLUENCER_SUBCATEGORY:
              case A.h.SPORTS_SUBCATEGORY:
                a({ payload: t, type: w })
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
                a(E ? { payload: t, type: W } : { payload: t, type: m })
                break
              case A.h.CREATOR_PROFILE:
              case A.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL:
                a({ payload: t, type: C })
                break
              case A.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE:
              case A.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE:
                a(E || I ? { payload: t, type: W } : { payload: t, type: m })
                break
              case A.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL:
              case A.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL:
              case A.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL:
                a({ payload: t, type: O })
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
                  E || I
                    ? { payload: s()(s()({}, t), {}, { newsType: l }), type: W }
                    : { payload: s()({}, t), type: R },
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
            o = [ee].concat(c()(t.slice(1, -1)))
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
          return Ds
        }),
        a.d(t, 'AccountVerification', function () {
          return Fs
        })
      var n,
        i,
        r,
        o,
        l,
        c,
        E,
        s,
        I,
        T,
        u,
        d,
        N,
        _,
        p,
        A,
        b,
        R,
        C,
        m,
        O,
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
        x = a('VrFO'),
        G = a.n(x),
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
        q =
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
        Q = a.n(q),
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
        ce = ee.b.isTwitterApp()
          ? { external: !0, pathname: 'twitter://settings/account', openInSameFrame: !0 }
          : { pathname: '/settings/account', openInSameFrame: !0 },
        Ee = ee.b.isTwitterApp()
          ? { external: !0, pathname: 'twitter://profiles/edit', openInSameFrame: !0 }
          : { external: !0, pathname: '/settings/profile', openInSameFrame: !0 },
        se = function (e) {
          var t,
            a = e.accountViolations,
            n = [te.r.PROFILE_COMPLETION, te.r.ACCOUNT_SECURITY],
            i =
              ((t = {}),
              z()(t, te.r.PROFILE_COMPLETION, { actionLink: Ee, buttonText: re, description: le, title: oe }),
              z()(t, te.r.ACCOUNT_SECURITY, { actionLink: ce, buttonText: ae, description: ie, title: ne }),
              t),
            r = n.find(function (e) {
              var t
              return null === (t = a.violations) || void 0 === t
                ? void 0
                : t.some(function (t) {
                    return t.violation_category === e && t.violation_status === te.s.OUT_OF_COMPLIANCE
                  })
            })
          if (void 0 === r) throw new Error('cannot render Account violations without valid violations')
          var o = i[r],
            l = o.actionLink,
            c = o.buttonText,
            E = o.description,
            s = o.title
          return Q.a.createElement(J.a, {
            actionLabel: c,
            actionLink: l,
            graphicDisplayMode: 'none',
            headline: s,
            onAction: X.a,
            onClose: X.a,
            subtext: E,
            withCloseButton: !1,
          })
        },
        Ie = a('ddV6'),
        Te = a.n(Ie),
        ue =
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
        de = a('rHpw'),
        Ne = de.a.create(function (e) {
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
                .concat(de.a.theme.lineHeights.headline1, ' + 2 * ')
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
        be = a('w6IS'),
        Re = a('tn7R'),
        Ce = Z.a.j24c37b2,
        me = Z.a.c1df579e,
        Oe = Z.a.ge483f9e,
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
            c = 0 === i.length
          if (
            c ||
            (function (e) {
              var t = e.split('@'),
                a = Te()(t, 2)[1],
                n = Object(be.a)(Object(Re.a)(ye))
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
            var E = c ? Le : he,
              s = c
                ? (function (e) {
                    return Q.a.createElement(
                      Z.a.I18NFormatMessage,
                      { $i18n: 'jf9308af' },
                      Q.a.createElement(pe.b, { link: e }, Z.a.e1e878ed),
                    )
                  })(n)
                : (function (e) {
                    return Q.a.createElement(
                      Z.a.I18NFormatMessage,
                      { $i18n: 'e9976a40' },
                      Q.a.createElement(pe.b, { link: e }, Z.a.ced76119),
                    )
                  })(n)
            return Q.a.createElement(J.a, {
              actionLabel: Ce,
              graphicDisplayMode: 'none',
              headline: E,
              onAction: r,
              onClose: X.a,
              subtext: s,
              withCloseButton: !1,
            })
          }
          return Q.a.createElement(
            _e.a,
            { style: [Ne.container, l && Ne.narrowContainer] },
            Q.a.createElement(
              pe.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: ue.b,
                size: 'title4',
                style: Ne.header,
                weight: 'heavy',
              },
              Se,
            ),
            Q.a.createElement(
              _e.a,
              { style: Ne.scrollableContainer },
              Q.a.createElement(pe.b, { color: 'gray700' }, Oe),
              ((a = fe), Q.a.createElement(pe.b, { size: 'subtext2', style: Ne.subheading, weight: 'heavy' }, a)),
              ((t = i), Q.a.createElement(pe.b, { style: Ne.subtext }, t)),
            ),
            Q.a.createElement(Ae.a, { onClick: o, style: Ne.buttonFixed, type: 'brandFilled' }, me),
          )
        },
        Fe = a('kGix'),
        Ue = a('v//M'),
        ve = a('jHSc'),
        Me = (a('yH/f'), a('TIdA')),
        ge = a('A91F'),
        Pe = 'https://abs.twimg.com/images/verification-form-start.png',
        xe = 'https://abs.twimg.com/images/verification-form-loading.png',
        Ge = 'https://abs.twimg.com/images/verification-form-sent.png',
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
            default: xe,
            variants: [
              { uri: xe, width: Ye, height: 400 },
              { uri: 'https://abs.twimg.com/images/verification-form-loading-large.png', width: Ve, height: 800 },
            ],
          }),
          z()(n, Be.SENT, {
            aspectRatio: 2,
            default: Ge,
            variants: [
              { uri: Ge, width: Ye, height: 300 },
              { uri: 'https://abs.twimg.com/images/verification-form-sent-large.png', width: Ve, height: 600 },
            ],
          }),
          n),
        we = de.a.create(function () {
          return { narrowBanner: { flex: 1 } }
        }),
        ke = function (e) {
          var t = e.isNarrow,
            a = e.type,
            n = We[a],
            i = Q.a.createElement(Me.a, {
              accessibilityLabel: '',
              aspectMode: t ? ge.a.COVER : ge.a.exact(n.aspectRatio),
              customVariants: n.variants,
              image: n.default,
            })
          return t ? Q.a.createElement(_e.a, { style: we.narrowBanner }, i) : i
        },
        He = Z.a.j163be32,
        Ke = Z.a.gaf821c8,
        je = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e5b4cc43' },
          Q.a.createElement(
            pe.b,
            { link: 'https://help.twitter.com/managing-your-account/twitter-verified-accounts' },
            Z.a.e1ac0f9a,
          ),
        ),
        ze = function (e) {
          var t = e.handleOnClick,
            a = e.isNarrow
          return Q.a.createElement(
            _e.a,
            { style: Ne.largeBannerContainer },
            Q.a.createElement(ke, { isNarrow: a, type: Be.START }),
            Q.a.createElement(
              _e.a,
              { style: [Ne.container, Ne.verticalCenter, a && Ne.narrowContainer] },
              Q.a.createElement(
                pe.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: ue.b,
                  size: 'title4',
                  style: Ne.header,
                  weight: 'heavy',
                },
                Ke,
              ),
              Q.a.createElement(pe.b, { color: 'gray700' }, je),
              Q.a.createElement(Ae.a, { onClick: t, style: Ne.buttonPadded, type: 'brandFilled' }, He),
            ),
          )
        },
        qe = (a('tQbP'), a('+KXO'), a('WNMA'), a('rxPX')),
        Qe = a('ZyHq'),
        $e = Object(qe.a)()
          .propsFromState(function () {
            return { documentFormats: Qe.A, idCountry: Qe.G, idType: Qe.I }
          })
          .propsFromActions(function () {
            return { setNextFlow: Qe.V }
          })
          .withAnalytics(),
        Ze = Object(qe.a)().propsFromActions(function () {
          return { setNextFlow: Qe.V }
        }),
        Je = a('iySH'),
        Xe = a('htQn'),
        et = de.a.create(function (e) {
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
          return Q.a.createElement(
            _e.a,
            { style: [Ne.container, i && Ne.narrowContainer] },
            Q.a.createElement(
              pe.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: ue.b,
                size: 'title4',
                style: Ne.header,
                weight: 'heavy',
              },
              l,
            ),
            Q.a.createElement(
              _e.a,
              { style: Ne.scrollableContainer },
              n && Q.a.createElement(pe.b, { color: 'gray700' }, n),
              Q.a.createElement(
                _e.a,
                { accessibilityLabelledBy: ue.b, accessibilityRole: 'group', style: Ne.contentContainer },
                r.map(function (e, t) {
                  var a = e.description,
                    n = e.disabled,
                    i = void 0 !== n && n,
                    r = e.label,
                    c = e.nextStep
                  return Q.a.createElement(
                    Xe.a,
                    {
                      disabled: i,
                      key: ''.concat(l, '-pivot-').concat(t),
                      onClick: function () {
                        !(function (e) {
                          o(e)
                        })(c)
                      },
                      style: [Ne.listItem, Ne.bottomBorder],
                      withInteractiveStyling: !0,
                    },
                    Q.a.createElement(
                      _e.a,
                      { style: et.contentContainer },
                      Q.a.createElement(
                        _e.a,
                        { style: et.content },
                        Q.a.createElement(pe.b, null, r),
                        a && Q.a.createElement(pe.b, { color: 'gray700', size: 'subtext2' }, a),
                      ),
                      Q.a.createElement(Je.a, { style: et.icon }),
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
        ct = Z.a.b2ab6008,
        Et = Z.a.c1df579e,
        st = function (e, t) {
          return e && t ? e[t].country : ot
        },
        It = function (e, t, a) {
          return e && t && a ? e[t].id_types[a].name : ct
        },
        Tt = $e(function (e) {
          var t = e.documentFormats,
            a = e.idCountry,
            n = e.idType,
            i = e.isNarrow,
            r = e.setNextFlow
          return Q.a.createElement(at, {
            button: Q.a.createElement(
              Ae.a,
              {
                disabled: !(a && n),
                onClick: function () {
                  return r()
                },
                style: Ne.buttonFixed,
                type: 'brandFilled',
              },
              Et,
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
        ut = Tt,
        dt = a('1byD'),
        Nt = a('6OUF'),
        _t = Z.a.h9270b1b,
        pt = function (e) {
          var t = e.documentFormats,
            a = e.isNarrow,
            n = e.onCountryClick,
            i = Q.a.useState(new RegExp('', 'i')),
            r = Te()(i, 2),
            o = r[0],
            l = r[1],
            c = Q.a.useMemo(
              function () {
                return t
                  ? Object.keys(t).sort(function (e, a) {
                      return t[e].country.localeCompare(t[a].country)
                    })
                  : []
              },
              [t],
            )
          return Q.a.createElement(
            _e.a,
            {
              accessibilityLabelledBy: ue.b,
              accessibilityRole: 'group',
              style: [Ne.container, a && Ne.narrowContainer],
            },
            Q.a.createElement(
              _e.a,
              { style: Ne.fixedContainer },
              Q.a.createElement(
                pe.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: ue.b,
                  size: 'title4',
                  style: Ne.header,
                  weight: 'heavy',
                },
                rt,
              ),
              Q.a.createElement(
                _e.a,
                { style: [Ne.contentContainer, Ne.topPaddingSmall] },
                Q.a.createElement(Nt.a, {
                  Icon: dt.a,
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
            Q.a.createElement(
              _e.a,
              { style: Ne.scrollableContainer },
              c.map(function (e) {
                return t && t[e].country.match(o)
                  ? Q.a.createElement(
                      Xe.a,
                      {
                        key: e,
                        onClick: function () {
                          return n(e, t[e].country)
                        },
                        style: [Ne.listItem, Ne.bottomBorder],
                        withInteractiveStyling: !0,
                      },
                      Q.a.createElement(pe.b, null, t[e].country),
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
            r = Q.a.useMemo(
              function () {
                return t && a
                  ? Object(Re.a)(t[a].id_types).sort(function (e, t) {
                      return e.name.localeCompare(t.name)
                    })
                  : []
              },
              [t, a],
            )
          return Q.a.createElement(
            _e.a,
            {
              accessibilityLabelledBy: ue.b,
              accessibilityRole: 'group',
              style: [Ne.container, n && Ne.narrowContainer],
            },
            Q.a.createElement(
              _e.a,
              { style: Ne.fixedContainer },
              Q.a.createElement(
                pe.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: ue.b,
                  size: 'title4',
                  style: Ne.header,
                  weight: 'heavy',
                },
                lt,
              ),
            ),
            Q.a.createElement(
              _e.a,
              { style: [Ne.contentContainer, Ne.scrollableContainer, Ne.topPaddingSmall] },
              r.map(function (e) {
                var t = e.id_type,
                  a = e.name
                return Q.a.createElement(
                  Xe.a,
                  {
                    key: t,
                    onClick: function () {
                      return i(t, a)
                    },
                    style: [Ne.listItem, Ne.bottomBorder],
                    withInteractiveStyling: !0,
                  },
                  Q.a.createElement(pe.b, null, a),
                )
              }),
            ),
          )
        },
        bt = a('m3Bd'),
        Rt = a.n(bt),
        Ct = Object(qe.a)()
          .propsFromActions(function () {
            return { setNextFlow: Qe.V, setPreviousFlow: Qe.W }
          })
          .withAnalytics(),
        mt = [
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
        Ot = Ct(function (e) {
          var t = e.analytics,
            a = e.graphicDisplayMode,
            n = void 0 === a ? 'none' : a,
            i = e.onAction,
            r = e.onTertiaryAction,
            o = e.setNextFlow,
            l = e.setPreviousFlow,
            c = e.tertiaryActionLabel,
            E = e.tertiaryActionLink,
            s = e.withCloseButton,
            I = void 0 !== s && s,
            T = Rt()(e, mt),
            u =
              r ||
              (E
                ? X.a
                : function () {
                    return l()
                  })
          return Q.a.createElement(
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
                    i ? i(e) : c ? o() : l()
                },
                onTertiaryAction: u,
                tertiaryActionLabel: c,
                tertiaryActionLink: E,
                withCloseButton: I,
              },
              T,
            ),
          )
        }),
        ft = Ot,
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
              a = Object(Qe.y)(e)
            return null !== (t = null == a ? void 0 : a.inputData) && void 0 !== t ? t : []
          }),
        yt = Object(qe.a)()
          .propsFromState(function () {
            return { currentStep: Qe.z, formHistory: ht }
          })
          .propsFromActions(function () {
            return { setFormStepData: Qe.R, setNextFlow: Qe.V, updateFormHistory: Qe.Y }
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
        gt = function (e, t, a, n, i, r, o, l, c) {
          var E = n || r,
            s =
              l &&
              (function (e) {
                e.newsType
                var t = Rt()(e, Ut)
                return Object.keys(t).map(function (e) {
                  return vt(e)
                })
              })(l),
            I = {}
          switch (te.g[a].scribeComponent) {
            case te.p.LANDING_PAGE:
              I = { access_status: e }
              break
            case te.p.NOTABILITY_CATEGORY:
              I = { meets_threshold: E, notability_category: o }
              break
            case te.p.NOTABILITY_SUBCATEGORY:
              I = { meets_threshold: E, notability_category: o, category_subtype: c }
              break
            case te.p.NOTABILITY_METHOD:
            case te.p.NOTABILITY_INPUT:
              I = { meets_threshold: E, notability_category: o, category_subtype: c, notability_method: s }
              break
            case te.p.AUTHENTICITY_TYPE:
              I = { notability_category: o, category_subtype: c, authenticity_type: t }
              break
            case te.p.ID_UPLOAD:
              I = { notability_category: o, category_subtype: c, authenticity_type: t, id_type: i }
              break
            case te.p.REVIEW_SUBMIT:
            case te.p.THANK_YOU:
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
              var a = Te()(t, 2),
                n = a[0],
                i = a[1]
              return void 0 === i || (e[n] = i), e
            }, {})),
          }
        },
        Pt = a('855f'),
        xt = a('p+r5'),
        Gt = a('XiMS'),
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
        Ht = de.a.create(function (e) {
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
            c = e.confirmationText,
            E = e.currentStep,
            s = e.description,
            I = e.formHistory,
            T = e.isNarrow,
            u = e.items,
            d = e.maxItems,
            N = void 0 === d ? 10 : d,
            _ = e.nextFormStep,
            p = e.setFormStepData,
            A = e.setNextFlow,
            b = e.title,
            R = e.updateFormHistory,
            C = Q.a.useState(
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
              })(u, I),
            ),
            m = Te()(C, 2),
            O = m[0],
            f = m[1],
            S = Q.a.useState(!1),
            L = Te()(S, 2),
            h = L[0],
            y = L[1],
            D = Q.a.useState(!1),
            F = Te()(D, 2),
            U = F[0],
            v = F[1],
            g = Q.a.useState(!0),
            x = Te()(g, 2),
            G = x[0],
            Y = x[1],
            V = Q.a.useState(null),
            B = Te()(V, 2),
            W = B[0],
            w = B[1],
            k = u.length
          Q.a.useEffect(
            function () {
              var e = Object(Re.a)(O),
                t = (i ? e.slice(0, k) : e).every(function (e) {
                  return kt(e.value)
                }),
                a = !t || !(!c || U)
              y(t), Y(a)
            },
            [i, c, O, U, k],
          )
          var H = function (e, t) {
            w(
              setTimeout(function () {
                var a = !kt(e)
                return f(P()(P()({}, O), {}, z()({}, t, P()(P()({}, O[t]), {}, { isUrlInvalid: a, value: e }))))
              }, 2e3),
            )
          }
          return Q.a.createElement(
            _e.a,
            { style: [Ne.container, T && Ne.narrowContainer] },
            Q.a.createElement(
              pe.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: ue.b,
                size: 'title4',
                style: Ne.header,
                weight: 'heavy',
              },
              b,
            ),
            Q.a.createElement(
              _e.a,
              { style: Ne.scrollableContainer },
              s && Q.a.createElement(pe.b, { color: 'gray700' }, s),
              Q.a.createElement(
                _e.a,
                { accessibilityLabelledBy: ue.b, accessibilityRole: 'group', style: Ne.contentContainer },
                Object.keys(O).map(function (e, t) {
                  var a = O[e],
                    n = a.isUrlInvalid,
                    i = a.labelGenerator,
                    r = void 0 === i ? null : i,
                    o = (a.required, a.value),
                    l = Rt()(a, Yt),
                    c = l.label || '',
                    s = l.name || ''.concat(E, '-').concat(e),
                    I = l.errorText || wt,
                    T = Pt.a.getFormattedCount(t + 1),
                    u = r ? r({ n: T }) : c
                  return Q.a.createElement(
                    xt.a,
                    M()({}, l, {
                      errorText: I,
                      invalid: n,
                      key: e,
                      label: u,
                      name: s,
                      onBlur: function (t) {
                        return (function (e, t) {
                          clearTimeout(W)
                          var a = !kt(e.target.value)
                          return f(P()(P()({}, O), {}, z()({}, t, P()(P()({}, O[t]), {}, { isUrlInvalid: a }))))
                        })(t, e)
                      },
                      onChange: function (t) {
                        return (function (e, t) {
                          clearTimeout(W)
                          var a = !1,
                            n = e.target.value
                          return (
                            O[t].isUrlInvalid ? (a = !kt(n)) : H(n, t),
                            f(P()(P()({}, O), {}, z()({}, t, P()(P()({}, O[t]), {}, { isUrlInvalid: a, value: n }))))
                          )
                        })(t, e)
                      },
                      style: Ht.input,
                      value: o,
                    }),
                  )
                }),
                i && h && Object.keys(O).length < N
                  ? Q.a.createElement(
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
                            })(O),
                          )
                        },
                        style: Ht.addFieldText,
                      },
                      a,
                    )
                  : null,
              ),
              c &&
                Q.a.createElement(
                  _e.a,
                  { style: [Ne.contentContainer, Ne.checkboxContainer, Ht.checkboxContainer] },
                  Q.a.createElement(
                    _e.a,
                    { style: Ne.checkbox },
                    Q.a.createElement(Gt.a, {
                      accessibilityLabelledBy: Vt,
                      checked: U,
                      onChange: function () {
                        return v(!U)
                      },
                    }),
                  ),
                  Q.a.createElement(
                    _e.a,
                    { nativeID: Vt, style: Ne.checkboxText },
                    Q.a.createElement(pe.b, { color: 'gray700' }, c),
                  ),
                ),
            ),
            Q.a.createElement(
              Ae.a,
              {
                disabled: G,
                onClick: function () {
                  var e = (function (e) {
                      var t = {}
                      return (
                        Object(Re.a)(e).forEach(function (e) {
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
                    })(O),
                    t = Object.keys(e).map(function (e) {
                      return vt(e)
                    })
                  p(E, e),
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
                    R(
                      (function (e) {
                        return Object(Re.a)(e).map(function (e) {
                          var t
                          return null !== (t = e.value) && void 0 !== t ? t : ''
                        })
                      })(O),
                    ),
                    A(_)
                },
                style: Ne.buttonFixed,
                type: 'brandFilled',
              },
              l,
            ),
          )
        }),
        jt = Kt,
        zt = a('0KEI'),
        qt = Object(qe.a)()
          .propsFromState(function () {
            return { errors: Qe.q, status: Qe.r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(zt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_LOADING',
              ),
              fetchAuthenticationResult: Qe.e,
              resetAuthenticationResult: Qe.h,
              resetDocumentIdProcess: Qe.i,
              setNextFlow: Qe.V,
              setPreviousFlow: Qe.W,
            }
          })
          .withAnalytics(),
        Qt = a('B5iK'),
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
        ca = Z.a.ee38d0f0,
        Ea = Z.a.cb97ee3e,
        sa = Z.a.hc371f34,
        Ia = Z.a.b9d0ad9f,
        Ta = Z.a.ge137dce,
        ua = Z.a.h2b9a5fd,
        da = Z.a.baccb708,
        Na = Z.a.feadd98c,
        _a = Z.a.j7ae97a9,
        pa = Z.a.c368aa8d,
        Aa = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'j23c6258' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.c076e32d),
        ),
        ba = Z.a.ded0edad,
        Ra = Z.a.bebae559,
        Ca = Z.a.c557161f,
        ma = Z.a.e2d42628,
        Oa = Z.a.jc19b4e7,
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
          return { title: Na, description: e, articleLabelGenerator: ba, addFieldText: Jt }
        },
        Pa = function (e) {
          return { title: Ea, description: e, label: la }
        },
        xa = function (e) {
          return { title: ma, description: e, label: Oa }
        },
        Ga = Z.a.c6bd60ec,
        Ya = Z.a.je403ac5,
        Va = Z.a.ff8c97fb,
        Ba = Z.a.h4d652fb,
        Wa = Z.a.c5b72ac5,
        wa = Z.a.f7ff070c,
        ka = Z.a.eb7de689,
        Ha =
          ((i = {}),
          z()(i, te.l.ACTIVISM, Ga),
          z()(i, te.l.COMPANY, Ya),
          z()(i, te.l.ENTERTAINMENT, Va),
          z()(i, te.l.GOVERNMENT, Ba),
          z()(i, te.l.INFLUENCER_OTHER, Wa),
          z()(i, te.l.NEWS, wa),
          z()(i, te.l.SPORTS, ka),
          i),
        Ka = Z.a.cc4b66b5,
        ja = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'gee7fae8' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.e492eeb4),
        ),
        za = { title: Ka, description: ja },
        qa = Z.a.b37461a4,
        Qa = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd454b49e' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.ece0b9bc),
        ),
        $a = Z.a.b27325f6,
        Za = Z.a.a5a6affb,
        Ja = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'hd977dd9' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.db252639),
        ),
        Xa = Z.a.a15326dd,
        en = Z.a.g704a939,
        tn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e3432573' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.b25b02c1),
        ),
        an = {
          title: ea,
          description: Ja,
          notEligibleButton: aa,
          notEligibleDescription: tn,
          notEligibleTitle: Da,
          items: [
            { helpText: ia, label: na },
            { helpText: ca, label: la },
            { helpText: Xa, label: sa },
            { helpText: en, label: fa },
          ],
        },
        nn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.j6ef6afa),
        ),
        rn = Ma(nn),
        on = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.d42d1629),
        ),
        ln = Pa(on),
        cn = { title: da, description: Aa, articleLabelGenerator: ba, addFieldText: Jt },
        En = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ie26d72d' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.ccadfc84),
        ),
        sn = { title: ha, description: En, label: ya, confirmationText: La },
        In = Z.a.d2ea2049,
        Tn = Z.a.h753ddd2,
        un = {
          title: qa,
          description: Qa,
          items: [
            { helpText: Za, label: $a },
            { helpText: Tn, label: In },
          ],
        },
        dn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'af3fe861' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.ddb47f56),
        ),
        Nn = Z.a.a15326dd,
        _n = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a08d6af3' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.bf9e181a),
        ),
        pn = {
          title: ea,
          description: dn,
          notEligibleButton: aa,
          notEligibleDescription: _n,
          notEligibleTitle: Da,
          items: [
            { helpText: ia, label: na },
            { helpText: ca, label: la },
            { helpText: Nn, label: sa },
          ],
        },
        An = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.j6ef6afa),
        ),
        bn = Ma(An),
        Rn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.d42d1629),
        ),
        Cn = Pa(Rn),
        mn = { title: da, description: Aa, articleLabelGenerator: ba, addFieldText: Jt },
        On = (Z.a.I18NFormatMessage, pe.b, Z.a.ccadfc84, Z.a.ff929feb),
        fn = Z.a.jf537894,
        Sn = Z.a.i3e6aaa5,
        Ln = Z.a.bbcbb9e6,
        hn = {
          title: qa,
          description: Qa,
          items: [
            { helpText: fn, label: On },
            { helpText: Ln, label: Sn },
          ],
        },
        yn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f774e39d' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.e8e39f94),
        ),
        Dn = {
          title: ea,
          description: yn,
          items: [
            { helpText: ia, label: na },
            { helpText: ca, label: la },
            { helpText: Ca, label: Ra },
            { helpText: ua, label: sa },
          ],
        },
        Fn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd8510869' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.e126dd3e),
        ),
        Un = Ma(Fn),
        vn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'h75e3640' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.gbdf1325),
        ),
        Mn = Pa(vn),
        gn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'de6d69a1' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.b0abbb16),
        ),
        Pn = xa(gn),
        xn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'be0e8fda' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.g4e815f3),
        ),
        Gn = ga(xn),
        Yn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'baed7213' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.i560665d),
        ),
        Vn = Z.a.j0bc23f3,
        Bn = { title: ta, description: Yn, confirmationText: Vn },
        Wn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c5d688ce' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.eb8eeaf0),
        ),
        wn = {
          title: ea,
          description: Wn,
          items: [
            { helpText: pa, label: _a },
            { helpText: Sa, label: fa },
          ],
        },
        kn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fce3e22d' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.h486f753),
        ),
        Hn = ga(kn),
        Kn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f1b276f0' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.a77ed149),
        ),
        jn = { title: Xt, description: Kn, label: fa, confirmationText: La },
        zn = Z.a.aa6228de,
        qn = Z.a.d5b3cbc9,
        Qn = Z.a.b5a3e590,
        $n = Z.a.e484f794,
        Zn = Z.a.b8d8ea64,
        Jn = Z.a.ff27db3c,
        Xn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e2465096' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.jc7215cd),
        ),
        ei = Ma(Xn),
        ti = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g83bcecc' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.gdb5ae61),
        ),
        ai = ga(ti),
        ni = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f3016c6f' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.icb5913e),
        ),
        ii = {
          title: ea,
          description: ni,
          items: [
            { helpText: ia, label: na },
            { helpText: ca, label: la },
            { helpText: Ca, label: Ra },
            { helpText: ua, label: sa },
          ],
        },
        ri = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'h74144bd' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.af819831),
        ),
        oi = xa(ri),
        li = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jef5dfc5' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.d35525bf),
        ),
        ci = Pa(li),
        Ei = {
          title: qa,
          description: Qa,
          items: [
            { helpText: qn, label: zn },
            { helpText: $n, label: Qn },
            { helpText: Jn, label: Zn },
          ],
        },
        si = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'gf5a4309' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.cb181ed0),
        ),
        Ii = {
          title: ea,
          description: si,
          items: [
            { helpText: ia, label: na },
            { helpText: ca, label: la },
            { helpText: Ca, label: Ra },
            { helpText: ua, label: sa },
          ],
        },
        Ti = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g2e175b1' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.f6c3d3ff),
        ),
        ui = Ma(Ti),
        di = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efc369c2' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.bad6af53),
        ),
        Ni = ga(di),
        _i = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ff03f07c' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.af0cb1b5),
        ),
        pi = xa(_i),
        Ai = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a3e9dde2' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.h84f1fe0),
        ),
        bi = Pa(Ai),
        Ri = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c2b8fb3c' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.bd70d5d0),
        ),
        Ci = Z.a.c0e57cb2,
        mi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'da6e5b18' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.h9ec0778),
        ),
        Oi = Z.a.f3c605b6,
        fi = {
          title: ea,
          description: Ri,
          items: [
            { helpText: ia, label: na },
            { helpText: ca, label: la },
            { helpText: Ta, label: sa },
          ],
        },
        Si = { title: Ci, description: mi, items: [{ label: Oi }] },
        Li = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.j6ef6afa),
        ),
        hi = { title: ra, description: Li, label: oa },
        yi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'bb47d2b9' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.f7998564),
        ),
        Di = { title: Ea, description: yi, label: la },
        Fi = { title: da, description: Aa, articleLabelGenerator: ba, addFieldText: Jt },
        Ui = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'db930fb2' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.b4e93970),
        ),
        vi = Z.a.h042d1a5,
        Mi = Z.a.d2310f0b,
        gi = {
          title: ea,
          description: Ui,
          items: [
            { description: Mi, label: vi },
            { description: Ta, label: _a },
          ],
        },
        Pi = Z.a.ba04b4c1,
        xi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'dc263ec0' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.jb3e663d),
        ),
        Gi = { title: Pi, description: xi, label: vi },
        Yi = { title: Na, description: Aa, articleLabelGenerator: ba, addFieldText: Jt },
        Vi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd8b21ebb' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.a7a51b91),
        ),
        Bi = { title: va, description: Vi, label: Fa },
        Wi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'i3b4217a' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.c58d2c6b),
        ),
        wi = Z.a.i9b124b6,
        ki = Z.a.f84a99ee,
        Hi = Z.a.j2cb5f50,
        Ki = Z.a.j2472894,
        ji = Z.a.ha44c13f,
        zi = Z.a.j8ae9d40,
        qi = {
          title: qa,
          description: Wi,
          items: [
            { helpText: ki, label: wi },
            { helpText: Ki, label: Hi },
            { helpText: zi, label: ji },
          ],
        },
        Qi = Z.a.ef1d6175,
        $i = Z.a.f54ba6e6,
        Zi = Z.a.dd85d0af,
        Ji = Z.a.f0058c60,
        Xi = Z.a.f420a711,
        er = Z.a.fb97d22b,
        tr = {
          candidateTitle: Qi,
          candidateDescription: $i,
          officialTitle: Zi,
          officialDescription: Ji,
          confirmButtonLabel: Xi,
          declineButtonLabel: er,
        },
        ar = Z.a.e16b1cc8,
        nr = Z.a.cf2ee92e,
        ir = Z.a.g544885e,
        rr = Z.a.bd0b4542,
        or = Z.a.i45b224c,
        lr = Z.a.fba1dd66,
        cr = Z.a.e95c44dd,
        Er = Z.a.fa5e15e1,
        sr = {
          candidateTitle: ar,
          candidateDescription: nr,
          officeTitle: ir,
          officeDescription: rr,
          officialTitle: or,
          officialDescription: lr,
          confirmButtonLabel: cr,
          declineButtonLabel: Er,
        },
        Ir = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ja62479f' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.c04b4b1b),
        ),
        Tr = ga(Ir),
        ur = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f28bbbb0' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.a60039a6),
        ),
        dr = ga(ur),
        Nr = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b229f4b8' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.ba75f2ad),
        ),
        _r = ga(Nr),
        pr = Z.a.jdf47e8d,
        Ar = Z.a.eeec7315,
        br = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ec71430d' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.d9486fbf),
        ),
        Rr = { title: Ar, description: br, websiteLabel: pr },
        Cr = Z.a.b163b653,
        mr = Z.a.d2378d34,
        Or = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f9e2b0f2' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.e3b02224),
        ),
        fr = { title: mr, description: Or, websiteLabel: Cr },
        Sr = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a394654e' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.e332fb11),
        ),
        Lr = { title: Xt, description: Sr, websiteLabel: Cr },
        hr = Z.a.a05b8445,
        yr = Z.a.hdad12b1,
        Dr = Z.a.a18c6dfb,
        Fr = Z.a.h0b46533,
        Ur = Z.a.d2d7af4b,
        vr = Z.a.d83e51db,
        Mr = {
          title: qa,
          description: Qa,
          items: [
            { description: Fr, label: Dr },
            { description: yr, label: hr },
            { description: vr, label: Ur },
          ],
        },
        gr = Z.a.g708cbdb,
        Pr = Z.a.b107ee5b,
        xr = Z.a.e95c44dd,
        Gr = Z.a.fa5e15e1,
        Yr = { title: gr, description: Pr, confirmButtonLabel: xr, declineButtonLabel: Gr },
        Vr = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'dcb0da53' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.h04c272b),
        ),
        Br = Z.a.e8746826,
        Wr = { title: ta, description: Vr, confirmationText: Br },
        wr = Z.a.jc09b420,
        kr = Z.a.gfbd7e58,
        Hr = Z.a.e95c44dd,
        Kr = Z.a.fa5e15e1,
        jr = { headline: wr, subtext: kr, actionLabel: Hr, tertiaryActionLabel: Kr },
        zr = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd82a96af' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.j331c658),
        ),
        qr = Z.a.h0ad4c9d,
        Qr = Z.a.a6553b5f,
        $r = Z.a.a29b2987,
        Zr = Z.a.ab4eae60,
        Jr = {
          title: ea,
          description: zr,
          items: [
            { description: Qr, label: qr },
            { description: Zr, label: $r },
          ],
        },
        Xr = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd47b4101' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.h02fe64e),
        ),
        eo = Z.a.b3fac982,
        to = { title: Xt, description: Xr, websiteLabel: Fa, confirmationText: eo },
        ao = Z.a.e26dc9e2,
        no = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a3540593' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.a7df4b84),
        ),
        io = { title: ao, description: no, articleNumerationLabelGenerator: ba, addFieldText: Jt },
        ro = Z.a.e164df2d,
        oo = Z.a.i80ff05e,
        lo = Z.a.cf7482eb,
        co = Z.a.cb70b893,
        Eo = { title: ro, description: oo, actionLabel: lo, tertiaryActionLabel: co },
        so = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'edb782e6' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.d575e579),
        ),
        Io = {
          title: ea,
          description: so,
          items: [
            { description: ia, label: na },
            { description: ca, label: la },
            { description: Ca, label: Ra },
            { description: Ia, label: sa },
          ],
        },
        To = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'cc16af2c' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.ede35c04),
        ),
        uo = Ma(To),
        No = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b42b7001' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.d5dedb7a),
        ),
        _o = Pa(No),
        po = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fd2c6f62' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.ab604a66),
        ),
        Ao = xa(po),
        bo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ec7027cc' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.i532d121),
        ),
        Ro = ga(bo),
        Co = Z.a.fcb96cfc,
        mo = Z.a.ddc7d64a,
        Oo = Z.a.c4e0d346,
        fo = Z.a.e3ce81fa,
        So = Z.a.b2808f47,
        Lo = Z.a.jaa90f86,
        ho = {
          title: qa,
          description: Qa,
          items: [
            { helpText: mo, label: Co },
            { helpText: fo, label: Oo },
            { helpText: Lo, label: So },
          ],
        },
        yo = Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'a0a9f835' }),
        Do = Z.a.bbd9a911,
        Fo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'iba551d5' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.f22a6d0c),
        ),
        Uo = { title: ta, description: yo, confirmationText: Do },
        vo = Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'h515e868' }),
        Mo = { title: ta, description: vo, confirmationText: Do },
        go = { headline: Da, subtext: Fo, actionLabel: aa },
        Po = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd2cd7f89' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.i78c9fd3),
        ),
        xo = Z.a.he9c5637,
        Go = {
          title: ea,
          description: Po,
          items: [
            { helpText: ia, label: na },
            { helpText: ca, label: la },
            { helpText: Ca, label: Ra },
            { helpText: xo, label: Ua },
            { helpText: ua, label: sa },
          ],
        },
        Yo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c68614a2' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.i78b0bd0),
        ),
        Vo = Ma(Yo),
        Bo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b4ea622e' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.i78103dc),
        ),
        Wo = Pa(Bo),
        wo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'acab99f6' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.ebfa8bb3),
        ),
        ko = xa(wo),
        Ho = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'df0b2577' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.fcfad60b),
        ),
        Ko = { title: va, description: Ho, label: Fa },
        jo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jfda4c28' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.a5e8a43a),
        ),
        zo = ga(jo),
        qo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g3299df1' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.d9bd3821),
        ),
        Qo = Z.a.bf06e1d5,
        $o = Z.a.e241d35d,
        Zo = {
          title: ea,
          description: qo,
          items: [
            { description: $o, label: _a },
            { description: Qo, label: Ua },
          ],
        },
        Jo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'id6bbc01' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.a67f27bc),
        ),
        Xo = Z.a.ad456030,
        el = Z.a.hbe2e65b,
        tl = {
          title: ea,
          description: Jo,
          items: [
            { description: Xo, label: _a },
            { description: el, label: Ua },
          ],
        },
        al = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fbe119c5' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.b8be7ad9),
        ),
        nl = { title: va, description: al, websiteLabel: Fa },
        il = ga(Aa),
        rl = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'da0e7f32' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.fa437e4d),
        ),
        ol = { title: va, description: rl, websiteLabel: Fa },
        ll = ga(Aa),
        cl = Z.a.j24c37b2,
        El = Z.a.j3da4de9,
        sl = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ca20e39f' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.b436b100),
        ),
        Il = Z.a.ff2ee0c1,
        Tl = Z.a.af39265e,
        ul = Z.a.hc61adfb,
        dl = Z.a.d2042392,
        Nl = Z.a.c365dcc5,
        _l = Z.a.c8ee31da,
        pl = Z.a.bb51cd79,
        Al =
          ((r = {}),
          z()(r, te.l.ACTIVISM, Il),
          z()(r, te.l.COMPANY, Tl),
          z()(r, te.l.ENTERTAINMENT, ul),
          z()(r, te.l.GOVERNMENT, dl),
          z()(r, te.l.INFLUENCER_OTHER, Nl),
          z()(r, te.l.NEWS, _l),
          z()(r, te.l.SPORTS, pl),
          r),
        bl = Z.a.d2ea2049,
        Rl =
          ((o = {}),
          z()(o, te.n.ACTIVIST, Ga),
          z()(o, te.n.CANDIDATE, Hi),
          z()(o, te.n.COMPANY, On),
          z()(o, te.n.CONTENT_CREATOR, $a),
          z()(o, te.n.ENTERTAINMENT_COMPANY, zn),
          z()(o, te.n.ENTERTAINMENT_INDIVIDUAL, Qn),
          z()(o, te.n.EXECUTIVE, Sn),
          z()(o, te.n.FREELANCER, hr),
          z()(o, te.n.GAMING_INDIVIDUAL, So),
          z()(o, te.n.INFLUENTIAL_INDIVIDUAL, bl),
          z()(o, te.n.JOURNALIST, Dr),
          z()(o, te.n.OFFICE, ji),
          z()(o, te.n.OFFICIAL, wi),
          z()(o, te.n.ORGANIZATION, Ur),
          z()(o, te.n.PRODUCTION, Zn),
          z()(o, te.n.SPORTS_ENTITY, Oo),
          z()(o, te.n.SPORTS_INDIVIDUAL, Co),
          o),
        Cl = Z.a.fc2a5c92,
        ml = Z.a.jf4b6f7f,
        Ol = El,
        fl = sl,
        Sl = Z.a.d338f53e,
        Ll = function (e) {
          var t = e.error,
            a = e.onButtonClick,
            n = t instanceof $t.a ? t.status : void 0,
            i = Sl,
            r = Cl,
            o = ml
          return (
            429 === n && ((i = cl), (r = Ol), (o = fl)),
            Q.a.createElement(J.a, {
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
        hl = Z.a.h2d4ba55,
        yl = Z.a.i2051842,
        Dl = (function (e) {
          k()(a, e)
          var t = K()(a)
          function a(e) {
            var n
            return (
              G()(this, a),
              (n = t.call(this, e)),
              z()(W()(n), '_handleErrorButtonClick', function () {
                n.props.resetDocumentIdProcess(), n.props.setPreviousFlow()
              }),
              z()(W()(n), '_isPollingDone', function (e) {
                return e === te.o.NOT_STARTED || e === te.o.CONCLUSIVE || e === te.o.INCONCLUSIVE
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
                    (this._pollingTimer = new Qt.b(5e3).interval(function () {
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
                    r === e.status || r !== te.o.CONCLUSIVE || n.length || (this._handleScribe('success'), i())
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
                  return t.length || a === te.o.INCONCLUSIVE || a === te.o.NOT_STARTED || 5 === this.state.retryCount
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
                    Q.a.createElement(Ll, { onButtonClick: this._handleErrorButtonClick })
                  )
                },
              },
              {
                key: '_renderLoading',
                value: function () {
                  return Q.a.createElement(
                    _e.a,
                    { style: Ne.largeBannerContainer },
                    Q.a.createElement(ke, { isNarrow: this.props.isNarrow, type: Be.LOADING }),
                    Q.a.createElement(
                      _e.a,
                      { style: [Ne.container, Ne.verticalCenter, this.props.isNarrow && Ne.narrowContainer] },
                      Q.a.createElement(
                        pe.b,
                        {
                          accessibilityLevel: 1,
                          accessibilityRole: 'heading',
                          nativeID: ue.b,
                          size: 'title4',
                          style: Ne.header,
                          weight: 'heavy',
                        },
                        hl,
                      ),
                      Q.a.createElement(pe.b, { color: 'gray700' }, yl),
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
        })(Q.a.Component),
        Fl = qt(Dl),
        Ul = Fl,
        vl = a('AspN'),
        Ml = function (e) {
          var t = Object(Qe.u)(e)
          return t ? Object(vl.k)(e, t)[0] : void 0
        },
        gl = function (e) {
          var t = Object(Qe.F)(e)
          return t ? Object(vl.k)(e, t)[0] : void 0
        },
        Pl = Object(qe.a)()
          .propsFromState(function () {
            return {
              backID: Qe.u,
              backImage: Ml,
              documentFormats: Qe.A,
              frontID: Qe.F,
              frontImage: gl,
              idCountry: Qe.G,
              idType: Qe.I,
              isConfirmed: Qe.x,
              uploadEntityId: Qe.B,
              uploadErrors: Qe.C,
              uploadFetchStatus: Qe.D,
              uploadRequestError: Qe.E,
            }
          })
          .propsFromActions(function () {
            return {
              addMedia: vl.b,
              createLocalApiErrorHandler: Object(zt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_UPLOAD',
              ),
              processMultipleMedia: vl.g,
              removeMedia: vl.h,
              resetAuthenticationResult: Qe.h,
              resetDocumentIdProcess: Qe.i,
              resetIntakeUpload: Qe.k,
              setBackID: Qe.Q,
              setFrontID: Qe.S,
              setNextFlow: Qe.V,
              toggleCheckboxConfirmation: Qe.X,
              verifyIdDocument: Qe.ab,
            }
          })
          .withAnalytics(),
        xl = a('LCtV'),
        Gl = a('T8pk'),
        Yl = a('VPdC'),
        Vl = a('pKoL'),
        Bl = a('rFBM'),
        Wl = ['application/pdf', 'image/bmp', 'image/jpeg', 'image/png', 'image/tiff'],
        wl = (function (e) {
          k()(a, e)
          var t = K()(a)
          function a() {
            var e
            G()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              z()(W()(e), '_handleDragDrop', function (t) {
                var a = e.props.onChange,
                  n = t.find(function (e) {
                    return Wl.includes(e.type)
                  })
                n && a([n])
              }),
              z()(W()(e), '_renderDragDropTarget', function () {
                var t = e.props,
                  a = t.accessibilityLabel,
                  n = t.onChange
                return Q.a.createElement(Yl.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !1,
                  accessibilityLabel: a,
                  customMimeTypes: Wl,
                  icon: Q.a.createElement(Gl.a, { style: kl.mediaPickerIcon }),
                  onChange: n,
                  size: 'small',
                  style: kl.mediaPicker,
                  withIcon: !0,
                })
              }),
              z()(W()(e), '_getResizeIfNeeded', function (e) {
                var t = e.externalMediaDetails && e.externalMediaDetails.height / e.externalMediaDetails.width
                return t && t > 1 ? 'width' : 'height'
              }),
              z()(W()(e), '_renderPreview', function (t) {
                var a = e.props.onRemove
                return Q.a.createElement(Vl.a, {
                  borderRadius: xl.a.MEDIUM,
                  mediaItem: t,
                  onRemove: a,
                  resizeIfNeeded: e._getResizeIfNeeded(t),
                  style: kl.mediaPreview,
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
                  return Q.a.createElement(
                    _e.a,
                    { style: kl.dragDropContainer },
                    Q.a.createElement(pe.b, { weight: 'bold' }, a),
                    Q.a.createElement(Bl.a, { onFilesAdded: this._handleDragDrop, style: kl.dragDropComponent }, n),
                  )
                },
              },
            ]),
            a
          )
        })(Q.a.Component),
        kl = de.a.create(function (e) {
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
        Hl = wl,
        Kl = a('eyty'),
        jl = 'verification-checkbox-label',
        zl = Z.a.ff1d68f7,
        ql = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b8f15ec4' },
          Q.a.createElement(pe.b, { link: Zt }, Z.a.h0ed9034),
        ),
        Ql = Z.a.bdada5a5,
        $l = Z.a.edfed0f6,
        Zl = Z.a.b08821f3,
        Jl = Z.a.b09aade5,
        Xl = Z.a.b40ed190,
        ec = Z.a.c6650b55,
        tc = Z.a.d171ed16,
        ac = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd65a41c2' },
          Q.a.createElement(pe.b, { link: 'https://twitter.com/privacy' }, Z.a.e9d83172),
        ),
        nc = Z.a.c1df579e,
        ic = (function (e) {
          k()(a, e)
          var t = K()(a)
          function a() {
            var e
            G()(this, a)
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
                n(t, { location: Kl.d.Verification }).then(function (t) {
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
                n(t, { location: Kl.d.Verification }).then(function (t) {
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
                return Q.a.createElement(
                  _e.a,
                  { style: [Ne.contentContainer, Ne.checkboxContainer] },
                  Q.a.createElement(
                    _e.a,
                    { style: Ne.checkbox },
                    Q.a.createElement(Gt.a, {
                      accessibilityLabelledBy: jl,
                      checked: t,
                      onChange: e._handleCheckboxChange,
                    }),
                  ),
                  Q.a.createElement(
                    _e.a,
                    { nativeID: jl, style: Ne.checkboxText },
                    Q.a.createElement(pe.b, { color: 'gray700' }, tc),
                    Q.a.createElement(pe.b, { color: 'gray700', style: Ne.text }, ac),
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
                  r = i ? $l : ec,
                  o = i ? Ql : Xl
                return Q.a.createElement(
                  _e.a,
                  { accessibilityLabelledBy: ue.b, accessibilityRole: 'group', style: rc.gridContainer },
                  Q.a.createElement(Hl, {
                    accessibilityLabel: r,
                    mediaItem: n,
                    onChange: e._handleAddFrontMedia,
                    onRemove: e._handleRemoveFrontID,
                    title: o,
                  }),
                  i &&
                    Q.a.createElement(Hl, {
                      accessibilityLabel: Jl,
                      mediaItem: a,
                      onChange: e._handleAddBackMedia,
                      onRemove: e._handleRemoveBackID,
                      title: Zl,
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
                    Q.a.createElement(Ll, { error: e, onButtonClick: this._handleErrorButtonClick })
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
                  return Q.a.createElement(
                    _e.a,
                    { style: [Ne.container, i && Ne.narrowContainer] },
                    Q.a.createElement(
                      pe.b,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: ue.b,
                        size: 'title4',
                        style: Ne.header,
                        weight: 'heavy',
                      },
                      zl,
                    ),
                    Q.a.createElement(
                      _e.a,
                      { style: Ne.scrollableContainer },
                      Q.a.createElement(pe.b, { color: 'gray700' }, ql),
                      this._renderUploadTargets(),
                      this._renderCheckbox(),
                    ),
                    Q.a.createElement(
                      Ae.a,
                      { disabled: r, onPress: this._handleSubmit, style: Ne.buttonFixed, type: 'brandFilled' },
                      nc,
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
        })(Q.a.Component),
        rc = de.a.create(function (e) {
          return { gridContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: e.spaces.space16 } }
        }),
        oc = Pl(ic),
        lc = { hasId: !0, hasEmail: !0, hasWebsite: !0 },
        cc =
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
              ((c = {}),
              z()(c, te.f.ENTERTAINMENT_INDIVIDUAL, { hasId: !1, hasEmail: !1, hasWebsite: !1 }),
              z()(c, te.f.ENTERTAINMENT_COMPANY, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              z()(c, te.f.PRODUCTION, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              c),
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
              ((E = {}),
              z()(E, te.j.INFLUENTIAL_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              z()(E, te.j.CONTENT_CREATOR, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              E),
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
              z()(I, te.q.SPORTS_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              z()(I, te.q.SPORTS_ENTITY, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              z()(I, te.q.GAMING_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              I),
          }),
          T),
        Ec = Z.a.i79902b4,
        sc = Z.a.fb2fcb5b,
        Ic = Z.a.e43425fa,
        Tc = Z.a.cb7c2e2e,
        uc = Z.a.a411926a,
        dc = Z.a.g253cddf,
        Nc = Z.a.cf93bcbf,
        _c = Z.a.ca5fb0d4,
        pc = Z.a.g40cd2c0,
        Ac = { title: Ec, description: sc },
        bc =
          ((u = {}),
          z()(u, te.d.IDENTITY_DOCUMENT, { label: Ic, subtext: Tc }),
          z()(u, te.d.EMAIL, { label: uc, subtext: dc }),
          z()(u, te.d.WEBSITE, { label: Nc, subtext: _c }),
          u),
        Rc = P()(P()({}, Ac), {}, { items: P()({}, bc) }),
        Cc = { title: Z.a.a7f1cff6, description: Z.a.ce40e7a5, websiteLabel: Nc },
        mc = Z.a.dff1555f,
        Oc = Z.a.ed751204,
        fc = Z.a.fbc023bf,
        Sc = { headline: mc, subtext: Oc, actionLabel: fc, tertiaryActionLabel: Z.a.e785ce06 },
        Lc = Z.a.i8d58f3d,
        hc = P()(P()({}, Sc), {}, { tertiaryActionLabel: Lc }),
        yc = Z.a.eb21eca9,
        Dc = P()(P()({}, Sc), {}, { tertiaryActionLabel: yc }),
        Fc = Z.a.f848a69d,
        Uc = Z.a.d59b5365,
        vc = Z.a.bfb01c62,
        Mc = { headline: mc, subtext: Fc, actionLabel: fc, tertiaryActionLabel: vc },
        gc = P()(P()({}, Mc), {}, { subtext: Uc }),
        Pc = { headline: mc, subtext: Fc, actionLabel: fc, tertiaryActionLabel: vc },
        xc = Z.a.ibd16281,
        Gc = Z.a.d5254e1b,
        Yc = Z.a.h45b00d7,
        Vc = Z.a.bd9d7f96,
        Bc = Z.a.g32c2900,
        Wc = Z.a.e6327f3b,
        wc = Z.a.c7f75eab,
        kc = Z.a.eb08a392,
        Hc = Z.a.je4c4696,
        Kc = Z.a.dcc23261,
        jc = Z.a.h96ba9b6,
        zc = Z.a.e4610048,
        qc = Z.a.dedf41f1,
        Qc = Z.a.c78e091a,
        $c = Z.a.g5657ec3,
        Zc = Z.a.baf718c3,
        Jc = Z.a.c65bbbc1,
        Xc = Z.a.i31e3606,
        eE = Z.a.d85ef4a7,
        tE = Z.a.ddb19f72,
        aE = Z.a.a8d332f2,
        nE = Z.a.f7afbaeb,
        iE = Z.a.d4ab0055,
        rE = Z.a.d2a77621,
        oE = Z.a.e23b92c5,
        lE = Z.a.b03ae068,
        cE = Z.a.g0daba49,
        EE = Z.a.h85524c4,
        sE = Z.a.cdcd9cd5,
        IE = Z.a.gcee7aad,
        TE = Z.a.e6dc91b1,
        uE = Z.a.ga603b22,
        dE =
          ((y = { header: Ec }),
          z()(
            y,
            te.l.ACTIVISM,
            z()({}, te.b.ACTIVIST, {
              description: Kc,
              items:
                ((d = {}),
                z()(d, te.d.IDENTITY_DOCUMENT, { label: Ic, subtext: Tc }),
                z()(d, te.d.WEBSITE, { label: Nc, subtext: jc, description: zc, inputLabel: pc }),
                d),
            }),
          ),
          z()(
            y,
            te.l.INFLUENCER_OTHER,
            z()({}, te.j.INFLUENTIAL_INDIVIDUAL, {
              description: qc,
              items:
                ((N = {}),
                z()(N, te.d.IDENTITY_DOCUMENT, { label: Ic, subtext: Tc }),
                z()(N, te.d.WEBSITE, { label: Nc, subtext: Qc, description: $c, inputLabel: pc }),
                N),
            }),
          ),
          z()(
            y,
            te.l.COMPANY,
            ((A = {}),
            z()(A, te.e.COMPANY, {
              description: Zc,
              items:
                ((_ = {}),
                z()(_, te.d.EMAIL, { label: uc, subtext: Xc }),
                z()(_, te.d.WEBSITE, { label: Nc, subtext: Vc, description: tE, inputLabel: pc }),
                _),
            }),
            z()(A, te.e.EXECUTIVE, {
              description: Jc,
              items:
                ((p = {}),
                z()(p, te.d.IDENTITY_DOCUMENT, { label: Ic, subtext: Tc }),
                z()(p, te.d.EMAIL, { label: uc, subtext: Xc }),
                z()(p, te.d.WEBSITE, { label: Nc, subtext: eE, description: aE, inputLabel: pc }),
                p),
            }),
            A),
          ),
          z()(
            y,
            te.l.ENTERTAINMENT,
            ((b = {}),
            z()(b, te.f.ENTERTAINMENT_COMPANY, {
              description: Yc,
              items: z()({}, te.d.WEBSITE, { label: Nc, subtext: wc, description: tE, inputLabel: pc }),
            }),
            z()(b, te.f.PRODUCTION, {
              description: Bc,
              items: z()({}, te.d.WEBSITE, { label: Nc, subtext: wc, description: Wc, inputLabel: pc }),
            }),
            b),
          ),
          z()(
            y,
            te.l.GOVERNMENT,
            z()({}, te.i.CANDIDATE, {
              description: kc,
              items:
                ((R = {}),
                z()(R, te.d.IDENTITY_DOCUMENT, { label: Ic, subtext: Tc }),
                z()(R, te.d.WEBSITE, { label: Nc, subtext: Vc, description: Hc, inputLabel: pc }),
                R),
            }),
          ),
          z()(
            y,
            te.l.NEWS,
            ((f = {}),
            z()(f, te.k.FREELANCER, {
              description: iE,
              items:
                ((C = {}),
                z()(C, te.d.IDENTITY_DOCUMENT, { label: Ic, subtext: Tc }),
                z()(C, te.d.WEBSITE, { label: Nc, subtext: oE, description: xc }),
                C),
            }),
            z()(f, te.k.JOURNALIST, {
              description: nE,
              items:
                ((m = {}),
                z()(m, te.d.IDENTITY_DOCUMENT, { label: Ic, subtext: Tc }),
                z()(m, te.d.EMAIL, { label: uc, subtext: rE }),
                z()(m, te.d.WEBSITE, { label: Nc, subtext: oE, description: xc }),
                m),
            }),
            z()(f, te.k.ORGANIZATION, {
              description: lE,
              items:
                ((O = {}),
                z()(O, te.d.EMAIL, { label: uc, subtext: rE }),
                z()(O, te.d.WEBSITE, { label: Nc, subtext: Vc, description: Gc }),
                O),
            }),
            f),
          ),
          z()(
            y,
            te.l.SPORTS,
            ((h = {}),
            z()(h, te.q.SPORTS_INDIVIDUAL, {
              description: TE,
              items:
                ((S = {}),
                z()(S, te.d.IDENTITY_DOCUMENT, { label: Ic, subtext: Tc }),
                z()(S, te.d.WEBSITE, { label: Nc, subtext: Vc, description: uE }),
                S),
            }),
            z()(h, te.q.SPORTS_ENTITY, {
              description: sE,
              items: z()({}, te.d.WEBSITE, { label: Nc, subtext: Vc, description: IE }),
            }),
            z()(h, te.q.GAMING_INDIVIDUAL, {
              description: cE,
              items:
                ((L = {}),
                z()(L, te.d.IDENTITY_DOCUMENT, { label: Ic, subtext: Tc }),
                z()(L, te.d.WEBSITE, { label: Nc, subtext: Vc, description: EE }),
                L),
            }),
            h),
          ),
          y),
        NE = function (e, t) {
          return e && t ? dE[e][t] : Rc
        },
        _E = function (e, t, a) {
          var n = NE(t, a).items,
            i = lc
          t && a ? (i = cc[t].subtype[a]) : t && (i = cc[t])
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
        pE = Object.freeze(
          ((D = {}),
          z()(D, te.h.AUTHENTICITY_TYPE_SELECT, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              n = e.userEmail
            return {
              type: 'radio',
              props: {
                description: NE(t, a).description,
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
                items: _E(n, t, a),
                title: Rc.title,
              },
            }
          }),
          z()(D, te.h.SITE_VERIFICATION, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              n = NE(t, a).items[te.d.WEBSITE]
            return {
              type: 'input',
              props: {
                title: Cc.title,
                description: n.description || Cc.description,
                items: [{ dataKey: te.c.WEBSITE, label: n.inputLabel || Cc.websiteLabel, required: !0 }],
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
              c = e.notabilitySubcategory,
              E = e.setFormStepData,
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
            var u = Sc,
              d = function () {
                return s(te.h.AUTHENTICITY_TYPE_SELECT)
              }
            switch (c) {
              case te.n.CONTENT_CREATOR:
                ;(u = gc),
                  (d = function () {
                    return I()
                  })
                break
              case te.n.ENTERTAINMENT_INDIVIDUAL:
                ;(u = Mc),
                  (d = function () {
                    return I()
                  })
                break
              case te.n.OFFICE:
                ;(u = Dc),
                  (d = function () {
                    E(te.h.AUTHENTICITY_TYPE_SELECT, te.d.EMAIL), s(te.h.EMAIL_VERIFICATION)
                  })
                break
              case te.n.OFFICIAL:
                ;(u = hc),
                  (d = function () {
                    E(te.h.AUTHENTICITY_TYPE_SELECT, te.d.IDENTITY_DOCUMENT), s(te.h.INTAKE_TYPE_SELECT)
                  })
            }
            return {
              type: 'info',
              props: P()(
                P()({}, u),
                {},
                {
                  onAction: function () {
                    E(te.h.AUTHENTICITY_TYPE_SELECT, te.d.WEBSITE),
                      E(te.h.SITE_VERIFICATION, z()({}, te.c.WEBSITE, T)),
                      s(te.h.REVIEW_SUBMIT)
                  },
                  onTertiaryAction: function () {
                    return d()
                  },
                },
              ),
            }
          }),
          z()(D, te.h.WEBSITE_REFERENCE_CONFIRM_PROCEED, { type: 'info', props: P()({}, Pc) }),
          D),
        ),
        AE =
          (a('i4UL'),
          Object.freeze(
            ((F = {}),
            z()(F, te.h.NOTABILITY_CATEGORY_SELECT, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n
              return {
                type: 'radio',
                props: {
                  description: za.description,
                  getNextFormStep: function (e) {
                    switch (e) {
                      case te.l.ACTIVISM:
                        return a || i ? te.h.ACTIVIST_QUALIFICATIONS : te.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE
                      case te.l.INFLUENCER_OTHER:
                        return a || i ? te.h.INFLUENCER_SUBCATEGORY : te.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE
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
                      default:
                        return null
                    }
                  },
                  items: [
                    { label: Ha[te.l.GOVERNMENT], value: te.l.GOVERNMENT },
                    { label: Ha[te.l.COMPANY], value: te.l.COMPANY },
                    { label: Ha[te.l.NEWS], value: te.l.NEWS },
                    { label: Ha[te.l.ENTERTAINMENT], value: te.l.ENTERTAINMENT },
                    { label: Ha[te.l.SPORTS], value: te.l.SPORTS },
                    { label: Ha[te.l.INFLUENCER_OTHER], value: te.l.INFLUENCER_OTHER },
                    { label: Ha[te.l.ACTIVISM], value: te.l.ACTIVISM },
                  ],
                  title: za.title,
                },
              }
            }),
            z()(F, te.h.ACTIVIST_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: an.title,
                description: an.description,
                items: [
                  P()(P()({}, an.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, an.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, an.items[2]), {}, { value: te.m.NEWS }),
                  P()(P()({}, an.items[3]), {}, { value: te.m.LEADERSHIP }),
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
            z()(F, te.h.ACTIVIST_GOOGLE_TRENDS, {
              type: 'input',
              props: {
                title: rn.title,
                description: rn.description,
                items: [{ dataKey: te.m.GOOGLE, label: rn.label, required: !0 }],
              },
            }),
            z()(F, te.h.ACTIVIST_LEADERSHIP, {
              type: 'input',
              props: {
                title: sn.title,
                description: sn.description,
                items: [{ dataKey: te.m.LEADERSHIP, label: sn.label, required: !0 }],
                confirmationText: sn.confirmationText,
              },
            }),
            z()(F, te.h.ACTIVIST_NEWS, {
              type: 'input',
              props: {
                title: cn.title,
                description: cn.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: cn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: cn.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.ACTIVIST_WIKIPEDIA, {
              type: 'input',
              props: {
                title: ln.title,
                description: ln.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: ln.label, required: !0 }],
              },
            }),
            z()(F, te.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE, {
              type: 'info',
              props: {
                headline: an.notEligibleTitle,
                subtext: an.notEligibleDescription,
                actionLabel: an.notEligibleButton,
              },
            }),
            z()(F, te.h.COMPANY_SUBCATEGORY, {
              type: 'radio',
              props: P()(
                P()({}, hn),
                {},
                {
                  items: [
                    P()(P()({}, hn.items[0]), {}, { value: te.e.COMPANY }),
                    P()(P()({}, hn.items[1]), {}, { value: te.e.EXECUTIVE }),
                  ],
                  getNextFormStep: function (e) {
                    return e === te.e.COMPANY
                      ? te.h.COMPANY_NOTABILITY_METHOD
                      : e === te.e.EXECUTIVE
                      ? te.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM
                      : void 0
                  },
                },
              ),
            }),
            z()(F, te.h.COMPANY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = [
                  P()(P()({}, Dn.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, Dn.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, Dn.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, Dn.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, Dn),
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
                  title: Un.title,
                  description: Un.description,
                  items: [{ dataKey: te.m.GOOGLE, label: Un.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.COMPANY_WIKIPEDIA, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Mn.title,
                  description: Mn.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: Mn.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.COMPANY_STOCK_EXCHANGE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Pn.title,
                  description: Pn.description,
                  items: [{ dataKey: te.m.STOCK, label: Pn.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.COMPANY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: Gn.title,
                description: Gn.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Gn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Gn.addFieldText,
              },
            }),
            z()(F, te.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: P()({}, Bn) }),
            z()(F, te.h.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: P()(
                P()({}, wn),
                {},
                {
                  items: [
                    P()(P()({}, wn.items[0]), {}, { value: te.m.NEWS }),
                    P()(P()({}, wn.items[1]), {}, { value: te.m.LEADERSHIP }),
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
                title: Hn.title,
                description: Hn.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Hn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Hn.addFieldText,
              },
            }),
            z()(F, te.h.COMPANY_INDIVIDUAL_LEADERSHIP, {
              type: 'input',
              props: {
                title: jn.title,
                description: jn.description,
                items: [{ dataKey: te.m.LEADERSHIP, label: jn.label, required: !0 }],
                confirmationText: jn.confirmationText,
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
                  title: ui.title,
                  description: ui.description,
                  items: [{ dataKey: te.m.GOOGLE, label: ui.label, required: !0 }],
                  nextFormStep: a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: Ni.title,
                description: Ni.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Ni.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Ni.addFieldText,
              },
            }),
            z()(F, te.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n,
                r = [
                  P()(P()({}, Ii.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, Ii.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, Ii.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, Ii.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, Ii),
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
                  title: pi.title,
                  description: pi.description,
                  items: [{ dataKey: te.m.STOCK, label: pi.label, required: !0 }],
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
                  title: bi.title,
                  description: bi.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: bi.label, required: !0 }],
                  nextFormStep: a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
              type: 'input',
              props: {
                title: Gi.title,
                description: Gi.description,
                items: [{ dataKey: te.m.IMDB, label: Gi.label, required: !0 }],
              },
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
              type: 'input',
              props: {
                title: Bi.title,
                description: Bi.description,
                items: [{ dataKey: te.m.MAIN, label: Bi.label, required: !0 }],
              },
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
              type: 'input',
              props: {
                title: Yi.title,
                description: Yi.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Gn.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Yi.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: gi.title,
                description: gi.description,
                items: [
                  { helpText: gi.items[0].description, label: gi.items[0].label, value: te.m.IMDB },
                  { helpText: gi.items[1].description, label: gi.items[1].label, value: te.m.NEWS },
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
                  title: ei.title,
                  description: ei.description,
                  items: [{ dataKey: te.m.GOOGLE, label: ei.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: ai.title,
                description: ai.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: ai.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: ai.addFieldText,
              },
            }),
            z()(F, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n,
                r = [
                  P()(P()({}, ii.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, ii.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, ii.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, ii.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, ii),
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
                  title: oi.title,
                  description: oi.description,
                  items: [{ dataKey: te.m.STOCK, label: oi.label, required: !0 }],
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
                  title: ci.title,
                  description: ci.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: ci.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Ei.title,
                description: Ei.description,
                items: [
                  P()(P()({}, Ei.items[0]), {}, { value: te.f.ENTERTAINMENT_COMPANY }),
                  P()(P()({}, Ei.items[1]), {}, { value: te.f.ENTERTAINMENT_INDIVIDUAL }),
                  P()(P()({}, Ei.items[2]), {}, { value: te.f.PRODUCTION }),
                ],
                getNextFormStep: function (e) {
                  return e === te.f.ENTERTAINMENT_COMPANY
                    ? te.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD
                    : e === te.f.ENTERTAINMENT_INDIVIDUAL
                    ? te.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS
                    : e === te.f.PRODUCTION
                    ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD
                    : void 0
                },
              },
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
              type: 'info',
              props: {
                headline: tr.candidateTitle,
                subtext: tr.candidateDescription,
                actionLabel: tr.confirmButtonLabel,
                tertiaryActionLabel: tr.declineButtonLabel,
              },
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Tr.title,
                description: Tr.description,
                items: Lt()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: Tr.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Tr.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: sr.candidateTitle,
                subtext: sr.candidateDescription,
                actionLabel: sr.confirmButtonLabel,
                tertiaryActionLabel: sr.declineButtonLabel,
                tertiaryActionLink: Ee,
              },
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: Rr.title,
                description: Rr.description,
                items: [{ dataKey: te.m.PUBLIC, label: Rr.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: dr.title,
                description: dr.description,
                items: Lt()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: dr.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: dr.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: sr.officeTitle,
                subtext: sr.officeDescription,
                actionLabel: sr.confirmButtonLabel,
                tertiaryActionLabel: sr.declineButtonLabel,
                tertiaryActionLink: Ee,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: fr.title,
                description: fr.description,
                items: [{ dataKey: te.m.PUBLIC, label: fr.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
              type: 'info',
              props: {
                headline: tr.officialTitle,
                subtext: tr.officialDescription,
                actionLabel: tr.confirmButtonLabel,
                tertiaryActionLabel: tr.declineButtonLabel,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: _r.title,
                description: _r.description,
                items: Lt()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: _r.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: _r.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: sr.officialTitle,
                subtext: sr.officialDescription,
                actionLabel: sr.confirmButtonLabel,
                tertiaryActionLabel: sr.declineButtonLabel,
                tertiaryActionLink: Ee,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: Lr.title,
                description: Lr.description,
                items: [{ dataKey: te.m.PUBLIC, label: Lr.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.GOVERNMENT_SUBCATEGORY, {
              type: 'radio',
              props: {
                title: qi.title,
                description: qi.description,
                items: [
                  P()(P()({}, qi.items[0]), {}, { value: te.i.OFFICIAL }),
                  P()(P()({}, qi.items[1]), {}, { value: te.i.CANDIDATE }),
                  P()(P()({}, qi.items[2]), {}, { value: te.i.OFFICE }),
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
                title: hi.title,
                description: hi.description,
                items: [{ dataKey: te.m.GOOGLE, label: hi.label, required: !0 }],
              },
            }),
            z()(F, te.h.CONTENT_CREATOR_NEWS, {
              type: 'input',
              props: {
                title: Fi.title,
                description: Fi.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Fi.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Fi.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.CONTENT_CREATOR_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: fi.title,
                description: fi.description,
                items: [
                  P()(P()({}, fi.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, fi.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, fi.items[2]), {}, { value: te.m.NEWS }),
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
                title: Di.title,
                description: Di.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: Di.label, required: !0 }],
              },
            }),
            z()(F, te.h.CREATOR_PROFILE, {
              type: 'input',
              props: {
                title: Si.title,
                description: Si.description,
                items: [{ dataKey: te.m.MAIN, label: Si.items[0].label, required: !0 }],
              },
            }),
            z()(F, te.h.INFLUENCER_GOOGLE_TRENDS, {
              type: 'input',
              props: {
                title: bn.title,
                description: bn.description,
                items: [{ dataKey: te.m.GOOGLE, label: bn.label, required: !0 }],
              },
            }),
            z()(F, te.h.INFLUENCER_NEWS, {
              type: 'input',
              props: {
                title: mn.title,
                description: mn.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: mn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: mn.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.INFLUENCER_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: pn.title,
                description: pn.description,
                items: [
                  P()(P()({}, pn.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, pn.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, pn.items[2]), {}, { value: te.m.NEWS }),
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
                headline: pn.notEligibleTitle,
                subtext: pn.notEligibleDescription,
                actionLabel: pn.notEligibleButton,
              },
            }),
            z()(F, te.h.INFLUENCER_SUBCATEGORY, {
              type: 'radio',
              props: P()(
                P()({}, un),
                {},
                {
                  items: [
                    P()(P()({}, un.items[0]), {}, { value: te.j.CONTENT_CREATOR }),
                    P()(P()({}, un.items[1]), {}, { value: te.j.INFLUENTIAL_INDIVIDUAL }),
                  ],
                  getNextFormStep: function (e) {
                    return e === te.j.CONTENT_CREATOR
                      ? te.h.CONTENT_CREATOR_QUALIFICATIONS
                      : e === te.j.INFLUENTIAL_INDIVIDUAL
                      ? te.h.INFLUENCER_QUALIFICATIONS
                      : void 0
                  },
                },
              ),
            }),
            z()(F, te.h.INFLUENCER_WIKIPEDIA, {
              type: 'input',
              props: {
                title: Cn.title,
                description: Cn.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: Cn.label, required: !0 }],
              },
            }),
            z()(F, te.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: io.title,
                description: io.description,
                items: Lt()(
                  Array(3).fill({
                    dataKey: te.m.ARTICLES,
                    labelGenerator: io.articleNumerationLabelGenerator,
                    required: !0,
                  }),
                ),
                addFieldText: io.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: io.title,
                description: io.description,
                items: Lt()(
                  Array(3).fill({
                    dataKey: te.m.ARTICLES,
                    labelGenerator: io.articleNumerationLabelGenerator,
                    required: !0,
                  }),
                ),
                addFieldText: io.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
              type: 'input',
              props: {
                title: to.title,
                description: to.description,
                items: [{ dataKey: te.m.AUTHOR, label: to.websiteLabel, required: !0 }],
                confirmationText: to.confirmationText,
              },
            }),
            z()(F, te.h.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, {
              type: 'info',
              props: {
                headline: Eo.title,
                subtext: Eo.description,
                actionLabel: Eo.actionLabel,
                tertiaryActionLabel: Eo.tertiaryActionLabel,
              },
            }),
            z()(F, te.h.NEWS_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Mr.title,
                description: Mr.description,
                items: [
                  { helpText: Mr.items[0].description, label: Mr.items[0].label, value: te.k.JOURNALIST },
                  { helpText: Mr.items[1].description, label: Mr.items[1].label, value: te.k.FREELANCER },
                  { helpText: Mr.items[2].description, label: Mr.items[2].label, value: te.k.ORGANIZATION },
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
              props: P()(P()({}, jr), {}, { tertiaryActionLink: Ee }),
            }),
            z()(F, te.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, { type: 'screenName', props: P()({}, Wr) }),
            z()(F, te.h.NEWS_JOURNALIST_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Jr.title,
                description: Jr.description,
                items: [
                  { helpText: Jr.items[0].description, label: Jr.items[0].label, value: te.m.AUTHOR },
                  { helpText: Jr.items[1].description, label: Jr.items[1].label, value: te.m.ARTICLES },
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
                headline: Yr.title,
                subtext: Yr.description,
                actionLabel: Yr.confirmButtonLabel,
                tertiaryActionLabel: Yr.declineButtonLabel,
                tertiaryActionLink: Ee,
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
                  title: Io.title,
                  description: Io.description,
                  items: [
                    { helpText: Io.items[0].description, label: Io.items[0].label, value: te.m.GOOGLE },
                    { helpText: Io.items[1].description, label: Io.items[1].label, value: te.m.WIKIPEDIA },
                    { helpText: Io.items[2].description, label: Io.items[2].label, value: te.m.STOCK },
                  ].concat(
                    Lt()(
                      a || i
                        ? [{ helpText: Io.items[3].description, label: Io.items[3].label, value: te.m.ARTICLES }]
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
                  title: uo.title,
                  description: uo.description,
                  items: [{ dataKey: te.m.GOOGLE, label: uo.label, required: !0 }],
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
                  title: _o.title,
                  description: _o.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: _o.label, required: !0 }],
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
                  title: Ao.title,
                  description: Ao.description,
                  items: [{ dataKey: te.m.STOCK, label: Ao.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
                },
              }
            }),
            z()(F, te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Ro.title,
                description: Ro.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.ARTICLES, labelGenerator: Ro.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Ro.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: ll.title,
                description: ll.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: ll.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: ll.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GAMING_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: {
                title: tl.title,
                description: tl.description,
                items: [
                  { helpText: tl.items[0].description, label: tl.items[0].label, value: te.m.NEWS },
                  { helpText: tl.items[1].description, label: tl.items[1].label, value: te.m.TEAM },
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
                title: ol.title,
                description: ol.description,
                items: [{ dataKey: te.m.TEAM, label: ol.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: il.title,
                description: il.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: il.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: il.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
              type: 'input',
              props: {
                title: nl.title,
                description: nl.description,
                items: [{ dataKey: te.m.TEAM, label: nl.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.SPORTS_ENTITY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = [
                  P()(P()({}, Go.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, Go.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, Go.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, Go.items[3]), {}, { value: te.m.TEAM }),
                  P()(P()({}, Go.items[4]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, Go),
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
                  title: Vo.title,
                  description: Vo.description,
                  items: [{ dataKey: te.m.GOOGLE, label: Vo.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_WIKIPEDIA, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Wo.title,
                  description: Wo.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: Wo.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_STOCK_REFERENCE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: ko.title,
                  description: ko.description,
                  items: [{ dataKey: te.m.STOCK, label: ko.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_WEBSITE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Ko.title,
                  description: Ko.description,
                  items: [{ dataKey: te.m.TEAM, label: Ko.label, required: !0 }],
                  nextFormStep: t ? te.h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: zo.title,
                description: zo.description,
                items: Lt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: zo.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: zo.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: P()({}, Uo) }),
            z()(F, te.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: P()({}, Mo) }),
            z()(F, te.h.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: {
                title: Zo.title,
                description: Zo.description,
                items: [
                  { helpText: Zo.items[0].description, label: Zo.items[0].label, value: te.m.NEWS },
                  { helpText: Zo.items[1].description, label: Zo.items[1].label, value: te.m.TEAM },
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
            z()(F, te.h.GAMING_INDIVIDUAL_INELIGIBLE, { type: 'info', props: P()({}, go) }),
            z()(F, te.h.SPORTS_SUBCATEGORY, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t
              return {
                type: 'radio',
                props: P()(
                  P()({}, ho),
                  {},
                  {
                    items: [
                      P()(P()({}, ho.items[0]), {}, { value: te.q.SPORTS_INDIVIDUAL }),
                      P()(P()({}, ho.items[1]), {}, { value: te.q.SPORTS_ENTITY }),
                      P()(P()({}, ho.items[2]), {}, { value: te.q.GAMING_INDIVIDUAL }),
                    ],
                    getNextFormStep: function (e) {
                      return e === te.q.SPORTS_INDIVIDUAL
                        ? te.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM
                        : e === te.q.SPORTS_ENTITY
                        ? te.h.SPORTS_ENTITY_NOTABILITY_METHOD
                        : e === te.q.GAMING_INDIVIDUAL
                        ? a
                          ? te.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM
                          : te.h.GAMING_INDIVIDUAL_INELIGIBLE
                        : void 0
                    },
                  },
                ),
              }
            }),
            F),
          )),
        bE = Object.freeze(
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
        RE = Object.freeze(P()(P()(P()({}, pE), AE), bE)),
        CE = function (e) {
          var t = Object(Qe.y)(e)
          return null != t && t.radioData ? t.radioData : ''
        },
        mE = Object(qe.a)()
          .propsFromState(function () {
            return { currentStep: Qe.z, formHistory: CE }
          })
          .propsFromActions(function () {
            return { setFormStepData: Qe.R, setNextFlow: Qe.V, updateFormHistory: Qe.Y }
          })
          .withAnalytics(),
        OE = a('fyvP'),
        fE = Z.a.c1df579e,
        SE = de.a.create(function (e) {
          return {
            radioContainer: {
              paddingRight: 'calc('.concat(e.spaces.space12, ' + ').concat(e.borderWidths.medium, ')'),
            },
          }
        }),
        LE = mE(function (e) {
          var t = e.analytics,
            a = e.buttonText,
            n = void 0 === a ? fE : a,
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
            d = e.updateFormHistory,
            N = Q.a.useState(l),
            _ = Te()(N, 2),
            p = _[0],
            A = _[1]
          Q.a.useEffect(
            function () {
              A(l), I(i, l)
            },
            [i, l, I],
          )
          return Q.a.createElement(
            _e.a,
            { style: [Ne.container, E && Ne.narrowContainer] },
            Q.a.createElement(
              pe.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: ue.b,
                size: 'title4',
                style: Ne.header,
                weight: 'heavy',
              },
              u,
            ),
            Q.a.createElement(
              _e.a,
              { style: Ne.scrollableContainer },
              r && Q.a.createElement(pe.b, { color: 'gray700' }, r),
              Q.a.createElement(
                _e.a,
                { style: [Ne.contentContainer, SE.radioContainer] },
                Q.a.createElement(OE.a, {
                  accessibilityLabel: u,
                  name: ''.concat(u, '-radiogroup'),
                  onChange: function (e, t) {
                    A(t), I(i, t)
                  },
                  options: s,
                  value: p,
                }),
              ),
              o && Q.a.createElement(pe.b, { color: 'gray700' }, o),
            ),
            Q.a.createElement(
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
                    d(p || '')
                  var a = c(p)
                  a && T(a)
                },
                style: Ne.buttonFixed,
                type: 'brandFilled',
              },
              n,
            ),
          )
        }),
        hE = a('5FtR'),
        yE = Object(qe.a)().propsFromActions(function () {
          return { setNextFlow: Qe.V }
        }),
        DE = a('EweD'),
        FE = 'verification-checkbox-label',
        UE = Z.a.c1df579e,
        vE = Z.a.a6278dcb,
        ME = function (e) {
          return !e.match(/\W/g)
        },
        gE = de.a.create(function (e) {
          return { input: { paddingHorizontal: 0 }, checkboxContainer: { paddingTop: 0 } }
        }),
        PE = yE(function (e) {
          var t = e.buttonText,
            a = void 0 === t ? UE : t,
            n = e.confirmationText,
            i = e.description,
            r = e.isNarrow,
            o = e.setNextFlow,
            l = e.title,
            c = Q.a.useState(''),
            E = Te()(c, 2),
            s = E[0],
            I = E[1],
            T = Q.a.useState(!1),
            u = Te()(T, 2),
            d = u[0],
            N = u[1],
            _ = Q.a.useState(!0),
            p = Te()(_, 2),
            A = p[0],
            b = p[1]
          return (
            Q.a.useEffect(
              function () {
                var e = !!s && ME(s)
                b(!e || !(!n || d))
              },
              [n, d, s, b],
            ),
            Q.a.createElement(
              _e.a,
              { style: [Ne.container, r && Ne.narrowContainer] },
              Q.a.createElement(
                pe.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: ue.b,
                  size: 'title4',
                  style: Ne.header,
                  weight: 'heavy',
                },
                l,
              ),
              Q.a.createElement(
                _e.a,
                { style: Ne.scrollableContainer },
                i && Q.a.createElement(pe.b, { color: 'gray700' }, i),
                Q.a.createElement(
                  _e.a,
                  { accessibilityLabelledBy: ue.b, accessibilityRole: 'group', style: Ne.contentContainer },
                  Q.a.createElement(xt.a, {
                    Icon: DE.a,
                    invalid: !ME(s),
                    label: vE,
                    name: '',
                    onChange: function (e) {
                      return I(e.target.value)
                    },
                    style: gE.input,
                    value: s,
                  }),
                ),
                n &&
                  Q.a.createElement(
                    _e.a,
                    { style: [Ne.contentContainer, Ne.checkboxContainer, gE.checkboxContainer] },
                    Q.a.createElement(
                      _e.a,
                      { style: Ne.checkbox },
                      Q.a.createElement(Gt.a, {
                        accessibilityLabelledBy: FE,
                        checked: d,
                        onChange: function () {
                          return N(!d)
                        },
                      }),
                    ),
                    Q.a.createElement(
                      _e.a,
                      { nativeID: FE, style: Ne.checkboxText },
                      Q.a.createElement(pe.b, { color: 'gray700' }, n),
                    ),
                  ),
              ),
              Q.a.createElement(
                Ae.a,
                {
                  disabled: A,
                  onClick: function () {
                    return o()
                  },
                  style: Ne.buttonFixed,
                  type: 'brandFilled',
                },
                a,
              ),
            )
          )
        }),
        xE = a('7JQg'),
        GE = (a('hBvt'), a('v6aA')),
        YE = Z.a.ec6801cb,
        VE = Z.a.j24c37b2,
        BE = function (e) {
          var t,
            a = e.daysForDecision,
            n = void 0 === a ? 14 : a,
            i = e.isNarrow,
            r = e.link,
            o = e.onSurveyClick,
            l = e.surveyUrl,
            c = Q.a.useContext(GE.a).featureSwitches.isTrue('identity_verification_notable_demo_survey')
          return Q.a.createElement(
            _e.a,
            { style: Ne.largeBannerContainer },
            Q.a.createElement(ke, { isNarrow: i, type: Be.SENT }),
            Q.a.createElement(
              _e.a,
              { style: [Ne.container, Ne.verticalCenter, i && Ne.narrowContainer] },
              Q.a.createElement(
                pe.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: ue.b,
                  size: 'title4',
                  style: Ne.header,
                  weight: 'heavy',
                },
                YE,
              ),
              Q.a.createElement(
                pe.b,
                { color: 'gray700' },
                ((t = n),
                Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'a1c39f5b', days: Pt.a.getFormattedCount(t) })),
              ),
              c &&
                l &&
                Q.a.createElement(
                  pe.b,
                  { color: 'gray700', style: Ne.text },
                  Q.a.createElement(
                    Z.a.I18NFormatMessage,
                    { $i18n: 'ja826537' },
                    Q.a.createElement(
                      pe.b,
                      { link: { pathname: l, openInSameFrame: ee.b.isAndroid() && ee.b.isTwitterApp() }, onClick: o },
                      Z.a.i6ef95ec,
                    ),
                  ),
                ),
              Q.a.createElement(
                Ae.a,
                { link: { pathname: r, openInSameFrame: !0 }, style: Ne.buttonPadded, type: 'brandFilled' },
                VE,
              ),
            ),
          )
        },
        WE = Z.a.b772cd65,
        wE = Z.a.j3da4de9,
        kE = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'b7be91be', date: t(a) })
        },
        HE = Z.a.j94e995e,
        KE = Z.a.da458d6c,
        jE = Z.a.j4ed9f0e,
        zE = Z.a.b1ade78f,
        qE = Z.a.b1ade78f,
        QE = Z.a.j3da4de9,
        $E = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'jcb00a94', date: t(a) })
        },
        ZE = Z.a.aab67626,
        JE = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'j92ea4b8', date: t(a) })
        },
        XE = Z.a.d3c1e25e,
        es = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jcd067dd' },
          Q.a.createElement(pe.b, { link: 'https://help.twitter.com/rules-and-policies/twitter-rules' }, Z.a.g0bfb17a),
        ),
        ts = function (e) {
          var t,
            a = e.applicationSubmissionTimeInMs,
            n = e.decisionMadeTimeInMs,
            i = e.isNarrow,
            r = e.link,
            o = e.status,
            l = ((t = {}),
            z()(t, te.a.DISABLED, { title: El, content: sl, button: cl }),
            z()(t, te.a.INTAKE_PROGRESS, { title: null, content: null, button: null }),
            z()(t, te.a.LOCKED, { title: wE, content: n ? kE(n) : KE, button: cl }),
            z()(t, te.a.NEW_ACCOUNT, { title: wE, content: qE, button: cl }),
            z()(t, te.a.NOT_ELIGIBLE, { title: wE, content: zE, button: cl }),
            z()(t, te.a.NOT_STARTED, { title: null, content: null, button: null }),
            z()(t, te.a.VERIFICATION_DENIED, { title: QE, content: n ? $E(n) : HE, button: WE }),
            z()(t, te.a.VERIFICATION_PENDING, { title: ZE, content: a ? JE(a) : jE, button: WE }),
            z()(t, te.a.VERIFIED, { title: XE, content: es, button: WE }),
            t)[o],
            c = l.button,
            E = l.content,
            s = l.title
          return s && E
            ? Q.a.createElement(
                _e.a,
                { style: [Ne.container, Ne.verticalCenter, Ne.appBarOffset, i && Ne.narrowContainer] },
                Q.a.createElement(
                  pe.b,
                  {
                    accessibilityLevel: 1,
                    accessibilityRole: 'heading',
                    nativeID: ue.b,
                    size: 'title4',
                    style: Ne.header,
                    weight: 'heavy',
                  },
                  s,
                ),
                Q.a.createElement(pe.b, { color: 'gray700' }, E),
                Q.a.createElement(
                  Ae.a,
                  { link: { pathname: r, openInSameFrame: !0 }, style: Ne.buttonPadded, type: 'brandFilled' },
                  c,
                ),
              )
            : null
        },
        as = a('zh9S'),
        ns = a('vEo5'),
        is = { page: 'settings', section: 'account_verification' },
        rs = Object(qe.a)()
          .propsFromState(function () {
            return {
              access: Qe.m,
              accessFetchStatus: Qe.n,
              accountEligibility: Qe.o,
              accountViolations: Qe.p,
              authenticityType: Qe.t,
              currentStep: Qe.z,
              documentFormats: Qe.A,
              idCountry: Qe.G,
              idType: Qe.I,
              initialIntakeFetchStatus: Qe.K,
              surveyUrl: Qe.O,
              userEmail: ns.selectFirstEmail,
              verifyAccountFetchStatus: Qe.P,
              notabilityCategory: Qe.L,
              notabilityData: Qe.M,
              notabilitySubcategory: Qe.N,
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
              d = e.surveyUrl,
              N = e.userEmail,
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
              surveyUrl: d,
              userEmail: N,
              verifyAccountFetchStatus: _,
              notabilityCategory: I,
              notabilityData: T,
              notabilitySubcategory: u,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(zt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION',
              ),
              fetchAccessIfNeeded: Qe.b,
              fetchAccountEligibility: Qe.c,
              fetchAccountViolations: Qe.d,
              fetchDevices: ns.fetchDevicesIfNeeded,
              fetchDocumentFormats: Qe.g,
              googleAnalyticsPageView: as.a,
              resetFlow: Qe.j,
              resetSubmitVerification: Qe.l,
              setFormStepData: Qe.R,
              setIdCountry: Qe.T,
              setIdType: Qe.U,
              setNextFlow: Qe.V,
              setPreviousFlow: Qe.W,
              verifyAccount: Qe.Z,
            }
          })
          .withAnalytics(is),
        os = 'info',
        ls = 'input',
        cs = 'pivot',
        Es = 'radio',
        ss = 'screenName',
        Is = a('oQhu'),
        Ts = a('0zXz'),
        us = a('cHvH'),
        ds =
          (a('ulNE'),
          a('urw/'),
          a('1IsZ'),
          Object(qe.a)()
            .propsFromState(function () {
              return {
                authenticityType: Qe.t,
                authenticityData: Qe.s,
                idCountryName: Qe.H,
                idTypeName: Qe.J,
                notabilityCategory: Qe.L,
                notabilitySubcategory: Qe.N,
                notabilityData: Qe.M,
              }
            })
            .propsFromActions(function () {
              return { verifyAccount: Qe.Z }
            })),
        Ns = a('3A2y'),
        _s = Z.a.a91bb144,
        ps = Z.a.affce770,
        As = Z.a.i0864917,
        bs = Z.a.c7942073,
        Rs = Z.a.b8121da9,
        Cs = Z.a.d247ca7f,
        ms = Z.a.b51afbb2,
        Os = Z.a.cc87b01c,
        fs = function (e) {
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
              return Q.a.createElement(pe.b, { size: 'subtext2', style: Ne.subheading, weight: 'heavy' }, e)
            }
          return Q.a.createElement(
            _e.a,
            { style: [Ne.container, c && Ne.narrowContainer] },
            Q.a.createElement(
              pe.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: ue.b,
                size: 'title4',
                style: Ne.header,
                weight: 'heavy',
              },
              Os,
            ),
            Q.a.createElement(
              _e.a,
              { style: Ne.scrollableContainer },
              Q.a.createElement(pe.b, { color: 'gray700' }, Cs),
              u(As),
              E && Q.a.createElement(pe.b, { style: Ne.subtext }, Al[E]),
              I &&
                ((i = Rl[I]), Q.a.createElement(_e.a, null, u(bs), Q.a.createElement(pe.b, { style: Ne.subtext }, i))),
              s &&
                (function (e) {
                  var t = Object(Ns.a)(e, 'newsType'),
                    a = Object.values(t).flat()
                  return Q.a.createElement(
                    _e.a,
                    null,
                    u(Rs),
                    a.map(function (e, t) {
                      return Q.a.createElement(pe.b, { key: t, style: Ne.subtext }, e)
                    }),
                  )
                })(s),
              u(ms),
              r &&
                ((t = r),
                (a = {}),
                z()(a, te.d.IDENTITY_DOCUMENT, Z.a.e43425fa),
                z()(a, te.d.EMAIL, Z.a.a411926a),
                z()(a, te.d.WEBSITE, Z.a.e1c78795),
                (n = a[t]),
                Q.a.createElement(pe.b, { style: Ne.subtext }, n)),
              Q.a.createElement(pe.b, { color: 'gray700', style: Ne.contentContainer }, ps),
            ),
            Q.a.createElement(
              Ae.a,
              {
                onClick: function () {
                  T().catch(o()), l()
                },
                style: Ne.buttonFixed,
                type: 'brandFilled',
              },
              _s,
            ),
          )
        },
        Ss = ds(fs),
        Ls = 'INITIAL_FETCH_STATUS_RENDERER',
        hs = 'SUBMIT_FETCH_STATUS_RENDERER',
        ys = Z.a.g61ed8a4,
        Ds = function (e) {
          return null
        },
        Fs = (function (e) {
          k()(a, e)
          var t = K()(a)
          function a() {
            var e
            G()(this, a)
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
                      return e.violation_status === te.s.OUT_OF_COMPLIANCE
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
                Object(Is.a)(function (e) {
                  return Mt(e)
                }),
              ),
              z()(
                W()(e),
                '_getMemoizedVerificationScribeData',
                Object(Is.a)(function (e) {
                  var t = e.accessStatus,
                    a = e.authenticityType,
                    n = e.currentStep,
                    i = e.followersEligible,
                    r = e.idType,
                    o = e.mentionsEligible,
                    l = e.notabilityCategory,
                    c = e.notabilityData,
                    E = e.notabilitySubcategory
                  return gt(t, a, n, i, r, o, l, c, E)
                }),
              ),
              z()(W()(e), '_scribeAction', function (t, a) {
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
                  P()(
                    P()({}, e._getMemoizedVerificationScribeNamespace(l)),
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
              z()(W()(e), '_formComponentOptions', function () {
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
                  d = a.setPreviousFlow,
                  N = a.surveyUrl,
                  _ = a.userEmail,
                  p = a.verifyAccount,
                  A = a.verifyAccountFetchStatus
                return (
                  (t = {}),
                  z()(t, ze.name, {
                    ComponentToRender: ze,
                    componentProps: {
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), u()
                      },
                    },
                    genericModalProps: { renderHeader: Ds },
                  }),
                  z()(t, fs.name, {
                    ComponentToRender: Ss,
                    componentProps: {
                      createLocalApiErrorHandler: i,
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), u()
                      },
                    },
                    genericModalProps: { onBackClick: d },
                  }),
                  z()(t, ts.name, {
                    ComponentToRender: ts,
                    componentProps: { decisionMadeTimeInMs: o, link: e._accountSettingsLink, status: n },
                    genericModalProps: { backButtonType: 'close', hideBackButton: ee.b.isTwitterApp() },
                  }),
                  z()(t, pt.name, {
                    ComponentToRender: pt,
                    componentProps: {
                      documentFormats: l,
                      onCountryClick: function (e, t) {
                        I(e, t), d()
                      },
                    },
                    genericModalProps: { onBackClick: d },
                  }),
                  z()(t, At.name, {
                    ComponentToRender: At,
                    componentProps: {
                      documentFormats: l,
                      idCountry: c,
                      onTypeClick: function (e, t) {
                        T(e, t), d()
                      },
                    },
                    genericModalProps: { onBackClick: d },
                  }),
                  z()(t, te.h.INTAKE_LOADING, {
                    ComponentToRender: Ul,
                    componentProps: {},
                    genericModalProps: { hideBackButton: !0, renderHeader: Ds },
                  }),
                  z()(t, te.h.INTAKE_TYPE_SELECT, {
                    ComponentToRender: ut,
                    componentProps: {},
                    genericModalProps: { onBackClick: d },
                  }),
                  z()(t, te.h.INTAKE_UPLOAD, {
                    ComponentToRender: oc,
                    componentProps: {
                      handleOnClick: function () {
                        return e._scribeAction('click', 'CTA')
                      },
                    },
                    genericModalProps: { onBackClick: d },
                  }),
                  z()(t, BE.name, {
                    ComponentToRender: BE,
                    componentProps: {
                      link: e._accountSettingsLink,
                      onSurveyClick: function () {
                        return e._scribeAction('click', 'survey_link')
                      },
                      surveyUrl: N,
                    },
                    genericModalProps: { renderHeader: Ds },
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
                        _ && e.props.setFormStepData(r, _), e._scribeAction('click', 'CTA'), u()
                      },
                      handleOnClickInvalid: function () {
                        d()
                      },
                    },
                    genericModalProps: { onBackClick: d },
                  }),
                  z()(t, hs, {
                    ComponentToRender: Ue.a,
                    componentProps: {
                      fetchStatus: A,
                      onRequestRetry: function () {
                        p().catch(i())
                      },
                      render: Ts.a,
                      retryMessage: ys,
                    },
                    genericModalProps: { hideBackButton: A === Fe.a.LOADING, onBackClick: s },
                  }),
                  z()(t, Ls, {
                    ComponentToRender: Ue.a,
                    componentProps: {
                      fetchStatus: E,
                      onRequestRetry: e._initialFetchRetry,
                      render: Ts.a,
                      retryMessage: ys,
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
                return Q.a.createElement(
                  ve.b,
                  M()(
                    {
                      backButtonType: 'back',
                      backLocation: e._accountSettingsLink,
                      containerStyle: r.renderHeader ? Ne.rootNoAppBar : Ne.root,
                      hideBackButton: !1,
                      history: e.props.history,
                      withBottomBorder: !1,
                    },
                    r,
                  ),
                  Q.a.createElement(
                    n,
                    M()({}, i, { isNarrow: e._isNarrow, key: ''.concat(e.props.currentStep, '-screen') }),
                  ),
                )
              }),
              z()(W()(e), '_createFormFromLayout', function (t) {
                var a = e.props,
                  n = a.history,
                  i = a.setPreviousFlow
                if (t && RE[t]) {
                  var r = RE[t],
                    o = 'function' == typeof r ? r(P()({}, e.props)) : r
                  return Q.a.createElement(
                    ve.b,
                    { backButtonType: 'back', containerStyle: Ne.root, hideBackButton: !1, history: n, onBackClick: i },
                    e._renderLayoutComponent(o, t),
                  )
                }
                return Q.a.createElement(hE.a, { to: '/settings/account' })
              }),
              z()(W()(e), '_renderLayoutComponent', function (t, a) {
                var n = { isNarrow: e._isNarrow, key: ''.concat(a, '-screen') }
                switch (t.type) {
                  case os:
                    return Q.a.createElement(ft, M()({}, t.props, { key: ''.concat(a, '-screen') }))
                  case ls:
                    return Q.a.createElement(jt, M()({}, t.props, n))
                  case cs:
                    return Q.a.createElement(at, M()({}, t.props, n))
                  case Es:
                    return Q.a.createElement(LE, M()({}, t.props, n))
                  case ss:
                    return Q.a.createElement(PE, M()({}, t.props, n))
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
                if (i !== Fe.a.LOADED) return e._wrapInGenericModalScreen(Ls)
                if (r === Fe.a.LOADING || r === Fe.a.FAILED) return e._wrapInGenericModalScreen(hs)
                if (e._hasBadgeViolations(a)) return e._wrapInGenericModalScreen(se.name)
                switch (n) {
                  case te.h.LANDING_PAGE:
                    return e._wrapInGenericModalScreen(e._shouldStartFlow ? ze.name : ts.name)
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
                    return e._wrapInGenericModalScreen(fs.name)
                  case te.h.THANK_YOU:
                    return e._wrapInGenericModalScreen(BE.name)
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
                    i(is)
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
                    c = t.notabilityCategory,
                    E = t.notabilityData,
                    s = t.notabilitySubcategory
                  return this._isVerificationIntakeEnabled
                    ? Q.a.createElement(us.a, null, function (t) {
                        var I = t.windowWidth < de.a.theme.breakpoints.small
                        return (
                          I !== e._isNarrow && (e._isNarrow = I),
                          Q.a.createElement(
                            xE.c,
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
        })(Q.a.Component)
      z()(Fs, 'contextType', GE.a)
      var Us = rs(Fs)
      t.default = Us
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
        c = a.n(l),
        E = a('Y9Ll'),
        s = a.n(E),
        I = a('1Pcy'),
        T = a.n(I),
        u = a('5Yy7'),
        d = a.n(u),
        N = a('2VqO'),
        _ = a.n(N),
        p = a('KEM+'),
        A = a.n(p),
        b = (a('2G9S'), a('ERkP')),
        R = a.n(b),
        C = a('38/B'),
        m = a('t62R'),
        O = a('/yvb'),
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
        x = a('WtWS'),
        G = a('ioan'),
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
          d()(a, e)
          var t = _()(a)
          function a(e) {
            var n
            c()(this, a),
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
                  c =
                    null === (a = n._textInput) ||
                    void 0 === a ||
                    null === (i = a.textInputNode) ||
                    void 0 === i ||
                    null === (r = i.validity) ||
                    void 0 === r
                      ? void 0
                      : r.badInput
                return 'number' === o && '' === l && !0 === c
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
              A()(T()(n), '_handleFocus', function (e) {
                var t = n.props.onFocus
                n.setState({ isFocused: !0 }), t && t(e)
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
                      c = e.validLength,
                      E = e.value
                    ;(c === i && a === o && !!n === !!l && ('string' == typeof r) === ('string' == typeof E)) ||
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
                    return R.a.createElement(
                      v.a,
                      { style: [K.root, r] },
                      R.a.createElement(
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
                        R.a.createElement(
                          v.a,
                          { style: K.textInputFormWrapper },
                          R.a.createElement(
                            v.a,
                            { style: K.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      R.a.createElement(
                        v.a,
                        { style: [K.sidePadding, K.underTextInputForm] },
                        R.a.createElement(
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
                    return R.a.createElement(
                      m.b,
                      {
                        color: n ? 'gray700' : a,
                        numberOfLines: 1,
                        size: n ? 'headline1' : 'subtext2',
                        style: [
                          K.textInputHeaderItem,
                          n && K.placeholderText,
                          !C.a.reducedMotionEnabled && K.transition,
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
                    return R.a.createElement(
                      v.a,
                      { style: H.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      R.a.createElement(
                        m.b,
                        { size: 'headline1', style: H.wrapper },
                        R.a.createElement(
                          G.a,
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
                      ? R.a.createElement(
                          v.a,
                          { style: K.passwordVisibilityIconContainer },
                          R.a.createElement(O.a, {
                            accessibilityLabel: n ? w : W,
                            focusable: !0,
                            hoverLabel: { label: n ? w : W },
                            icon: n ? R.a.createElement(M.a, null) : R.a.createElement(g.a, null),
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
                    return R.a.createElement(
                      v.a,
                      { accessibilityLiveRegion: 'polite' },
                      R.a.createElement(
                        m.b,
                        { color: 'gray700', size: 'subtext2', style: K.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return R.a.createElement(
                      v.a,
                      { accessibilityLiveRegion: 'assertive' },
                      R.a.createElement(
                        m.b,
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
                    return R.a.createElement(
                      v.a,
                      { accessibilityLiveRegion: 'polite', style: [K.textInputHeaderItem, K.displayCount] },
                      R.a.createElement(
                        m.b,
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
                    return e && R.a.createElement(e, { style: a })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? R.a.createElement(P.a, { style: [K.validationIcon, f.a.invalidColor] })
                      : R.a.createElement(x.a, { style: [K.validationIcon, f.a.validColor] })
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
        })(R.a.Component)
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
        o = a('BIH/'),
        l = a('lhaq'),
        c = a('aoZ+')
      n(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = r(this),
              a = o(t),
              n = c(t, 0)
            return (n.length = i(n, t, t, a, 0, void 0 === e ? 1 : l(e))), n
          },
        },
      )
    },
    'urw/': function (e, t, a) {
      a('7St7')('flat')
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
