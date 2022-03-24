;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    QJRq: function (E, I, e) {
      'use strict'
      e.d(I, 't', function () {
        return R
      }),
        e.d(I, 's', function () {
          return A
        }),
        e.d(I, 'a', function () {
          return o
        }),
        e.d(I, 'd', function () {
          return a
        }),
        e.d(I, 'c', function () {
          return i
        }),
        e.d(I, 'p', function () {
          return O
        }),
        e.d(I, 'l', function () {
          return C
        }),
        e.d(I, 'm', function () {
          return c
        }),
        e.d(I, 'b', function () {
          return u
        }),
        e.d(I, 'e', function () {
          return S
        }),
        e.d(I, 'f', function () {
          return L
        }),
        e.d(I, 'i', function () {
          return U
        }),
        e.d(I, 'j', function () {
          return l
        }),
        e.d(I, 'k', function () {
          return D
        }),
        e.d(I, 'r', function () {
          return s
        }),
        e.d(I, 'n', function () {
          return f
        }),
        e.d(I, 'o', function () {
          return F
        }),
        e.d(I, 'q', function () {
          return d
        }),
        e.d(I, 'h', function () {
          return M
        }),
        e.d(I, 'g', function () {
          return Y
        })
      var T,
        N,
        n = e('KEM+'),
        t = e.n(n),
        _ = e('yiKp'),
        r = e.n(_),
        R = (e('yH/f'), Object.freeze({ IN_COMPLIANCE: 'in_compliance', OUT_OF_COMPLIANCE: 'out_of_compliance' })),
        A = Object.freeze({ PROFILE_COMPLETION: 'profile_completion', ACCOUNT_SECURITY: 'account_security' }),
        o = Object.freeze({
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
        a = Object.freeze({ IDENTITY_DOCUMENT: 'identity_document', EMAIL: 'email', WEBSITE: 'website' }),
        i = { WEBSITE: 'siteUrl' },
        O = Object.freeze({
          CONCLUSIVE: 'conclusive',
          INCONCLUSIVE: 'inconclusive',
          NOT_STARTED: 'not_started',
          PENDING: 'pending',
        }),
        C = Object.freeze({
          ACTIVISM: 'activism',
          COMPANY: 'brand_company_organization',
          ENTERTAINMENT: 'entertainment',
          GAMING: 'gaming',
          GOVERNMENT: 'government',
          INFLUENCER_OTHER: 'influencer_other',
          NEWS: 'news',
          SPORTS: 'sports',
        }),
        c = {
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
        u = Object.freeze({ ACTIVIST: 'activist' }),
        S = Object.freeze({ COMPANY: 'company', EXECUTIVE: 'executive' }),
        L = Object.freeze({
          ENTERTAINMENT_COMPANY: 'entertainment_company',
          ENTERTAINMENT_INDIVIDUAL: 'entertainment_individual',
          PRODUCTION: 'production',
        }),
        U = Object.freeze({ CANDIDATE: 'candidate', OFFICE: 'office', OFFICIAL: 'official' }),
        l = Object.freeze({ CONTENT_CREATOR: 'content_creator', INFLUENTIAL_INDIVIDUAL: 'influential_individual' }),
        D = Object.freeze({ FREELANCER: 'freelancer', JOURNALIST: 'journalist', ORGANIZATION: 'organization' }),
        s = Object.freeze({
          SPORTS_INDIVIDUAL: 'sports_individual',
          SPORTS_ENTITY: 'sports_entity',
          GAMING_INDIVIDUAL: 'gaming_individual',
        }),
        f = Object.freeze(r()(r()(r()(r()(r()(r()(r()({}, u), S), L), U), l), D), s)),
        F = Object.freeze(
          ((T = {}),
          t()(T, u.ACTIVIST, C.ACTIVISM),
          t()(T, S.COMPANY, C.COMPANY),
          t()(T, S.EXECUTIVE, C.COMPANY),
          t()(T, L.ENTERTAINMENT_COMPANY, C.ENTERTAINMENT),
          t()(T, L.ENTERTAINMENT_INDIVIDUAL, C.ENTERTAINMENT),
          t()(T, L.PRODUCTION, C.ENTERTAINMENT),
          t()(T, U.CANDIDATE, C.GOVERNMENT),
          t()(T, U.OFFICE, C.GOVERNMENT),
          t()(T, U.OFFICIAL, C.GOVERNMENT),
          t()(T, l.CONTENT_CREATOR, C.INFLUENCER_OTHER),
          t()(T, l.INFLUENTIAL_INDIVIDUAL, C.INFLUENCER_OTHER),
          t()(T, D.FREELANCER, C.NEWS),
          t()(T, D.JOURNALIST, C.NEWS),
          t()(T, D.ORGANIZATION, C.NEWS),
          t()(T, s.SPORTS_INDIVIDUAL, C.SPORTS),
          t()(T, s.SPORTS_ENTITY, C.SPORTS),
          t()(T, s.GAMING_INDIVIDUAL, C.SPORTS),
          T),
        ),
        d = Object.freeze({
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
        M = Object.freeze({
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
        Y = Object.freeze(
          ((N = {}),
          t()(N, M.LANDING_PAGE, { next: M.NOTABILITY_CATEGORY_SELECT, scribeComponent: d.LANDING_PAGE }),
          t()(N, M.NOTABILITY_CATEGORY_SELECT, { next: null, scribeComponent: d.NOTABILITY_CATEGORY }),
          t()(N, M.ACTIVIST_QUALIFICATIONS, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.ACTIVIST_GOOGLE_TRENDS, { next: M.AUTHENTICITY_TYPE_SELECT, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.ACTIVIST_LEADERSHIP, {
            next: M.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.ACTIVIST_NEWS, { next: M.AUTHENTICITY_TYPE_SELECT, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.ACTIVIST_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          t()(N, M.ACTIVIST_SUBCATEGORY, { next: null, scribeComponent: d.NOTABILITY_SUBCATEGORY }),
          t()(N, M.ACTIVIST_WIKIPEDIA, { next: M.AUTHENTICITY_TYPE_SELECT, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.COMPANY_SUBCATEGORY, {
            next: M.COMPANY_NOTABILITY_METHOD,
            scribeComponent: d.NOTABILITY_SUBCATEGORY,
          }),
          t()(N, M.COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.COMPANY_WIKIPEDIA, { next: null, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.COMPANY_STOCK_EXCHANGE, { next: null, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.COMPANY_NEWS_REFERENCE, { next: M.AUTHENTICITY_TYPE_SELECT, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: M.COMPANY_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          t()(N, M.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.COMPANY_INDIVIDUAL_LEADERSHIP, {
            next: M.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.COMPANY_INDIVIDUAL_NEWS_REFERENCE, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.CREATOR_PROFILE, { next: M.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: null }),
          t()(N, M.CONTENT_CREATOR_GOOGLE_TRENDS, { next: M.CREATOR_PROFILE, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.CONTENT_CREATOR_NEWS, { next: M.CREATOR_PROFILE, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.CONTENT_CREATOR_QUALIFICATIONS, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.CONTENT_CREATOR_WIKIPEDIA, { next: M.CREATOR_PROFILE, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.ENTERTAINMENT_COMPANY_STOCK_REFERENCE, { next: null, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.ENTERTAINMENT_COMPANY_WIKIPEDIA, { next: null, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
            next: M.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
            next: M.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
            next: M.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS, {
            next: null,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, {
            next: null,
            scribeComponent: d.NOTABILITY_METHOD,
          }),
          t()(N, M.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE, {
            next: null,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA, {
            next: null,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.ENTERTAINMENT_QUALIFICATIONS, { next: null, scribeComponent: d.NOTABILITY_SUBCATEGORY }),
          t()(N, M.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
            next: M.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          t()(N, M.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
            next: M.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
            next: M.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          t()(N, M.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
            next: M.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
            next: M.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          t()(N, M.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
            next: M.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
            next: M.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          t()(N, M.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
            next: M.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
            next: M.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          t()(N, M.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
            next: M.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.GOVERNMENT_SUBCATEGORY, { next: null, scribeComponent: d.NOTABILITY_SUBCATEGORY }),
          t()(N, M.INFLUENCER_GOOGLE_TRENDS, { next: M.AUTHENTICITY_TYPE_SELECT, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.INFLUENCER_NEWS, { next: M.AUTHENTICITY_TYPE_SELECT, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.INFLUENCER_QUALIFICATIONS, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.INFLUENCER_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          t()(N, M.INFLUENCER_SUBCATEGORY, { next: null, scribeComponent: d.NOTABILITY_SUBCATEGORY }),
          t()(N, M.INFLUENCER_WIKIPEDIA, { next: M.AUTHENTICITY_TYPE_SELECT, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
            next: M.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.NEWS_CREDIBILITY_STOCK_REFERENCE_URL, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: M.NEWS_NOTABILITY_CRITERIA_CONFIRMATION,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, {
            next: M.NEWS_JOURNALIST_QUALIFICATIONS,
            scribeComponent: null,
          }),
          t()(N, M.NEWS_JOURNALIST_QUALIFICATIONS, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, { next: M.AUTHENTICITY_TYPE_SELECT, scribeComponent: null }),
          t()(N, M.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION, {
            next: M.NEWS_ORGANIZATION_QUALIFICATIONS,
            scribeComponent: null,
          }),
          t()(N, M.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, {
            next: M.NEWS_JOURNALIST_CRITERIA_CONFIRMATION,
            scribeComponent: null,
          }),
          t()(N, M.NEWS_ORGANIZATION_QUALIFICATIONS, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.NEWS_QUALIFICATIONS, { next: null, scribeComponent: d.NOTABILITY_SUBCATEGORY }),
          t()(N, M.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.GAMING_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: M.GAMING_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          t()(N, M.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: M.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.GAMING_INDIVIDUAL_INELIGIBLE, { next: null, scribeComponent: null }),
          t()(N, M.GAMING_SUBCATEGORY, { next: null, scribeComponent: d.NOTABILITY_SUBCATEGORY }),
          t()(N, M.SPORTS_ENTITY_GOOGLE_TRENDS, { next: null, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.SPORTS_ENTITY_NEWS_REFERENCE, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.SPORTS_ENTITY_NOTABILITY_METHOD, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.SPORTS_ENTITY_STOCK_REFERENCE, { next: null, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.SPORTS_ENTITY_WEBSITE, { next: null, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.SPORTS_ENTITY_WIKIPEDIA, { next: null, scribeComponent: d.NOTABILITY_INPUT }),
          t()(N, M.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: M.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: d.NOTABILITY_METHOD }),
          t()(N, M.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: M.SPORTS_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          t()(N, M.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: M.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: d.NOTABILITY_INPUT,
          }),
          t()(N, M.SPORTS_SUBCATEGORY, { next: null, scribeComponent: d.NOTABILITY_SUBCATEGORY }),
          t()(N, M.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, { next: null, scribeComponent: d.ADD_WEBSITE }),
          t()(N, M.WEBSITE_REFERENCE_CONFIRM_PROCEED, { next: M.REVIEW_SUBMIT, scribeComponent: d.ADD_WEBSITE }),
          t()(N, M.AUTHENTICITY_TYPE_SELECT, { next: null, scribeComponent: d.AUTHENTICITY_TYPE }),
          t()(N, M.INTAKE_TYPE_SELECT, { next: M.INTAKE_UPLOAD, scribeComponent: null }),
          t()(N, M.ID_COUNTRY_SELECT, { next: M.INTAKE_TYPE_SELECT, scribeComponent: null }),
          t()(N, M.ID_TYPE_SELECT, { next: M.INTAKE_TYPE_SELECT, scribeComponent: null }),
          t()(N, M.INTAKE_UPLOAD, { next: M.INTAKE_LOADING, scribeComponent: d.ID_UPLOAD }),
          t()(N, M.INTAKE_LOADING, { next: M.REVIEW_SUBMIT, scribeComponent: d.ID_UPLOAD }),
          t()(N, M.EMAIL_VERIFICATION, { next: M.REVIEW_SUBMIT, scribeComponent: d.ADD_EMAIL }),
          t()(N, M.SITE_VERIFICATION, { next: M.WEBSITE_REFERENCE_CONFIRM_PROCEED, scribeComponent: null }),
          t()(N, M.REVIEW_SUBMIT, { next: M.THANK_YOU, scribeComponent: d.REVIEW_SUBMIT }),
          t()(N, M.THANK_YOU, { next: null, scribeComponent: d.THANK_YOU }),
          t()(N, M.TEST_INPUT, { next: M.TEST_RADIO, scribeComponent: null }),
          t()(N, M.TEST_PIVOT, { next: M.THANK_YOU, scribeComponent: null }),
          t()(N, M.TEST_RADIO, { next: M.THANK_YOU, scribeComponent: null }),
          N),
        )
    },
    ZyHq: function (E, I, e) {
      'use strict'
      e.d(I, 'm', function () {
        return eE
      }),
        e.d(I, 'n', function () {
          return TE
        }),
        e.d(I, 'o', function () {
          return NE
        }),
        e.d(I, 'p', function () {
          return tE
        }),
        e.d(I, 'q', function () {
          return rE
        }),
        e.d(I, 'r', function () {
          return RE
        }),
        e.d(I, 't', function () {
          return AE
        }),
        e.d(I, 's', function () {
          return oE
        }),
        e.d(I, 'u', function () {
          return aE
        }),
        e.d(I, 'v', function () {
          return iE
        }),
        e.d(I, 'w', function () {
          return OE
        }),
        e.d(I, 'x', function () {
          return CE
        }),
        e.d(I, 'z', function () {
          return cE
        }),
        e.d(I, 'y', function () {
          return uE
        }),
        e.d(I, 'A', function () {
          return SE
        }),
        e.d(I, 'B', function () {
          return UE
        }),
        e.d(I, 'E', function () {
          return lE
        }),
        e.d(I, 'D', function () {
          return DE
        }),
        e.d(I, 'C', function () {
          return sE
        }),
        e.d(I, 'F', function () {
          return fE
        }),
        e.d(I, 'G', function () {
          return FE
        }),
        e.d(I, 'H', function () {
          return dE
        }),
        e.d(I, 'I', function () {
          return ME
        }),
        e.d(I, 'J', function () {
          return YE
        }),
        e.d(I, 'L', function () {
          return PE
        }),
        e.d(I, 'N', function () {
          return pE
        }),
        e.d(I, 'M', function () {
          return bE
        }),
        e.d(I, 'O', function () {
          return GE
        }),
        e.d(I, 'P', function () {
          return VE
        }),
        e.d(I, 'K', function () {
          return mE
        }),
        e.d(I, 'b', function () {
          return BE
        }),
        e.d(I, 'a', function () {
          return yE
        }),
        e.d(I, 'c', function () {
          return WE
        }),
        e.d(I, 'd', function () {
          return hE
        }),
        e.d(I, 'e', function () {
          return HE
        }),
        e.d(I, 'g', function () {
          return vE
        }),
        e.d(I, 'Q', function () {
          return xE
        }),
        e.d(I, 'S', function () {
          return wE
        }),
        e.d(I, 'T', function () {
          return KE
        }),
        e.d(I, 'U', function () {
          return gE
        }),
        e.d(I, 'k', function () {
          return QE
        }),
        e.d(I, 'i', function () {
          return kE
        }),
        e.d(I, 'l', function () {
          return jE
        }),
        e.d(I, 'f', function () {
          return ZE
        }),
        e.d(I, 'X', function () {
          return zE
        }),
        e.d(I, 'h', function () {
          return JE
        }),
        e.d(I, 'V', function () {
          return qE
        }),
        e.d(I, 'W', function () {
          return XE
        }),
        e.d(I, 'j', function () {
          return $E
        }),
        e.d(I, 'Y', function () {
          return EI
        }),
        e.d(I, 'Z', function () {
          return II
        }),
        e.d(I, 'ab', function () {
          return eI
        }),
        e.d(I, 'R', function () {
          return TI
        })
      var T = e('ddV6'),
        N = e.n(T),
        n = e('KEM+'),
        t = e.n(n),
        _ = e('RhWx'),
        r = e.n(_),
        R = e('yiKp'),
        A = e.n(R),
        o =
          (e('yH/f'),
          e('2G9S'),
          e('TJCb'),
          e('7x/C'),
          e('DZ+c'),
          e('jQ3i'),
          e('x4t0'),
          e('JtPf'),
          e('M+/F'),
          e('oEOe')),
        a = e('iD2S'),
        i = e.n(a),
        O = e('kGix'),
        C = e('Ssj5'),
        c = e('vEo5'),
        u = e('AspN'),
        S = e('QJRq'),
        L = 'accountVerification',
        U = 'rweb/accountVerification/APPEND_NOTABILITY_ARTICLE_DATA',
        l = 'rweb/accountVerification/APPEND_NOTABILITY_MAIN_REFERENCE_DATA',
        D = 'rweb/accountVerification/APPEND_NOTABILITY_NEWS_DATA',
        s = 'rweb/accountVerification/APPEND_NOTABILITY_PUBLIC_REFERENCE_DATA',
        f = 'rweb/accountVerification/RESET_AUTHENTICATION_RESULT',
        F = 'rweb/accountVerification/RESET_AUTHENTICITY_DATA',
        d = 'rweb/accountVerification/RESET_AUTHENTICITY_TYPE',
        M = 'rweb/accountVerification/RESET_DOCUMENT_ID_PROCESS',
        Y = 'rweb/accountVerification/RESET_FLOW',
        P = 'rweb/accountVerification/RESET_INTAKE_UPLOAD',
        p = 'rweb/accountVerification/RESET_NOTABILITY_CATEGORY',
        b = 'rweb/accountVerification/RESET_NOTABILITY_DATA',
        G = 'rweb/accountVerification/RESET_SUBMIT_VERIFICATION',
        V = 'rweb/accountVerification/SET_AUTHENTICITY_DATA',
        m = 'rweb/accountVerification/SET_AUTHENTICITY_TYPE',
        B = 'rweb/accountVerification/SET_BACK_ID',
        y = 'rweb/accountVerification/SET_FRONT_ID',
        W = 'rweb/accountVerification/SET_ID_COUNTRY',
        h = 'rweb/accountVerification/SET_ID_TYPE',
        H = 'rweb/accountVerification/SET_NEXT_FLOW',
        v = 'rweb/accountVerification/SET_NOTABILITY_CATEGORY',
        x = 'rweb/accountVerification/SET_NOTABILITY_DATA',
        w = 'rweb/accountVerification/SET_NOTABILITY_SUBCATEGORY',
        K = 'rweb/accountVerification/SET_PREV_FLOW',
        g = 'rweb/accountVerification/TOGGLE_CHECKBOX_CONFIRMATION',
        Q = 'rweb/accountVerification/UPDATE_FORM_HISTORY',
        k = Object.freeze({
          REQUEST: 'rweb/accountVerification/FETCH_ACCESS_REQUEST',
          SUCCESS: 'rweb/accountVerification/FETCH_ACCESS_SUCCESS',
          FAILURE: 'rweb/accountVerification/FETCH_ACCESS_FAILURE',
        }),
        j = Object.freeze({
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
        EE = S.h.LANDING_PAGE,
        IE = i()({
          access: {
            data: { applicationSubmissionTimeInMs: void 0, decisionMadeTimeInMs: void 0, status: S.a.DISABLED },
            error: null,
            fetchStatus: O.a.NONE,
          },
          accountEligibility: {
            data: { followers_eligible: !1, mentions_eligible: !1 },
            error: null,
            fetchStatus: O.a.NONE,
          },
          accountViolations: { data: { violations: [] }, error: null, fetchStatus: O.a.NONE },
          authenticationResult: { data: { errors: [], status: void 0 }, error: null, fetchStatus: O.a.NONE },
          badgeViolations: {
            data: {
              button_text: '',
              debadge_timestamp_ms: 0,
              violation_modal_title: '',
              violation_modal_desc: { entities: [], text: '' },
              violations: [],
            },
            error: null,
            fetchStatus: O.a.NONE,
          },
          documentFormats: { data: void 0, error: null, fetchStatus: O.a.NONE },
          documentIdProcess: { data: { errors: [], entity_id: void 0 }, error: null, fetchStatus: O.a.NONE },
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
          verifyAccount: { error: null, fetchStatus: O.a.NONE },
        })
      C.a.register(
        t()({}, L, function () {
          var E,
            I,
            e,
            T,
            N = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IE,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case k.REQUEST:
              return A()(
                A()({}, N),
                {},
                { access: A()(A()({}, N.access), {}, { fetchStatus: O.a.LOADING, error: null }) },
              )
            case k.SUCCESS:
              if (n.payload)
                return A()(
                  A()({}, N),
                  {},
                  {
                    access: {
                      data: A()(
                        A()({}, N.access.data),
                        {},
                        {
                          applicationSubmissionTimeInMs: n.payload.application_submission_time_in_ms,
                          decisionMadeTimeInMs: n.payload.decision_made_time_in_ms,
                          status: n.payload.status || S.a.DISABLED,
                        },
                      ),
                      error: null,
                      fetchStatus: O.a.LOADED,
                    },
                  },
                )
              break
            case k.FAILURE:
              return A()(
                A()({}, N),
                {},
                { access: A()(A()({}, N.access), {}, { error: n.payload, fetchStatus: O.a.FAILED }) },
              )
            case j.REQUEST:
              return A()(
                A()({}, N),
                {},
                {
                  accountEligibility: A()(A()({}, N.accountEligibility), {}, { fetchStatus: O.a.LOADING, error: null }),
                },
              )
            case j.SUCCESS:
              if (n.payload)
                return A()(
                  A()({}, N),
                  {},
                  { accountEligibility: { data: A()({}, n.payload), error: null, fetchStatus: O.a.LOADED } },
                )
              break
            case j.FAILURE:
              return A()(
                A()({}, N),
                {},
                {
                  accountEligibility: A()(
                    A()({}, N.accountEligibility),
                    {},
                    { error: n.payload, fetchStatus: O.a.FAILED },
                  ),
                },
              )
            case Z.REQUEST:
              return A()(
                A()({}, N),
                {},
                { accountViolations: A()(A()({}, N.accountViolations), {}, { fetchStatus: O.a.LOADING, error: null }) },
              )
            case Z.SUCCESS:
              if (n.payload)
                return A()(
                  A()({}, N),
                  {},
                  { accountViolations: { data: A()({}, n.payload), error: null, fetchStatus: O.a.LOADED } },
                )
              break
            case Z.FAILURE:
              return A()(
                A()({}, N),
                {},
                {
                  accountViolations: A()(
                    A()({}, N.accountViolations),
                    {},
                    { error: n.payload, fetchStatus: O.a.FAILED },
                  ),
                },
              )
            case z.REQUEST:
              return A()(
                A()({}, N),
                {},
                {
                  authenticationResult: A()(
                    A()({}, N.authenticationResult),
                    {},
                    { error: null, fetchStatus: O.a.LOADING },
                  ),
                },
              )
            case z.SUCCESS:
              return A()(
                A()({}, N),
                {},
                {
                  authenticationResult: {
                    data: A()(A()({}, N.authenticationResult.data), n.payload),
                    error: null,
                    fetchStatus: O.a.LOADED,
                  },
                },
              )
            case z.FAILURE:
              return A()(
                A()({}, N),
                {},
                {
                  authenticationResult: A()(
                    A()({}, N.authenticationResult),
                    {},
                    { error: n.payload, fetchStatus: O.a.FAILED },
                  ),
                },
              )
            case J.REQUEST:
              return A()(
                A()({}, N),
                {},
                { badgeViolations: A()(A()({}, N.badgeViolations), {}, { fetchStatus: O.a.LOADING }) },
              )
            case J.SUCCESS:
              if (n.payload)
                return A()(
                  A()({}, N),
                  {},
                  { badgeViolations: { data: A()({}, n.payload), error: null, fetchStatus: O.a.LOADED } },
                )
              break
            case J.FAILURE:
              return A()(
                A()({}, N),
                {},
                { badgeViolations: A()(A()({}, N.badgeViolations), {}, { error: n.payload, fetchStatus: O.a.FAILED }) },
              )
            case q.REQUEST:
              return A()(
                A()({}, N),
                {},
                { documentFormats: A()(A()({}, N.documentFormats), {}, { error: null, fetchStatus: O.a.LOADING }) },
              )
            case q.SUCCESS:
              if (n.payload)
                return A()(
                  A()({}, N),
                  {},
                  { documentFormats: { data: A()({}, n.payload), error: null, fetchStatus: O.a.LOADED } },
                )
              break
            case q.FAILURE:
              return A()(
                A()({}, N),
                {},
                { documentFormats: A()(A()({}, N.documentFormats), {}, { error: n.payload, fetchStatus: O.a.FAILED }) },
              )
            case X.REQUEST:
              return A()(A()({}, N), {}, { verifyAccount: { error: null, fetchStatus: O.a.LOADING } })
            case X.SUCCESS:
              var _
              return (
                n.payload && (_ = n.payload.survey_url),
                A()(A()({}, N), {}, { surveyUrl: _, verifyAccount: { error: null, fetchStatus: O.a.LOADED } })
              )
            case X.FAILURE:
              return A()(A()({}, N), {}, { verifyAccount: { error: n.payload, fetchStatus: O.a.FAILED } })
            case $.REQUEST:
              return A()(
                A()({}, N),
                {},
                { documentIdProcess: A()(A()({}, N.documentIdProcess), {}, { error: null, fetchStatus: O.a.LOADING }) },
              )
            case $.SUCCESS:
              return A()(
                A()({}, N),
                {},
                {
                  documentIdProcess: {
                    data: A()(A()({}, N.documentIdProcess.data), n.payload),
                    error: null,
                    fetchStatus: O.a.LOADED,
                  },
                },
              )
            case $.FAILURE:
              return A()(
                A()({}, N),
                {},
                {
                  documentIdProcess: A()(
                    A()({}, N.documentIdProcess),
                    {},
                    { error: n.payload, fetchStatus: O.a.FAILED },
                  ),
                },
              )
            case U:
              return A()(
                A()({}, N),
                {},
                {
                  formData: A()(
                    A()({}, N.formData),
                    {},
                    {
                      notabilityData: A()(
                        A()({}, N.formData.notabilityData),
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
            case l:
              return A()(
                A()({}, N),
                {},
                {
                  formData: A()(
                    A()({}, N.formData),
                    {},
                    {
                      notabilityData: A()(
                        A()({}, N.formData.notabilityData),
                        {},
                        { mainReferenceUrl: null === (I = n.payload) || void 0 === I ? void 0 : I.mainReferenceUrl },
                      ),
                    },
                  ),
                },
              )
            case D:
              return A()(
                A()({}, N),
                {},
                {
                  formData: A()(
                    A()({}, N.formData),
                    {},
                    {
                      notabilityData: A()(
                        A()({}, N.formData.notabilityData),
                        {},
                        { newsReferenceUrls: null === (e = n.payload) || void 0 === e ? void 0 : e.newsReferenceUrls },
                      ),
                    },
                  ),
                },
              )
            case s:
              return A()(
                A()({}, N),
                {},
                {
                  formData: A()(
                    A()({}, N.formData),
                    {},
                    {
                      notabilityData: A()(
                        A()({}, N.formData.notabilityData),
                        {},
                        {
                          publicReferenceUrl: null === (T = n.payload) || void 0 === T ? void 0 : T.publicReferenceUrl,
                        },
                      ),
                    },
                  ),
                },
              )
            case B:
              return A()(A()({}, N), {}, { backID: n.payload })
            case y:
              return A()(A()({}, N), {}, { frontID: n.payload })
            case W:
              if (n.payload)
                return A()(
                  A()({}, N),
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
              if (n.payload) return A()(A()({}, N), {}, { idType: n.payload.idType, idTypeName: n.payload.idTypeName })
              break
            case P:
              return A()(A()({}, N), {}, { backID: IE.backID, frontID: IE.frontID, isConfirmed: IE.isConfirmed })
            case G:
              var R = NI(N.stepsTaken),
                o = R.previousStep,
                a = R.remainingSteps
              return A()(
                A()({}, N),
                {},
                { currentStep: o, stepsTaken: r()(a), verifyAccount: { error: null, fetchStatus: O.a.NONE } },
              )
            case g:
              return A()(A()({}, N), {}, { isConfirmed: !N.isConfirmed })
            case M:
              return A()(A()({}, N), {}, { documentIdProcess: A()({}, IE.documentIdProcess) })
            case f:
              return A()(A()({}, N), {}, { authenticationResult: A()({}, IE.authenticationResult) })
            case H:
              if (n.payload)
                return A()(
                  A()({}, N),
                  {},
                  { currentStep: n.payload, stepsTaken: [].concat(r()(N.stepsTaken), [n.payload]) },
                )
              break
            case K:
              var i = NI(N.stepsTaken),
                C = i.previousStep,
                c = i.remainingSteps
              return A()(A()({}, N), {}, { currentStep: C, stepsTaken: r()(c) })
            case v:
              return A()(A()({}, N), {}, { formData: A()(A()({}, N.formData), {}, { notabilityCategory: n.payload }) })
            case p:
              return A()(
                A()({}, N),
                {},
                {
                  formData: A()(
                    A()({}, N.formData),
                    {},
                    {
                      notabilityCategory: IE.formData.notabilityCategory,
                      notabilitySubcategory: IE.formData.notabilitySubcategory,
                    },
                  ),
                },
              )
            case x:
              return A()(
                A()({}, N),
                {},
                { formData: A()(A()({}, N.formData), {}, { notabilityData: A()({}, n.payload) }) },
              )
            case b:
              return A()(
                A()({}, N),
                {},
                { formData: A()(A()({}, N.formData), {}, { notabilityData: IE.formData.notabilityData }) },
              )
            case w:
              return A()(
                A()({}, N),
                {},
                { formData: A()(A()({}, N.formData), {}, { notabilitySubcategory: n.payload }) },
              )
            case m:
              return A()(
                A()({}, N),
                {},
                {
                  backID: IE.backID,
                  frontID: IE.frontID,
                  isConfirmed: IE.isConfirmed,
                  idType: IE.idType,
                  idTypeName: IE.idTypeName,
                  formData: A()(
                    A()({}, N.formData),
                    {},
                    { authenticityType: n.payload, authenticityData: IE.formData.authenticityData },
                  ),
                },
              )
            case d:
              return A()(
                A()({}, N),
                {},
                { formData: A()(A()({}, N.formData), {}, { authenticityType: IE.formData.authenticityType }) },
              )
            case V:
              return A()(
                A()({}, N),
                {},
                { formData: A()(A()({}, N.formData), {}, { authenticityData: A()({}, n.payload) }) },
              )
            case F:
              return A()(
                A()({}, N),
                {},
                { formData: A()(A()({}, N.formData), {}, { authenticityData: IE.formData.authenticityData }) },
              )
            case Q:
              var u = N.currentStep.toString()
              return A()(
                A()({}, N),
                {},
                { formHistory: A()(A()({}, N.formHistory), {}, t()({}, u, A()({}, n.payload))) },
              )
            case Y:
              return IE
            default:
              return N
          }
          return N
        }),
      )
      var eE = function (E) {
          return E[L].access.data
        },
        TE = function (E) {
          return E[L].access.fetchStatus
        },
        NE = function (E) {
          return E[L].accountEligibility.data
        },
        nE = function (E) {
          return E[L].accountEligibility.fetchStatus
        },
        tE = function (E) {
          return E[L].accountViolations.data
        },
        _E = function (E) {
          return E[L].accountViolations.fetchStatus
        },
        rE = function (E) {
          return E[L].authenticationResult.data.errors || []
        },
        RE = function (E) {
          return E[L].authenticationResult.data.status
        },
        AE = function (E) {
          return E[L].formData.authenticityType
        },
        oE = function (E) {
          return E[L].formData.authenticityData
        },
        aE = function (E) {
          return E[L].backID
        },
        iE = function (E) {
          return E[L].badgeViolations.data
        },
        OE = function (E) {
          return E[L].badgeViolations.fetchStatus
        },
        CE = function (E) {
          return E[L].isConfirmed
        },
        cE = function (E) {
          return E[L].currentStep
        },
        uE = function (E) {
          var I = cE(E)
          return E[L].formHistory[I] || void 0
        },
        SE = function (E) {
          return E[L].documentFormats.data
        },
        LE = function (E) {
          return E[L].documentFormats.fetchStatus
        },
        UE = function (E) {
          return E[L].documentIdProcess.data.entity_id
        },
        lE = function (E) {
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
        ME = function (E) {
          return E[L].idType
        },
        YE = function (E) {
          return E[L].idTypeName
        },
        PE = function (E) {
          return E[L].formData.notabilityCategory
        },
        pE = function (E) {
          var I = E[L].formData,
            e = I.notabilityCategory,
            T = I.notabilityData,
            N = I.notabilitySubcategory
          switch (e) {
            case S.l.NEWS:
              return null == T ? void 0 : T.newsType
            default:
              return N
          }
        },
        bE = function (E) {
          return E[L].formData.notabilityData
        },
        GE = function (E) {
          return E[L].surveyUrl
        },
        VE = function (E) {
          return E[L].verifyAccount.fetchStatus
        },
        mE = function (E) {
          var I = TE(E),
            e = nE(E),
            T = _E(E),
            N = Object(c.selectFetchStatus)(E),
            n = LE(E)
          return [I, e, T, N, n].includes(O.a.FAILED)
            ? O.a.FAILED
            : (function (E) {
                return E.includes(O.a.LOADING)
              })([I, e, T, N, n])
            ? O.a.LOADING
            : O.a.LOADED
        },
        BE = function () {
          return function (E, I, e) {
            e.api
            var T = I(),
              N = TE(T)
            return N !== O.a.LOADING && N !== O.a.LOADED ? E(yE()) : Promise.resolve()
          }
        },
        yE = function () {
          return function (E, I, e) {
            var T = e.api
            return Object(o.b)(E, { request: T.AccountVerification.fetchAccess })({
              actionTypes: k,
              context: 'FETCH_ACCESS',
            })
          }
        },
        WE = function () {
          return function (E, I, e) {
            e.api
            var T = I(),
              N = nE(T)
            return N !== O.a.LOADING && N !== O.a.LOADED
              ? E(function (E, I, e) {
                  var T = e.api
                  return Object(o.b)(E, { request: T.AccountVerification.fetchAccountEligibility })({
                    actionTypes: j,
                    context: 'FETCH_ACCOUNT_ELIGIBILITY',
                  })
                })
              : Promise.resolve()
          }
        },
        hE = function () {
          return function (E, I, e) {
            e.api
            var T = I(),
              N = _E(T)
            return N !== O.a.LOADING && N !== O.a.LOADED
              ? E(function (E, I, e) {
                  var T = e.api
                  return Object(o.b)(E, { request: T.AccountVerification.fetchAccountViolations })({
                    actionTypes: Z,
                    context: 'FETCH_ACCOUNT_VIOLATIONS',
                  })
                })
              : Promise.resolve()
          }
        },
        HE = function () {
          return function (E, I, e) {
            e.api
            return (function (E) {
              return E[L].authenticationResult.fetchStatus
            })(I()) !== O.a.LOADING
              ? E(function (E, I, e) {
                  var T = e.api
                  return Object(o.b)(E, { request: T.AccountVerification.fetchAuthenticationResult })({
                    actionTypes: z,
                    context: 'FETCH_AUTHENTICATION_RESULT',
                  })
                })
              : Promise.resolve()
          }
        },
        vE = function () {
          return function (E, I, e) {
            e.api
            var T = I(),
              N = LE(T)
            return N !== O.a.LOADING && N !== O.a.LOADED
              ? E(function (E, I, e) {
                  var T = e.api
                  return Object(o.b)(E, { request: T.AccountVerification.fetchDocumentFormats })({
                    actionTypes: q,
                    context: 'FETCH_DOCUMENT_FORMATS',
                  })
                })
              : Promise.resolve()
          }
        },
        xE = function (E) {
          return function (I, e, T) {
            T.api
            I({ type: B, payload: E })
          }
        },
        wE = function (E) {
          return function (I, e, T) {
            T.api
            I({ type: y, payload: E })
          }
        },
        KE = function (E, I) {
          return function (e, T, N) {
            N.api
            e({ type: W, payload: { countryCode: E, countryName: I } })
          }
        },
        gE = function (E, I) {
          return function (e, T, N) {
            N.api
            e({ type: h, payload: { idType: E, idTypeName: I } })
          }
        },
        QE = function () {
          return function (E, I, e) {
            e.api
            E({ type: P })
          }
        },
        kE = function () {
          return function (E, I, e) {
            e.api
            E({ type: M })
          }
        },
        jE = function () {
          return function (E, I, e) {
            e.api
            E({ type: G })
          }
        },
        ZE = function () {
          return function (E, I, e) {
            var T = e.api
            return Object(o.b)(E, { request: T.AccountVerification.fetchBadgeViolations })({
              actionTypes: J,
              context: 'FETCH_BADGE_VIOLATIONS',
            })
          }
        },
        zE = function () {
          return function (E, I, e) {
            e.api
            E({ type: g })
          }
        },
        JE = function () {
          return function (E, I, e) {
            e.api
            E({ type: f })
          }
        },
        qE = function (E) {
          return function (I, e, T) {
            T.api
            I({ payload: E || S.g[cE(e())].next, type: H })
          }
        },
        XE = function () {
          return function (E, I, e) {
            e.api
            E({ type: K })
          }
        },
        $E = function () {
          return function (E, I, e) {
            e.api
            E({ type: Y })
          }
        },
        EI = function (E) {
          return function (I, e, T) {
            T.api
            I({ payload: 'string' == typeof E ? { radioData: E } : { inputData: E }, type: Q })
          }
        },
        II = function () {
          return function (E, I, e) {
            var T,
              N,
              n = e.api,
              t = I(),
              _ = AE(t) || void 0,
              r = oE(t) || void 0,
              R = PE(t) || void 0,
              a = bE(t) || {},
              i = pE(t) || void 0,
              O = i && R !== S.l.NEWS,
              C = { authenticity_type: _ }
            null != r &&
              r.siteUrl &&
              (C = A()(
                A()({}, C),
                {},
                { site_url: null == r || null === (T = r.siteUrl) || void 0 === T ? void 0 : T[0] },
              ))
            null != r &&
              r.email &&
              (C = A()(
                A()({}, C),
                {},
                { verified_email: null == r || null === (N = r.email) || void 0 === N ? void 0 : N[0] },
              ))
            var c,
              u,
              L,
              U,
              l,
              D,
              s,
              f,
              F,
              d,
              M,
              Y = { category: R }
            ;(O && (Y = A()(A()({}, Y), {}, { notability_subcategory: i })),
            null != a &&
              a.articleReferenceUrls &&
              (Y = A()(A()({}, Y), {}, { article_reference_urls: null == a ? void 0 : a.articleReferenceUrls })),
            null != a && a.authorReferenceUrl) &&
              (Y = A()(
                A()({}, Y),
                {},
                {
                  author_reference_url:
                    null == a || null === (c = a.authorReferenceUrl) || void 0 === c ? void 0 : c[0],
                },
              ))
            null != a &&
              a.googleTrendsReferenceUrl &&
              (Y = A()(
                A()({}, Y),
                {},
                {
                  google_trends_reference_url:
                    null == a || null === (u = a.googleTrendsReferenceUrl) || void 0 === u ? void 0 : u[0],
                },
              ))
            null != a &&
              a.hashtagReferenceUrl &&
              (Y = A()(
                A()({}, Y),
                {},
                {
                  hashtag_reference_url:
                    null == a || null === (L = a.hashtagReferenceUrl) || void 0 === L ? void 0 : L[0],
                },
              ))
            null != a &&
              a.imdbReferenceUrl &&
              (Y = A()(
                A()({}, Y),
                {},
                { imdb_reference_url: null == a || null === (U = a.imdbReferenceUrl) || void 0 === U ? void 0 : U[0] },
              ))
            null != a &&
              a.leadershipReferenceUrl &&
              (Y = A()(
                A()({}, Y),
                {},
                {
                  leadership_reference_url:
                    null == a || null === (l = a.leadershipReferenceUrl) || void 0 === l ? void 0 : l[0],
                },
              ))
            null != a &&
              a.mainReferenceUrl &&
              (Y = A()(
                A()({}, Y),
                {},
                { main_reference_url: null == a || null === (D = a.mainReferenceUrl) || void 0 === D ? void 0 : D[0] },
              ))
            ;(null != a &&
              a.newsReferenceUrls &&
              (Y = A()(A()({}, Y), {}, { news_reference_urls: null == a ? void 0 : a.newsReferenceUrls })),
            null != a && a.newsType && (Y = A()(A()({}, Y), {}, { news_type: null == a ? void 0 : a.newsType })),
            null != a && a.publicReferenceUrl) &&
              (Y = A()(
                A()({}, Y),
                {},
                {
                  public_reference_url:
                    null == a || null === (s = a.publicReferenceUrl) || void 0 === s ? void 0 : s[0],
                },
              ))
            null != a &&
              a.publicationReferenceUrl &&
              (Y = A()(
                A()({}, Y),
                {},
                {
                  publication_reference_url:
                    null == a || null === (f = a.publicationReferenceUrl) || void 0 === f ? void 0 : f[0],
                },
              ))
            null != a &&
              a.stockReferenceUrl &&
              (Y = A()(
                A()({}, Y),
                {},
                {
                  stock_reference_url: null == a || null === (F = a.stockReferenceUrl) || void 0 === F ? void 0 : F[0],
                },
              ))
            null != a &&
              a.teamReferenceUrl &&
              (Y = A()(
                A()({}, Y),
                {},
                { team_reference_url: null == a || null === (d = a.teamReferenceUrl) || void 0 === d ? void 0 : d[0] },
              ))
            null != a &&
              a.wikipediaReferenceUrl &&
              (Y = A()(
                A()({}, Y),
                {},
                {
                  wikipedia_reference_url:
                    null == a || null === (M = a.wikipediaReferenceUrl) || void 0 === M ? void 0 : M[0],
                },
              ))
            var P = { authenticity_claim: C, notability_claim: Y }
            return Object(o.b)(E, { params: P, request: n.AccountVerification.verifyAccount })({
              actionTypes: X,
              context: 'VERIFY_ACCOUNT',
            })
          }
        },
        eI = function () {
          return function (E, I, e) {
            var T,
              n,
              t = e.api,
              _ = I(),
              r = aE(_),
              R = fE(_),
              A = ME(_),
              a = FE(_)
            if (r) {
              var i,
                O = Object(u.k)(_, r),
                C = N()(O, 1)[0]
              n = null == C || null === (i = C.originalMediaFile) || void 0 === i ? void 0 : i.fileHandle
            }
            if (R) {
              var c,
                S = Object(u.k)(_, R),
                L = N()(S, 1)[0]
              T = null == L || null === (c = L.originalMediaFile) || void 0 === c ? void 0 : c.fileHandle
            }
            var U = { backImage: n, country: a, frontImage: T, idType: A }
            return Object(o.b)(E, { params: U, request: t.AccountVerification.verifyIdDocument })({
              actionTypes: $,
              context: 'VERIFY_ID_DOCUMENT',
            })
          }
        },
        TI = function (E, I) {
          return function (e, T, N) {
            N.api
            var n,
              t = T(),
              _ = null === (n = bE(t)) || void 0 === n ? void 0 : n.newsType,
              r = NE(t),
              R = r.followers_eligible,
              o = r.mentions_eligible
            switch (E) {
              case S.h.NOTABILITY_CATEGORY_SELECT:
                e({ payload: I, type: v })
                break
              case S.h.ACTIVIST_SUBCATEGORY:
              case S.h.COMPANY_SUBCATEGORY:
              case S.h.ENTERTAINMENT_QUALIFICATIONS:
              case S.h.GAMING_SUBCATEGORY:
              case S.h.GOVERNMENT_SUBCATEGORY:
              case S.h.INFLUENCER_SUBCATEGORY:
              case S.h.SPORTS_SUBCATEGORY:
                'string' == typeof I &&
                  (e({ payload: S.o[I], type: v }),
                  S.o[I] === S.l.NEWS ? e({ payload: { newsType: I }, type: x }) : e({ payload: I, type: w }))
                break
              case S.h.NEWS_QUALIFICATIONS:
                e({ payload: { newsType: I }, type: x })
                break
              case S.h.ACTIVIST_QUALIFICATIONS:
                e({ payload: S.b.ACTIVIST, type: w })
                break
              case S.h.ACTIVIST_GOOGLE_TRENDS:
              case S.h.ACTIVIST_LEADERSHIP:
              case S.h.ACTIVIST_NEWS:
              case S.h.ACTIVIST_WIKIPEDIA:
              case S.h.COMPANY_GOOGLE_TRENDS:
              case S.h.COMPANY_INDIVIDUAL_LEADERSHIP:
              case S.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE:
              case S.h.COMPANY_STOCK_EXCHANGE:
              case S.h.COMPANY_WIKIPEDIA:
              case S.h.CONTENT_CREATOR_GOOGLE_TRENDS:
              case S.h.CONTENT_CREATOR_NEWS:
              case S.h.CONTENT_CREATOR_WIKIPEDIA:
              case S.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS:
              case S.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE:
              case S.h.ENTERTAINMENT_COMPANY_WIKIPEDIA:
              case S.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL:
              case S.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS:
              case S.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS:
              case S.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE:
              case S.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA:
              case S.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS:
              case S.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL:
              case S.h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS:
              case S.h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS:
              case S.h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS:
              case S.h.INFLUENCER_GOOGLE_TRENDS:
              case S.h.INFLUENCER_NEWS:
              case S.h.INFLUENCER_WIKIPEDIA:
              case S.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS:
              case S.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL:
              case S.h.SPORTS_ENTITY_GOOGLE_TRENDS:
              case S.h.SPORTS_ENTITY_STOCK_REFERENCE:
              case S.h.SPORTS_ENTITY_WEBSITE:
              case S.h.SPORTS_ENTITY_WIKIPEDIA:
                e({ payload: I, type: x })
                break
              case S.h.COMPANY_NEWS_REFERENCE:
              case S.h.SPORTS_ENTITY_NEWS_REFERENCE:
                e(R ? { payload: I, type: x } : { payload: I, type: D })
                break
              case S.h.CREATOR_PROFILE:
              case S.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL:
                e({ payload: I, type: l })
                break
              case S.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE:
              case S.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE:
                e(R || o ? { payload: I, type: x } : { payload: I, type: D })
                break
              case S.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL:
              case S.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL:
              case S.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL:
                e({ payload: I, type: s })
                break
              case S.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS:
              case S.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL:
              case S.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL:
              case S.h.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL:
              case S.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL:
              case S.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL:
              case S.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                e({ payload: A()(A()({}, I), {}, { newsType: _ }), type: x })
                break
              case S.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                e(
                  R || o
                    ? { payload: A()(A()({}, I), {}, { newsType: _ }), type: x }
                    : { payload: A()({}, I), type: U },
                )
                break
              case S.h.AUTHENTICITY_TYPE_SELECT:
                e({ payload: I, type: m })
                break
              case S.h.EMAIL_VERIFICATION:
                e({ payload: { email: [I] }, type: V })
                break
              case S.h.SITE_VERIFICATION:
                e({ payload: I, type: V })
                break
              default:
                return
            }
          }
        },
        NI = function E(I) {
          var e = I.slice(-2),
            T = N()(e, 1)[0],
            n = void 0 === T ? EE : T,
            t = [EE].concat(r()(I.slice(1, -1)))
          return n === S.h.INTAKE_LOADING ? E(t) : { previousStep: n, remainingSteps: t }
        }
    },
    iD2S: function (E, I) {
      E.exports = function E(I) {
        return (
          Object.freeze(I),
          Object.getOwnPropertyNames(I).forEach(function (e) {
            !I.hasOwnProperty(e) ||
              null === I[e] ||
              ('object' != typeof I[e] && 'function' != typeof I[e]) ||
              Object.isFrozen(I[e]) ||
              E(I[e])
          }),
          I
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
