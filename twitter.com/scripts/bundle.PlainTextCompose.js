;(window.webpackJsonp = window.webpackJsonp || []).push([
  [79],
  {
    '/Rsk': function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return v
      }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'h', function () {
          return _
        }),
        n.d(t, 'g', function () {
          return b
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return T
        }),
        n.d(t, 'b', function () {
          return x
        }),
        n.d(t, 'a', function () {
          return E
        }),
        n.d(t, 'i', function () {
          return I
        })
      var a = n('KEM+'),
        i = n.n(a),
        o = n('yiKp'),
        r = n.n(o),
        s = (n('yH/f'), n('KqXw'), n('LJOr'), n('7x/C'), n('JtPf'), n('oEOe')),
        l = n('kGix'),
        c = (n('hBpG'), n('M6MT')),
        d = n('Ssj5'),
        u = n('qlwE'),
        m = n('a/ea'),
        p = n('474o'),
        h = 'placePicker',
        f = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        g = Object.freeze({
          initial: { fetchStatus: l.a.NONE },
          lastSearch: { fetchStatus: l.a.NONE },
          lastSelectedPlace: void 0,
        })
      var v = function (e) {
          return e.placePicker.initial.results
        },
        y = function (e) {
          return e.placePicker.initial.fetchStatus
        },
        _ = function (e) {
          return e.placePicker.lastSearch.results
        },
        b = function (e) {
          return e.placePicker.lastSearch.fetchStatus
        },
        C = function (e) {
          return (function (e, t) {
            return null != t
              ? t
              : null == e
              ? void 0
              : e.places.find(function (t) {
                  return (null == e ? void 0 : e.autotag_place_id) === t.place.id
                })
          })(
            v(e),
            (function (e) {
              return e.placePicker.lastSelectedPlace
            })(e),
          )
        },
        w = function (e, t) {
          return function (n, a, i) {
            var o = i.api
            return Object(s.b)(n, { request: o.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        T = function (e) {
          return function (t, n, a) {
            a.api
            var i = Object(m.d)(n())
            return t(
              w(
                {
                  query_type: p.a.tweet_compose_location,
                  lat: null == i ? void 0 : i.coords.latitude,
                  long: null == i ? void 0 : i.coords.longitude,
                  hacc: null == i ? void 0 : i.coords.accuracy,
                  search_term: e,
                },
                p.c.lastSearch,
              ),
            )
          }
        },
        x = function () {
          return function (e, t, n) {
            n.api
            var a = y(t()),
              i = v(t())
            if (a === l.a.LOADING || i) return Promise.resolve()
            var o = Object(m.d)(t())
            return o
              ? e(
                  w(
                    {
                      lat: o.coords.latitude,
                      long: o.coords.longitude,
                      hacc: o.coords.accuracy,
                      query_type: p.a.tweet_compose_location,
                      count: 50,
                    },
                    p.c.initial,
                  ),
                )
              : Promise.resolve()
          }
        },
        E = function () {
          return function (e, t, n) {
            n.api
            return Object(u.m)(t()) && Object(m.c)(t()) === c.b.granted
              ? e(Object(m.b)())
                  .then(function () {
                    return e(x())
                  })
                  .then(function () {
                    return C(t())
                  })
              : Promise.resolve()
          }
        },
        S = 'rweb/placePicker/UPDATE_LAST_SELECTED_PLACE',
        I = function (e) {
          return { type: S, payload: e }
        }
      d.a.register(
        i()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var n = t.meta.resultSet
              return r()(r()({}, e), {}, i()({}, n, { fetchStatus: l.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return r()(r()({}, e), {}, i()({}, a, { fetchStatus: l.a.FAILED }))
            case f.SUCCESS:
              var o = t.meta.resultSet,
                s = t.payload
              return r()(r()({}, e), {}, i()({}, o, { fetchStatus: l.a.LOADED, results: s }))
            case S:
              var c = t.payload
              return r()(r()({}, e), {}, { lastSelectedPlace: null != c ? c : void 0 })
            default:
              return e
          }
        }),
      )
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('2G9S')
      var a = n('1YZw'),
        i = n('pXBW'),
        o = n('3XMw'),
        r = n.n(o),
        s = n('SrIh'),
        l = r.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof i.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(s.a)(n, { extra: { context: o, isStrato: !0 } }),
                t ? Object(a.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '474o': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return i
        }),
        n.d(t, 'c', function () {
          return o
        })
      n('yH/f')
      var a = Object.freeze({ profile_location: 'profile_location', tweet_compose_location: 'tweet_compose_location' }),
        i = Object.freeze({ foursquare: 'foursquare', yelp: 'yelp' }),
        o = Object.freeze({ initial: 'initial', lastSearch: 'lastSearch' })
    },
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
              }),
              r.a.createElement('path', {
                d: 'M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    Drq4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('circle', { cx: '12', cy: '6.674', r: '1.889' }),
              r.a.createElement('path', {
                d: 'M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263',
              }),
              r.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return i
        })
      n('yH/f')
      var a = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        i = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    WOwf: function (e, t, n) {
      'use strict'
      function a(e, t) {
        return Math.min(1, 1 - e / t)
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    Zg3A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'a/ea': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return u
      }),
        n.d(t, 'd', function () {
          return m
        }),
        n.d(t, 'e', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return g
        }),
        n.d(t, 'b', function () {
          return v
        })
      var a = n('KEM+'),
        i = n.n(a),
        o = n('yiKp'),
        r = n.n(o),
        s = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        l = n('Ssj5'),
        c = 'geoLocation',
        d = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var u = function (e) {
          return e.geoLocation.permissionStatus
        },
        m = function (e) {
          return e.geoLocation.position
        },
        p = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        h = function (e) {
          return { payload: e, type: p }
        },
        f = 'rweb/geoLocation/SET_POSITION',
        g = function () {
          return function (e, t) {
            return y()
              .then(function (t) {
                return e({ payload: t, type: f })
              })
              .catch(function (t) {
                return e(h(s.b.denied)), Promise.reject(t)
              })
          }
        },
        v = function () {
          return function (e, t) {
            return m(t()) ? Promise.resolve() : e(g())
          }
        },
        y = function () {
          return new Promise(function (e, t) {
            return navigator.geolocation.getCurrentPosition(function (t) {
              var n = {
                timestamp: t.timestamp,
                coords: {
                  latitude: t.coords.latitude,
                  longitude: t.coords.longitude,
                  altitude: t.coords.altitude,
                  accuracy: t.coords.accuracy,
                  altitudeAccuracy: t.coords.altitudeAccuracy,
                  heading: t.coords.heading,
                  speed: t.coords.speed,
                },
              }
              return e(n)
            }, t)
          })
        }
      l.a.register(
        i()({}, c, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case p:
              return r()(r()({}, e), {}, { permissionStatus: t.payload })
            case f:
              return r()(r()({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    h5NW: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        i = n.n(a),
        o = n('RhWx'),
        r = n.n(o),
        s = n('yiKp'),
        l = n.n(s),
        c = n('VrFO'),
        d = n.n(c),
        u = n('Y9Ll'),
        m = n.n(u),
        p = n('1Pcy'),
        h = n.n(p),
        f = n('5Yy7'),
        g = n.n(f),
        v = n('2VqO'),
        y = n.n(v),
        _ = n('KEM+'),
        b = n.n(_),
        C =
          (n('2G9S'),
          n('yH/f'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('5BYb'),
          n('KqXw'),
          n('3uku'),
          n('7xRU'),
          n('JtPf'),
          n('jQ3i'),
          n('x4t0'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('z84I'),
          n('hBvt'),
          n('MvUL'),
          n('ulNE'),
          n('urw/'),
          n('LW0h'),
          n('hCOa'),
          n('DfhM'),
          n('vrRf'),
          n('uFXj'),
          n('ERkP')),
        w = n.n(C),
        T = n('ye3X'),
        x = n('pXBW'),
        E = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('v6aA'),
        R = n('+Kfv'),
        A = n('eSoz'),
        k = n('rxPX'),
        P = function (e, t) {
          var n = t.communityId
          return n ? A.c.select(e, n) : void 0
        },
        O = Object(k.a)().propsFromState(function () {
          return { community: P }
        }),
        M = n('MtXG'),
        D = n('t62R'),
        N = n('CKsB'),
        F = n('rHpw'),
        L = n('3XMw'),
        B = n.n(L),
        V = B.a.d58baa7e,
        j = O(
          w.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              i = e.selectedCommunityId
            if (!n) return null
            var o,
              r = n.member_count
            return w.a.createElement(N.a, {
              actionSubText:
                ((o = V(r)),
                w.a.createElement(
                  M.a.Group,
                  null,
                  w.a.createElement(
                    M.a,
                    null,
                    w.a.createElement(
                      D.b,
                      { color: 'white' },
                      w.a.createElement(
                        B.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        w.a.createElement(M.a.Value, null, B.a.ibd0106d({ formattedCount: o })),
                        w.a.createElement(M.a.Label, null, B.a.cface2d0({ count: r })),
                      ),
                    ),
                  ),
                )),
              actionText: n.name,
              isSelected: i === a,
              key: a,
              media: n.media,
              onClick: t({
                _type: 'community_members',
                communityIdValue: a,
                conversationControlsValue: 'community_members',
              }),
              selectable: !0,
              style: z.menuItem,
            })
          }),
        ),
        z = F.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        H = n('0zXz'),
        U = n('FS1z'),
        W = n('MWbm'),
        G = n('yw4N'),
        q = n('/yvb'),
        K = n('+Eiw'),
        X = n('Zg3A'),
        Y = n('EyD/'),
        Q = B.a.e815fc33,
        Z = B.a.c63602d3,
        J = B.a.baffe39a,
        $ = B.a.aa4209e8,
        ee = B.a.d0748dae,
        te = B.a.abd845fd,
        ne = { viewType: 'everyone' },
        ae = { viewType: 'community' },
        ie = B.a.d58baa7e,
        oe = F.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: K.a.getBackgroundImage() },
            viewport: {
              borderBottomLeftRadius: e.borderRadii.xLarge,
              borderBottomRightRadius: e.borderRadii.xLarge,
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'auto',
              zIndex: void 0,
            },
          }
        }),
        re = function (e) {
          var t,
            n,
            a = e.audienceControlsValue,
            i = e.dismiss,
            o = e.hasMemberships,
            r = e.isC9sParticipationEnabled,
            s = e.isSuperFollowsCreator,
            l = e.onAudienceControlsValueChange,
            c = e.sliceModule,
            d = w.a.useContext(I.a),
            u = a.communityIdValue || void 0,
            m = a.exclusivityControlValue || void 0,
            p = a.trustedFriendsValue || void 0,
            h = d.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            f = w.a.useCallback(
              function (e) {
                return function () {
                  l(e), i()
                }
              },
              [l, i],
            ),
            g = function (t) {
              t.stopPropagation()
              var n = e.dismiss,
                a = e.history
              return n(), a.push('/i/twittercircle/edit')
            }
          return w.a.createElement(
            W.a,
            { style: oe.root },
            w.a.createElement(
              G.a,
              { style: oe.viewport },
              w.a.createElement(
                w.a.Fragment,
                null,
                w.a.createElement(D.b, { size: 'headline1', style: oe.title, weight: 'bold' }, Q),
                w.a.createElement(
                  R.a,
                  { behavioralEventContext: ne },
                  w.a.createElement(N.a, {
                    Icon: X.a,
                    actionText: J,
                    isSelected: !m && !u && !p,
                    onClick: f({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: oe.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                s
                  ? w.a.createElement(N.a, {
                      Icon: Y.a,
                      actionText: $,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!m,
                      onClick: f({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: oe.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                h
                  ? w.a.createElement(N.a, {
                      Icon: Y.a,
                      actionSubText:
                        ((t = 5),
                        (n = ie(t)),
                        w.a.createElement(
                          M.a.Group,
                          null,
                          w.a.createElement(
                            M.a,
                            null,
                            w.a.createElement(
                              D.b,
                              { color: 'white' },
                              w.a.createElement(
                                B.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                w.a.createElement(M.a.Value, null, B.a.a5f7b70f({ formattedCount: n })),
                                w.a.createElement(M.a.Label, null, B.a.a7daec1e({ count: t })),
                              ),
                            ),
                            w.a.createElement(q.a, { onPress: g, size: 'xSmall', type: 'primaryText' }, te),
                          ),
                        )),
                      actionText: ee,
                      iconThumbnailColor: 'success',
                      isSelected: !!p,
                      onClick: f({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsValue: {},
                      }),
                      selectable: !0,
                      style: oe.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              o && c && r
                ? w.a.createElement(
                    W.a,
                    null,
                    w.a.createElement(
                      R.a,
                      { behavioralEventContext: ae },
                      w.a.createElement(D.b, { style: oe.title, weight: 'bold' }, Z),
                      w.a.createElement(U.a, {
                        module: c,
                        noItemsRenderer: H.a,
                        renderer: function (e) {
                          return w.a.createElement(j, {
                            clickHandler: f,
                            communityId: e,
                            dismiss: i,
                            key: e,
                            selectedCommunityId: u,
                          })
                        },
                        withoutHeadroom: !0,
                      }),
                    ),
                  )
                : null,
            ),
          )
        },
        se = n('xVN5'),
        le = n('wAC9'),
        ce = function (e) {
          return Object(le.a)({
            contextSuffix: 'COMMUNITIES_MEMBERSHIPS_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.Communities.fetchCommunitiesMembershipsSlice
            },
            getEndpointParams: function (e) {
              return e
            },
            sliceKey: 'communitiesMembershipsSlice-'.concat(e),
          })
        },
        de = n('hqKg'),
        ue = n('li/m'),
        me = n('RqPI'),
        pe = n('xZGM'),
        he = n('0KEI'),
        fe = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? A.c.select(e, n) : void 0
        },
        ge = function (e, t) {
          return Object(pe.z)(e, pe.f)
        },
        ve = Object(k.a)()
          .propsFromState(function () {
            return {
              communities: A.f,
              educationalVisibilityFlag: ge,
              hasMemberships: ue.d,
              selectedCommunity: fe,
              sliceModule: Object(de.createSelector)(me.q, function (e) {
                return e ? ce(e) : void 0
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(pe.w)(pe.f)
              },
              updateSingleComposer: se.x,
            }
          }),
        ye = n('FG+G'),
        _e = n('Sp5X'),
        be = n('X00g'),
        Ce = n('efqG'),
        we = B.a.baffe39a,
        Te = B.a.e815fc33,
        xe = B.a.aa4209e8,
        Ee = B.a.d0748dae,
        Se = { viewType: 'communities_controls' },
        Ie = w.a.createElement(ye.a, null),
        Re = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i
            return (
              d()(this, n),
              (i = t.call(this, e, a)),
              b()(h()(i), '_renderContent', function (e) {
                var t = i.props,
                  n = t.audienceControlsValue,
                  a = t.hasMemberships,
                  o = t.isC9sParticipationEnabled,
                  r = t.isSuperFollowsCreator,
                  s = t.sliceModule
                return w.a.createElement(re, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: a,
                  history: _e.a,
                  isC9sParticipationEnabled: o,
                  isSuperFollowsCreator: r,
                  onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                  sliceModule: s,
                })
              }),
              b()(h()(i), '_handleAudienceControlsValueChange', function (e) {
                var t = i.props.updateSingleComposer
                i._handleDismissEducationalVisibilty(),
                  i.props.onAudienceControlsValueChange(e),
                  ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                    t({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } })
              }),
              b()(h()(i), '_handleOpen', function () {
                i.setState({ popoverIsOpen: !0 })
              }),
              b()(h()(i), '_handleDismiss', function () {
                i.setState({ popoverIsOpen: !1 }), i._handleDismissEducationalVisibilty()
              }),
              b()(h()(i), '_handleDismissEducationalVisibilty', function () {
                i.props.addEducationFlag()
              }),
              (i.state = { popoverIsOpen: !1 }),
              i
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.audienceControlsValue,
                    a = t.educationalVisibilityFlag,
                    o = t.hasMemberships,
                    r = t.isSuperFollowsCreator,
                    s = t.selectedCommunity,
                    l = this.state.popoverIsOpen,
                    c = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    d = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    u = n.communityIdValue || !1,
                    m = n.exclusivityControlValue || !1,
                    p = n.trustedFriendsValue || !1,
                    h = a && !s,
                    f = we
                  if ((u && null != s && s.name ? (f = s.name) : m ? (f = xe) : p && (f = Ee), m))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (u && null != s && s.theme && c) {
                    var g = be.a.getCommunityUIColorName(s.theme)
                    e = { color: g, borderColor: g, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return r || o || d
                    ? w.a.createElement(
                        R.a,
                        { behavioralEventContext: Se },
                        w.a.createElement(
                          W.a,
                          { style: Ae.container },
                          w.a.createElement(
                            Ce.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: h ? 'forceVisible' : 'interactive',
                            },
                            w.a.createElement(
                              q.a,
                              i()(
                                {
                                  accessibilityExpanded: l,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: Te,
                                  accessibilityRole: 'button',
                                  icon: Ie,
                                  size: 'xSmall',
                                },
                                e,
                              ),
                              f,
                            ),
                          ),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Re, 'contextType', I.a)
      var Ae = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        ke = ve(Re),
        Pe = n('ddV6'),
        Oe = n.n(Pe),
        Me = n('PKbs'),
        De = function (e, t) {
          var n = t.selectedCommunityId
          return n ? A.c.select(e, n) : void 0
        },
        Ne = Object(k.a)()
          .propsFromState(function () {
            return { community: De }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: A.c.fetchOneIfNeeded,
            }
          }),
        Fe = n('YeIG'),
        Le = n('21zW'),
        Be = B.a.gfca5254,
        Ve = B.a.f510c8b2,
        je = w.a.createElement(D.b, { weight: 'bold' }, Ve),
        ze = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            badgeStyle: { marginRight: e.spaces.space12 },
            container: {
              display: 'inline-flex',
              flexDirection: 'row',
              paddingBottom: e.spaces.space12,
              alignItems: 'baseline',
            },
            rulesHeader: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space12 },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: 'normal' },
          }
        }),
        He = Ne(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.selectedCommunityId,
            r = e.showMiddot
          w.a.useEffect(
            function () {
              o && Object(Fe.a)(t) && a(o).catch(n())
            },
            [t, o, n, a],
          )
          var s = w.a.useState(!1),
            l = Oe()(s, 2),
            c = l[0],
            d = l[1],
            u = w.a.useContext(I.a).featureSwitches,
            m = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return w.a.createElement(Me.b, {
                    badgeStyle: ze.badgeStyle,
                    headerContainerStyle: ze.rulesHeader,
                    heading: je,
                    ruleContainerStyle: ze.ruleContainerStyle,
                    rules: n,
                    theme: a,
                  })
                }
                return null
              },
              [t],
            )
          if (null != t && t.rules && t.rules.length > 0) {
            var p = t.theme,
              h = be.a.getCommunityUIColorName(p),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              W.a,
              { style: ze.container },
              r ? w.a.createElement(Le.a, null) : null,
              w.a.createElement(
                Ce.a,
                {
                  onDismiss: function () {
                    return d(!1)
                  },
                  onOpen: function () {
                    return d(!0)
                  },
                  renderContent: m,
                },
                w.a.createElement(
                  q.a,
                  i()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: ze.button,
                    },
                    f,
                  ),
                  Be,
                ),
              ),
            )
          }
          return null
        }),
        Ue = function (e, t) {
          return Object(pe.z)(e, pe.g)
        },
        We = Object(k.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Ue }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(pe.w)(pe.g)
              },
            }
          }),
        Ge = n('4zmP'),
        qe = B.a.g46f363d,
        Ke = { viewType: 'rule_education' }
      var Xe = F.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        Ye = We(function (e) {
          var t = e.addEducationFlag,
            n = e.shouldShowEducation,
            a = function () {
              t()
            }
          return (
            w.a.useEffect(function () {
              return a
            }),
            n
              ? w.a.createElement(
                  W.a,
                  { style: Xe.container },
                  w.a.createElement(Ge.a, { behavioralEventContext: Ke, onClose: a, text: qe, withCloseButton: !0 }),
                )
              : null
          )
        }),
        Qe = n('H7Rt'),
        Ze = n('m3Bd'),
        Je = n.n(Ze),
        $e = n('yZqq'),
        et = function (e, t) {
          return Object(pe.z)(e, pe.q)
        },
        tt = Object(k.a)()
          .propsFromState(function () {
            return { shouldShowEducation: et }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(pe.w)(pe.q)
              },
            }
          }),
        nt = B.a.aa65a449,
        at = { viewType: 'persistent_conversation_controls_education' }
      var it = F.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        ot = tt(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            i = w.a.useContext(I.a).featureSwitches,
            o = w.a.useState(),
            r = Oe()(o, 2),
            s = r[0],
            l = r[1],
            c = function () {
              t()
            }
          return (
            w.a.useEffect(function () {
              return c
            }, []),
            w.a.useEffect(
              function () {
                if (n) {
                  var e = n.getBoundingClientRect(),
                    t = e.left,
                    a = e.width
                  l(t + a / 2)
                }
              },
              [n],
            ),
            !0 === i.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? w.a.createElement(
                  W.a,
                  { style: it.container },
                  w.a.createElement(Ge.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: at,
                    onClose: c,
                    text: nt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        rt = n('Irs7'),
        st = n('DlMI'),
        lt = n('gBde'),
        ct = n('gUPl'),
        dt = n('cOhU'),
        ut = ['analytics'],
        mt = w.a.createElement(st.a, null),
        pt = w.a.createElement(lt.a, null),
        ht = w.a.createElement(ct.a, null),
        ft = w.a.createElement(dt.a, null),
        gt = 'conversation_control',
        vt = { viewType: gt },
        yt = Object.freeze({
          all: { icon: mt, label: B.a.i8ea6d4e },
          community: { icon: ht, label: B.a.ec5a4a25 },
          by_invitation: { icon: pt, label: B.a.b4543009 },
          community_members: { icon: ft, label: B.a.i13be5a0 },
          super_followers_exclusive: { icon: mt, label: B.a.f8393bda },
          trusted_friends_tweet: { icon: mt, label: B.a.c0857ccd },
        }),
        _t =
          (Object.freeze(['community', 'by_invitation']),
          Object(rt.a)(function (e) {
            var t = e.analytics,
              n = Je()(e, ut),
              a = e.disabled,
              i = e.value,
              o = yt[i],
              r = o.icon,
              s = o.label,
              l = w.a.useState(!1),
              c = Oe()(l, 2),
              d = c[0],
              u = c[1],
              m = w.a.useRef(null)
            w.a.useEffect(function () {
              i !== Qe.a.all && i !== Qe.a.community_members && u(!0)
            }, [])
            var p = w.a.useCallback(
              function (e) {
                t.scribe({ element: gt, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              R.a,
              { behavioralEventContext: vt },
              d ? w.a.createElement(ot, { buttonRef: m.current }) : null,
              w.a.createElement(
                W.a,
                { style: bt.controlsContainer },
                w.a.createElement(
                  $e.a,
                  n,
                  w.a.createElement(
                    q.a,
                    { disabled: a, icon: r, onPress: p, ref: m, size: 'xSmall', style: bt.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        bt = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        Ct = n('krmn'),
        wt = n('cIoY'),
        Tt = n('w3n3'),
        xt = n('MLl7'),
        Et = n('1auM'),
        St = n('07FG'),
        It = n('Q8CU'),
        Rt = n('QbaN'),
        At = n('VPdC'),
        kt = n('WPfJ'),
        Pt = F.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            avatarContainerExpanded: { paddingTop: e.spaces.space4 },
            avatarContainer: { justifyContent: 'center' },
            avatar: { width: '100%' },
            controlsContainer: {
              marginLeft: -e.spacesPx.space8,
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.spaces.space1,
              flexWrap: 'wrap',
              width: '100%',
            },
            mobileControlsLayout: { flexDirection: 'column' },
            controlsLayout: { flexDirection: 'row', alignItems: 'center' },
            rightColumn: {
              paddingTop: e.spaces.space4,
              justifyContent: 'center',
              position: 'static',
              transitionProperty: 'opacity, color',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'ease-out',
            },
            composeBoxContainer: {
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              flexShrink: 1,
              position: 'static',
              zIndex: 1,
            },
            inputArea: { zIndex: 1 },
            dragDrop: {
              borderColor: e.colors.transparent,
              borderRadius: e.borderRadii.small,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.medium,
            },
            textInputArea: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              zIndex: kt.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: kt.e },
            iconEmojiPicker: { zIndex: kt.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: kt.a,
            },
            firstToolBarButton: { marginLeft: '-'.concat(e.spaces.space8) },
            toolBarButton: { marginHorizontal: 0 },
            toolBarIconsContainer: { alignItems: 'center', flexDirection: 'row', marginTop: e.spaces.space12 },
            separator: {
              width: '1px',
              backgroundColor: e.colors.gray300,
              height: e.fontSizes.title2,
              marginRight: e.spaces.space12,
              marginLeft: 'calc('.concat(e.spaces.space12, ' - 2px)'),
            },
            conversationLine: {
              alignSelf: 'center',
              backgroundColor: e.colors.gray200,
              flexGrow: 1,
              flexShrink: 1,
              minHeight: 0,
              width: e.componentDimensions.conversationLineWidth,
              marginTop: e.spaces.space4,
              marginBottom: e.spaces.space4,
            },
            conversationLineWithOverflow: { marginTop: '-'.concat(e.spaces.space4) },
            attachmentContainer: { marginTop: e.spaces.space4, marginBottom: e.spaces.space4 },
            mediaPreview: { marginTop: e.spaces.space4 },
            quoteTweet: { backgroundColor: e.colors.transparent, marginTop: e.spaces.space4, marginBottom: 0 },
            addImageTextContainer: {
              alignSelf: 'flex-start',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            },
            addImageActionIcon: { marginHorizontal: e.spaces.space4 },
            addImageTextPadding: { marginEnd: e.spaces.space48 },
            imageActions: { alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', marginTop: e.spaces.space4 },
            blurStyle: { opacity: 0.5 },
            inputStyle: { width: '100%' },
            collapsedInputStyle: { flexGrow: 1, flexShrink: 1 },
            highlightedText: {
              borderRadius: e.borderRadii.large,
              paddingVertical: e.spaces.space12,
              paddingLeft: e.spaces.space12,
              marginTop: 0,
              marginBottom: 0,
            },
            highlightedTextInner: { marginHorizontal: e.spaces.space4 },
            taggedLocationButton: {
              paddingLeft: e.spacesPx.space8 + e.spacesPx.space2,
              paddingRight: e.spacesPx.space8 + e.spacesPx.space2,
              maxWidth: '100%',
            },
            taggedLocationContainer: {
              display: 'inline-flex',
              flexDirection: 'row',
              minWidth: 0,
              flexShrink: 1,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        Ot = B.a.bdbcdd93,
        Mt = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            i = e.setActiveParentKey,
            o = n || t.length >= 4,
            r = t.length < 3
          return w.a.createElement(At.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? Ot : void 0,
            disabled: o,
            multiple: r,
            onChange: a,
            onPress: i,
            style: [Pt.toolBarButton, Pt.firstToolBarButton],
            type: 'brandText',
          })
        },
        Dt = n('oQhu'),
        Nt = n('p+r5'),
        Ft = n('GWvE'),
        Lt = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(h()(e), '_setInputRef', function (t) {
                e._inputRef = t
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    n = e.defaultValue,
                    a = e.editable,
                    i = e.label,
                    o = e.name,
                    r = e.onBlur,
                    s = e.onChange
                  return w.a.createElement(
                    W.a,
                    { style: Bt.root },
                    w.a.createElement(Nt.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: n,
                      editable: a,
                      label: i,
                      maxLength: 25,
                      name: o,
                      onBlur: r,
                      onChange: s,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: Bt.formTextInput,
                    }),
                  )
                },
              },
              {
                key: 'value',
                get: function () {
                  return this._inputRef && this._inputRef.getValue()
                },
              },
              {
                key: 'isValid',
                get: function () {
                  var e = this.props.optional
                  return (
                    (!this.value && e) ||
                    (this.value && !Object(Ft.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Lt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Bt = F.a.create(function (e) {
          return {
            root: { flexDirection: 'row', flexShrink: 1 },
            action: { width: e.spaces.space40 },
            addButton: { flexGrow: 1, minHeight: '100%', padding: 0 },
            formTextInput: {
              flexGrow: 1,
              flexShrink: 1,
              marginVertical: 0,
              paddingTop: 0,
              paddingHorizontal: 0,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        Vt = Lt,
        jt = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        zt = n('6XNv'),
        Ht = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            return d()(this, n), t.apply(this, arguments)
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.label,
                    a = e.last,
                    i = e.max,
                    o = e.min,
                    r = e.onChange,
                    s = e.testID,
                    l = !t || o === i,
                    c = e.value.toString(),
                    d = Object(jt.a)(o, i + 1).map(function (e) {
                      return { label: ''.concat(B.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement(zt.a, {
                    disabled: l,
                    label: n,
                    onChange: r,
                    options: d,
                    style: [Ut.selector, !a && Ut.rightMargin],
                    testID: s,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      b()(Ht, 'defaultProps', { last: !1 })
      var Ut = F.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Wt = Ht,
        Gt = 'addPollChoice',
        qt = 'selectPollDays',
        Kt = 'selectPollHours',
        Xt = 'selectPollMinutes',
        Yt = 'removePollButton',
        Qt = B.a.caf8edc4,
        Zt = B.a.g93586be,
        Jt = B.a.d073b644,
        $t = B.a.a2f0728e,
        en = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i
            return (
              d()(this, n),
              (i = t.call(this, e, a)),
              b()(h()(i), '_handleDaysChange', function (e) {
                var t = i.props.onChange,
                  n = parseInt(e, 10)
                i.setState(function (e) {
                  var a = e.duration,
                    i = a.hours,
                    o = a.minutes,
                    r = 0 === n && 0 === i && 0 === o ? 1 : 7 === n ? 0 : i,
                    s = { days: n, hours: r, minutes: 7 === n ? 0 : 0 === n && 0 === r && o < 5 ? 5 : o }
                  return t && t(s), { duration: s }
                })
              }),
              b()(h()(i), '_handleHoursChange', function (e) {
                var t = i.props.onChange,
                  n = parseInt(e, 10)
                i.setState(function (e) {
                  var a = e.duration,
                    i = a.days,
                    o = a.minutes,
                    r = { days: i, hours: n, minutes: 0 === i && 0 === n && o < 5 ? 5 : o }
                  return t && t(r), { duration: r }
                })
              }),
              b()(h()(i), '_handleMinutesChange', function (e) {
                var t = i.props.onChange,
                  n = parseInt(e, 10)
                i.setState(function (e) {
                  var a = e.duration,
                    i = { days: a.days, hours: a.hours, minutes: n }
                  return t && t(i), { duration: i }
                })
              }),
              (i.state = { duration: e.initialDuration }),
              i
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActive,
                    n = e.style
                  return w.a.createElement(
                    W.a,
                    { style: n },
                    w.a.createElement(D.b, { color: 'normal', style: tn.durationLabel }, t ? Qt : ''),
                    this._renderPicker(),
                  )
                },
              },
              {
                key: '_renderPicker',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.isActive,
                    a = this.state.duration,
                    i = a.days,
                    o = a.hours,
                    r = a.minutes
                  return w.a.createElement(
                    W.a,
                    { style: tn.durationControls },
                    w.a.createElement(Wt, {
                      editable: t && n,
                      label: Zt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: qt,
                      value: i,
                    }),
                    w.a.createElement(Wt, {
                      editable: t && n,
                      label: Jt,
                      max: 7 === i ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Kt,
                      value: o,
                    }),
                    w.a.createElement(Wt, {
                      editable: t && n,
                      label: $t,
                      last: !0,
                      max: 7 === i ? 0 : 59,
                      min: 0 === i && 0 === o ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Xt,
                      value: r,
                    }),
                  )
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this.state.duration
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(en, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var tn = F.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        nn = en,
        an = n('iY63'),
        on = n('jtO7'),
        rn = B.a.g589c2e1,
        sn = B.a.a1e6c3a1,
        ln = B.a.a739e006,
        cn = B.a.d89a5b92,
        dn = B.a.c2a8118d,
        un = B.a.a8ede1de,
        mn = B.a.af40a8ef,
        pn = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i
            d()(this, n),
              (i = t.call(this, e, a)),
              b()(h()(i), '_setChoice1Ref', function (e) {
                i._choice1 = e
              }),
              b()(h()(i), '_setChoice2Ref', function (e) {
                i._choice2 = e
              }),
              b()(h()(i), '_setChoice3Ref', function (e) {
                i._choice3 = e
              }),
              b()(h()(i), '_setChoice4Ref', function (e) {
                i._choice4 = e
              }),
              b()(h()(i), '_setDurationPickerRef', function (e) {
                i._durationPicker = e
              }),
              b()(h()(i), '_handleValidation', function () {
                var e = i.props,
                  t = e.onChange,
                  n = e.onInvalid,
                  a = e.onValid,
                  o = i.choices,
                  r = h()(i),
                  s = [r._choice1, r._choice2, r._choice3, r._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                o && o.length >= 2 && s ? a() : n(), t && t({ choices: o, duration: i.duration })
              }),
              b()(h()(i), '_handleAdd', function () {
                i.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  i.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              b()(h()(i), '_handleDurationChange', function (e) {
                var t = i.props.onChange
                t && t({ choices: i.choices, duration: e })
              }),
              b()(h()(i), '_handleBlur', function () {
                var e = i.props.onBlur
                null == e || e()
              })
            var o = e.initialChoices,
              r = void 0 === o,
              s = (o || []).length,
              l = s > 2 ? s : 2
            return (i.state = { autoFocus: r, choiceCount: l }), i
          }
          return (
            m()(n, [
              {
                key: '_renderChoices',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialChoices,
                    a = void 0 === n ? [] : n,
                    i = e.isActive,
                    o = this.state,
                    r = o.autoFocus,
                    s = o.choiceCount,
                    l = w.a.createElement(
                      W.a,
                      { style: hn.rightColumn },
                      s < 4
                        ? w.a.createElement(q.a, {
                            accessibilityLabel: un,
                            disabled: !(t && i),
                            hoverLabel: { label: mn },
                            icon: w.a.createElement(an.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: hn.addButton,
                            testID: Gt,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    W.a,
                    { style: hn.choicesAndAddButton },
                    w.a.createElement(
                      W.a,
                      { style: hn.choices },
                      w.a.createElement(Vt, {
                        autoFocus: r,
                        defaultValue: a[0],
                        editable: t && i,
                        label: rn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(Vt, {
                        defaultValue: a[1],
                        editable: t && i,
                        label: sn,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? w.a.createElement(Vt, {
                            autoFocus: r,
                            defaultValue: a[2],
                            editable: t && i,
                            label: ln,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? w.a.createElement(Vt, {
                            autoFocus: r,
                            defaultValue: a[3],
                            editable: t && i,
                            label: cn,
                            name: 'Choice4',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref,
                          })
                        : null,
                    ),
                    l,
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialDuration,
                    a = e.isActive,
                    i = e.onRemove
                  return w.a.createElement(
                    W.a,
                    { style: hn.root },
                    this._renderChoices(),
                    w.a.createElement(nn, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: hn.durationPicker,
                    }),
                    w.a.createElement(
                      W.a,
                      { style: hn.removePollButton },
                      w.a.createElement(on.a, { color: 'red500', label: dn, onPress: i, testID: Yt }),
                    ),
                  )
                },
              },
              {
                key: 'choices',
                get: function () {
                  var e = this._choice1,
                    t = this._choice2,
                    n = this._choice3,
                    a = this._choice4
                  return [e && e.value, t && t.value, n && n.value, a && a.value].filter(Boolean)
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this._durationPicker ? this._durationPicker.duration : void 0
                },
              },
            ]),
            n
          )
        })(w.a.Component),
        hn = F.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.transparent,
              borderColor: e.colors.nestedBorderColor,
              borderRadius: e.borderRadii.xLarge,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              flexDirection: 'column',
              overflow: 'hidden',
              paddingTop: e.spaces.space12,
            },
            choicesAndAddButton: { paddingHorizontal: e.spaces.space12, flexDirection: 'row' },
            choices: { flexGrow: 1, flexShrink: 1 },
            removePollButton: {
              borderBottomLeftRadius: e.borderRadii.xLarge,
              borderBottomRightRadius: e.borderRadii.xLarge,
            },
            rightColumn: { flexDirection: 'column-reverse' },
            addButton: { marginBottom: e.spaces.space24, marginLeft: e.spaces.space4 },
            durationPicker: {
              borderTopColor: e.colors.nestedBorderColor,
              borderTopWidth: e.borderWidths.small,
              borderBottomColor: e.colors.nestedBorderColor,
              borderBottomWidth: e.borderWidths.small,
              padding: e.spaces.space12,
            },
          }
        }),
        fn = Object(rt.a)(pn),
        gn = n('+d3d'),
        vn = ['onChange'],
        yn = function (e) {
          var t = e.composerIndex,
            n = e.editable,
            a = e.initialChoices,
            o = e.initialDuration,
            r = e.isActive,
            s = e.isPollValid,
            l = e.updateComposer,
            c = Object(rt.b)(),
            d = w.a.useMemo(
              function () {
                return {
                  onChange: function (e) {
                    l({ pollChoices: null == e ? void 0 : e.choices, pollDuration: null == e ? void 0 : e.duration }, t)
                  },
                  onValid: function () {
                    !s && l({ pollValid: !0 }, t)
                  },
                  onInvalid: function () {
                    s && l({ pollValid: !1 }, t)
                  },
                  onRemove: function () {
                    c.scribe({ element: 'remove_poll', action: 'click' }), l({ pollActive: !1 }, t)
                  },
                }
              },
              [c, s, l, t],
            ),
            u = d.onChange,
            m = Je()(d, vn),
            p = w.a.useMemo(
              function () {
                return Object(gn.a)(
                  function (e) {
                    var t = e.choices,
                      n = e.duration
                    u({ choices: t, duration: n })
                  },
                  200,
                  { leading: !0, trailing: !0 },
                )
              },
              [u],
            ),
            h = w.a.useCallback(
              function () {
                p.flush()
              },
              [p],
            )
          return w.a.createElement(
            fn,
            i()({ editable: n, initialChoices: a, initialDuration: o, isActive: r, onBlur: h, onChange: p }, m),
          )
        },
        _n = F.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        bn = B.a.i859676b,
        Cn = w.a.createElement(
          B.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            D.b,
            { link: '/settings/audience_and_tagging', style: _n.link, withInteractiveStyling: !0, withUnderline: !0 },
            B.a.c9a48d3f,
          ),
        )
      function wn() {
        return w.a.createElement(W.a, { style: _n.container }, w.a.createElement(Ge.a, { headline: bn, text: Cn }))
      }
      var Tn = n('b5s6'),
        xn = n('rcen'),
        En = n('zmS9'),
        Sn = 'addButton',
        In = 'addSubtitlesLabel',
        Rn = 'altTextLabel',
        An = 'tagPeopleLabel',
        kn = 'attachments',
        Pn = 'createPollButton',
        On = 'geoButton',
        Mn = 'gifSearchButton',
        Dn = 'scheduleOption',
        Nn = 'taggedUsersLabel',
        Fn = 'tweetTextarea_',
        Ln = 'toolBar',
        Bn = 'scheduledTweetIndicator',
        Vn = n('xM7j'),
        jn = n('6OUF'),
        zn = n('tZIO'),
        Hn = n('5mJL'),
        Un = n('DNho'),
        Wn = n('jhWN'),
        Gn = n('rFBM'),
        qn = n('zfvc'),
        Kn = n('Ujvi'),
        Xn = n('yTN1'),
        Yn = n('gpVt'),
        Qn = n('hOZg'),
        Zn = n('ll3R'),
        Jn = n('J0mu'),
        $n = n('EfHu'),
        ea = n('KrGU'),
        ta = n('boUI'),
        na = n('6ZHn'),
        aa = n('/WPq'),
        ia = n('wpLu'),
        oa = n('pHub'),
        ra = n('8A5z'),
        sa = n('pKoL'),
        la = n('ZvMt'),
        ca = n('9Xij'),
        da = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            return d()(this, n), t.apply(this, arguments)
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    n = e.style
                  return w.a.createElement(W.a, { style: n }, this._renderImageGroup(t.length))
                },
              },
              {
                key: '_renderImageGroup',
                value: function (e) {
                  switch (e) {
                    case 1:
                      return this._renderGroupOf1()
                    case 2:
                      return this._renderGroupOf2()
                    case 3:
                      return this._renderGroupOf3()
                    case 4:
                      return this._renderGroupOf4()
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderGroupOf1',
                value: function () {
                  var e = this.props.media,
                    t = e && !!e[0].mediaFile,
                    n = (e && !t && e[0].externalMediaDetails) || {},
                    a = n.height,
                    i = n.width,
                    o = F.a.theme.aspectRatios.landscape
                  if (t) {
                    var r,
                      s,
                      l = F.a.theme.aspectRatios.minTimelineImage,
                      c = F.a.theme.aspectRatios.maxTimelineImage
                    o = la.a.getImageAspectRatio(l, c, {
                      width: null === (r = e[0].mediaFile) || void 0 === r ? void 0 : r.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return w.a.createElement(
                    ca.a,
                    { ratio: t ? o : i / a },
                    w.a.createElement(W.a, { style: ua.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return w.a.createElement(
                    ca.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: ua.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, ua.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return w.a.createElement(
                    ca.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: ua.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, ua.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return w.a.createElement(
                    ca.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: ua.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], ua.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return w.a.createElement(
                    W.a,
                    { style: [ua.column, t] },
                    this._renderMediaAtIndex(e[0], ua.gutterBottom),
                    this._renderMediaAtIndex(e[1]),
                  )
                },
              },
              {
                key: '_renderMediaAtIndex',
                value: function (e, t) {
                  var n,
                    a,
                    i,
                    o,
                    r = this.props,
                    s = r.editable,
                    l = r.isActive,
                    c = r.media,
                    d = r.onClickMedia,
                    u = r.onEditMedia,
                    m = r.onEditSensitiveWarning,
                    p = r.onRemoveMedia,
                    h = r.onSetMediaPreviewRef,
                    f = c[e],
                    g = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    v = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    y = !(
                      null === (i = f.mediaMetadata) ||
                      void 0 === i ||
                      null === (o = i.sensitiveMediaWarning) ||
                      void 0 === o ||
                      !o.size
                    ),
                    _ = u && s && l,
                    b = _ && y && !!m
                  return w.a.createElement(sa.a, {
                    accessibilityLabel: g || v,
                    accessibilityRole: 'group',
                    enableGif: l,
                    key: f.id,
                    mediaItem: f,
                    onClick: d ? d(f.id) : void 0,
                    onEdit: u ? u(f.id) : void 0,
                    onEditSensitiveWarning: m && b ? m(f.id) : void 0,
                    onRemove: p(f.id),
                    ref: h,
                    style: [ua.mediaContainer, t],
                    withAltTextLabel: !!g,
                    withCloseButton: s && l,
                    withEditButton: _,
                    withEditSensitiveWarningButton: b,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(da, 'contextType', I.a)
      var ua = F.a.create(function (e) {
          return {
            column: { flexDirection: 'column', flexGrow: 1, flexBasis: 0 },
            gutterRight: { marginRight: e.spaces.space12 },
            gutterBottom: { marginBottom: e.spaces.space12 },
            mediaContainer: {
              borderRadius: e.borderRadii.xLarge,
              transitionProperty: 'width',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'ease-out',
              overflow: 'hidden',
              flexGrow: 1,
              flexBasis: 0,
            },
            mediaPreviewWrapper: { flexDirection: 'row', height: '100%' },
          }
        }),
        ma = n('S1qy'),
        pa = n.n(ma),
        ha = n('cjAp'),
        fa = n.n(ha),
        ga = B.a.f0afcc0e,
        va = B.a.ha5e2e79,
        ya = B.a.a3de3b68,
        _a = B.a.cc2b28fc,
        ba = B.a.g45af04e,
        Ca = B.a.ee9c4013,
        wa = B.a.af40a8ef,
        Ta = B.a.e68b09b4,
        xa = B.a.ec10ee02,
        Ea = B.a.h735a98d,
        Sa = B.a.c4ccfbe2,
        Ia = B.a.j499fbcb,
        Ra = B.a.b7d8e3f0,
        Aa = B.a.d1175c78,
        ka = B.a.bf4e9d79,
        Pa = B.a.e0342f98,
        Oa = B.a.e349147b,
        Ma = B.a.e3a24e4b,
        Da = B.a.de4669e2,
        Na = B.a.d2c7a41c,
        Fa = B.a.f7364fa1,
        La = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Ba = B.a.ia24dc8c,
        Va = w.a.createElement(Qn.a, null),
        ja = w.a.createElement(an.a, null),
        za = w.a.createElement(Zn.a, null),
        Ha = w.a.createElement(Jn.a, null),
        Ua = { viewType: 'schedule_tweet' },
        Wa = { viewType: 'add_poll' },
        Ga = { viewType: 'add_composer' },
        qa = { viewType: 'tag_location' },
        Ka = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var o
            d()(this, n),
              (o = t.call(this, e, a)),
              b()(h()(o), '_handleConversationControlsValueChange', function (e) {
                o._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              b()(h()(o), '_handleAudienceControlsValueChange', function (e) {
                o.props.updateAudienceControlsValue(e)
              }),
              b()(
                h()(o),
                '_triggerConversationControlsImpression',
                Object(Dt.a)(function () {
                  return o.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              b()(h()(o), '_shouldRenderControls', function (e, t) {
                var n = o.state.isFocused,
                  a = o.props,
                  i = a.audienceControlsValue,
                  r = a.isActive,
                  s = a.isInline,
                  l = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (i.conversationControlsValue !== Qe.a.community_members &&
                      i.conversationControlsValue !== Qe.a.super_followers_exclusive &&
                      i.conversationControlsValue !== Qe.a.trusted_friends_tweet) ||
                    !l
                  ) ||
                  (r && !l && (!s || n || e))
                )
              }),
              b()(h()(o), '_renderConversationControls', function (e) {
                var t = o.state.isFocused,
                  n = o.props,
                  a = n.audienceControlsValue,
                  i = n.isInline
                if (
                  (n.isReply || (!t && i) || o._triggerConversationControlsImpression(),
                  !o._conversationControlsCreationEnabled)
                )
                  return null
                var r = a.conversationControlsValue,
                  s = o._shouldRenderControls(e, 'conversation'),
                  l =
                    r === Qe.a.community_members ||
                    r === Qe.a.super_followers_exclusive ||
                    r === Qe.a.trusted_friends_tweet ||
                    o._isScheduled()
                return s
                  ? w.a.createElement(_t, { disabled: l, onChange: o._handleConversationControlsValueChange, value: r })
                  : null
              }),
              b()(h()(o), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  W.a,
                  { style: Pt.taggedLocationContainer },
                  w.a.createElement(
                    q.a,
                    {
                      icon: w.a.createElement($n.a, null),
                      onPress: o._handleGeoButtonClick,
                      size: 'xSmall',
                      style: Pt.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              b()(h()(o), '_renderMainContent', function () {
                var e = o.props,
                  t = e.additionalToolbarContent,
                  n = e.data,
                  a = e.index,
                  i = e.isExpanded,
                  r = e.isInline,
                  s = e.isInlineReply,
                  l = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  d = n.cardUrl,
                  u = n.media,
                  m = n.pollActive,
                  p = n.quotedStatus,
                  h = n.text,
                  f = Object(Yn.b)(h) || (d && !Object(St.a)(d) && [d]),
                  g = !!u.length || m || !!p,
                  v = o.props.typeaheadWrapper,
                  y = !o._isEmpty()
                return w.a.createElement(
                  W.a,
                  { style: Pt.textInputArea },
                  w.a.createElement(
                    W.a,
                    { style: i ? Pt.inputStyle : Pt.collapsedInputStyle },
                    o._renderAudienceControls(y),
                    w.a.createElement(
                      v,
                      {
                        contextText: h,
                        isInline: r,
                        isInlineReply: s,
                        onTextUpdated: c ? o._handleRichTextChange : o._handlePlainTextChange,
                        onTypeaheadStateChange: l,
                      },
                      o._renderFieldTextInput,
                    ),
                    f && !g
                      ? w.a.createElement(Yn.a, { index: a, isCardPreviewTombstoned: Object(St.a)(d), urls: f })
                      : null,
                  ),
                  i ? null : t,
                )
              }),
              b()(h()(o), '_renderFieldTextInput', function (e) {
                var t = o.props,
                  n = t.autoFocus,
                  a = t.data,
                  r = t.editable,
                  s = t.index,
                  l = t.isActive,
                  c = t.isExpanded,
                  d = t.isInline,
                  u = t.isInlineReply,
                  m = t.isLast,
                  p = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  g = t.richTextInputContext,
                  v = o.state.isFocused,
                  y = a.text,
                  _ = 0 === s && m,
                  b = !!g,
                  C = g || {},
                  T = C.dismissComposerCommandName,
                  x = C.element,
                  E = C.sendTweetCommandName,
                  S = u && !g && !c,
                  I = g
                    ? {
                        onChange: o._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: T,
                          editorState: o.state.editorState,
                          element: x,
                          sendTweetCommandName: E,
                        },
                      }
                    : { onChange: o._getHandlePlainTextChange(e) }
                return w.a.createElement(
                  jn.a,
                  i()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: ya,
                      autoFocus: n || (l && !d),
                      closeButton:
                        l && (o._deleteNonemptyTweetstormComposerEnabled || o._isEmpty()) && !_
                          ? o._renderCloseButton()
                          : void 0,
                      contentBelow: o._renderTweetAttachment(),
                      editable: r,
                      inputStyle: [Pt.textInputStyle, S && Pt.textInputMobileCollapsed],
                      keyCommandHandlers: p,
                      maxNumberOfLines: b ? 30 : 10,
                      multiline: !0,
                      numberOfLines: o._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: o._handleFilesAdded,
                      placeholder: o._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: o._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(Fn).concat(s),
                      useCacheForDOMMeasurements: v,
                      value: y,
                    },
                    I,
                  ),
                )
              }),
              b()(
                h()(o),
                '_getHandleRichTextChange',
                Object(Dt.a)(function (e) {
                  return function (t) {
                    e(t), o._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                h()(o),
                '_getHandlePlainTextChange',
                Object(Dt.a)(function (e) {
                  return function (t) {
                    e(t), o._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(h()(o), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? w.a.createElement(wn, null) : null
              }),
              b()(h()(o), '_renderAudienceControls', function (e) {
                var t = o.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  i = t.isSuperFollowsCreator,
                  r = o.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = o.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  l = o.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return o._shouldRenderControls(e, 'audience') && 0 === a && (r || s || l)
                  ? w.a.createElement(ke, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: r,
                      isSuperFollowsCreator: i && s,
                      onAudienceControlsValueChange: o._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              b()(h()(o), '_renderCommunitiesRulesEducation', function () {
                return o.shouldRenderCommunitiesRules ? w.a.createElement(Ye, null) : null
              }),
              b()(h()(o), '_renderCommunitiesRules', function (e) {
                var t = o.props.audienceControlsValue.communityIdValue || void 0
                return o.shouldRenderCommunitiesRules && t
                  ? w.a.createElement(He, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              b()(h()(o), '_calcNumberOfLines', function () {
                var e = o.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  i = !!e.richTextInputContext,
                  r = t.media,
                  s = t.pollActive,
                  l = t.quotedStatus,
                  c = !!r.length || !!s || !!l
                return (i && (a || c)) || !n ? 1 : 4
              }),
              b()(h()(o), '_renderScheduledTweetLegend', function () {
                var e = o.props.scheduledFor
                return w.a.createElement(En.a, {
                  onPress: o._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Bn,
                })
              }),
              b()(h()(o), '_handlePressScheduledTweetLegend', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              b()(h()(o), '_renderEmojiPicker', function () {
                return w.a.createElement(Ct.a, {
                  onEmojiSelect: o._handleInsertEmoji,
                  size: 'medium',
                  style: o._getEmojiPickerButtonStyles(),
                  textInputRef: o._textInputRef || void 0,
                })
              }),
              b()(
                h()(o),
                '_getEmojiPickerButtonStyles',
                Object(Dt.a)(function () {
                  return [Pt.iconEmojiPicker, Pt.toolBarButton]
                }),
              ),
              b()(h()(o), '_isSchedulingDisabled', function () {
                var e = o.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  i = n.mediaTags,
                  r = n.pollActive,
                  s = n.quotedStatus,
                  l = n.text,
                  c = e.index,
                  d = e.isLast,
                  u = 0 === c && d,
                  m = t.conversationControlsValue !== Qe.a.all
                return Boolean(r || !u || (s && '' === l && !a.length) || m || i.length > 0)
              }),
              b()(h()(o), '_renderSchedulingButton', function () {
                return w.a.createElement(q.a, {
                  accessibilityLabel: va,
                  behavioralEventContext: Ua,
                  disabled: o._isSchedulingDisabled(),
                  hoverLabel: { label: Ea },
                  icon: Ha,
                  onClick: o._handleClickScheduler,
                  size: 'medium',
                  style: Pt.toolBarButton,
                  testID: Dn,
                  type: 'brandText',
                })
              }),
              b()(h()(o), '_handleClickScheduler', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), a()
              }),
              b()(h()(o), '_renderCloseButton', function () {
                var e = o.props.onRemoveComposer
                return w.a.createElement(q.a, {
                  accessibilityLabel: Ca,
                  hoverLabel: { label: Ta },
                  icon: Va,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              b()(h()(o), '_renderTweetAttachment', function () {
                var e = o.props,
                  t = e.data,
                  n = e.editable,
                  a = e.index,
                  i = e.isActive,
                  r = e.updateSingleComposer,
                  s = t.media,
                  l = t.pollActive,
                  c = t.pollChoices,
                  d = t.pollDuration,
                  u = t.quotedStatus
                if (0 === s.length && !l && !u) return null
                var m = o.hasAttachedVideo && (o._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.a.createElement(
                  W.a,
                  { onClick: o._handleFocus, style: [Pt.attachmentContainer, Pt.tweetAttachmentArea], testID: kn },
                  s.length > 0
                    ? w.a.createElement(da, {
                        editable: n,
                        isActive: i,
                        media: s,
                        onClickMedia: o.hasAttachedImage ? o._handleClickMediaDetail('crop') : void 0,
                        onEditMedia: o.hasAttachedImage
                          ? o._handleClickMediaDetail('crop')
                          : m
                          ? o._handleClickMediaDetail(m)
                          : void 0,
                        onEditSensitiveWarning:
                          o.hasAttachedImage || o.hasAttachedVideo
                            ? o._handleClickMediaDetail('sensitive_media')
                            : void 0,
                        onRemoveMedia: o._handleMediaRemoveFactory,
                        onSetMediaPreviewRef: o._handleSetMediaPreviewRef,
                        style: Pt.mediaPreview,
                      })
                    : null,
                  i ? o._renderMediaActions() : null,
                  l
                    ? w.a.createElement(yn, {
                        composerIndex: a,
                        editable: n,
                        initialChoices: c,
                        initialDuration: d,
                        isActive: i,
                        isPollValid: t.pollValid,
                        updateComposer: r,
                      })
                    : null,
                  u ? o._renderQuoteTweet(u) : null,
                )
              }),
              b()(h()(o), '_renderQuoteTweet', function (e) {
                var t = o.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? w.a.createElement(
                      Vn.a,
                      null,
                      w.a.createElement(xn.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : w.a.createElement(Tn.a, {
                      isCondensed: t.length > 0,
                      style: Pt.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              b()(h()(o), '_renderToolbar', function (e) {
                var t = o.props,
                  n = t.additionalToolbarContent,
                  a = t.data.media,
                  i = t.hidePoll,
                  r = t.hideScheduling,
                  s = t.isInlineReply,
                  l = t.isReply,
                  c = t.isSelfThreadReply,
                  d = t.richTextInputContext,
                  u = t.setActiveParentKey,
                  m = !!d,
                  p = !s && !i,
                  h = !s && !r
                return w.a.createElement(
                  W.a,
                  { style: Pt.toolBar, testID: Ln },
                  w.a.createElement(
                    W.a,
                    { style: Pt.toolBarIconsContainer },
                    w.a.createElement(Mt, {
                      media: a,
                      mediaAttachDisabled: o.mediaAttachDisabled,
                      onFilesAdded: o._handleFilesAdded,
                      setActiveParentKey: u,
                    }),
                    o._renderGifButton(),
                    p ? o._renderPollButton() : null,
                    m ? o._renderEmojiPicker() : null,
                    h ? o._renderSchedulingButton() : null,
                    o._renderGeoButton(),
                  ),
                  w.a.createElement(
                    W.a,
                    { style: Pt.toolBarIconsContainer },
                    e ? o._renderCountdownCircle() : null,
                    (l && !c) || !e
                      ? null
                      : w.a.createElement(
                          w.a.Fragment,
                          null,
                          w.a.createElement(W.a, { style: Pt.separator }),
                          o._renderAddComposerButton(),
                        ),
                    n,
                  ),
                )
              }),
              b()(h()(o), '_addOverflowStyle', function (e) {
                var t = o.props.richTextInputContext
                if (t) {
                  var n = e.getCurrentContent().getPlainText(),
                    a = n.length,
                    i = o._getParsedTweet(n).validRangeEnd,
                    r = i + 1 < a
                  if (o.state.hasOverflowStyle || r) {
                    var s = r ? i + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, s, o.state.hasOverflowStyle),
                      hasOverflowStyle: r,
                    }
                  }
                  return { editorState: e, hasOverflowStyle: r }
                }
              }),
              b()(h()(o), '_handleRichTextChange', function (e) {
                var t = o.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var a = t.convertEmojiToEntities(e)
                  o.setState(o._addOverflowStyle(a))
                }
                o._handleTextValueChange(n)
              }),
              b()(h()(o), '_handlePlainTextChange', function (e) {
                var t = zn.a.replaceCarriageReturns(e.target.value)
                o._handleTextValueChange(t)
              }),
              b()(h()(o), '_handleTextValueChange', function (e) {
                var t = o.props,
                  n = t.data,
                  a = n.key,
                  i = n.text,
                  r = t.onTextChange
                i !== e && r(e, a)
              }),
              b()(h()(o), '_handleClickAltTextShortcut', function () {
                o.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              b()(h()(o), '_handleClickSubtitlesShortcut', function () {
                o.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              b()(h()(o), '_handleClickMediaDetail', function (e) {
                return function (t) {
                  return function () {
                    var n = o.props,
                      a = n.analytics,
                      i = n.history
                    a.scribe({ element: 'media_detail_button', action: 'click' }),
                      (o.hasAttachedImage || o.hasAttachedVideo) &&
                        i.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              b()(h()(o), '_handleFilesAdded', function (e) {
                var t = o.props,
                  n = t.addToast,
                  a = t.data.pollActive,
                  i = t.onFilesAdded
                a ? n({ text: _a }) : i(e)
              }),
              b()(h()(o), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  o.props.onRemoveMedia(o.props.index, e)
                }
              }),
              b()(h()(o), '_handleInsertEmoji', function (e) {
                var t = o.state.editorState,
                  n = o.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  o._handleRichTextChange(a)
                }
              }),
              b()(h()(o), '_validateMedia', function (e) {
                var t = o.props.data.media
                return S.c(t.concat(e))
              }),
              b()(h()(o), '_handlePollAdd', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), a({ pollActive: !0 }, n)
              }),
              b()(h()(o), '_handleGeoButtonClick', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), a()
              }),
              b()(h()(o), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  o.focus()
              }),
              b()(h()(o), '_handleFocus', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isActive,
                  a = e.onFocus
                ;(0, e.setActiveParentKey)(),
                  n ||
                    (window.requestAnimationFrame(function () {
                      o._mediaPreviewRef && o._mediaPreviewRef.playVideo()
                    }),
                    a(t))
              }),
              b()(h()(o), '_handleEditorFocus', function () {
                return o.setState({ isFocused: !0 })
              }),
              b()(h()(o), '_formatCountdownNumber', function (e) {
                return Ba(Math.ceil(e / o._userLanguageWeight))
              }),
              b()(h()(o), '_getPlaceHolderText', function () {
                var e = o.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  i = e.index,
                  r = e.isReply,
                  s = e.isSelfThreadReply
                return a ? Da : n ? Fa : r && !s ? Na : s || i > 0 ? Ma : Oa
              }),
              b()(h()(o), '_getNumberOfAltTextEntries', function () {
                return o.props.data.media.reduce(function (e, t) {
                  var n
                  return null !== (n = t.mediaMetadata) && void 0 !== n && n.altText ? e + 1 : e
                }, 0)
              }),
              b()(
                h()(o),
                '_getParsedTweet',
                Object(Dt.a)(function (e) {
                  var t = fa.a[o.props.twitterTextConfigurationVersion]
                  return pa()(e, t)
                }),
              ),
              b()(h()(o), '_isEmpty', function () {
                var e = o.props.data
                return Object(It.c)(e)
              }),
              b()(h()(o), '_isScheduled', function () {
                var e = o.props.data.scheduledFor
                return Object(Rt.h)(e)
              }),
              b()(h()(o), '_autotagLocationIfNeeded', function () {
                var e = o.props,
                  t = e.data.taggedLocation,
                  n = e.fetchAutotaggedLocationIfNeeded,
                  a = e.index,
                  i = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && i({ taggedLocation: null != e ? e : null }, a)
                })
              }),
              b()(h()(o), '_handleSetMediaPreviewRef', function (e) {
                o._mediaPreviewRef = e
              }),
              b()(h()(o), '_setTextInputRef', function (e) {
                o._textInputRef = e
              })
            var r = e.data.text,
              s = e.richTextInputContext,
              l = e.userLanguage,
              c = (s || {}).initEditorState
            return (
              (o._conversationControlsCreationEnabled =
                !0 ===
                o.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (o._deleteNonemptyTweetstormComposerEnabled = o.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (o._userLanguageWeight = l && La.indexOf(l) > -1 ? 2 : 1),
              o._autotagLocationIfNeeded(),
              (o.state = { editorState: c ? c(r) : null, hasOverflowStyle: !1, isFocused: !1 }),
              o
            )
          }
          return (
            m()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof Et.a) && e.mediaFile.isVideo
                    })) &&
                    e.isActive &&
                    !this.props.isActive &&
                    this._mediaPreviewRef &&
                    this._mediaPreviewRef.pauseVideo()
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._textInputRef && this._textInputRef.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.data.taggedLocation,
                    a = t.isActive,
                    i = t.isExpanded,
                    o = t.isInline,
                    r = t.isLast,
                    s = t.loggedInUser,
                    l = t.windowWidth,
                    c = t.withAvatar,
                    d = !this._isEmpty(),
                    u = this._shouldRenderControls(d),
                    m = l < F.a.theme.breakpoints.small
                  return w.a.createElement(
                    W.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [Pt.root, !a && Pt.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      Hn.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          c
                            ? w.a.createElement(Un.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(Wn.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: Pt.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: o,
                                })
                              })
                            : null,
                          r
                            ? null
                            : w.a.createElement(W.a, {
                                style: [Pt.conversationLine, !c && Pt.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: i ? Pt.avatarContainerExpanded : Pt.avatarContainer,
                        cellStyle: Pt.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        W.a,
                        { onFocus: this._handleEditorFocus, style: Pt.inputArea },
                        w.a.createElement(
                          Gn.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: Pt.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(W.a, { style: Pt.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        W.a,
                        { style: [(u || n) && Pt.controlsContainer, m ? Pt.mobileControlsLayout : Pt.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(m),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      w.a.createElement(qn.b, { show: a && i }, this._renderToolbar(d)),
                    ),
                  )
                },
              },
              {
                key: '_renderGifButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    i = e.history,
                    o = e.loggedInUser,
                    r = e.setActiveParentKey,
                    s = a || n.length || !o
                  return w.a.createElement(Tt.a, {
                    enabled: !s,
                    gifSearchKeySource: xt.a.Composition,
                    history: i,
                    onPress: r,
                    testID: Mn,
                  })
                },
              },
              {
                key: '_renderPollButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    i = t.quotedStatus,
                    o = e.loggedInUser,
                    r = this._isScheduled(),
                    s = !(!(a || n.length || i || r) && o)
                  return w.a.createElement(q.a, {
                    accessibilityLabel: ga,
                    behavioralEventContext: Wa,
                    disabled: s,
                    hoverLabel: { label: xa },
                    icon: za,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: Pt.toolBarButton,
                    testID: Pn,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderGeoButton',
                value: function () {
                  var e = this.props,
                    t = e.data.taggedLocation,
                    n = e.geoEnabled,
                    a = e.loggedInUser,
                    i = !(n && a),
                    o = t ? w.a.createElement($n.a, null) : w.a.createElement(ea.a, null)
                  return w.a.createElement(q.a, {
                    accessibilityLabel: Sa,
                    behavioralEventContext: qa,
                    disabled: i,
                    hoverLabel: { label: Sa },
                    icon: o,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: Pt.toolBarButton,
                    testID: On,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderMediaActions',
                value: function () {
                  var e = this.props.data,
                    t = e.gifMetadata,
                    n = e.media,
                    a = 0 !== e.mediaTags.length,
                    i =
                      n.some(function (e) {
                        return e.mediaFile && e.mediaFile.isGif
                      }) || this.hasExternalMedia
                  if (!(this.hasAttachedImage || this.hasAttachedVideo || t || i)) return null
                  var o = this.context.featureSwitches.isTrue('rweb_video_tagging_enabled')
                  return w.a.createElement(
                    W.a,
                    { style: Pt.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          W.a,
                          { style: Pt.addImageTextPadding },
                          w.a.createElement(wt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !o) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          D.b,
                          {
                            accessibilityLabel: Aa,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [Pt.addImageTextContainer, Pt.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || i
                      ? w.a.createElement(
                          D.b,
                          {
                            accessibilityLabel: Ia({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: Pt.addImageTextContainer,
                          },
                          this._renderAltTextLabel(),
                        )
                      : null,
                    this.hasAttachedVideo ? this._renderSubtitlesLabel() : null,
                  )
                },
              },
              {
                key: '_renderTagPeopleLabel',
                value: function () {
                  return w.a.createElement(
                    D.b,
                    { color: 'gray700', size: 'subtext2', testID: An },
                    w.a.createElement(ta.a, { style: Pt.addImageActionIcon }),
                    Aa,
                  )
                },
              },
              {
                key: '_renderTaggedUsers',
                value: function () {
                  var e = this.props,
                    t = e.data.mediaTags,
                    n = e.loggedInUser,
                    a = t.map(function (e) {
                      return {
                        name: e.data.name,
                        screen_name: e.data.screen_name,
                        type: e.type,
                        user_id: e.data.id_str,
                      }
                    })
                  return w.a.createElement(
                    D.b,
                    { color: 'gray700', size: 'subtext2', testID: Nn },
                    w.a.createElement(na.a, { style: Pt.addImageActionIcon }),
                    w.a.createElement(Kn.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
                  )
                },
              },
              {
                key: '_renderAltTextLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = e[0].mediaMetadata
                  return this.hasAttachedAltText
                    ? e.length > 1
                      ? w.a.createElement(
                          D.b,
                          { color: 'gray700', size: 'subtext2', testID: Rn },
                          w.a.createElement(ia.a, { style: Pt.addImageActionIcon }),
                          Ra({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          D.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: Rn },
                          w.a.createElement(ia.a, { style: Pt.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        D.b,
                        { color: 'gray700', size: 'subtext2', testID: Rn },
                        w.a.createElement(aa.a, { style: Pt.addImageActionIcon }),
                        Ia({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? oa.a : ra.a
                  return w.a.createElement(
                    D.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: Pt.addImageTextContainer,
                      testID: In,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Pa : void 0,
                      style: Pt.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : ka,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = fa.a[n],
                    i = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(Xn.a, {
                    count: i,
                    formatNumber: this._formatCountdownNumber,
                    maxCount: a.maxWeightedTweetLength,
                    warningCount: 260,
                  })
                },
              },
              {
                key: '_renderAddComposerButton',
                value: function () {
                  var e = this.props,
                    t = e.disableAddTweet,
                    n = e.isCommunityTweetFromProtectedUser,
                    a = e.isInline,
                    i = e.loggedInUser,
                    o = e.onAddComposer,
                    r = this._isEmpty(),
                    s = this._isScheduled(),
                    l = t || r || s || !i || n
                  return w.a.createElement(q.a, {
                    accessibilityLabel: ba,
                    behavioralEventContext: Ga,
                    disabled: l,
                    hoverLabel: { label: wa },
                    icon: ja,
                    link: !a || r || l ? void 0 : '/compose/tweet',
                    onPress: o,
                    size: 'xSmall',
                    testID: Sn,
                    type: 'brandOutlined',
                  })
                },
              },
              {
                key: 'mediaAttachDisabled',
                get: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    i = e.loggedInUser,
                    o = n.length,
                    r = n.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    s = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof Et.a) && e.mediaFile.isVideo
                    })
                  return 4 === o || r || s || a || this.hasExternalMedia || !i
                },
              },
              {
                key: 'hasAttachedImage',
                get: function () {
                  return this.props.data.media.some(function (e) {
                    var t
                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isImage
                  })
                },
              },
              {
                key: 'hasAttachedVideo',
                get: function () {
                  var e = this.props.data.media.some(function (e) {
                    var t
                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isVideo
                  })
                  return (
                    e &&
                      (this._videoTrimmerEnabled = this.context.featureSwitches.isTrue(
                        'responsive_web_video_trimmer_enabled',
                      )),
                    e
                  )
                },
              },
              {
                key: 'attachedSubtitles',
                get: function () {
                  var e,
                    t = this.props.data.media
                  if (this.hasAttachedVideo) {
                    var n = t.find(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof Et.a) && e.mediaFile.isVideo
                    })
                    return null == n || null === (e = n.mediaMetadata) || void 0 === e ? void 0 : e.subtitles
                  }
                },
              },
              {
                key: 'hasAttachedAltText',
                get: function () {
                  return this._getNumberOfAltTextEntries() > 0
                },
              },
              {
                key: 'hasExternalMedia',
                get: function () {
                  return this.props.data.media.some(function (e) {
                    return !!e.externalMediaDetails
                  })
                },
              },
              {
                key: 'shouldRenderCommunitiesRules',
                get: function () {
                  var e = this.props.audienceControlsValue,
                    t = this.context.featureSwitches.isTrue('c9s_enabled'),
                    n = e.communityIdValue || void 0,
                    a = t && n,
                    i = this._shouldRenderControls(!1, 'conversation')
                  return Boolean(i && a)
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Ka, 'contextType', I.a),
        b()(Ka, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Xa = Object(rt.a)(Ka),
        Ya = w.a.createElement(D.b, { weight: 'bold' }),
        Qa = w.a.createElement(D.b, { color: 'link' }),
        Za = function (e) {
          return '@'.concat(e)
        },
        Ja = n('SrIh'),
        $a = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        ei = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            o = {
              replyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.a.cloneElement(Qa, null, B.a.b50e199a({ userName: Za(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(Qa, null, B.a.f2e4dd37({ replyUserName: Za(t), otherUserName: Za(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.a.cloneElement(
                    Qa,
                    null,
                    B.a.eccfddc3({ userOneName: Za(t), userTwoName: Za(a), userThreeName: Za(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.a.cloneElement(Qa, null, B.a.h758cd22({ userOneName: Za(n), userTwoName: Za(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(Qa, null, B.a.e9f8a0eb({ userName: Za(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(Qa, null, B.a.df7e9fbc({ replyUserName: Za(n), otherUserName: Za(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  i = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.a.cloneElement(
                    Qa,
                    null,
                    B.a.b45fa505({ userOneName: Za(n), userTwoName: Za(i), userThreeName: Za(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  i = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.a.cloneElement(Qa, null, B.a.a4383815({ userOneName: Za(a), userTwoName: Za(i), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(Qa, null, B.a.ff792e35({ userName: Za(t) })),
                  w.a.cloneElement(Ya, null, B.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(Qa, null, B.a.g7d5e985({ replyUserName: Za(t), otherUserName: Za(n) })),
                  w.a.cloneElement(Ya, null, B.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.a.cloneElement(
                    Qa,
                    null,
                    B.a.fe5a61e9({ userOneName: Za(t), userTwoName: Za(a), userThreeName: Za(n) }),
                  ),
                  w.a.cloneElement(Ya, null, B.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(Qa, null, B.a.bc9dd514({ userOneName: Za(n), userTwoName: Za(a), othersCount: t })),
                  w.a.cloneElement(Ya, null, B.a.de5071ba),
                )
              },
            },
            r = S.a({ inReplyToStatus: a, loggedInUserId: i }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            s = a.retweeted_status || a,
            l = s.exclusivity_info,
            c = s.user,
            d = r.filter(function (e) {
              return e.id_str !== c.id_str
            }),
            u = Oe()(d, 2),
            m = u[0],
            p = u[1],
            h = [c, m, p].map($a),
            f = Oe()(h, 3),
            g = f[0],
            v = f[1],
            y = f[2],
            _ = r.length - 2
          switch (r.length) {
            case 0:
              return Object(Ja.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? o.communityReplyToOne({ communityName: t, userName: g })
                : l
                ? o.exclusiveReplyToOne({ userName: g })
                : o.replyToOne({ userName: g })
            case 2:
              return t
                ? o.communityReplyToTwo({ communityName: t, userOneName: g, userTwoName: v })
                : l
                ? o.exclusiveReplyToTwo({ userOneName: g, userTwoName: v })
                : o.replyToTwo({ userOneName: g, userTwoName: v })
            case 3:
              return t
                ? o.communityReplyToThree({ communityName: t, userOneName: g, userTwoName: v, userThreeName: y })
                : l
                ? o.exclusiveReplyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
                : o.replyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
            default:
              return t
                ? o.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: v, othersCount: _ })
                : l
                ? o.exclusiveReplyToMany({ userOneName: g, userTwoName: v, othersCount: _ })
                : o.replyToMany({ userOneName: g, userTwoName: v, othersCount: _ })
          }
        },
        ti = w.a.memo(ei),
        ni = n('fs1G'),
        ai = n('BLtI'),
        ii = n('kY28')
      function oi(e) {
        null == e || e.preventDefault()
      }
      var ri = F.a.create(function (e) {
          return {
            replyUsersContainer: {
              flexDirection: 'row',
              minHeight: e.spaces.space12,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: 0,
            },
            grid: { flexGrow: 1, flexShrink: 1 },
            repliesTextContainer: { flexGrow: 1 },
            repliesMessage: { flexGrow: 1, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space4 },
            conversationLineContainer: { alignItems: 'center' },
            conversationLine: {
              backgroundColor: e.colors.gray200,
              flexGrow: 1,
              minHeight: 0,
              width: e.componentDimensions.conversationLineWidth,
              marginBottom: e.spaces.space4,
            },
          }
        }),
        si = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            o = e.onPress,
            r = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            l = void 0 === s || s
          return w.a.createElement(
            W.a,
            null,
            l
              ? w.a.createElement(ai.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: ni.a,
                  onAvatarClick: oi,
                  onEntityClick: oi,
                  onMediaClick: oi,
                  onReplyContextClick: oi,
                  replyContext: ii.a.ReplyContextTypes.None,
                  tweet: a,
                  withAvatarLink: !1,
                  withCardLinks: !0,
                  withInlineMedia: !1,
                  withQuotedTweetLinks: !0,
                  withSocialContext: !1,
                  withTimestampLink: !1,
                  withUserHoverCard: !1,
                })
              : null,
            w.a.createElement(
              W.a,
              { style: ri.replyUsersContainer },
              w.a.createElement(
                Hn.a,
                {
                  avatarCell: l ? w.a.createElement(W.a, { style: ri.conversationLine }) : null,
                  avatarCellStyle: ri.conversationLineContainer,
                  cellStyle: ri.repliesTextContainer,
                  style: ri.grid,
                },
                r
                  ? w.a.createElement(
                      D.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: o, style: l && ri.repliesMessage },
                      w.a.createElement(ti, {
                        communityName: t,
                        excludedRecipients: n,
                        inReplyToStatus: a,
                        loggedInUserId: i,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        li = n('Tb0w'),
        ci = n('1YZw'),
        di = n('pidX'),
        ui = n('5oBF'),
        mi = n('JYYi'),
        pi = n('/Rsk'),
        hi = n('qlwE'),
        fi = n('XOJV'),
        gi = n('G6rE'),
        vi = n('AspN'),
        yi = n('oEGd'),
        _i = n('P1r1'),
        bi = ['mediaIds'],
        Ci = function (e) {
          return e.parentTweetId || (e.isInline ? mi.a.homeTimeline : mi.a.modal)
        },
        wi = function (e, t) {
          var n = Ci(t)
          return se.l(e, n)
        },
        Ti = function (e, t) {
          var n = Ci(t)
          return se.m(e, n)
        },
        xi = function (e, t) {
          var n = Ci(t)
          return se.k(e, n)
        },
        Ei = function (e, t) {
          var n = Mi(e, t),
            a = xi(e, t).communityIdValue || void 0,
            i = (null == n ? void 0 : n.community_id_str) || a,
            o = i ? A.c.select(e, i) : void 0
          return o ? o.name : void 0
        },
        Si = function (e, t) {
          var n = Ci(t)
          return se.n(e, n)
        },
        Ii = function (e, t) {
          var n = Ci(t)
          return se.j(e, n)
        },
        Ri = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        Ai = Object(de.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          gi.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        ki = function (e, t) {
          return t.parentTweetId || Pi(e, t) || Oi(e, t)
        },
        Pi = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        Oi = Ri(function (e) {
          return e.inReplyToStatusId
        }),
        Mi = function (e, t) {
          var n = ki(e, t)
          return n ? fi.a.selectHydrated(e, n) : void 0
        },
        Di = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Ni = Ri(function (e) {
          return e.hasArticleNudge
        }),
        Fi = Ri(function (e) {
          return e.convoCardData
        }),
        Li = Ri(function (e) {
          return e.externalMedia
        }),
        Bi = Ri(function (e) {
          return e.externalMediaFiles
        }),
        Vi = Ri(function (e) {
          return e.previewTweetId
        }),
        ji = Ri(function (e) {
          return e.defaultText
        }),
        zi = function (e, t) {
          var n = ji(e, t),
            a = Object(di.a)(t.location)
          return (Di(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        Hi = Ri(function (e) {
          return e.quotedStatusId
        }),
        Ui = Ri(function (e) {
          return e.quotedStatus
        }),
        Wi = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : Ui(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Hi(e, t)
              return n ? fi.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        Gi = Ri(function (e) {
          return e.isSelfThreadReply
        }),
        qi = Ri(function (e) {
          return e.positionCursorAtBeginning
        }),
        Ki = Ri(function (e) {
          return e.promotedContent
        }),
        Xi = function () {
          return Object(de.createSelector)(wi, zi, Wi, vi.j, function (e, t, n, a) {
            return e.map(function (e, i) {
              return l()(
                l()({}, ((o = e).mediaIds, Je()(o, bi))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === i ? n : void 0,
                  text: 0 === i && t ? t : e.text,
                },
              )
              var o
            })
          })
        },
        Yi = {
          addComposer: se.a,
          addToast: ci.b,
          createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: se.b,
          deletePreviewTweet: ui.c,
          fetchAutotaggedLocationIfNeeded: pi.a,
          fetchTweetIfNeeded: fi.a.fetchOneIfNeeded,
          removeComposer: se.f,
          resetDraft: se.g,
          retweet: fi.a.retweet,
          schedule: se.i,
          draftTweet: se.e,
          send: se.r,
          updateActiveComposerIndex: se.t,
          updateAudienceControlsValue: se.u,
          updateConvoCardState: li.b,
          preUploadMedia: vi.e,
          addMedia: vi.b,
          processMultipleMedia: vi.g,
          removeMediaUpload: vi.i,
          updateSingleComposer: se.x,
          setActiveParentKey: se.s,
          copyDataFromInlineComposerToModalComposer: se.c,
          copyDataFromInlineReplyComposerToModalComposer: se.d,
        },
        Qi = Object(yi.e)(function () {
          return Object(de.createStructuredSelector)({
            activeComposerIndex: Ii,
            activeUser: Ai,
            altTextNudgeType: _i.h,
            audienceControlsValue: xi,
            composerData: Xi(),
            dataSaverMode: _i.k,
            excludedRecipients: Ti,
            externalMedia: Li,
            externalMediaFiles: Bi,
            geoEnabled: _i.p,
            hasArticleNudge: Ni,
            inReplyToStatus: Mi,
            inReplyToStatusId: ki,
            isIntentRoute: Di,
            isSelfThreadReply: Gi,
            isSending: Si,
            isSuperFollowsCreator: me.l,
            positionCursorAtBeginning: qi,
            loggedInUser: gi.e.selectLoggedInUser,
            prepopulatedText: zi,
            previewTweetId: Vi,
            promotedContent: Ki,
            scheduledFor: se.o,
            selectedCommunityName: Ei,
            sendingProgress: se.p,
            convoCardData: Fi,
            undoTweetSettings: hi.q,
            userLanguage: me.o,
            quotedStatusId: Hi,
          })
        }, Yi),
        Zi = n('45mF'),
        Ji = n('c0ZR'),
        $i = n('W5XZ'),
        eo = n('Drq4'),
        to = n('I8M8'),
        no = n('7myi'),
        ao = n('7nmT'),
        io = n.n(ao),
        oo = n('vbWy'),
        ro = n('Rp9C'),
        so = n('Q5Mu'),
        lo = n('N5qz'),
        co = 'tweetButton',
        uo = 'tweetButtonInline',
        mo = Object(k.a)()
          .propsFromState(function () {
            return { loggedInUser: gi.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return {
              userName: t && t.name,
              userProfileImageUrl: t && t.profile_image_url_https,
              userScreenName: t && t.screen_name,
            }
          })
          .withAnalytics(),
        po = n('cHvH'),
        ho = n('sgih'),
        fo = n('xKuM'),
        go = n('5Vk4'),
        vo = F.a.create(function (e) {
          return {
            mainCard: {
              marginHorizontal: 'auto',
              paddingVertical: e.spaces.space16,
              textAlign: 'center',
              alignItems: 'center',
            },
            largeScreenCard: { width: '70%' },
            smallScreenCard: { width: '85%' },
            sheetStyle: { justifyContent: 'center' },
          }
        }),
        yo = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            i = e.onMaskClick,
            o = e.sheetType,
            r = e.showActionButton
          return w.a.createElement(po.a, null, function (e) {
            var s = e.windowWidth > F.a.theme.breakpoints.small
            return w.a.createElement(
              ho.a,
              { onMaskClick: i, style: vo.sheetStyle, type: o, withMask: !0 },
              r &&
                w.a.createElement(fo.a, {
                  leftControl: w.a.createElement(go.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              w.a.createElement(W.a, { style: [vo.mainCard, s ? vo.largeScreenCard : vo.smallScreenCard] }, n),
            )
          })
        },
        _o = B.a.cb7c0987,
        bo = B.a.de3bcf27,
        Co = B.a.e710ce75,
        wo = B.a.h11e5910,
        To = B.a.b7ec04f3,
        xo = B.a.i62a03aa,
        Eo = F.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        So = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return w.a.createElement(
            yo,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(D.b, { size: 'title4', style: Eo.itemPadding, weight: 'heavy' }, _o),
            w.a.createElement(D.b, { color: 'gray700', style: Eo.itemPadding }, bo),
            w.a.createElement(D.b, { color: 'gray700', style: Eo.itemPadding }, Co),
            w.a.createElement(
              W.a,
              { style: Eo.buttonContainer },
              w.a.createElement(D.b, { size: 'title4', style: Eo.itemPadding, weight: 'heavy' }, wo),
              w.a.createElement(q.a, { onPress: a, style: Eo.itemPadding, type: 'brandOutlined' }, To),
              w.a.createElement(q.a, { onPress: n, style: Eo.itemPadding, type: 'brandOutlined' }, xo),
            ),
          )
        },
        Io = n('cm6r'),
        Ro = F.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        Ao = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return w.a.createElement(Io.a, { interactiveStyles: null, onPress: a }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(q.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: Ro.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(D.b, { color: 'gray700' }, n),
            )
          })
        },
        ko = n('sjK1'),
        Po = n('FDY4'),
        Oo = n('tevE'),
        Mo = n('jV+4'),
        Do = n('UgB4'),
        No = n('TW8A'),
        Fo = n('hiGS'),
        Lo = n('WtWS'),
        Bo = n('Lsrn'),
        Vo = n('k/Ka'),
        jo = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Vo.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Bo.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
              }),
            ),
          )
        }
      jo.metadata = { width: 24, height: 24 }
      var zo = jo,
        Ho = [
          { headlineText: B.a.f3a7a80c, subTextLine1: B.a.ge52d1de, subTextLine2: null },
          { headlineText: B.a.j311bf49, subTextLine1: B.a.ae42ebff, subTextLine2: B.a.aa350ab1 },
          { headlineText: B.a.j18b2956, subTextLine1: B.a.f6bee896, subTextLine2: B.a.dddd0995 },
          { headlineText: B.a.d02a94fa, subTextLine1: B.a.dddd0995, subTextLine2: null },
          { headlineText: B.a.i018b746, subTextLine1: B.a.b8d85df9, subTextLine2: B.a.d5ca11f0 },
        ],
        Uo = B.a.h11e5910,
        Wo = B.a.abd845fd,
        Go = B.a.bea869b3,
        qo = B.a.d96cf7cd,
        Ko = B.a.d3145da8,
        Xo = F.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
            profanityIcon: {
              backgroundColor: e.colors.primary,
              color: e.colors.whiteOnColor,
              width: e.spaces.space48,
              height: e.spaces.space48,
              borderRadius: e.borderRadii.infinite,
            },
            tweetContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              width: '100%',
              textAlign: 'left',
            },
            tweetContent: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
            tweetBody: { flexDirection: 'row' },
            userName: { paddingBottom: e.spaces.space4 },
            mobileButtonContainer: {
              justifyContent: 'space-around',
              flexDirection: 'row',
              width: '100%',
              marginTop: e.spaces.space72,
            },
            thanksContainer: { flexDirection: 'row', alignItems: 'center' },
            thanksCheckMark: { color: F.a.theme.colors.primary, marginRight: e.spaces.space8 },
            photos: {
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginRight: e.spaces.space12,
              flex: '3 1 0%',
            },
            textStyle: { flex: '8 1 0%' },
          }
        }),
        Yo = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            i = e.onDismiss,
            o = e.onEditTweet,
            r = e.onSendTweet,
            s = e.onWeGotItWrong,
            l = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            m = w.a.useContext(I.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            p = Ho[(m = m >= 0 && m <= 4 ? m : 0)]
          return w.a.createElement(po.a, null, function (e) {
            var m,
              h,
              f,
              g = e.windowWidth
            return w.a.createElement(
              yo,
              {
                actionButtonType: 'close',
                onActionButtonClick: i,
                onMaskClick: i,
                sheetType: 'full',
                showActionButton: g > F.a.theme.breakpoints.medium,
              },
              w.a.createElement(zo, { style: [Xo.profanityIcon, Xo.itemPadding] }),
              w.a.createElement(Oo.a, { size: 'title4', style: Xo.itemPadding, weight: 'heavy' }, p.headlineText),
              w.a.createElement(D.b, { color: 'gray700', style: Xo.itemPadding }, p.subTextLine1),
              w.a.createElement(D.b, { color: 'gray700', style: Xo.itemPadding }, p.subTextLine2),
              w.a.createElement(
                W.a,
                { style: [Xo.tweetContainer, Xo.itemPadding] },
                w.a.createElement(
                  W.a,
                  { style: Xo.tweetContent },
                  w.a.createElement(Mo.a, { name: c, profileImageUrl: d, screenName: u, style: Xo.userName }),
                  w.a.createElement(
                    W.a,
                    { style: Xo.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          i = ''
                        if (e.externalMediaDetails) i = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof ko.c) i = e.mediaFile.thumbnail
                        else if (null !== (t = e.mediaFile) && void 0 !== t && t.url) {
                          var o
                          i = null === (o = e.mediaFile) || void 0 === o ? void 0 : o.url
                        }
                        return {
                          accessibilityLabel: '',
                          url: i,
                          width: (null === (n = e.mediaFile) || void 0 === n ? void 0 : n.width) || 100,
                          height: (null === (a = e.mediaFile) || void 0 === a ? void 0 : a.height) || 100,
                          expandedUrl: '',
                          shouldShowAltLabel: !1,
                        }
                      })
                      return w.a.createElement(
                        W.a,
                        { style: Xo.photos },
                        w.a.createElement(Po.a, {
                          containerAspectRatio: 1,
                          images: e,
                          previewMode: !1,
                          singleImageMaxAspectRatio: 1,
                          singleImageMinAspectRatio: 1,
                          withCenterCrop: !0,
                          withLink: !1,
                        }),
                      )
                    })(),
                    w.a.createElement(D.b, { style: Xo.textStyle }, l),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    W.a,
                    { style: Xo.thanksContainer },
                    w.a.createElement(Lo.a, { style: Xo.thanksCheckMark }),
                    w.a.createElement(D.b, { align: 'center', style: Xo.itemPadding }, Ko),
                  )
                : w.a.createElement(D.b, { align: 'center', onPress: s, style: Xo.itemPadding, withUnderline: !0 }, Uo),
              g > F.a.theme.breakpoints.small
                ? w.a.createElement(
                    W.a,
                    { style: Xo.buttonContainer },
                    w.a.createElement(q.a, { onPress: o, style: Xo.itemPadding, type: 'brandFilled' }, Wo),
                    w.a.createElement(q.a, { onPress: r, style: Xo.itemPadding, type: 'brandOutlined' }, Go),
                    w.a.createElement(q.a, { onPress: a, style: Xo.itemPadding, type: 'destructiveText' }, qo),
                  )
                : ((m = w.a.createElement(Do.a, { style: { color: F.a.theme.colors.text } })),
                  (h = w.a.createElement(No.a, { style: { color: F.a.theme.colors.primary } })),
                  (f = w.a.createElement(Fo.a, { style: { color: F.a.theme.colors.red500 } })),
                  w.a.createElement(
                    W.a,
                    { style: Xo.mobileButtonContainer },
                    w.a.createElement(Ao, { icon: m, label: Go, onPress: r }),
                    w.a.createElement(Ao, { icon: h, label: Wo, onPress: o }),
                    w.a.createElement(Ao, { icon: f, label: qo, onPress: a }),
                  )),
            )
          })
        },
        Qo = mo(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            i = e.onDeleteTweet,
            o = e.onDismiss,
            r = e.onEditTweet,
            s = e.onSendTweet,
            l = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            m = w.a.useState(!1),
            p = Oe()(m, 2),
            h = p[0],
            f = p[1],
            g = w.a.useState(!1),
            v = Oe()(g, 2),
            y = v[0],
            _ = v[1],
            b = function (e) {
              var n = e.action,
                i = e.element,
                o = e.page,
                r = [{ nudge_id: a }]
              t.scribe({ action: n, data: { items: r }, element: i, page: o, section: 'dialog' })
            }
          return h
            ? w.a.createElement(So, {
                onBack: function () {
                  b({ action: 'back', element: 'action', page: 'nudge_more_info' }), f(!1)
                },
                onNo: function () {
                  b({ action: 'got_it_wrong_no', element: 'action', page: 'nudge_more_info' }), _(!0), f(!1)
                },
                onYes: function () {
                  b({ action: 'got_it_wrong_yes', element: 'action', page: 'nudge_more_info' }), _(!0), f(!1)
                },
              })
            : w.a.createElement(Yo, {
                hasSentFeedback: y,
                media: n,
                onDeleteTweet: function () {
                  b({ action: 'cancel', element: 'action', page: 'nudge' }), i()
                },
                onDismiss: function () {
                  b({ action: 'dismiss', element: 'action', page: 'nudge' }), o()
                },
                onEditTweet: function () {
                  b({ action: 'revise', element: 'action', page: 'nudge' }), r()
                },
                onSendTweet: function () {
                  b({ action: 'send', element: 'action', page: 'nudge' }), s()
                },
                onWeGotItWrong: function () {
                  b({ action: 'more_info', element: 'action', page: 'nudge' }),
                    b({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: l,
                userName: c,
                userProfileImageUrl: d,
                userScreenName: u,
              })
        }),
        Zo = n('aITJ'),
        Jo = n('eb3s'),
        $o = n('JYMr'),
        er = n('sCk0'),
        tr = n('3A2y'),
        nr = n('zrOZ'),
        ar = n('s1N3'),
        ir = n('4FGy'),
        or = n('mN6z'),
        rr = n('eyty'),
        sr = n('rziq'),
        lr = n('lsKC'),
        cr = n('jTgF'),
        dr = B.a.d28215f0,
        ur = B.a.ec909a54,
        mr = B.a.jd53409d,
        pr = {
          singular: B.a.edae65de,
          plural: B.a.a859846a,
          oneOfMultiple: B.a.e90118f5,
          someOfMultiple: B.a.c211dcb1,
        },
        hr = { singular: B.a.d7c26bfb, plural: B.a.a75e3ccc },
        fr = B.a.dcb7e3a0,
        gr = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            i = a === e.numberOfImages
          return (
            1 === a
              ? ((n = hr.singular), (t = i ? pr.singular : pr.oneOfMultiple))
              : ((n = hr.plural), (t = i ? pr.plural : pr.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(fr)
          )
        },
        vr = B.a.c1bf53b0,
        yr = B.a.bb8170da,
        _r = B.a.dad5a4b8,
        br = B.a.e65aed64,
        Cr = B.a.bc2ceaf2,
        wr = B.a.d8222374,
        Tr = B.a.j890123a,
        xr = B.a.bb01231c,
        Er = B.a.d4ab68e2,
        Sr = B.a.d8af8a4c,
        Ir = B.a.d09d4c05,
        Rr = B.a.i2209530,
        Ar = B.a.bf9b89e4,
        kr = B.a.f277e949,
        Pr = B.a.b551cd22,
        Or = B.a.f026a7fa,
        Mr = B.a.a5d4fda0,
        Dr = B.a.ib067d6a,
        Nr = E.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Fr = { element: 'alt_text_prompt' },
        Lr = { component: 'article_nudge' },
        Br = { viewType: 'send_tweet' },
        Vr = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        jr = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i, o, s
            d()(this, n),
              (s = t.call(this, e, a)),
              b()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? mi.a.homeTimeline : mi.a.modal)
              }),
              b()(h()(s), '_updateSingleComposer', function (e, t) {
                return (0, s.props.updateSingleComposer)({ updates: e, index: t, parentKey: s._getParentKey() })
              }),
              b()(h()(s), '_resetDraft', function () {
                ;(0, s.props.resetDraft)({ parentKey: s._getParentKey(), isPreview: s.isPreview })
              }),
              b()(h()(s), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              b()(h()(s), '_syncTexts', function () {
                var e = s.props.composerData,
                  t = s.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && s._updateSingleComposer({ text: a }, n)
                })
              }),
              b()(h()(s), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(s), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              b()(h()(s), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(s), '_handleDeletePreviewTweet', function () {
                var e = s.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId
                n && t(n)
              }),
              b()(h()(s), '_handleAnimateComplete', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = io.a.findDOMNode(s._composerRefs[t])
                if (a instanceof window.Element) {
                  var i = a.getBoundingClientRect(),
                    o = i.bottom,
                    r = i.top,
                    l = Math.max(r, window.scrollY)
                  if (l < window.pageYOffset || o > window.innerHeight) {
                    var c = n ? l - n() - 14 : l - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      Nr ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
                    })
                  }
                }
              }),
              b()(h()(s), '_handleFetchTweetIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  i = e.inReplyToStatusId,
                  o = e.quotedStatus,
                  r = e.quotedStatusId
                !a && i && n(i).catch(t($i.a)), !o && r && n(r).catch(t($i.a))
              }),
              b()(h()(s), '_blockHistory', function (e, t) {
                var n = s.props,
                  a = n.audienceControlsValue,
                  i = n.isInline,
                  o = !i && /unsent/.test(e.pathname),
                  r = !i && !/\/compose\/tweet\/?$/.test(e.pathname)
                return s.shouldShowDiscardConfirmation && 'POP' === t && r
                  ? (s.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : s._canSaveDraft && o && 'PUSH' === t
                  ? s.shouldShowDiscardConfirmation
                    ? (s.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: o }), !1)
                    : (s._resetDraft(), !0)
                  : s.shouldShowBackgroundSendConfirmation && 'POP' === t && r
                  ? (s._cancelAllMediaUploads(), !1)
                  : !('POP' === t && r && s._areComposersEmptyOrUnchanged && !Object(It.a)(a)) || (s._resetDraft(), !0)
              }),
              b()(h()(s), '_getKeyCommandHandlers', function () {
                return s.state.typeaheadActive ? s._keyCommandHandlersForActiveTypeahead : s._keyCommandHandlers
              }),
              b()(h()(s), 'handleTweetOrRetweet', function () {
                if (
                  (s._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  s._areComposersValid())
                )
                  return s.shouldShowAltTextPrompt
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(l()(l()({}, Fr), {}, { action: 'show' })))
                    : s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleTweetOrRetweet', function () {
                return s.isRetweet ? s._handleRetweet() : s._handleTweet()
              }),
              b()(h()(s), '_renderReplyContext', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  i = e.isInline,
                  o = e.isSelfThreadReply,
                  r = e.selectedCommunityName
                if (a && s._shouldBeExpanded())
                  return w.a.createElement(si, {
                    communityName: r,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: s._handleViewRecipients,
                    shouldDisplayRepliesText: !o,
                    showParentTweet: !i,
                  })
              }),
              b()(h()(s), '_renderAltTextPrompt', function () {
                var e = s._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.a.createElement(Jo.a, {
                  Icon: eo.a,
                  cancelButtonLabel: yr,
                  confirmButtonLabel: vr({ numOfDescriptions: t }),
                  headline: mr,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: gr({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              b()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.a.createElement(Qo, {
                  media: n,
                  nudgeId: s.state.nudgeId,
                  onDeleteTweet: s._handleReplyNudgeDeleteTweet,
                  onDismiss: s._handleReplyNudgeDismiss,
                  onEditTweet: s._handleReplyNudgeEditTweet,
                  onSendTweet: s._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              b()(h()(s), '_handleReplyNudgeDeleteTweet', function () {
                s._hideToxicReplyNudge(), s._handleConfirmDiscardTweet()
              }),
              b()(h()(s), '_handleReplyNudgeDismiss', function () {
                s._hideToxicReplyNudge()
              }),
              b()(h()(s), '_handleReplyNudgeEditTweet', function () {
                s._hideToxicReplyNudge()
              }),
              b()(h()(s), '_handleReplyNudgeSendTweet', function () {
                s._hideToxicReplyNudge(), s._handleSendTweet()
              }),
              b()(h()(s), '_setRootRef', function (e) {
                e && (s._root = e)
              }),
              b()(h()(s), '_handleTweet', function () {
                var e = s.props.composerData[0].scheduledFor
                s.setState({ errorMessage: void 0 }),
                  e ? Object(Rt.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              b()(h()(s), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = s.props,
                    i = a.analytics,
                    o = a.createLocalApiErrorHandler
                  if (Object(cr.d)(n) && n.code === to.b.CANCELED) return i.scribeAction(e), Promise.resolve()
                  var r = Object(cr.b)(n)
                  if (r) return s.setState({ errorMessage: r }), Promise.resolve()
                  var c = t || Object(Zi.a)(void 0, !1)
                  o(l()({}, c))(n)
                  var d = n instanceof x.a && (null == t ? void 0 : t[n.errors[0].code])
                  s.setState({ errorMessage: { text: d ? d.toast.text : Mr } })
                }
              }),
              b()(h()(s), '_handleScheduleTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  i = e.inReplyToStatus,
                  o = e.schedule,
                  r = s._getSingleComposerDataWithLatestText(n[0])
                o({ excludedRecipients: a, inReplyToStatus: i, scheduleData: r })
                  .then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(Rt.c)(r.scheduledFor)
                    if (a) {
                      var i = Object(Rt.b)(a),
                        o = Object(Rt.i)(a),
                        c = Pr({ scheduleDate: i, scheduleTime: o })
                      t({ text: c, action: { label: kr, link: '/compose/tweet/unsent/scheduled' } }),
                        s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.scheduled_id_str }), {
                          isScheduled: !0,
                        })
                    }
                    s._updateConvoCardState(), s._close()
                  })
                  .catch(s._handleTweetError('schedule_tweet_cancel'))
              }),
              b()(h()(s), '_handleDraftTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: s._getSingleComposerDataWithLatestText(n[0]),
                })
                  .then(function (e) {
                    s.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: Ar, action: { label: kr, link: '/compose/tweet/unsent/drafts' } }),
                      s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', so.a))
              }),
              b()(h()(s), '_checkToxicReply', function () {
                var e = s.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  i = e.inReplyToStatusId,
                  o = e.parentTweetId,
                  r = t(
                    s._getSingleComposerDataWithLatestText(n[0]).text,
                    o || i,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t,
                      n,
                      a,
                      i,
                      o,
                      r,
                      l,
                      c = s.context.featureSwitches.getValueWithoutScribeImpression(
                        'responsive_web_reply_nudge_supported_languages',
                      )
                    if (
                      !c ||
                      !Array.isArray(c) ||
                      !c.includes(
                        null === (t = e.create_nudge) || void 0 === t || null === (n = t.nudge) || void 0 === n
                          ? void 0
                          : n.proposed_tweet_language,
                      )
                    )
                      return !1
                    var d =
                        null == e ||
                        null === (a = e.create_nudge) ||
                        void 0 === a ||
                        null === (i = a.nudge) ||
                        void 0 === i ||
                        null === (o = i.nudge_type) ||
                        void 0 === o
                          ? void 0
                          : o.__typename,
                      u =
                        null == e ||
                        null === (r = e.create_nudge) ||
                        void 0 === r ||
                        null === (l = r.nudge) ||
                        void 0 === l
                          ? void 0
                          : l.id
                    return u && s.setState({ nudgeId: u }), !!d
                  }),
                  l = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([r, l])
              }),
              b()(h()(s), '_showToxicReplyNudge', function () {
                s._scribe(
                  { page: 'nudge', section: 'dialog', action: 'impression' },
                  { items: [{ nudge_id: s.state.nudgeId }] },
                ),
                  s.setState({ showToxicReplyNudge: !0 })
              }),
              b()(h()(s), '_hideToxicReplyNudge', function () {
                return s.setState({ showToxicReplyNudge: !1 })
              }),
              b()(h()(s), '_checkToxicReplyAndSendTweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.isSelfThreadReply,
                  a = s.state.nudgeId
                if (
                  !(
                    !s._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    s.isReply &&
                    !n &&
                    s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return s._handleSendTweet()
                s._checkToxicReply().then(function (e) {
                  if (!e) return s._handleSendTweet()
                  s.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled'),
                    s.context.featureSwitches.getArrayValue('responsive_web_reply_nudge_supported_languages'),
                    s._showToxicReplyNudge()
                })
              }),
              b()(h()(s), '_handleSendTweet', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.addToast,
                  a = e.analytics,
                  i = e.audienceControlsValue,
                  o = e.composeSemanticCoreId,
                  r = e.excludedRecipients,
                  c = e.hasArticleNudge,
                  d = e.history,
                  u = e.inReplyToStatus,
                  m = e.isSelfThreadReply,
                  p = e.location,
                  h = e.promotedContent,
                  f = e.selectedCommunityName,
                  g = e.send,
                  v = i.conversationControlsValue,
                  y = i.exclusivityControlValue,
                  _ = void 0 === y ? void 0 : y,
                  b = s.isPreview,
                  C = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  w = Object(Rt.c)(C[0].scheduledFor)
                if (w) {
                  var T = Object(Rt.b)(w),
                    x = Object(Rt.i)(w),
                    E = Pr({ scheduleDate: T, scheduleTime: x })
                  return n({ text: E, action: { label: kr, link: '' } }), void s._close()
                }
                if (
                  (r.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === v) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var I = s._getSingleComposerDataWithLatestText(C[0]).text,
                      R = Object(S.d)(I)
                    a.scribe({
                      action: R ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && a.scribe({ action: 'send_my_followers_tweet' })
                var A = (null == u ? void 0 : u.community_id_str) || i.communityIdValue || void 0,
                  k = A ? '8.31.'.concat(A) : '',
                  P = o ? (A ? [o, k].join(',') : o) : k
                g({
                  sendData: C,
                  communityIdValue: A,
                  conversationControlsValue: v,
                  excludedRecipients: r,
                  exclusivityControlValue: _,
                  inReplyToStatus: u,
                  isSelfThreadReply: m,
                  promotedContent: h,
                  composeSemanticCoreId: P,
                  isPreview: b,
                })
                  .then(function (e) {
                    b || s.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return s._scribeTweetSent(C[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && s._scribeThreadSent(C, e, 'thread_send_success')
                    var a = e.length > 1 ? br : _r
                    if (A && f) {
                      var i = f,
                        o = e.length
                      a = ur({ numOfTweets: o, communityName: i })
                    }
                    var r = b && s.isReply,
                      l = { label: kr, link: void 0, onAction: void 0 }
                    if (r || !b) {
                      var u = r ? e[0].in_reply_to_status_id_str : e[0].id_str
                      l.link = '/'.concat(t ? t.screen_name : 'i', '/status/').concat(u || '')
                    } else l.onAction = Object(lr.a)(d, p)
                    n({ text: b ? Cr : a, action: l }),
                      s.isInlineReply && s.setState({ focused: !1 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      i = void 0 === n ? [] : n,
                      o = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      r = null == e ? void 0 : e.url,
                      u = null == e ? void 0 : e.status,
                      m = { message: e.type, event_info: o ? ''.concat(o) : void 0, status_code: u, url: r }
                    throw (
                      (i.map(
                        function (e, t) {
                          return s._scribeTweetSent(C[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(cr.d)(e) && e.code === to.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: m }),
                      C.length > 1 && s._scribeThreadSent(C, i, 'thread_send_failure'),
                      i.length &&
                        d.replace({
                          pathname: p.pathname,
                          state: l()(
                            l()({}, Object(tr.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: i[i.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', so.a))
              }),
              b()(h()(s), '_setActiveParentKey', function () {
                ;(0, s.props.setActiveParentKey)(s._getParentKey())
              }),
              b()(h()(s), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  i = void 0 !== a && a,
                  o = n.isDraftTweet,
                  r = void 0 !== o && o,
                  c = n.isScheduled,
                  d = void 0 !== c && c,
                  u = s.state.nudgeId,
                  m = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  p = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = r ? p : d ? m : 'send_',
                  f = { items: [ro.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  _ = Object(nr.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  b = s.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (s._scribe({ action: ''.concat(h, 'tweet') }, f),
                  r || !e.draftTweetId || e.scheduledTweetId || s._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  s.isQuoteTweet &&
                    (s._scribe({ action: 'retweet_with_comment' }, f),
                    i && s._scribe(l()(l()({}, Lr), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  s.isReply && s._scribe({ component: b, action: ''.concat(h, 'reply') }, f),
                  g && s._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  s._hasPhoto(e) &&
                    (s._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    v && s._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    y && s._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  s._hasVideo(e) &&
                    (s._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    y && s._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  _.size)
                ) {
                  var C = s._hasPhoto(e) ? 'photo' : 'video'
                  _.forEach(function (e) {
                    s._scribe({ action: ''.concat(h).concat(C, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    s.isReply &&
                    !d &&
                    (r
                      ? s._scribe(l()(l()({}, w), {}, { action: 'save' }), { items: [{ nudge_id: u }] })
                      : s._scribe(l()(l()({}, w), {}, { action: 'sent' }), { items: [{ nudge_id: u }] })),
                  u || r || !s.isReply || d || s._scribe(l()(l()({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var T = t.id_str && ro.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  s._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: T ? [T] : [] })
                  var x = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(v || x) &&
                    s._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: v ? 'user_entered' : 'from_provider', items: T ? [T] : [] },
                    ),
                    y && s._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else s._hasGif(e) && (s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), v && s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              b()(h()(s), '_scribeThreadSent', function (e, t, n) {
                var a = s.props.inReplyToStatus,
                  i = { items: [ro.a.getSendThreadItem(e, t.length, !!a)] }
                s._scribe({ action: n }, i)
              }),
              b()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  n = { items: [ro.a.getTweetItem(e)] }
                s._scribe({ action: 'retweet' }, n),
                  t && s._scribe(l()(l()({}, Lr), {}, { element: 'result', action: 'retweet' }), n)
              }),
              b()(h()(s), '_handleRetweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  i = t[0].quotedStatus
                i &&
                  (s._scribeRetweet(i),
                  a(i.id_str, {}).then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 }), s._close()
                  }, n(oo.a)))
              }),
              b()(h()(s), 'handleDismissComposer', function () {
                s.shouldShowDiscardConfirmation
                  ? s.setState({ showDiscardTweetConfirmation: !0 })
                  : s.shouldShowBackgroundSendConfirmation
                  ? s._cancelAllMediaUploads()
                  : s._close()
              }),
              b()(h()(s), '_cancelAllMediaUploads', function () {
                s.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              b()(h()(s), '_handleConfirmDiscardTweet', function () {
                var e = s.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = s._canSaveDraft ? 'draft' : 'send'
                s.setState({ showDiscardTweetConfirmation: !1 }),
                  s._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && s._scribe(l()(l()({}, Lr), {}, { element: 'result', action: 'cancel' })),
                  s.state.nudgeId &&
                    s._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { items: [{ nudge_id: s.state.nudgeId }] },
                    )
              }),
              b()(h()(s), '_handleCancelDiscardTweet', function () {
                s.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  s._restoreFocusToActiveComposer()
                })
              }),
              b()(h()(s), '_handleAcceptAltTextPrompt', function () {
                s.setState({ showAltTextPrompt: !1 })
                var e = s.props.history,
                  t = s._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (s._scribe(l()(l()({}, Fr), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              b()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(l()(l()({}, Fr), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(l()(l()({}, Fr), {}, { action: 'cancel' })),
                  s.setState({ showAltTextPrompt: !1 }, function () {
                    s._restoreFocusToActiveComposer()
                  })
              }),
              b()(h()(s), '_restoreFocusToActiveComposer', function () {
                var e = s.props.activeComposerIndex
                void 0 !== e && s._composerRefs[e] && s._composerRefs[e].focus()
              }),
              b()(h()(s), '_close', function () {
                var e = s.props,
                  t = e.history,
                  n = e.isSending,
                  a = e.onCloseComposer
                n || s._resetDraft(),
                  s.state.navigatingToOutbox
                    ? s._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : a && a()
              }),
              b()(h()(s), '_handleComposerFocus', function (e) {
                s._composerRefs[e]
                  ? s.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      s._restoreFocusToActiveComposer()
                    }, 0)
              }),
              b()(h()(s), '_handleFocus', function () {
                s.state.focused ||
                  (s.isInlineReply && s._scribe({ element: 'inline_reply', action: 'reply' }),
                  s.setState({ focused: !0 }))
              }),
              b()(h()(s), '_handleTypeaheadStateChange', function (e) {
                s.setState({ typeaheadActive: e })
              }),
              b()(h()(s), '_handleRemoveComposer', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  i = e.location,
                  o = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: i.pathname, state: Object(tr.a)(i.state || {}, 'quotedStatus') }),
                  o(),
                  setTimeout(s._restoreFocusToActiveComposer)
              }),
              b()(h()(s), '_handleViewRecipients', function () {
                var e = s.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  a = e.inReplyToStatus
                s._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: a },
                  })
              }),
              b()(h()(s), '_handleTextChange', function (e, t) {
                var n = s.state.textMap,
                  a = s.props,
                  i = a.activeComposerIndex,
                  o = a.isInline,
                  r = a.setValidity
                if (
                  (s.setState({ textMap: l()(l()({}, n), {}, b()({}, t, e)) }, function () {
                    r && r(s._areComposersValid())
                  }),
                  s.setState({ errorMessage: void 0 }),
                  Zo.b.isIOS())
                ) {
                  var c = o ? 0 : i
                  s._updateSingleComposer({ text: e }, c)
                }
              }),
              b()(
                h()(s),
                '_handleTextOnBlur',
                Object(Dt.a)(function (e, t) {
                  return function () {
                    var n = s.state,
                      a = n.textMap,
                      i = n.tweetsSentOrScheduled,
                      o = s.props.composerData,
                      r = a[e],
                      l = o.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof r && !i && l && s._updateSingleComposer({ text: r }, t)
                  }
                }),
              ),
              b()(h()(s), '_updateAudienceControlsValue', function (e) {
                var t = s.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  i = s.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!s._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!s._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: dr } })),
                      (null == i ? void 0 : i.text) === dr && s.setState({ errorMessage: void 0 })
                }
                a(e, s._getParentKey())
              }),
              b()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.a.createElement($o.a, { progress: t ? Math.max(n, 0.02) : 0, style: zr.progressBar })
              }),
              b()(h()(s), '_updateConvoCardState', function () {
                var e = s.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    i = t.nextState
                  i && a && n(a, { cardState: i })
                }
              }),
              b()(h()(s), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(Ji.a)(e)
                    }),
                  ).then(s._handleAddMediaFiles(e))
                }
              }),
              b()(h()(s), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    i,
                    o = s.props,
                    r = o.addMedia,
                    l = o.addToast,
                    c = o.composerData,
                    d = o.dataSaverMode,
                    u = o.preUploadMedia,
                    m = o.processMultipleMedia,
                    p = o.removeMediaUpload,
                    f = c[e],
                    g = f.pollActive,
                    v = Object(rr.e)(
                      null === (a = h()(s)) || void 0 === a || null === (i = a.context) || void 0 === i
                        ? void 0
                        : i.userClaims,
                    )
                  g ||
                    r(t, { location: rr.d.Tweet, canUploadLongVideo: v }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var i = f.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(ar.a)(i.concat(a)) }, e),
                          m(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            d ||
                              u(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else l({ text: Dr }), p(a)
                    })
                }
              }),
              b()(h()(s), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return s._handleMediaRemove(e, t)
                }
              }),
              b()(h()(s), '_handleMediaRemove', function (e, t) {
                var n = s.props,
                  a = n.composerData,
                  i = n.removeMediaUpload,
                  o = a[e],
                  r = o.media,
                  l = o.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(ir.a)(e, n)
                  })(
                    r.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  d = c.length > 0 ? l : []
                s._updateSingleComposer({ mediaIds: c, gifMetadata: void 0, mediaTags: d }, e),
                  i(t),
                  s.setState({ errorMessage: void 0 })
              }),
              b()(h()(s), '_setComposerRef', function (e) {
                return function (t) {
                  s._composerRefs[e] = t
                }
              }),
              b()(h()(s), '_shouldBeExpanded', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (s.state.focused) return !0
                var a = !Object(It.c)(s._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              b()(h()(s), '_areComposersValid', function () {
                var e = s.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  i = null == a ? void 0 : a.community_id_str,
                  o = 'community_members' === t
                return (
                  (s.isRetweet && !i && !o) ||
                  n.every(function (e) {
                    return Object(It.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              b()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(It.d)(s._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              b()(h()(s), '_getAltTextMetadata', function () {
                var e = s.props.composerData,
                  t = { numberOfDescriptionsMissing: 0, numberOfImages: 0, noDescriptionImageIDs: [] }
                return (
                  e.forEach(function (e) {
                    var n,
                      a = (e.media || []).filter(function (e) {
                        var t = e.mediaFile
                        return (null == t ? void 0 : t.isImage) || (null == t ? void 0 : t.isGif)
                      }),
                      i = a
                        .filter(function (e) {
                          var t = e.mediaMetadata
                          return !(null != t && t.altText)
                        })
                        .map(function (e) {
                          return e.id
                        })
                    ;(t.numberOfImages += a.length), (n = t.noDescriptionImageIDs).push.apply(n, r()(i))
                  }),
                  (t.numberOfDescriptionsMissing = t.noDescriptionImageIDs.length),
                  t
                )
              }),
              b()(h()(s), '_getSingleComposerDataWithLatestText', function (e) {
                var t = s.state.textMap
                return 'string' == typeof t[e.key] ? l()(l()({}, e), {}, { text: t[e.key] }) : e
              })
            var c = !(null === (i = e.location.state) || void 0 === i || !i.focusComposer)
            return (
              (s.state = {
                focused: c,
                showAltTextPrompt: !1,
                showDiscardTweetConfirmation: !1,
                showToxicReplyNudge: !1,
                textMap: {},
                tweetsSentOrScheduled: !1,
                typeaheadActive: !1,
                shouldDisableButton: !1,
              }),
              (s._composerRefs = {}),
              (s._conversationControlsCreationEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (s._throttledSyncTexts = Object(gn.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((o = {}), b()(o, sr.b, s.handleTweetOrRetweet), b()(o, sr.a, s.handleDismissComposer), o)),
              (s._keyCommandHandlersForActiveTypeahead = b()({}, sr.b, s.handleTweetOrRetweet)),
              (s._isAltTextNudgeEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (s._isCommunitiesEnabled = s.context.featureSwitches.isTrue('c9s_enabled')),
              s
            )
          }
          return (
            m()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.props.onRef
                  e && e(this)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.convoCardData,
                    n = e.externalMedia,
                    a = e.externalMediaFiles,
                    i = e.history,
                    o = e.isInline,
                    r = e.isIntentRoute,
                    s = e.location,
                    c = e.prepopulatedText,
                    d = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    n.length > 0 && this._attachExternalMedia(0)(n),
                    a.length > 0 && this._handleAddMediaFiles(0)(a),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    c || (t && t.cardUrl))
                  ) {
                    var u = l()({}, null)
                    c && (u.text = c), t && t.cardUrl && (u.cardUrl = t.cardUrl), this._updateSingleComposer(u)
                  }
                  ;(c || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !r &&
                    i.replace({
                      query: Object(di.b)(s.query),
                      search: '',
                      pathname: s.pathname,
                      state: Object(tr.a)(Object(di.b)(s.state || {}), [
                        'defaultText',
                        'externalMedia',
                        'externalMediaFiles',
                      ]),
                    }),
                    d && d(this._areComposersValid()),
                    o || this._setActiveParentKey(),
                    this.isInlineReply && this._root && (this._height = this._root.getBoundingClientRect().height)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.addToast,
                    i = n.composerData,
                    o = n.copyDataFromInlineReplyComposerToModalComposer,
                    r = n.externalMedia,
                    s = n.externalMediaFiles,
                    l = n.onRef,
                    c = n.parentTweetId,
                    d = n.replyPressToggle,
                    u = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== l && e.onRef(void 0),
                    l && l !== e.onRef && l(this),
                    i.length >= 25 && e.composerData.length < 25 && a({ text: Or }),
                    r.length > 0 && r !== e.externalMedia
                      ? this._attachExternalMedia(0)(r)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    u && !Object(or.a)(i, e.composerData) && u && u(this._areComposersValid()),
                    d !== e.replyPressToggle && o(c)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props.onRef
                  this._unblockHistory && this._unblockHistory(), e && e(void 0), this._syncTexts()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this,
                    a = this.props,
                    o = a.activeUser,
                    r = a.addComposer,
                    s = a.addToast,
                    l = a.audienceControlsValue,
                    c = a.composeHeader,
                    d = a.composerData,
                    u = a.copyDataFromInlineComposerToModalComposer,
                    m = a.customizePropsForSingleComposerItem,
                    p = a.geoEnabled,
                    h = a.history,
                    f = a.inReplyToStatus,
                    g = a.isInline,
                    v = a.isModal,
                    y = a.isSelfThreadReply,
                    _ = a.isSending,
                    b = a.isSuperFollowsCreator,
                    C = a.parentTweetId,
                    T = a.positionCursorAtBeginning,
                    x = a.richTextInputContext,
                    E = a.scheduledFor,
                    S = a.typeaheadWrapper,
                    I = a.userLanguage,
                    R = a.windowWidth,
                    A = this.state,
                    k = A.errorMessage,
                    P = A.focused,
                    O = A.shouldDisableButton,
                    M = A.showAltTextPrompt,
                    D = A.showDiscardTweetConfirmation,
                    N = A.showToxicReplyNudge,
                    F = A.typeaheadActive,
                    L = !v && F,
                    B = g ? 0 : this.props.activeComposerIndex,
                    V = L || g ? [d[B]] : d,
                    j = this._areComposersValid(),
                    z = this.hasNonCompliantQuote && this.isRetweet,
                    H = g ? W.a : er.a,
                    U = g ? {} : { onAnimateComplete: v ? void 0 : this._handleAnimateComplete },
                    G = O || !j || z || this.isCommunityTweetFromProtectedUser,
                    K = (g && lo.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet,
                    X = (g && lo.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.a.createElement(
                    W.a,
                    { ref: this._setRootRef, style: !C && zr.root },
                    g ? this._renderProgressBar() : null,
                    k &&
                      w.a.createElement(
                        W.a,
                        { style: zr.inlineCallout },
                        w.a.createElement(Ge.a, {
                          action:
                            null !== (e = k.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = k.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: k.action.label, link: k.action.link }
                              : void 0,
                          text: k.text,
                          type: 'danger',
                        }),
                      ),
                    w.a.createElement(
                      W.a,
                      {
                        onFocus: this._handleFocus,
                        style: [zr.content, C && zr.contentInlineReply, v && zr.contentModal],
                      },
                      f ? this._renderReplyContext() : null,
                      c,
                      w.a.createElement(
                        H,
                        U,
                        V.map(function (e, t) {
                          var a = Object(Rt.h)(e.scheduledFor),
                            c = d.indexOf(e),
                            C = m(e, t, V),
                            A =
                              v || g
                                ? w.a.createElement(
                                    q.a,
                                    {
                                      behavioralEventContext: Br,
                                      disabled: G,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: zr.inlineSendButton,
                                      testID: v ? co : uo,
                                      type: 'brandFilled',
                                    },
                                    Object(lr.b)({
                                      inReplyToStatus: !!f,
                                      isSelfThreadReply: !!y,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            k = n._getSingleComposerDataWithLatestText(e)
                          return w.a.createElement(
                            W.a,
                            { key: e.key },
                            w.a.createElement(
                              Xa,
                              i()(
                                {
                                  addToast: s,
                                  additionalToolbarContent: A,
                                  audienceControlsValue: l,
                                  autoFocus: n.isInlineReply && P,
                                  data: k,
                                  disableAddTweet: d.length >= 25,
                                  editable: !_ && !!o,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: p,
                                  hidePoll: K,
                                  hideScheduling: X,
                                  history: h,
                                  index: c,
                                  isActive: c === B && !_,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: g,
                                  isInlineReply: n.isInlineReply,
                                  isLast: g || c === d.length - 1,
                                  isReply: !!f || n.isInlineReply,
                                  isSelfThreadReply: !!y,
                                  isSuperFollowsCreator: b,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: o,
                                  onAddComposer: g ? u : r,
                                  onFilesAdded: n._handleAddMediaFiles(c),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(k.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!T,
                                  ref: n._setComposerRef(c),
                                  richTextInputContext: x,
                                  scheduledFor: E,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: F,
                                  typeaheadWrapper: S,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: I,
                                  windowWidth: R,
                                },
                                C,
                              ),
                            ),
                          )
                        }),
                      ),
                      D
                        ? this._canSaveDraft
                          ? w.a.createElement(Jo.a, {
                              cancelButtonLabel: Er,
                              confirmButtonLabel: Rr,
                              headline: Sr,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: Ir,
                            })
                          : w.a.createElement(Jo.a, {
                              confirmButtonLabel: Er,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? Tr : wr,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: xr,
                            })
                        : null,
                      M ? this._renderAltTextPrompt() : null,
                      N ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(W.a, { style: _ && zr.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(l()(l()({}, e), {}, { data: t }))
                },
              },
              {
                key: 'isInlineReply',
                get: function () {
                  return !!this.props.parentTweetId
                },
              },
              {
                key: 'isThread',
                get: function () {
                  return this.props.composerData.length > 1
                },
              },
              {
                key: 'isRetweet',
                get: function () {
                  var e = this.props.composerData,
                    t = 0 === e[0].media.length,
                    n = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && '' === n && t
                },
              },
              {
                key: 'isQuoteTweet',
                get: function () {
                  var e = this.props.composerData,
                    t = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && t.length > 0
                },
              },
              {
                key: 'hasNonCompliantQuote',
                get: function () {
                  var e
                  return (
                    'non_compliant' ===
                    (null === (e = this.props.composerData[0].quotedStatus) || void 0 === e
                      ? void 0
                      : e.limited_actions)
                  )
                },
              },
              {
                key: 'shouldShowDiscardConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    a = t[0].scheduledTweetId,
                    i = this.state.showDiscardTweetConfirmation,
                    o = this._areComposersEmptyOrUnchanged()
                  return !(n || o || i || a)
                },
              },
              {
                key: 'shouldShowBackgroundSendConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    a = t.some(function (e) {
                      return e.media.some(function (e) {
                        return e.uploading
                      })
                    })
                  return n && a
                },
              },
              {
                key: 'shouldShowAltTextPrompt',
                get: function () {
                  var e = this.props.altTextNudgeType
                  return (
                    !(
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== T.a.prompt
                    ) && this._getAltTextMetadata().numberOfDescriptionsMissing > 0
                  )
                },
              },
              {
                key: '_canSaveDraft',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isInline
                  return !(
                    this.isCommunityTweet ||
                    this.isExclusiveTweet ||
                    this.isThread ||
                    t[0].pollActive ||
                    0 !== t[0].mediaTags.length ||
                    n
                  )
                },
              },
              {
                key: 'isCommunityTweet',
                get: function () {
                  var e = this.props,
                    t = e.audienceControlsValue,
                    n = e.inReplyToStatus
                  return !!((null != n && n.community_id_str) || 'community_members' === t._type)
                },
              },
              {
                key: 'isCommunityTweetFromProtectedUser',
                get: function () {
                  var e
                  return !(
                    !this.isCommunityTweet ||
                    null === (e = this.props.activeUser) ||
                    void 0 === e ||
                    !e.protected
                  )
                },
              },
              {
                key: 'isReply',
                get: function () {
                  return !(!this.props.inReplyToStatus && !this.props.inReplyToStatusId)
                },
              },
              {
                key: 'isExclusiveTweet',
                get: function () {
                  return !!this.props.audienceControlsValue.exclusivityControlValue
                },
              },
              {
                key: 'tweetType',
                get: function () {
                  return this.isQuoteTweet
                    ? Vr.Quote
                    : this.isThread
                    ? Vr.Thread
                    : this.isReply
                    ? Vr.Reply
                    : Vr.Original
                },
              },
              {
                key: 'isPreview',
                get: function () {
                  var e,
                    t,
                    n,
                    a,
                    i = this.props.undoTweetSettings,
                    o =
                      null == this ||
                      null === (e = this.context) ||
                      void 0 === e ||
                      null === (t = e.userClaims) ||
                      void 0 === t
                        ? void 0
                        : t.isTrueAndEnabled('subscriptions_feature_1003'),
                    r =
                      null == this ||
                      null === (n = this.context) ||
                      void 0 === n ||
                      null === (a = n.featureSwitches) ||
                      void 0 === a
                        ? void 0
                        : a.isTrue('subscriptions_undo_quote_tweets_enabled')
                  return (
                    o &&
                    ('original' === this.tweetType ||
                      'reply' === this.tweetType ||
                      ('quote' === this.tweetType && r)) &&
                    (!i || void 0 === i[this.tweetType] || i[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(jr, 'defaultProps', {
        customizePropsForSingleComposerItem: function (e, t, n) {
          return {}
        },
        externalMedia: [],
        externalMediaFiles: [],
        isSelfThreadReply: !1,
        isModal: !1,
        positionCursorAtBeginning: !1,
        prepopulatedText: '',
        setValidity: function () {},
        typeaheadWrapper: no.a,
      }),
        b()(jr, 'contextType', I.a),
        b()(jr, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var zr = F.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: l()({}, F.a.absoluteFillObject),
          inlineSendButton: { marginLeft: e.spaces.space12 },
          progressBar: {
            position: 'absolute',
            borderTopLeftRadius: e.borderRadii.small,
            borderTopRightRadius: e.borderRadii.small,
          },
          inlineCallout: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          hidden: { position: 'absolute', visibility: 'hidden', width: '100%' },
        }
      })
      t.a = Object(rt.a)(Qi(jr))
    },
    lsKC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return d
        })
      n('jQ3i'), n('x4t0')
      var a = n('3XMw'),
        i = n.n(a),
        o = i.a.g34f2c63,
        r = i.a.f70a36d0,
        s = i.a.d17df547,
        l = i.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? l : t ? s : e.isThread ? r : o({ verb: '' })
        },
        d = function (e, t) {
          return function () {
            t.pathname.includes('/home') ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
          }
        }
    },
    pidX: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      })
      var a = n('ddV6'),
        i = n.n(a),
        o =
          (n('z84I'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('7xRU'),
          n('KqXw'),
          n('Ysgh'),
          n('LW0h'),
          n('2G9S'),
          n('3XMw')),
        r = n.n(o),
        s = n('3A2y'),
        l = r.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = c.map(function (e) {
            return t[e] || n[e]
          }),
          o = i()(a, 6),
          r = o[0],
          s = o[1],
          d = o[2],
          u = o[3],
          m = o[4],
          p = o[5],
          h = [
            r,
            s && '@'.concat(s.toString()),
            d,
            u,
            m &&
              m
                .toString()
                .split(',')
                .map(function (e) {
                  return '#'.concat(e)
                })
                .join(' '),
            p && l({ viaScreenName: p }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var d = function (e) {
        return Object(s.a)(e, c)
      }
    },
    rziq: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return i
        })
      var a = 'send-tweet',
        i = 'dismiss-composer'
    },
    sCk0: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        i = n.n(a),
        o = n('Y9Ll'),
        r = n.n(o),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        m = n.n(u),
        p = n('KEM+'),
        h = n.n(p),
        f = (n('2G9S'), n('z84I'), n('7x/C'), n('JtPf'), n('DfhM'), n('ERkP')),
        g = n.n(f),
        v = n('zfvc'),
        y = n('RhWx'),
        _ = n.n(y),
        b = (n('yH/f'), n('M+/F'), n('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        w = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', {
                isAnimating: !1,
                renderChildren: g.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: C.static, child: e }
                }),
              }),
              h()(l()(e), '_handleEachAnimateComplete', function () {
                var t = e.state.isAnimating,
                  n = e.props,
                  a = n.children,
                  i = n.onAnimateComplete
                t &&
                  (i && i(),
                  e.setState({
                    renderChildren: g.a.Children.toArray(a).map(function (e) {
                      return { status: C.static, child: e }
                    }),
                    isAnimating: !1,
                  }))
              }),
              e
            )
          }
          return (
            r()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    return this.state.renderChildren.map(function (t) {
                      var n = t.child,
                        a = t.status
                      return g.a.createElement(
                        v.a,
                        {
                          animateMount: a !== C.static,
                          key: n.key,
                          onAnimateComplete: e._handleEachAnimateComplete,
                          show: a !== C.out,
                        },
                        n,
                      )
                    })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = (function (e, t) {
                      for (
                        var n = 0,
                          a = 0,
                          i = [],
                          o = function () {
                            if (n >= t.length)
                              return (
                                i.push.apply(
                                  i,
                                  _()(
                                    e.slice(a).map(function (e) {
                                      return { child: e, status: C.out }
                                    }),
                                  ),
                                ),
                                'break'
                              )
                            var o = t[n],
                              r = e[a]
                            if (o.key === r.key) i.push({ child: o, status: C.static }), (n += 1)
                            else {
                              var s = Object(b.a)(t, function (e) {
                                return e.key === r.key
                              })
                              s >= 0
                                ? (i.push.apply(
                                    i,
                                    _()(
                                      t.slice(n, s).map(function (e) {
                                        return { child: e, status: C.in }
                                      }),
                                    ).concat([{ child: t[s], status: C.static }]),
                                  ),
                                  (n = s + 1))
                                : i.push({ child: r, status: C.out })
                            }
                            a += 1
                          };
                        a < e.length && 'break' !== o();

                      );
                      return (
                        n < t.length &&
                          i.push.apply(
                            i,
                            _()(
                              t.slice(n).map(function (e) {
                                return { child: e, status: C.in }
                              }),
                            ),
                          ),
                        i
                      )
                    })(
                      t.renderChildren.map(function (e) {
                        return e.child
                      }),
                      g.a.Children.toArray(e.children),
                    )
                    return {
                      renderChildren: n,
                      isAnimating: !n.every(function (e) {
                        return e.status === C.static
                      }),
                    }
                  },
                },
              ],
            ),
            n
          )
        })(g.a.Component)
      t.a = w
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        i = n('42ly'),
        o = n('N9G2'),
        r = n('BIH/'),
        s = n('lhaq'),
        l = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = o(this),
              n = r(t),
              a = l(t, 0)
            return (a.length = i(a, t, t, n, 0, void 0 === e ? 1 : s(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
    x8Sc: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'InlineComposeContainer', function () {
          return d
        })
      var a = n('ERkP'),
        i = n.n(a),
        o = n('h5NW'),
        r = n('MWbm'),
        s = n('7N4s'),
        l = n('cHvH'),
        c = n('rHpw'),
        d = function (e) {
          var t = e.history,
            n = e.location,
            a = e.parentTweetId,
            c = e.replyPressToggle,
            d = e.richTextInputContext,
            m = e.typeaheadWrapper,
            p = i.a.useContext(s.b).isModal
          return i.a.createElement(l.a, null, function (e) {
            var s = e.windowWidth
            return i.a.createElement(
              r.a,
              { style: u.root },
              i.a.createElement(o.a, {
                history: t,
                isInline: !0,
                isModal: p,
                location: n,
                parentTweetId: a,
                replyPressToggle: c,
                richTextInputContext: d,
                typeaheadWrapper: m,
                windowWidth: s,
              }),
            )
          })
        },
        u = c.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, zIndex: 1 } }
        })
      t.default = d
    },
    yTN1: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        i = n.n(a),
        o = n('WOwf'),
        r = n('3XMw'),
        s = n.n(r),
        l = n('k6Ei'),
        c = n('rHpw'),
        d = n('+/1j'),
        u = n('MWbm'),
        m = s.a.c2fc878c,
        p = s.a.db11b27f,
        h = function (e) {
          return e
        },
        f = c.a.create(function (e) {
          var t = e.colors
          return {
            root: { alignItems: 'flex-start', minHeight: 30, minWidth: 30 },
            center: { alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            progressCircle: { transitionDuration: '0.2s', transitionProperty: 'opacity' },
            hide: { opacity: 0 },
            text: { fontSize: 13, lineHeight: 0.8, minWidth: 16, textAlign: 'center' },
            gray700: { color: t.gray700 },
            red500: { color: t.red500 },
          }
        })
      t.a = function (e) {
        var t = e.count,
          n = e.maxCount,
          a = e.formatNumber,
          r = void 0 === a ? h : a,
          s = e.warningCount,
          g = n - t,
          v = g >= 0 ? p({ count: r(g) }) : m({ count: r(t - n) }),
          y =
            t >= s
              ? i.a.createElement(
                  d.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  v,
                )
              : null,
          _ = Object(o.a)(g, n),
          b = t >= n ? 'red500' : t >= s ? 'yellow500' : 'primary',
          C = i.a.createElement(l.a, {
            color: b,
            progress: _,
            size: t >= s ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          w = t >= s ? i.a.createElement(d.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, r(g)) : null
        return i.a.createElement(
          u.a,
          { style: [f.root, f.center] },
          y,
          C,
          i.a.createElement(u.a, { style: [c.a.absoluteFill, f.center] }, w),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        i = n.n(a),
        o = n('m3Bd'),
        r = n.n(o),
        s = n('ddV6'),
        l = n.n(s),
        c = n('ERkP'),
        d = n.n(c),
        u = (n('5BYb'), n('7x/C'), n('uFXj'), n('H7Rt')),
        m = n('3XMw'),
        p = n.n(m),
        h = n('MWbm'),
        f = n('t62R'),
        g = n('CKsB'),
        v = n('/yvb'),
        y = n('rHpw'),
        _ = n('Zg3A'),
        b = n('yiKp'),
        C = n.n(b),
        w = n('Lsrn'),
        T = n('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            d.a.createElement(
              'g',
              null,
              d.a.createElement('path', {
                d: 'M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z',
              }),
              d.a.createElement('path', {
                d: 'M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z',
              }),
            ),
          )
        }
      x.metadata = { width: 24, height: 24 }
      var E = x,
        S = n('boUI'),
        I = n('EweD'),
        R = p.a.g6185a9e,
        A = p.a.g2d04222,
        k = p.a.baffe39a,
        P = p.a.af293dc2,
        O = p.a.h1053f7e,
        M = p.a.bf994ab2,
        D = p.a.cf7f7e39,
        N = p.a.cfd2f35d,
        F = y.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space4,
              borderRadius: e.borderRadii.xLarge,
            },
            popover: { maxWidth: 5 * e.spacesPx.space64 },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 },
            menuRow: {
              flexDirection: 'row',
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space12,
              alignItems: 'center',
              borderRadius: e.borderRadii.small,
            },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
          }
        }),
        L = function (e) {
          var t,
            n,
            a = e.dismiss,
            i = e.isModal,
            o = e.midConversationTweet,
            r = e.value,
            s = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            l = !!o,
            c =
              l &&
              !(
                null != o &&
                null !== (t = o.entities) &&
                void 0 !== t &&
                null !== (n = t.user_mentions) &&
                void 0 !== n &&
                n.some(function (e) {
                  return e.id_str !== o.user.id_str
                })
              ),
            m = O
          return (
            c ? (m = M) : l && (m = D),
            d.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [F.root, i ? F.modal : F.popover],
              },
              d.a.createElement(
                h.a,
                { style: F.title },
                d.a.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, R),
                d.a.createElement(
                  f.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  A,
                ),
              ),
              d.a.createElement(
                h.a,
                null,
                d.a.createElement(g.a, {
                  Icon: _.a,
                  actionText: k,
                  isSelected: u.a.all === r,
                  onClick: s(u.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: E,
                  actionText: P,
                  isSelected: u.a.community === r,
                  onClick: s(u.a.community),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: c ? S.a : I.a,
                  actionText: m,
                  isSelected: u.a.by_invitation === r,
                  onClick: s(u.a.by_invitation),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? d.a.createElement(
                      v.a,
                      {
                        key: 'button_cancel',
                        onPress: a,
                        size: 'large',
                        style: F.cancelButton,
                        type: 'primaryOutlined',
                      },
                      N,
                    )
                  : null,
              ),
            )
          )
        },
        B = n('OiMc'),
        V = n('efqG'),
        j = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          o = e.disabled,
          s = d.a.useState(!1),
          c = l()(s, 2),
          u = c[0],
          m = c[1],
          p = d.a.useCallback(function () {
            return m(!0)
          }, []),
          h = d.a.useCallback(function () {
            return m(!1)
          }, []),
          f = a ? (u ? B.a.VISIBILITY_BEHAVIOR.forceVisible : B.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: p, closePopover: h }) : t
        return d.a.createElement(
          V.a,
          {
            disabled: o,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = r()(e, j)
              return d.a.createElement(L, i()({}, a, { dismiss: t, isModal: 'sheet' === n }))
            },
            visibilityBehavior: f,
          },
          g,
        )
      }
    },
    ye3X: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f')
      var a = Object.freeze({ inline: 'inline', prompt: 'prompt', require: 'require' })
    },
  },
])
//# sourceMappingURL=WIPED
