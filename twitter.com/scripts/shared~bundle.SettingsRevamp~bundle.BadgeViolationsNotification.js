;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    QJRq: function (E, e, I) {
      'use strict'
      I.d(e, 's', function () {
        return r
      }),
        I.d(e, 'r', function () {
          return o
        }),
        I.d(e, 'a', function () {
          return R
        }),
        I.d(e, 'd', function () {
          return i
        }),
        I.d(e, 'c', function () {
          return a
        }),
        I.d(e, 'o', function () {
          return A
        }),
        I.d(e, 'l', function () {
          return c
        }),
        I.d(e, 'm', function () {
          return O
        }),
        I.d(e, 'b', function () {
          return C
        }),
        I.d(e, 'e', function () {
          return u
        }),
        I.d(e, 'f', function () {
          return S
        }),
        I.d(e, 'i', function () {
          return L
        }),
        I.d(e, 'j', function () {
          return l
        }),
        I.d(e, 'k', function () {
          return U
        }),
        I.d(e, 'q', function () {
          return D
        }),
        I.d(e, 'n', function () {
          return s
        }),
        I.d(e, 'p', function () {
          return f
        }),
        I.d(e, 'h', function () {
          return F
        }),
        I.d(e, 'g', function () {
          return d
        })
      I('+KXO'), I('1t7P'), I('LW0h'), I('daRM'), I('jwue'), I('+oxZ'), I('FtHn')
      var t,
        T = I('KEM+'),
        n = I.n(T)
      I('yH/f')
      function N(E, e) {
        var I = Object.keys(E)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(E)
          e &&
            (t = t.filter(function (e) {
              return Object.getOwnPropertyDescriptor(E, e).enumerable
            })),
            I.push.apply(I, t)
        }
        return I
      }
      function _(E) {
        for (var e = 1; e < arguments.length; e++) {
          var I = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? N(Object(I), !0).forEach(function (e) {
                n()(E, e, I[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(I))
            : N(Object(I)).forEach(function (e) {
                Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(I, e))
              })
        }
        return E
      }
      var r = Object.freeze({ IN_COMPLIANCE: 'in_compliance', OUT_OF_COMPLIANCE: 'out_of_compliance' }),
        o = Object.freeze({ PROFILE_COMPLETION: 'profile_completion', ACCOUNT_SECURITY: 'account_security' }),
        R = Object.freeze({
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
        i = Object.freeze({ IDENTITY_DOCUMENT: 'identity_document', EMAIL: 'email', WEBSITE: 'website' }),
        a = { WEBSITE: 'siteUrl' },
        A = Object.freeze({
          CONCLUSIVE: 'conclusive',
          INCONCLUSIVE: 'inconclusive',
          NOT_STARTED: 'not_started',
          PENDING: 'pending',
        }),
        c = Object.freeze({
          ACTIVISM: 'activism',
          COMPANY: 'brand_company_organization',
          ENTERTAINMENT: 'entertainment',
          GOVERNMENT: 'government',
          INFLUENCER_OTHER: 'influencer_other',
          NEWS: 'news',
          SPORTS: 'sports',
        }),
        O = {
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
        C = Object.freeze({ ACTIVIST: 'activist' }),
        u = Object.freeze({ COMPANY: 'company', EXECUTIVE: 'executive' }),
        S = Object.freeze({
          ENTERTAINMENT_COMPANY: 'entertainment_company',
          ENTERTAINMENT_INDIVIDUAL: 'entertainment_individual',
          PRODUCTION: 'production',
        }),
        L = Object.freeze({ CANDIDATE: 'candidate', OFFICE: 'office', OFFICIAL: 'official' }),
        l = Object.freeze({ CONTENT_CREATOR: 'content_creator', INFLUENTIAL_INDIVIDUAL: 'influential_individual' }),
        U = Object.freeze({ FREELANCER: 'freelancer', JOURNALIST: 'journalist', ORGANIZATION: 'organization' }),
        D = Object.freeze({
          SPORTS_INDIVIDUAL: 'sports_individual',
          SPORTS_ENTITY: 'sports_entity',
          GAMING_INDIVIDUAL: 'gaming_individual',
        }),
        s = Object.freeze(_(_(_(_(_(_(_({}, C), u), S), L), l), U), D)),
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
        F = Object.freeze({
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
        d = Object.freeze(
          ((t = {}),
          n()(t, F.LANDING_PAGE, { next: F.NOTABILITY_CATEGORY_SELECT, scribeComponent: f.LANDING_PAGE }),
          n()(t, F.NOTABILITY_CATEGORY_SELECT, { next: null, scribeComponent: f.NOTABILITY_CATEGORY }),
          n()(t, F.ACTIVIST_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.ACTIVIST_GOOGLE_TRENDS, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.ACTIVIST_LEADERSHIP, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.ACTIVIST_NEWS, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.ACTIVIST_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.ACTIVIST_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          n()(t, F.ACTIVIST_WIKIPEDIA, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.COMPANY_SUBCATEGORY, {
            next: F.COMPANY_NOTABILITY_METHOD,
            scribeComponent: f.NOTABILITY_SUBCATEGORY,
          }),
          n()(t, F.COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.COMPANY_WIKIPEDIA, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.COMPANY_STOCK_EXCHANGE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.COMPANY_NEWS_REFERENCE, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: F.COMPANY_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          n()(t, F.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.COMPANY_INDIVIDUAL_LEADERSHIP, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.COMPANY_INDIVIDUAL_NEWS_REFERENCE, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.CREATOR_PROFILE, { next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: null }),
          n()(t, F.CONTENT_CREATOR_GOOGLE_TRENDS, { next: F.CREATOR_PROFILE, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.CONTENT_CREATOR_NEWS, { next: F.CREATOR_PROFILE, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.CONTENT_CREATOR_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.CONTENT_CREATOR_WIKIPEDIA, { next: F.CREATOR_PROFILE, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.ENTERTAINMENT_COMPANY_STOCK_REFERENCE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.ENTERTAINMENT_COMPANY_WIKIPEDIA, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
            next: F.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
            next: F.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS, {
            next: null,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, {
            next: null,
            scribeComponent: f.NOTABILITY_METHOD,
          }),
          n()(t, F.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE, {
            next: null,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA, {
            next: null,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.ENTERTAINMENT_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          n()(t, F.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
            next: F.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          n()(t, F.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
            next: F.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
            next: F.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          n()(t, F.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
            next: F.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
            next: F.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          n()(t, F.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
            next: F.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          n()(t, F.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
            next: F.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
            next: F.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          n()(t, F.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.GOVERNMENT_SUBCATEGORY, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          n()(t, F.INFLUENCER_GOOGLE_TRENDS, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.INFLUENCER_NEWS, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.INFLUENCER_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.INFLUENCER_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          n()(t, F.INFLUENCER_SUBCATEGORY, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          n()(t, F.INFLUENCER_WIKIPEDIA, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.NEWS_CREDIBILITY_STOCK_REFERENCE_URL, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: F.NEWS_NOTABILITY_CRITERIA_CONFIRMATION,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, {
            next: F.NEWS_JOURNALIST_QUALIFICATIONS,
            scribeComponent: null,
          }),
          n()(t, F.NEWS_JOURNALIST_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: null }),
          n()(t, F.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION, {
            next: F.NEWS_ORGANIZATION_QUALIFICATIONS,
            scribeComponent: null,
          }),
          n()(t, F.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, {
            next: F.NEWS_JOURNALIST_CRITERIA_CONFIRMATION,
            scribeComponent: null,
          }),
          n()(t, F.NEWS_ORGANIZATION_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.NEWS_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          n()(t, F.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.GAMING_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: F.GAMING_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          n()(t, F.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.SPORTS_ENTITY_GOOGLE_TRENDS, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.SPORTS_ENTITY_NEWS_REFERENCE, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.SPORTS_ENTITY_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.SPORTS_ENTITY_STOCK_REFERENCE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.SPORTS_ENTITY_WEBSITE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.SPORTS_ENTITY_WIKIPEDIA, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          n()(t, F.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          n()(t, F.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: F.SPORTS_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          n()(t, F.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          n()(t, F.SPORTS_SUBCATEGORY, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          n()(t, F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, { next: null, scribeComponent: f.ADD_WEBSITE }),
          n()(t, F.WEBSITE_REFERENCE_CONFIRM_PROCEED, { next: F.REVIEW_SUBMIT, scribeComponent: f.ADD_WEBSITE }),
          n()(t, F.AUTHENTICITY_TYPE_SELECT, { next: null, scribeComponent: f.AUTHENTICITY_TYPE }),
          n()(t, F.INTAKE_TYPE_SELECT, { next: F.INTAKE_UPLOAD, scribeComponent: null }),
          n()(t, F.ID_COUNTRY_SELECT, { next: F.INTAKE_TYPE_SELECT, scribeComponent: null }),
          n()(t, F.ID_TYPE_SELECT, { next: F.INTAKE_TYPE_SELECT, scribeComponent: null }),
          n()(t, F.INTAKE_UPLOAD, { next: F.INTAKE_LOADING, scribeComponent: f.ID_UPLOAD }),
          n()(t, F.INTAKE_LOADING, { next: F.REVIEW_SUBMIT, scribeComponent: f.ID_UPLOAD }),
          n()(t, F.EMAIL_VERIFICATION, { next: F.REVIEW_SUBMIT, scribeComponent: f.ADD_EMAIL }),
          n()(t, F.SITE_VERIFICATION, { next: F.WEBSITE_REFERENCE_CONFIRM_PROCEED, scribeComponent: null }),
          n()(t, F.REVIEW_SUBMIT, { next: F.THANK_YOU, scribeComponent: f.REVIEW_SUBMIT }),
          n()(t, F.THANK_YOU, { next: null, scribeComponent: f.THANK_YOU }),
          n()(t, F.TEST_INPUT, { next: F.TEST_RADIO, scribeComponent: null }),
          n()(t, F.TEST_PIVOT, { next: F.THANK_YOU, scribeComponent: null }),
          n()(t, F.TEST_RADIO, { next: F.THANK_YOU, scribeComponent: null }),
          t),
        )
    },
    ZyHq: function (E, e, I) {
      'use strict'
      I.d(e, 'm', function () {
        return IE
      }),
        I.d(e, 'n', function () {
          return tE
        }),
        I.d(e, 'o', function () {
          return TE
        }),
        I.d(e, 'p', function () {
          return NE
        }),
        I.d(e, 'q', function () {
          return rE
        }),
        I.d(e, 'r', function () {
          return oE
        }),
        I.d(e, 't', function () {
          return RE
        }),
        I.d(e, 's', function () {
          return iE
        }),
        I.d(e, 'u', function () {
          return aE
        }),
        I.d(e, 'v', function () {
          return AE
        }),
        I.d(e, 'w', function () {
          return cE
        }),
        I.d(e, 'x', function () {
          return OE
        }),
        I.d(e, 'z', function () {
          return CE
        }),
        I.d(e, 'y', function () {
          return uE
        }),
        I.d(e, 'A', function () {
          return SE
        }),
        I.d(e, 'B', function () {
          return lE
        }),
        I.d(e, 'E', function () {
          return UE
        }),
        I.d(e, 'D', function () {
          return DE
        }),
        I.d(e, 'C', function () {
          return sE
        }),
        I.d(e, 'F', function () {
          return fE
        }),
        I.d(e, 'G', function () {
          return FE
        }),
        I.d(e, 'H', function () {
          return dE
        }),
        I.d(e, 'I', function () {
          return pE
        }),
        I.d(e, 'J', function () {
          return PE
        }),
        I.d(e, 'L', function () {
          return ME
        }),
        I.d(e, 'N', function () {
          return YE
        }),
        I.d(e, 'M', function () {
          return bE
        }),
        I.d(e, 'O', function () {
          return GE
        }),
        I.d(e, 'P', function () {
          return yE
        }),
        I.d(e, 'K', function () {
          return mE
        }),
        I.d(e, 'b', function () {
          return VE
        }),
        I.d(e, 'a', function () {
          return BE
        }),
        I.d(e, 'c', function () {
          return WE
        }),
        I.d(e, 'd', function () {
          return hE
        }),
        I.d(e, 'e', function () {
          return vE
        }),
        I.d(e, 'g', function () {
          return HE
        }),
        I.d(e, 'Q', function () {
          return xE
        }),
        I.d(e, 'S', function () {
          return wE
        }),
        I.d(e, 'T', function () {
          return gE
        }),
        I.d(e, 'U', function () {
          return KE
        }),
        I.d(e, 'k', function () {
          return jE
        }),
        I.d(e, 'i', function () {
          return QE
        }),
        I.d(e, 'l', function () {
          return kE
        }),
        I.d(e, 'f', function () {
          return ZE
        }),
        I.d(e, 'X', function () {
          return zE
        }),
        I.d(e, 'h', function () {
          return JE
        }),
        I.d(e, 'V', function () {
          return qE
        }),
        I.d(e, 'W', function () {
          return XE
        }),
        I.d(e, 'j', function () {
          return $E
        }),
        I.d(e, 'Y', function () {
          return Ee
        }),
        I.d(e, 'Z', function () {
          return ee
        }),
        I.d(e, 'ab', function () {
          return Ie
        }),
        I.d(e, 'R', function () {
          return te
        })
      I('+KXO'), I('1t7P'), I('LW0h'), I('daRM'), I('jwue'), I('+oxZ'), I('FtHn')
      var t = I('ddV6'),
        T = I.n(t),
        n = I('RhWx'),
        N = I.n(n),
        _ = I('KEM+'),
        r = I.n(_),
        o = (I('yH/f'), I('2G9S'), I('7x/C'), I('DZ+c'), I('jQ3i'), I('x4t0'), I('JtPf'), I('M+/F'), I('oEOe')),
        R = I('iD2S'),
        i = I.n(R),
        a = I('kGix'),
        A = I('Ssj5'),
        c = I('vEo5'),
        O = I('AspN'),
        C = I('QJRq')
      function u(E, e) {
        var I = Object.keys(E)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(E)
          e &&
            (t = t.filter(function (e) {
              return Object.getOwnPropertyDescriptor(E, e).enumerable
            })),
            I.push.apply(I, t)
        }
        return I
      }
      function S(E) {
        for (var e = 1; e < arguments.length; e++) {
          var I = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? u(Object(I), !0).forEach(function (e) {
                r()(E, e, I[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(I))
            : u(Object(I)).forEach(function (e) {
                Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(I, e))
              })
        }
        return E
      }
      var L = 'accountVerification',
        l = 'rweb/accountVerification/APPEND_NOTABILITY_ARTICLE_DATA',
        U = 'rweb/accountVerification/APPEND_NOTABILITY_MAIN_REFERENCE_DATA',
        D = 'rweb/accountVerification/APPEND_NOTABILITY_NEWS_DATA',
        s = 'rweb/accountVerification/APPEND_NOTABILITY_PUBLIC_REFERENCE_DATA',
        f = 'rweb/accountVerification/RESET_AUTHENTICATION_RESULT',
        F = 'rweb/accountVerification/RESET_AUTHENTICITY_DATA',
        d = 'rweb/accountVerification/RESET_AUTHENTICITY_TYPE',
        p = 'rweb/accountVerification/RESET_DOCUMENT_ID_PROCESS',
        P = 'rweb/accountVerification/RESET_FLOW',
        M = 'rweb/accountVerification/RESET_INTAKE_UPLOAD',
        Y = 'rweb/accountVerification/RESET_NOTABILITY_CATEGORY',
        b = 'rweb/accountVerification/RESET_NOTABILITY_DATA',
        G = 'rweb/accountVerification/RESET_SUBMIT_VERIFICATION',
        y = 'rweb/accountVerification/SET_AUTHENTICITY_DATA',
        m = 'rweb/accountVerification/SET_AUTHENTICITY_TYPE',
        V = 'rweb/accountVerification/SET_BACK_ID',
        B = 'rweb/accountVerification/SET_FRONT_ID',
        W = 'rweb/accountVerification/SET_ID_COUNTRY',
        h = 'rweb/accountVerification/SET_ID_TYPE',
        v = 'rweb/accountVerification/SET_NEXT_FLOW',
        H = 'rweb/accountVerification/SET_NOTABILITY_CATEGORY',
        x = 'rweb/accountVerification/SET_NOTABILITY_DATA',
        w = 'rweb/accountVerification/SET_NOTABILITY_SUBCATEGORY',
        g = 'rweb/accountVerification/SET_PREV_FLOW',
        K = 'rweb/accountVerification/TOGGLE_CHECKBOX_CONFIRMATION',
        j = 'rweb/accountVerification/UPDATE_FORM_HISTORY',
        Q = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCESS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCESS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCESS_FAILURE',
        }),
        k = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCOUNT_ELIGIBILITY_FAILURE',
        }),
        Z = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCOUNT_VIOLATIONS_FAILURE',
        }),
        z = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_AUTHENTICATION_RESULT_FAILURE',
        }),
        J = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_BADGE_VIOLATIONS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_BADGE_VIOLATIONS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_BADGE_VIOLATIONS_FAILURE',
        }),
        q = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_DOCUMENT_FORMATS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_DOCUMENT_FORMATS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_DOCUMENT_FORMATS_FAILURE',
        }),
        X = Object.freeze({
          REQUEST: 'rweb/accountVerification/VERIFY_ACCOUNT_REQUEST',
          SUCCESS: 'rweb/accountVerification/VERIFY_ACCOUNT_SUCCESS',
          FAILURE: 'rweb/accountVerification/VERIFY_ACCOUNT_FAILURE',
        }),
        $ = Object.freeze({
          REQUEST: 'rweb/accountVerification/VERIFY_ID_DOCUMENT_REQUEST',
          SUCCESS: 'rweb/accountVerification/VERIFY_ID_DOCUMENT_SUCCESS',
          FAILURE: 'rweb/accountVerification/VERIFY_ID_DOCUMENT_FAILURE',
        }),
        EE = C.h.LANDING_PAGE,
        eE = i()({
          access: {
            data: { applicationSubmissionTimeInMs: void 0, decisionMadeTimeInMs: void 0, status: C.a.DISABLED },
            error: null,
            fetchStatus: a.a.NONE,
          },
          accountEligibility: {
            data: { followers_eligible: !1, mentions_eligible: !1 },
            error: null,
            fetchStatus: a.a.NONE,
          },
          accountViolations: { data: { violations: [] }, error: null, fetchStatus: a.a.NONE },
          authenticationResult: { data: { errors: [], status: void 0 }, error: null, fetchStatus: a.a.NONE },
          badgeViolations: {
            data: {
              button_text: '',
              debadge_timestamp_ms: 0,
              violation_modal_title: '',
              violation_modal_desc: { entities: [], text: '' },
              violations: [],
            },
            error: null,
            fetchStatus: a.a.NONE,
          },
          documentFormats: { data: void 0, error: null, fetchStatus: a.a.NONE },
          documentIdProcess: { data: { errors: [], entity_id: void 0 }, error: null, fetchStatus: a.a.NONE },
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
          currentStep: EE,
          stepsTaken: [EE],
          surveyUrl: void 0,
          verifyAccount: { error: null, fetchStatus: a.a.NONE },
        })
      A.a.register(
        r()({}, L, function () {
          var E,
            e,
            I,
            t,
            T = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case Q.REQUEST:
              return S(S({}, T), {}, { access: S(S({}, T.access), {}, { fetchStatus: a.a.LOADING, error: null }) })
            case Q.SUCCESS:
              if (n.payload)
                return S(
                  S({}, T),
                  {},
                  {
                    access: {
                      data: S(
                        S({}, T.access.data),
                        {},
                        {
                          applicationSubmissionTimeInMs: n.payload.application_submission_time_in_ms,
                          decisionMadeTimeInMs: n.payload.decision_made_time_in_ms,
                          status: n.payload.status || C.a.DISABLED,
                        },
                      ),
                      error: null,
                      fetchStatus: a.a.LOADED,
                    },
                  },
                )
              break
            case Q.FAILURE:
              return S(S({}, T), {}, { access: S(S({}, T.access), {}, { error: n.payload, fetchStatus: a.a.FAILED }) })
            case k.REQUEST:
              return S(
                S({}, T),
                {},
                { accountEligibility: S(S({}, T.accountEligibility), {}, { fetchStatus: a.a.LOADING, error: null }) },
              )
            case k.SUCCESS:
              if (n.payload)
                return S(
                  S({}, T),
                  {},
                  { accountEligibility: { data: S({}, n.payload), error: null, fetchStatus: a.a.LOADED } },
                )
              break
            case k.FAILURE:
              return S(
                S({}, T),
                {},
                {
                  accountEligibility: S(S({}, T.accountEligibility), {}, { error: n.payload, fetchStatus: a.a.FAILED }),
                },
              )
            case Z.REQUEST:
              return S(
                S({}, T),
                {},
                { accountViolations: S(S({}, T.accountViolations), {}, { fetchStatus: a.a.LOADING, error: null }) },
              )
            case Z.SUCCESS:
              if (n.payload)
                return S(
                  S({}, T),
                  {},
                  { accountViolations: { data: S({}, n.payload), error: null, fetchStatus: a.a.LOADED } },
                )
              break
            case Z.FAILURE:
              return S(
                S({}, T),
                {},
                { accountViolations: S(S({}, T.accountViolations), {}, { error: n.payload, fetchStatus: a.a.FAILED }) },
              )
            case z.REQUEST:
              return S(
                S({}, T),
                {},
                {
                  authenticationResult: S(S({}, T.authenticationResult), {}, { error: null, fetchStatus: a.a.LOADING }),
                },
              )
            case z.SUCCESS:
              return S(
                S({}, T),
                {},
                {
                  authenticationResult: {
                    data: S(S({}, T.authenticationResult.data), n.payload),
                    error: null,
                    fetchStatus: a.a.LOADED,
                  },
                },
              )
            case z.FAILURE:
              return S(
                S({}, T),
                {},
                {
                  authenticationResult: S(
                    S({}, T.authenticationResult),
                    {},
                    { error: n.payload, fetchStatus: a.a.FAILED },
                  ),
                },
              )
            case J.REQUEST:
              return S(S({}, T), {}, { badgeViolations: S(S({}, T.badgeViolations), {}, { fetchStatus: a.a.LOADING }) })
            case J.SUCCESS:
              if (n.payload)
                return S(
                  S({}, T),
                  {},
                  { badgeViolations: { data: S({}, n.payload), error: null, fetchStatus: a.a.LOADED } },
                )
              break
            case J.FAILURE:
              return S(
                S({}, T),
                {},
                { badgeViolations: S(S({}, T.badgeViolations), {}, { error: n.payload, fetchStatus: a.a.FAILED }) },
              )
            case q.REQUEST:
              return S(
                S({}, T),
                {},
                { documentFormats: S(S({}, T.documentFormats), {}, { error: null, fetchStatus: a.a.LOADING }) },
              )
            case q.SUCCESS:
              if (n.payload)
                return S(
                  S({}, T),
                  {},
                  { documentFormats: { data: S({}, n.payload), error: null, fetchStatus: a.a.LOADED } },
                )
              break
            case q.FAILURE:
              return S(
                S({}, T),
                {},
                { documentFormats: S(S({}, T.documentFormats), {}, { error: n.payload, fetchStatus: a.a.FAILED }) },
              )
            case X.REQUEST:
              return S(S({}, T), {}, { verifyAccount: { error: null, fetchStatus: a.a.LOADING } })
            case X.SUCCESS:
              var _
              return (
                n.payload && (_ = n.payload.survey_url),
                S(S({}, T), {}, { surveyUrl: _, verifyAccount: { error: null, fetchStatus: a.a.LOADED } })
              )
            case X.FAILURE:
              return S(S({}, T), {}, { verifyAccount: { error: n.payload, fetchStatus: a.a.FAILED } })
            case $.REQUEST:
              return S(
                S({}, T),
                {},
                { documentIdProcess: S(S({}, T.documentIdProcess), {}, { error: null, fetchStatus: a.a.LOADING }) },
              )
            case $.SUCCESS:
              return S(
                S({}, T),
                {},
                {
                  documentIdProcess: {
                    data: S(S({}, T.documentIdProcess.data), n.payload),
                    error: null,
                    fetchStatus: a.a.LOADED,
                  },
                },
              )
            case $.FAILURE:
              return S(
                S({}, T),
                {},
                { documentIdProcess: S(S({}, T.documentIdProcess), {}, { error: n.payload, fetchStatus: a.a.FAILED }) },
              )
            case l:
              return S(
                S({}, T),
                {},
                {
                  formData: S(
                    S({}, T.formData),
                    {},
                    {
                      notabilityData: S(
                        S({}, T.formData.notabilityData),
                        {},
                        {
                          articleReferenceUrls:
                            null === (E = n.payload) || void 0 === E ? void 0 : E.articleReferenceUrls,
                        },
                      ),
                    },
                  ),
                },
              )
            case U:
              return S(
                S({}, T),
                {},
                {
                  formData: S(
                    S({}, T.formData),
                    {},
                    {
                      notabilityData: S(
                        S({}, T.formData.notabilityData),
                        {},
                        { mainReferenceUrl: null === (e = n.payload) || void 0 === e ? void 0 : e.mainReferenceUrl },
                      ),
                    },
                  ),
                },
              )
            case D:
              return S(
                S({}, T),
                {},
                {
                  formData: S(
                    S({}, T.formData),
                    {},
                    {
                      notabilityData: S(
                        S({}, T.formData.notabilityData),
                        {},
                        { newsReferenceUrls: null === (I = n.payload) || void 0 === I ? void 0 : I.newsReferenceUrls },
                      ),
                    },
                  ),
                },
              )
            case s:
              return S(
                S({}, T),
                {},
                {
                  formData: S(
                    S({}, T.formData),
                    {},
                    {
                      notabilityData: S(
                        S({}, T.formData.notabilityData),
                        {},
                        {
                          publicReferenceUrl: null === (t = n.payload) || void 0 === t ? void 0 : t.publicReferenceUrl,
                        },
                      ),
                    },
                  ),
                },
              )
            case V:
              return S(S({}, T), {}, { backID: n.payload })
            case B:
              return S(S({}, T), {}, { frontID: n.payload })
            case W:
              if (n.payload)
                return S(
                  S({}, T),
                  {},
                  {
                    idCountry: n.payload.countryCode,
                    idCountryName: n.payload.countryName,
                    idType: void 0,
                    idTypeName: void 0,
                  },
                )
              break
            case h:
              if (n.payload) return S(S({}, T), {}, { idType: n.payload.idType, idTypeName: n.payload.idTypeName })
              break
            case M:
              return S(S({}, T), {}, { backID: eE.backID, frontID: eE.frontID, isConfirmed: eE.isConfirmed })
            case G:
              var o = Te(T.stepsTaken),
                R = o.previousStep,
                i = o.remainingSteps
              return S(
                S({}, T),
                {},
                { currentStep: R, stepsTaken: N()(i), verifyAccount: { error: null, fetchStatus: a.a.NONE } },
              )
            case K:
              return S(S({}, T), {}, { isConfirmed: !T.isConfirmed })
            case p:
              return S(S({}, T), {}, { documentIdProcess: S({}, eE.documentIdProcess) })
            case f:
              return S(S({}, T), {}, { authenticationResult: S({}, eE.authenticationResult) })
            case v:
              if (n.payload)
                return S(
                  S({}, T),
                  {},
                  { currentStep: n.payload, stepsTaken: [].concat(N()(T.stepsTaken), [n.payload]) },
                )
              break
            case g:
              var A = Te(T.stepsTaken),
                c = A.previousStep,
                O = A.remainingSteps
              return S(S({}, T), {}, { currentStep: c, stepsTaken: N()(O) })
            case H:
              return S(S({}, T), {}, { formData: S(S({}, T.formData), {}, { notabilityCategory: n.payload }) })
            case Y:
              return S(
                S({}, T),
                {},
                {
                  formData: S(
                    S({}, T.formData),
                    {},
                    {
                      notabilityCategory: eE.formData.notabilityCategory,
                      notabilitySubcategory: eE.formData.notabilitySubcategory,
                    },
                  ),
                },
              )
            case x:
              return S(S({}, T), {}, { formData: S(S({}, T.formData), {}, { notabilityData: S({}, n.payload) }) })
            case b:
              return S(
                S({}, T),
                {},
                { formData: S(S({}, T.formData), {}, { notabilityData: eE.formData.notabilityData }) },
              )
            case w:
              return S(S({}, T), {}, { formData: S(S({}, T.formData), {}, { notabilitySubcategory: n.payload }) })
            case m:
              return S(
                S({}, T),
                {},
                {
                  backID: eE.backID,
                  frontID: eE.frontID,
                  isConfirmed: eE.isConfirmed,
                  idType: eE.idType,
                  idTypeName: eE.idTypeName,
                  formData: S(
                    S({}, T.formData),
                    {},
                    { authenticityType: n.payload, authenticityData: eE.formData.authenticityData },
                  ),
                },
              )
            case d:
              return S(
                S({}, T),
                {},
                { formData: S(S({}, T.formData), {}, { authenticityType: eE.formData.authenticityType }) },
              )
            case y:
              return S(S({}, T), {}, { formData: S(S({}, T.formData), {}, { authenticityData: S({}, n.payload) }) })
            case F:
              return S(
                S({}, T),
                {},
                { formData: S(S({}, T.formData), {}, { authenticityData: eE.formData.authenticityData }) },
              )
            case j:
              var u = T.currentStep.toString()
              return S(S({}, T), {}, { formHistory: S(S({}, T.formHistory), {}, r()({}, u, S({}, n.payload))) })
            case P:
              return eE
            default:
              return T
          }
          return T
        }),
      )
      var IE = function (E) {
          return E[L].access.data
        },
        tE = function (E) {
          return E[L].access.fetchStatus
        },
        TE = function (E) {
          return E[L].accountEligibility.data
        },
        nE = function (E) {
          return E[L].accountEligibility.fetchStatus
        },
        NE = function (E) {
          return E[L].accountViolations.data
        },
        _E = function (E) {
          return E[L].accountViolations.fetchStatus
        },
        rE = function (E) {
          return E[L].authenticationResult.data.errors || []
        },
        oE = function (E) {
          return E[L].authenticationResult.data.status
        },
        RE = function (E) {
          return E[L].formData.authenticityType
        },
        iE = function (E) {
          return E[L].formData.authenticityData
        },
        aE = function (E) {
          return E[L].backID
        },
        AE = function (E) {
          return E[L].badgeViolations.data
        },
        cE = function (E) {
          return E[L].badgeViolations.fetchStatus
        },
        OE = function (E) {
          return E[L].isConfirmed
        },
        CE = function (E) {
          return E[L].currentStep
        },
        uE = function (E) {
          var e = CE(E)
          return E[L].formHistory[e] || void 0
        },
        SE = function (E) {
          return E[L].documentFormats.data
        },
        LE = function (E) {
          return E[L].documentFormats.fetchStatus
        },
        lE = function (E) {
          return E[L].documentIdProcess.data.entity_id
        },
        UE = function (E) {
          return E[L].documentIdProcess.error
        },
        DE = function (E) {
          return E[L].documentIdProcess.fetchStatus
        },
        sE = function (E) {
          return E[L].documentIdProcess.data.errors || []
        },
        fE = function (E) {
          return E[L].frontID
        },
        FE = function (E) {
          return E[L].idCountry
        },
        dE = function (E) {
          return E[L].idCountryName
        },
        pE = function (E) {
          return E[L].idType
        },
        PE = function (E) {
          return E[L].idTypeName
        },
        ME = function (E) {
          return E[L].formData.notabilityCategory
        },
        YE = function (E) {
          var e = E[L].formData,
            I = e.notabilityCategory,
            t = e.notabilityData,
            T = e.notabilitySubcategory
          switch (I) {
            case C.l.NEWS:
              return null == t ? void 0 : t.newsType
            default:
              return T
          }
        },
        bE = function (E) {
          return E[L].formData.notabilityData
        },
        GE = function (E) {
          return E[L].surveyUrl
        },
        yE = function (E) {
          return E[L].verifyAccount.fetchStatus
        },
        mE = function (E) {
          var e = tE(E),
            I = nE(E),
            t = _E(E),
            T = Object(c.selectFetchStatus)(E),
            n = LE(E)
          return [e, I, t, T, n].includes(a.a.FAILED)
            ? a.a.FAILED
            : (function (E) {
                return E.includes(a.a.LOADING)
              })([e, I, t, T, n])
            ? a.a.LOADING
            : a.a.LOADED
        },
        VE = function () {
          return function (E, e, I) {
            I.api
            var t = e(),
              T = tE(t)
            return T !== a.a.LOADING && T !== a.a.LOADED ? E(BE()) : Promise.resolve()
          }
        },
        BE = function () {
          return function (E, e, I) {
            var t = I.api
            return Object(o.b)(E, { request: t.AccountVerification.fetchAccess })({
              actionTypes: Q,
              context: 'FETCH_ACCESS',
            })
          }
        },
        WE = function () {
          return function (E, e, I) {
            I.api
            var t = e(),
              T = nE(t)
            return T !== a.a.LOADING && T !== a.a.LOADED
              ? E(function (E, e, I) {
                  var t = I.api
                  return Object(o.b)(E, { request: t.AccountVerification.fetchAccountEligibility })({
                    actionTypes: k,
                    context: 'FETCH_ACCOUNT_ELIGIBILITY',
                  })
                })
              : Promise.resolve()
          }
        },
        hE = function () {
          return function (E, e, I) {
            I.api
            var t = e(),
              T = _E(t)
            return T !== a.a.LOADING && T !== a.a.LOADED
              ? E(function (E, e, I) {
                  var t = I.api
                  return Object(o.b)(E, { request: t.AccountVerification.fetchAccountViolations })({
                    actionTypes: Z,
                    context: 'FETCH_ACCOUNT_VIOLATIONS',
                  })
                })
              : Promise.resolve()
          }
        },
        vE = function () {
          return function (E, e, I) {
            I.api
            return (function (E) {
              return E[L].authenticationResult.fetchStatus
            })(e()) !== a.a.LOADING
              ? E(function (E, e, I) {
                  var t = I.api
                  return Object(o.b)(E, { request: t.AccountVerification.fetchAuthenticationResult })({
                    actionTypes: z,
                    context: 'FETCH_AUTHENTICATION_RESULT',
                  })
                })
              : Promise.resolve()
          }
        },
        HE = function () {
          return function (E, e, I) {
            I.api
            var t = e(),
              T = LE(t)
            return T !== a.a.LOADING && T !== a.a.LOADED
              ? E(function (E, e, I) {
                  var t = I.api
                  return Object(o.b)(E, { request: t.AccountVerification.fetchDocumentFormats })({
                    actionTypes: q,
                    context: 'FETCH_DOCUMENT_FORMATS',
                  })
                })
              : Promise.resolve()
          }
        },
        xE = function (E) {
          return function (e, I, t) {
            t.api
            e({ type: V, payload: E })
          }
        },
        wE = function (E) {
          return function (e, I, t) {
            t.api
            e({ type: B, payload: E })
          }
        },
        gE = function (E, e) {
          return function (I, t, T) {
            T.api
            I({ type: W, payload: { countryCode: E, countryName: e } })
          }
        },
        KE = function (E, e) {
          return function (I, t, T) {
            T.api
            I({ type: h, payload: { idType: E, idTypeName: e } })
          }
        },
        jE = function () {
          return function (E, e, I) {
            I.api
            E({ type: M })
          }
        },
        QE = function () {
          return function (E, e, I) {
            I.api
            E({ type: p })
          }
        },
        kE = function () {
          return function (E, e, I) {
            I.api
            E({ type: G })
          }
        },
        ZE = function () {
          return function (E, e, I) {
            var t = I.api
            return Object(o.b)(E, { request: t.AccountVerification.fetchBadgeViolations })({
              actionTypes: J,
              context: 'FETCH_BADGE_VIOLATIONS',
            })
          }
        },
        zE = function () {
          return function (E, e, I) {
            I.api
            E({ type: K })
          }
        },
        JE = function () {
          return function (E, e, I) {
            I.api
            E({ type: f })
          }
        },
        qE = function (E) {
          return function (e, I, t) {
            t.api
            e({ payload: E || C.g[CE(I())].next, type: v })
          }
        },
        XE = function () {
          return function (E, e, I) {
            I.api
            E({ type: g })
          }
        },
        $E = function () {
          return function (E, e, I) {
            I.api
            E({ type: P })
          }
        },
        Ee = function (E) {
          return function (e, I, t) {
            t.api
            e({ payload: 'string' == typeof E ? { radioData: E } : { inputData: E }, type: j })
          }
        },
        ee = function () {
          return function (E, e, I) {
            var t,
              T,
              n = I.api,
              N = e(),
              _ = RE(N) || void 0,
              r = iE(N) || void 0,
              R = ME(N) || void 0,
              i = bE(N) || {},
              a = YE(N) || void 0,
              A = a && R !== C.l.NEWS,
              c = { authenticity_type: _ }
            null != r &&
              r.siteUrl &&
              (c = S(S({}, c), {}, { site_url: null == r || null === (t = r.siteUrl) || void 0 === t ? void 0 : t[0] }))
            null != r &&
              r.email &&
              (c = S(
                S({}, c),
                {},
                { verified_email: null == r || null === (T = r.email) || void 0 === T ? void 0 : T[0] },
              ))
            var O,
              u,
              L,
              l,
              U,
              D,
              s,
              f,
              F,
              d,
              p,
              P = { category: R }
            ;(A && (P = S(S({}, P), {}, { notability_subcategory: a })),
            null != i &&
              i.articleReferenceUrls &&
              (P = S(S({}, P), {}, { article_reference_urls: null == i ? void 0 : i.articleReferenceUrls })),
            null != i && i.authorReferenceUrl) &&
              (P = S(
                S({}, P),
                {},
                {
                  author_reference_url:
                    null == i || null === (O = i.authorReferenceUrl) || void 0 === O ? void 0 : O[0],
                },
              ))
            null != i &&
              i.googleTrendsReferenceUrl &&
              (P = S(
                S({}, P),
                {},
                {
                  google_trends_reference_url:
                    null == i || null === (u = i.googleTrendsReferenceUrl) || void 0 === u ? void 0 : u[0],
                },
              ))
            null != i &&
              i.hashtagReferenceUrl &&
              (P = S(
                S({}, P),
                {},
                {
                  hashtag_reference_url:
                    null == i || null === (L = i.hashtagReferenceUrl) || void 0 === L ? void 0 : L[0],
                },
              ))
            null != i &&
              i.imdbReferenceUrl &&
              (P = S(
                S({}, P),
                {},
                { imdb_reference_url: null == i || null === (l = i.imdbReferenceUrl) || void 0 === l ? void 0 : l[0] },
              ))
            null != i &&
              i.leadershipReferenceUrl &&
              (P = S(
                S({}, P),
                {},
                {
                  leadership_reference_url:
                    null == i || null === (U = i.leadershipReferenceUrl) || void 0 === U ? void 0 : U[0],
                },
              ))
            null != i &&
              i.mainReferenceUrl &&
              (P = S(
                S({}, P),
                {},
                { main_reference_url: null == i || null === (D = i.mainReferenceUrl) || void 0 === D ? void 0 : D[0] },
              ))
            ;(null != i &&
              i.newsReferenceUrls &&
              (P = S(S({}, P), {}, { news_reference_urls: null == i ? void 0 : i.newsReferenceUrls })),
            null != i && i.newsType && (P = S(S({}, P), {}, { news_type: null == i ? void 0 : i.newsType })),
            null != i && i.publicReferenceUrl) &&
              (P = S(
                S({}, P),
                {},
                {
                  public_reference_url:
                    null == i || null === (s = i.publicReferenceUrl) || void 0 === s ? void 0 : s[0],
                },
              ))
            null != i &&
              i.publicationReferenceUrl &&
              (P = S(
                S({}, P),
                {},
                {
                  publication_reference_url:
                    null == i || null === (f = i.publicationReferenceUrl) || void 0 === f ? void 0 : f[0],
                },
              ))
            null != i &&
              i.stockReferenceUrl &&
              (P = S(
                S({}, P),
                {},
                {
                  stock_reference_url: null == i || null === (F = i.stockReferenceUrl) || void 0 === F ? void 0 : F[0],
                },
              ))
            null != i &&
              i.teamReferenceUrl &&
              (P = S(
                S({}, P),
                {},
                { team_reference_url: null == i || null === (d = i.teamReferenceUrl) || void 0 === d ? void 0 : d[0] },
              ))
            null != i &&
              i.wikipediaReferenceUrl &&
              (P = S(
                S({}, P),
                {},
                {
                  wikipedia_reference_url:
                    null == i || null === (p = i.wikipediaReferenceUrl) || void 0 === p ? void 0 : p[0],
                },
              ))
            var M = { authenticity_claim: c, notability_claim: P }
            return Object(o.b)(E, { params: M, request: n.AccountVerification.verifyAccount })({
              actionTypes: X,
              context: 'VERIFY_ACCOUNT',
            })
          }
        },
        Ie = function () {
          return function (E, e, I) {
            var t,
              n,
              N = I.api,
              _ = e(),
              r = aE(_),
              R = fE(_),
              i = pE(_),
              a = FE(_)
            if (r) {
              var A,
                c = Object(O.k)(_, r),
                C = T()(c, 1)[0]
              n = null == C || null === (A = C.originalMediaFile) || void 0 === A ? void 0 : A.fileHandle
            }
            if (R) {
              var u,
                S = Object(O.k)(_, R),
                L = T()(S, 1)[0]
              t = null == L || null === (u = L.originalMediaFile) || void 0 === u ? void 0 : u.fileHandle
            }
            var l = { backImage: n, country: a, frontImage: t, idType: i }
            return Object(o.b)(E, { params: l, request: N.AccountVerification.verifyIdDocument })({
              actionTypes: $,
              context: 'VERIFY_ID_DOCUMENT',
            })
          }
        },
        te = function (E, e) {
          return function (I, t, T) {
            T.api
            var n,
              N = t(),
              _ = null === (n = bE(N)) || void 0 === n ? void 0 : n.newsType,
              r = TE(N),
              o = r.followers_eligible,
              R = r.mentions_eligible
            switch (E) {
              case C.h.NOTABILITY_CATEGORY_SELECT:
                I({ payload: e, type: H })
                break
              case C.h.COMPANY_SUBCATEGORY:
              case C.h.ENTERTAINMENT_QUALIFICATIONS:
              case C.h.GOVERNMENT_SUBCATEGORY:
              case C.h.INFLUENCER_SUBCATEGORY:
              case C.h.SPORTS_SUBCATEGORY:
                I({ payload: e, type: w })
                break
              case C.h.NEWS_QUALIFICATIONS:
                I({ payload: { newsType: e }, type: x })
                break
              case C.h.ACTIVIST_QUALIFICATIONS:
                I({ payload: C.b.ACTIVIST, type: w })
                break
              case C.h.ACTIVIST_GOOGLE_TRENDS:
              case C.h.ACTIVIST_LEADERSHIP:
              case C.h.ACTIVIST_NEWS:
              case C.h.ACTIVIST_WIKIPEDIA:
              case C.h.COMPANY_GOOGLE_TRENDS:
              case C.h.COMPANY_INDIVIDUAL_LEADERSHIP:
              case C.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE:
              case C.h.COMPANY_STOCK_EXCHANGE:
              case C.h.COMPANY_WIKIPEDIA:
              case C.h.CONTENT_CREATOR_GOOGLE_TRENDS:
              case C.h.CONTENT_CREATOR_NEWS:
              case C.h.CONTENT_CREATOR_WIKIPEDIA:
              case C.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS:
              case C.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE:
              case C.h.ENTERTAINMENT_COMPANY_WIKIPEDIA:
              case C.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL:
              case C.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS:
              case C.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS:
              case C.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE:
              case C.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA:
              case C.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS:
              case C.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL:
              case C.h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS:
              case C.h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS:
              case C.h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS:
              case C.h.INFLUENCER_GOOGLE_TRENDS:
              case C.h.INFLUENCER_NEWS:
              case C.h.INFLUENCER_WIKIPEDIA:
              case C.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS:
              case C.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL:
              case C.h.SPORTS_ENTITY_GOOGLE_TRENDS:
              case C.h.SPORTS_ENTITY_STOCK_REFERENCE:
              case C.h.SPORTS_ENTITY_WEBSITE:
              case C.h.SPORTS_ENTITY_WIKIPEDIA:
                I({ payload: e, type: x })
                break
              case C.h.COMPANY_NEWS_REFERENCE:
              case C.h.SPORTS_ENTITY_NEWS_REFERENCE:
                I(o ? { payload: e, type: x } : { payload: e, type: D })
                break
              case C.h.CREATOR_PROFILE:
              case C.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL:
                I({ payload: e, type: U })
                break
              case C.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE:
              case C.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE:
                I(o || R ? { payload: e, type: x } : { payload: e, type: D })
                break
              case C.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL:
              case C.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL:
              case C.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL:
                I({ payload: e, type: s })
                break
              case C.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS:
              case C.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL:
              case C.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL:
              case C.h.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL:
              case C.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL:
              case C.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL:
              case C.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                I({ payload: S(S({}, e), {}, { newsType: _ }), type: x })
                break
              case C.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                I(o || R ? { payload: S(S({}, e), {}, { newsType: _ }), type: x } : { payload: S({}, e), type: l })
                break
              case C.h.AUTHENTICITY_TYPE_SELECT:
                I({ payload: e, type: m })
                break
              case C.h.EMAIL_VERIFICATION:
                I({ payload: { email: [e] }, type: y })
                break
              case C.h.SITE_VERIFICATION:
                I({ payload: e, type: y })
                break
              default:
                return
            }
          }
        },
        Te = function E(e) {
          var I = e.slice(-2),
            t = T()(I, 1)[0],
            n = void 0 === t ? EE : t,
            _ = [EE].concat(N()(e.slice(1, -1)))
          return n === C.h.INTAKE_LOADING ? E(_) : { previousStep: n, remainingSteps: _ }
        }
    },
    iD2S: function (E, e) {
      E.exports = function E(e) {
        return (
          Object.freeze(e),
          Object.getOwnPropertyNames(e).forEach(function (I) {
            !e.hasOwnProperty(I) ||
              null === e[I] ||
              ('object' != typeof e[I] && 'function' != typeof e[I]) ||
              Object.isFrozen(e[I]) ||
              E(e[I])
          }),
          e
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
