;(window.webpackJsonp = window.webpackJsonp || []).push([
  [248],
  {
    e5HP: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return A
      })
      var n = r('VrFO'),
        c = r.n(n),
        o = r('Y9Ll'),
        i = r.n(o),
        a = r('5Yy7'),
        s = r.n(a),
        l = r('2VqO'),
        u = r.n(l),
        d = r('KEM+'),
        h = r.n(d),
        f = r('ERkP'),
        p = r.n(f),
        v = r('t62R'),
        m = r('3XMw'),
        y = r.n(m),
        b = r('rHpw'),
        S = r('MWbm'),
        w = r('yiKp'),
        C = r.n(w),
        k = r('Lsrn'),
        P = r('k/Ka'),
        g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(P.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [k.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            p.a.createElement(
              'g',
              null,
              p.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      g.metadata = { width: 24, height: 24 }
      var I = g,
        E = r('uFYP'),
        L = y.a.f1a1b790,
        M = y.a.if2bf8b3,
        R = y.a.f3624b5c,
        x = y.a.b4b3b113,
        _ = y.a.be22205f,
        j = y.a.hcbbe447,
        A = (function (e) {
          s()(r, e)
          var t = u()(r)
          function r() {
            return c()(this, r), t.apply(this, arguments)
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    r = e.nativeID,
                    n = e.style,
                    c = e.withCircleIcon ? I : E.a
                  return p.a.createElement(
                    S.a,
                    { style: [O.root, n] },
                    p.a.createElement(c, { style: [O.icon, t && O[t]] }),
                    p.a.createElement(v.b, { color: t, nativeID: r, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    r = e.label,
                    n = e.promotedContent,
                    c = n.adMetadataContainer,
                    o = n.advertiser,
                    i = n.advertiser_name,
                    a = n.disclosure_type,
                    s = t && o && t === o.id_str,
                    l = 'string' == typeof a && 'political' === a.toLowerCase(),
                    u = 'string' == typeof a && 'issue' === a.toLowerCase(),
                    d = !(!c || 'POLITICAL' !== c.disclaimerType) || l,
                    h = !(!c || 'ISSUE' !== c.disclaimerType) || u,
                    f = (c || {}).removePromotedAttributionForPreroll
                  return (
                    r ||
                    (!i || s || f
                      ? d
                        ? R
                        : h
                        ? _
                        : M
                      : d
                      ? x({ fullName: i })
                      : h
                      ? j({ fullName: i })
                      : L({ fullName: i }))
                  )
                },
              },
            ]),
            r
          )
        })(p.a.Component)
      h()(A, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var O = b.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    lX7a: function (e, t, r) {
      'use strict'
      r.r(t)
      r('jQ3i'), r('x4t0')
      var n = r('ezF+'),
        c = r('VPAj'),
        o = function (e) {
          return e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0
        },
        i = r('Rp9C'),
        a = r('ERkP'),
        s = r.n(a),
        l = r('wtjx'),
        u = r('rxPX'),
        d = Object(u.a)()
          .propsFromActions(function () {
            return { saveAsRecentSearch: l.a }
          })
          .withAnalytics(),
        h = r('cFuS'),
        f = r('88ay'),
        p = function (e) {
          var t = e.analytics,
            r = e.cellClickable,
            n = e.decoration,
            c = e.entry,
            i = e.onClick,
            a = e.saveAsRecentSearch,
            l = e.shouldScribeImpression,
            u = e.shouldScribeProfileClick,
            d = e.shouldStoreTypeaheadItem,
            p = e.withFollowsYou,
            v = e.withLink,
            m = c.content,
            y = m.id,
            b = m.promotedMetadata,
            S = m.socialContext,
            w = n || f.e,
            C = o(b),
            k = (S && S.generalContext) || void 0,
            P = e.displayMode
          return s.a.createElement(f.a, {
            cellClickable: r,
            decoration: w,
            displayMode: P,
            onClick: i,
            promotedContent: C,
            promotedItemType: h.c.USER,
            saveAsRecentSearch: a,
            scribeData: t.contextualScribeData,
            scribeNamespace: t.contextualScribeNamespace,
            shouldScribeImpression: l,
            shouldScribeProfileClick: u,
            shouldStoreTypeaheadItem: d,
            socialContext: k,
            userId: y,
            withFollowsYou: p,
            withLink: v,
          })
        },
        v = d(s.a.memo(p)),
        m = r('Re5t'),
        y = [f.e, f.f]
      t.default = function (e) {
        var t = e.cellClickable,
          r = void 0 === t || t,
          a = e.decoration,
          s = e.displayMode,
          l = void 0 === s ? m.a.UserCompact : s,
          u = e.onClick,
          d = e.shouldScribeProfileClick,
          h = void 0 === d || d,
          f = e.shouldScribeImpression,
          p = void 0 !== f && f,
          b = e.shouldStoreTypeaheadItem,
          S = e.withLink,
          w = void 0 === S || S
        return n
          .b({
            component: v,
            defaultScribeNamespace: { element: 'user' },
            getScribeDataItem: function (e) {
              var t = e.content,
                r = t.id,
                n = t.promotedMetadata,
                c = e.cursor,
                a = e.itemMetadata,
                s = e.position,
                l = a.clientEventInfo,
                u = o(n)
              return i.a.getUserItem({ id_str: r, promoted_content: u }, void 0, s, c, l)
            },
            isFocusable: Object(c.a)(!0),
          })
          .getHandler(function () {
            return {
              cellClickable: r,
              decoration: a,
              displayMode: l,
              onClick: u,
              shouldScribeProfileClick: h,
              shouldScribeImpression: p,
              shouldStoreTypeaheadItem: b,
              withLink: w,
              withFollowsYou: !a || y.includes(a),
            }
          })
      }
    },
    uFYP: function (e, t, r) {
      'use strict'
      var n = r('yiKp'),
        c = r.n(n),
        o = r('ERkP'),
        i = r.n(o),
        a = r('Lsrn'),
        s = r('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    wtjx: function (e, t, r) {
      'use strict'
      r.d(t, 'g', function () {
        return p
      }),
        r.d(t, 'f', function () {
          return v
        }),
        r.d(t, 'e', function () {
          return m
        }),
        r.d(t, 'd', function () {
          return w
        }),
        r.d(t, 'b', function () {
          return k
        }),
        r.d(t, 'a', function () {
          return g
        }),
        r.d(t, 'c', function () {
          return I
        })
      var n = r('KEM+'),
        c = r.n(n),
        o = r('yiKp'),
        i = r.n(o),
        a = (r('7x/C'), r('JtPf'), r('LW0h'), r('Ee2X'), r('Ssj5')),
        s = r('RqPI'),
        l = 'recentSearches',
        u = 'rweb.recentSearches',
        d = function (e) {
          return function (t, r, n) {
            return n.userPersistence.set(u, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        h = function (e, t) {
          var r = []
          if (e && e.user) {
            var n = e.user
            r = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== n.id)
            })
          } else if (e && e.topic) {
            var c = e.topic
            r = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== c.id)
            })
          } else if (e && e.event) {
            var o = e.event
            r = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== o.id)
            })
          } else if (e && e.keyword) {
            var i = e.keyword
            r = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== i.query) || e.user || e.topic || e.event
            })
          }
          return r
        },
        f = { fetched: !1, recentSearches: [] }
      var p = function (e) {
          return e.recentSearches.recentSearches
        },
        v = function (e) {
          return p(e)[0] || null
        },
        m = function (e) {
          return e.recentSearches.fetched
        },
        y = 'rweb/recentSearches/INIT_FROM_CACHE',
        b = function (e) {
          return { type: y, payload: e }
        },
        S = 'rweb/recentSearches/REMOVE_QUERY',
        w = function (e) {
          return function (t, r, n) {
            n.userPersistence
            t({ payload: e, type: S })
            var c = r().recentSearches
            return Object(s.m)(r()) ? t(d(c.recentSearches)) : Promise.resolve()
          }
        },
        C = 'rweb/recentSearches/CLEAR_ALL',
        k = function () {
          return function (e, t, r) {
            r.userPersistence
            e({ type: C })
            var n = t().recentSearches
            return Object(s.m)(t()) ? e(d(n.recentSearches)) : Promise.resolve()
          }
        },
        P = 'rweb/recentSearches/ADD_QUERY',
        g = function (e) {
          return function (t, r, n) {
            n.userPersistence
            t({ payload: e, type: P })
            var c = r().recentSearches
            return Object(s.m)(r()) ? t(d(c.recentSearches)) : Promise.resolve()
          }
        },
        I = function () {
          return function (e, t, r) {
            r.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, r) {
                  var n = r.userPersistence,
                    c = t()
                  return Object(s.m)(c)
                    ? n
                        .get(u)
                        .then(function (t) {
                          e(b(t))
                        })
                        .catch(function () {
                          e(b())
                        })
                    : (e(b()), Promise.resolve())
                })
          }
        }
      a.a.register(
        c()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case P:
              var r = t.payload,
                n = r ? h(r, e.recentSearches) : []
              return n.length > 49 && n.splice(49, 1), r && n.unshift(r), i()(i()({}, e), {}, { recentSearches: n })
            case S:
              var c = t.payload,
                o = c ? h(c, e.recentSearches) : []
              return i()(i()({}, e), {}, { recentSearches: o })
            case C:
              return { fetched: !0, recentSearches: [] }
            case y:
              return i()(i()(i()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
  },
])
//# sourceMappingURL=WIPED
