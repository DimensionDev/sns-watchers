;(window.webpackJsonp = window.webpackJsonp || []).push([
  [190],
  {
    q1GS: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'GraphQLDarkRead', function () {
          return N
        }),
        i.d(t, 'compareURTData', function () {
          return w
        }),
        i.d(t, 'compareData', function () {
          return s
        })
      i('ho0z')
      var a = i('T0aG'),
        n = i.n(a),
        r = (i('yH/f'), i('jwue'), i('7x/C'), i('+oxZ'), i('+KXO'), i('mN6z')),
        o = Object.freeze({})
      function s(e, t, i) {
        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o
        c(e, t, i, a)
      }
      function c(e, t, i, a) {
        if (
          !(function (e) {
            return 'ignore' === e.fields
          })(a) &&
          (t || i)
        )
          if (!Array.isArray(t) || Array.isArray(i))
            if (Array.isArray(t) || !Array.isArray(i))
              if (Array.isArray(t) && Array.isArray(i))
                for (var o = 0; o < t.length; o++) e.pushArrayIndexPath(o), c(e, t[o], i[o], a), e.popPath()
              else
                'object' === n()(t) && 'object' === n()(i) && t && i
                  ? Object.keys(t).forEach(function (r) {
                      var o
                      e.pushObjectFieldPath(r)
                      var s = a.fields
                      s && (o = 'object' === n()(s) ? s[r] : s)
                      var l = { fields: o }
                      c(e, t[r], i[r], l), e.popPath()
                    })
                  : n()(t) === n()(i)
                  ? !(function (e) {
                      return !e.fields
                    })(a) ||
                    Object(r.a)(t, i) ||
                    e.reportValueMismatch(t, i)
                  : e.reportTypeMismatch(n()(t), n()(i))
            else e.reportTypeMismatch(n()(t), 'array')
          else e.reportTypeMismatch('array', n()(i))
      }
      var l = { fields: { card_type_url: 'ignore' } },
        p = function (e, t, i) {
          i
            ? Object.keys(t).forEach(function (a) {
                var n = t[a],
                  r = i[a]
                n && r
                  ? (e.pushObjectFieldPath(a), s(e, n, r, l), e.popPath())
                  : r || (e.pushObjectFieldPath(a), e.reportTypeMismatch('object', 'undefined'), e.popPath())
              })
            : e.reportTypeMismatch('object', 'undefined')
        },
        u = i('yiKp'),
        h = i.n(u),
        d = {
          fields: {
            entities: 'ignore',
            extended_entities: 'ignore',
            favorite_count: 'ignoreValue',
            retweet_count: 'ignoreValue',
            reply_count: 'ignoreValue',
          },
        },
        b = function (e, t, i) {
          s(e, t, i, d)
          var a = t.entities
          a && (e.pushObjectFieldPath('entities'), f(e, a, i.entities), e.popPath())
          var n = t.extended_entities
          n && (e.pushObjectFieldPath('extended_entities'), f(e, n, i.extended_entities), e.popPath())
        },
        f = function (e, t, i) {
          Object.keys(t).forEach(function (a) {
            m(e, a, t[a], i ? i[a] : void 0)
          })
        },
        _ = { ext: 'ignore' },
        g = h()(h()({}, _), {}, { media_url: 'ignore', mediaStats: { viewCount: 'ignore' } }),
        m = function (e, t, i, a) {
          var n = 'media' === t ? g : _
          e.pushObjectFieldPath(t), s(e, i, a, { fields: n }), e.popPath()
        },
        j = function (e, t, i) {
          i
            ? Object.keys(t).forEach(function (a) {
                var n = t[a],
                  r = i[a]
                n && r
                  ? (e.pushObjectFieldPath(a), b(e, n, r), e.popPath())
                  : r || (e.pushObjectFieldPath(a), e.reportTypeMismatch('object', 'undefined'), e.popPath())
              })
            : e.reportTypeMismatch('object', 'undefined')
        },
        y = {
          fields: {
            advertiser_account_type: 'ignore',
            advertiser_account_service_levels: 'ignore',
            business_profile_state: 'ignore',
            can_dm: 'ignore',
            geo_enabled: 'ignore',
            has_extended_profile: 'ignore',
            id: 'ignore',
            is_lifeline_institution: 'ignore',
            is_translation_enabled: 'ignore',
            profile_image_extensions: { mediaStats: 'ignore' },
            profile_banner_extensions: { mediaStats: 'ignore' },
            pinned_tweet_ids: 'ignore',
            profile_background_color: 'ignore',
            profile_background_image_url: 'ignore',
            profile_background_image_url_https: 'ignore',
            profile_image_url: 'ignore',
            profile_link_color: 'ignore',
            profile_sidebar_border_color: 'ignore',
            profile_sidebar_fill_color: 'ignore',
            profile_text_color: 'ignore',
            profile_use_background_image: 'ignore',
            require_some_consent: 'ignore',
            followers_count: 'ignoreValue',
            normal_followers_count: 'ignoreValue',
            lang: 'ignore',
            live_following: 'ignore',
            profile_location: 'ignore',
            withheld_copyright: 'ignore',
          },
        },
        O = function (e, t, i) {
          i
            ? Object.keys(t).forEach(function (a) {
                var n = t[a],
                  r = i[a]
                n && r
                  ? (e.pushObjectFieldPath(a), s(e, n, r, y), e.popPath())
                  : r || (e.pushObjectFieldPath(a), e.reportTypeMismatch('object', 'undefined'), e.popPath())
              })
            : e.reportTypeMismatch('object', 'undefined')
        },
        v = i('YeIG'),
        P = 'globalObjects',
        w = function (e, t, i) {
          if (t || i) {
            if (t.globalObjects && i.globalObjects)
              Object.keys(t.globalObjects).forEach(function (a) {
                'tweets' === a
                  ? Object(v.a)(t.globalObjects.tweets) ||
                    (e.pushObjectFieldPath(''.concat(P, '.tweets')),
                    j(e, t.globalObjects.tweets, i.globalObjects.tweets),
                    e.popPath())
                  : 'users' === a
                  ? Object(v.a)(t.globalObjects.users) ||
                    (e.pushObjectFieldPath(''.concat(P, '.users')),
                    O(e, t.globalObjects.users, i.globalObjects.users),
                    e.popPath())
                  : 'cards' === a
                  ? Object(v.a)(t.globalObjects.cards) ||
                    (e.pushObjectFieldPath(''.concat(P, '.cards')),
                    p(e, t.globalObjects.cards, i.globalObjects.cards),
                    e.popPath())
                  : (e.pushObjectFieldPath(''.concat(P, '.').concat(a)),
                    s(e, t.globalObjects[a], i.globalObjects[a], { fields: 'ignoreValue' }),
                    e.popPath())
              })
            t.timeline &&
              i.timeline &&
              (e.pushObjectFieldPath('timeline.instructions'),
              s(e, t.timeline.instructions, i.timeline.instructions, { fields: 'ignoreValue' }),
              e.popPath(),
              e.pushObjectFieldPath('timeline.responseObjects'),
              s(e, t.timeline.responseObjects, i.timeline.responseObjects, { fields: 'ignoreValue' }),
              e.popPath())
          }
        },
        M = i('Y9Ll'),
        k = i.n(M),
        F = i('VrFO'),
        x = i.n(F),
        T = i('1Pcy'),
        V = i.n(T),
        A = i('5Yy7'),
        S = i.n(A),
        E = i('2VqO'),
        G = i.n(E),
        q = i('KEM+'),
        L = i.n(q),
        R =
          (i('2G9S'),
          i('7xRU'),
          i('LUwd'),
          (function (e) {
            S()(i, e)
            var t = G()(i)
            function i(e, a) {
              var n
              return (
                x()(this, i),
                (n = t.call(this, 'GQL Mismatch: '.concat(e, ', mismatchedFields:').concat(a.join(', ')))),
                L()(V()(n), 'displayName', 'GQL Mismatch'),
                L()(V()(n), 'getFingerprint', function () {
                  return [n.displayName, n.name]
                }),
                (n.constructor = i),
                Object.setPrototypeOf(V()(n), i.prototype),
                (n.name = e),
                (n.mismatchedFields = a),
                n
              )
            }
            return k()(i)
          })(i('edt3').b)),
        D =
          (i('TJCb'),
          i('DZ+c'),
          (function () {
            function e() {
              x()(this, e), (this._path = []), (this._mismatches = []), (this._valueMismatches = [])
            }
            return (
              k()(e, [
                {
                  key: 'reportTypeMismatch',
                  value: function (e, t) {
                    this._mismatches.push({ actualType: t, expectedType: e, path: this._path.join('.') })
                  },
                },
                {
                  key: 'reportValueMismatch',
                  value: function (e, t) {
                    this._valueMismatches.push({ actualValue: t, expectedValue: e, path: this._path.join('.') })
                  },
                },
                {
                  key: 'pushObjectFieldPath',
                  value: function (e) {
                    this._path.push(e)
                  },
                },
                {
                  key: 'pushArrayIndexPath',
                  value: function (e) {
                    this._path.push(e.toString())
                  },
                },
                {
                  key: 'popPath',
                  value: function () {
                    this._path.pop()
                  },
                },
                {
                  key: 'typeMismatches',
                  value: function () {
                    return this._mismatches
                  },
                },
                {
                  key: 'valueMismatches',
                  value: function () {
                    return this._valueMismatches
                  },
                },
              ]),
              e
            )
          })()),
        I = i('SrIh'),
        N = function (e) {
          var t = e.apiResponse,
            i = e.compare,
            a = e.createRequest,
            n = e.featureSwitches,
            r = e.name,
            o = n.getNumberValue('responsive_web_graphql_dark_reads_probability') || 0
          Math.random() < o &&
            a &&
            a().then(function (e) {
              if (!Object(v.a)(e)) {
                var a = new D()
                i(a, t, e), z(r, a.typeMismatches()), z(''.concat(r, ' values'), a.valueMismatches())
              }
            })
        },
        z = function (e, t) {
          if (t.length) {
            var i = { name: e, mismatchedFields: t },
              a = new R(e, t)
            Object(I.a)(a, { extra: i })
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
