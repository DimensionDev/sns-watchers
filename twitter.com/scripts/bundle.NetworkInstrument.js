;(window.webpackJsonp = window.webpackJsonp || []).push([
  [67],
  {
    ujfh: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return y
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var r = n('m3Bd'),
        i = n.n(r),
        o = n('VrFO'),
        s = n.n(o),
        a = n('Y9Ll'),
        u = n.n(a),
        _ = n('KEM+'),
        c = n.n(_),
        m =
          (n('Cm4o'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('DZ+c'),
          n('vrRf'),
          n('jwue'),
          n('+oxZ'),
          n('ho0z'),
          n('Ee2X'),
          n('LW0h'),
          n('z84I'),
          n('LJOr'),
          n('KqXw'),
          n('pXBW')),
        p = n('k49u'),
        d = n('ZjLa'),
        f = n('Myq3'),
        h = n('EhiH'),
        l = n('/NU0')
      function v(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var g = [p.a.BadOauthToken, p.a.OauthTimestampException, p.a.BadAuthenticationData, p.a.AccessDeniedByBouncer],
        y = (function () {
          function e(t, n) {
            var r = this
            s()(this, e),
              c()(this, 'scribeRequest', function (e) {
                var t = e.response,
                  n = e.error,
                  o = i()(e, ['error']),
                  s = new window.URL(o.url)
                if (
                  ((!n && t) || ((t = { headers: {}, body: '', status: n ? n.status : 500 }), n instanceof m.a)) &&
                  !r._shouldFilter(s)
                ) {
                  r._flushResourceTimingBuffer()
                  var a = Object(f.a)(r._buffer, function (e) {
                    var t = e.request
                    return (
                      s.protocol === t.uri_scheme &&
                      s.hostname === t.uri_host_name &&
                      s.pathname === t.uri_path &&
                      s.searchParams.toString() === t.uri_query
                    )
                  })
                  if (a) {
                    var u = r._buffer.indexOf(a)
                    r._buffer[u] = r._updateEventWithRequestResponse(a, o, t, n)
                  } else {
                    var _ = r._prepareEvent(o.url),
                      c = _ && r._updateEventWithRequestResponse(_, o, t, n)
                    c && r._buffer.push(c)
                  }
                  r._flushBuffer()
                }
              }),
              c()(this, '_shouldFilter', function (e) {
                return e.pathname.indexOf('/1.1/jot') > -1
              }),
              c()(this, '_flushResourceTimingBuffer', function () {
                if (r._resourceTimingApiSupported) {
                  var e = window.performance.getEntriesByType('resource')
                  window.performance.clearResourceTimings(),
                    e.forEach(function (e) {
                      if (e.name) {
                        var t = r._prepareEvent(e.name)
                        if (t) {
                          var n = r._updateEventWithPrecisionTimings(t, e)
                          r._buffer.push(n)
                        }
                      }
                    })
                }
              }),
              c()(this, '_updateNetworkInfo', function (e) {
                r._networkInfo = e
              }),
              c()(this, '_getNetworkMeasurements', function () {
                return {
                  connection_type: r._networkInfo.type || 'unknown',
                  speed_class: r._networkInfo.effectiveType,
                  download_mbps: r._networkInfo.downlink,
                  download_max_mbps: r._networkInfo.downlinkMax,
                  rtt_ms: r._networkInfo.rtt,
                  reduced_data_usage: r._networkInfo.saveData,
                }
              }),
              (this._resourceTimingApiSupported =
                window.performance &&
                window.performance.getEntriesByType &&
                window.performance.getEntriesByType('resource') &&
                window.performance.clearResourceTimings),
              (this._scribe = t),
              (this._options = w(
                { apiErrorSampleSize: 0, apiSampleSize: 0, cdnSampleSize: 0, navSampleSize: 0, cdnHostList: [] },
                n,
              )),
              (this._buffer = []),
              (this._networkInfo = {}),
              d.a.getConnectionInfo().then(function (e) {
                r._updateNetworkInfo(e), d.a.addEventListener('connectionChange', r._updateNetworkInfo)
              }),
              this._resourceTimingApiSupported &&
                (window.performance.onresourcetimingbufferfull = this._flushResourceTimingBuffer)
            var o = this._getNavigationClientNetworkRequestEvent()
            o && this._buffer.push(o)
          }
          return (
            u()(e, [
              {
                key: '_record',
                value: function (e) {
                  this._sample(e) && this._scribe.log(void 0, e)
                },
              },
              {
                key: '_possiblyRecordErrorToAllNamespace',
                value: function (e) {
                  if ('api:error' === e.event_type) {
                    var t = w(w({}, e), {}, { event_type: 'api:all' })
                    this._record(t)
                  }
                },
              },
              {
                key: '_flushBuffer',
                value: function () {
                  var e = this
                  this._buffer.splice(0, this._buffer.length).forEach(function (t) {
                    e._record(t), e._possiblyRecordErrorToAllNamespace(t)
                  })
                },
              },
              {
                key: '_sample',
                value: function (e) {
                  var t = e.event_type,
                    n =
                      this._options[
                        {
                          'api:all': 'apiSampleSize',
                          'api:error': 'apiErrorSampleSize',
                          'cdn:all': 'cdnSampleSize',
                          'web:nav': 'navSampleSize',
                        }[t]
                      ] || 0
                  return Math.random() < n
                },
              },
              {
                key: '_getEventType',
                value: function (e, t) {
                  return this._options.cdnHostList.indexOf(e) > -1
                    ? 'cdn:all'
                    : e.indexOf('twitter.com') > -1
                    ? t >= 200 && t < 300
                      ? 'api:all'
                      : 'api:error'
                    : 'none'
                },
              },
              {
                key: '_createCommonHeader',
                value: function (e) {
                  return {
                    commonHeader: {
                      clientHeader: { timestampMs: e.getTime(), timezoneOffsetMin: -e.getTimezoneOffset() },
                    },
                  }
                },
              },
              {
                key: '_prepareEvent',
                value: function (e) {
                  var t = new window.URL(e)
                  if (this._shouldFilter(t)) return null
                  var n = 'api.twitter.com' === t.hostname
                  return {
                    _category_: 'client_network_request_event',
                    request: {
                      uri_scheme: t.protocol,
                      uri_host_name: t.hostname,
                      uri_path: t.pathname,
                      uri_query: t.searchParams.toString(),
                      http_method: 'GET',
                      http_status_code: n ? 0 : 200,
                      start_time_ms: Date.now(),
                      request_details: { duration_ms: 0 },
                    },
                    common_header: this._createCommonHeader(new Date()),
                    network_measurements: this._getNetworkMeasurements(),
                    event_type: this._getEventType(t.hostname, 200),
                    event_source: 'rweb',
                  }
                },
              },
              {
                key: '_extractApiErrorCode',
                value: function (e) {
                  var t = e.errors,
                    n = (void 0 === t ? [] : t)
                      .map(function (e) {
                        return e.code
                      })
                      .filter(function (e) {
                        return void 0 !== e
                      }),
                    r = Object(h.a)(n, function (e) {
                      return g.indexOf(e) > -1
                    })
                  return r || (n.length > 0 ? n[0] : void 0)
                },
              },
              {
                key: '_updateEventWithRequestResponse',
                value: function (e, t, n, r) {
                  var i = e.request.request_details
                  return w(
                    w({}, e),
                    {},
                    {
                      request: w(
                        w({}, e.request),
                        {},
                        {
                          http_method: t.method,
                          http_status_code: n.status,
                          start_time_ms: t.startTimestamp,
                          trace_id: t.headers['x-b3-traceid'],
                          twitter_api_error_code: (r && this._extractApiErrorCode(r)) || void 0,
                          request_details: w(
                            w({}, i),
                            {},
                            {
                              duration_ms: i.duration_ms || t.endTimestamp - t.startTimestamp,
                              request_body_size:
                                i.request_body_size ||
                                ('string' == typeof t.data
                                  ? t.data.length
                                  : t.data
                                  ? JSON.stringify(t.data).length
                                  : void 0),
                              response_body_size: i.response_body_size || (n && n.body ? n.body.length : void 0),
                            },
                          ),
                        },
                      ),
                      event_type: this._getEventType(e.request.uri_host_name, n.status),
                    },
                  )
                },
              },
              {
                key: '_getTiming',
                value: function (e, t) {
                  return Object(l.a)(e) && Object(l.a)(t) ? Math.round(t - e) : void 0
                },
              },
              {
                key: '_getRequestDetails',
                value: function (e) {
                  var t = this._getTiming(e.startTime, e.responseEnd) || 0,
                    n = e.secureConnectionStart || e.connectEnd
                  return {
                    duration_ms: t,
                    rx_bytes: e.transferSize,
                    dns_ms: this._getTiming(e.domainLookupStart, e.domainLookupEnd),
                    tcp_ms: this._getTiming(e.connectStart, n),
                    tls_ms:
                      0 === e.secureConnectionStart ? void 0 : this._getTiming(e.secureConnectionStart, e.connectEnd),
                    response_body_size: e.decodedBodySize,
                    ttfb_ms: this._getTiming(e.requestStart, e.responseStart),
                    ttlb_ms: this._getTiming(e.requestStart, e.responseEnd),
                  }
                },
              },
              {
                key: '_updateEventWithPrecisionTimings',
                value: function (e, t) {
                  var n = this._getRequestDetails(t)
                  return w(
                    w({}, e),
                    {},
                    { request: w(w({}, e.request), {}, { request_details: w(w({}, e.request.request_details), n) }) },
                  )
                },
              },
              {
                key: '_getPerformanceNavigationTimingClientNetworkRequestEvent',
                value: function (e) {
                  var t = new window.URL(e.name),
                    n = this._getRequestDetails(e)
                  return {
                    _category_: 'client_network_request_event',
                    request: {
                      uri_scheme: t.protocol,
                      uri_host_name: t.hostname,
                      uri_path: t.pathname,
                      uri_query: t.searchParams.toString(),
                      http_method: 'GET',
                      http_status_code: 200,
                      start_time_ms: Date.now(),
                      request_details: n,
                    },
                    common_header: this._createCommonHeader(new Date()),
                    network_measurements: this._getNetworkMeasurements(),
                    event_type: 'web:nav',
                    event_source: 'rweb',
                  }
                },
              },
              {
                key: '_getPerformanceTimingClientNetworkRequestEvent',
                value: function (e, t) {
                  var n = e.secureConnectionStart || e.connectEnd
                  return {
                    _category_: 'client_network_request_event',
                    request: {
                      uri_scheme: t.protocol,
                      uri_host_name: t.hostname,
                      uri_path: t.pathname,
                      uri_query: t.search,
                      http_method: 'GET',
                      http_status_code: 200,
                      start_time_ms: Date.now(),
                      request_details: {
                        duration_ms: this._getTiming(e.navigationStart, e.responseEnd) || 0,
                        dns_ms: this._getTiming(e.domainLookupStart, e.domainLookupEnd),
                        tcp_ms: this._getTiming(e.connectStart, n),
                        ttfb_ms: this._getTiming(e.requestStart, e.responseStart),
                        ttlb_ms: this._getTiming(e.requestStart, e.responseEnd),
                        tls_ms:
                          0 === e.secureConnectionStart
                            ? void 0
                            : this._getTiming(e.secureConnectionStart, e.connectEnd),
                      },
                    },
                    common_header: this._createCommonHeader(new Date()),
                    network_measurements: this._getNetworkMeasurements(),
                    event_type: 'web:nav',
                    event_source: 'rweb',
                  }
                },
              },
              {
                key: '_getNavigationClientNetworkRequestEvent',
                value: function () {
                  if (window.performance && window.performance.getEntriesByType) {
                    var e = window.performance.getEntriesByType('navigation')
                    if (e && e.length) {
                      var t = e[0]
                      return this._getPerformanceNavigationTimingClientNetworkRequestEvent(t)
                    }
                  } else if (window.performance && window.performance.timing && window.location) {
                    var n = window.performance.timing,
                      r = window.location
                    return this._getPerformanceTimingClientNetworkRequestEvent(n, r)
                  }
                },
              },
            ]),
            e
          )
        })()
    },
  },
])
//# sourceMappingURL=WIPED
