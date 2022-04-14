;(window.webpackJsonp = window.webpackJsonp || []).push([
  [69],
  {
    ujfh: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return k
        })
      var r = n('yiKp'),
        i = n.n(r),
        o = n('m3Bd'),
        s = n.n(o),
        a = n('VrFO'),
        u = n.n(a),
        _ = n('Y9Ll'),
        c = n.n(_),
        m = n('KEM+'),
        d = n.n(m),
        p =
          (n('lTEL'),
          n('7x/C'),
          n('87if'),
          n('kYxP'),
          n('Cm4o'),
          n('KrtT'),
          n('TJCb'),
          n('DZ+c'),
          n('vrRf'),
          n('jwue'),
          n('+oxZ'),
          n('ho0z'),
          n('Ee2X'),
          n('LW0h'),
          n('z84I'),
          n('0zG9'),
          n('KqXw'),
          n('LJOr'),
          n('pXBW')),
        h = n('k49u'),
        f = n('ZjLa'),
        l = n('Myq3'),
        w = n('EhiH'),
        v = n('/NU0'),
        g = ['error'],
        y = [h.a.BadOauthToken, h.a.OauthTimestampException, h.a.BadAuthenticationData, h.a.AccessDeniedByBouncer],
        k = (function () {
          function e(t, n) {
            var r = this
            u()(this, e),
              d()(this, 'scribeRequest', function (e) {
                var t = e.response,
                  n = e.error,
                  i = s()(e, g),
                  o = new window.URL(i.url)
                if (n || !t) {
                  var a = new window.URL(e.url)
                  if (
                    ((t = {
                      request: { host: a.origin, method: e.method, headers: e.headers, path: a.pathname, uri: e.url },
                      headers: {},
                      body: '',
                      status: n ? n.status : 500,
                    }),
                    !(n instanceof p.a))
                  )
                    return
                }
                if (!r._shouldFilter(o)) {
                  r._flushResourceTimingBuffer()
                  var u = Object(l.a)(r._buffer, function (e) {
                    var t = e.request
                    return (
                      o.protocol === t.uri_scheme &&
                      o.hostname === t.uri_host_name &&
                      o.pathname === t.uri_path &&
                      o.searchParams.toString() === t.uri_query
                    )
                  })
                  if (u) {
                    var _ = r._buffer.indexOf(u)
                    r._buffer[_] = r._updateEventWithRequestResponse(u, i, t, n)
                  } else {
                    var c = r._prepareEvent(i.url),
                      m = c && r._updateEventWithRequestResponse(c, i, t, n)
                    m && r._buffer.push(m)
                  }
                  r._flushBuffer()
                }
              }),
              d()(this, '_shouldFilter', function (e) {
                return e.pathname.indexOf('/1.1/jot') > -1
              }),
              d()(this, '_flushResourceTimingBuffer', function () {
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
              d()(this, '_updateNetworkInfo', function (e) {
                r._networkInfo = e
              }),
              d()(this, '_getNetworkMeasurements', function () {
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
              (this._options = i()(
                { apiErrorSampleSize: 0, apiSampleSize: 0, cdnSampleSize: 0, navSampleSize: 0, cdnHostList: [] },
                n,
              )),
              (this._buffer = []),
              (this._networkInfo = {}),
              f.a.getConnectionInfo().then(function (e) {
                r._updateNetworkInfo(e), f.a.addEventListener('connectionChange', r._updateNetworkInfo)
              }),
              this._resourceTimingApiSupported &&
                (window.performance.onresourcetimingbufferfull = this._flushResourceTimingBuffer)
            var o = this._getNavigationClientNetworkRequestEvent()
            o && this._buffer.push(o)
          }
          return (
            c()(e, [
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
                    var t = i()(i()({}, e), {}, { event_type: 'api:all' })
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
                    r = Object(w.a)(n, function (e) {
                      return y.indexOf(e) > -1
                    })
                  return r || (n.length > 0 ? n[0] : void 0)
                },
              },
              {
                key: '_updateEventWithRequestResponse',
                value: function (e, t, n, r) {
                  var o = e.request.request_details
                  return i()(
                    i()({}, e),
                    {},
                    {
                      request: i()(
                        i()({}, e.request),
                        {},
                        {
                          http_method: t.method,
                          http_status_code: n.status,
                          start_time_ms: t.startTimestamp,
                          trace_id: t.headers['x-b3-traceid'],
                          twitter_api_error_code: (r && this._extractApiErrorCode(r)) || void 0,
                          request_details: i()(
                            i()({}, o),
                            {},
                            {
                              duration_ms: o.duration_ms || t.endTimestamp - t.startTimestamp,
                              request_body_size:
                                o.request_body_size ||
                                ('string' == typeof t.data
                                  ? t.data.length
                                  : t.data
                                  ? JSON.stringify(t.data).length
                                  : void 0),
                              response_body_size: o.response_body_size || (n && n.body ? n.body.length : void 0),
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
                  return Object(v.a)(e) && Object(v.a)(t) ? Math.round(t - e) : void 0
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
                  return i()(
                    i()({}, e),
                    {},
                    {
                      request: i()(
                        i()({}, e.request),
                        {},
                        { request_details: i()(i()({}, e.request.request_details), n) },
                      ),
                    },
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
