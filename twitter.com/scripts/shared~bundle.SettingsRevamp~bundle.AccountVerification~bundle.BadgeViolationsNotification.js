;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    QJRq: function (E, I, e) {
      'use strict'
      e.d(I, 's', function () {
        return r
      }),
        e.d(I, 'r', function () {
          return R
        }),
        e.d(I, 'a', function () {
          return o
        }),
        e.d(I, 'd', function () {
          return i
        }),
        e.d(I, 'c', function () {
          return a
        }),
        e.d(I, 'o', function () {
          return A
        }),
        e.d(I, 'l', function () {
          return c
        }),
        e.d(I, 'm', function () {
          return O
        }),
        e.d(I, 'b', function () {
          return C
        }),
        e.d(I, 'e', function () {
          return u
        }),
        e.d(I, 'f', function () {
          return S
        }),
        e.d(I, 'i', function () {
          return L
        }),
        e.d(I, 'j', function () {
          return l
        }),
        e.d(I, 'k', function () {
          return U
        }),
        e.d(I, 'q', function () {
          return D
        }),
        e.d(I, 'n', function () {
          return s
        }),
        e.d(I, 'p', function () {
          return f
        }),
        e.d(I, 'h', function () {
          return F
        }),
        e.d(I, 'g', function () {
          return d
        })
      var T,
        n = e('KEM+'),
        t = e.n(n),
        N = e('yiKp'),
        _ = e.n(N),
        r = (e('yH/f'), Object.freeze({ IN_COMPLIANCE: 'in_compliance', OUT_OF_COMPLIANCE: 'out_of_compliance' })),
        R = Object.freeze({ PROFILE_COMPLETION: 'profile_completion', ACCOUNT_SECURITY: 'account_security' }),
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
        s = Object.freeze(_()(_()(_()(_()(_()(_()(_()({}, C), u), S), L), l), U), D)),
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
        d = Object.freeze(
          ((T = {}),
          t()(T, F.LANDING_PAGE, { next: F.NOTABILITY_CATEGORY_SELECT, scribeComponent: f.LANDING_PAGE }),
          t()(T, F.NOTABILITY_CATEGORY_SELECT, { next: null, scribeComponent: f.NOTABILITY_CATEGORY }),
          t()(T, F.ACTIVIST_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.ACTIVIST_GOOGLE_TRENDS, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.ACTIVIST_LEADERSHIP, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.ACTIVIST_NEWS, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.ACTIVIST_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.ACTIVIST_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          t()(T, F.ACTIVIST_WIKIPEDIA, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.COMPANY_SUBCATEGORY, {
            next: F.COMPANY_NOTABILITY_METHOD,
            scribeComponent: f.NOTABILITY_SUBCATEGORY,
          }),
          t()(T, F.COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.COMPANY_WIKIPEDIA, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.COMPANY_STOCK_EXCHANGE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.COMPANY_NEWS_REFERENCE, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: F.COMPANY_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          t()(T, F.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.COMPANY_INDIVIDUAL_LEADERSHIP, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.COMPANY_INDIVIDUAL_NEWS_REFERENCE, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.CREATOR_PROFILE, { next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, scribeComponent: null }),
          t()(T, F.CONTENT_CREATOR_GOOGLE_TRENDS, { next: F.CREATOR_PROFILE, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.CONTENT_CREATOR_NEWS, { next: F.CREATOR_PROFILE, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.CONTENT_CREATOR_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.CONTENT_CREATOR_WIKIPEDIA, { next: F.CREATOR_PROFILE, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.ENTERTAINMENT_COMPANY_STOCK_REFERENCE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.ENTERTAINMENT_COMPANY_WIKIPEDIA, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
            next: F.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
            next: F.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS, {
            next: null,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, {
            next: null,
            scribeComponent: f.NOTABILITY_METHOD,
          }),
          t()(T, F.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE, {
            next: null,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA, {
            next: null,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.ENTERTAINMENT_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          t()(T, F.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
            next: F.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          t()(T, F.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
            next: F.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
            next: F.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          t()(T, F.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
            next: F.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
            next: F.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          t()(T, F.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
            next: F.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM,
            scribeComponent: null,
          }),
          t()(T, F.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
            next: F.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
            next: F.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS,
            scribeComponent: null,
          }),
          t()(T, F.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.GOVERNMENT_SUBCATEGORY, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          t()(T, F.INFLUENCER_GOOGLE_TRENDS, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.INFLUENCER_NEWS, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.INFLUENCER_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.INFLUENCER_QUALIFICATIONS_INELIGIBLE, { next: null, scribeComponent: null }),
          t()(T, F.INFLUENCER_SUBCATEGORY, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          t()(T, F.INFLUENCER_WIKIPEDIA, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.NEWS_CREDIBILITY_PUBLICATION_REFERENCE_URL, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.NEWS_CREDIBILITY_STOCK_REFERENCE_URL, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: F.NEWS_NOTABILITY_CRITERIA_CONFIRMATION,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, {
            next: F.NEWS_JOURNALIST_QUALIFICATIONS,
            scribeComponent: null,
          }),
          t()(T, F.NEWS_JOURNALIST_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, { next: F.AUTHENTICITY_TYPE_SELECT, scribeComponent: null }),
          t()(T, F.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION, {
            next: F.NEWS_ORGANIZATION_QUALIFICATIONS,
            scribeComponent: null,
          }),
          t()(T, F.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, {
            next: F.NEWS_JOURNALIST_CRITERIA_CONFIRMATION,
            scribeComponent: null,
          }),
          t()(T, F.NEWS_ORGANIZATION_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.NEWS_QUALIFICATIONS, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          t()(T, F.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.GAMING_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: F.GAMING_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          t()(T, F.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.GAMING_INDIVIDUAL_INELIGIBLE, { next: null, scribeComponent: null }),
          t()(T, F.SPORTS_ENTITY_GOOGLE_TRENDS, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.SPORTS_ENTITY_NEWS_REFERENCE, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.SPORTS_ENTITY_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.SPORTS_ENTITY_STOCK_REFERENCE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.SPORTS_ENTITY_WEBSITE, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.SPORTS_ENTITY_WIKIPEDIA, { next: null, scribeComponent: f.NOTABILITY_INPUT }),
          t()(T, F.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
            next: F.AUTHENTICITY_TYPE_SELECT,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, { next: null, scribeComponent: f.NOTABILITY_METHOD }),
          t()(T, F.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, {
            next: F.SPORTS_INDIVIDUAL_NOTABILITY_METHOD,
            scribeComponent: null,
          }),
          t()(T, F.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
            next: F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL,
            scribeComponent: f.NOTABILITY_INPUT,
          }),
          t()(T, F.SPORTS_SUBCATEGORY, { next: null, scribeComponent: f.NOTABILITY_SUBCATEGORY }),
          t()(T, F.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, { next: null, scribeComponent: f.ADD_WEBSITE }),
          t()(T, F.WEBSITE_REFERENCE_CONFIRM_PROCEED, { next: F.REVIEW_SUBMIT, scribeComponent: f.ADD_WEBSITE }),
          t()(T, F.AUTHENTICITY_TYPE_SELECT, { next: null, scribeComponent: f.AUTHENTICITY_TYPE }),
          t()(T, F.INTAKE_TYPE_SELECT, { next: F.INTAKE_UPLOAD, scribeComponent: null }),
          t()(T, F.ID_COUNTRY_SELECT, { next: F.INTAKE_TYPE_SELECT, scribeComponent: null }),
          t()(T, F.ID_TYPE_SELECT, { next: F.INTAKE_TYPE_SELECT, scribeComponent: null }),
          t()(T, F.INTAKE_UPLOAD, { next: F.INTAKE_LOADING, scribeComponent: f.ID_UPLOAD }),
          t()(T, F.INTAKE_LOADING, { next: F.REVIEW_SUBMIT, scribeComponent: f.ID_UPLOAD }),
          t()(T, F.EMAIL_VERIFICATION, { next: F.REVIEW_SUBMIT, scribeComponent: f.ADD_EMAIL }),
          t()(T, F.SITE_VERIFICATION, { next: F.WEBSITE_REFERENCE_CONFIRM_PROCEED, scribeComponent: null }),
          t()(T, F.REVIEW_SUBMIT, { next: F.THANK_YOU, scribeComponent: f.REVIEW_SUBMIT }),
          t()(T, F.THANK_YOU, { next: null, scribeComponent: f.THANK_YOU }),
          t()(T, F.TEST_INPUT, { next: F.TEST_RADIO, scribeComponent: null }),
          t()(T, F.TEST_PIVOT, { next: F.THANK_YOU, scribeComponent: null }),
          t()(T, F.TEST_RADIO, { next: F.THANK_YOU, scribeComponent: null }),
          T),
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
          return nE
        }),
        e.d(I, 'p', function () {
          return NE
        }),
        e.d(I, 'q', function () {
          return rE
        }),
        e.d(I, 'r', function () {
          return RE
        }),
        e.d(I, 't', function () {
          return oE
        }),
        e.d(I, 's', function () {
          return iE
        }),
        e.d(I, 'u', function () {
          return aE
        }),
        e.d(I, 'v', function () {
          return AE
        }),
        e.d(I, 'w', function () {
          return cE
        }),
        e.d(I, 'x', function () {
          return OE
        }),
        e.d(I, 'z', function () {
          return CE
        }),
        e.d(I, 'y', function () {
          return uE
        }),
        e.d(I, 'A', function () {
          return SE
        }),
        e.d(I, 'B', function () {
          return lE
        }),
        e.d(I, 'E', function () {
          return UE
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
        n = e.n(T),
        t = e('KEM+'),
        N = e.n(t),
        _ = e('RhWx'),
        r = e.n(_),
        R = e('yiKp'),
        o = e.n(R),
        i =
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
        A = e.n(a),
        c = e('kGix'),
        O = e('Ssj5'),
        C = e('vEo5'),
        u = e('AspN'),
        S = e('QJRq'),
        L = 'accountVerification',
        l = 'rweb/accountVerification/APPEND_NOTABILITY_ARTICLE_DATA',
        U = 'rweb/accountVerification/APPEND_NOTABILITY_MAIN_REFERENCE_DATA',
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
        IE = A()({
          access: {
            data: { applicationSubmissionTimeInMs: void 0, decisionMadeTimeInMs: void 0, status: S.a.DISABLED },
            error: null,
            fetchStatus: c.a.NONE,
          },
          accountEligibility: {
            data: { followers_eligible: !1, mentions_eligible: !1 },
            error: null,
            fetchStatus: c.a.NONE,
          },
          accountViolations: { data: { violations: [] }, error: null, fetchStatus: c.a.NONE },
          authenticationResult: { data: { errors: [], status: void 0 }, error: null, fetchStatus: c.a.NONE },
          badgeViolations: {
            data: {
              button_text: '',
              debadge_timestamp_ms: 0,
              violation_modal_title: '',
              violation_modal_desc: { entities: [], text: '' },
              violations: [],
            },
            error: null,
            fetchStatus: c.a.NONE,
          },
          documentFormats: { data: void 0, error: null, fetchStatus: c.a.NONE },
          documentIdProcess: { data: { errors: [], entity_id: void 0 }, error: null, fetchStatus: c.a.NONE },
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
          verifyAccount: { error: null, fetchStatus: c.a.NONE },
        })
      O.a.register(
        N()({}, L, function () {
          var E,
            I,
            e,
            T,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IE,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case k.REQUEST:
              return o()(
                o()({}, n),
                {},
                { access: o()(o()({}, n.access), {}, { fetchStatus: c.a.LOADING, error: null }) },
              )
            case k.SUCCESS:
              if (t.payload)
                return o()(
                  o()({}, n),
                  {},
                  {
                    access: {
                      data: o()(
                        o()({}, n.access.data),
                        {},
                        {
                          applicationSubmissionTimeInMs: t.payload.application_submission_time_in_ms,
                          decisionMadeTimeInMs: t.payload.decision_made_time_in_ms,
                          status: t.payload.status || S.a.DISABLED,
                        },
                      ),
                      error: null,
                      fetchStatus: c.a.LOADED,
                    },
                  },
                )
              break
            case k.FAILURE:
              return o()(
                o()({}, n),
                {},
                { access: o()(o()({}, n.access), {}, { error: t.payload, fetchStatus: c.a.FAILED }) },
              )
            case j.REQUEST:
              return o()(
                o()({}, n),
                {},
                {
                  accountEligibility: o()(o()({}, n.accountEligibility), {}, { fetchStatus: c.a.LOADING, error: null }),
                },
              )
            case j.SUCCESS:
              if (t.payload)
                return o()(
                  o()({}, n),
                  {},
                  { accountEligibility: { data: o()({}, t.payload), error: null, fetchStatus: c.a.LOADED } },
                )
              break
            case j.FAILURE:
              return o()(
                o()({}, n),
                {},
                {
                  accountEligibility: o()(
                    o()({}, n.accountEligibility),
                    {},
                    { error: t.payload, fetchStatus: c.a.FAILED },
                  ),
                },
              )
            case Z.REQUEST:
              return o()(
                o()({}, n),
                {},
                { accountViolations: o()(o()({}, n.accountViolations), {}, { fetchStatus: c.a.LOADING, error: null }) },
              )
            case Z.SUCCESS:
              if (t.payload)
                return o()(
                  o()({}, n),
                  {},
                  { accountViolations: { data: o()({}, t.payload), error: null, fetchStatus: c.a.LOADED } },
                )
              break
            case Z.FAILURE:
              return o()(
                o()({}, n),
                {},
                {
                  accountViolations: o()(
                    o()({}, n.accountViolations),
                    {},
                    { error: t.payload, fetchStatus: c.a.FAILED },
                  ),
                },
              )
            case z.REQUEST:
              return o()(
                o()({}, n),
                {},
                {
                  authenticationResult: o()(
                    o()({}, n.authenticationResult),
                    {},
                    { error: null, fetchStatus: c.a.LOADING },
                  ),
                },
              )
            case z.SUCCESS:
              return o()(
                o()({}, n),
                {},
                {
                  authenticationResult: {
                    data: o()(o()({}, n.authenticationResult.data), t.payload),
                    error: null,
                    fetchStatus: c.a.LOADED,
                  },
                },
              )
            case z.FAILURE:
              return o()(
                o()({}, n),
                {},
                {
                  authenticationResult: o()(
                    o()({}, n.authenticationResult),
                    {},
                    { error: t.payload, fetchStatus: c.a.FAILED },
                  ),
                },
              )
            case J.REQUEST:
              return o()(
                o()({}, n),
                {},
                { badgeViolations: o()(o()({}, n.badgeViolations), {}, { fetchStatus: c.a.LOADING }) },
              )
            case J.SUCCESS:
              if (t.payload)
                return o()(
                  o()({}, n),
                  {},
                  { badgeViolations: { data: o()({}, t.payload), error: null, fetchStatus: c.a.LOADED } },
                )
              break
            case J.FAILURE:
              return o()(
                o()({}, n),
                {},
                { badgeViolations: o()(o()({}, n.badgeViolations), {}, { error: t.payload, fetchStatus: c.a.FAILED }) },
              )
            case q.REQUEST:
              return o()(
                o()({}, n),
                {},
                { documentFormats: o()(o()({}, n.documentFormats), {}, { error: null, fetchStatus: c.a.LOADING }) },
              )
            case q.SUCCESS:
              if (t.payload)
                return o()(
                  o()({}, n),
                  {},
                  { documentFormats: { data: o()({}, t.payload), error: null, fetchStatus: c.a.LOADED } },
                )
              break
            case q.FAILURE:
              return o()(
                o()({}, n),
                {},
                { documentFormats: o()(o()({}, n.documentFormats), {}, { error: t.payload, fetchStatus: c.a.FAILED }) },
              )
            case X.REQUEST:
              return o()(o()({}, n), {}, { verifyAccount: { error: null, fetchStatus: c.a.LOADING } })
            case X.SUCCESS:
              var _
              return (
                t.payload && (_ = t.payload.survey_url),
                o()(o()({}, n), {}, { surveyUrl: _, verifyAccount: { error: null, fetchStatus: c.a.LOADED } })
              )
            case X.FAILURE:
              return o()(o()({}, n), {}, { verifyAccount: { error: t.payload, fetchStatus: c.a.FAILED } })
            case $.REQUEST:
              return o()(
                o()({}, n),
                {},
                { documentIdProcess: o()(o()({}, n.documentIdProcess), {}, { error: null, fetchStatus: c.a.LOADING }) },
              )
            case $.SUCCESS:
              return o()(
                o()({}, n),
                {},
                {
                  documentIdProcess: {
                    data: o()(o()({}, n.documentIdProcess.data), t.payload),
                    error: null,
                    fetchStatus: c.a.LOADED,
                  },
                },
              )
            case $.FAILURE:
              return o()(
                o()({}, n),
                {},
                {
                  documentIdProcess: o()(
                    o()({}, n.documentIdProcess),
                    {},
                    { error: t.payload, fetchStatus: c.a.FAILED },
                  ),
                },
              )
            case l:
              return o()(
                o()({}, n),
                {},
                {
                  formData: o()(
                    o()({}, n.formData),
                    {},
                    {
                      notabilityData: o()(
                        o()({}, n.formData.notabilityData),
                        {},
                        {
                          articleReferenceUrls:
                            null === (E = t.payload) || void 0 === E ? void 0 : E.articleReferenceUrls,
                        },
                      ),
                    },
                  ),
                },
              )
            case U:
              return o()(
                o()({}, n),
                {},
                {
                  formData: o()(
                    o()({}, n.formData),
                    {},
                    {
                      notabilityData: o()(
                        o()({}, n.formData.notabilityData),
                        {},
                        { mainReferenceUrl: null === (I = t.payload) || void 0 === I ? void 0 : I.mainReferenceUrl },
                      ),
                    },
                  ),
                },
              )
            case D:
              return o()(
                o()({}, n),
                {},
                {
                  formData: o()(
                    o()({}, n.formData),
                    {},
                    {
                      notabilityData: o()(
                        o()({}, n.formData.notabilityData),
                        {},
                        { newsReferenceUrls: null === (e = t.payload) || void 0 === e ? void 0 : e.newsReferenceUrls },
                      ),
                    },
                  ),
                },
              )
            case s:
              return o()(
                o()({}, n),
                {},
                {
                  formData: o()(
                    o()({}, n.formData),
                    {},
                    {
                      notabilityData: o()(
                        o()({}, n.formData.notabilityData),
                        {},
                        {
                          publicReferenceUrl: null === (T = t.payload) || void 0 === T ? void 0 : T.publicReferenceUrl,
                        },
                      ),
                    },
                  ),
                },
              )
            case B:
              return o()(o()({}, n), {}, { backID: t.payload })
            case y:
              return o()(o()({}, n), {}, { frontID: t.payload })
            case W:
              if (t.payload)
                return o()(
                  o()({}, n),
                  {},
                  {
                    idCountry: t.payload.countryCode,
                    idCountryName: t.payload.countryName,
                    idType: void 0,
                    idTypeName: void 0,
                  },
                )
              break
            case h:
              if (t.payload) return o()(o()({}, n), {}, { idType: t.payload.idType, idTypeName: t.payload.idTypeName })
              break
            case P:
              return o()(o()({}, n), {}, { backID: IE.backID, frontID: IE.frontID, isConfirmed: IE.isConfirmed })
            case G:
              var R = nI(n.stepsTaken),
                i = R.previousStep,
                a = R.remainingSteps
              return o()(
                o()({}, n),
                {},
                { currentStep: i, stepsTaken: r()(a), verifyAccount: { error: null, fetchStatus: c.a.NONE } },
              )
            case g:
              return o()(o()({}, n), {}, { isConfirmed: !n.isConfirmed })
            case M:
              return o()(o()({}, n), {}, { documentIdProcess: o()({}, IE.documentIdProcess) })
            case f:
              return o()(o()({}, n), {}, { authenticationResult: o()({}, IE.authenticationResult) })
            case H:
              if (t.payload)
                return o()(
                  o()({}, n),
                  {},
                  { currentStep: t.payload, stepsTaken: [].concat(r()(n.stepsTaken), [t.payload]) },
                )
              break
            case K:
              var A = nI(n.stepsTaken),
                O = A.previousStep,
                C = A.remainingSteps
              return o()(o()({}, n), {}, { currentStep: O, stepsTaken: r()(C) })
            case v:
              return o()(o()({}, n), {}, { formData: o()(o()({}, n.formData), {}, { notabilityCategory: t.payload }) })
            case p:
              return o()(
                o()({}, n),
                {},
                {
                  formData: o()(
                    o()({}, n.formData),
                    {},
                    {
                      notabilityCategory: IE.formData.notabilityCategory,
                      notabilitySubcategory: IE.formData.notabilitySubcategory,
                    },
                  ),
                },
              )
            case x:
              return o()(
                o()({}, n),
                {},
                { formData: o()(o()({}, n.formData), {}, { notabilityData: o()({}, t.payload) }) },
              )
            case b:
              return o()(
                o()({}, n),
                {},
                { formData: o()(o()({}, n.formData), {}, { notabilityData: IE.formData.notabilityData }) },
              )
            case w:
              return o()(
                o()({}, n),
                {},
                { formData: o()(o()({}, n.formData), {}, { notabilitySubcategory: t.payload }) },
              )
            case m:
              return o()(
                o()({}, n),
                {},
                {
                  backID: IE.backID,
                  frontID: IE.frontID,
                  isConfirmed: IE.isConfirmed,
                  idType: IE.idType,
                  idTypeName: IE.idTypeName,
                  formData: o()(
                    o()({}, n.formData),
                    {},
                    { authenticityType: t.payload, authenticityData: IE.formData.authenticityData },
                  ),
                },
              )
            case d:
              return o()(
                o()({}, n),
                {},
                { formData: o()(o()({}, n.formData), {}, { authenticityType: IE.formData.authenticityType }) },
              )
            case V:
              return o()(
                o()({}, n),
                {},
                { formData: o()(o()({}, n.formData), {}, { authenticityData: o()({}, t.payload) }) },
              )
            case F:
              return o()(
                o()({}, n),
                {},
                { formData: o()(o()({}, n.formData), {}, { authenticityData: IE.formData.authenticityData }) },
              )
            case Q:
              var u = n.currentStep.toString()
              return o()(
                o()({}, n),
                {},
                { formHistory: o()(o()({}, n.formHistory), {}, N()({}, u, o()({}, t.payload))) },
              )
            case Y:
              return IE
            default:
              return n
          }
          return n
        }),
      )
      var eE = function (E) {
          return E[L].access.data
        },
        TE = function (E) {
          return E[L].access.fetchStatus
        },
        nE = function (E) {
          return E[L].accountEligibility.data
        },
        tE = function (E) {
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
        RE = function (E) {
          return E[L].authenticationResult.data.status
        },
        oE = function (E) {
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
          var I = CE(E)
          return E[L].formHistory[I] || void 0
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
            n = I.notabilitySubcategory
          switch (e) {
            case S.l.NEWS:
              return null == T ? void 0 : T.newsType
            default:
              return n
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
            e = tE(E),
            T = _E(E),
            n = Object(C.selectFetchStatus)(E),
            t = LE(E)
          return [I, e, T, n, t].includes(c.a.FAILED)
            ? c.a.FAILED
            : (function (E) {
                return E.includes(c.a.LOADING)
              })([I, e, T, n, t])
            ? c.a.LOADING
            : c.a.LOADED
        },
        BE = function () {
          return function (E, I, e) {
            e.api
            var T = I(),
              n = TE(T)
            return n !== c.a.LOADING && n !== c.a.LOADED ? E(yE()) : Promise.resolve()
          }
        },
        yE = function () {
          return function (E, I, e) {
            var T = e.api
            return Object(i.b)(E, { request: T.AccountVerification.fetchAccess })({
              actionTypes: k,
              context: 'FETCH_ACCESS',
            })
          }
        },
        WE = function () {
          return function (E, I, e) {
            e.api
            var T = I(),
              n = tE(T)
            return n !== c.a.LOADING && n !== c.a.LOADED
              ? E(function (E, I, e) {
                  var T = e.api
                  return Object(i.b)(E, { request: T.AccountVerification.fetchAccountEligibility })({
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
              n = _E(T)
            return n !== c.a.LOADING && n !== c.a.LOADED
              ? E(function (E, I, e) {
                  var T = e.api
                  return Object(i.b)(E, { request: T.AccountVerification.fetchAccountViolations })({
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
            })(I()) !== c.a.LOADING
              ? E(function (E, I, e) {
                  var T = e.api
                  return Object(i.b)(E, { request: T.AccountVerification.fetchAuthenticationResult })({
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
              n = LE(T)
            return n !== c.a.LOADING && n !== c.a.LOADED
              ? E(function (E, I, e) {
                  var T = e.api
                  return Object(i.b)(E, { request: T.AccountVerification.fetchDocumentFormats })({
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
          return function (e, T, n) {
            n.api
            e({ type: W, payload: { countryCode: E, countryName: I } })
          }
        },
        gE = function (E, I) {
          return function (e, T, n) {
            n.api
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
            return Object(i.b)(E, { request: T.AccountVerification.fetchBadgeViolations })({
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
            I({ payload: E || S.g[CE(e())].next, type: H })
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
              n,
              t = e.api,
              N = I(),
              _ = oE(N) || void 0,
              r = iE(N) || void 0,
              R = PE(N) || void 0,
              a = bE(N) || {},
              A = pE(N) || void 0,
              c = A && R !== S.l.NEWS,
              O = { authenticity_type: _ }
            null != r &&
              r.siteUrl &&
              (O = o()(
                o()({}, O),
                {},
                { site_url: null == r || null === (T = r.siteUrl) || void 0 === T ? void 0 : T[0] },
              ))
            null != r &&
              r.email &&
              (O = o()(
                o()({}, O),
                {},
                { verified_email: null == r || null === (n = r.email) || void 0 === n ? void 0 : n[0] },
              ))
            var C,
              u,
              L,
              l,
              U,
              D,
              s,
              f,
              F,
              d,
              M,
              Y = { category: R }
            ;(c && (Y = o()(o()({}, Y), {}, { notability_subcategory: A })),
            null != a &&
              a.articleReferenceUrls &&
              (Y = o()(o()({}, Y), {}, { article_reference_urls: null == a ? void 0 : a.articleReferenceUrls })),
            null != a && a.authorReferenceUrl) &&
              (Y = o()(
                o()({}, Y),
                {},
                {
                  author_reference_url:
                    null == a || null === (C = a.authorReferenceUrl) || void 0 === C ? void 0 : C[0],
                },
              ))
            null != a &&
              a.googleTrendsReferenceUrl &&
              (Y = o()(
                o()({}, Y),
                {},
                {
                  google_trends_reference_url:
                    null == a || null === (u = a.googleTrendsReferenceUrl) || void 0 === u ? void 0 : u[0],
                },
              ))
            null != a &&
              a.hashtagReferenceUrl &&
              (Y = o()(
                o()({}, Y),
                {},
                {
                  hashtag_reference_url:
                    null == a || null === (L = a.hashtagReferenceUrl) || void 0 === L ? void 0 : L[0],
                },
              ))
            null != a &&
              a.imdbReferenceUrl &&
              (Y = o()(
                o()({}, Y),
                {},
                { imdb_reference_url: null == a || null === (l = a.imdbReferenceUrl) || void 0 === l ? void 0 : l[0] },
              ))
            null != a &&
              a.leadershipReferenceUrl &&
              (Y = o()(
                o()({}, Y),
                {},
                {
                  leadership_reference_url:
                    null == a || null === (U = a.leadershipReferenceUrl) || void 0 === U ? void 0 : U[0],
                },
              ))
            null != a &&
              a.mainReferenceUrl &&
              (Y = o()(
                o()({}, Y),
                {},
                { main_reference_url: null == a || null === (D = a.mainReferenceUrl) || void 0 === D ? void 0 : D[0] },
              ))
            ;(null != a &&
              a.newsReferenceUrls &&
              (Y = o()(o()({}, Y), {}, { news_reference_urls: null == a ? void 0 : a.newsReferenceUrls })),
            null != a && a.newsType && (Y = o()(o()({}, Y), {}, { news_type: null == a ? void 0 : a.newsType })),
            null != a && a.publicReferenceUrl) &&
              (Y = o()(
                o()({}, Y),
                {},
                {
                  public_reference_url:
                    null == a || null === (s = a.publicReferenceUrl) || void 0 === s ? void 0 : s[0],
                },
              ))
            null != a &&
              a.publicationReferenceUrl &&
              (Y = o()(
                o()({}, Y),
                {},
                {
                  publication_reference_url:
                    null == a || null === (f = a.publicationReferenceUrl) || void 0 === f ? void 0 : f[0],
                },
              ))
            null != a &&
              a.stockReferenceUrl &&
              (Y = o()(
                o()({}, Y),
                {},
                {
                  stock_reference_url: null == a || null === (F = a.stockReferenceUrl) || void 0 === F ? void 0 : F[0],
                },
              ))
            null != a &&
              a.teamReferenceUrl &&
              (Y = o()(
                o()({}, Y),
                {},
                { team_reference_url: null == a || null === (d = a.teamReferenceUrl) || void 0 === d ? void 0 : d[0] },
              ))
            null != a &&
              a.wikipediaReferenceUrl &&
              (Y = o()(
                o()({}, Y),
                {},
                {
                  wikipedia_reference_url:
                    null == a || null === (M = a.wikipediaReferenceUrl) || void 0 === M ? void 0 : M[0],
                },
              ))
            var P = { authenticity_claim: O, notability_claim: Y }
            return Object(i.b)(E, { params: P, request: t.AccountVerification.verifyAccount })({
              actionTypes: X,
              context: 'VERIFY_ACCOUNT',
            })
          }
        },
        eI = function () {
          return function (E, I, e) {
            var T,
              t,
              N = e.api,
              _ = I(),
              r = aE(_),
              R = fE(_),
              o = ME(_),
              a = FE(_)
            if (r) {
              var A,
                c = Object(u.k)(_, r),
                O = n()(c, 1)[0]
              t = null == O || null === (A = O.originalMediaFile) || void 0 === A ? void 0 : A.fileHandle
            }
            if (R) {
              var C,
                S = Object(u.k)(_, R),
                L = n()(S, 1)[0]
              T = null == L || null === (C = L.originalMediaFile) || void 0 === C ? void 0 : C.fileHandle
            }
            var l = { backImage: t, country: a, frontImage: T, idType: o }
            return Object(i.b)(E, { params: l, request: N.AccountVerification.verifyIdDocument })({
              actionTypes: $,
              context: 'VERIFY_ID_DOCUMENT',
            })
          }
        },
        TI = function (E, I) {
          return function (e, T, n) {
            n.api
            var t,
              N = T(),
              _ = null === (t = bE(N)) || void 0 === t ? void 0 : t.newsType,
              r = nE(N),
              R = r.followers_eligible,
              i = r.mentions_eligible
            switch (E) {
              case S.h.NOTABILITY_CATEGORY_SELECT:
                e({ payload: I, type: v })
                break
              case S.h.COMPANY_SUBCATEGORY:
              case S.h.ENTERTAINMENT_QUALIFICATIONS:
              case S.h.GOVERNMENT_SUBCATEGORY:
              case S.h.INFLUENCER_SUBCATEGORY:
              case S.h.SPORTS_SUBCATEGORY:
                e({ payload: I, type: w })
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
                e({ payload: I, type: U })
                break
              case S.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE:
              case S.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE:
                e(R || i ? { payload: I, type: x } : { payload: I, type: D })
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
                e({ payload: o()(o()({}, I), {}, { newsType: _ }), type: x })
                break
              case S.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS:
                e(
                  R || i
                    ? { payload: o()(o()({}, I), {}, { newsType: _ }), type: x }
                    : { payload: o()({}, I), type: l },
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
        nI = function E(I) {
          var e = I.slice(-2),
            T = n()(e, 1)[0],
            t = void 0 === T ? EE : T,
            N = [EE].concat(r()(I.slice(1, -1)))
          return t === S.h.INTAKE_LOADING ? E(N) : { previousStep: t, remainingSteps: N }
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
