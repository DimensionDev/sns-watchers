;(window.webpackJsonp = window.webpackJsonp || []).push([
  [182],
  {
    q1GS: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'GraphQLDarkRead', function () {
          return J
        }),
        i.d(t, 'compareURTData', function () {
          return k
        }),
        i.d(t, 'compareData', function () {
          return c
        })
      i('ho0z')
      var r = i('T0aG'),
        n = i.n(r),
        o = (i('yH/f'), i('jwue'), i('+oxZ'), i('+KXO'), i('mN6z')),
        a = Object.freeze({})
      function c(e, t, i) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a
        s(e, t, i, r)
      }
      function s(e, t, i, r) {
        if (
          !(function (e) {
            return 'ignore' === e.fields
          })(r) &&
          (t || i)
        )
          if (!Array.isArray(t) || Array.isArray(i))
            if (Array.isArray(t) || !Array.isArray(i))
              if (Array.isArray(t) && Array.isArray(i))
                for (var a = 0; a < t.length; a++) e.pushArrayIndexPath(a), s(e, t[a], i[a], r), e.popPath()
              else
                'object' === n()(t) && 'object' === n()(i) && t && i
                  ? Object.keys(t).forEach(function (o) {
                      var a
                      e.pushObjectFieldPath(o)
                      var c = r.fields
                      c && (a = 'object' === n()(c) ? c[o] : c)
                      var l = { fields: a }
                      s(e, t[o], i[o], l), e.popPath()
                    })
                  : n()(t) === n()(i)
                  ? !(function (e) {
                      return !e.fields
                    })(r) ||
                    Object(o.a)(t, i) ||
                    e.reportValueMismatch(t, i)
                  : e.reportTypeMismatch(n()(t), n()(i))
            else e.reportTypeMismatch(n()(t), 'array')
          else e.reportTypeMismatch('array', n()(i))
      }
      var l = { fields: { card_type_url: 'ignore' } },
        u = function (e, t, i) {
          i
            ? Object.keys(t).forEach(function (r) {
                var n = t[r],
                  o = i[r]
                n && o
                  ? (e.pushObjectFieldPath(r), c(e, n, o, l), e.popPath())
                  : o || (e.pushObjectFieldPath(r), e.reportTypeMismatch('object', 'undefined'), e.popPath())
              })
            : e.reportTypeMismatch('object', 'undefined')
        },
        p = i('KEM+'),
        h = i.n(p)
      i('1t7P'), i('LW0h'), i('daRM'), i('FtHn')
      function f(e, t) {
        var i = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            i.push.apply(i, r)
        }
        return i
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(i), !0).forEach(function (t) {
                h()(e, t, i[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : f(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
              })
        }
        return e
      }
      var b = {
          fields: {
            entities: 'ignore',
            extended_entities: 'ignore',
            favorite_count: 'ignoreValue',
            retweet_count: 'ignoreValue',
            reply_count: 'ignoreValue',
          },
        },
        g = function (e, t, i) {
          c(e, t, i, b)
          var r = t.entities
          r && (e.pushObjectFieldPath('entities'), _(e, r, i.entities), e.popPath())
          var n = t.extended_entities
          n && (e.pushObjectFieldPath('extended_entities'), _(e, n, i.extended_entities), e.popPath())
        },
        _ = function (e, t, i) {
          Object.keys(t).forEach(function (r) {
            O(e, r, t[r], i ? i[r] : void 0)
          })
        },
        j = { ext: 'ignore' },
        y = d(d({}, j), {}, { media_url: 'ignore', mediaStats: { viewCount: 'ignore' } }),
        O = function (e, t, i, r) {
          var n = 'media' === t ? y : j
          e.pushObjectFieldPath(t), c(e, i, r, { fields: n }), e.popPath()
        },
        m = function (e, t, i) {
          i
            ? Object.keys(t).forEach(function (r) {
                var n = t[r],
                  o = i[r]
                n && o
                  ? (e.pushObjectFieldPath(r), g(e, n, o), e.popPath())
                  : o || (e.pushObjectFieldPath(r), e.reportTypeMismatch('object', 'undefined'), e.popPath())
              })
            : e.reportTypeMismatch('object', 'undefined')
        },
        v = {
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
        P = function (e, t, i) {
          i
            ? Object.keys(t).forEach(function (r) {
                var n = t[r],
                  o = i[r]
                n && o
                  ? (e.pushObjectFieldPath(r), c(e, n, o, v), e.popPath())
                  : o || (e.pushObjectFieldPath(r), e.reportTypeMismatch('object', 'undefined'), e.popPath())
              })
            : e.reportTypeMismatch('object', 'undefined')
        },
        w = i('YeIG'),
        M = 'globalObjects',
        k = function (e, t, i) {
          if (t || i) {
            if (t.globalObjects && i.globalObjects)
              Object.keys(t.globalObjects).forEach(function (r) {
                'tweets' === r
                  ? Object(w.a)(t.globalObjects.tweets) ||
                    (e.pushObjectFieldPath(''.concat(M, '.tweets')),
                    m(e, t.globalObjects.tweets, i.globalObjects.tweets),
                    e.popPath())
                  : 'users' === r
                  ? Object(w.a)(t.globalObjects.users) ||
                    (e.pushObjectFieldPath(''.concat(M, '.users')),
                    P(e, t.globalObjects.users, i.globalObjects.users),
                    e.popPath())
                  : 'cards' === r
                  ? Object(w.a)(t.globalObjects.cards) ||
                    (e.pushObjectFieldPath(''.concat(M, '.cards')),
                    u(e, t.globalObjects.cards, i.globalObjects.cards),
                    e.popPath())
                  : (e.pushObjectFieldPath(''.concat(M, '.').concat(r)),
                    c(e, t.globalObjects[r], i.globalObjects[r], { fields: 'ignoreValue' }),
                    e.popPath())
              })
            t.timeline &&
              i.timeline &&
              (e.pushObjectFieldPath('timeline.instructions'),
              c(e, t.timeline.instructions, i.timeline.instructions, { fields: 'ignoreValue' }),
              e.popPath(),
              e.pushObjectFieldPath('timeline.responseObjects'),
              c(e, t.timeline.responseObjects, i.timeline.responseObjects, { fields: 'ignoreValue' }),
              e.popPath())
          }
        },
        F = (i('OZaJ'), i('VrFO')),
        x = i.n(F),
        A = i('1Pcy'),
        T = i.n(A),
        V = i('5Yy7'),
        R = i.n(V),
        S = i('N+ot'),
        E = i.n(S),
        D = i('AuHH'),
        G = i.n(D)
      i('2G9S'), i('7xRU'), i('LUwd')
      function L(e) {
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
          var i,
            r = G()(e)
          if (t) {
            var n = G()(this).constructor
            i = Reflect.construct(r, arguments, n)
          } else i = r.apply(this, arguments)
          return E()(this, i)
        }
      }
      var N = (function (e) {
          R()(i, e)
          var t = L(i)
          function i(e, r) {
            var n
            return (
              x()(this, i),
              (n = t.call(this, 'GQL Mismatch: '.concat(e, ', mismatchedFields:').concat(r.join(', ')))),
              h()(T()(n), 'displayName', 'GQL Mismatch'),
              h()(T()(n), 'getFingerprint', function () {
                return [n.displayName, n.name]
              }),
              (n.constructor = i),
              Object.setPrototypeOf(T()(n), i.prototype),
              (n.name = e),
              (n.mismatchedFields = r),
              n
            )
          }
          return i
        })(i('edt3').b),
        q = i('Y9Ll'),
        H = i.n(q),
        I =
          (i('7x/C'),
          i('DZ+c'),
          (function () {
            function e() {
              x()(this, e), (this._path = []), (this._mismatches = []), (this._valueMismatches = [])
            }
            return (
              H()(e, [
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
        z = i('SrIh'),
        J = function (e) {
          var t = e.apiResponse,
            i = e.compare,
            r = e.createRequest,
            n = e.featureSwitches,
            o = e.name,
            a = n.getNumberValue('responsive_web_graphql_dark_reads_probability') || 0
          Math.random() < a &&
            r &&
            r().then(function (e) {
              if (!Object(w.a)(e)) {
                var r = new I()
                i(r, t, e), Q(o, r.typeMismatches()), Q(''.concat(o, ' values'), r.valueMismatches())
              }
            })
        },
        Q = function (e, t) {
          if (t.length) {
            var i = { name: e, mismatchedFields: t },
              r = new N(e, t)
            Object(z.a)(r, { extra: i })
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
