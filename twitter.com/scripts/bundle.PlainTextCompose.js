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
          return w
        }),
        n.d(t, 'b', function () {
          return x
        }),
        n.d(t, 'a', function () {
          return S
        }),
        n.d(t, 'i', function () {
          return I
        })
      var a = n('KEM+'),
        i = n.n(a),
        r = n('yiKp'),
        o = n.n(r),
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
        T = function (e, t) {
          return function (n, a, i) {
            var r = i.api
            return Object(s.b)(n, { request: r.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        w = function (e) {
          return function (t, n, a) {
            a.api
            var i = Object(m.d)(n())
            return t(
              T(
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
            var r = Object(m.d)(t())
            return r
              ? e(
                  T(
                    {
                      lat: r.coords.latitude,
                      long: r.coords.longitude,
                      hacc: r.coords.accuracy,
                      query_type: p.a.tweet_compose_location,
                      count: 50,
                    },
                    p.c.initial,
                  ),
                )
              : Promise.resolve()
          }
        },
        S = function () {
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
        E = 'rweb/placePicker/UPDATE_LAST_SELECTED_PLACE',
        I = function (e) {
          return { type: E, payload: e }
        }
      d.a.register(
        i()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var n = t.meta.resultSet
              return o()(o()({}, e), {}, i()({}, n, { fetchStatus: l.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return o()(o()({}, e), {}, i()({}, a, { fetchStatus: l.a.FAILED }))
            case f.SUCCESS:
              var r = t.meta.resultSet,
                s = t.payload
              return o()(o()({}, e), {}, i()({}, r, { fetchStatus: l.a.LOADED, results: s }))
            case E:
              var c = t.payload
              return o()(o()({}, e), {}, { lastSelectedPlace: null != c ? c : void 0 })
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
        r = n('3XMw'),
        o = n.n(r),
        s = n('SrIh'),
        l = o.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var r = n.context
              return (
                !n instanceof i.a && (n.message = 'Strato error occurred in '.concat(r.id, ': ').concat(r.action)),
                Object(s.a)(n, { extra: { context: r, isStrato: !0 } }),
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
          return r
        })
      n('yH/f')
      var a = Object.freeze({ profile_location: 'profile_location', tweet_compose_location: 'tweet_compose_location' }),
        i = Object.freeze({ foursquare: 'foursquare', yelp: 'yelp' }),
        r = Object.freeze({ initial: 'initial', lastSearch: 'lastSearch' })
    },
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        r = n('ERkP'),
        o = n.n(r),
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
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
              }),
              o.a.createElement('path', {
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
        r = n('ERkP'),
        o = n.n(r),
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
            o.a.createElement(
              'g',
              null,
              o.a.createElement('circle', { cx: '12', cy: '6.674', r: '1.889' }),
              o.a.createElement('path', {
                d: 'M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263',
              }),
              o.a.createElement('path', {
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
        r = n('ERkP'),
        o = n.n(r),
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
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
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
        r = n('yiKp'),
        o = n.n(r),
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
              return o()(o()({}, e), {}, { permissionStatus: t.payload })
            case f:
              return o()(o()({}, e), {}, { position: t.payload })
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
        r = n('RhWx'),
        o = n.n(r),
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
        T = n.n(C),
        w = n('ye3X'),
        x = n('pXBW'),
        S = n('6/RC'),
        E = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('v6aA'),
        R = n('+Kfv'),
        A = n('eSoz'),
        k = n('rxPX'),
        O = function (e, t) {
          var n = t.communityId
          return n ? A.c.select(e, n) : void 0
        },
        D = Object(k.a)().propsFromState(function () {
          return { community: O }
        }),
        P = n('MtXG'),
        M = n('t62R'),
        F = n('CKsB'),
        L = n('rHpw'),
        N = n('3XMw'),
        B = n.n(N),
        V = B.a.d58baa7e,
        j = D(
          T.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              i = e.selectedCommunityId
            if (!n) return null
            var r,
              o = n.member_count
            return T.a.createElement(F.a, {
              actionSubText:
                ((r = V(o)),
                T.a.createElement(
                  P.a.Group,
                  null,
                  T.a.createElement(
                    P.a,
                    null,
                    T.a.createElement(
                      M.b,
                      { color: 'white' },
                      T.a.createElement(
                        B.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        T.a.createElement(P.a.Value, null, B.a.ibd0106d({ formattedCount: r })),
                        T.a.createElement(P.a.Label, null, B.a.cface2d0({ count: o })),
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
              style: U.menuItem,
            })
          }),
        ),
        U = L.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        z = n('0zXz'),
        H = n('FS1z'),
        W = n('MWbm'),
        G = n('yw4N'),
        q = n('/yvb'),
        K = n('+Eiw'),
        Q = n('Zg3A'),
        X = n('EyD/'),
        Y = B.a.e815fc33,
        Z = B.a.c63602d3,
        J = B.a.baffe39a,
        $ = B.a.aa4209e8,
        ee = B.a.d0748dae,
        te = B.a.abd845fd,
        ne = { viewType: 'everyone' },
        ae = { viewType: 'community' },
        ie = B.a.d58baa7e,
        re = L.a.create(function (e) {
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
        oe = function (e) {
          var t,
            n,
            a,
            i,
            r,
            o = e.audienceControlsValue,
            s = e.dismiss,
            l = e.hasMemberships,
            c = e.history,
            d = e.isC9sParticipationEnabled,
            u = e.isSuperFollowsCreator,
            m = e.onAudienceControlsValueChange,
            p = e.sliceModule,
            h = T.a.useContext(I.a),
            f = o.communityIdValue || void 0,
            g = o.exclusivityControlValue || void 0,
            v = o.trustedFriendsValue || void 0,
            y = h.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            _ = null === (t = e.trustedFriendsList) || void 0 === t ? void 0 : t.rest_id,
            b =
              null !== (n = null === (a = e.trustedFriendsList) || void 0 === a ? void 0 : a.member_count) &&
              void 0 !== n
                ? n
                : 0,
            C = T.a.useCallback(
              function (e) {
                return function () {
                  m(e), s()
                }
              },
              [m, s],
            ),
            w = T.a.useCallback(
              function (e) {
                if (_) return c.push('/i/circles/'.concat(_, '/members'))
              },
              [c, _],
            )
          return T.a.createElement(
            W.a,
            { style: re.root },
            T.a.createElement(
              G.a,
              { style: re.viewport },
              T.a.createElement(
                T.a.Fragment,
                null,
                T.a.createElement(M.b, { size: 'headline1', style: re.title, weight: 'bold' }, Y),
                T.a.createElement(
                  R.a,
                  { behavioralEventContext: ne },
                  T.a.createElement(F.a, {
                    Icon: Q.a,
                    actionText: J,
                    isSelected: !g && !f && !v,
                    onClick: C({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: re.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                u
                  ? T.a.createElement(F.a, {
                      Icon: X.a,
                      actionText: $,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!g,
                      onClick: C({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: re.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                y && e.trustedFriendsList && _
                  ? T.a.createElement(F.a, {
                      Icon: X.a,
                      actionSubText:
                        ((i = b),
                        (r = ie(i)),
                        T.a.createElement(
                          P.a.Group,
                          null,
                          T.a.createElement(
                            P.a,
                            null,
                            T.a.createElement(
                              M.b,
                              { color: 'white' },
                              T.a.createElement(
                                B.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                T.a.createElement(P.a.Value, null, B.a.a5f7b70f({ formattedCount: r })),
                                T.a.createElement(P.a.Label, null, B.a.a7daec1e({ count: i })),
                              ),
                            ),
                            T.a.createElement(q.a, { onPress: w, size: 'xSmall', type: 'primaryText' }, te),
                          ),
                        )),
                      actionText: ee,
                      iconThumbnailColor: 'success',
                      isSelected: !!v,
                      onClick: C({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsValue: { trusted_friends_list_id: _ },
                      }),
                      selectable: !0,
                      style: re.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              l && p && d
                ? T.a.createElement(
                    W.a,
                    null,
                    T.a.createElement(
                      R.a,
                      { behavioralEventContext: ae },
                      T.a.createElement(M.b, { style: re.title, weight: 'bold' }, Z),
                      T.a.createElement(H.a, {
                        module: p,
                        noItemsRenderer: z.a,
                        renderer: function (e) {
                          return T.a.createElement(j, {
                            clickHandler: C,
                            communityId: e,
                            dismiss: s,
                            key: e,
                            selectedCommunityId: f,
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
        fe = n('oEOe'),
        ge = n('kGix'),
        ve = n('Ssj5'),
        ye = 'trustedFriends',
        _e = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        be = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        Ce = function (e) {
          return e.trustedFriends.lists
        },
        Te = function () {
          return function (e, t, n) {
            var a = n.api
            return fe.b(e, { request: a.TrustedFriends.createTrustedFriendsList })({
              actionTypes: be,
              context: 'CREATE_TRUSTED_FRIENDS_LIST',
            })
          }
        },
        we = function () {
          return function (e, t) {
            var n = t(),
              a = Ce(n)
            ;(a.length ? a[0] : void 0) ||
              e(function (e, t, n) {
                var a = n.api
                return fe.b(e, { request: a.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: _e,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (t) {
                !t.authenticated_user_trusted_friends_lists.length && Te && e(Te())
              })
          }
        },
        xe = Object.freeze({ lists: [], fetchStatus: ge.a.NONE })
      ve.a.register(
        b()({}, ye, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case _e.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: ge.a.LOADING })
            case _e.FAILURE:
              return l()(l()({}, e), {}, { error: t.payload, fetchStatus: ge.a.FAILED })
            case _e.SUCCESS:
              if (t.payload)
                return l()(
                  l()({}, e),
                  {},
                  { lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: ge.a.LOADED },
                )
              break
            case be.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: ge.a.LOADING })
            case be.FAILURE:
              return l()(l()({}, e), {}, { error: t.payload, fetchStatus: ge.a.FAILED })
            case be.SUCCESS:
              if (t.payload)
                return l()(
                  l()({}, e),
                  {},
                  { lists: [t.payload.trusted_friends_list_create], error: null, fetchStatus: ge.a.LOADED },
                )
              break
            default:
              return e
          }
          return e
        }),
      )
      var Se = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? A.c.select(e, n) : void 0
        },
        Ee = function (e, t) {
          return Object(pe.A)(e, pe.f)
        },
        Ie = function (e) {
          var t = Ce(e)
          return t.length ? t[0] : void 0
        },
        Re = Object(k.a)()
          .propsFromState(function () {
            return {
              communities: A.f,
              educationalVisibilityFlag: Ee,
              hasMemberships: ue.d,
              selectedCommunity: Se,
              sliceModule: Object(de.createSelector)(me.q, function (e) {
                return e ? ce(e) : void 0
              }),
              selectTrustedFriendsList: Ie,
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
              updateSingleComposer: se.w,
              fetchOrCreateTrustedFriendsList: we,
            }
          }),
        Ae = n('FG+G'),
        ke = n('Sp5X'),
        Oe = n('X00g'),
        De = n('efqG'),
        Pe = B.a.baffe39a,
        Me = B.a.e815fc33,
        Fe = B.a.aa4209e8,
        Le = B.a.d0748dae,
        Ne = { viewType: 'communities_controls' },
        Be = T.a.createElement(Ae.a, null),
        Ve = (function (e) {
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
                  r = t.isC9sParticipationEnabled,
                  o = t.isSuperFollowsCreator,
                  s = t.sliceModule
                return T.a.createElement(oe, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: a,
                  history: ke.a,
                  isC9sParticipationEnabled: r,
                  isSuperFollowsCreator: o,
                  onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                  sliceModule: s,
                  trustedFriendsList: i.props.selectTrustedFriendsList,
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
                key: 'componentDidMount',
                value: function () {
                  var e = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    t = this.props.fetchOrCreateTrustedFriendsList
                  t && e && t()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.audienceControlsValue,
                    a = t.educationalVisibilityFlag,
                    r = t.hasMemberships,
                    o = t.isSuperFollowsCreator,
                    s = t.selectedCommunity,
                    l = this.state.popoverIsOpen,
                    c = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    d = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    u = n.communityIdValue || !1,
                    m = n.exclusivityControlValue || !1,
                    p = n.trustedFriendsValue || !1,
                    h = a && !s,
                    f = Pe
                  if ((u && null != s && s.name ? (f = s.name) : m ? (f = Fe) : p && (f = Le), m))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (u && null != s && s.theme && c) {
                    var g = Oe.a.getCommunityUIColorName(s.theme)
                    e = { color: g, borderColor: g, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return o || r || (d && this.props.selectTrustedFriendsList)
                    ? T.a.createElement(
                        R.a,
                        { behavioralEventContext: Ne },
                        T.a.createElement(
                          W.a,
                          { style: je.container },
                          T.a.createElement(
                            De.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: h ? 'forceVisible' : 'interactive',
                            },
                            T.a.createElement(
                              q.a,
                              i()(
                                {
                                  accessibilityExpanded: l,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: Me,
                                  accessibilityRole: 'button',
                                  icon: Be,
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
        })(T.a.Component)
      b()(Ve, 'contextType', I.a)
      var je = L.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        Ue = Re(Ve),
        ze = n('ddV6'),
        He = n.n(ze),
        We = n('PKbs'),
        Ge = function (e, t) {
          var n = t.selectedCommunityId
          return n ? A.c.select(e, n) : void 0
        },
        qe = Object(k.a)()
          .propsFromState(function () {
            return { community: Ge }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: A.c.fetchOneIfNeeded,
            }
          }),
        Ke = n('YeIG'),
        Qe = n('21zW'),
        Xe = B.a.gfca5254,
        Ye = B.a.f510c8b2,
        Ze = T.a.createElement(M.b, { weight: 'bold' }, Ye),
        Je = L.a.create(function (e) {
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
        $e = qe(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            r = e.selectedCommunityId,
            o = e.showMiddot
          T.a.useEffect(
            function () {
              r && Object(Ke.a)(t) && a(r).catch(n())
            },
            [t, r, n, a],
          )
          var s = T.a.useState(!1),
            l = He()(s, 2),
            c = l[0],
            d = l[1],
            u = T.a.useContext(I.a).featureSwitches,
            m = T.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return T.a.createElement(We.b, {
                    badgeStyle: Je.badgeStyle,
                    headerContainerStyle: Je.rulesHeader,
                    heading: Ze,
                    ruleContainerStyle: Je.ruleContainerStyle,
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
              h = Oe.a.getCommunityUIColorName(p),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return T.a.createElement(
              W.a,
              { style: Je.container },
              o ? T.a.createElement(Qe.a, null) : null,
              T.a.createElement(
                De.a,
                {
                  onDismiss: function () {
                    return d(!1)
                  },
                  onOpen: function () {
                    return d(!0)
                  },
                  renderContent: m,
                },
                T.a.createElement(
                  q.a,
                  i()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Je.button,
                    },
                    f,
                  ),
                  Xe,
                ),
              ),
            )
          }
          return null
        }),
        et = n('ii+P'),
        tt = n('4zmP'),
        nt = B.a.g46f363d,
        at = { viewType: 'rule_education' },
        it = function () {
          var e = Object(et.a)(pe.g),
            t = He()(e, 2),
            n = t[0],
            a = t[1]
          return (
            T.a.useEffect(
              function () {
                return a
              },
              [a],
            ),
            n
              ? T.a.createElement(
                  W.a,
                  { style: rt.container },
                  T.a.createElement(tt.a, { behavioralEventContext: at, onClose: a, text: nt, withCloseButton: !0 }),
                )
              : null
          )
        },
        rt = L.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        ot = T.a.memo(it),
        st = n('H7Rt'),
        lt = n('m3Bd'),
        ct = n.n(lt),
        dt = n('yZqq'),
        ut = function (e, t) {
          return Object(pe.A)(e, pe.q)
        },
        mt = Object(k.a)()
          .propsFromState(function () {
            return { shouldShowEducation: ut }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(pe.w)(pe.q)
              },
            }
          }),
        pt = B.a.aa65a449,
        ht = { viewType: 'persistent_conversation_controls_education' }
      var ft = L.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        gt = mt(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            i = T.a.useContext(I.a).featureSwitches,
            r = T.a.useState(),
            o = He()(r, 2),
            s = o[0],
            l = o[1],
            c = function () {
              t()
            }
          return (
            T.a.useEffect(function () {
              return c
            }, []),
            T.a.useEffect(
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
              ? T.a.createElement(
                  W.a,
                  { style: ft.container },
                  T.a.createElement(tt.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: ht,
                    onClose: c,
                    text: pt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        vt = n('FGLp'),
        yt = n('Irs7'),
        _t = n('DlMI'),
        bt = n('gBde'),
        Ct = n('gUPl'),
        Tt = n('cOhU'),
        wt = ['analytics'],
        xt = T.a.createElement(_t.a, null),
        St = T.a.createElement(bt.a, null),
        Et = T.a.createElement(Ct.a, null),
        It = T.a.createElement(Tt.a, null),
        Rt = 'conversation_control',
        At = { viewType: Rt },
        kt = Object.freeze({
          all: { icon: xt, label: B.a.i8ea6d4e },
          community: { icon: Et, label: B.a.ec5a4a25 },
          by_invitation: { icon: St, label: B.a.b4543009 },
          community_members: { icon: It, label: B.a.i13be5a0 },
          super_followers_exclusive: { icon: xt, label: B.a.f8393bda },
          trusted_friends_tweet: { icon: xt, label: B.a.c0857ccd },
        }),
        Ot =
          (Object.freeze(['community', 'by_invitation']),
          Object(yt.a)(function (e) {
            var t = e.analytics,
              n = ct()(e, wt),
              a = e.disabled,
              i = e.value,
              r = kt[i],
              o = r.icon,
              s = r.label,
              l = T.a.useState(!1),
              c = He()(l, 2),
              d = c[0],
              u = c[1],
              m = T.a.useRef(null)
            Object(vt.a)(function () {
              i !== st.a.all && i !== st.a.community_members && u(!0)
            })
            var p = T.a.useCallback(
              function (e) {
                t.scribe({ element: Rt, action: 'click' })
              },
              [t],
            )
            return T.a.createElement(
              R.a,
              { behavioralEventContext: At },
              d ? T.a.createElement(gt, { buttonRef: m.current }) : null,
              T.a.createElement(
                W.a,
                { style: Dt.controlsContainer },
                T.a.createElement(
                  dt.a,
                  n,
                  T.a.createElement(
                    q.a,
                    { disabled: a, icon: o, onPress: p, ref: m, size: 'xSmall', style: Dt.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        Dt = L.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        Pt = n('krmn'),
        Mt = n('cIoY'),
        Ft = n('w3n3'),
        Lt = n('MLl7'),
        Nt = n('1auM'),
        Bt = n('07FG'),
        Vt = n('Q8CU'),
        jt = n('QbaN'),
        Ut = n('VPdC'),
        zt = n('WPfJ'),
        Ht = L.a.create(function (e) {
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
              zIndex: zt.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: zt.e },
            iconEmojiPicker: { zIndex: zt.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: zt.a,
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
        Wt = B.a.bdbcdd93,
        Gt = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            i = e.setActiveParentKey,
            r = n || t.length >= 4,
            o = t.length < 3
          return T.a.createElement(Ut.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? Wt : void 0,
            disabled: r,
            multiple: o,
            onChange: a,
            onPress: i,
            style: [Ht.toolBarButton, Ht.firstToolBarButton],
            type: 'brandText',
          })
        },
        qt = n('oQhu'),
        Kt = n('p+r5'),
        Qt = n('GWvE'),
        Xt = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
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
                    r = e.name,
                    o = e.onBlur,
                    s = e.onChange
                  return T.a.createElement(
                    W.a,
                    { style: Yt.root },
                    T.a.createElement(Kt.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: n,
                      editable: a,
                      label: i,
                      maxLength: 25,
                      name: r,
                      onBlur: o,
                      onChange: s,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: Yt.formTextInput,
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
                    (this.value && !Object(Qt.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(T.a.Component)
      b()(Xt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Yt = L.a.create(function (e) {
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
        Zt = Xt,
        Jt = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        $t = n('6XNv'),
        en = (function (e) {
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
                    r = e.min,
                    o = e.onChange,
                    s = e.testID,
                    l = !t || r === i,
                    c = e.value.toString(),
                    d = Object(Jt.a)(r, i + 1).map(function (e) {
                      return { label: ''.concat(B.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return T.a.createElement($t.a, {
                    disabled: l,
                    label: n,
                    onChange: o,
                    options: d,
                    style: [tn.selector, !a && tn.rightMargin],
                    testID: s,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(T.a.PureComponent)
      b()(en, 'defaultProps', { last: !1 })
      var tn = L.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        nn = en,
        an = 'addPollChoice',
        rn = 'selectPollDays',
        on = 'selectPollHours',
        sn = 'selectPollMinutes',
        ln = 'removePollButton',
        cn = B.a.caf8edc4,
        dn = B.a.g93586be,
        un = B.a.d073b644,
        mn = B.a.a2f0728e,
        pn = (function (e) {
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
                    r = a.minutes,
                    o = 0 === n && 0 === i && 0 === r ? 1 : 7 === n ? 0 : i,
                    s = { days: n, hours: o, minutes: 7 === n ? 0 : 0 === n && 0 === o && r < 5 ? 5 : r }
                  return t && t(s), { duration: s }
                })
              }),
              b()(h()(i), '_handleHoursChange', function (e) {
                var t = i.props.onChange,
                  n = parseInt(e, 10)
                i.setState(function (e) {
                  var a = e.duration,
                    i = a.days,
                    r = a.minutes,
                    o = { days: i, hours: n, minutes: 0 === i && 0 === n && r < 5 ? 5 : r }
                  return t && t(o), { duration: o }
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
                  return T.a.createElement(
                    W.a,
                    { style: n },
                    T.a.createElement(M.b, { color: 'normal', style: hn.durationLabel }, t ? cn : ''),
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
                    r = a.hours,
                    o = a.minutes
                  return T.a.createElement(
                    W.a,
                    { style: hn.durationControls },
                    T.a.createElement(nn, {
                      editable: t && n,
                      label: dn,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: rn,
                      value: i,
                    }),
                    T.a.createElement(nn, {
                      editable: t && n,
                      label: un,
                      max: 7 === i ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: on,
                      value: r,
                    }),
                    T.a.createElement(nn, {
                      editable: t && n,
                      label: mn,
                      last: !0,
                      max: 7 === i ? 0 : 59,
                      min: 0 === i && 0 === r ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: sn,
                      value: o,
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
        })(T.a.Component)
      b()(pn, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var hn = L.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        fn = pn,
        gn = n('iY63'),
        vn = n('jtO7'),
        yn = B.a.g589c2e1,
        _n = B.a.a1e6c3a1,
        bn = B.a.a739e006,
        Cn = B.a.d89a5b92,
        Tn = B.a.c2a8118d,
        wn = B.a.a8ede1de,
        xn = B.a.af40a8ef,
        Sn = (function (e) {
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
                  r = i.choices,
                  o = h()(i),
                  s = [o._choice1, o._choice2, o._choice3, o._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                r && r.length >= 2 && s ? a() : n(), t && t({ choices: r, duration: i.duration })
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
            var r = e.initialChoices,
              o = void 0 === r,
              s = (r || []).length,
              l = s > 2 ? s : 2
            return (i.state = { autoFocus: o, choiceCount: l }), i
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
                    r = this.state,
                    o = r.autoFocus,
                    s = r.choiceCount,
                    l = T.a.createElement(
                      W.a,
                      { style: En.rightColumn },
                      s < 4
                        ? T.a.createElement(q.a, {
                            accessibilityLabel: wn,
                            disabled: !(t && i),
                            hoverLabel: { label: xn },
                            icon: T.a.createElement(gn.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: En.addButton,
                            testID: an,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return T.a.createElement(
                    W.a,
                    { style: En.choicesAndAddButton },
                    T.a.createElement(
                      W.a,
                      { style: En.choices },
                      T.a.createElement(Zt, {
                        autoFocus: o,
                        defaultValue: a[0],
                        editable: t && i,
                        label: yn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      T.a.createElement(Zt, {
                        defaultValue: a[1],
                        editable: t && i,
                        label: _n,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? T.a.createElement(Zt, {
                            autoFocus: o,
                            defaultValue: a[2],
                            editable: t && i,
                            label: bn,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? T.a.createElement(Zt, {
                            autoFocus: o,
                            defaultValue: a[3],
                            editable: t && i,
                            label: Cn,
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
                  return T.a.createElement(
                    W.a,
                    { style: En.root },
                    this._renderChoices(),
                    T.a.createElement(fn, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: En.durationPicker,
                    }),
                    T.a.createElement(
                      W.a,
                      { style: En.removePollButton },
                      T.a.createElement(vn.a, { color: 'red500', label: Tn, onPress: i, testID: ln }),
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
        })(T.a.Component),
        En = L.a.create(function (e) {
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
        In = Object(yt.a)(Sn),
        Rn = n('+d3d'),
        An = ['onChange'],
        kn = function (e) {
          var t = e.composerIndex,
            n = e.editable,
            a = e.initialChoices,
            r = e.initialDuration,
            o = e.isActive,
            s = e.isPollValid,
            l = e.updateComposer,
            c = Object(yt.b)(),
            d = T.a.useMemo(
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
            m = ct()(d, An),
            p = T.a.useMemo(
              function () {
                return Object(Rn.a)(
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
            h = T.a.useCallback(
              function () {
                p.flush()
              },
              [p],
            )
          return T.a.createElement(
            In,
            i()({ editable: n, initialChoices: a, initialDuration: r, isActive: o, onBlur: h, onChange: p }, m),
          )
        },
        On = L.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        Dn = B.a.i859676b,
        Pn = T.a.createElement(
          B.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          T.a.createElement(
            M.b,
            { link: '/settings/audience_and_tagging', style: On.link, withInteractiveStyling: !0, withUnderline: !0 },
            B.a.c9a48d3f,
          ),
        )
      function Mn() {
        return T.a.createElement(W.a, { style: On.container }, T.a.createElement(tt.a, { headline: Dn, text: Pn }))
      }
      var Fn = n('b5s6'),
        Ln = n('rcen'),
        Nn = n('zmS9'),
        Bn = 'addButton',
        Vn = 'addSubtitlesLabel',
        jn = 'altTextLabel',
        Un = 'tagPeopleLabel',
        zn = 'attachments',
        Hn = 'createPollButton',
        Wn = 'geoButton',
        Gn = 'gifSearchButton',
        qn = 'scheduleOption',
        Kn = 'taggedUsersLabel',
        Qn = 'tweetTextarea_',
        Xn = 'toolBar',
        Yn = 'scheduledTweetIndicator',
        Zn = n('xM7j'),
        Jn = n('6OUF'),
        $n = n('tZIO'),
        ea = n('5mJL'),
        ta = n('DNho'),
        na = n('jhWN'),
        aa = n('rFBM'),
        ia = n('zfvc'),
        ra = n('Ujvi'),
        oa = n('yTN1'),
        sa = n('gpVt'),
        la = n('hOZg'),
        ca = n('ll3R'),
        da = n('J0mu'),
        ua = n('EfHu'),
        ma = n('KrGU'),
        pa = n('boUI'),
        ha = n('6ZHn'),
        fa = n('/WPq'),
        ga = n('wpLu'),
        va = n('pHub'),
        ya = n('8A5z'),
        _a = n('pKoL'),
        ba = n('ZvMt'),
        Ca = n('9Xij'),
        Ta = (function (e) {
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
                  return T.a.createElement(W.a, { style: n }, this._renderImageGroup(t.length))
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
                    r = L.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      s,
                      l = L.a.theme.aspectRatios.minTimelineImage,
                      c = L.a.theme.aspectRatios.maxTimelineImage
                    r = ba.a.getImageAspectRatio(l, c, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return T.a.createElement(
                    Ca.a,
                    { ratio: t ? r : i / a },
                    T.a.createElement(W.a, { style: wa.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return T.a.createElement(
                    Ca.a,
                    { ratio: L.a.theme.aspectRatios.landscape },
                    T.a.createElement(
                      W.a,
                      { style: wa.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, wa.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return T.a.createElement(
                    Ca.a,
                    { ratio: L.a.theme.aspectRatios.landscape },
                    T.a.createElement(
                      W.a,
                      { style: wa.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, wa.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return T.a.createElement(
                    Ca.a,
                    { ratio: L.a.theme.aspectRatios.landscape },
                    T.a.createElement(
                      W.a,
                      { style: wa.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], wa.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return T.a.createElement(
                    W.a,
                    { style: [wa.column, t] },
                    this._renderMediaAtIndex(e[0], wa.gutterBottom),
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
                    r,
                    o = this.props,
                    s = o.editable,
                    l = o.isActive,
                    c = o.media,
                    d = o.onClickMedia,
                    u = o.onEditMedia,
                    m = o.onEditSensitiveWarning,
                    p = o.onRemoveMedia,
                    h = o.onSetMediaPreviewRef,
                    f = c[e],
                    g = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    v = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    y = !(
                      null === (i = f.mediaMetadata) ||
                      void 0 === i ||
                      null === (r = i.sensitiveMediaWarning) ||
                      void 0 === r ||
                      !r.size
                    ),
                    _ = u && s && l,
                    b = _ && y && !!m
                  return T.a.createElement(_a.a, {
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
                    style: [wa.mediaContainer, t],
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
        })(T.a.Component)
      b()(Ta, 'contextType', I.a)
      var wa = L.a.create(function (e) {
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
        xa = n('S1qy'),
        Sa = n.n(xa),
        Ea = n('cjAp'),
        Ia = n.n(Ea),
        Ra = B.a.f0afcc0e,
        Aa = B.a.ha5e2e79,
        ka = B.a.a3de3b68,
        Oa = B.a.cc2b28fc,
        Da = B.a.g45af04e,
        Pa = B.a.j1d5791c,
        Ma = B.a.ee9c4013,
        Fa = B.a.af40a8ef,
        La = B.a.e68b09b4,
        Na = B.a.ec10ee02,
        Ba = B.a.h735a98d,
        Va = B.a.c4ccfbe2,
        ja = B.a.j499fbcb,
        Ua = B.a.b7d8e3f0,
        za = B.a.d1175c78,
        Ha = B.a.bf4e9d79,
        Wa = B.a.e0342f98,
        Ga = B.a.e349147b,
        qa = B.a.e3a24e4b,
        Ka = B.a.fbd24526,
        Qa = B.a.de4669e2,
        Xa = B.a.d2c7a41c,
        Ya = B.a.f7364fa1,
        Za = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Ja = B.a.ia24dc8c,
        $a = T.a.createElement(la.a, null),
        ei = T.a.createElement(gn.a, null),
        ti = T.a.createElement(ca.a, null),
        ni = T.a.createElement(da.a, null),
        ai = { viewType: 'schedule_tweet' },
        ii = { viewType: 'add_poll' },
        ri = { viewType: 'add_composer' },
        oi = { viewType: 'tag_location' },
        si = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            d()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_handleConversationControlsValueChange', function (e) {
                r._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              b()(h()(r), '_handleAudienceControlsValueChange', function (e) {
                r.props.updateAudienceControlsValue(e)
              }),
              b()(
                h()(r),
                '_triggerConversationControlsImpression',
                Object(qt.a)(function () {
                  return r.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              b()(h()(r), '_shouldRenderControls', function (e, t) {
                var n = r.state.isFocused,
                  a = r.props,
                  i = a.audienceControlsValue,
                  o = a.isActive,
                  s = a.isInline,
                  l = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (i.conversationControlsValue !== st.a.community_members &&
                      i.conversationControlsValue !== st.a.super_followers_exclusive &&
                      i.conversationControlsValue !== st.a.trusted_friends_tweet) ||
                    !l
                  ) ||
                  (o && !l && (!s || n || e))
                )
              }),
              b()(h()(r), '_renderConversationControls', function (e) {
                var t = r.state.isFocused,
                  n = r.props,
                  a = n.audienceControlsValue,
                  i = n.isInline
                if (
                  (n.isReply || (!t && i) || r._triggerConversationControlsImpression(),
                  !r._conversationControlsCreationEnabled)
                )
                  return null
                var o = a.conversationControlsValue,
                  s = r._shouldRenderControls(e, 'conversation'),
                  l =
                    o === st.a.community_members ||
                    o === st.a.super_followers_exclusive ||
                    o === st.a.trusted_friends_tweet ||
                    r._isScheduled()
                return s
                  ? T.a.createElement(Ot, { disabled: l, onChange: r._handleConversationControlsValueChange, value: o })
                  : null
              }),
              b()(h()(r), '_renderTaggedLocation', function (e) {
                return T.a.createElement(
                  W.a,
                  { style: Ht.taggedLocationContainer },
                  T.a.createElement(
                    q.a,
                    {
                      icon: T.a.createElement(ua.a, null),
                      onPress: r._handleGeoButtonClick,
                      size: 'xSmall',
                      style: Ht.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              b()(h()(r), '_renderMainContent', function () {
                var e = r.props,
                  t = e.additionalToolbarContent,
                  n = e.data,
                  a = e.index,
                  i = e.isExpanded,
                  o = e.isInline,
                  s = e.isInlineReply,
                  l = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  d = n.cardUrl,
                  u = n.media,
                  m = n.pollActive,
                  p = n.quotedStatus,
                  h = n.text,
                  f = Object(sa.b)(h) || (d && !Object(Bt.a)(d) && [d]),
                  g = !!u.length || m || !!p,
                  v = r.props.typeaheadWrapper,
                  y = !r._isEmpty()
                return T.a.createElement(
                  W.a,
                  { style: Ht.textInputArea },
                  T.a.createElement(
                    W.a,
                    { style: i ? Ht.inputStyle : Ht.collapsedInputStyle },
                    r._renderAudienceControls(y),
                    T.a.createElement(
                      v,
                      {
                        contextText: h,
                        isInline: o,
                        isInlineReply: s,
                        onTextUpdated: c ? r._handleRichTextChange : r._handlePlainTextChange,
                        onTypeaheadStateChange: l,
                      },
                      r._renderFieldTextInput,
                    ),
                    f && !g
                      ? T.a.createElement(sa.a, { index: a, isCardPreviewTombstoned: Object(Bt.a)(d), urls: f })
                      : null,
                  ),
                  i ? null : t,
                )
              }),
              b()(h()(r), '_renderFieldTextInput', function (e) {
                var t = r.props,
                  n = t.autoFocus,
                  a = t.data,
                  o = t.editable,
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
                  v = r.state.isFocused,
                  y = a.text,
                  _ = 0 === s && m,
                  b = !!g,
                  C = g || {},
                  w = C.dismissComposerCommandName,
                  x = C.element,
                  S = C.sendTweetCommandName,
                  E = u && !g && !c,
                  I = g
                    ? {
                        onChange: r._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: w,
                          editorState: r.state.editorState,
                          element: x,
                          sendTweetCommandName: S,
                        },
                      }
                    : { onChange: r._getHandlePlainTextChange(e) }
                return T.a.createElement(
                  Jn.a,
                  i()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: ka,
                      autoFocus: n || (l && !d),
                      closeButton:
                        l && (r._deleteNonemptyTweetstormComposerEnabled || r._isEmpty()) && !_
                          ? r._renderCloseButton()
                          : void 0,
                      contentBelow: r._renderTweetAttachment(),
                      editable: o,
                      inputStyle: [Ht.textInputStyle, E && Ht.textInputMobileCollapsed],
                      keyCommandHandlers: p,
                      maxNumberOfLines: b ? 30 : 10,
                      multiline: !0,
                      numberOfLines: r._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: r._handleFilesAdded,
                      placeholder: r._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: r._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(Qn).concat(s),
                      useCacheForDOMMeasurements: v,
                      value: y,
                    },
                    I,
                  ),
                )
              }),
              b()(
                h()(r),
                '_getHandleRichTextChange',
                Object(qt.a)(function (e) {
                  return function (t) {
                    e(t), r._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                h()(r),
                '_getHandlePlainTextChange',
                Object(qt.a)(function (e) {
                  return function (t) {
                    e(t), r._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(h()(r), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = r.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? T.a.createElement(Mn, null) : null
              }),
              b()(h()(r), '_renderAudienceControls', function (e) {
                var t = r.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  i = t.isSuperFollowsCreator,
                  o = r.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = r.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  l = r.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return r._shouldRenderControls(e, 'audience') && 0 === a && (o || s || l)
                  ? T.a.createElement(Ue, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: i && s,
                      onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              b()(h()(r), '_renderCommunitiesRulesEducation', function () {
                return r.shouldRenderCommunitiesRules ? T.a.createElement(ot, null) : null
              }),
              b()(h()(r), '_renderCommunitiesRules', function (e) {
                var t = r.props.audienceControlsValue.communityIdValue || void 0
                return r.shouldRenderCommunitiesRules && t
                  ? T.a.createElement($e, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              b()(h()(r), '_calcNumberOfLines', function () {
                var e = r.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  i = !!e.richTextInputContext,
                  o = t.media,
                  s = t.pollActive,
                  l = t.quotedStatus,
                  c = !!o.length || !!s || !!l
                return (i && (a || c)) || !n ? 1 : 4
              }),
              b()(h()(r), '_renderScheduledTweetLegend', function () {
                var e = r.props.scheduledFor
                return T.a.createElement(Nn.a, {
                  onPress: r._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Yn,
                })
              }),
              b()(h()(r), '_handlePressScheduledTweetLegend', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              b()(h()(r), '_renderEmojiPicker', function () {
                return T.a.createElement(Pt.a, {
                  onEmojiSelect: r._handleInsertEmoji,
                  size: 'medium',
                  style: r._getEmojiPickerButtonStyles(),
                  textInputRef: r._textInputRef || void 0,
                })
              }),
              b()(
                h()(r),
                '_getEmojiPickerButtonStyles',
                Object(qt.a)(function () {
                  return [Ht.iconEmojiPicker, Ht.toolBarButton]
                }),
              ),
              b()(h()(r), '_isSchedulingDisabled', function () {
                var e = r.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  i = n.mediaTags,
                  o = n.pollActive,
                  s = n.quotedStatus,
                  l = n.text,
                  c = e.index,
                  d = e.isLast,
                  u = 0 === c && d,
                  m = t.conversationControlsValue !== st.a.all
                return Boolean(o || !u || (s && '' === l && !a.length) || m || i.length > 0)
              }),
              b()(h()(r), '_renderSchedulingButton', function () {
                return T.a.createElement(q.a, {
                  accessibilityLabel: Aa,
                  behavioralEventContext: ai,
                  disabled: r._isSchedulingDisabled(),
                  hoverLabel: { label: Ba },
                  icon: ni,
                  onClick: r._handleClickScheduler,
                  size: 'medium',
                  style: Ht.toolBarButton,
                  testID: qn,
                  type: 'brandText',
                })
              }),
              b()(h()(r), '_handleClickScheduler', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), a()
              }),
              b()(h()(r), '_renderCloseButton', function () {
                var e = r.props.onRemoveComposer
                return T.a.createElement(q.a, {
                  accessibilityLabel: Ma,
                  hoverLabel: { label: La },
                  icon: $a,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              b()(h()(r), '_renderTweetAttachment', function () {
                var e = r.props,
                  t = e.data,
                  n = e.editable,
                  a = e.index,
                  i = e.isActive,
                  o = e.updateSingleComposer,
                  s = t.media,
                  l = t.pollActive,
                  c = t.pollChoices,
                  d = t.pollDuration,
                  u = t.quotedStatus
                if (0 === s.length && !l && !u) return null
                var m = r.hasAttachedVideo && (r._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return T.a.createElement(
                  W.a,
                  { onClick: r._handleFocus, style: [Ht.attachmentContainer, Ht.tweetAttachmentArea], testID: zn },
                  s.length > 0
                    ? T.a.createElement(Ta, {
                        editable: n,
                        isActive: i,
                        media: s,
                        onClickMedia: r.hasAttachedImage ? r._handleClickMediaDetail('crop') : void 0,
                        onEditMedia: r.hasAttachedImage
                          ? r._handleClickMediaDetail('crop')
                          : m
                          ? r._handleClickMediaDetail(m)
                          : void 0,
                        onEditSensitiveWarning:
                          r.hasAttachedImage || r.hasAttachedVideo
                            ? r._handleClickMediaDetail('sensitive_media')
                            : void 0,
                        onRemoveMedia: r._handleMediaRemoveFactory,
                        onSetMediaPreviewRef: r._handleSetMediaPreviewRef,
                        style: Ht.mediaPreview,
                      })
                    : null,
                  i ? r._renderMediaActions() : null,
                  l
                    ? T.a.createElement(kn, {
                        composerIndex: a,
                        editable: n,
                        initialChoices: c,
                        initialDuration: d,
                        isActive: i,
                        isPollValid: t.pollValid,
                        updateComposer: o,
                      })
                    : null,
                  u ? r._renderQuoteTweet(u) : null,
                )
              }),
              b()(h()(r), '_renderQuoteTweet', function (e) {
                var t = r.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? T.a.createElement(
                      Zn.a,
                      null,
                      T.a.createElement(Ln.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : T.a.createElement(Fn.a, {
                      isCondensed: t.length > 0,
                      style: Ht.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              b()(h()(r), '_renderToolbar', function (e) {
                var t = r.props,
                  n = t.additionalToolbarContent,
                  a = t.data.media,
                  i = t.hidePoll,
                  o = t.hideScheduling,
                  s = t.isInlineReply,
                  l = t.isReply,
                  c = t.isSelfThreadReply,
                  d = t.richTextInputContext,
                  u = t.setActiveParentKey,
                  m = !!d,
                  p = !s && !i,
                  h = !s && !o,
                  f = r.context.featureSwitches.isTrue('responsive_web_reply_storm_enabled'),
                  g = e && (!l || c || f)
                return T.a.createElement(
                  W.a,
                  { style: Ht.toolBar, testID: Xn },
                  T.a.createElement(
                    W.a,
                    { style: Ht.toolBarIconsContainer },
                    T.a.createElement(Gt, {
                      media: a,
                      mediaAttachDisabled: r.mediaAttachDisabled,
                      onFilesAdded: r._handleFilesAdded,
                      setActiveParentKey: u,
                    }),
                    r._renderGifButton(),
                    p ? r._renderPollButton() : null,
                    m ? r._renderEmojiPicker() : null,
                    h ? r._renderSchedulingButton() : null,
                    r._renderGeoButton(),
                  ),
                  T.a.createElement(
                    W.a,
                    { style: Ht.toolBarIconsContainer },
                    e ? r._renderCountdownCircle() : null,
                    g &&
                      T.a.createElement(
                        T.a.Fragment,
                        null,
                        T.a.createElement(W.a, { style: Ht.separator }),
                        r._renderAddComposerButton(),
                      ),
                    n,
                  ),
                )
              }),
              b()(h()(r), '_addOverflowStyle', function (e) {
                var t = r.props.richTextInputContext
                if (t) {
                  var n = e.getCurrentContent().getPlainText(),
                    a = n.length,
                    i = r._getParsedTweet(n).validRangeEnd,
                    o = i + 1 < a
                  if (r.state.hasOverflowStyle || o) {
                    var s = o ? i + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, s, r.state.hasOverflowStyle),
                      hasOverflowStyle: o,
                    }
                  }
                  return { editorState: e, hasOverflowStyle: o }
                }
              }),
              b()(h()(r), '_handleRichTextChange', function (e) {
                var t = r.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var a = t.convertEmojiToEntities(e)
                  r.setState(r._addOverflowStyle(a))
                }
                r._handleTextValueChange(n)
              }),
              b()(h()(r), '_handlePlainTextChange', function (e) {
                var t = $n.a.replaceCarriageReturns(e.target.value)
                r._handleTextValueChange(t)
              }),
              b()(h()(r), '_handleTextValueChange', function (e) {
                var t = r.props,
                  n = t.data,
                  a = n.key,
                  i = n.text,
                  o = t.onTextChange
                i !== e && o(e, a)
              }),
              b()(h()(r), '_handleClickAltTextShortcut', function () {
                r.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              b()(h()(r), '_handleClickSubtitlesShortcut', function () {
                r.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              b()(h()(r), '_handleClickMediaDetail', function (e) {
                return function (t) {
                  return function () {
                    var n = r.props,
                      a = n.analytics,
                      i = n.history
                    a.scribe({ element: 'media_detail_button', action: 'click' }),
                      (r.hasAttachedImage || r.hasAttachedVideo) &&
                        i.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              b()(h()(r), '_handleFilesAdded', function (e) {
                var t = r.props,
                  n = t.addToast,
                  a = t.data.pollActive,
                  i = t.onFilesAdded
                a ? n({ text: Oa }) : i(e)
              }),
              b()(h()(r), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  r.props.onRemoveMedia(r.props.index, e)
                }
              }),
              b()(h()(r), '_handleInsertEmoji', function (e) {
                var t = r.state.editorState,
                  n = r.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  r._handleRichTextChange(a)
                }
              }),
              b()(h()(r), '_validateMedia', function (e) {
                var t = r.props.data.media
                return E.c(t.concat(e))
              }),
              b()(h()(r), '_handlePollAdd', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), a({ pollActive: !0 }, n)
              }),
              b()(h()(r), '_handleGeoButtonClick', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), a()
              }),
              b()(h()(r), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  r.focus()
              }),
              b()(h()(r), '_handleFocus', function () {
                var e = r.props,
                  t = e.index,
                  n = e.isActive,
                  a = e.onFocus
                ;(0, e.setActiveParentKey)(),
                  n ||
                    (window.requestAnimationFrame(function () {
                      r._mediaPreviewRef && r._mediaPreviewRef.playVideo()
                    }),
                    a(t))
              }),
              b()(h()(r), '_handleEditorFocus', function () {
                return r.setState({ isFocused: !0 })
              }),
              b()(h()(r), '_formatCountdownNumber', function (e) {
                return Ja(Math.ceil(e / r._userLanguageWeight))
              }),
              b()(h()(r), '_getPlaceHolderText', function () {
                var e = r.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  i = e.index,
                  o = e.isReply,
                  s = e.isSelfThreadReply
                return a
                  ? Qa
                  : n
                  ? Ya
                  : r.isReplyOrReplyThread && 0 === i
                  ? Xa
                  : o && !s && i > 0
                  ? Ka
                  : s || i > 0
                  ? qa
                  : Ga
              }),
              b()(h()(r), '_getNumberOfAltTextEntries', function () {
                return r.props.data.media.reduce(function (e, t) {
                  var n
                  return null !== (n = t.mediaMetadata) && void 0 !== n && n.altText ? e + 1 : e
                }, 0)
              }),
              b()(
                h()(r),
                '_getParsedTweet',
                Object(qt.a)(function (e) {
                  var t = Ia.a[r.props.twitterTextConfigurationVersion]
                  return Sa()(e, t)
                }),
              ),
              b()(h()(r), '_isEmpty', function () {
                var e = r.props.data
                return Object(Vt.c)(e)
              }),
              b()(h()(r), '_isScheduled', function () {
                var e = r.props.data.scheduledFor
                return Object(jt.h)(e)
              }),
              b()(h()(r), '_autotagLocationIfNeeded', function () {
                var e = r.props,
                  t = e.data.taggedLocation,
                  n = e.fetchAutotaggedLocationIfNeeded,
                  a = e.index,
                  i = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && i({ taggedLocation: null != e ? e : null }, a)
                })
              }),
              b()(h()(r), '_handleSetMediaPreviewRef', function (e) {
                r._mediaPreviewRef = e
              }),
              b()(h()(r), '_setTextInputRef', function (e) {
                r._textInputRef = e
              })
            var o = e.data.text,
              s = e.richTextInputContext,
              l = e.userLanguage,
              c = (s || {}).initEditorState
            return (
              (r._conversationControlsCreationEnabled =
                !0 ===
                r.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (r._deleteNonemptyTweetstormComposerEnabled = r.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (r._userLanguageWeight = l && Za.indexOf(l) > -1 ? 2 : 1),
              r._autotagLocationIfNeeded(),
              (r.state = { editorState: c ? c(o) : null, hasOverflowStyle: !1, isFocused: !1 }),
              r
            )
          }
          return (
            m()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof Nt.a) && e.mediaFile.isVideo
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
                    r = t.isInline,
                    o = t.isLast,
                    s = t.loggedInUser,
                    l = t.windowWidth,
                    c = t.withAvatar,
                    d = !this._isEmpty(),
                    u = this._shouldRenderControls(d),
                    m = l < L.a.theme.breakpoints.small
                  return T.a.createElement(
                    W.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [Ht.root, !a && Ht.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    T.a.createElement(
                      ea.a,
                      {
                        avatarCell: T.a.createElement(
                          T.a.Fragment,
                          null,
                          c
                            ? T.a.createElement(ta.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return T.a.createElement(na.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: Ht.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: r,
                                })
                              })
                            : null,
                          o
                            ? null
                            : T.a.createElement(W.a, {
                                style: [Ht.conversationLine, !c && Ht.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: i ? Ht.avatarContainerExpanded : Ht.avatarContainer,
                        cellStyle: Ht.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      T.a.createElement(
                        W.a,
                        { onFocus: this._handleEditorFocus, style: Ht.inputArea },
                        T.a.createElement(
                          aa.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: Ht.dragDrop,
                          },
                          function (t) {
                            return T.a.createElement(
                              T.a.Fragment,
                              null,
                              T.a.createElement(W.a, { style: Ht.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      T.a.createElement(
                        W.a,
                        { style: [(u || n) && Ht.controlsContainer, m ? Ht.mobileControlsLayout : Ht.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(m),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      T.a.createElement(ia.b, { show: a && i }, this._renderToolbar(d)),
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
                    r = e.loggedInUser,
                    o = e.setActiveParentKey,
                    s = a || n.length || !r
                  return T.a.createElement(Ft.a, {
                    enabled: !s,
                    gifSearchKeySource: Lt.a.Composition,
                    history: i,
                    onPress: o,
                    testID: Gn,
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
                    r = e.loggedInUser,
                    o = this._isScheduled(),
                    s = !(!(a || n.length || i || o) && r)
                  return T.a.createElement(q.a, {
                    accessibilityLabel: Ra,
                    behavioralEventContext: ii,
                    disabled: s,
                    hoverLabel: { label: Na },
                    icon: ti,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: Ht.toolBarButton,
                    testID: Hn,
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
                    r = t ? T.a.createElement(ua.a, null) : T.a.createElement(ma.a, null)
                  return T.a.createElement(q.a, {
                    accessibilityLabel: Va,
                    behavioralEventContext: oi,
                    disabled: i,
                    hoverLabel: { label: Va },
                    icon: r,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: Ht.toolBarButton,
                    testID: Wn,
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
                  var r = this.context.featureSwitches.isTrue('rweb_video_tagging_enabled')
                  return T.a.createElement(
                    W.a,
                    { style: Ht.imageActions },
                    t && t.url && t.provider
                      ? T.a.createElement(
                          W.a,
                          { style: Ht.addImageTextPadding },
                          T.a.createElement(Mt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !r) || this._isScheduled()
                      ? null
                      : T.a.createElement(
                          M.b,
                          {
                            accessibilityLabel: za,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [Ht.addImageTextContainer, Ht.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || i
                      ? T.a.createElement(
                          M.b,
                          {
                            accessibilityLabel: ja({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: Ht.addImageTextContainer,
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
                  return T.a.createElement(
                    M.b,
                    { color: 'gray700', size: 'subtext2', testID: Un },
                    T.a.createElement(pa.a, { style: Ht.addImageActionIcon }),
                    za,
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
                  return T.a.createElement(
                    M.b,
                    { color: 'gray700', size: 'subtext2', testID: Kn },
                    T.a.createElement(ha.a, { style: Ht.addImageActionIcon }),
                    T.a.createElement(ra.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                      ? T.a.createElement(
                          M.b,
                          { color: 'gray700', size: 'subtext2', testID: jn },
                          T.a.createElement(ga.a, { style: Ht.addImageActionIcon }),
                          Ua({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : T.a.createElement(
                          M.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: jn },
                          T.a.createElement(ga.a, { style: Ht.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : T.a.createElement(
                        M.b,
                        { color: 'gray700', size: 'subtext2', testID: jn },
                        T.a.createElement(fa.a, { style: Ht.addImageActionIcon }),
                        ja({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? va.a : ya.a
                  return T.a.createElement(
                    M.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: Ht.addImageTextContainer,
                      testID: Vn,
                    },
                    T.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Wa : void 0,
                      style: Ht.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : Ha,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = Ia.a[n],
                    i = this._getParsedTweet(t).weightedLength
                  return T.a.createElement(oa.a, {
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
                    t = e.addComposerLink,
                    n = e.disableAddTweet,
                    a = e.isCommunityTweetFromProtectedUser,
                    i = e.loggedInUser,
                    r = e.onAddComposer,
                    o = this._isEmpty(),
                    s = this._isScheduled(),
                    l = n || o || s || !i || a
                  return T.a.createElement(q.a, {
                    accessibilityLabel: this.isReplyOrReplyThread ? Pa : Da,
                    behavioralEventContext: ri,
                    disabled: l,
                    hoverLabel: { label: Fa },
                    icon: ei,
                    link: l ? void 0 : t,
                    onPress: r,
                    size: 'xSmall',
                    testID: Bn,
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
                    r = n.length,
                    o = n.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    s = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof Nt.a) && e.mediaFile.isVideo
                    })
                  return 4 === r || o || s || a || this.hasExternalMedia || !i
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
                      return e.mediaFile && !(e.mediaFile instanceof Nt.a) && e.mediaFile.isVideo
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
              {
                key: 'isReplyOrReplyThread',
                get: function () {
                  var e = this.props,
                    t = e.isReply,
                    n = e.isSelfThreadReply
                  return t && !n
                },
              },
            ]),
            n
          )
        })(T.a.Component)
      b()(si, 'contextType', I.a),
        b()(si, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var li = Object(yt.a)(si),
        ci = T.a.createElement(M.b, { weight: 'bold' }),
        di = T.a.createElement(M.b, { color: 'link' }),
        ui = function (e) {
          return '@'.concat(e)
        },
        mi = n('SrIh'),
        pi = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        hi = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            r = {
              replyToOne: function (e) {
                var t = e.userName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  T.a.cloneElement(di, null, B.a.b50e199a({ userName: ui(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  T.a.cloneElement(di, null, B.a.f2e4dd37({ replyUserName: ui(t), otherUserName: ui(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  T.a.cloneElement(
                    di,
                    null,
                    B.a.eccfddc3({ userOneName: ui(t), userTwoName: ui(a), userThreeName: ui(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  T.a.cloneElement(di, null, B.a.h758cd22({ userOneName: ui(n), userTwoName: ui(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  T.a.cloneElement(di, null, B.a.e9f8a0eb({ userName: ui(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  T.a.cloneElement(di, null, B.a.df7e9fbc({ replyUserName: ui(n), otherUserName: ui(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  i = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  T.a.cloneElement(
                    di,
                    null,
                    B.a.b45fa505({ userOneName: ui(n), userTwoName: ui(i), userThreeName: ui(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  i = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  T.a.cloneElement(di, null, B.a.a4383815({ userOneName: ui(a), userTwoName: ui(i), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  T.a.cloneElement(di, null, B.a.ff792e35({ userName: ui(t) })),
                  T.a.cloneElement(ci, null, B.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  T.a.cloneElement(di, null, B.a.g7d5e985({ replyUserName: ui(t), otherUserName: ui(n) })),
                  T.a.cloneElement(ci, null, B.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  T.a.cloneElement(
                    di,
                    null,
                    B.a.fe5a61e9({ userOneName: ui(t), userTwoName: ui(a), userThreeName: ui(n) }),
                  ),
                  T.a.cloneElement(ci, null, B.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return T.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  T.a.cloneElement(di, null, B.a.bc9dd514({ userOneName: ui(n), userTwoName: ui(a), othersCount: t })),
                  T.a.cloneElement(ci, null, B.a.de5071ba),
                )
              },
            },
            o = E.a({ inReplyToStatus: a, loggedInUserId: i }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            s = a.retweeted_status || a,
            l = s.exclusivity_info,
            c = s.user,
            d = o.filter(function (e) {
              return e.id_str !== c.id_str
            }),
            u = He()(d, 2),
            m = u[0],
            p = u[1],
            h = [c, m, p].map(pi),
            f = He()(h, 3),
            g = f[0],
            v = f[1],
            y = f[2],
            _ = o.length - 2
          switch (o.length) {
            case 0:
              return Object(mi.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? r.communityReplyToOne({ communityName: t, userName: g })
                : l
                ? r.exclusiveReplyToOne({ userName: g })
                : r.replyToOne({ userName: g })
            case 2:
              return t
                ? r.communityReplyToTwo({ communityName: t, userOneName: g, userTwoName: v })
                : l
                ? r.exclusiveReplyToTwo({ userOneName: g, userTwoName: v })
                : r.replyToTwo({ userOneName: g, userTwoName: v })
            case 3:
              return t
                ? r.communityReplyToThree({ communityName: t, userOneName: g, userTwoName: v, userThreeName: y })
                : l
                ? r.exclusiveReplyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
                : r.replyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
            default:
              return t
                ? r.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: v, othersCount: _ })
                : l
                ? r.exclusiveReplyToMany({ userOneName: g, userTwoName: v, othersCount: _ })
                : r.replyToMany({ userOneName: g, userTwoName: v, othersCount: _ })
          }
        },
        fi = T.a.memo(hi),
        gi = n('fs1G'),
        vi = n('BLtI'),
        yi = n('kY28')
      function _i(e) {
        null == e || e.preventDefault()
      }
      var bi = L.a.create(function (e) {
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
        Ci = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            r = e.onPress,
            o = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            l = void 0 === s || s
          return T.a.createElement(
            W.a,
            null,
            l
              ? T.a.createElement(vi.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: gi.a,
                  onAvatarClick: _i,
                  onEntityClick: _i,
                  onMediaClick: _i,
                  onReplyContextClick: _i,
                  replyContext: yi.a.ReplyContextTypes.None,
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
            T.a.createElement(
              W.a,
              { style: bi.replyUsersContainer },
              T.a.createElement(
                ea.a,
                {
                  avatarCell: l ? T.a.createElement(W.a, { style: bi.conversationLine }) : null,
                  avatarCellStyle: bi.conversationLineContainer,
                  cellStyle: bi.repliesTextContainer,
                  style: bi.grid,
                },
                o
                  ? T.a.createElement(
                      M.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: r, style: l && bi.repliesMessage },
                      T.a.createElement(fi, {
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
        Ti = n('Tb0w'),
        wi = n('1YZw'),
        xi = n('pidX'),
        Si = n('5oBF'),
        Ei = n('JYYi'),
        Ii = n('/Rsk'),
        Ri = n('qlwE'),
        Ai = n('XOJV'),
        ki = n('G6rE'),
        Oi = n('AspN'),
        Di = n('oEGd'),
        Pi = n('P1r1'),
        Mi = ['mediaIds'],
        Fi = function (e) {
          return e.parentTweetId || (e.isInline ? Ei.a.homeTimeline : Ei.a.modal)
        },
        Li = function (e, t) {
          var n = Fi(t)
          return se.k(e, n)
        },
        Ni = function (e, t) {
          var n = Fi(t)
          return se.l(e, n)
        },
        Bi = function (e, t) {
          var n = Fi(t)
          return se.j(e, n)
        },
        Vi = function (e, t) {
          var n = Ki(e, t),
            a = Bi(e, t).communityIdValue || void 0,
            i = (null == n ? void 0 : n.community_id_str) || a,
            r = i ? A.c.select(e, i) : void 0
          return r ? r.name : void 0
        },
        ji = function (e, t) {
          var n = Fi(t)
          return se.m(e, n)
        },
        Ui = function (e, t) {
          var n = Fi(t)
          return se.i(e, n)
        },
        zi = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        Hi = Object(de.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          ki.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Wi = function (e, t) {
          return t.parentTweetId || Gi(e, t) || qi(e, t)
        },
        Gi = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        qi = zi(function (e) {
          return e.inReplyToStatusId
        }),
        Ki = function (e, t) {
          var n = Wi(e, t)
          return n ? Ai.a.selectHydrated(e, n) : void 0
        },
        Qi = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Xi = zi(function (e) {
          return e.hasArticleNudge
        }),
        Yi = zi(function (e) {
          return e.convoCardData
        }),
        Zi = zi(function (e) {
          return e.externalMedia
        }),
        Ji = zi(function (e) {
          return e.externalMediaFiles
        }),
        $i = zi(function (e) {
          return e.previewTweetId
        }),
        er = zi(function (e) {
          return e.defaultText
        }),
        tr = function (e, t) {
          var n = er(e, t),
            a = Object(xi.a)(t.location)
          return (Qi(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        nr = zi(function (e) {
          return e.quotedStatusId
        }),
        ar = zi(function (e) {
          return e.quotedStatus
        }),
        ir = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : ar(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = nr(e, t)
              return n ? Ai.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        rr = zi(function (e) {
          return e.isSelfThreadReply
        }),
        or = zi(function (e) {
          return e.positionCursorAtBeginning
        }),
        sr = zi(function (e) {
          return e.promotedContent
        }),
        lr = function () {
          return Object(de.createSelector)(Li, tr, ir, Oi.j, function (e, t, n, a) {
            return e.map(function (e, i) {
              return l()(
                l()({}, ((r = e).mediaIds, ct()(r, Mi))),
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
              var r
            })
          })
        },
        cr = {
          addComposer: se.a,
          addToast: wi.b,
          createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: se.b,
          deletePreviewTweet: Si.c,
          fetchAutotaggedLocationIfNeeded: Ii.a,
          fetchTweetIfNeeded: Ai.a.fetchOneIfNeeded,
          removeComposer: se.e,
          resetDraft: se.f,
          retweet: Ai.a.retweet,
          schedule: se.h,
          draftTweet: se.d,
          send: se.q,
          updateActiveComposerIndex: se.s,
          updateAudienceControlsValue: se.t,
          updateConvoCardState: Ti.b,
          preUploadMedia: Oi.e,
          addMedia: Oi.b,
          processMultipleMedia: Oi.g,
          removeMediaUpload: Oi.i,
          updateSingleComposer: se.w,
          setActiveParentKey: se.r,
          copyDataFromInlineComposerToModalComposer: se.c,
        },
        dr = Object(Di.e)(function () {
          return Object(de.createStructuredSelector)({
            activeComposerIndex: Ui,
            activeUser: Hi,
            altTextNudgeType: Pi.h,
            audienceControlsValue: Bi,
            composerData: lr(),
            dataSaverMode: Pi.k,
            excludedRecipients: Ni,
            externalMedia: Zi,
            externalMediaFiles: Ji,
            geoEnabled: Pi.p,
            hasArticleNudge: Xi,
            inReplyToStatus: Ki,
            inReplyToStatusId: Wi,
            isIntentRoute: Qi,
            isSelfThreadReply: rr,
            isSending: ji,
            isSuperFollowsCreator: me.l,
            positionCursorAtBeginning: or,
            loggedInUser: ki.e.selectLoggedInUser,
            prepopulatedText: tr,
            previewTweetId: $i,
            promotedContent: sr,
            scheduledFor: se.n,
            selectedCommunityName: Vi,
            sendingProgress: se.o,
            convoCardData: Yi,
            undoTweetSettings: Ri.q,
            userLanguage: me.o,
            quotedStatusId: nr,
          })
        }, cr),
        ur = n('45mF'),
        mr = n('c0ZR'),
        pr = n('W5XZ'),
        hr = n('Drq4'),
        fr = n('I8M8'),
        gr = n('7myi'),
        vr = n('7nmT'),
        yr = n.n(vr),
        _r = n('vbWy'),
        br = n('Rp9C'),
        Cr = n('Q5Mu'),
        Tr = n('N5qz'),
        wr = 'tweetButton',
        xr = 'tweetButtonInline',
        Sr = Object(k.a)()
          .propsFromState(function () {
            return { loggedInUser: ki.e.selectLoggedInUser }
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
        Er = n('cHvH'),
        Ir = n('sgih'),
        Rr = n('xKuM'),
        Ar = n('5Vk4'),
        kr = L.a.create(function (e) {
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
        Or = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            i = e.onMaskClick,
            r = e.sheetType,
            o = e.showActionButton
          return T.a.createElement(Er.a, null, function (e) {
            var s = e.windowWidth > L.a.theme.breakpoints.small
            return T.a.createElement(
              Ir.a,
              { onMaskClick: i, style: kr.sheetStyle, type: r, withMask: !0 },
              o &&
                T.a.createElement(Rr.a, {
                  leftControl: T.a.createElement(Ar.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              T.a.createElement(W.a, { style: [kr.mainCard, s ? kr.largeScreenCard : kr.smallScreenCard] }, n),
            )
          })
        },
        Dr = B.a.cb7c0987,
        Pr = B.a.de3bcf27,
        Mr = B.a.e710ce75,
        Fr = B.a.h11e5910,
        Lr = B.a.b7ec04f3,
        Nr = B.a.i62a03aa,
        Br = L.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        Vr = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return T.a.createElement(
            Or,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            T.a.createElement(M.b, { size: 'title4', style: Br.itemPadding, weight: 'heavy' }, Dr),
            T.a.createElement(M.b, { color: 'gray700', style: Br.itemPadding }, Pr),
            T.a.createElement(M.b, { color: 'gray700', style: Br.itemPadding }, Mr),
            T.a.createElement(
              W.a,
              { style: Br.buttonContainer },
              T.a.createElement(M.b, { size: 'title4', style: Br.itemPadding, weight: 'heavy' }, Fr),
              T.a.createElement(q.a, { onPress: a, style: Br.itemPadding, type: 'brandOutlined' }, Lr),
              T.a.createElement(q.a, { onPress: n, style: Br.itemPadding, type: 'brandOutlined' }, Nr),
            ),
          )
        },
        jr = n('cm6r'),
        Ur = L.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        zr = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return T.a.createElement(jr.a, { interactiveStyles: null, onPress: a }, function (e) {
            return T.a.createElement(
              T.a.Fragment,
              null,
              T.a.createElement(q.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: Ur.button,
                type: 'primaryOutlined',
              }),
              T.a.createElement(M.b, { color: 'gray700' }, n),
            )
          })
        },
        Hr = n('sjK1'),
        Wr = n('FDY4'),
        Gr = n('tevE'),
        qr = n('jV+4'),
        Kr = n('UgB4'),
        Qr = n('TW8A'),
        Xr = n('hiGS'),
        Yr = n('WtWS'),
        Zr = n('Lsrn'),
        Jr = n('k/Ka'),
        $r = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Jr.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Zr.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            T.a.createElement(
              'g',
              null,
              T.a.createElement('path', {
                d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
              }),
            ),
          )
        }
      $r.metadata = { width: 24, height: 24 }
      var eo = $r,
        to = [
          { headlineText: B.a.f3a7a80c, subTextLine1: B.a.ge52d1de, subTextLine2: null },
          { headlineText: B.a.j311bf49, subTextLine1: B.a.ae42ebff, subTextLine2: B.a.aa350ab1 },
          { headlineText: B.a.j18b2956, subTextLine1: B.a.f6bee896, subTextLine2: B.a.dddd0995 },
          { headlineText: B.a.d02a94fa, subTextLine1: B.a.dddd0995, subTextLine2: null },
          { headlineText: B.a.i018b746, subTextLine1: B.a.b8d85df9, subTextLine2: B.a.d5ca11f0 },
        ],
        no = B.a.h11e5910,
        ao = B.a.abd845fd,
        io = B.a.bea869b3,
        ro = B.a.d96cf7cd,
        oo = B.a.d3145da8,
        so = L.a.create(function (e) {
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
            thanksCheckMark: { color: L.a.theme.colors.primary, marginRight: e.spaces.space8 },
            photos: {
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginRight: e.spaces.space12,
              flex: '3 1 0%',
            },
            textStyle: { flex: '8 1 0%' },
          }
        }),
        lo = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            i = e.onDismiss,
            r = e.onEditTweet,
            o = e.onSendTweet,
            s = e.onWeGotItWrong,
            l = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            m = T.a.useContext(I.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            p = to[(m = m >= 0 && m <= 4 ? m : 0)]
          return T.a.createElement(Er.a, null, function (e) {
            var m,
              h,
              f,
              g = e.windowWidth
            return T.a.createElement(
              Or,
              {
                actionButtonType: 'close',
                onActionButtonClick: i,
                onMaskClick: i,
                sheetType: 'full',
                showActionButton: g > L.a.theme.breakpoints.medium,
              },
              T.a.createElement(eo, { style: [so.profanityIcon, so.itemPadding] }),
              T.a.createElement(Gr.a, { size: 'title4', style: so.itemPadding, weight: 'heavy' }, p.headlineText),
              T.a.createElement(M.b, { color: 'gray700', style: so.itemPadding }, p.subTextLine1),
              T.a.createElement(M.b, { color: 'gray700', style: so.itemPadding }, p.subTextLine2),
              T.a.createElement(
                W.a,
                { style: [so.tweetContainer, so.itemPadding] },
                T.a.createElement(
                  W.a,
                  { style: so.tweetContent },
                  T.a.createElement(qr.a, { name: c, profileImageUrl: d, screenName: u, style: so.userName }),
                  T.a.createElement(
                    W.a,
                    { style: so.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          i = ''
                        if (e.externalMediaDetails) i = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Hr.c) i = e.mediaFile.thumbnail
                        else if (null !== (t = e.mediaFile) && void 0 !== t && t.url) {
                          var r
                          i = null === (r = e.mediaFile) || void 0 === r ? void 0 : r.url
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
                      return T.a.createElement(
                        W.a,
                        { style: so.photos },
                        T.a.createElement(Wr.a, {
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
                    T.a.createElement(M.b, { style: so.textStyle }, l),
                  ),
                ),
              ),
              t
                ? T.a.createElement(
                    W.a,
                    { style: so.thanksContainer },
                    T.a.createElement(Yr.a, { style: so.thanksCheckMark }),
                    T.a.createElement(M.b, { align: 'center', style: so.itemPadding }, oo),
                  )
                : T.a.createElement(M.b, { align: 'center', onPress: s, style: so.itemPadding, withUnderline: !0 }, no),
              g > L.a.theme.breakpoints.small
                ? T.a.createElement(
                    W.a,
                    { style: so.buttonContainer },
                    T.a.createElement(q.a, { onPress: r, style: so.itemPadding, type: 'brandFilled' }, ao),
                    T.a.createElement(q.a, { onPress: o, style: so.itemPadding, type: 'brandOutlined' }, io),
                    T.a.createElement(q.a, { onPress: a, style: so.itemPadding, type: 'destructiveText' }, ro),
                  )
                : ((m = T.a.createElement(Kr.a, { style: { color: L.a.theme.colors.text } })),
                  (h = T.a.createElement(Qr.a, { style: { color: L.a.theme.colors.primary } })),
                  (f = T.a.createElement(Xr.a, { style: { color: L.a.theme.colors.red500 } })),
                  T.a.createElement(
                    W.a,
                    { style: so.mobileButtonContainer },
                    T.a.createElement(zr, { icon: m, label: io, onPress: o }),
                    T.a.createElement(zr, { icon: h, label: ao, onPress: r }),
                    T.a.createElement(zr, { icon: f, label: ro, onPress: a }),
                  )),
            )
          })
        },
        co = Sr(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            i = e.onDeleteTweet,
            r = e.onDismiss,
            o = e.onEditTweet,
            s = e.onSendTweet,
            l = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            m = T.a.useState(!1),
            p = He()(m, 2),
            h = p[0],
            f = p[1],
            g = T.a.useState(!1),
            v = He()(g, 2),
            y = v[0],
            _ = v[1],
            b = function (e) {
              var n = e.action,
                i = e.element,
                r = e.page,
                o = [{ nudge_id: a }]
              t.scribe({ action: n, data: { items: o }, element: i, page: r, section: 'dialog' })
            }
          return h
            ? T.a.createElement(Vr, {
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
            : T.a.createElement(lo, {
                hasSentFeedback: y,
                media: n,
                onDeleteTweet: function () {
                  b({ action: 'cancel', element: 'action', page: 'nudge' }), i()
                },
                onDismiss: function () {
                  b({ action: 'dismiss', element: 'action', page: 'nudge' }), r()
                },
                onEditTweet: function () {
                  b({ action: 'revise', element: 'action', page: 'nudge' }), o()
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
        uo = n('aITJ'),
        mo = n('eb3s'),
        po = n('JYMr'),
        ho = n('sCk0'),
        fo = n('3A2y'),
        go = n('zrOZ'),
        vo = n('s1N3'),
        yo = n('4FGy'),
        _o = n('mN6z'),
        bo = n('eyty'),
        Co = n('rziq'),
        To = n('lsKC'),
        wo = n('jTgF'),
        xo = B.a.d28215f0,
        So = B.a.ec909a54,
        Eo = B.a.jd53409d,
        Io = {
          singular: B.a.edae65de,
          plural: B.a.a859846a,
          oneOfMultiple: B.a.e90118f5,
          someOfMultiple: B.a.c211dcb1,
        },
        Ro = { singular: B.a.d7c26bfb, plural: B.a.a75e3ccc },
        Ao = B.a.dcb7e3a0,
        ko = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            i = a === e.numberOfImages
          return (
            1 === a
              ? ((n = Ro.singular), (t = i ? Io.singular : Io.oneOfMultiple))
              : ((n = Ro.plural), (t = i ? Io.plural : Io.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(Ao)
          )
        },
        Oo = B.a.c1bf53b0,
        Do = B.a.bb8170da,
        Po = B.a.dad5a4b8,
        Mo = B.a.e65aed64,
        Fo = B.a.bc2ceaf2,
        Lo = B.a.d8222374,
        No = B.a.j890123a,
        Bo = B.a.bb01231c,
        Vo = B.a.d4ab68e2,
        jo = B.a.d8af8a4c,
        Uo = B.a.d09d4c05,
        zo = B.a.i2209530,
        Ho = B.a.bf9b89e4,
        Wo = B.a.f277e949,
        Go = B.a.b551cd22,
        qo = B.a.f026a7fa,
        Ko = B.a.a5d4fda0,
        Qo = B.a.ib067d6a,
        Xo = S.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Yo = { element: 'alt_text_prompt' },
        Zo = { component: 'article_nudge' },
        Jo = { viewType: 'send_tweet' },
        $o = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        es = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i, r, s
            d()(this, n),
              (s = t.call(this, e, a)),
              b()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? Ei.a.homeTimeline : Ei.a.modal)
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
                  a = yr.a.findDOMNode(s._composerRefs[t])
                if (a instanceof window.Element) {
                  var i = a.getBoundingClientRect(),
                    r = i.bottom,
                    o = i.top,
                    l = Math.max(o, window.scrollY)
                  if (l < window.pageYOffset || r > window.innerHeight) {
                    var c = n ? l - n() - 14 : l - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      Xo ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
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
                  r = e.quotedStatus,
                  o = e.quotedStatusId
                !a && i && n(i).catch(t(pr.a)), !r && o && n(o).catch(t(pr.a))
              }),
              b()(h()(s), '_blockHistory', function (e, t) {
                var n = s.props,
                  a = n.audienceControlsValue,
                  i = n.isInline,
                  r = !i && /unsent/.test(e.pathname),
                  o = !i && !/\/compose\/tweet\/?$/.test(e.pathname)
                return s.shouldShowDiscardConfirmation && 'POP' === t && o
                  ? (s.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : s._canSaveDraft && r && 'PUSH' === t
                  ? s.shouldShowDiscardConfirmation
                    ? (s.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: r }), !1)
                    : (s._resetDraft(), !0)
                  : s.shouldShowBackgroundSendConfirmation && 'POP' === t && o
                  ? (s._cancelAllMediaUploads(), !1)
                  : !('POP' === t && o && s._areComposersEmptyOrUnchanged && !Object(Vt.a)(a)) || (s._resetDraft(), !0)
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
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(l()(l()({}, Yo), {}, { action: 'show' })))
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
                  r = e.isSelfThreadReply,
                  o = e.selectedCommunityName
                if (a && s._shouldBeExpanded())
                  return T.a.createElement(Ci, {
                    communityName: o,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: s._handleViewRecipients,
                    shouldDisplayRepliesText: !r,
                    showParentTweet: !i,
                  })
              }),
              b()(h()(s), '_renderAltTextPrompt', function () {
                var e = s._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return T.a.createElement(mo.a, {
                  Icon: hr.a,
                  cancelButtonLabel: Do,
                  confirmButtonLabel: Oo({ numOfDescriptions: t }),
                  headline: Eo,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: ko({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              b()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return T.a.createElement(co, {
                  media: n,
                  nudgeId: s.state.nudgeId,
                  onDeleteTweet: s._handleReplyNudgeDeleteTweet,
                  onDismiss: s._handleReplyNudgeDismiss,
                  onEditTweet: s._handleReplyNudgeEditTweet,
                  onSendTweet: s._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              b()(h()(s), '_handleAddComposer', function () {
                var e = s.props,
                  t = e.addComposer,
                  n = e.copyDataFromInlineComposerToModalComposer,
                  a = e.isInline,
                  i = e.parentTweetId
                s.isInlineReply ? n(i) : a && n(Ei.a.homeTimeline), t()
              }),
              b()(
                h()(s),
                '_makeAddComposerLink',
                Object(qt.a)(function (e, t, n) {
                  return Object(To.c)({ isInline: e, isSelfThreadReply: t, parentTweetId: n })
                }),
              ),
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
                  e ? Object(jt.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              b()(h()(s), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = s.props,
                    i = a.analytics,
                    r = a.createLocalApiErrorHandler
                  if (Object(wo.d)(n) && n.code === fr.b.CANCELED) return i.scribeAction(e), Promise.resolve()
                  var o = Object(wo.b)(n)
                  if (o) return s.setState({ errorMessage: o }), Promise.resolve()
                  var c = t || Object(ur.a)(void 0, !1)
                  r(l()({}, c))(n)
                  var d = n instanceof x.a && (null == t ? void 0 : t[n.errors[0].code])
                  s.setState({ errorMessage: { text: d ? d.toast.text : Ko } })
                }
              }),
              b()(h()(s), '_handleScheduleTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  i = e.inReplyToStatus,
                  r = e.schedule,
                  o = s._getSingleComposerDataWithLatestText(n[0])
                r({ excludedRecipients: a, inReplyToStatus: i, scheduleData: o })
                  .then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(jt.c)(o.scheduledFor)
                    if (a) {
                      var i = Object(jt.b)(a),
                        r = Object(jt.i)(a),
                        c = Go({ scheduleDate: i, scheduleTime: r })
                      t({ text: c, action: { label: Wo, link: '/compose/tweet/unsent/scheduled' } }),
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
                      t({ text: Ho, action: { label: Wo, link: '/compose/tweet/unsent/drafts' } }),
                      s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', Cr.a))
              }),
              b()(h()(s), '_checkToxicReply', function () {
                var e = s.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  i = e.inReplyToStatusId,
                  r = e.parentTweetId,
                  o = t(
                    s._getSingleComposerDataWithLatestText(n[0]).text,
                    r || i,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t, n, a, i, r, o, l
                    if (
                      !s.context.featureSwitches
                        .getArrayValue('responsive_web_reply_nudge_supported_languages')
                        .includes(
                          null === (t = e.create_nudge) || void 0 === t || null === (n = t.nudge) || void 0 === n
                            ? void 0
                            : n.proposed_tweet_language,
                        )
                    )
                      return !1
                    var c =
                        null == e ||
                        null === (a = e.create_nudge) ||
                        void 0 === a ||
                        null === (i = a.nudge) ||
                        void 0 === i ||
                        null === (r = i.nudge_type) ||
                        void 0 === r
                          ? void 0
                          : r.__typename,
                      d =
                        null == e ||
                        null === (o = e.create_nudge) ||
                        void 0 === o ||
                        null === (l = o.nudge) ||
                        void 0 === l
                          ? void 0
                          : l.id
                    return d && s.setState({ nudgeId: d }), !!c
                  }),
                  l = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([o, l])
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
                    s.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return s._handleSendTweet()
                s._checkToxicReply().then(function (e) {
                  if (!e) return s._handleSendTweet()
                  s.context.featureSwitches.isTrue('responsive_web_reply_nudge_show_nudge') && s._showToxicReplyNudge()
                })
              }),
              b()(h()(s), '_handleSendTweet', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.addToast,
                  a = e.analytics,
                  i = e.audienceControlsValue,
                  r = e.composeSemanticCoreId,
                  o = e.excludedRecipients,
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
                  b = i.trustedFriendsValue,
                  C = void 0 === b ? void 0 : b,
                  T = s.isPreview,
                  w = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  x = Object(jt.c)(w[0].scheduledFor)
                if (x) {
                  var S = Object(jt.b)(x),
                    I = Object(jt.i)(x),
                    R = Go({ scheduleDate: S, scheduleTime: I })
                  return n({ text: R, action: { label: Wo, link: '' } }), void s._close()
                }
                if (
                  (o.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === v) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var A = s._getSingleComposerDataWithLatestText(w[0]).text,
                      k = Object(E.d)(A)
                    a.scribe({
                      action: k ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && a.scribe({ action: 'send_my_followers_tweet' })
                var O = (null == u ? void 0 : u.community_id_str) || i.communityIdValue || void 0,
                  D = O ? '8.31.'.concat(O) : '',
                  P = r ? (O ? [r, D].join(',') : r) : D
                g({
                  sendData: w,
                  communityIdValue: O,
                  conversationControlsValue: v,
                  excludedRecipients: o,
                  exclusivityControlValue: _,
                  inReplyToStatus: u,
                  isSelfThreadReply: m,
                  promotedContent: h,
                  composeSemanticCoreId: P,
                  isPreview: T,
                  trustedFriendsValue: C,
                })
                  .then(function (e) {
                    T || s.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return s._scribeTweetSent(w[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && s._scribeThreadSent(w, e, 'thread_send_success')
                    var a = e.length > 1 ? Mo : Po
                    if (O && f) {
                      var i = f,
                        r = e.length
                      a = So({ numOfTweets: r, communityName: i })
                    }
                    var o = T && s.isReply,
                      l = { label: Wo, link: void 0, onAction: void 0 }
                    if (o || !T) {
                      var u = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      l.link = '/'.concat(t ? t.screen_name : 'i', '/status/').concat(u || '')
                    } else l.onAction = Object(To.a)(d, p)
                    n({ text: T ? Fo : a, action: l }),
                      s.isInlineReply && s.setState({ focused: !1 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      i = void 0 === n ? [] : n,
                      r = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      o = null == e ? void 0 : e.url,
                      u = null == e ? void 0 : e.status,
                      m = { message: e.type, event_info: r ? ''.concat(r) : void 0, status_code: u, url: o }
                    throw (
                      (i.map(
                        function (e, t) {
                          return s._scribeTweetSent(w[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(wo.d)(e) && e.code === fr.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: m }),
                      w.length > 1 && s._scribeThreadSent(w, i, 'thread_send_failure'),
                      i.length &&
                        d.replace({
                          pathname: p.pathname,
                          state: l()(
                            l()({}, Object(fo.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: i[i.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', Cr.a))
              }),
              b()(h()(s), '_setActiveParentKey', function () {
                ;(0, s.props.setActiveParentKey)(s._getParentKey())
              }),
              b()(h()(s), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  i = void 0 !== a && a,
                  r = n.isDraftTweet,
                  o = void 0 !== r && r,
                  c = n.isScheduled,
                  d = void 0 !== c && c,
                  u = s.state.nudgeId,
                  m = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  p = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = o ? p : d ? m : 'send_',
                  f = { items: [br.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  _ = Object(go.a)(
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
                  o || !e.draftTweetId || e.scheduledTweetId || s._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  s.isQuoteTweet &&
                    (s._scribe({ action: 'retweet_with_comment' }, f),
                    i && s._scribe(l()(l()({}, Zo), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
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
                var T = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    s.isReply &&
                    !d &&
                    (o
                      ? s._scribe(l()(l()({}, T), {}, { action: 'save' }), { items: [{ nudge_id: u }] })
                      : s._scribe(l()(l()({}, T), {}, { action: 'sent' }), { items: [{ nudge_id: u }] })),
                  u || o || !s.isReply || d || s._scribe(l()(l()({}, T), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var w = t.id_str && br.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  s._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: w ? [w] : [] })
                  var x = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(v || x) &&
                    s._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: v ? 'user_entered' : 'from_provider', items: w ? [w] : [] },
                    ),
                    y && s._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else s._hasGif(e) && (s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), v && s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              b()(h()(s), '_scribeThreadSent', function (e, t, n) {
                var a = s.props.inReplyToStatus,
                  i = { items: [br.a.getSendThreadItem(e, t.length, !!a)] }
                s._scribe({ action: n }, i)
              }),
              b()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  n = { items: [br.a.getTweetItem(e)] }
                s._scribe({ action: 'retweet' }, n),
                  t && s._scribe(l()(l()({}, Zo), {}, { element: 'result', action: 'retweet' }), n)
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
                  }, n(_r.a)))
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
                  n && s._scribe(l()(l()({}, Zo), {}, { element: 'result', action: 'cancel' })),
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
                  (s._scribe(l()(l()({}, Yo), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              b()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(l()(l()({}, Yo), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(l()(l()({}, Yo), {}, { action: 'cancel' })),
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
                  r = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: i.pathname, state: Object(fo.a)(i.state || {}, 'quotedStatus') }),
                  r(),
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
                  r = a.isInline,
                  o = a.setValidity
                if (
                  (s.setState({ textMap: l()(l()({}, n), {}, b()({}, t, e)) }, function () {
                    o && o(s._areComposersValid())
                  }),
                  s.setState({ errorMessage: void 0 }),
                  uo.b.isIOS())
                ) {
                  var c = r ? 0 : i
                  s._updateSingleComposer({ text: e }, c)
                }
              }),
              b()(
                h()(s),
                '_handleTextOnBlur',
                Object(qt.a)(function (e, t) {
                  return function () {
                    var n = s.state,
                      a = n.textMap,
                      i = n.tweetsSentOrScheduled,
                      r = s.props.composerData,
                      o = a[e],
                      l = r.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof o && !i && l && s._updateSingleComposer({ text: o }, t)
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
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: xo } })),
                      (null == i ? void 0 : i.text) === xo && s.setState({ errorMessage: void 0 })
                }
                a(e, s._getParentKey())
              }),
              b()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return T.a.createElement(po.a, { progress: t ? Math.max(n, 0.02) : 0, style: ts.progressBar })
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
                      return Object(mr.a)(e)
                    }),
                  ).then(s._handleAddMediaFiles(e))
                }
              }),
              b()(h()(s), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    i,
                    r = s.props,
                    o = r.addMedia,
                    l = r.addToast,
                    c = r.composerData,
                    d = r.dataSaverMode,
                    u = r.preUploadMedia,
                    m = r.processMultipleMedia,
                    p = r.removeMediaUpload,
                    f = c[e],
                    g = f.pollActive,
                    v = Object(bo.e)(
                      null === (a = h()(s)) || void 0 === a || null === (i = a.context) || void 0 === i
                        ? void 0
                        : i.userClaims,
                    )
                  g ||
                    o(t, { location: bo.d.Tweet, canUploadLongVideo: v }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var i = f.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(vo.a)(i.concat(a)) }, e),
                          m(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            d ||
                              u(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else l({ text: Qo }), p(a)
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
                  r = a[e],
                  o = r.media,
                  l = r.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(yo.a)(e, n)
                  })(
                    o.map(function (e) {
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
                var a = !Object(Vt.c)(s._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              b()(h()(s), '_areComposersValid', function () {
                var e = s.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  i = null == a ? void 0 : a.community_id_str,
                  r = 'community_members' === t
                return (
                  (s.isRetweet && !i && !r) ||
                  n.every(function (e) {
                    return Object(Vt.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              b()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(Vt.d)(s._getSingleComposerDataWithLatestText(e), n)
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
                    ;(t.numberOfImages += a.length), (n = t.noDescriptionImageIDs).push.apply(n, o()(i))
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
              (s._throttledSyncTexts = Object(Rn.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((r = {}), b()(r, Co.b, s.handleTweetOrRetweet), b()(r, Co.a, s.handleDismissComposer), r)),
              (s._keyCommandHandlersForActiveTypeahead = b()({}, Co.b, s.handleTweetOrRetweet)),
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
                    r = e.isInline,
                    o = e.isIntentRoute,
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
                    !o &&
                    i.replace({
                      query: Object(xi.b)(s.query),
                      search: '',
                      pathname: s.pathname,
                      state: Object(fo.a)(Object(xi.b)(s.state || {}), [
                        'defaultText',
                        'externalMedia',
                        'externalMediaFiles',
                      ]),
                    }),
                    d && d(this._areComposersValid()),
                    r || this._setActiveParentKey(),
                    this.isInlineReply && this._root && (this._height = this._root.getBoundingClientRect().height)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.addToast,
                    i = n.composerData,
                    r = n.copyDataFromInlineComposerToModalComposer,
                    o = n.externalMedia,
                    s = n.externalMediaFiles,
                    l = n.onRef,
                    c = n.parentTweetId,
                    d = n.replyPressToggle,
                    u = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== l && e.onRef(void 0),
                    l && l !== e.onRef && l(this),
                    i.length >= 25 && e.composerData.length < 25 && a({ text: qo }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    u && !Object(_o.a)(i, e.composerData) && u && u(this._areComposersValid()),
                    d !== e.replyPressToggle && r(c)
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
                    r = a.activeUser,
                    o = a.addToast,
                    s = a.audienceControlsValue,
                    l = a.composeHeader,
                    c = a.composerData,
                    d = a.customizePropsForSingleComposerItem,
                    u = a.geoEnabled,
                    m = a.history,
                    p = a.inReplyToStatus,
                    h = a.isInline,
                    f = a.isModal,
                    g = a.isSelfThreadReply,
                    v = a.isSending,
                    y = a.isSuperFollowsCreator,
                    _ = a.parentTweetId,
                    b = a.positionCursorAtBeginning,
                    C = a.richTextInputContext,
                    w = a.scheduledFor,
                    x = a.typeaheadWrapper,
                    S = a.userLanguage,
                    E = a.windowWidth,
                    I = this.state,
                    R = I.errorMessage,
                    A = I.focused,
                    k = I.shouldDisableButton,
                    O = I.showAltTextPrompt,
                    D = I.showDiscardTweetConfirmation,
                    P = I.showToxicReplyNudge,
                    M = I.typeaheadActive,
                    F = !f && M,
                    L = h ? 0 : this.props.activeComposerIndex,
                    N = F || h ? [c[L]] : c,
                    B = this._areComposersValid(),
                    V = this.hasNonCompliantQuote && this.isRetweet,
                    j = h ? W.a : ho.a,
                    U = h ? {} : { onAnimateComplete: f ? void 0 : this._handleAnimateComplete },
                    z = k || !B || V || this.isCommunityTweetFromProtectedUser,
                    H = (h && Tr.a.isOneColumnSquishedLayout(E)) || this.isCommunityTweet,
                    G = (h && Tr.a.isOneColumnSquishedLayout(E)) || this.isCommunityTweet || this.isExclusiveTweet
                  return T.a.createElement(
                    W.a,
                    { ref: this._setRootRef, style: !_ && ts.root },
                    h ? this._renderProgressBar() : null,
                    R &&
                      T.a.createElement(
                        W.a,
                        { style: ts.inlineCallout },
                        T.a.createElement(tt.a, {
                          action:
                            null !== (e = R.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = R.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: R.action.label, link: R.action.link }
                              : void 0,
                          text: R.text,
                          type: 'danger',
                        }),
                      ),
                    T.a.createElement(
                      W.a,
                      {
                        onFocus: this._handleFocus,
                        style: [ts.content, _ && ts.contentInlineReply, f && ts.contentModal],
                      },
                      p ? this._renderReplyContext() : null,
                      l,
                      T.a.createElement(
                        j,
                        U,
                        N.map(function (e, t) {
                          var a = Object(jt.h)(e.scheduledFor),
                            l = c.indexOf(e),
                            I = d(e, t, N),
                            R =
                              f || h
                                ? T.a.createElement(
                                    q.a,
                                    {
                                      behavioralEventContext: Jo,
                                      disabled: z,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: ts.inlineSendButton,
                                      testID: f ? wr : xr,
                                      type: 'brandFilled',
                                    },
                                    Object(To.b)({
                                      inReplyToStatus: !!p,
                                      isSelfThreadReply: !!g,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            k = n._getSingleComposerDataWithLatestText(e)
                          return T.a.createElement(
                            W.a,
                            { key: e.key },
                            T.a.createElement(
                              li,
                              i()(
                                {
                                  addComposerLink: n._makeAddComposerLink(h, g, _),
                                  addToast: o,
                                  additionalToolbarContent: R,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && A,
                                  data: k,
                                  disableAddTweet: c.length >= 25,
                                  editable: !v && !!r,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: u,
                                  hidePoll: H,
                                  hideScheduling: G,
                                  history: m,
                                  index: l,
                                  isActive: l === L && !v,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: h,
                                  isInlineReply: n.isInlineReply,
                                  isLast: h || l === c.length - 1,
                                  isReply: !!p || n.isInlineReply,
                                  isSelfThreadReply: !!g,
                                  isSuperFollowsCreator: y,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: r,
                                  onAddComposer: n._handleAddComposer,
                                  onFilesAdded: n._handleAddMediaFiles(l),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(k.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!b,
                                  ref: n._setComposerRef(l),
                                  richTextInputContext: C,
                                  scheduledFor: w,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: M,
                                  typeaheadWrapper: x,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: S,
                                  windowWidth: E,
                                },
                                I,
                              ),
                            ),
                          )
                        }),
                      ),
                      D
                        ? this._canSaveDraft
                          ? T.a.createElement(mo.a, {
                              cancelButtonLabel: Vo,
                              confirmButtonLabel: zo,
                              headline: jo,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: Uo,
                            })
                          : T.a.createElement(mo.a, {
                              confirmButtonLabel: Vo,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? No : Lo,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: Bo,
                            })
                        : null,
                      O ? this._renderAltTextPrompt() : null,
                      P ? this._renderToxicReplyNudge() : null,
                      T.a.createElement(W.a, { style: v && ts.mask }),
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
                    r = this._areComposersEmptyOrUnchanged()
                  return !(n || r || i || a)
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
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== w.a.prompt
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
                key: 'isTrustedFriendsTweet',
                get: function () {
                  return !!this.props.audienceControlsValue.trustedFriendsValue
                },
              },
              {
                key: 'tweetType',
                get: function () {
                  return this.isQuoteTweet
                    ? $o.Quote
                    : this.isThread
                    ? $o.Thread
                    : this.isReply
                    ? $o.Reply
                    : $o.Original
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
                    r =
                      null == this ||
                      null === (e = this.context) ||
                      void 0 === e ||
                      null === (t = e.userClaims) ||
                      void 0 === t
                        ? void 0
                        : t.isTrueAndEnabled('subscriptions_feature_1003'),
                    o =
                      null == this ||
                      null === (n = this.context) ||
                      void 0 === n ||
                      null === (a = n.featureSwitches) ||
                      void 0 === a
                        ? void 0
                        : a.isTrue('subscriptions_undo_quote_tweets_enabled')
                  return (
                    r &&
                    ('original' === this.tweetType ||
                      'reply' === this.tweetType ||
                      ('quote' === this.tweetType && o)) &&
                    (!i || void 0 === i[this.tweetType] || i[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(T.a.Component)
      b()(es, 'defaultProps', {
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
        typeaheadWrapper: gr.a,
      }),
        b()(es, 'contextType', I.a),
        b()(es, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(E.c)(n.concat(t))
        })
      var ts = L.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: l()({}, L.a.absoluteFillObject),
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
      t.a = Object(yt.a)(dr(es))
    },
    'ii+P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      n('FtFR')
      var a = n('ERkP'),
        i = n.n(a),
        r = n('wtru')
      function o(e) {
        var t = Object(r.b)()
        return [
          !!t && !t.flags[e],
          i.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
    },
    lsKC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return u
        })
      n('jQ3i'), n('x4t0')
      var a = n('3XMw'),
        i = n.n(a),
        r = i.a.g34f2c63,
        o = i.a.f70a36d0,
        s = i.a.d17df547,
        l = i.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? l : t ? s : e.isThread ? o : r({ verb: '' })
        },
        d = function (e, t) {
          return function () {
            t.pathname.includes('/home') ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
          }
        },
        u = function (e) {
          var t = e.isInline,
            n = e.isSelfThreadReply,
            a = e.parentTweetId
          return t ? { pathname: '/compose/tweet', state: { inReplyToStatusId: a, isSelfThreadReply: n } } : void 0
        }
    },
    pidX: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      })
      var a = n('ddV6'),
        i = n.n(a),
        r =
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
        o = n.n(r),
        s = n('3A2y'),
        l = o.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = c.map(function (e) {
            return t[e] || n[e]
          }),
          r = i()(a, 6),
          o = r[0],
          s = r[1],
          d = r[2],
          u = r[3],
          m = r[4],
          p = r[5],
          h = [
            o,
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
        r = n('Y9Ll'),
        o = n.n(r),
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
        T = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
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
            o()(
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
                          r = function () {
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
                            var r = t[n],
                              o = e[a]
                            if (r.key === o.key) i.push({ child: r, status: C.static }), (n += 1)
                            else {
                              var s = Object(b.a)(t, function (e) {
                                return e.key === o.key
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
                                : i.push({ child: o, status: C.out })
                            }
                            a += 1
                          };
                        a < e.length && 'break' !== r();

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
      t.a = T
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        i = n('42ly'),
        r = n('N9G2'),
        o = n('BIH/'),
        s = n('lhaq'),
        l = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = r(this),
              n = o(t),
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
        r = n('h5NW'),
        o = n('MWbm'),
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
              o.a,
              { style: u.root },
              i.a.createElement(r.a, {
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
        r = n('WOwf'),
        o = n('3XMw'),
        s = n.n(o),
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
          o = void 0 === a ? h : a,
          s = e.warningCount,
          g = n - t,
          v = g >= 0 ? p({ count: o(g) }) : m({ count: o(t - n) }),
          y =
            t >= s
              ? i.a.createElement(
                  d.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  v,
                )
              : null,
          _ = Object(r.a)(g, n),
          b = t >= n ? 'red500' : t >= s ? 'yellow500' : 'primary',
          C = i.a.createElement(l.a, {
            color: b,
            progress: _,
            size: t >= s ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          T = t >= s ? i.a.createElement(d.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, o(g)) : null
        return i.a.createElement(
          u.a,
          { style: [f.root, f.center] },
          y,
          C,
          i.a.createElement(u.a, { style: [c.a.absoluteFill, f.center] }, T),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        i = n.n(a),
        r = n('m3Bd'),
        o = n.n(r),
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
        T = n('Lsrn'),
        w = n('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
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
      var S = x,
        E = n('boUI'),
        I = n('EweD'),
        R = p.a.g6185a9e,
        A = p.a.g2d04222,
        k = p.a.baffe39a,
        O = p.a.af293dc2,
        D = p.a.h1053f7e,
        P = p.a.bf994ab2,
        M = p.a.cf7f7e39,
        F = p.a.cfd2f35d,
        L = y.a.create(function (e) {
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
        N = function (e) {
          var t,
            n,
            a = e.dismiss,
            i = e.isModal,
            r = e.midConversationTweet,
            o = e.value,
            s = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            l = !!r,
            c =
              l &&
              !(
                null != r &&
                null !== (t = r.entities) &&
                void 0 !== t &&
                null !== (n = t.user_mentions) &&
                void 0 !== n &&
                n.some(function (e) {
                  return e.id_str !== r.user.id_str
                })
              ),
            m = D
          return (
            c ? (m = P) : l && (m = M),
            d.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [L.root, i ? L.modal : L.popover],
              },
              d.a.createElement(
                h.a,
                { style: L.title },
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
                  isSelected: u.a.all === o,
                  onClick: s(u.a.all),
                  selectable: !0,
                  style: L.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: S,
                  actionText: O,
                  isSelected: u.a.community === o,
                  onClick: s(u.a.community),
                  selectable: !0,
                  style: L.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: c ? E.a : I.a,
                  actionText: m,
                  isSelected: u.a.by_invitation === o,
                  onClick: s(u.a.by_invitation),
                  selectable: !0,
                  style: L.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? d.a.createElement(
                      v.a,
                      {
                        key: 'button_cancel',
                        onPress: a,
                        size: 'large',
                        style: L.cancelButton,
                        type: 'primaryOutlined',
                      },
                      F,
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
          r = e.disabled,
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
            disabled: r,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = o()(e, j)
              return d.a.createElement(N, i()({}, a, { dismiss: t, isModal: 'sheet' === n }))
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
