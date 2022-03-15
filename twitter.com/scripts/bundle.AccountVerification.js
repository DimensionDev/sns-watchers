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
          return vs
        }),
        a.d(t, 'AccountVerification', function () {
          return Ms
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
        Me = (a('yH/f'), a.p + 'verification-form-start.2817b0c5.png'),
        ge = a.p + 'verification-form-start-large.7e335815.png',
        Pe = a.p + 'verification-form-loading.5bb26665.png',
        xe = a.p + 'verification-form-loading-large.801f2ee5.png',
        Ge = a.p + 'verification-form-sent.ac5bd485.png',
        Ye = a.p + 'verification-form-sent-large.555a7815.png',
        Ve = a('TIdA'),
        Be = a('A91F'),
        We = 600,
        we = 1200,
        ke = Object.freeze({ START: 'start', LOADING: 'loading', SENT: 'sent' }),
        He =
          ((n = {}),
          z()(n, ke.START, {
            aspectRatio: 2,
            default: Me,
            variants: [
              { uri: Me, width: We, height: 300 },
              { uri: ge, width: we, height: 600 },
            ],
          }),
          z()(n, ke.LOADING, {
            aspectRatio: 1.5,
            default: Pe,
            variants: [
              { uri: Pe, width: We, height: 400 },
              { uri: xe, width: we, height: 800 },
            ],
          }),
          z()(n, ke.SENT, {
            aspectRatio: 2,
            default: Ge,
            variants: [
              { uri: Ge, width: We, height: 300 },
              { uri: Ye, width: we, height: 600 },
            ],
          }),
          n),
        Ke = de.a.create(function () {
          return { narrowBanner: { flex: 1 } }
        }),
        je = function (e) {
          var t = e.isNarrow,
            a = e.type,
            n = He[a],
            i = Q.a.createElement(Ve.a, {
              accessibilityLabel: '',
              aspectMode: t ? Be.a.COVER : Be.a.exact(n.aspectRatio),
              customVariants: n.variants,
              image: n.default,
            })
          return t ? Q.a.createElement(_e.a, { style: Ke.narrowBanner }, i) : i
        },
        ze = Z.a.j163be32,
        qe = Z.a.gaf821c8,
        Qe = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e5b4cc43' },
          Q.a.createElement(
            pe.b,
            { link: 'https://help.twitter.com/managing-your-account/twitter-verified-accounts' },
            Z.a.e1ac0f9a,
          ),
        ),
        $e = function (e) {
          var t = e.handleOnClick,
            a = e.isNarrow
          return Q.a.createElement(
            _e.a,
            { style: Ne.largeBannerContainer },
            Q.a.createElement(je, { isNarrow: a, type: ke.START }),
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
                qe,
              ),
              Q.a.createElement(pe.b, { color: 'gray700' }, Qe),
              Q.a.createElement(Ae.a, { onClick: t, style: Ne.buttonPadded, type: 'brandFilled' }, ze),
            ),
          )
        },
        Ze = (a('tQbP'), a('+KXO'), a('WNMA'), a('rxPX')),
        Je = a('ZyHq'),
        Xe = Object(Ze.a)()
          .propsFromState(function () {
            return { documentFormats: Je.A, idCountry: Je.G, idType: Je.I }
          })
          .propsFromActions(function () {
            return { setNextFlow: Je.V }
          })
          .withAnalytics(),
        et = Object(Ze.a)().propsFromActions(function () {
          return { setNextFlow: Je.V }
        }),
        tt = a('iySH'),
        at = a('htQn'),
        nt = de.a.create(function (e) {
          return {
            contentContainer: { alignItems: 'center', flexDirection: 'row', flexGrow: 1 },
            content: { flexGrow: 1, flexShrink: 1 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space12, flexShrink: 0 },
          }
        }),
        it = et(function (e) {
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
                    at.a,
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
                      { style: nt.contentContainer },
                      Q.a.createElement(
                        _e.a,
                        { style: nt.content },
                        Q.a.createElement(pe.b, null, r),
                        a && Q.a.createElement(pe.b, { color: 'gray700', size: 'subtext2' }, a),
                      ),
                      Q.a.createElement(tt.a, { style: nt.icon }),
                    ),
                  )
                }),
              ),
            ),
            a,
          )
        }),
        rt = it,
        ot = Z.a.e43425fa,
        lt = Z.a.e43672a0,
        ct = Z.a.b246aa5d,
        Et = Z.a.d6fb5877,
        st = Z.a.b72f97cc,
        It = Z.a.b2ab6008,
        Tt = Z.a.c1df579e,
        ut = function (e, t) {
          return e && t ? e[t].country : Et
        },
        dt = function (e, t, a) {
          return e && t && a ? e[t].id_types[a].name : It
        },
        Nt = Xe(function (e) {
          var t = e.documentFormats,
            a = e.idCountry,
            n = e.idType,
            i = e.isNarrow,
            r = e.setNextFlow
          return Q.a.createElement(rt, {
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
              Tt,
            ),
            description: lt,
            isNarrow: i,
            items: [
              { description: ut(t, a), label: ct, nextStep: te.h.ID_COUNTRY_SELECT },
              { description: dt(t, a, n), disabled: !a, label: st, nextStep: te.h.ID_TYPE_SELECT },
            ],
            title: ot,
          })
        }),
        _t = Nt,
        pt = a('1byD'),
        At = a('6OUF'),
        bt = Z.a.h9270b1b,
        Rt = function (e) {
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
                ct,
              ),
              Q.a.createElement(
                _e.a,
                { style: [Ne.contentContainer, Ne.topPaddingSmall] },
                Q.a.createElement(At.a, {
                  Icon: pt.a,
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
                  placeholder: bt,
                }),
              ),
            ),
            Q.a.createElement(
              _e.a,
              { style: Ne.scrollableContainer },
              c.map(function (e) {
                return t && t[e].country.match(o)
                  ? Q.a.createElement(
                      at.a,
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
        Ct = function (e) {
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
                st,
              ),
            ),
            Q.a.createElement(
              _e.a,
              { style: [Ne.contentContainer, Ne.scrollableContainer, Ne.topPaddingSmall] },
              r.map(function (e) {
                var t = e.id_type,
                  a = e.name
                return Q.a.createElement(
                  at.a,
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
        mt = a('m3Bd'),
        Ot = a.n(mt),
        ft = Object(Ze.a)()
          .propsFromActions(function () {
            return { setNextFlow: Je.V, setPreviousFlow: Je.W }
          })
          .withAnalytics(),
        St = [
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
        Lt = ft(function (e) {
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
            T = Ot()(e, St),
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
        ht = Lt,
        yt = a('RhWx'),
        Dt = a.n(yt),
        Ft =
          (a('M+/F'),
          a('jwue'),
          a('+oxZ'),
          a('jQ3i'),
          a('x4t0'),
          a('DfhM'),
          function (e) {
            var t,
              a = Object(Je.y)(e)
            return null !== (t = null == a ? void 0 : a.inputData) && void 0 !== t ? t : []
          }),
        Ut = Object(Ze.a)()
          .propsFromState(function () {
            return { currentStep: Je.z, formHistory: Ft }
          })
          .propsFromActions(function () {
            return { setFormStepData: Je.R, setNextFlow: Je.V, updateFormHistory: Je.Y }
          })
          .withAnalytics(),
        vt = a('Qp/W'),
        Mt = a.n(vt),
        gt = (a('KOtZ'), a('ZVkB'), ['newsType']),
        Pt = function (e) {
          return (
            e.charAt(0).toLowerCase() +
            e.slice(1, e.length).replace(/[A-Z]/g, function (e) {
              return '_'.concat(e.toLowerCase())
            })
          )
        },
        xt = function (e) {
          return { component: te.g[e].scribeComponent || e }
        },
        Gt = function (e, t, a, n, i, r, o, l, c) {
          var E = n || r,
            s =
              l &&
              (function (e) {
                e.newsType
                var t = Ot()(e, gt)
                return Object.keys(t).map(function (e) {
                  return Pt(e)
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
        Yt = a('855f'),
        Vt = a('p+r5'),
        Bt = a('XiMS'),
        Wt = ['isUrlInvalid', 'labelGenerator', 'required', 'value'],
        wt = 'verification-checkbox-label',
        kt = Z.a.i33cf691,
        Ht = Z.a.c1df579e,
        Kt = Z.a.b679ff69,
        jt = function (e) {
          return (
            Mt()(e, !1, !1) &&
            (function (e) {
              if (e.includes('://')) {
                var t = e.split('://')
                return 'http' === t[0] || 'https' === t[0]
              }
              return !0
            })(e)
          )
        },
        zt = de.a.create(function (e) {
          return {
            input: { paddingHorizontal: 0 },
            addFieldText: { alignSelf: 'flex-start', marginLeft: e.borderWidths.medium, paddingTop: e.spaces.space12 },
            checkboxContainer: { paddingTop: 0 },
          }
        }),
        qt = Ut(function (e) {
          var t = e.addFieldText,
            a = void 0 === t ? kt : t,
            n = e.allowAddFields,
            i = void 0 !== n && n,
            r = e.analytics,
            o = e.buttonText,
            l = void 0 === o ? Ht : o,
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
                  return jt(e.value)
                }),
                a = !t || !(!c || U)
              y(t), Y(a)
            },
            [i, c, O, U, k],
          )
          var H = function (e, t) {
            w(
              setTimeout(function () {
                var a = !jt(e)
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
                    l = Ot()(a, Wt),
                    c = l.label || '',
                    s = l.name || ''.concat(E, '-').concat(e),
                    I = l.errorText || Kt,
                    T = Yt.a.getFormattedCount(t + 1),
                    u = r ? r({ n: T }) : c
                  return Q.a.createElement(
                    Vt.a,
                    M()({}, l, {
                      errorText: I,
                      invalid: n,
                      key: e,
                      label: u,
                      name: s,
                      onBlur: function (t) {
                        return (function (e, t) {
                          clearTimeout(W)
                          var a = !jt(e.target.value)
                          return f(P()(P()({}, O), {}, z()({}, t, P()(P()({}, O[t]), {}, { isUrlInvalid: a }))))
                        })(t, e)
                      },
                      onChange: function (t) {
                        return (function (e, t) {
                          clearTimeout(W)
                          var a = !1,
                            n = e.target.value
                          return (
                            O[t].isUrlInvalid ? (a = !jt(n)) : H(n, t),
                            f(P()(P()({}, O), {}, z()({}, t, P()(P()({}, O[t]), {}, { isUrlInvalid: a, value: n }))))
                          )
                        })(t, e)
                      },
                      style: zt.input,
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
                        style: zt.addFieldText,
                      },
                      a,
                    )
                  : null,
              ),
              c &&
                Q.a.createElement(
                  _e.a,
                  { style: [Ne.contentContainer, Ne.checkboxContainer, zt.checkboxContainer] },
                  Q.a.createElement(
                    _e.a,
                    { style: Ne.checkbox },
                    Q.a.createElement(Bt.a, {
                      accessibilityLabelledBy: wt,
                      checked: U,
                      onChange: function () {
                        return v(!U)
                      },
                    }),
                  ),
                  Q.a.createElement(
                    _e.a,
                    { nativeID: wt, style: Ne.checkboxText },
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
                            t = P()(P()({}, t), {}, z()({}, e.dataKey, [].concat(Dt()(i), [r])))
                          }
                        }),
                        t
                      )
                    })(O),
                    t = Object.keys(e).map(function (e) {
                      return Pt(e)
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
        Qt = qt,
        $t = a('0KEI'),
        Zt = Object(Ze.a)()
          .propsFromState(function () {
            return { errors: Je.q, status: Je.r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object($t.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_LOADING',
              ),
              fetchAuthenticationResult: Je.e,
              resetAuthenticationResult: Je.h,
              resetDocumentIdProcess: Je.i,
              setNextFlow: Je.V,
              setPreviousFlow: Je.W,
            }
          })
          .withAnalytics(),
        Jt = a('B5iK'),
        Xt = a('pXBW'),
        ea = 'https://help.twitter.com/managing-your-account/twitter-verified-accounts',
        ta = Z.a.abd587d1,
        aa = Z.a.i0bba81a,
        na = Z.a.a6a76e3c,
        ia = Z.a.ecd2abda,
        ra = Z.a.cb70b893,
        oa = Z.a.g8b511fe,
        la = Z.a.c7d50c96,
        ca = Z.a.a68b43ed,
        Ea = Z.a.b5e3039f,
        sa = Z.a.h146703d,
        Ia = Z.a.ee38d0f0,
        Ta = Z.a.cb97ee3e,
        ua = Z.a.hc371f34,
        da = Z.a.b9d0ad9f,
        Na = Z.a.ge137dce,
        _a = Z.a.h2b9a5fd,
        pa = Z.a.baccb708,
        Aa = Z.a.feadd98c,
        ba = Z.a.j7ae97a9,
        Ra = Z.a.c368aa8d,
        Ca = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'j23c6258' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.c076e32d),
        ),
        ma = Z.a.ded0edad,
        Oa = Z.a.bebae559,
        fa = Z.a.c557161f,
        Sa = Z.a.e2d42628,
        La = Z.a.jc19b4e7,
        ha = Z.a.fc3ee695,
        ya = Z.a.i3e65eb4,
        Da = Z.a.jd014eba,
        Fa = Z.a.a96901cb,
        Ua = Z.a.cc424a21,
        va = Z.a.ibfc1a5a,
        Ma = Z.a.e1c78795,
        ga = Z.a.cf93bcbf,
        Pa = Z.a.a7f1cff6,
        xa = function (e) {
          return { title: ca, description: e, label: Ea }
        },
        Ga = function (e) {
          return { title: Aa, description: e, articleLabelGenerator: ma, addFieldText: ta }
        },
        Ya = function (e) {
          return { title: Ta, description: e, label: sa }
        },
        Va = function (e) {
          return { title: Sa, description: e, label: La }
        },
        Ba = Z.a.c6bd60ec,
        Wa = Z.a.je403ac5,
        wa = Z.a.ff8c97fb,
        ka = Z.a.h4d652fb,
        Ha = Z.a.c5b72ac5,
        Ka = Z.a.f7ff070c,
        ja = Z.a.eb7de689,
        za =
          ((i = {}),
          z()(i, te.l.ACTIVISM, Ba),
          z()(i, te.l.COMPANY, Wa),
          z()(i, te.l.ENTERTAINMENT, wa),
          z()(i, te.l.GOVERNMENT, ka),
          z()(i, te.l.INFLUENCER_OTHER, Ha),
          z()(i, te.l.NEWS, Ka),
          z()(i, te.l.SPORTS, ja),
          i),
        qa = Z.a.cc4b66b5,
        Qa = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'gee7fae8' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.e492eeb4),
        ),
        $a = { title: qa, description: Qa },
        Za = Z.a.b37461a4,
        Ja = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd454b49e' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.ece0b9bc),
        ),
        Xa = Z.a.b27325f6,
        en = Z.a.a5a6affb,
        tn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'hd977dd9' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.db252639),
        ),
        an = Z.a.a15326dd,
        nn = Z.a.g704a939,
        rn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e3432573' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.b25b02c1),
        ),
        on = {
          title: na,
          description: tn,
          notEligibleButton: ra,
          notEligibleDescription: rn,
          notEligibleTitle: va,
          items: [
            { helpText: la, label: oa },
            { helpText: Ia, label: sa },
            { helpText: an, label: ua },
            { helpText: nn, label: ha },
          ],
        },
        ln = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.j6ef6afa),
        ),
        cn = xa(ln),
        En = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.d42d1629),
        ),
        sn = Ya(En),
        In = { title: pa, description: Ca, articleLabelGenerator: ma, addFieldText: ta },
        Tn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ie26d72d' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.ccadfc84),
        ),
        un = { title: Fa, description: Tn, label: Ua, confirmationText: Da },
        dn = Z.a.d2ea2049,
        Nn = Z.a.h753ddd2,
        _n = {
          title: Za,
          description: Ja,
          items: [
            { helpText: en, label: Xa },
            { helpText: Nn, label: dn },
          ],
        },
        pn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'af3fe861' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.ddb47f56),
        ),
        An = Z.a.a15326dd,
        bn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a08d6af3' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.bf9e181a),
        ),
        Rn = {
          title: na,
          description: pn,
          notEligibleButton: ra,
          notEligibleDescription: bn,
          notEligibleTitle: va,
          items: [
            { helpText: la, label: oa },
            { helpText: Ia, label: sa },
            { helpText: An, label: ua },
          ],
        },
        Cn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.j6ef6afa),
        ),
        mn = xa(Cn),
        On = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.d42d1629),
        ),
        fn = Ya(On),
        Sn = { title: pa, description: Ca, articleLabelGenerator: ma, addFieldText: ta },
        Ln = (Z.a.I18NFormatMessage, pe.b, Z.a.ccadfc84, Z.a.ff929feb),
        hn = Z.a.jf537894,
        yn = Z.a.i3e6aaa5,
        Dn = Z.a.bbcbb9e6,
        Fn = {
          title: Za,
          description: Ja,
          items: [
            { helpText: hn, label: Ln },
            { helpText: Dn, label: yn },
          ],
        },
        Un = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f774e39d' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.e8e39f94),
        ),
        vn = {
          title: na,
          description: Un,
          items: [
            { helpText: la, label: oa },
            { helpText: Ia, label: sa },
            { helpText: fa, label: Oa },
            { helpText: _a, label: ua },
          ],
        },
        Mn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd8510869' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.e126dd3e),
        ),
        gn = xa(Mn),
        Pn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'h75e3640' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.gbdf1325),
        ),
        xn = Ya(Pn),
        Gn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'de6d69a1' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.b0abbb16),
        ),
        Yn = Va(Gn),
        Vn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'be0e8fda' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.g4e815f3),
        ),
        Bn = Ga(Vn),
        Wn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'baed7213' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.i560665d),
        ),
        wn = Z.a.j0bc23f3,
        kn = { title: ia, description: Wn, confirmationText: wn },
        Hn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c5d688ce' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.eb8eeaf0),
        ),
        Kn = {
          title: na,
          description: Hn,
          items: [
            { helpText: Ra, label: ba },
            { helpText: ya, label: ha },
          ],
        },
        jn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fce3e22d' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.h486f753),
        ),
        zn = Ga(jn),
        qn = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f1b276f0' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.a77ed149),
        ),
        Qn = { title: aa, description: qn, label: ha, confirmationText: Da },
        $n = Z.a.aa6228de,
        Zn = Z.a.d5b3cbc9,
        Jn = Z.a.b5a3e590,
        Xn = Z.a.e484f794,
        ei = Z.a.b8d8ea64,
        ti = Z.a.ff27db3c,
        ai = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e2465096' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.jc7215cd),
        ),
        ni = xa(ai),
        ii = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g83bcecc' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.gdb5ae61),
        ),
        ri = Ga(ii),
        oi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f3016c6f' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.icb5913e),
        ),
        li = {
          title: na,
          description: oi,
          items: [
            { helpText: la, label: oa },
            { helpText: Ia, label: sa },
            { helpText: fa, label: Oa },
            { helpText: _a, label: ua },
          ],
        },
        ci = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'h74144bd' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.af819831),
        ),
        Ei = Va(ci),
        si = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jef5dfc5' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.d35525bf),
        ),
        Ii = Ya(si),
        Ti = {
          title: Za,
          description: Ja,
          items: [
            { helpText: Zn, label: $n },
            { helpText: Xn, label: Jn },
            { helpText: ti, label: ei },
          ],
        },
        ui = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'gf5a4309' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.cb181ed0),
        ),
        di = {
          title: na,
          description: ui,
          items: [
            { helpText: la, label: oa },
            { helpText: Ia, label: sa },
            { helpText: fa, label: Oa },
            { helpText: _a, label: ua },
          ],
        },
        Ni = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g2e175b1' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.f6c3d3ff),
        ),
        _i = xa(Ni),
        pi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efc369c2' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.bad6af53),
        ),
        Ai = Ga(pi),
        bi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ff03f07c' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.af0cb1b5),
        ),
        Ri = Va(bi),
        Ci = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a3e9dde2' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.h84f1fe0),
        ),
        mi = Ya(Ci),
        Oi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c2b8fb3c' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.bd70d5d0),
        ),
        fi = Z.a.c0e57cb2,
        Si = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'da6e5b18' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.h9ec0778),
        ),
        Li = Z.a.f3c605b6,
        hi = {
          title: na,
          description: Oi,
          items: [
            { helpText: la, label: oa },
            { helpText: Ia, label: sa },
            { helpText: Na, label: ua },
          ],
        },
        yi = { title: fi, description: Si, items: [{ label: Li }] },
        Di = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.j6ef6afa),
        ),
        Fi = { title: ca, description: Di, label: Ea },
        Ui = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'bb47d2b9' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.f7998564),
        ),
        vi = { title: Ta, description: Ui, label: sa },
        Mi = { title: pa, description: Ca, articleLabelGenerator: ma, addFieldText: ta },
        gi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'db930fb2' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.b4e93970),
        ),
        Pi = Z.a.h042d1a5,
        xi = Z.a.d2310f0b,
        Gi = {
          title: na,
          description: gi,
          items: [
            { description: xi, label: Pi },
            { description: Na, label: ba },
          ],
        },
        Yi = Z.a.ba04b4c1,
        Vi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'dc263ec0' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.jb3e663d),
        ),
        Bi = { title: Yi, description: Vi, label: Pi },
        Wi = { title: Aa, description: Ca, articleLabelGenerator: ma, addFieldText: ta },
        wi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd8b21ebb' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.a7a51b91),
        ),
        ki = { title: Pa, description: wi, label: Ma },
        Hi = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'i3b4217a' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.c58d2c6b),
        ),
        Ki = Z.a.i9b124b6,
        ji = Z.a.f84a99ee,
        zi = Z.a.j2cb5f50,
        qi = Z.a.j2472894,
        Qi = Z.a.ha44c13f,
        $i = Z.a.j8ae9d40,
        Zi = {
          title: Za,
          description: Hi,
          items: [
            { helpText: ji, label: Ki },
            { helpText: qi, label: zi },
            { helpText: $i, label: Qi },
          ],
        },
        Ji = Z.a.ef1d6175,
        Xi = Z.a.f54ba6e6,
        er = Z.a.dd85d0af,
        tr = Z.a.f0058c60,
        ar = Z.a.f420a711,
        nr = Z.a.fb97d22b,
        ir = {
          candidateTitle: Ji,
          candidateDescription: Xi,
          officialTitle: er,
          officialDescription: tr,
          confirmButtonLabel: ar,
          declineButtonLabel: nr,
        },
        rr = Z.a.e16b1cc8,
        or = Z.a.cf2ee92e,
        lr = Z.a.g544885e,
        cr = Z.a.bd0b4542,
        Er = Z.a.i45b224c,
        sr = Z.a.fba1dd66,
        Ir = Z.a.e95c44dd,
        Tr = Z.a.fa5e15e1,
        ur = {
          candidateTitle: rr,
          candidateDescription: or,
          officeTitle: lr,
          officeDescription: cr,
          officialTitle: Er,
          officialDescription: sr,
          confirmButtonLabel: Ir,
          declineButtonLabel: Tr,
        },
        dr = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ja62479f' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.c04b4b1b),
        ),
        Nr = Ga(dr),
        _r = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f28bbbb0' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.a60039a6),
        ),
        pr = Ga(_r),
        Ar = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b229f4b8' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.ba75f2ad),
        ),
        br = Ga(Ar),
        Rr = Z.a.jdf47e8d,
        Cr = Z.a.eeec7315,
        mr = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ec71430d' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.d9486fbf),
        ),
        Or = { title: Cr, description: mr, websiteLabel: Rr },
        fr = Z.a.b163b653,
        Sr = Z.a.d2378d34,
        Lr = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f9e2b0f2' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.e3b02224),
        ),
        hr = { title: Sr, description: Lr, websiteLabel: fr },
        yr = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a394654e' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.e332fb11),
        ),
        Dr = { title: aa, description: yr, websiteLabel: fr },
        Fr = Z.a.a05b8445,
        Ur = Z.a.hdad12b1,
        vr = Z.a.a18c6dfb,
        Mr = Z.a.h0b46533,
        gr = Z.a.d2d7af4b,
        Pr = Z.a.d83e51db,
        xr = {
          title: Za,
          description: Ja,
          items: [
            { description: Mr, label: vr },
            { description: Ur, label: Fr },
            { description: Pr, label: gr },
          ],
        },
        Gr = Z.a.g708cbdb,
        Yr = Z.a.b107ee5b,
        Vr = Z.a.e95c44dd,
        Br = Z.a.fa5e15e1,
        Wr = { title: Gr, description: Yr, confirmButtonLabel: Vr, declineButtonLabel: Br },
        wr = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'dcb0da53' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.h04c272b),
        ),
        kr = Z.a.e8746826,
        Hr = { title: ia, description: wr, confirmationText: kr },
        Kr = Z.a.jc09b420,
        jr = Z.a.gfbd7e58,
        zr = Z.a.e95c44dd,
        qr = Z.a.fa5e15e1,
        Qr = { headline: Kr, subtext: jr, actionLabel: zr, tertiaryActionLabel: qr },
        $r = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd82a96af' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.j331c658),
        ),
        Zr = Z.a.h0ad4c9d,
        Jr = Z.a.a6553b5f,
        Xr = Z.a.a29b2987,
        eo = Z.a.ab4eae60,
        to = {
          title: na,
          description: $r,
          items: [
            { description: Jr, label: Zr },
            { description: eo, label: Xr },
          ],
        },
        ao = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd47b4101' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.h02fe64e),
        ),
        no = Z.a.b3fac982,
        io = { title: aa, description: ao, websiteLabel: Ma, confirmationText: no },
        ro = Z.a.e26dc9e2,
        oo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a3540593' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.a7df4b84),
        ),
        lo = { title: ro, description: oo, articleNumerationLabelGenerator: ma, addFieldText: ta },
        co = Z.a.e164df2d,
        Eo = Z.a.i80ff05e,
        so = Z.a.cf7482eb,
        Io = Z.a.cb70b893,
        To = { title: co, description: Eo, actionLabel: so, tertiaryActionLabel: Io },
        uo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'edb782e6' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.d575e579),
        ),
        No = {
          title: na,
          description: uo,
          items: [
            { description: la, label: oa },
            { description: Ia, label: sa },
            { description: fa, label: Oa },
            { description: da, label: ua },
          ],
        },
        _o = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'cc16af2c' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.ede35c04),
        ),
        po = xa(_o),
        Ao = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b42b7001' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.d5dedb7a),
        ),
        bo = Ya(Ao),
        Ro = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fd2c6f62' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.ab604a66),
        ),
        Co = Va(Ro),
        mo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ec7027cc' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.i532d121),
        ),
        Oo = Ga(mo),
        fo = Z.a.fcb96cfc,
        So = Z.a.ddc7d64a,
        Lo = Z.a.c4e0d346,
        ho = Z.a.e3ce81fa,
        yo = Z.a.b2808f47,
        Do = Z.a.jaa90f86,
        Fo = {
          title: Za,
          description: Ja,
          items: [
            { helpText: So, label: fo },
            { helpText: ho, label: Lo },
            { helpText: Do, label: yo },
          ],
        },
        Uo = Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'a0a9f835' }),
        vo = Z.a.bbd9a911,
        Mo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'iba551d5' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.f22a6d0c),
        ),
        go = { title: ia, description: Uo, confirmationText: vo },
        Po = Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'h515e868' }),
        xo = { title: ia, description: Po, confirmationText: vo },
        Go = { headline: va, subtext: Mo, actionLabel: ra },
        Yo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd2cd7f89' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.i78c9fd3),
        ),
        Vo = Z.a.he9c5637,
        Bo = {
          title: na,
          description: Yo,
          items: [
            { helpText: la, label: oa },
            { helpText: Ia, label: sa },
            { helpText: fa, label: Oa },
            { helpText: Vo, label: ga },
            { helpText: _a, label: ua },
          ],
        },
        Wo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c68614a2' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.i78b0bd0),
        ),
        wo = xa(Wo),
        ko = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b4ea622e' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.i78103dc),
        ),
        Ho = Ya(ko),
        Ko = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'acab99f6' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.ebfa8bb3),
        ),
        jo = Va(Ko),
        zo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'df0b2577' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.fcfad60b),
        ),
        qo = { title: Pa, description: zo, label: Ma },
        Qo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jfda4c28' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.a5e8a43a),
        ),
        $o = Ga(Qo),
        Zo = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g3299df1' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.d9bd3821),
        ),
        Jo = Z.a.bf06e1d5,
        Xo = Z.a.e241d35d,
        el = {
          title: na,
          description: Zo,
          items: [
            { description: Xo, label: ba },
            { description: Jo, label: ga },
          ],
        },
        tl = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'id6bbc01' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.a67f27bc),
        ),
        al = Z.a.ad456030,
        nl = Z.a.hbe2e65b,
        il = {
          title: na,
          description: tl,
          items: [
            { description: al, label: ba },
            { description: nl, label: ga },
          ],
        },
        rl = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fbe119c5' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.b8be7ad9),
        ),
        ol = { title: Pa, description: rl, websiteLabel: Ma },
        ll = Ga(Ca),
        cl = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'da0e7f32' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.fa437e4d),
        ),
        El = { title: Pa, description: cl, websiteLabel: Ma },
        sl = Ga(Ca),
        Il = Z.a.j24c37b2,
        Tl = Z.a.j3da4de9,
        ul = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ca20e39f' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.b436b100),
        ),
        dl = Z.a.ff2ee0c1,
        Nl = Z.a.af39265e,
        _l = Z.a.hc61adfb,
        pl = Z.a.d2042392,
        Al = Z.a.c365dcc5,
        bl = Z.a.c8ee31da,
        Rl = Z.a.bb51cd79,
        Cl =
          ((r = {}),
          z()(r, te.l.ACTIVISM, dl),
          z()(r, te.l.COMPANY, Nl),
          z()(r, te.l.ENTERTAINMENT, _l),
          z()(r, te.l.GOVERNMENT, pl),
          z()(r, te.l.INFLUENCER_OTHER, Al),
          z()(r, te.l.NEWS, bl),
          z()(r, te.l.SPORTS, Rl),
          r),
        ml = Z.a.d2ea2049,
        Ol =
          ((o = {}),
          z()(o, te.n.ACTIVIST, Ba),
          z()(o, te.n.CANDIDATE, zi),
          z()(o, te.n.COMPANY, Ln),
          z()(o, te.n.CONTENT_CREATOR, Xa),
          z()(o, te.n.ENTERTAINMENT_COMPANY, $n),
          z()(o, te.n.ENTERTAINMENT_INDIVIDUAL, Jn),
          z()(o, te.n.EXECUTIVE, yn),
          z()(o, te.n.FREELANCER, Fr),
          z()(o, te.n.GAMING_INDIVIDUAL, yo),
          z()(o, te.n.INFLUENTIAL_INDIVIDUAL, ml),
          z()(o, te.n.JOURNALIST, vr),
          z()(o, te.n.OFFICE, Qi),
          z()(o, te.n.OFFICIAL, Ki),
          z()(o, te.n.ORGANIZATION, gr),
          z()(o, te.n.PRODUCTION, ei),
          z()(o, te.n.SPORTS_ENTITY, Lo),
          z()(o, te.n.SPORTS_INDIVIDUAL, fo),
          o),
        fl = Z.a.fc2a5c92,
        Sl = Z.a.jf4b6f7f,
        Ll = Tl,
        hl = ul,
        yl = Z.a.d338f53e,
        Dl = function (e) {
          var t = e.error,
            a = e.onButtonClick,
            n = t instanceof Xt.a ? t.status : void 0,
            i = yl,
            r = fl,
            o = Sl
          return (
            429 === n && ((i = Il), (r = Ll), (o = hl)),
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
        Fl = Z.a.h2d4ba55,
        Ul = Z.a.i2051842,
        vl = (function (e) {
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
                    (this._pollingTimer = new Jt.b(5e3).interval(function () {
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
                    Q.a.createElement(Dl, { onButtonClick: this._handleErrorButtonClick })
                  )
                },
              },
              {
                key: '_renderLoading',
                value: function () {
                  return Q.a.createElement(
                    _e.a,
                    { style: Ne.largeBannerContainer },
                    Q.a.createElement(je, { isNarrow: this.props.isNarrow, type: ke.LOADING }),
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
                        Fl,
                      ),
                      Q.a.createElement(pe.b, { color: 'gray700' }, Ul),
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
        Ml = Zt(vl),
        gl = Ml,
        Pl = a('AspN'),
        xl = function (e) {
          var t = Object(Je.u)(e)
          return t ? Object(Pl.k)(e, t)[0] : void 0
        },
        Gl = function (e) {
          var t = Object(Je.F)(e)
          return t ? Object(Pl.k)(e, t)[0] : void 0
        },
        Yl = Object(Ze.a)()
          .propsFromState(function () {
            return {
              backID: Je.u,
              backImage: xl,
              documentFormats: Je.A,
              frontID: Je.F,
              frontImage: Gl,
              idCountry: Je.G,
              idType: Je.I,
              isConfirmed: Je.x,
              uploadEntityId: Je.B,
              uploadErrors: Je.C,
              uploadFetchStatus: Je.D,
              uploadRequestError: Je.E,
            }
          })
          .propsFromActions(function () {
            return {
              addMedia: Pl.b,
              createLocalApiErrorHandler: Object($t.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_UPLOAD',
              ),
              processMultipleMedia: Pl.g,
              removeMedia: Pl.h,
              resetAuthenticationResult: Je.h,
              resetDocumentIdProcess: Je.i,
              resetIntakeUpload: Je.k,
              setBackID: Je.Q,
              setFrontID: Je.S,
              setNextFlow: Je.V,
              toggleCheckboxConfirmation: Je.X,
              verifyIdDocument: Je.ab,
            }
          })
          .withAnalytics(),
        Vl = a('LCtV'),
        Bl = a('T8pk'),
        Wl = a('VPdC'),
        wl = a('pKoL'),
        kl = a('rFBM'),
        Hl = ['application/pdf', 'image/bmp', 'image/jpeg', 'image/png', 'image/tiff'],
        Kl = (function (e) {
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
                    return Hl.includes(e.type)
                  })
                n && a([n])
              }),
              z()(W()(e), '_renderDragDropTarget', function () {
                var t = e.props,
                  a = t.accessibilityLabel,
                  n = t.onChange
                return Q.a.createElement(Wl.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !1,
                  accessibilityLabel: a,
                  customMimeTypes: Hl,
                  icon: Q.a.createElement(Bl.a, { style: jl.mediaPickerIcon }),
                  onChange: n,
                  size: 'small',
                  style: jl.mediaPicker,
                  withIcon: !0,
                })
              }),
              z()(W()(e), '_getResizeIfNeeded', function (e) {
                var t = e.externalMediaDetails && e.externalMediaDetails.height / e.externalMediaDetails.width
                return t && t > 1 ? 'width' : 'height'
              }),
              z()(W()(e), '_renderPreview', function (t) {
                var a = e.props.onRemove
                return Q.a.createElement(wl.a, {
                  borderRadius: Vl.a.MEDIUM,
                  mediaItem: t,
                  onRemove: a,
                  resizeIfNeeded: e._getResizeIfNeeded(t),
                  style: jl.mediaPreview,
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
                    { style: jl.dragDropContainer },
                    Q.a.createElement(pe.b, { weight: 'bold' }, a),
                    Q.a.createElement(kl.a, { onFilesAdded: this._handleDragDrop, style: jl.dragDropComponent }, n),
                  )
                },
              },
            ]),
            a
          )
        })(Q.a.Component),
        jl = de.a.create(function (e) {
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
        zl = Kl,
        ql = a('eyty'),
        Ql = 'verification-checkbox-label',
        $l = Z.a.ff1d68f7,
        Zl = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b8f15ec4' },
          Q.a.createElement(pe.b, { link: ea }, Z.a.h0ed9034),
        ),
        Jl = Z.a.bdada5a5,
        Xl = Z.a.edfed0f6,
        ec = Z.a.b08821f3,
        tc = Z.a.b09aade5,
        ac = Z.a.b40ed190,
        nc = Z.a.c6650b55,
        ic = Z.a.d171ed16,
        rc = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd65a41c2' },
          Q.a.createElement(pe.b, { link: 'https://twitter.com/privacy' }, Z.a.e9d83172),
        ),
        oc = Z.a.c1df579e,
        lc = (function (e) {
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
                n(t, { location: ql.d.Verification }).then(function (t) {
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
                n(t, { location: ql.d.Verification }).then(function (t) {
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
                    Q.a.createElement(Bt.a, {
                      accessibilityLabelledBy: Ql,
                      checked: t,
                      onChange: e._handleCheckboxChange,
                    }),
                  ),
                  Q.a.createElement(
                    _e.a,
                    { nativeID: Ql, style: Ne.checkboxText },
                    Q.a.createElement(pe.b, { color: 'gray700' }, ic),
                    Q.a.createElement(pe.b, { color: 'gray700', style: Ne.text }, rc),
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
                  r = i ? Xl : nc,
                  o = i ? Jl : ac
                return Q.a.createElement(
                  _e.a,
                  { accessibilityLabelledBy: ue.b, accessibilityRole: 'group', style: cc.gridContainer },
                  Q.a.createElement(zl, {
                    accessibilityLabel: r,
                    mediaItem: n,
                    onChange: e._handleAddFrontMedia,
                    onRemove: e._handleRemoveFrontID,
                    title: o,
                  }),
                  i &&
                    Q.a.createElement(zl, {
                      accessibilityLabel: tc,
                      mediaItem: a,
                      onChange: e._handleAddBackMedia,
                      onRemove: e._handleRemoveBackID,
                      title: ec,
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
                    Q.a.createElement(Dl, { error: e, onButtonClick: this._handleErrorButtonClick })
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
                      $l,
                    ),
                    Q.a.createElement(
                      _e.a,
                      { style: Ne.scrollableContainer },
                      Q.a.createElement(pe.b, { color: 'gray700' }, Zl),
                      this._renderUploadTargets(),
                      this._renderCheckbox(),
                    ),
                    Q.a.createElement(
                      Ae.a,
                      { disabled: r, onPress: this._handleSubmit, style: Ne.buttonFixed, type: 'brandFilled' },
                      oc,
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
        cc = de.a.create(function (e) {
          return { gridContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: e.spaces.space16 } }
        }),
        Ec = Yl(lc),
        sc = { hasId: !0, hasEmail: !0, hasWebsite: !0 },
        Ic =
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
        Tc = Z.a.i79902b4,
        uc = Z.a.fb2fcb5b,
        dc = Z.a.e43425fa,
        Nc = Z.a.cb7c2e2e,
        _c = Z.a.a411926a,
        pc = Z.a.g253cddf,
        Ac = Z.a.cf93bcbf,
        bc = Z.a.ca5fb0d4,
        Rc = Z.a.g40cd2c0,
        Cc = { title: Tc, description: uc },
        mc =
          ((u = {}),
          z()(u, te.d.IDENTITY_DOCUMENT, { label: dc, subtext: Nc }),
          z()(u, te.d.EMAIL, { label: _c, subtext: pc }),
          z()(u, te.d.WEBSITE, { label: Ac, subtext: bc }),
          u),
        Oc = P()(P()({}, Cc), {}, { items: P()({}, mc) }),
        fc = { title: Z.a.a7f1cff6, description: Z.a.ce40e7a5, websiteLabel: Ac },
        Sc = Z.a.dff1555f,
        Lc = Z.a.ed751204,
        hc = Z.a.fbc023bf,
        yc = { headline: Sc, subtext: Lc, actionLabel: hc, tertiaryActionLabel: Z.a.e785ce06 },
        Dc = Z.a.i8d58f3d,
        Fc = P()(P()({}, yc), {}, { tertiaryActionLabel: Dc }),
        Uc = Z.a.eb21eca9,
        vc = P()(P()({}, yc), {}, { tertiaryActionLabel: Uc }),
        Mc = Z.a.f848a69d,
        gc = Z.a.d59b5365,
        Pc = Z.a.bfb01c62,
        xc = { headline: Sc, subtext: Mc, actionLabel: hc, tertiaryActionLabel: Pc },
        Gc = P()(P()({}, xc), {}, { subtext: gc }),
        Yc = { headline: Sc, subtext: Mc, actionLabel: hc, tertiaryActionLabel: Pc },
        Vc = Z.a.ibd16281,
        Bc = Z.a.d5254e1b,
        Wc = Z.a.h45b00d7,
        wc = Z.a.bd9d7f96,
        kc = Z.a.g32c2900,
        Hc = Z.a.e6327f3b,
        Kc = Z.a.c7f75eab,
        jc = Z.a.eb08a392,
        zc = Z.a.je4c4696,
        qc = Z.a.dcc23261,
        Qc = Z.a.h96ba9b6,
        $c = Z.a.e4610048,
        Zc = Z.a.dedf41f1,
        Jc = Z.a.c78e091a,
        Xc = Z.a.g5657ec3,
        eE = Z.a.baf718c3,
        tE = Z.a.c65bbbc1,
        aE = Z.a.i31e3606,
        nE = Z.a.d85ef4a7,
        iE = Z.a.ddb19f72,
        rE = Z.a.a8d332f2,
        oE = Z.a.f7afbaeb,
        lE = Z.a.d4ab0055,
        cE = Z.a.d2a77621,
        EE = Z.a.e23b92c5,
        sE = Z.a.b03ae068,
        IE = Z.a.g0daba49,
        TE = Z.a.h85524c4,
        uE = Z.a.cdcd9cd5,
        dE = Z.a.gcee7aad,
        NE = Z.a.e6dc91b1,
        _E = Z.a.ga603b22,
        pE =
          ((y = { header: Tc }),
          z()(
            y,
            te.l.ACTIVISM,
            z()({}, te.b.ACTIVIST, {
              description: qc,
              items:
                ((d = {}),
                z()(d, te.d.IDENTITY_DOCUMENT, { label: dc, subtext: Nc }),
                z()(d, te.d.WEBSITE, { label: Ac, subtext: Qc, description: $c, inputLabel: Rc }),
                d),
            }),
          ),
          z()(
            y,
            te.l.INFLUENCER_OTHER,
            z()({}, te.j.INFLUENTIAL_INDIVIDUAL, {
              description: Zc,
              items:
                ((N = {}),
                z()(N, te.d.IDENTITY_DOCUMENT, { label: dc, subtext: Nc }),
                z()(N, te.d.WEBSITE, { label: Ac, subtext: Jc, description: Xc, inputLabel: Rc }),
                N),
            }),
          ),
          z()(
            y,
            te.l.COMPANY,
            ((A = {}),
            z()(A, te.e.COMPANY, {
              description: eE,
              items:
                ((_ = {}),
                z()(_, te.d.EMAIL, { label: _c, subtext: aE }),
                z()(_, te.d.WEBSITE, { label: Ac, subtext: wc, description: iE, inputLabel: Rc }),
                _),
            }),
            z()(A, te.e.EXECUTIVE, {
              description: tE,
              items:
                ((p = {}),
                z()(p, te.d.IDENTITY_DOCUMENT, { label: dc, subtext: Nc }),
                z()(p, te.d.EMAIL, { label: _c, subtext: aE }),
                z()(p, te.d.WEBSITE, { label: Ac, subtext: nE, description: rE, inputLabel: Rc }),
                p),
            }),
            A),
          ),
          z()(
            y,
            te.l.ENTERTAINMENT,
            ((b = {}),
            z()(b, te.f.ENTERTAINMENT_COMPANY, {
              description: Wc,
              items: z()({}, te.d.WEBSITE, { label: Ac, subtext: Kc, description: iE, inputLabel: Rc }),
            }),
            z()(b, te.f.PRODUCTION, {
              description: kc,
              items: z()({}, te.d.WEBSITE, { label: Ac, subtext: Kc, description: Hc, inputLabel: Rc }),
            }),
            b),
          ),
          z()(
            y,
            te.l.GOVERNMENT,
            z()({}, te.i.CANDIDATE, {
              description: jc,
              items:
                ((R = {}),
                z()(R, te.d.IDENTITY_DOCUMENT, { label: dc, subtext: Nc }),
                z()(R, te.d.WEBSITE, { label: Ac, subtext: wc, description: zc, inputLabel: Rc }),
                R),
            }),
          ),
          z()(
            y,
            te.l.NEWS,
            ((f = {}),
            z()(f, te.k.FREELANCER, {
              description: lE,
              items:
                ((C = {}),
                z()(C, te.d.IDENTITY_DOCUMENT, { label: dc, subtext: Nc }),
                z()(C, te.d.WEBSITE, { label: Ac, subtext: EE, description: Vc }),
                C),
            }),
            z()(f, te.k.JOURNALIST, {
              description: oE,
              items:
                ((m = {}),
                z()(m, te.d.IDENTITY_DOCUMENT, { label: dc, subtext: Nc }),
                z()(m, te.d.EMAIL, { label: _c, subtext: cE }),
                z()(m, te.d.WEBSITE, { label: Ac, subtext: EE, description: Vc }),
                m),
            }),
            z()(f, te.k.ORGANIZATION, {
              description: sE,
              items:
                ((O = {}),
                z()(O, te.d.EMAIL, { label: _c, subtext: cE }),
                z()(O, te.d.WEBSITE, { label: Ac, subtext: wc, description: Bc }),
                O),
            }),
            f),
          ),
          z()(
            y,
            te.l.SPORTS,
            ((h = {}),
            z()(h, te.q.SPORTS_INDIVIDUAL, {
              description: NE,
              items:
                ((S = {}),
                z()(S, te.d.IDENTITY_DOCUMENT, { label: dc, subtext: Nc }),
                z()(S, te.d.WEBSITE, { label: Ac, subtext: wc, description: _E }),
                S),
            }),
            z()(h, te.q.SPORTS_ENTITY, {
              description: uE,
              items: z()({}, te.d.WEBSITE, { label: Ac, subtext: wc, description: dE }),
            }),
            z()(h, te.q.GAMING_INDIVIDUAL, {
              description: IE,
              items:
                ((L = {}),
                z()(L, te.d.IDENTITY_DOCUMENT, { label: dc, subtext: Nc }),
                z()(L, te.d.WEBSITE, { label: Ac, subtext: wc, description: TE }),
                L),
            }),
            h),
          ),
          y),
        AE = function (e, t) {
          return e && t ? pE[e][t] : Oc
        },
        bE = function (e, t, a) {
          var n = AE(t, a).items,
            i = sc
          t && a ? (i = Ic[t].subtype[a]) : t && (i = Ic[t])
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
        RE = Object.freeze(
          ((D = {}),
          z()(D, te.h.AUTHENTICITY_TYPE_SELECT, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              n = e.userEmail
            return {
              type: 'radio',
              props: {
                description: AE(t, a).description,
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
                items: bE(n, t, a),
                title: Oc.title,
              },
            }
          }),
          z()(D, te.h.SITE_VERIFICATION, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              n = AE(t, a).items[te.d.WEBSITE]
            return {
              type: 'input',
              props: {
                title: fc.title,
                description: n.description || fc.description,
                items: [{ dataKey: te.c.WEBSITE, label: n.inputLabel || fc.websiteLabel, required: !0 }],
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
            var u = yc,
              d = function () {
                return s(te.h.AUTHENTICITY_TYPE_SELECT)
              }
            switch (c) {
              case te.n.CONTENT_CREATOR:
                ;(u = Gc),
                  (d = function () {
                    return I()
                  })
                break
              case te.n.ENTERTAINMENT_INDIVIDUAL:
                ;(u = xc),
                  (d = function () {
                    return I()
                  })
                break
              case te.n.OFFICE:
                ;(u = vc),
                  (d = function () {
                    E(te.h.AUTHENTICITY_TYPE_SELECT, te.d.EMAIL), s(te.h.EMAIL_VERIFICATION)
                  })
                break
              case te.n.OFFICIAL:
                ;(u = Fc),
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
          z()(D, te.h.WEBSITE_REFERENCE_CONFIRM_PROCEED, { type: 'info', props: P()({}, Yc) }),
          D),
        ),
        CE =
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
                  description: $a.description,
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
                    { label: za[te.l.GOVERNMENT], value: te.l.GOVERNMENT },
                    { label: za[te.l.COMPANY], value: te.l.COMPANY },
                    { label: za[te.l.NEWS], value: te.l.NEWS },
                    { label: za[te.l.ENTERTAINMENT], value: te.l.ENTERTAINMENT },
                    { label: za[te.l.SPORTS], value: te.l.SPORTS },
                    { label: za[te.l.INFLUENCER_OTHER], value: te.l.INFLUENCER_OTHER },
                    { label: za[te.l.ACTIVISM], value: te.l.ACTIVISM },
                  ],
                  title: $a.title,
                },
              }
            }),
            z()(F, te.h.ACTIVIST_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: on.title,
                description: on.description,
                items: [
                  P()(P()({}, on.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, on.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, on.items[2]), {}, { value: te.m.NEWS }),
                  P()(P()({}, on.items[3]), {}, { value: te.m.LEADERSHIP }),
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
                title: cn.title,
                description: cn.description,
                items: [{ dataKey: te.m.GOOGLE, label: cn.label, required: !0 }],
              },
            }),
            z()(F, te.h.ACTIVIST_LEADERSHIP, {
              type: 'input',
              props: {
                title: un.title,
                description: un.description,
                items: [{ dataKey: te.m.LEADERSHIP, label: un.label, required: !0 }],
                confirmationText: un.confirmationText,
              },
            }),
            z()(F, te.h.ACTIVIST_NEWS, {
              type: 'input',
              props: {
                title: In.title,
                description: In.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: In.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: In.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.ACTIVIST_WIKIPEDIA, {
              type: 'input',
              props: {
                title: sn.title,
                description: sn.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: sn.label, required: !0 }],
              },
            }),
            z()(F, te.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE, {
              type: 'info',
              props: {
                headline: on.notEligibleTitle,
                subtext: on.notEligibleDescription,
                actionLabel: on.notEligibleButton,
              },
            }),
            z()(F, te.h.COMPANY_SUBCATEGORY, {
              type: 'radio',
              props: P()(
                P()({}, Fn),
                {},
                {
                  items: [
                    P()(P()({}, Fn.items[0]), {}, { value: te.e.COMPANY }),
                    P()(P()({}, Fn.items[1]), {}, { value: te.e.EXECUTIVE }),
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
                  P()(P()({}, vn.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, vn.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, vn.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, vn.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, vn),
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
                  title: gn.title,
                  description: gn.description,
                  items: [{ dataKey: te.m.GOOGLE, label: gn.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.COMPANY_WIKIPEDIA, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: xn.title,
                  description: xn.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: xn.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.COMPANY_STOCK_EXCHANGE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Yn.title,
                  description: Yn.description,
                  items: [{ dataKey: te.m.STOCK, label: Yn.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.COMPANY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: Bn.title,
                description: Bn.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Bn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Bn.addFieldText,
              },
            }),
            z()(F, te.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: P()({}, kn) }),
            z()(F, te.h.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: P()(
                P()({}, Kn),
                {},
                {
                  items: [
                    P()(P()({}, Kn.items[0]), {}, { value: te.m.NEWS }),
                    P()(P()({}, Kn.items[1]), {}, { value: te.m.LEADERSHIP }),
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
                title: zn.title,
                description: zn.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: zn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: zn.addFieldText,
              },
            }),
            z()(F, te.h.COMPANY_INDIVIDUAL_LEADERSHIP, {
              type: 'input',
              props: {
                title: Qn.title,
                description: Qn.description,
                items: [{ dataKey: te.m.LEADERSHIP, label: Qn.label, required: !0 }],
                confirmationText: Qn.confirmationText,
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
                  title: _i.title,
                  description: _i.description,
                  items: [{ dataKey: te.m.GOOGLE, label: _i.label, required: !0 }],
                  nextFormStep: a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: Ai.title,
                description: Ai.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Ai.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Ai.addFieldText,
              },
            }),
            z()(F, te.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n,
                r = [
                  P()(P()({}, di.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, di.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, di.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, di.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, di),
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
                  title: Ri.title,
                  description: Ri.description,
                  items: [{ dataKey: te.m.STOCK, label: Ri.label, required: !0 }],
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
                  title: mi.title,
                  description: mi.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: mi.label, required: !0 }],
                  nextFormStep: a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
              type: 'input',
              props: {
                title: Bi.title,
                description: Bi.description,
                items: [{ dataKey: te.m.IMDB, label: Bi.label, required: !0 }],
              },
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
              type: 'input',
              props: {
                title: ki.title,
                description: ki.description,
                items: [{ dataKey: te.m.MAIN, label: ki.label, required: !0 }],
              },
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
              type: 'input',
              props: {
                title: Wi.title,
                description: Wi.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Bn.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Wi.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Gi.title,
                description: Gi.description,
                items: [
                  { helpText: Gi.items[0].description, label: Gi.items[0].label, value: te.m.IMDB },
                  { helpText: Gi.items[1].description, label: Gi.items[1].label, value: te.m.NEWS },
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
                  title: ni.title,
                  description: ni.description,
                  items: [{ dataKey: te.m.GOOGLE, label: ni.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: ri.title,
                description: ri.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: ri.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: ri.addFieldText,
              },
            }),
            z()(F, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = e.mentionsEligible,
                i = void 0 !== n && n,
                r = [
                  P()(P()({}, li.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, li.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, li.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, li.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, li),
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
                  title: Ei.title,
                  description: Ei.description,
                  items: [{ dataKey: te.m.STOCK, label: Ei.label, required: !0 }],
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
                  title: Ii.title,
                  description: Ii.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: Ii.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.ENTERTAINMENT_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Ti.title,
                description: Ti.description,
                items: [
                  P()(P()({}, Ti.items[0]), {}, { value: te.f.ENTERTAINMENT_COMPANY }),
                  P()(P()({}, Ti.items[1]), {}, { value: te.f.ENTERTAINMENT_INDIVIDUAL }),
                  P()(P()({}, Ti.items[2]), {}, { value: te.f.PRODUCTION }),
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
                headline: ir.candidateTitle,
                subtext: ir.candidateDescription,
                actionLabel: ir.confirmButtonLabel,
                tertiaryActionLabel: ir.declineButtonLabel,
              },
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Nr.title,
                description: Nr.description,
                items: Dt()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: Nr.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Nr.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: ur.candidateTitle,
                subtext: ur.candidateDescription,
                actionLabel: ur.confirmButtonLabel,
                tertiaryActionLabel: ur.declineButtonLabel,
                tertiaryActionLink: Ee,
              },
            }),
            z()(F, te.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: Or.title,
                description: Or.description,
                items: [{ dataKey: te.m.PUBLIC, label: Or.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: pr.title,
                description: pr.description,
                items: Dt()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: pr.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: pr.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: ur.officeTitle,
                subtext: ur.officeDescription,
                actionLabel: ur.confirmButtonLabel,
                tertiaryActionLabel: ur.declineButtonLabel,
                tertiaryActionLink: Ee,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: hr.title,
                description: hr.description,
                items: [{ dataKey: te.m.PUBLIC, label: hr.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
              type: 'info',
              props: {
                headline: ir.officialTitle,
                subtext: ir.officialDescription,
                actionLabel: ir.confirmButtonLabel,
                tertiaryActionLabel: ir.declineButtonLabel,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: br.title,
                description: br.description,
                items: Dt()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: br.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: br.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: ur.officialTitle,
                subtext: ur.officialDescription,
                actionLabel: ur.confirmButtonLabel,
                tertiaryActionLabel: ur.declineButtonLabel,
                tertiaryActionLink: Ee,
              },
            }),
            z()(F, te.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: Dr.title,
                description: Dr.description,
                items: [{ dataKey: te.m.PUBLIC, label: Dr.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.GOVERNMENT_SUBCATEGORY, {
              type: 'radio',
              props: {
                title: Zi.title,
                description: Zi.description,
                items: [
                  P()(P()({}, Zi.items[0]), {}, { value: te.i.OFFICIAL }),
                  P()(P()({}, Zi.items[1]), {}, { value: te.i.CANDIDATE }),
                  P()(P()({}, Zi.items[2]), {}, { value: te.i.OFFICE }),
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
                title: Fi.title,
                description: Fi.description,
                items: [{ dataKey: te.m.GOOGLE, label: Fi.label, required: !0 }],
              },
            }),
            z()(F, te.h.CONTENT_CREATOR_NEWS, {
              type: 'input',
              props: {
                title: Mi.title,
                description: Mi.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Mi.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Mi.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.CONTENT_CREATOR_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: hi.title,
                description: hi.description,
                items: [
                  P()(P()({}, hi.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, hi.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, hi.items[2]), {}, { value: te.m.NEWS }),
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
                title: vi.title,
                description: vi.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: vi.label, required: !0 }],
              },
            }),
            z()(F, te.h.CREATOR_PROFILE, {
              type: 'input',
              props: {
                title: yi.title,
                description: yi.description,
                items: [{ dataKey: te.m.MAIN, label: yi.items[0].label, required: !0 }],
              },
            }),
            z()(F, te.h.INFLUENCER_GOOGLE_TRENDS, {
              type: 'input',
              props: {
                title: mn.title,
                description: mn.description,
                items: [{ dataKey: te.m.GOOGLE, label: mn.label, required: !0 }],
              },
            }),
            z()(F, te.h.INFLUENCER_NEWS, {
              type: 'input',
              props: {
                title: Sn.title,
                description: Sn.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Sn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Sn.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.INFLUENCER_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Rn.title,
                description: Rn.description,
                items: [
                  P()(P()({}, Rn.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, Rn.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, Rn.items[2]), {}, { value: te.m.NEWS }),
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
                headline: Rn.notEligibleTitle,
                subtext: Rn.notEligibleDescription,
                actionLabel: Rn.notEligibleButton,
              },
            }),
            z()(F, te.h.INFLUENCER_SUBCATEGORY, {
              type: 'radio',
              props: P()(
                P()({}, _n),
                {},
                {
                  items: [
                    P()(P()({}, _n.items[0]), {}, { value: te.j.CONTENT_CREATOR }),
                    P()(P()({}, _n.items[1]), {}, { value: te.j.INFLUENTIAL_INDIVIDUAL }),
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
                title: fn.title,
                description: fn.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: fn.label, required: !0 }],
              },
            }),
            z()(F, te.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: lo.title,
                description: lo.description,
                items: Dt()(
                  Array(3).fill({
                    dataKey: te.m.ARTICLES,
                    labelGenerator: lo.articleNumerationLabelGenerator,
                    required: !0,
                  }),
                ),
                addFieldText: lo.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: lo.title,
                description: lo.description,
                items: Dt()(
                  Array(3).fill({
                    dataKey: te.m.ARTICLES,
                    labelGenerator: lo.articleNumerationLabelGenerator,
                    required: !0,
                  }),
                ),
                addFieldText: lo.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
              type: 'input',
              props: {
                title: io.title,
                description: io.description,
                items: [{ dataKey: te.m.AUTHOR, label: io.websiteLabel, required: !0 }],
                confirmationText: io.confirmationText,
              },
            }),
            z()(F, te.h.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, {
              type: 'info',
              props: {
                headline: To.title,
                subtext: To.description,
                actionLabel: To.actionLabel,
                tertiaryActionLabel: To.tertiaryActionLabel,
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
              props: P()(P()({}, Qr), {}, { tertiaryActionLink: Ee }),
            }),
            z()(F, te.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, { type: 'screenName', props: P()({}, Hr) }),
            z()(F, te.h.NEWS_JOURNALIST_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: to.title,
                description: to.description,
                items: [
                  { helpText: to.items[0].description, label: to.items[0].label, value: te.m.AUTHOR },
                  { helpText: to.items[1].description, label: to.items[1].label, value: te.m.ARTICLES },
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
                headline: Wr.title,
                subtext: Wr.description,
                actionLabel: Wr.confirmButtonLabel,
                tertiaryActionLabel: Wr.declineButtonLabel,
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
                  title: No.title,
                  description: No.description,
                  items: [
                    { helpText: No.items[0].description, label: No.items[0].label, value: te.m.GOOGLE },
                    { helpText: No.items[1].description, label: No.items[1].label, value: te.m.WIKIPEDIA },
                    { helpText: No.items[2].description, label: No.items[2].label, value: te.m.STOCK },
                  ].concat(
                    Dt()(
                      a || i
                        ? [{ helpText: No.items[3].description, label: No.items[3].label, value: te.m.ARTICLES }]
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
                  title: po.title,
                  description: po.description,
                  items: [{ dataKey: te.m.GOOGLE, label: po.label, required: !0 }],
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
                  title: bo.title,
                  description: bo.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: bo.label, required: !0 }],
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
                  title: Co.title,
                  description: Co.description,
                  items: [{ dataKey: te.m.STOCK, label: Co.label, required: !0 }],
                  nextFormStep:
                    a || i ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
                },
              }
            }),
            z()(F, te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Oo.title,
                description: Oo.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.ARTICLES, labelGenerator: Oo.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Oo.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: sl.title,
                description: sl.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: sl.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: sl.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.GAMING_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: {
                title: il.title,
                description: il.description,
                items: [
                  { helpText: il.items[0].description, label: il.items[0].label, value: te.m.NEWS },
                  { helpText: il.items[1].description, label: il.items[1].label, value: te.m.TEAM },
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
                title: El.title,
                description: El.description,
                items: [{ dataKey: te.m.TEAM, label: El.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: ll.title,
                description: ll.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: ll.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: ll.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
              type: 'input',
              props: {
                title: ol.title,
                description: ol.description,
                items: [{ dataKey: te.m.TEAM, label: ol.websiteLabel, required: !0 }],
              },
            }),
            z()(F, te.h.SPORTS_ENTITY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                n = [
                  P()(P()({}, Bo.items[0]), {}, { value: te.m.GOOGLE }),
                  P()(P()({}, Bo.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  P()(P()({}, Bo.items[2]), {}, { value: te.m.STOCK }),
                  P()(P()({}, Bo.items[3]), {}, { value: te.m.TEAM }),
                  P()(P()({}, Bo.items[4]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: P()(
                  P()({}, Bo),
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
                  title: wo.title,
                  description: wo.description,
                  items: [{ dataKey: te.m.GOOGLE, label: wo.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_WIKIPEDIA, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Ho.title,
                  description: Ho.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: Ho.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_STOCK_REFERENCE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: jo.title,
                  description: jo.description,
                  items: [{ dataKey: te.m.STOCK, label: jo.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_WEBSITE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: qo.title,
                  description: qo.description,
                  items: [{ dataKey: te.m.TEAM, label: qo.label, required: !0 }],
                  nextFormStep: t ? te.h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(F, te.h.SPORTS_ENTITY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: $o.title,
                description: $o.description,
                items: Dt()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: $o.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: $o.addFieldText,
                maxItems: 10,
              },
            }),
            z()(F, te.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: P()({}, go) }),
            z()(F, te.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: P()({}, xo) }),
            z()(F, te.h.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: {
                title: el.title,
                description: el.description,
                items: [
                  { helpText: el.items[0].description, label: el.items[0].label, value: te.m.NEWS },
                  { helpText: el.items[1].description, label: el.items[1].label, value: te.m.TEAM },
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
            z()(F, te.h.GAMING_INDIVIDUAL_INELIGIBLE, { type: 'info', props: P()({}, Go) }),
            z()(F, te.h.SPORTS_SUBCATEGORY, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t
              return {
                type: 'radio',
                props: P()(
                  P()({}, Fo),
                  {},
                  {
                    items: [
                      P()(P()({}, Fo.items[0]), {}, { value: te.q.SPORTS_INDIVIDUAL }),
                      P()(P()({}, Fo.items[1]), {}, { value: te.q.SPORTS_ENTITY }),
                      P()(P()({}, Fo.items[2]), {}, { value: te.q.GAMING_INDIVIDUAL }),
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
        mE = Object.freeze(
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
        OE = Object.freeze(P()(P()(P()({}, RE), CE), mE)),
        fE = function (e) {
          var t = Object(Je.y)(e)
          return null != t && t.radioData ? t.radioData : ''
        },
        SE = Object(Ze.a)()
          .propsFromState(function () {
            return { currentStep: Je.z, formHistory: fE }
          })
          .propsFromActions(function () {
            return { setFormStepData: Je.R, setNextFlow: Je.V, updateFormHistory: Je.Y }
          })
          .withAnalytics(),
        LE = a('fyvP'),
        hE = Z.a.c1df579e,
        yE = de.a.create(function (e) {
          return {
            radioContainer: {
              paddingRight: 'calc('.concat(e.spaces.space12, ' + ').concat(e.borderWidths.medium, ')'),
            },
          }
        }),
        DE = SE(function (e) {
          var t = e.analytics,
            a = e.buttonText,
            n = void 0 === a ? hE : a,
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
                { style: [Ne.contentContainer, yE.radioContainer] },
                Q.a.createElement(LE.a, {
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
                              { notability_method: [Pt(p)] },
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
        FE = a('5FtR'),
        UE = Object(Ze.a)().propsFromActions(function () {
          return { setNextFlow: Je.V }
        }),
        vE = a('EweD'),
        ME = 'verification-checkbox-label',
        gE = Z.a.c1df579e,
        PE = Z.a.a6278dcb,
        xE = function (e) {
          return !e.match(/\W/g)
        },
        GE = de.a.create(function (e) {
          return { input: { paddingHorizontal: 0 }, checkboxContainer: { paddingTop: 0 } }
        }),
        YE = UE(function (e) {
          var t = e.buttonText,
            a = void 0 === t ? gE : t,
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
                var e = !!s && xE(s)
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
                  Q.a.createElement(Vt.a, {
                    Icon: vE.a,
                    invalid: !xE(s),
                    label: PE,
                    name: '',
                    onChange: function (e) {
                      return I(e.target.value)
                    },
                    style: GE.input,
                    value: s,
                  }),
                ),
                n &&
                  Q.a.createElement(
                    _e.a,
                    { style: [Ne.contentContainer, Ne.checkboxContainer, GE.checkboxContainer] },
                    Q.a.createElement(
                      _e.a,
                      { style: Ne.checkbox },
                      Q.a.createElement(Bt.a, {
                        accessibilityLabelledBy: ME,
                        checked: d,
                        onChange: function () {
                          return N(!d)
                        },
                      }),
                    ),
                    Q.a.createElement(
                      _e.a,
                      { nativeID: ME, style: Ne.checkboxText },
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
        VE = a('7JQg'),
        BE = (a('hBvt'), a('v6aA')),
        WE = Z.a.ec6801cb,
        wE = Z.a.j24c37b2,
        kE = function (e) {
          var t,
            a = e.daysForDecision,
            n = void 0 === a ? 14 : a,
            i = e.isNarrow,
            r = e.link,
            o = e.onSurveyClick,
            l = e.surveyUrl,
            c = Q.a.useContext(BE.a).featureSwitches.isTrue('identity_verification_notable_demo_survey')
          return Q.a.createElement(
            _e.a,
            { style: Ne.largeBannerContainer },
            Q.a.createElement(je, { isNarrow: i, type: ke.SENT }),
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
                WE,
              ),
              Q.a.createElement(
                pe.b,
                { color: 'gray700' },
                ((t = n),
                Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'a1c39f5b', days: Yt.a.getFormattedCount(t) })),
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
                wE,
              ),
            ),
          )
        },
        HE = Z.a.b772cd65,
        KE = Z.a.j3da4de9,
        jE = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'b7be91be', date: t(a) })
        },
        zE = Z.a.j94e995e,
        qE = Z.a.da458d6c,
        QE = Z.a.j4ed9f0e,
        $E = Z.a.b1ade78f,
        ZE = Z.a.b1ade78f,
        JE = Z.a.j3da4de9,
        XE = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'jcb00a94', date: t(a) })
        },
        es = Z.a.aab67626,
        ts = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return Q.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'j92ea4b8', date: t(a) })
        },
        as = Z.a.d3c1e25e,
        ns = Q.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jcd067dd' },
          Q.a.createElement(pe.b, { link: 'https://help.twitter.com/rules-and-policies/twitter-rules' }, Z.a.g0bfb17a),
        ),
        is = function (e) {
          var t,
            a = e.applicationSubmissionTimeInMs,
            n = e.decisionMadeTimeInMs,
            i = e.isNarrow,
            r = e.link,
            o = e.status,
            l = ((t = {}),
            z()(t, te.a.DISABLED, { title: Tl, content: ul, button: Il }),
            z()(t, te.a.INTAKE_PROGRESS, { title: null, content: null, button: null }),
            z()(t, te.a.LOCKED, { title: KE, content: n ? jE(n) : qE, button: Il }),
            z()(t, te.a.NEW_ACCOUNT, { title: KE, content: ZE, button: Il }),
            z()(t, te.a.NOT_ELIGIBLE, { title: KE, content: $E, button: Il }),
            z()(t, te.a.NOT_STARTED, { title: null, content: null, button: null }),
            z()(t, te.a.VERIFICATION_DENIED, { title: JE, content: n ? XE(n) : zE, button: HE }),
            z()(t, te.a.VERIFICATION_PENDING, { title: es, content: a ? ts(a) : QE, button: HE }),
            z()(t, te.a.VERIFIED, { title: as, content: ns, button: HE }),
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
        rs = a('zh9S'),
        os = a('vEo5'),
        ls = { page: 'settings', section: 'account_verification' },
        cs = Object(Ze.a)()
          .propsFromState(function () {
            return {
              access: Je.m,
              accessFetchStatus: Je.n,
              accountEligibility: Je.o,
              accountViolations: Je.p,
              authenticityType: Je.t,
              currentStep: Je.z,
              documentFormats: Je.A,
              idCountry: Je.G,
              idType: Je.I,
              initialIntakeFetchStatus: Je.K,
              surveyUrl: Je.O,
              userEmail: os.selectFirstEmail,
              verifyAccountFetchStatus: Je.P,
              notabilityCategory: Je.L,
              notabilityData: Je.M,
              notabilitySubcategory: Je.N,
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
              createLocalApiErrorHandler: Object($t.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION',
              ),
              fetchAccessIfNeeded: Je.b,
              fetchAccountEligibility: Je.c,
              fetchAccountViolations: Je.d,
              fetchDevices: os.fetchDevicesIfNeeded,
              fetchDocumentFormats: Je.g,
              googleAnalyticsPageView: rs.a,
              resetFlow: Je.j,
              resetSubmitVerification: Je.l,
              setFormStepData: Je.R,
              setIdCountry: Je.T,
              setIdType: Je.U,
              setNextFlow: Je.V,
              setPreviousFlow: Je.W,
              verifyAccount: Je.Z,
            }
          })
          .withAnalytics(ls),
        Es = 'info',
        ss = 'input',
        Is = 'pivot',
        Ts = 'radio',
        us = 'screenName',
        ds = a('oQhu'),
        Ns = a('0zXz'),
        _s = a('cHvH'),
        ps =
          (a('ulNE'),
          a('urw/'),
          a('1IsZ'),
          Object(Ze.a)()
            .propsFromState(function () {
              return {
                authenticityType: Je.t,
                authenticityData: Je.s,
                idCountryName: Je.H,
                idTypeName: Je.J,
                notabilityCategory: Je.L,
                notabilitySubcategory: Je.N,
                notabilityData: Je.M,
              }
            })
            .propsFromActions(function () {
              return { verifyAccount: Je.Z }
            })),
        As = a('3A2y'),
        bs = Z.a.a91bb144,
        Rs = Z.a.affce770,
        Cs = Z.a.i0864917,
        ms = Z.a.c7942073,
        Os = Z.a.b8121da9,
        fs = Z.a.d247ca7f,
        Ss = Z.a.b51afbb2,
        Ls = Z.a.cc87b01c,
        hs = function (e) {
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
              Ls,
            ),
            Q.a.createElement(
              _e.a,
              { style: Ne.scrollableContainer },
              Q.a.createElement(pe.b, { color: 'gray700' }, fs),
              u(Cs),
              E && Q.a.createElement(pe.b, { style: Ne.subtext }, Cl[E]),
              I &&
                ((i = Ol[I]), Q.a.createElement(_e.a, null, u(ms), Q.a.createElement(pe.b, { style: Ne.subtext }, i))),
              s &&
                (function (e) {
                  var t = Object(As.a)(e, 'newsType'),
                    a = Object.values(t).flat()
                  return Q.a.createElement(
                    _e.a,
                    null,
                    u(Os),
                    a.map(function (e, t) {
                      return Q.a.createElement(pe.b, { key: t, style: Ne.subtext }, e)
                    }),
                  )
                })(s),
              u(Ss),
              r &&
                ((t = r),
                (a = {}),
                z()(a, te.d.IDENTITY_DOCUMENT, Z.a.e43425fa),
                z()(a, te.d.EMAIL, Z.a.a411926a),
                z()(a, te.d.WEBSITE, Z.a.e1c78795),
                (n = a[t]),
                Q.a.createElement(pe.b, { style: Ne.subtext }, n)),
              Q.a.createElement(pe.b, { color: 'gray700', style: Ne.contentContainer }, Rs),
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
              bs,
            ),
          )
        },
        ys = ps(hs),
        Ds = 'INITIAL_FETCH_STATUS_RENDERER',
        Fs = 'SUBMIT_FETCH_STATUS_RENDERER',
        Us = Z.a.g61ed8a4,
        vs = function (e) {
          return null
        },
        Ms = (function (e) {
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
                Object(ds.a)(function (e) {
                  return xt(e)
                }),
              ),
              z()(
                W()(e),
                '_getMemoizedVerificationScribeData',
                Object(ds.a)(function (e) {
                  var t = e.accessStatus,
                    a = e.authenticityType,
                    n = e.currentStep,
                    i = e.followersEligible,
                    r = e.idType,
                    o = e.mentionsEligible,
                    l = e.notabilityCategory,
                    c = e.notabilityData,
                    E = e.notabilitySubcategory
                  return Gt(t, a, n, i, r, o, l, c, E)
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
                  z()(t, $e.name, {
                    ComponentToRender: $e,
                    componentProps: {
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), u()
                      },
                    },
                    genericModalProps: { renderHeader: vs },
                  }),
                  z()(t, hs.name, {
                    ComponentToRender: ys,
                    componentProps: {
                      createLocalApiErrorHandler: i,
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), u()
                      },
                    },
                    genericModalProps: { onBackClick: d },
                  }),
                  z()(t, is.name, {
                    ComponentToRender: is,
                    componentProps: { decisionMadeTimeInMs: o, link: e._accountSettingsLink, status: n },
                    genericModalProps: { backButtonType: 'close', hideBackButton: ee.b.isTwitterApp() },
                  }),
                  z()(t, Rt.name, {
                    ComponentToRender: Rt,
                    componentProps: {
                      documentFormats: l,
                      onCountryClick: function (e, t) {
                        I(e, t), d()
                      },
                    },
                    genericModalProps: { onBackClick: d },
                  }),
                  z()(t, Ct.name, {
                    ComponentToRender: Ct,
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
                    ComponentToRender: gl,
                    componentProps: {},
                    genericModalProps: { hideBackButton: !0, renderHeader: vs },
                  }),
                  z()(t, te.h.INTAKE_TYPE_SELECT, {
                    ComponentToRender: _t,
                    componentProps: {},
                    genericModalProps: { onBackClick: d },
                  }),
                  z()(t, te.h.INTAKE_UPLOAD, {
                    ComponentToRender: Ec,
                    componentProps: {
                      handleOnClick: function () {
                        return e._scribeAction('click', 'CTA')
                      },
                    },
                    genericModalProps: { onBackClick: d },
                  }),
                  z()(t, kE.name, {
                    ComponentToRender: kE,
                    componentProps: {
                      link: e._accountSettingsLink,
                      onSurveyClick: function () {
                        return e._scribeAction('click', 'survey_link')
                      },
                      surveyUrl: N,
                    },
                    genericModalProps: { renderHeader: vs },
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
                  z()(t, Fs, {
                    ComponentToRender: Ue.a,
                    componentProps: {
                      fetchStatus: A,
                      onRequestRetry: function () {
                        p().catch(i())
                      },
                      render: Ns.a,
                      retryMessage: Us,
                    },
                    genericModalProps: { hideBackButton: A === Fe.a.LOADING, onBackClick: s },
                  }),
                  z()(t, Ds, {
                    ComponentToRender: Ue.a,
                    componentProps: {
                      fetchStatus: E,
                      onRequestRetry: e._initialFetchRetry,
                      render: Ns.a,
                      retryMessage: Us,
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
                if (t && OE[t]) {
                  var r = OE[t],
                    o = 'function' == typeof r ? r(P()({}, e.props)) : r
                  return Q.a.createElement(
                    ve.b,
                    { backButtonType: 'back', containerStyle: Ne.root, hideBackButton: !1, history: n, onBackClick: i },
                    e._renderLayoutComponent(o, t),
                  )
                }
                return Q.a.createElement(FE.a, { to: '/settings/account' })
              }),
              z()(W()(e), '_renderLayoutComponent', function (t, a) {
                var n = { isNarrow: e._isNarrow, key: ''.concat(a, '-screen') }
                switch (t.type) {
                  case Es:
                    return Q.a.createElement(ht, M()({}, t.props, { key: ''.concat(a, '-screen') }))
                  case ss:
                    return Q.a.createElement(Qt, M()({}, t.props, n))
                  case Is:
                    return Q.a.createElement(rt, M()({}, t.props, n))
                  case Ts:
                    return Q.a.createElement(DE, M()({}, t.props, n))
                  case us:
                    return Q.a.createElement(YE, M()({}, t.props, n))
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
                if (i !== Fe.a.LOADED) return e._wrapInGenericModalScreen(Ds)
                if (r === Fe.a.LOADING || r === Fe.a.FAILED) return e._wrapInGenericModalScreen(Fs)
                if (e._hasBadgeViolations(a)) return e._wrapInGenericModalScreen(se.name)
                switch (n) {
                  case te.h.LANDING_PAGE:
                    return e._wrapInGenericModalScreen(e._shouldStartFlow ? $e.name : is.name)
                  case te.h.INTAKE_TYPE_SELECT:
                    return e._wrapInGenericModalScreen(te.h.INTAKE_TYPE_SELECT)
                  case te.h.ID_COUNTRY_SELECT:
                    return e._wrapInGenericModalScreen(Rt.name)
                  case te.h.ID_TYPE_SELECT:
                    return e._wrapInGenericModalScreen(Ct.name)
                  case te.h.INTAKE_UPLOAD:
                    return e._wrapInGenericModalScreen(te.h.INTAKE_UPLOAD)
                  case te.h.INTAKE_LOADING:
                    return e._wrapInGenericModalScreen(te.h.INTAKE_LOADING)
                  case te.h.EMAIL_VERIFICATION:
                    return e._wrapInGenericModalScreen(De.name)
                  case te.h.REVIEW_SUBMIT:
                    return e._wrapInGenericModalScreen(hs.name)
                  case te.h.THANK_YOU:
                    return e._wrapInGenericModalScreen(kE.name)
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
                    i(ls)
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
                    ? Q.a.createElement(_s.a, null, function (t) {
                        var I = t.windowWidth < de.a.theme.breakpoints.small
                        return (
                          I !== e._isNarrow && (e._isNarrow = I),
                          Q.a.createElement(
                            VE.c,
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
      z()(Ms, 'contextType', BE.a)
      var gs = cs(Ms)
      t.default = gs
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
