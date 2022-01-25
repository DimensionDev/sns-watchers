;(window.webpackJsonp = window.webpackJsonp || []).push([
  [219],
  {
    BU36: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('bPu0')
      t.default = n.b
    },
    bPu0: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return Mn
      }),
        r.d(t, 'b', function () {
          return yi
        }),
        r.d(t, 'c', function () {
          return wi
        })
      var n = r('ERkP'),
        i = r.n(n),
        a = r('BFfR'),
        o = r('cxan'),
        l = r('9OUN'),
        c = r('uDfI')
      function u(e, t) {
        var r = Object(n.useState)(function () {
            return { inputs: t, result: e() }
          })[0],
          i = Object(n.useRef)(r),
          a = Boolean(
            t &&
              i.current.inputs &&
              (function (e, t) {
                if (e.length !== t.length) return !1
                for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1
                return !0
              })(t, i.current.inputs),
          )
            ? i.current
            : { inputs: t, result: e() }
        return (
          Object(n.useEffect)(
            function () {
              i.current = a
            },
            [a],
          ),
          a.result
        )
      }
      var d = u,
        s = function (e, t) {
          return u(function () {
            return e
          }, t)
        },
        p = r('h7FZ'),
        f = function (e) {
          var t = e.top,
            r = e.right,
            n = e.bottom,
            i = e.left
          return {
            top: t,
            right: r,
            bottom: n,
            left: i,
            width: r - i,
            height: n - t,
            x: i,
            y: t,
            center: { x: (r + i) / 2, y: (n + t) / 2 },
          }
        },
        g = function (e, t) {
          return { top: e.top - t.top, left: e.left - t.left, bottom: e.bottom + t.bottom, right: e.right + t.right }
        },
        b = function (e, t) {
          return { top: e.top + t.top, left: e.left + t.left, bottom: e.bottom - t.bottom, right: e.right - t.right }
        },
        v = { top: 0, right: 0, bottom: 0, left: 0 },
        m = function (e) {
          var t = e.borderBox,
            r = e.margin,
            n = void 0 === r ? v : r,
            i = e.border,
            a = void 0 === i ? v : i,
            o = e.padding,
            l = void 0 === o ? v : o,
            c = f(g(t, n)),
            u = f(b(t, a)),
            d = f(b(u, l))
          return { marginBox: c, borderBox: f(t), paddingBox: u, contentBox: d, margin: n, border: a, padding: l }
        },
        h = function (e) {
          var t = e.slice(0, -2)
          if ('px' !== e.slice(-2)) return 0
          var r = Number(t)
          return isNaN(r) && Object(p.a)(!1), r
        },
        y = function (e, t) {
          var r,
            n,
            i = e.borderBox,
            a = e.border,
            o = e.margin,
            l = e.padding,
            c = ((n = t), { top: (r = i).top + n.y, left: r.left + n.x, bottom: r.bottom + n.y, right: r.right + n.x })
          return m({ borderBox: c, border: a, margin: o, padding: l })
        },
        I = function (e, t) {
          return void 0 === t && (t = { x: window.pageXOffset, y: window.pageYOffset }), y(e, t)
        },
        D = function (e, t) {
          var r = { top: h(t.marginTop), right: h(t.marginRight), bottom: h(t.marginBottom), left: h(t.marginLeft) },
            n = { top: h(t.paddingTop), right: h(t.paddingRight), bottom: h(t.paddingBottom), left: h(t.paddingLeft) },
            i = {
              top: h(t.borderTopWidth),
              right: h(t.borderRightWidth),
              bottom: h(t.borderBottomWidth),
              left: h(t.borderLeftWidth),
            }
          return m({ borderBox: e, margin: r, padding: n, border: i })
        },
        x = function (e) {
          var t = e.getBoundingClientRect(),
            r = window.getComputedStyle(e)
          return D(t, r)
        }
      function E(e, t) {
        if (e.length !== t.length) return !1
        for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1
        return !0
      }
      var w = function (e, t) {
          var r
          void 0 === t && (t = E)
          var n,
            i = [],
            a = !1
          return function () {
            for (var o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l]
            return (a && r === this && t(o, i)) || ((n = e.apply(this, o)), (a = !0), (r = this), (i = o)), n
          }
        },
        O = function (e) {
          var t = [],
            r = null,
            n = function () {
              for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
              ;(t = i),
                r ||
                  (r = requestAnimationFrame(function () {
                    ;(r = null), e.apply(void 0, t)
                  }))
            }
          return (
            (n.cancel = function () {
              r && (cancelAnimationFrame(r), (r = null))
            }),
            n
          )
        },
        C = r('7nmT'),
        A = r.n(C)
      function B(e, t) {}
      B.bind(null, 'warn'), B.bind(null, 'error')
      function R() {}
      function N(e, t, r) {
        var n = t.map(function (t) {
          var n,
            i,
            a = ((n = r), (i = t.options), Object(o.a)({}, n, {}, i))
          return (
            e.addEventListener(t.eventName, t.fn, a),
            function () {
              e.removeEventListener(t.eventName, t.fn, a)
            }
          )
        })
        return function () {
          n.forEach(function (e) {
            e()
          })
        }
      }
      var S = 'Invariant failed'
      function P(e) {
        this.message = e
      }
      function L(e, t) {
        if (!e) throw new P(S)
      }
      P.prototype.toString = function () {
        return this.message
      }
      var T = (function (e) {
          function t() {
            for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).callbacks = null),
              (t.unbind = R),
              (t.onWindowError = function (e) {
                var r = t.getCallbacks()
                r.isDragging() && r.tryAbort(), e.error instanceof P && e.preventDefault()
              }),
              (t.getCallbacks = function () {
                if (!t.callbacks) throw new Error('Unable to find AppCallbacks in <ErrorBoundary/>')
                return t.callbacks
              }),
              (t.setCallbacks = function (e) {
                t.callbacks = e
              }),
              t
            )
          }
          Object(a.a)(t, e)
          var r = t.prototype
          return (
            (r.componentDidMount = function () {
              this.unbind = N(window, [{ eventName: 'error', fn: this.onWindowError }])
            }),
            (r.componentWillUnmount = function () {
              this.unbind()
            }),
            (r.componentDidCatch = function (e) {
              if (!(e instanceof P)) throw e
              this.setState({})
            }),
            (r.render = function () {
              return this.props.children(this.setCallbacks)
            }),
            t
          )
        })(i.a.Component),
        G = function (e) {
          return e + 1
        },
        M = function (e, t) {
          var r = e.droppableId === t.droppableId,
            n = G(e.index),
            i = G(t.index)
          return r
            ? '\n      You have moved the item from position ' + n + '\n      to position ' + i + '\n    '
            : '\n    You have moved the item from position ' +
                n +
                '\n    in list ' +
                e.droppableId +
                '\n    to list ' +
                t.droppableId +
                '\n    in position ' +
                i +
                '\n  '
        },
        j = function (e, t, r) {
          return t.droppableId === r.droppableId
            ? '\n      The item ' + e + '\n      has been combined with ' + r.draggableId
            : '\n      The item ' +
                e +
                '\n      in list ' +
                t.droppableId +
                '\n      has been combined with ' +
                r.draggableId +
                '\n      in list ' +
                r.droppableId +
                '\n    '
        },
        _ = function (e) {
          return '\n  The item has returned to its starting position\n  of ' + G(e.index) + '\n'
        },
        F =
          '\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n',
        k = function (e) {
          return '\n  You have lifted an item in position ' + G(e.source.index) + '\n'
        },
        W = function (e) {
          var t = e.destination
          if (t) return M(e.source, t)
          var r = e.combine
          return r ? j(e.draggableId, e.source, r) : 'You are over an area that cannot be dropped on'
        },
        U = function (e) {
          if ('CANCEL' === e.reason) return '\n      Movement cancelled.\n      ' + _(e.source) + '\n    '
          var t = e.destination,
            r = e.combine
          return t
            ? '\n      You have dropped the item.\n      ' + M(e.source, t) + '\n    '
            : r
            ? '\n      You have dropped the item.\n      ' + j(e.draggableId, e.source, r) + '\n    '
            : '\n    The item has been dropped while not over a drop area.\n    ' + _(e.source) + '\n  '
        },
        H = { x: 0, y: 0 },
        V = function (e, t) {
          return { x: e.x + t.x, y: e.y + t.y }
        },
        q = function (e, t) {
          return { x: e.x - t.x, y: e.y - t.y }
        },
        z = function (e, t) {
          return e.x === t.x && e.y === t.y
        },
        Y = function (e) {
          return { x: 0 !== e.x ? -e.x : 0, y: 0 !== e.y ? -e.y : 0 }
        },
        J = function (e, t, r) {
          var n
          return void 0 === r && (r = 0), ((n = {})[e] = t), (n['x' === e ? 'y' : 'x'] = r), n
        },
        X = function (e, t) {
          return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
        },
        K = function (e, t) {
          return Math.min.apply(
            Math,
            t.map(function (t) {
              return X(e, t)
            }),
          )
        },
        Z = function (e) {
          return function (t) {
            return { x: e(t.x), y: e(t.y) }
          }
        },
        Q = function (e, t) {
          return { top: e.top + t.y, left: e.left + t.x, bottom: e.bottom + t.y, right: e.right + t.x }
        },
        $ = function (e) {
          return [
            { x: e.left, y: e.top },
            { x: e.right, y: e.top },
            { x: e.left, y: e.bottom },
            { x: e.right, y: e.bottom },
          ]
        },
        ee = function (e, t) {
          return t && t.shouldClipSubject
            ? (function (e, t) {
                var r = f({
                  top: Math.max(t.top, e.top),
                  right: Math.min(t.right, e.right),
                  bottom: Math.min(t.bottom, e.bottom),
                  left: Math.max(t.left, e.left),
                })
                return r.width <= 0 || r.height <= 0 ? null : r
              })(t.pageMarginBox, e)
            : f(e)
        },
        te = function (e) {
          var t = e.page,
            r = e.withPlaceholder,
            n = e.axis,
            i = e.frame,
            a = (function (e, t, r) {
              var n
              return r && r.increasedBy
                ? Object(o.a)({}, e, (((n = {})[t.end] = e[t.end] + r.increasedBy[t.line]), n))
                : e
            })(
              (function (e, t) {
                return t ? Q(e, t.scroll.diff.displacement) : e
              })(t.marginBox, i),
              n,
              r,
            )
          return { page: t, withPlaceholder: r, active: ee(a, i) }
        },
        re = function (e, t) {
          e.frame || L(!1)
          var r = e.frame,
            n = q(t, r.scroll.initial),
            i = Y(n),
            a = Object(o.a)({}, r, {
              scroll: { initial: r.scroll.initial, current: t, diff: { value: n, displacement: i }, max: r.scroll.max },
            }),
            l = te({ page: e.subject.page, withPlaceholder: e.subject.withPlaceholder, axis: e.axis, frame: a })
          return Object(o.a)({}, e, { frame: a, subject: l })
        }
      function ne(e) {
        return Object.values
          ? Object.values(e)
          : Object.keys(e).map(function (t) {
              return e[t]
            })
      }
      function ie(e, t) {
        if (e.findIndex) return e.findIndex(t)
        for (var r = 0; r < e.length; r++) if (t(e[r])) return r
        return -1
      }
      function ae(e, t) {
        if (e.find) return e.find(t)
        var r = ie(e, t)
        return -1 !== r ? e[r] : void 0
      }
      function oe(e) {
        return Array.prototype.slice.call(e)
      }
      var le = w(function (e) {
          return e.reduce(function (e, t) {
            return (e[t.descriptor.id] = t), e
          }, {})
        }),
        ce = w(function (e) {
          return e.reduce(function (e, t) {
            return (e[t.descriptor.id] = t), e
          }, {})
        }),
        ue = w(function (e) {
          return ne(e)
        }),
        de = w(function (e) {
          return ne(e)
        }),
        se = w(function (e, t) {
          return de(t)
            .filter(function (t) {
              return e === t.descriptor.droppableId
            })
            .sort(function (e, t) {
              return e.descriptor.index - t.descriptor.index
            })
        })
      function pe(e) {
        return e.at && 'REORDER' === e.at.type ? e.at.destination : null
      }
      function fe(e) {
        return e.at && 'COMBINE' === e.at.type ? e.at.combine : null
      }
      var ge = w(function (e, t) {
          return t.filter(function (t) {
            return t.descriptor.id !== e.descriptor.id
          })
        }),
        be = function (e, t) {
          return e.descriptor.droppableId === t.descriptor.id
        },
        ve = { point: H, value: 0 },
        me = { invisible: {}, visible: {}, all: [] },
        he = { displaced: me, displacedBy: ve, at: null },
        ye = function (e, t) {
          return function (r) {
            return e <= r && r <= t
          }
        },
        Ie = function (e) {
          var t = ye(e.top, e.bottom),
            r = ye(e.left, e.right)
          return function (n) {
            if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right)) return !0
            var i = t(n.top) || t(n.bottom),
              a = r(n.left) || r(n.right)
            if (i && a) return !0
            var o = n.top < e.top && n.bottom > e.bottom,
              l = n.left < e.left && n.right > e.right
            return !(!o || !l) || (o && a) || (l && i)
          }
        },
        De = function (e) {
          var t = ye(e.top, e.bottom),
            r = ye(e.left, e.right)
          return function (e) {
            return t(e.top) && t(e.bottom) && r(e.left) && r(e.right)
          }
        },
        xe = {
          direction: 'vertical',
          line: 'y',
          crossAxisLine: 'x',
          start: 'top',
          end: 'bottom',
          size: 'height',
          crossAxisStart: 'left',
          crossAxisEnd: 'right',
          crossAxisSize: 'width',
        },
        Ee = {
          direction: 'horizontal',
          line: 'x',
          crossAxisLine: 'y',
          start: 'left',
          end: 'right',
          size: 'width',
          crossAxisStart: 'top',
          crossAxisEnd: 'bottom',
          crossAxisSize: 'height',
        },
        we = function (e) {
          var t = e.target,
            r = e.destination,
            n = e.viewport,
            i = e.withDroppableDisplacement,
            a = e.isVisibleThroughFrameFn,
            o = i
              ? (function (e, t) {
                  var r = t.frame ? t.frame.scroll.diff.displacement : H
                  return Q(e, r)
                })(t, r)
              : t
          return (
            (function (e, t, r) {
              return !!t.subject.active && r(t.subject.active)(e)
            })(o, r, a) &&
            (function (e, t, r) {
              return r(t)(e)
            })(o, n, a)
          )
        },
        Oe = function (e) {
          return we(Object(o.a)({}, e, { isVisibleThroughFrameFn: Ie }))
        },
        Ce = function (e) {
          return we(Object(o.a)({}, e, { isVisibleThroughFrameFn: De }))
        }
      function Ae(e) {
        var t = e.afterDragging,
          r = e.destination,
          n = e.displacedBy,
          i = e.viewport,
          a = e.forceShouldAnimate,
          o = e.last
        return t.reduce(
          function (e, t) {
            var l = (function (e, t) {
                var r = e.page.marginBox,
                  n = { top: t.point.y, right: 0, bottom: 0, left: t.point.x }
                return f(g(r, n))
              })(t, n),
              c = t.descriptor.id
            if ((e.all.push(c), !Oe({ target: l, destination: r, viewport: i, withDroppableDisplacement: !0 })))
              return (e.invisible[t.descriptor.id] = !0), e
            var u = {
              draggableId: c,
              shouldAnimate: (function (e, t, r) {
                if ('boolean' == typeof r) return r
                if (!t) return !0
                var n = t.invisible,
                  i = t.visible
                if (n[e]) return !1
                var a = i[e]
                return !a || a.shouldAnimate
              })(c, o, a),
            }
            return (e.visible[c] = u), e
          },
          { all: [], visible: {}, invisible: {} },
        )
      }
      function Be(e) {
        var t = e.insideDestination,
          r = e.inHomeList,
          n = e.displacedBy,
          i = e.destination,
          a = (function (e, t) {
            if (!e.length) return 0
            var r = e[e.length - 1].descriptor.index
            return t.inHomeList ? r : r + 1
          })(t, { inHomeList: r })
        return {
          displaced: me,
          displacedBy: n,
          at: { type: 'REORDER', destination: { droppableId: i.descriptor.id, index: a } },
        }
      }
      function Re(e) {
        var t = e.draggable,
          r = e.insideDestination,
          n = e.destination,
          i = e.viewport,
          a = e.displacedBy,
          o = e.last,
          l = e.index,
          c = e.forceShouldAnimate,
          u = be(t, n)
        if (null == l) return Be({ insideDestination: r, inHomeList: u, displacedBy: a, destination: n })
        var d = ae(r, function (e) {
          return e.descriptor.index === l
        })
        if (!d) return Be({ insideDestination: r, inHomeList: u, displacedBy: a, destination: n })
        var s = ge(t, r),
          p = r.indexOf(d)
        return {
          displaced: Ae({
            afterDragging: s.slice(p),
            destination: n,
            displacedBy: a,
            last: o,
            viewport: i.frame,
            forceShouldAnimate: c,
          }),
          displacedBy: a,
          at: { type: 'REORDER', destination: { droppableId: n.descriptor.id, index: l } },
        }
      }
      function Ne(e, t) {
        return Boolean(t.effected[e])
      }
      var Se = function (e) {
          var t = e.isMovingForward,
            r = e.isInHomeList,
            n = e.draggable,
            i = e.draggables,
            a = e.destination,
            o = e.insideDestination,
            l = e.previousImpact,
            c = e.viewport,
            u = e.afterCritical,
            d = l.at
          if ((d || L(!1), 'REORDER' === d.type)) {
            var s = (function (e) {
              var t = e.isMovingForward,
                r = e.isInHomeList,
                n = e.insideDestination,
                i = e.location
              if (!n.length) return null
              var a = i.index,
                o = t ? a + 1 : a - 1,
                l = n[0].descriptor.index,
                c = n[n.length - 1].descriptor.index
              return o < l || o > (r ? c : c + 1) ? null : o
            })({ isMovingForward: t, isInHomeList: r, location: d.destination, insideDestination: o })
            return null == s
              ? null
              : Re({
                  draggable: n,
                  insideDestination: o,
                  destination: a,
                  viewport: c,
                  last: l.displaced,
                  displacedBy: l.displacedBy,
                  index: s,
                })
          }
          var p = (function (e) {
            var t = e.isMovingForward,
              r = e.destination,
              n = e.draggables,
              i = e.combine,
              a = e.afterCritical
            if (!r.isCombineEnabled) return null
            var o = i.draggableId,
              l = n[o].descriptor.index
            return Ne(o, a) ? (t ? l : l - 1) : t ? l + 1 : l
          })({
            isMovingForward: t,
            destination: a,
            displaced: l.displaced,
            draggables: i,
            combine: d.combine,
            afterCritical: u,
          })
          return null == p
            ? null
            : Re({
                draggable: n,
                insideDestination: o,
                destination: a,
                viewport: c,
                last: l.displaced,
                displacedBy: l.displacedBy,
                index: p,
              })
        },
        Pe = function (e) {
          var t = e.afterCritical,
            r = e.impact,
            n = e.draggables,
            i = fe(r)
          i || L(!1)
          var a = i.draggableId,
            o = n[a].page.borderBox.center,
            l = (function (e) {
              var t = e.displaced,
                r = e.afterCritical,
                n = e.combineWith,
                i = e.displacedBy,
                a = Boolean(t.visible[n] || t.invisible[n])
              return Ne(n, r) ? (a ? H : Y(i.point)) : a ? i.point : H
            })({ displaced: r.displaced, afterCritical: t, combineWith: a, displacedBy: r.displacedBy })
          return V(o, l)
        },
        Le = function (e, t) {
          return t.margin[e.start] + t.borderBox[e.size] / 2
        },
        Te = function (e, t, r) {
          return t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2
        },
        Ge = function (e) {
          var t = e.axis,
            r = e.moveRelativeTo,
            n = e.isMoving
          return J(t.line, r.marginBox[t.end] + Le(t, n), Te(t, r.marginBox, n))
        },
        Me = function (e) {
          var t = e.axis,
            r = e.moveRelativeTo,
            n = e.isMoving
          return J(
            t.line,
            r.marginBox[t.start] -
              (function (e, t) {
                return t.margin[e.end] + t.borderBox[e.size] / 2
              })(t, n),
            Te(t, r.marginBox, n),
          )
        },
        je = function (e) {
          var t = e.impact,
            r = e.draggable,
            n = e.draggables,
            i = e.droppable,
            a = e.afterCritical,
            o = se(i.descriptor.id, n),
            l = r.page,
            c = i.axis
          if (!o.length)
            return (function (e) {
              var t = e.axis,
                r = e.moveInto,
                n = e.isMoving
              return J(t.line, r.contentBox[t.start] + Le(t, n), Te(t, r.contentBox, n))
            })({ axis: c, moveInto: i.page, isMoving: l })
          var u = t.displaced,
            d = t.displacedBy,
            s = u.all[0]
          if (s) {
            var p = n[s]
            if (Ne(s, a)) return Me({ axis: c, moveRelativeTo: p.page, isMoving: l })
            var f = y(p.page, d.point)
            return Me({ axis: c, moveRelativeTo: f, isMoving: l })
          }
          var g = o[o.length - 1]
          if (g.descriptor.id === r.descriptor.id) return l.borderBox.center
          if (Ne(g.descriptor.id, a)) {
            var b = y(g.page, Y(a.displacedBy.point))
            return Ge({ axis: c, moveRelativeTo: b, isMoving: l })
          }
          return Ge({ axis: c, moveRelativeTo: g.page, isMoving: l })
        },
        _e = function (e, t) {
          var r = e.frame
          return r ? V(t, r.scroll.diff.displacement) : t
        },
        Fe = function (e) {
          var t = (function (e) {
              var t = e.impact,
                r = e.draggable,
                n = e.droppable,
                i = e.draggables,
                a = e.afterCritical,
                o = r.page.borderBox.center,
                l = t.at
              return n && l
                ? 'REORDER' === l.type
                  ? je({ impact: t, draggable: r, draggables: i, droppable: n, afterCritical: a })
                  : Pe({ impact: t, draggables: i, afterCritical: a })
                : o
            })(e),
            r = e.droppable
          return r ? _e(r, t) : t
        },
        ke = function (e, t) {
          var r = q(t, e.scroll.initial),
            n = Y(r)
          return {
            frame: f({ top: t.y, bottom: t.y + e.frame.height, left: t.x, right: t.x + e.frame.width }),
            scroll: { initial: e.scroll.initial, max: e.scroll.max, current: t, diff: { value: r, displacement: n } },
          }
        }
      function We(e, t) {
        return e.map(function (e) {
          return t[e]
        })
      }
      var Ue = function (e) {
          var t = e.pageBorderBoxCenter,
            r = e.draggable,
            n = (function (e, t) {
              return V(e.scroll.diff.displacement, t)
            })(e.viewport, t),
            i = q(n, r.page.borderBox.center)
          return V(r.client.borderBox.center, i)
        },
        He = function (e) {
          var t = e.draggable,
            r = e.destination,
            n = e.newPageBorderBoxCenter,
            i = e.viewport,
            a = e.withDroppableDisplacement,
            l = e.onlyOnMainAxis,
            c = void 0 !== l && l,
            u = q(n, t.page.borderBox.center),
            d = { target: Q(t.page.borderBox, u), destination: r, withDroppableDisplacement: a, viewport: i }
          return c
            ? (function (e) {
                return we(
                  Object(o.a)({}, e, {
                    isVisibleThroughFrameFn:
                      ((t = e.destination.axis),
                      function (e) {
                        var r = ye(e.top, e.bottom),
                          n = ye(e.left, e.right)
                        return function (e) {
                          return t === xe ? r(e.top) && r(e.bottom) : n(e.left) && n(e.right)
                        }
                      }),
                  }),
                )
                var t
              })(d)
            : Ce(d)
        },
        Ve = function (e) {
          var t = e.isMovingForward,
            r = e.draggable,
            n = e.destination,
            i = e.draggables,
            a = e.previousImpact,
            l = e.viewport,
            c = e.previousPageBorderBoxCenter,
            u = e.previousClientSelection,
            d = e.afterCritical
          if (!n.isEnabled) return null
          var s = se(n.descriptor.id, i),
            p = be(r, n),
            f =
              (function (e) {
                var t = e.isMovingForward,
                  r = e.draggable,
                  n = e.destination,
                  i = e.insideDestination,
                  a = e.previousImpact
                if (!n.isCombineEnabled) return null
                if (!pe(a)) return null
                function l(e) {
                  var t = { type: 'COMBINE', combine: { draggableId: e, droppableId: n.descriptor.id } }
                  return Object(o.a)({}, a, { at: t })
                }
                var c = a.displaced.all,
                  u = c.length ? c[0] : null
                if (t) return u ? l(u) : null
                var d = ge(r, i)
                if (!u) return d.length ? l(d[d.length - 1].descriptor.id) : null
                var s = ie(d, function (e) {
                  return e.descriptor.id === u
                })
                ;-1 === s && L(!1)
                var p = s - 1
                return p < 0 ? null : l(d[p].descriptor.id)
              })({ isMovingForward: t, draggable: r, destination: n, insideDestination: s, previousImpact: a }) ||
              Se({
                isMovingForward: t,
                isInHomeList: p,
                draggable: r,
                draggables: i,
                destination: n,
                insideDestination: s,
                previousImpact: a,
                viewport: l,
                afterCritical: d,
              })
          if (!f) return null
          var g = Fe({ impact: f, draggable: r, droppable: n, draggables: i, afterCritical: d })
          if (
            He({
              draggable: r,
              destination: n,
              newPageBorderBoxCenter: g,
              viewport: l.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
          )
            return {
              clientSelection: Ue({ pageBorderBoxCenter: g, draggable: r, viewport: l }),
              impact: f,
              scrollJumpRequest: null,
            }
          var b = q(g, c)
          return {
            clientSelection: u,
            impact: (function (e) {
              var t = e.impact,
                r = e.viewport,
                n = e.destination,
                i = e.draggables,
                a = e.maxScrollChange,
                l = ke(r, V(r.scroll.current, a)),
                c = n.frame ? re(n, V(n.frame.scroll.current, a)) : n,
                u = t.displaced,
                d = Ae({
                  afterDragging: We(u.all, i),
                  destination: n,
                  displacedBy: t.displacedBy,
                  viewport: l.frame,
                  last: u,
                  forceShouldAnimate: !1,
                }),
                s = Ae({
                  afterDragging: We(u.all, i),
                  destination: c,
                  displacedBy: t.displacedBy,
                  viewport: r.frame,
                  last: u,
                  forceShouldAnimate: !1,
                }),
                p = {},
                f = {},
                g = [u, d, s]
              return (
                u.all.forEach(function (e) {
                  var t = (function (e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var n = t[r].visible[e]
                      if (n) return n
                    }
                    return null
                  })(e, g)
                  t ? (f[e] = t) : (p[e] = !0)
                }),
                Object(o.a)({}, t, { displaced: { all: u.all, invisible: p, visible: f } })
              )
            })({ impact: f, viewport: l, destination: n, draggables: i, maxScrollChange: b }),
            scrollJumpRequest: b,
          }
        },
        qe = function (e) {
          var t = e.subject.active
          return t || L(!1), t
        },
        ze = function (e, t) {
          var r = e.page.borderBox.center
          return Ne(e.descriptor.id, t) ? q(r, t.displacedBy.point) : r
        },
        Ye = function (e, t) {
          var r = e.page.borderBox
          return Ne(e.descriptor.id, t) ? Q(r, Y(t.displacedBy.point)) : r
        },
        Je = w(function (e, t) {
          var r = t[e.line]
          return { value: r, point: J(e.line, r) }
        }),
        Xe = function (e, t) {
          return Object(o.a)({}, e, { scroll: Object(o.a)({}, e.scroll, { max: t }) })
        },
        Ke = function (e, t, r) {
          var n = e.frame
          be(t, e) && L(!1), e.subject.withPlaceholder && L(!1)
          var i = Je(e.axis, t.displaceBy).point,
            a = (function (e, t, r) {
              var n = e.axis
              if ('virtual' === e.descriptor.mode) return J(n.line, t[n.line])
              var i = e.subject.page.contentBox[n.size],
                a =
                  se(e.descriptor.id, r).reduce(function (e, t) {
                    return e + t.client.marginBox[n.size]
                  }, 0) +
                  t[n.line] -
                  i
              return a <= 0 ? null : J(n.line, a)
            })(e, i, r),
            l = { placeholderSize: i, increasedBy: a, oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null }
          if (!n) {
            var c = te({ page: e.subject.page, withPlaceholder: l, axis: e.axis, frame: e.frame })
            return Object(o.a)({}, e, { subject: c })
          }
          var u = a ? V(n.scroll.max, a) : n.scroll.max,
            d = Xe(n, u),
            s = te({ page: e.subject.page, withPlaceholder: l, axis: e.axis, frame: d })
          return Object(o.a)({}, e, { subject: s, frame: d })
        },
        Ze = function (e) {
          var t = e.isMovingForward,
            r = e.previousPageBorderBoxCenter,
            n = e.draggable,
            i = e.isOver,
            a = e.draggables,
            o = e.droppables,
            l = e.viewport,
            c = e.afterCritical,
            u = (function (e) {
              var t = e.isMovingForward,
                r = e.pageBorderBoxCenter,
                n = e.source,
                i = e.droppables,
                a = e.viewport,
                o = n.subject.active
              if (!o) return null
              var l = n.axis,
                c = ye(o[l.start], o[l.end]),
                u = ue(i)
                  .filter(function (e) {
                    return e !== n
                  })
                  .filter(function (e) {
                    return e.isEnabled
                  })
                  .filter(function (e) {
                    return Boolean(e.subject.active)
                  })
                  .filter(function (e) {
                    return Ie(a.frame)(qe(e))
                  })
                  .filter(function (e) {
                    var r = qe(e)
                    return t ? o[l.crossAxisEnd] < r[l.crossAxisEnd] : r[l.crossAxisStart] < o[l.crossAxisStart]
                  })
                  .filter(function (e) {
                    var t = qe(e),
                      r = ye(t[l.start], t[l.end])
                    return c(t[l.start]) || c(t[l.end]) || r(o[l.start]) || r(o[l.end])
                  })
                  .sort(function (e, r) {
                    var n = qe(e)[l.crossAxisStart],
                      i = qe(r)[l.crossAxisStart]
                    return t ? n - i : i - n
                  })
                  .filter(function (e, t, r) {
                    return qe(e)[l.crossAxisStart] === qe(r[0])[l.crossAxisStart]
                  })
              if (!u.length) return null
              if (1 === u.length) return u[0]
              var d = u.filter(function (e) {
                return ye(qe(e)[l.start], qe(e)[l.end])(r[l.line])
              })
              return 1 === d.length
                ? d[0]
                : d.length > 1
                ? d.sort(function (e, t) {
                    return qe(e)[l.start] - qe(t)[l.start]
                  })[0]
                : u.sort(function (e, t) {
                    var n = K(r, $(qe(e))),
                      i = K(r, $(qe(t)))
                    return n !== i ? n - i : qe(e)[l.start] - qe(t)[l.start]
                  })[0]
            })({ isMovingForward: t, pageBorderBoxCenter: r, source: i, droppables: o, viewport: l })
          if (!u) return null
          var d = se(u.descriptor.id, a),
            s = (function (e) {
              var t = e.previousPageBorderBoxCenter,
                r = e.moveRelativeTo,
                n = e.insideDestination,
                i = e.draggable,
                a = e.draggables,
                o = e.destination,
                l = e.viewport,
                c = e.afterCritical
              if (!r) {
                if (n.length) return null
                var u = {
                    displaced: me,
                    displacedBy: ve,
                    at: { type: 'REORDER', destination: { droppableId: o.descriptor.id, index: 0 } },
                  },
                  d = Fe({ impact: u, draggable: i, droppable: o, draggables: a, afterCritical: c }),
                  s = be(i, o) ? o : Ke(o, i, a)
                return He({
                  draggable: i,
                  destination: s,
                  newPageBorderBoxCenter: d,
                  viewport: l.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0,
                })
                  ? u
                  : null
              }
              var p,
                f = Boolean(t[o.axis.line] <= r.page.borderBox.center[o.axis.line]),
                g = ((p = r.descriptor.index), r.descriptor.id === i.descriptor.id || f ? p : p + 1),
                b = Je(o.axis, i.displaceBy)
              return Re({
                draggable: i,
                insideDestination: n,
                destination: o,
                viewport: l,
                displacedBy: b,
                last: me,
                index: g,
              })
            })({
              previousPageBorderBoxCenter: r,
              destination: u,
              draggable: n,
              draggables: a,
              moveRelativeTo: (function (e) {
                var t = e.pageBorderBoxCenter,
                  r = e.viewport,
                  n = e.destination,
                  i = e.insideDestination,
                  a = e.afterCritical
                return (
                  i
                    .filter(function (e) {
                      return Ce({ target: Ye(e, a), destination: n, viewport: r.frame, withDroppableDisplacement: !0 })
                    })
                    .sort(function (e, r) {
                      var i = X(t, _e(n, ze(e, a))),
                        o = X(t, _e(n, ze(r, a)))
                      return i < o ? -1 : o < i ? 1 : e.descriptor.index - r.descriptor.index
                    })[0] || null
                )
              })({ pageBorderBoxCenter: r, viewport: l, destination: u, insideDestination: d, afterCritical: c }),
              insideDestination: d,
              viewport: l,
              afterCritical: c,
            })
          if (!s) return null
          var p = Fe({ impact: s, draggable: n, droppable: u, draggables: a, afterCritical: c })
          return {
            clientSelection: Ue({ pageBorderBoxCenter: p, draggable: n, viewport: l }),
            impact: s,
            scrollJumpRequest: null,
          }
        },
        Qe = function (e) {
          var t = e.at
          return t ? ('REORDER' === t.type ? t.destination.droppableId : t.combine.droppableId) : null
        },
        $e = function (e) {
          var t = e.state,
            r = e.type,
            n = (function (e, t) {
              var r = Qe(e)
              return r ? t[r] : null
            })(t.impact, t.dimensions.droppables),
            i = Boolean(n),
            a = t.dimensions.droppables[t.critical.droppable.id],
            o = n || a,
            l = o.axis.direction,
            c =
              ('vertical' === l && ('MOVE_UP' === r || 'MOVE_DOWN' === r)) ||
              ('horizontal' === l && ('MOVE_LEFT' === r || 'MOVE_RIGHT' === r))
          if (c && !i) return null
          var u = 'MOVE_DOWN' === r || 'MOVE_RIGHT' === r,
            d = t.dimensions.draggables[t.critical.draggable.id],
            s = t.current.page.borderBoxCenter,
            p = t.dimensions,
            f = p.draggables,
            g = p.droppables
          return c
            ? Ve({
                isMovingForward: u,
                previousPageBorderBoxCenter: s,
                draggable: d,
                destination: o,
                draggables: f,
                viewport: t.viewport,
                previousClientSelection: t.current.client.selection,
                previousImpact: t.impact,
                afterCritical: t.afterCritical,
              })
            : Ze({
                isMovingForward: u,
                previousPageBorderBoxCenter: s,
                draggable: d,
                isOver: o,
                draggables: f,
                droppables: g,
                viewport: t.viewport,
                afterCritical: t.afterCritical,
              })
        }
      function et(e) {
        return 'DRAGGING' === e.phase || 'COLLECTING' === e.phase
      }
      function tt(e) {
        var t = ye(e.top, e.bottom),
          r = ye(e.left, e.right)
        return function (e) {
          return t(e.y) && r(e.x)
        }
      }
      function rt(e) {
        var t = e.pageBorderBox,
          r = e.draggable,
          n = e.droppables,
          i = ue(n).filter(function (e) {
            if (!e.isEnabled) return !1
            var r,
              n,
              i = e.subject.active
            if (!i) return !1
            if (((n = i), !((r = t).left < n.right && r.right > n.left && r.top < n.bottom && r.bottom > n.top)))
              return !1
            if (tt(i)(t.center)) return !0
            var a = e.axis,
              o = i.center[a.crossAxisLine],
              l = t[a.crossAxisStart],
              c = t[a.crossAxisEnd],
              u = ye(i[a.crossAxisStart], i[a.crossAxisEnd]),
              d = u(l),
              s = u(c)
            return (!d && !s) || (d ? l < o : c > o)
          })
        return i.length
          ? 1 === i.length
            ? i[0].descriptor.id
            : (function (e) {
                var t = e.pageBorderBox,
                  r = e.draggable,
                  n = e.candidates,
                  i = r.page.borderBox.center,
                  a = n
                    .map(function (e) {
                      var r = e.axis,
                        n = J(e.axis.line, t.center[r.line], e.page.borderBox.center[r.crossAxisLine])
                      return { id: e.descriptor.id, distance: X(i, n) }
                    })
                    .sort(function (e, t) {
                      return t.distance - e.distance
                    })
                return a[0] ? a[0].id : null
              })({ pageBorderBox: t, draggable: r, candidates: i })
          : null
      }
      var nt = function (e, t) {
        return f(Q(e, t))
      }
      function it(e) {
        var t = e.displaced,
          r = e.id
        return Boolean(t.visible[r] || t.invisible[r])
      }
      var at = function (e) {
          var t = e.pageOffset,
            r = e.draggable,
            n = e.draggables,
            i = e.droppables,
            a = e.previousImpact,
            o = e.viewport,
            l = e.afterCritical,
            c = nt(r.page.borderBox, t),
            u = rt({ pageBorderBox: c, draggable: r, droppables: i })
          if (!u) return he
          var d,
            s,
            p = i[u],
            f = se(p.descriptor.id, n),
            g = ((d = c), (s = p.frame) ? nt(d, s.scroll.diff.value) : d)
          return (
            (function (e) {
              var t = e.draggable,
                r = e.pageBorderBoxWithDroppableScroll,
                n = e.previousImpact,
                i = e.destination,
                a = e.insideDestination,
                o = e.afterCritical
              if (!i.isCombineEnabled) return null
              var l = i.axis,
                c = Je(i.axis, t.displaceBy),
                u = c.value,
                d = r[l.start],
                s = r[l.end],
                p = ae(ge(t, a), function (e) {
                  var t = e.descriptor.id,
                    r = e.page.borderBox,
                    i = r[l.size] / 4,
                    a = Ne(t, o),
                    c = it({ displaced: n.displaced, id: t })
                  return a
                    ? c
                      ? s > r[l.start] + i && s < r[l.end] - i
                      : d > r[l.start] - u + i && d < r[l.end] - u - i
                    : c
                    ? s > r[l.start] + u + i && s < r[l.end] + u - i
                    : d > r[l.start] + i && d < r[l.end] - i
                })
              return p
                ? {
                    displacedBy: c,
                    displaced: n.displaced,
                    at: { type: 'COMBINE', combine: { draggableId: p.descriptor.id, droppableId: i.descriptor.id } },
                  }
                : null
            })({
              pageBorderBoxWithDroppableScroll: g,
              draggable: r,
              previousImpact: a,
              destination: p,
              insideDestination: f,
              afterCritical: l,
            }) ||
            (function (e) {
              var t = e.pageBorderBoxWithDroppableScroll,
                r = e.draggable,
                n = e.destination,
                i = e.insideDestination,
                a = e.last,
                o = e.viewport,
                l = e.afterCritical,
                c = n.axis,
                u = Je(n.axis, r.displaceBy),
                d = u.value,
                s = t[c.start],
                p = t[c.end],
                f = (function (e) {
                  var t = e.draggable,
                    r = e.closest,
                    n = e.inHomeList
                  return r
                    ? n && r.descriptor.index > t.descriptor.index
                      ? r.descriptor.index - 1
                      : r.descriptor.index
                    : null
                })({
                  draggable: r,
                  closest: ae(ge(r, i), function (e) {
                    var t = e.descriptor.id,
                      r = e.page.borderBox.center[c.line],
                      n = Ne(t, l),
                      i = it({ displaced: a, id: t })
                    return n ? (i ? p <= r : s < r - d) : i ? p <= r + d : s < r
                  }),
                  inHomeList: be(r, n),
                })
              return Re({
                draggable: r,
                insideDestination: i,
                destination: n,
                viewport: o,
                last: a,
                displacedBy: u,
                index: f,
              })
            })({
              pageBorderBoxWithDroppableScroll: g,
              draggable: r,
              destination: p,
              insideDestination: f,
              last: a.displaced,
              viewport: o,
              afterCritical: l,
            })
          )
        },
        ot = function (e, t) {
          var r
          return Object(o.a)({}, e, (((r = {})[t.descriptor.id] = t), r))
        },
        lt = function (e) {
          var t = e.previousImpact,
            r = e.impact,
            n = e.droppables,
            i = Qe(t),
            a = Qe(r)
          if (!i) return n
          if (i === a) return n
          var l = n[i]
          if (!l.subject.withPlaceholder) return n
          var c = (function (e) {
            var t = e.subject.withPlaceholder
            t || L(!1)
            var r = e.frame
            if (!r) {
              var n = te({ page: e.subject.page, axis: e.axis, frame: null, withPlaceholder: null })
              return Object(o.a)({}, e, { subject: n })
            }
            var i = t.oldFrameMaxScroll
            i || L(!1)
            var a = Xe(r, i),
              l = te({ page: e.subject.page, axis: e.axis, frame: a, withPlaceholder: null })
            return Object(o.a)({}, e, { subject: l, frame: a })
          })(l)
          return ot(n, c)
        },
        ct = function (e) {
          var t = e.state,
            r = e.clientSelection,
            n = e.dimensions,
            i = e.viewport,
            a = e.impact,
            l = e.scrollJumpRequest,
            c = i || t.viewport,
            u = n || t.dimensions,
            d = r || t.current.client.selection,
            s = q(d, t.initial.client.selection),
            p = { offset: s, selection: d, borderBoxCenter: V(t.initial.client.borderBoxCenter, s) },
            f = {
              selection: V(p.selection, c.scroll.current),
              borderBoxCenter: V(p.borderBoxCenter, c.scroll.current),
              offset: V(p.offset, c.scroll.diff.value),
            },
            g = { client: p, page: f }
          if ('COLLECTING' === t.phase)
            return Object(o.a)({ phase: 'COLLECTING' }, t, { dimensions: u, viewport: c, current: g })
          var b = u.draggables[t.critical.draggable.id],
            v =
              a ||
              at({
                pageOffset: f.offset,
                draggable: b,
                draggables: u.draggables,
                droppables: u.droppables,
                previousImpact: t.impact,
                viewport: c,
                afterCritical: t.afterCritical,
              }),
            m = (function (e) {
              var t = e.draggable,
                r = e.draggables,
                n = e.droppables,
                i = e.previousImpact,
                a = e.impact,
                o = lt({ previousImpact: i, impact: a, droppables: n }),
                l = Qe(a)
              if (!l) return o
              var c = n[l]
              if (be(t, c)) return o
              if (c.subject.withPlaceholder) return o
              var u = Ke(c, t, r)
              return ot(o, u)
            })({
              draggable: b,
              impact: v,
              previousImpact: t.impact,
              draggables: u.draggables,
              droppables: u.droppables,
            })
          return Object(o.a)({}, t, {
            current: g,
            dimensions: { draggables: u.draggables, droppables: m },
            impact: v,
            viewport: c,
            scrollJumpRequest: l || null,
            forceShouldAnimate: !l && null,
          })
        }
      var ut = function (e) {
          var t = e.impact,
            r = e.viewport,
            n = e.draggables,
            i = e.destination,
            a = e.forceShouldAnimate,
            l = t.displaced,
            c = Ae({
              afterDragging: (function (e, t) {
                return e.map(function (e) {
                  return t[e]
                })
              })(l.all, n),
              destination: i,
              displacedBy: t.displacedBy,
              viewport: r.frame,
              forceShouldAnimate: a,
              last: l,
            })
          return Object(o.a)({}, t, { displaced: c })
        },
        dt = function (e) {
          var t = e.impact,
            r = e.draggable,
            n = e.droppable,
            i = e.draggables,
            a = e.viewport,
            o = e.afterCritical,
            l = Fe({ impact: t, draggable: r, draggables: i, droppable: n, afterCritical: o })
          return Ue({ pageBorderBoxCenter: l, draggable: r, viewport: a })
        },
        st = function (e) {
          var t = e.state,
            r = e.dimensions,
            n = e.viewport
          'SNAP' !== t.movementMode && L(!1)
          var i = t.impact,
            a = n || t.viewport,
            o = r || t.dimensions,
            l = o.draggables,
            c = o.droppables,
            u = l[t.critical.draggable.id],
            d = Qe(i)
          d || L(!1)
          var s = c[d],
            p = ut({ impact: i, viewport: a, destination: s, draggables: l }),
            f = dt({
              impact: p,
              draggable: u,
              droppable: s,
              draggables: l,
              viewport: a,
              afterCritical: t.afterCritical,
            })
          return ct({ impact: p, clientSelection: f, state: t, dimensions: o, viewport: a })
        },
        pt = function (e) {
          var t = e.draggable,
            r = e.home,
            n = e.draggables,
            i = e.viewport,
            a = Je(r.axis, t.displaceBy),
            o = se(r.descriptor.id, n),
            l = o.indexOf(t)
          ;-1 === l && L(!1)
          var c,
            u = o.slice(l + 1),
            d = u.reduce(function (e, t) {
              return (e[t.descriptor.id] = !0), e
            }, {}),
            s = { inVirtualList: 'virtual' === r.descriptor.mode, displacedBy: a, effected: d }
          return {
            impact: {
              displaced: Ae({
                afterDragging: u,
                destination: r,
                displacedBy: a,
                last: null,
                viewport: i.frame,
                forceShouldAnimate: !1,
              }),
              displacedBy: a,
              at: {
                type: 'REORDER',
                destination: ((c = t.descriptor), { index: c.index, droppableId: c.droppableId }),
              },
            },
            afterCritical: s,
          }
        },
        ft = function (e) {
          0
        },
        gt = function (e) {
          0
        },
        bt = function (e) {
          var t = e.additions,
            r = e.updatedDroppables,
            n = e.viewport,
            i = n.scroll.diff.value
          return t.map(function (e) {
            var t = e.descriptor.droppableId,
              a = (function (e) {
                var t = e.frame
                return t || L(!1), t
              })(r[t]).scroll.diff.value
            return (function (e) {
              var t = e.draggable,
                r = e.offset,
                n = e.initialWindowScroll,
                i = y(t.client, r),
                a = I(i, n)
              return Object(o.a)({}, t, {
                placeholder: Object(o.a)({}, t.placeholder, { client: i }),
                client: i,
                page: a,
              })
            })({ draggable: e, offset: V(i, a), initialWindowScroll: n.scroll.initial })
          })
        },
        vt = function (e) {
          return 'SNAP' === e.movementMode
        },
        mt = function (e, t, r) {
          var n = (function (e, t) {
            return { draggables: e.draggables, droppables: ot(e.droppables, t) }
          })(e.dimensions, t)
          return !vt(e) || r ? ct({ state: e, dimensions: n }) : st({ state: e, dimensions: n })
        }
      function ht(e) {
        return e.isDragging && 'SNAP' === e.movementMode
          ? Object(o.a)({ phase: 'DRAGGING' }, e, { scrollJumpRequest: null })
          : e
      }
      var yt = { phase: 'IDLE', completed: null, shouldFlush: !1 },
        It = function (e, t) {
          if ((void 0 === e && (e = yt), 'FLUSH' === t.type)) return Object(o.a)({}, yt, { shouldFlush: !0 })
          if ('INITIAL_PUBLISH' === t.type) {
            'IDLE' !== e.phase && L(!1)
            var r = t.payload,
              n = r.critical,
              i = r.clientSelection,
              a = r.viewport,
              l = r.dimensions,
              c = r.movementMode,
              u = l.draggables[n.draggable.id],
              d = l.droppables[n.droppable.id],
              s = { selection: i, borderBoxCenter: u.client.borderBox.center, offset: H },
              p = {
                client: s,
                page: {
                  selection: V(s.selection, a.scroll.initial),
                  borderBoxCenter: V(s.selection, a.scroll.initial),
                  offset: V(s.selection, a.scroll.diff.value),
                },
              },
              f = ue(l.droppables).every(function (e) {
                return !e.isFixedOnPage
              }),
              g = pt({ draggable: u, home: d, draggables: l.draggables, viewport: a }),
              b = g.impact
            return {
              phase: 'DRAGGING',
              isDragging: !0,
              critical: n,
              movementMode: c,
              dimensions: l,
              initial: p,
              current: p,
              isWindowScrollAllowed: f,
              impact: b,
              afterCritical: g.afterCritical,
              onLiftImpact: b,
              viewport: a,
              scrollJumpRequest: null,
              forceShouldAnimate: null,
            }
          }
          if ('COLLECTION_STARTING' === t.type)
            return 'COLLECTING' === e.phase || 'DROP_PENDING' === e.phase
              ? e
              : ('DRAGGING' !== e.phase && L(!1), Object(o.a)({ phase: 'COLLECTING' }, e, { phase: 'COLLECTING' }))
          if ('PUBLISH_WHILE_DRAGGING' === t.type)
            return (
              'COLLECTING' !== e.phase && 'DROP_PENDING' !== e.phase && L(!1),
              (function (e) {
                var t = e.state,
                  r = e.published
                ft()
                var n = r.modified.map(function (e) {
                    var r = t.dimensions.droppables[e.droppableId]
                    return re(r, e.scroll)
                  }),
                  i = Object(o.a)({}, t.dimensions.droppables, {}, le(n)),
                  a = ce(bt({ additions: r.additions, updatedDroppables: i, viewport: t.viewport })),
                  l = Object(o.a)({}, t.dimensions.draggables, {}, a)
                r.removals.forEach(function (e) {
                  delete l[e]
                })
                var c = { droppables: i, draggables: l },
                  u = Qe(t.impact),
                  d = u ? c.droppables[u] : null,
                  s = c.draggables[t.critical.draggable.id],
                  p = c.droppables[t.critical.droppable.id],
                  f = pt({ draggable: s, home: p, draggables: l, viewport: t.viewport }),
                  g = f.impact,
                  b = f.afterCritical,
                  v = d && d.isCombineEnabled ? t.impact : g,
                  m = at({
                    pageOffset: t.current.page.offset,
                    draggable: c.draggables[t.critical.draggable.id],
                    draggables: c.draggables,
                    droppables: c.droppables,
                    previousImpact: v,
                    viewport: t.viewport,
                    afterCritical: b,
                  })
                gt()
                var h = Object(o.a)({ phase: 'DRAGGING' }, t, {
                  phase: 'DRAGGING',
                  impact: m,
                  onLiftImpact: g,
                  dimensions: c,
                  afterCritical: b,
                  forceShouldAnimate: !1,
                })
                return 'COLLECTING' === t.phase
                  ? h
                  : Object(o.a)({ phase: 'DROP_PENDING' }, h, {
                      phase: 'DROP_PENDING',
                      reason: t.reason,
                      isWaiting: !1,
                    })
              })({ state: e, published: t.payload })
            )
          if ('MOVE' === t.type) {
            if ('DROP_PENDING' === e.phase) return e
            et(e) || L(!1)
            var v = t.payload.client
            return z(v, e.current.client.selection)
              ? e
              : ct({ state: e, clientSelection: v, impact: vt(e) ? e.impact : null })
          }
          if ('UPDATE_DROPPABLE_SCROLL' === t.type) {
            if ('DROP_PENDING' === e.phase) return ht(e)
            if ('COLLECTING' === e.phase) return ht(e)
            et(e) || L(!1)
            var m = t.payload,
              h = m.id,
              y = m.newScroll,
              I = e.dimensions.droppables[h]
            if (!I) return e
            var D = re(I, y)
            return mt(e, D, !1)
          }
          if ('UPDATE_DROPPABLE_IS_ENABLED' === t.type) {
            if ('DROP_PENDING' === e.phase) return e
            et(e) || L(!1)
            var x = t.payload,
              E = x.id,
              w = x.isEnabled,
              O = e.dimensions.droppables[E]
            O || L(!1), O.isEnabled === w && L(!1)
            var C = Object(o.a)({}, O, { isEnabled: w })
            return mt(e, C, !0)
          }
          if ('UPDATE_DROPPABLE_IS_COMBINE_ENABLED' === t.type) {
            if ('DROP_PENDING' === e.phase) return e
            et(e) || L(!1)
            var A = t.payload,
              B = A.id,
              R = A.isCombineEnabled,
              N = e.dimensions.droppables[B]
            N || L(!1), N.isCombineEnabled === R && L(!1)
            var S = Object(o.a)({}, N, { isCombineEnabled: R })
            return mt(e, S, !0)
          }
          if ('MOVE_BY_WINDOW_SCROLL' === t.type) {
            if ('DROP_PENDING' === e.phase || 'DROP_ANIMATING' === e.phase) return e
            et(e) || L(!1), e.isWindowScrollAllowed || L(!1)
            var P = t.payload.newScroll
            if (z(e.viewport.scroll.current, P)) return ht(e)
            var T = ke(e.viewport, P)
            return vt(e) ? st({ state: e, viewport: T }) : ct({ state: e, viewport: T })
          }
          if ('UPDATE_VIEWPORT_MAX_SCROLL' === t.type) {
            if (!et(e)) return e
            var G = t.payload.maxScroll
            if (z(G, e.viewport.scroll.max)) return e
            var M = Object(o.a)({}, e.viewport, { scroll: Object(o.a)({}, e.viewport.scroll, { max: G }) })
            return Object(o.a)({ phase: 'DRAGGING' }, e, { viewport: M })
          }
          if ('MOVE_UP' === t.type || 'MOVE_DOWN' === t.type || 'MOVE_LEFT' === t.type || 'MOVE_RIGHT' === t.type) {
            if ('COLLECTING' === e.phase || 'DROP_PENDING' === e.phase) return e
            'DRAGGING' !== e.phase && L(!1)
            var j = $e({ state: e, type: t.type })
            return j
              ? ct({
                  state: e,
                  impact: j.impact,
                  clientSelection: j.clientSelection,
                  scrollJumpRequest: j.scrollJumpRequest,
                })
              : e
          }
          if ('DROP_PENDING' === t.type) {
            var _ = t.payload.reason
            return (
              'COLLECTING' !== e.phase && L(!1),
              Object(o.a)({ phase: 'DROP_PENDING' }, e, { phase: 'DROP_PENDING', isWaiting: !0, reason: _ })
            )
          }
          if ('DROP_ANIMATE' === t.type) {
            var F = t.payload,
              k = F.completed,
              W = F.dropDuration,
              U = F.newHomeClientOffset
            return (
              'DRAGGING' !== e.phase && 'DROP_PENDING' !== e.phase && L(!1),
              {
                phase: 'DROP_ANIMATING',
                completed: k,
                dropDuration: W,
                newHomeClientOffset: U,
                dimensions: e.dimensions,
              }
            )
          }
          return 'DROP_COMPLETE' === t.type ? { phase: 'IDLE', completed: t.payload.completed, shouldFlush: !1 } : e
        },
        Dt = function (e) {
          return { type: 'PUBLISH_WHILE_DRAGGING', payload: e }
        },
        xt = function () {
          return { type: 'COLLECTION_STARTING', payload: null }
        },
        Et = function (e) {
          return { type: 'UPDATE_DROPPABLE_SCROLL', payload: e }
        },
        wt = function (e) {
          return { type: 'UPDATE_DROPPABLE_IS_ENABLED', payload: e }
        },
        Ot = function (e) {
          return { type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED', payload: e }
        },
        Ct = function (e) {
          return { type: 'MOVE', payload: e }
        },
        At = function () {
          return { type: 'MOVE_UP', payload: null }
        },
        Bt = function () {
          return { type: 'MOVE_DOWN', payload: null }
        },
        Rt = function () {
          return { type: 'MOVE_RIGHT', payload: null }
        },
        Nt = function () {
          return { type: 'MOVE_LEFT', payload: null }
        },
        St = function (e) {
          return { type: 'DROP_COMPLETE', payload: e }
        },
        Pt = function (e) {
          return { type: 'DROP', payload: e }
        },
        Lt = function () {
          return { type: 'DROP_ANIMATION_FINISHED', payload: null }
        }
      var Tt = 'cubic-bezier(.2,1,.1,1)',
        Gt = { drop: 0, combining: 0.7 },
        Mt = { drop: 0.75 },
        jt = 0.2 + 's ' + 'cubic-bezier(0.2, 0, 0, 1)',
        _t = {
          fluid: 'opacity ' + jt,
          snap: 'transform ' + jt + ', opacity ' + jt,
          drop: function (e) {
            var t = e + 's ' + Tt
            return 'transform ' + t + ', opacity ' + t
          },
          outOfTheWay: 'transform ' + jt,
          placeholder: 'height ' + jt + ', width ' + jt + ', margin ' + jt,
        },
        Ft = function (e) {
          return z(e, H) ? null : 'translate(' + e.x + 'px, ' + e.y + 'px)'
        },
        kt = Ft,
        Wt = function (e, t) {
          var r = Ft(e)
          return r ? (t ? r + ' scale(' + Mt.drop + ')' : r) : null
        },
        Ut = 0.33,
        Ht = 0.55,
        Vt = Ht - Ut,
        qt = function (e) {
          var t = e.getState,
            r = e.dispatch
          return function (e) {
            return function (n) {
              if ('DROP' === n.type) {
                var i = t(),
                  a = n.payload.reason
                if ('COLLECTING' !== i.phase) {
                  if ('IDLE' !== i.phase) {
                    'DROP_PENDING' === i.phase && i.isWaiting && L(!1),
                      'DRAGGING' !== i.phase && 'DROP_PENDING' !== i.phase && L(!1)
                    var l = i.critical,
                      c = i.dimensions,
                      u = c.draggables[i.critical.draggable.id],
                      d = (function (e) {
                        var t = e.draggables,
                          r = e.reason,
                          n = e.lastImpact,
                          i = e.home,
                          a = e.viewport,
                          l = e.onLiftImpact
                        return n.at && 'DROP' === r
                          ? 'REORDER' === n.at.type
                            ? { impact: n, didDropInsideDroppable: !0 }
                            : { impact: Object(o.a)({}, n, { displaced: me }), didDropInsideDroppable: !0 }
                          : {
                              impact: ut({
                                draggables: t,
                                impact: l,
                                destination: i,
                                viewport: a,
                                forceShouldAnimate: !0,
                              }),
                              didDropInsideDroppable: !1,
                            }
                      })({
                        reason: a,
                        lastImpact: i.impact,
                        afterCritical: i.afterCritical,
                        onLiftImpact: i.onLiftImpact,
                        home: i.dimensions.droppables[i.critical.droppable.id],
                        viewport: i.viewport,
                        draggables: i.dimensions.draggables,
                      }),
                      s = d.impact,
                      p = d.didDropInsideDroppable,
                      f = p ? pe(s) : null,
                      g = p ? fe(s) : null,
                      b = { index: l.draggable.index, droppableId: l.droppable.id },
                      v = {
                        draggableId: u.descriptor.id,
                        type: u.descriptor.type,
                        source: b,
                        reason: a,
                        mode: i.movementMode,
                        destination: f,
                        combine: g,
                      },
                      m = (function (e) {
                        var t = e.impact,
                          r = e.draggable,
                          n = e.dimensions,
                          i = e.viewport,
                          a = e.afterCritical,
                          o = n.draggables,
                          l = n.droppables,
                          c = Qe(t),
                          u = c ? l[c] : null,
                          d = l[r.descriptor.droppableId],
                          s = dt({
                            impact: t,
                            draggable: r,
                            draggables: o,
                            afterCritical: a,
                            droppable: u || d,
                            viewport: i,
                          })
                        return q(s, r.client.borderBox.center)
                      })({
                        impact: s,
                        draggable: u,
                        dimensions: c,
                        viewport: i.viewport,
                        afterCritical: i.afterCritical,
                      }),
                      h = { critical: i.critical, afterCritical: i.afterCritical, result: v, impact: s }
                    if (!z(i.current.client.offset, m) || Boolean(v.combine)) {
                      var y = (function (e) {
                        var t = e.current,
                          r = e.destination,
                          n = e.reason,
                          i = X(t, r)
                        if (i <= 0) return Ut
                        if (i >= 1500) return Ht
                        var a = Ut + Vt * (i / 1500)
                        return Number(('CANCEL' === n ? 0.6 * a : a).toFixed(2))
                      })({ current: i.current.client.offset, destination: m, reason: a })
                      r(
                        (function (e) {
                          return { type: 'DROP_ANIMATE', payload: e }
                        })({ newHomeClientOffset: m, dropDuration: y, completed: h }),
                      )
                    } else r(St({ completed: h }))
                  }
                } else
                  r(
                    (function (e) {
                      return { type: 'DROP_PENDING', payload: e }
                    })({ reason: a }),
                  )
              } else e(n)
            }
          }
        },
        zt = function () {
          return { x: window.pageXOffset, y: window.pageYOffset }
        }
      function Yt(e) {
        var t = e.onWindowScroll
        var r,
          n = O(function () {
            t(zt())
          }),
          i =
            ((r = n),
            {
              eventName: 'scroll',
              options: { passive: !0, capture: !1 },
              fn: function (e) {
                ;(e.target !== window && e.target !== window.document) || r()
              },
            }),
          a = R
        function o() {
          return a !== R
        }
        return {
          start: function () {
            o() && L(!1), (a = N(window, [i]))
          },
          stop: function () {
            o() || L(!1), n.cancel(), a(), (a = R)
          },
          isActive: o,
        }
      }
      var Jt = function (e) {
          var t = Yt({
            onWindowScroll: function (t) {
              e.dispatch({ type: 'MOVE_BY_WINDOW_SCROLL', payload: { newScroll: t } })
            },
          })
          return function (e) {
            return function (r) {
              t.isActive() || 'INITIAL_PUBLISH' !== r.type || t.start(),
                t.isActive() &&
                  (function (e) {
                    return 'DROP_COMPLETE' === e.type || 'DROP_ANIMATE' === e.type || 'FLUSH' === e.type
                  })(r) &&
                  t.stop(),
                e(r)
            }
          }
        },
        Xt = function () {
          var e = []
          return {
            add: function (t) {
              var r = setTimeout(function () {
                  return (function (t) {
                    var r = ie(e, function (e) {
                      return e.timerId === t
                    })
                    ;-1 === r && L(!1), e.splice(r, 1)[0].callback()
                  })(r)
                }),
                n = { timerId: r, callback: t }
              e.push(n)
            },
            flush: function () {
              if (e.length) {
                var t = [].concat(e)
                ;(e.length = 0),
                  t.forEach(function (e) {
                    clearTimeout(e.timerId), e.callback()
                  })
              }
            },
          }
        },
        Kt = function (e, t) {
          ft(), t(), gt()
        },
        Zt = function (e, t) {
          return {
            draggableId: e.draggable.id,
            type: e.droppable.type,
            source: { droppableId: e.droppable.id, index: e.draggable.index },
            mode: t,
          }
        },
        Qt = function (e, t, r, n) {
          if (e) {
            var i = (function (e) {
              var t = !1,
                r = !1,
                n = setTimeout(function () {
                  r = !0
                }),
                i = function (i) {
                  t || r || ((t = !0), e(i), clearTimeout(n))
                }
              return (
                (i.wasCalled = function () {
                  return t
                }),
                i
              )
            })(r)
            e(t, { announce: i }), i.wasCalled() || r(n(t))
          } else r(n(t))
        },
        $t = function (e, t) {
          var r = (function (e, t) {
            var r = Xt(),
              n = null,
              i = function (r) {
                n || L(!1),
                  (n = null),
                  Kt(0, function () {
                    return Qt(e().onDragEnd, r, t, U)
                  })
              }
            return {
              beforeCapture: function (t, r) {
                n && L(!1),
                  Kt(0, function () {
                    var n = e().onBeforeCapture
                    n && n({ draggableId: t, mode: r })
                  })
              },
              beforeStart: function (t, r) {
                n && L(!1),
                  Kt(0, function () {
                    var n = e().onBeforeDragStart
                    n && n(Zt(t, r))
                  })
              },
              start: function (i, a) {
                n && L(!1)
                var o = Zt(i, a)
                ;(n = { mode: a, lastCritical: i, lastLocation: o.source, lastCombine: null }),
                  r.add(function () {
                    Kt(0, function () {
                      return Qt(e().onDragStart, o, t, k)
                    })
                  })
              },
              update: function (i, a) {
                var l = pe(a),
                  c = fe(a)
                n || L(!1)
                var u = !(function (e, t) {
                  if (e === t) return !0
                  var r =
                      e.draggable.id === t.draggable.id &&
                      e.draggable.droppableId === t.draggable.droppableId &&
                      e.draggable.type === t.draggable.type &&
                      e.draggable.index === t.draggable.index,
                    n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type
                  return r && n
                })(i, n.lastCritical)
                u && (n.lastCritical = i)
                var d,
                  s,
                  p =
                    ((s = l),
                    !(
                      (null == (d = n.lastLocation) && null == s) ||
                      (null != d && null != s && d.droppableId === s.droppableId && d.index === s.index)
                    ))
                p && (n.lastLocation = l)
                var f = !(function (e, t) {
                  return (
                    (null == e && null == t) ||
                    (null != e && null != t && e.draggableId === t.draggableId && e.droppableId === t.droppableId)
                  )
                })(n.lastCombine, c)
                if ((f && (n.lastCombine = c), u || p || f)) {
                  var g = Object(o.a)({}, Zt(i, n.mode), { combine: c, destination: l })
                  r.add(function () {
                    Kt(0, function () {
                      return Qt(e().onDragUpdate, g, t, W)
                    })
                  })
                }
              },
              flush: function () {
                n || L(!1), r.flush()
              },
              drop: i,
              abort: function () {
                if (n) {
                  var e = Object(o.a)({}, Zt(n.lastCritical, n.mode), {
                    combine: null,
                    destination: null,
                    reason: 'CANCEL',
                  })
                  i(e)
                }
              },
            }
          })(e, t)
          return function (e) {
            return function (t) {
              return function (n) {
                if ('BEFORE_INITIAL_CAPTURE' !== n.type) {
                  if ('INITIAL_PUBLISH' === n.type) {
                    var i = n.payload.critical
                    return r.beforeStart(i, n.payload.movementMode), t(n), void r.start(i, n.payload.movementMode)
                  }
                  if ('DROP_COMPLETE' === n.type) {
                    var a = n.payload.completed.result
                    return r.flush(), t(n), void r.drop(a)
                  }
                  if ((t(n), 'FLUSH' !== n.type)) {
                    var o = e.getState()
                    'DRAGGING' === o.phase && r.update(o.critical, o.impact)
                  } else r.abort()
                } else r.beforeCapture(n.payload.draggableId, n.payload.movementMode)
              }
            }
          }
        },
        er = function (e) {
          return function (t) {
            return function (r) {
              if ('DROP_ANIMATION_FINISHED' === r.type) {
                var n = e.getState()
                'DROP_ANIMATING' !== n.phase && L(!1), e.dispatch(St({ completed: n.completed }))
              } else t(r)
            }
          }
        },
        tr = function (e) {
          var t = null,
            r = null
          return function (n) {
            return function (i) {
              if (
                (('FLUSH' !== i.type && 'DROP_COMPLETE' !== i.type && 'DROP_ANIMATION_FINISHED' !== i.type) ||
                  (r && (cancelAnimationFrame(r), (r = null)), t && (t(), (t = null))),
                n(i),
                'DROP_ANIMATE' === i.type)
              ) {
                var a = {
                  eventName: 'scroll',
                  options: { capture: !0, passive: !1, once: !0 },
                  fn: function () {
                    'DROP_ANIMATING' === e.getState().phase &&
                      e.dispatch({ type: 'DROP_ANIMATION_FINISHED', payload: null })
                  },
                }
                r = requestAnimationFrame(function () {
                  ;(r = null), (t = N(window, [a]))
                })
              }
            }
          }
        },
        rr = function (e) {
          return function (t) {
            return function (r) {
              if ((t(r), 'PUBLISH_WHILE_DRAGGING' === r.type)) {
                var n = e.getState()
                'DROP_PENDING' === n.phase && (n.isWaiting || e.dispatch(Pt({ reason: n.reason })))
              }
            }
          }
        },
        nr = l.d,
        ir = function (e) {
          var t,
            r = e.dimensionMarshal,
            n = e.focusMarshal,
            i = e.styleMarshal,
            a = e.getResponders,
            o = e.announce,
            c = e.autoScroller
          return Object(l.e)(
            It,
            nr(
              Object(l.a)(
                ((t = i),
                function () {
                  return function (e) {
                    return function (r) {
                      'INITIAL_PUBLISH' === r.type && t.dragging(),
                        'DROP_ANIMATE' === r.type && t.dropping(r.payload.completed.result.reason),
                        ('FLUSH' !== r.type && 'DROP_COMPLETE' !== r.type) || t.resting(),
                        e(r)
                    }
                  }
                }),
                (function (e) {
                  return function () {
                    return function (t) {
                      return function (r) {
                        ;('DROP_COMPLETE' !== r.type && 'FLUSH' !== r.type && 'DROP_ANIMATE' !== r.type) ||
                          e.stopPublishing(),
                          t(r)
                      }
                    }
                  }
                })(r),
                (function (e) {
                  return function (t) {
                    var r = t.getState,
                      n = t.dispatch
                    return function (t) {
                      return function (i) {
                        if ('LIFT' === i.type) {
                          var a = i.payload,
                            o = a.id,
                            l = a.clientSelection,
                            c = a.movementMode,
                            u = r()
                          'DROP_ANIMATING' === u.phase && n(St({ completed: u.completed })),
                            'IDLE' !== r().phase && L(!1),
                            n({ type: 'FLUSH', payload: null }),
                            n({ type: 'BEFORE_INITIAL_CAPTURE', payload: { draggableId: o, movementMode: c } })
                          var d = { draggableId: o, scrollOptions: { shouldPublishImmediately: 'SNAP' === c } },
                            s = e.startPublishing(d),
                            p = s.critical,
                            f = s.dimensions,
                            g = s.viewport
                          n({
                            type: 'INITIAL_PUBLISH',
                            payload: { critical: p, dimensions: f, clientSelection: l, movementMode: c, viewport: g },
                          })
                        } else t(i)
                      }
                    }
                  }
                })(r),
                qt,
                er,
                tr,
                rr,
                (function (e) {
                  return function (t) {
                    return function (r) {
                      return function (n) {
                        if (
                          (function (e) {
                            return 'DROP_COMPLETE' === e.type || 'DROP_ANIMATE' === e.type || 'FLUSH' === e.type
                          })(n)
                        )
                          return e.stop(), void r(n)
                        if ('INITIAL_PUBLISH' === n.type) {
                          r(n)
                          var i = t.getState()
                          return 'DRAGGING' !== i.phase && L(!1), void e.start(i)
                        }
                        r(n), e.scroll(t.getState())
                      }
                    }
                  }
                })(c),
                Jt,
                (function (e) {
                  var t = !1
                  return function () {
                    return function (r) {
                      return function (n) {
                        if ('INITIAL_PUBLISH' === n.type)
                          return (
                            (t = !0),
                            e.tryRecordFocus(n.payload.critical.draggable.id),
                            r(n),
                            void e.tryRestoreFocusRecorded()
                          )
                        if ((r(n), t)) {
                          if ('FLUSH' === n.type) return (t = !1), void e.tryRestoreFocusRecorded()
                          if ('DROP_COMPLETE' === n.type) {
                            t = !1
                            var i = n.payload.completed.result
                            i.combine && e.tryShiftRecord(i.draggableId, i.combine.draggableId),
                              e.tryRestoreFocusRecorded()
                          }
                        }
                      }
                    }
                  }
                })(n),
                $t(a, o),
              ),
            ),
          )
        }
      var ar = function (e) {
          var t = e.scrollHeight,
            r = e.scrollWidth,
            n = e.height,
            i = e.width,
            a = q({ x: r, y: t }, { x: i, y: n })
          return { x: Math.max(0, a.x), y: Math.max(0, a.y) }
        },
        or = function () {
          var e = document.documentElement
          return e || L(!1), e
        },
        lr = function () {
          var e = or()
          return ar({
            scrollHeight: e.scrollHeight,
            scrollWidth: e.scrollWidth,
            width: e.clientWidth,
            height: e.clientHeight,
          })
        },
        cr = function (e) {
          var t = e.critical,
            r = e.scrollOptions,
            n = e.registry
          ft()
          var i,
            a,
            o,
            l,
            c,
            u,
            d,
            s =
              ((i = zt()),
              (a = lr()),
              (o = i.y),
              (l = i.x),
              (c = or()),
              (u = c.clientWidth),
              (d = c.clientHeight),
              {
                frame: f({ top: o, left: l, right: l + u, bottom: o + d }),
                scroll: { initial: i, current: i, max: a, diff: { value: H, displacement: H } },
              }),
            p = s.scroll.current,
            g = t.droppable,
            b = n.droppable.getAllByType(g.type).map(function (e) {
              return e.callbacks.getDimensionAndWatchScroll(p, r)
            }),
            v = n.draggable.getAllByType(t.draggable.type).map(function (e) {
              return e.getDimension(p)
            }),
            m = { draggables: ce(v), droppables: le(b) }
          return gt(), { dimensions: m, critical: t, viewport: s }
        }
      function ur(e, t, r) {
        return (
          r.descriptor.id !== t.id &&
          r.descriptor.type === t.type &&
          'virtual' === e.droppable.getById(r.descriptor.droppableId).descriptor.mode
        )
      }
      var dr,
        sr,
        pr = function (e, t) {
          var r = null,
            n = (function (e) {
              var t = e.registry,
                r = e.callbacks,
                n = { additions: {}, removals: {}, modified: {} },
                i = null,
                a = function () {
                  i ||
                    (r.collectionStarting(),
                    (i = requestAnimationFrame(function () {
                      ;(i = null), ft()
                      var e = n,
                        a = e.additions,
                        o = e.removals,
                        l = e.modified,
                        c = Object.keys(a)
                          .map(function (e) {
                            return t.draggable.getById(e).getDimension(H)
                          })
                          .sort(function (e, t) {
                            return e.descriptor.index - t.descriptor.index
                          }),
                        u = Object.keys(l).map(function (e) {
                          return { droppableId: e, scroll: t.droppable.getById(e).callbacks.getScrollWhileDragging() }
                        }),
                        d = { additions: c, removals: Object.keys(o), modified: u }
                      ;(n = { additions: {}, removals: {}, modified: {} }), gt(), r.publish(d)
                    })))
                }
              return {
                add: function (e) {
                  var t = e.descriptor.id
                  ;(n.additions[t] = e),
                    (n.modified[e.descriptor.droppableId] = !0),
                    n.removals[t] && delete n.removals[t],
                    a()
                },
                remove: function (e) {
                  var t = e.descriptor
                  ;(n.removals[t.id] = !0),
                    (n.modified[t.droppableId] = !0),
                    n.additions[t.id] && delete n.additions[t.id],
                    a()
                },
                stop: function () {
                  i && (cancelAnimationFrame(i), (i = null), (n = { additions: {}, removals: {}, modified: {} }))
                },
              }
            })({
              callbacks: { publish: t.publishWhileDragging, collectionStarting: t.collectionStarting },
              registry: e,
            }),
            i = function (t) {
              r || L(!1)
              var i = r.critical.draggable
              'ADDITION' === t.type && ur(e, i, t.value) && n.add(t.value),
                'REMOVAL' === t.type && ur(e, i, t.value) && n.remove(t.value)
            }
          return {
            updateDroppableIsEnabled: function (n, i) {
              e.droppable.exists(n) || L(!1), r && t.updateDroppableIsEnabled({ id: n, isEnabled: i })
            },
            updateDroppableIsCombineEnabled: function (n, i) {
              r && (e.droppable.exists(n) || L(!1), t.updateDroppableIsCombineEnabled({ id: n, isCombineEnabled: i }))
            },
            scrollDroppable: function (t, n) {
              r && e.droppable.getById(t).callbacks.scroll(n)
            },
            updateDroppableScroll: function (n, i) {
              r && (e.droppable.exists(n) || L(!1), t.updateDroppableScroll({ id: n, newScroll: i }))
            },
            startPublishing: function (t) {
              r && L(!1)
              var n = e.draggable.getById(t.draggableId),
                a = e.droppable.getById(n.descriptor.droppableId),
                o = { draggable: n.descriptor, droppable: a.descriptor },
                l = e.subscribe(i)
              return (
                (r = { critical: o, unsubscribe: l }), cr({ critical: o, registry: e, scrollOptions: t.scrollOptions })
              )
            },
            stopPublishing: function () {
              if (r) {
                n.stop()
                var t = r.critical.droppable
                e.droppable.getAllByType(t.type).forEach(function (e) {
                  return e.callbacks.dragStopped()
                }),
                  r.unsubscribe(),
                  (r = null)
              }
            },
          }
        },
        fr = function (e, t) {
          return (
            'IDLE' === e.phase ||
            ('DROP_ANIMATING' === e.phase &&
              e.completed.result.draggableId !== t &&
              'DROP' === e.completed.result.reason)
          )
        },
        gr = function (e) {
          window.scrollBy(e.x, e.y)
        },
        br = w(function (e) {
          return ue(e).filter(function (e) {
            return !!e.isEnabled && !!e.frame
          })
        }),
        vr = function (e) {
          var t = e.center,
            r = e.destination,
            n = e.droppables
          if (r) {
            var i = n[r]
            return i.frame ? i : null
          }
          return (function (e, t) {
            return ae(br(t), function (t) {
              return t.frame || L(!1), tt(t.frame.pageMarginBox)(e)
            })
          })(t, n)
        },
        mr = 0.25,
        hr = 0.05,
        yr = 28,
        Ir = function (e) {
          return Math.pow(e, 2)
        },
        Dr = { stopDampeningAt: 1200, accelerateAt: 360 },
        xr = function (e) {
          var t = e.startOfRange,
            r = e.endOfRange,
            n = e.current,
            i = r - t
          return 0 === i ? 0 : (n - t) / i
        },
        Er = Dr.accelerateAt,
        wr = Dr.stopDampeningAt,
        Or = function (e) {
          var t = e.distanceToEdge,
            r = e.thresholds,
            n = e.dragStartTime,
            i = e.shouldUseTimeDampening,
            a = (function (e, t) {
              if (e > t.startScrollingFrom) return 0
              if (e <= t.maxScrollValueAt) return yr
              if (e === t.startScrollingFrom) return 1
              var r = xr({ startOfRange: t.maxScrollValueAt, endOfRange: t.startScrollingFrom, current: e }),
                n = yr * Ir(1 - r)
              return Math.ceil(n)
            })(t, r)
          return 0 === a
            ? 0
            : i
            ? Math.max(
                (function (e, t) {
                  var r = t,
                    n = wr,
                    i = Date.now() - r
                  if (i >= wr) return e
                  if (i < Er) return 1
                  var a = xr({ startOfRange: Er, endOfRange: n, current: i }),
                    o = e * Ir(a)
                  return Math.ceil(o)
                })(a, n),
                1,
              )
            : a
        },
        Cr = function (e) {
          var t = e.container,
            r = e.distanceToEdges,
            n = e.dragStartTime,
            i = e.axis,
            a = e.shouldUseTimeDampening,
            o = (function (e, t) {
              return { startScrollingFrom: e[t.size] * mr, maxScrollValueAt: e[t.size] * hr }
            })(t, i)
          return r[i.end] < r[i.start]
            ? Or({ distanceToEdge: r[i.end], thresholds: o, dragStartTime: n, shouldUseTimeDampening: a })
            : -1 * Or({ distanceToEdge: r[i.start], thresholds: o, dragStartTime: n, shouldUseTimeDampening: a })
        },
        Ar = Z(function (e) {
          return 0 === e ? 0 : e
        }),
        Br = function (e) {
          var t = e.dragStartTime,
            r = e.container,
            n = e.subject,
            i = e.center,
            a = e.shouldUseTimeDampening,
            o = { top: i.y - r.top, right: r.right - i.x, bottom: r.bottom - i.y, left: i.x - r.left },
            l = Cr({ container: r, distanceToEdges: o, dragStartTime: t, axis: xe, shouldUseTimeDampening: a }),
            c = Cr({ container: r, distanceToEdges: o, dragStartTime: t, axis: Ee, shouldUseTimeDampening: a }),
            u = Ar({ x: c, y: l })
          if (z(u, H)) return null
          var d = (function (e) {
            var t = e.container,
              r = e.subject,
              n = e.proposedScroll,
              i = r.height > t.height,
              a = r.width > t.width
            return a || i ? (a && i ? null : { x: a ? 0 : n.x, y: i ? 0 : n.y }) : n
          })({ container: r, subject: n, proposedScroll: u })
          return d ? (z(d, H) ? null : d) : null
        },
        Rr = Z(function (e) {
          return 0 === e ? 0 : e > 0 ? 1 : -1
        }),
        Nr =
          ((dr = function (e, t) {
            return e < 0 ? e : e > t ? e - t : 0
          }),
          function (e) {
            var t = e.current,
              r = e.max,
              n = e.change,
              i = V(t, n),
              a = { x: dr(i.x, r.x), y: dr(i.y, r.y) }
            return z(a, H) ? null : a
          }),
        Sr = function (e) {
          var t = e.max,
            r = e.current,
            n = e.change,
            i = { x: Math.max(r.x, t.x), y: Math.max(r.y, t.y) },
            a = Rr(n),
            o = Nr({ max: i, current: r, change: a })
          return !o || (0 !== a.x && 0 === o.x) || (0 !== a.y && 0 === o.y)
        },
        Pr = function (e, t) {
          return Sr({ current: e.scroll.current, max: e.scroll.max, change: t })
        },
        Lr = function (e, t) {
          var r = e.frame
          return !!r && Sr({ current: r.scroll.current, max: r.scroll.max, change: t })
        },
        Tr = function (e) {
          var t = e.state,
            r = e.dragStartTime,
            n = e.shouldUseTimeDampening,
            i = e.scrollWindow,
            a = e.scrollDroppable,
            o = t.current.page.borderBoxCenter,
            l = t.dimensions.draggables[t.critical.draggable.id].page.marginBox
          if (t.isWindowScrollAllowed) {
            var c = (function (e) {
              var t = e.viewport,
                r = e.subject,
                n = e.center,
                i = e.dragStartTime,
                a = e.shouldUseTimeDampening,
                o = Br({ dragStartTime: i, container: t.frame, subject: r, center: n, shouldUseTimeDampening: a })
              return o && Pr(t, o) ? o : null
            })({ dragStartTime: r, viewport: t.viewport, subject: l, center: o, shouldUseTimeDampening: n })
            if (c) return void i(c)
          }
          var u = vr({ center: o, destination: Qe(t.impact), droppables: t.dimensions.droppables })
          if (u) {
            var d = (function (e) {
              var t = e.droppable,
                r = e.subject,
                n = e.center,
                i = e.dragStartTime,
                a = e.shouldUseTimeDampening,
                o = t.frame
              if (!o) return null
              var l = Br({
                dragStartTime: i,
                container: o.pageMarginBox,
                subject: r,
                center: n,
                shouldUseTimeDampening: a,
              })
              return l && Lr(t, l) ? l : null
            })({ dragStartTime: r, droppable: u, subject: l, center: o, shouldUseTimeDampening: n })
            d && a(u.descriptor.id, d)
          }
        },
        Gr = function (e) {
          var t = e.move,
            r = e.scrollDroppable,
            n = e.scrollWindow,
            i = function (e, t) {
              if (!Lr(e, t)) return t
              var n = (function (e, t) {
                var r = e.frame
                return r && Lr(e, t) ? Nr({ current: r.scroll.current, max: r.scroll.max, change: t }) : null
              })(e, t)
              if (!n) return r(e.descriptor.id, t), null
              var i = q(t, n)
              return r(e.descriptor.id, i), q(t, i)
            },
            a = function (e, t, r) {
              if (!e) return r
              if (!Pr(t, r)) return r
              var i = (function (e, t) {
                if (!Pr(e, t)) return null
                var r = e.scroll.max,
                  n = e.scroll.current
                return Nr({ current: n, max: r, change: t })
              })(t, r)
              if (!i) return n(r), null
              var a = q(r, i)
              return n(a), q(r, a)
            }
          return function (e) {
            var r = e.scrollJumpRequest
            if (r) {
              var n = Qe(e.impact)
              n || L(!1)
              var o = i(e.dimensions.droppables[n], r)
              if (o) {
                var l = e.viewport,
                  c = a(e.isWindowScrollAllowed, l, o)
                c &&
                  (function (e, r) {
                    var n = V(e.current.client.selection, r)
                    t({ client: n })
                  })(e, c)
              }
            }
          }
        },
        Mr = function (e) {
          var t = e.scrollDroppable,
            r = e.scrollWindow,
            n = e.move,
            i = (function (e) {
              var t = e.scrollWindow,
                r = e.scrollDroppable,
                n = O(t),
                i = O(r),
                a = null,
                o = function (e) {
                  a || L(!1)
                  var t = a,
                    r = t.shouldUseTimeDampening,
                    o = t.dragStartTime
                  Tr({ state: e, scrollWindow: n, scrollDroppable: i, dragStartTime: o, shouldUseTimeDampening: r })
                }
              return {
                start: function (e) {
                  ft(), a && L(!1)
                  var t = Date.now(),
                    r = !1,
                    n = function () {
                      r = !0
                    }
                  Tr({ state: e, dragStartTime: 0, shouldUseTimeDampening: !1, scrollWindow: n, scrollDroppable: n }),
                    (a = { dragStartTime: t, shouldUseTimeDampening: r }),
                    gt(),
                    r && o(e)
                },
                stop: function () {
                  a && (n.cancel(), i.cancel(), (a = null))
                },
                scroll: o,
              }
            })({ scrollWindow: r, scrollDroppable: t }),
            a = Gr({ move: n, scrollWindow: r, scrollDroppable: t })
          return {
            scroll: function (e) {
              'DRAGGING' === e.phase && ('FLUID' !== e.movementMode ? e.scrollJumpRequest && a(e) : i.scroll(e))
            },
            start: i.start,
            stop: i.stop,
          }
        },
        jr = { base: (sr = 'data-rbd-drag-handle'), draggableId: sr + '-draggable-id', contextId: sr + '-context-id' },
        _r = (function () {
          var e = 'data-rbd-draggable'
          return { base: e, contextId: e + '-context-id', id: e + '-id' }
        })(),
        Fr = (function () {
          var e = 'data-rbd-droppable'
          return { base: e, contextId: e + '-context-id', id: e + '-id' }
        })(),
        kr = { contextId: 'data-rbd-scroll-container-context-id' },
        Wr = function (e, t) {
          return e
            .map(function (e) {
              var r = e.styles[t]
              return r ? e.selector + ' { ' + r + ' }' : ''
            })
            .join(' ')
        },
        Ur =
          'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement
            ? n.useLayoutEffect
            : n.useEffect,
        Hr = function () {
          var e = document.querySelector('head')
          return e || L(!1), e
        },
        Vr = function (e) {
          var t = document.createElement('style')
          return e && t.setAttribute('nonce', e), (t.type = 'text/css'), t
        }
      function qr(e, t) {
        var r = d(
            function () {
              return (function (e) {
                var t,
                  r,
                  n,
                  i =
                    ((t = e),
                    function (e) {
                      return '[' + e + '="' + t + '"]'
                    }),
                  a =
                    ((r = '\n      cursor: -webkit-grab;\n      cursor: grab;\n    '),
                    {
                      selector: i(jr.contextId),
                      styles: {
                        always:
                          '\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ',
                        resting: r,
                        dragging: 'pointer-events: none;',
                        dropAnimating: r,
                      },
                    }),
                  o = [
                    ((n = '\n      transition: ' + _t.outOfTheWay + ';\n    '),
                    { selector: i(_r.contextId), styles: { dragging: n, dropAnimating: n, userCancel: n } }),
                    a,
                    { selector: i(Fr.contextId), styles: { always: 'overflow-anchor: none;' } },
                    {
                      selector: 'body',
                      styles: {
                        dragging:
                          '\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ',
                      },
                    },
                  ]
                return {
                  always: Wr(o, 'always'),
                  resting: Wr(o, 'resting'),
                  dragging: Wr(o, 'dragging'),
                  dropAnimating: Wr(o, 'dropAnimating'),
                  userCancel: Wr(o, 'userCancel'),
                }
              })(e)
            },
            [e],
          ),
          i = Object(n.useRef)(null),
          a = Object(n.useRef)(null),
          o = s(
            w(function (e) {
              var t = a.current
              t || L(!1), (t.textContent = e)
            }),
            [],
          ),
          l = s(function (e) {
            var t = i.current
            t || L(!1), (t.textContent = e)
          }, [])
        Ur(
          function () {
            ;(i.current || a.current) && L(!1)
            var n = Vr(t),
              c = Vr(t)
            return (
              (i.current = n),
              (a.current = c),
              n.setAttribute('data-rbd-always', e),
              c.setAttribute('data-rbd-dynamic', e),
              Hr().appendChild(n),
              Hr().appendChild(c),
              l(r.always),
              o(r.resting),
              function () {
                var e = function (e) {
                  var t = e.current
                  t || L(!1), Hr().removeChild(t), (e.current = null)
                }
                e(i), e(a)
              }
            )
          },
          [t, l, o, r.always, r.resting, e],
        )
        var c = s(
            function () {
              return o(r.dragging)
            },
            [o, r.dragging],
          ),
          u = s(
            function (e) {
              o('DROP' !== e ? r.userCancel : r.dropAnimating)
            },
            [o, r.dropAnimating, r.userCancel],
          ),
          p = s(
            function () {
              a.current && o(r.resting)
            },
            [o, r.resting],
          )
        return d(
          function () {
            return { dragging: c, dropping: u, resting: p }
          },
          [c, u, p],
        )
      }
      var zr = function (e) {
        return e && e.ownerDocument ? e.ownerDocument.defaultView : window
      }
      function Yr(e) {
        return e instanceof zr(e).HTMLElement
      }
      function Jr(e, t) {
        var r = '[' + jr.contextId + '="' + e + '"]',
          n = oe(document.querySelectorAll(r))
        if (!n.length) return null
        var i = ae(n, function (e) {
          return e.getAttribute(jr.draggableId) === t
        })
        return i && Yr(i) ? i : null
      }
      function Xr() {
        var e = { draggables: {}, droppables: {} },
          t = []
        function r(e) {
          t.length &&
            t.forEach(function (t) {
              return t(e)
            })
        }
        function n(t) {
          return e.draggables[t] || null
        }
        function i(t) {
          return e.droppables[t] || null
        }
        return {
          draggable: {
            register: function (t) {
              ;(e.draggables[t.descriptor.id] = t), r({ type: 'ADDITION', value: t })
            },
            update: function (t, r) {
              var n = e.draggables[r.descriptor.id]
              n &&
                n.uniqueId === t.uniqueId &&
                (delete e.draggables[r.descriptor.id], (e.draggables[t.descriptor.id] = t))
            },
            unregister: function (t) {
              var i = t.descriptor.id,
                a = n(i)
              a && t.uniqueId === a.uniqueId && (delete e.draggables[i], r({ type: 'REMOVAL', value: t }))
            },
            getById: function (e) {
              var t = n(e)
              return t || L(!1), t
            },
            findById: n,
            exists: function (e) {
              return Boolean(n(e))
            },
            getAllByType: function (t) {
              return ne(e.draggables).filter(function (e) {
                return e.descriptor.type === t
              })
            },
          },
          droppable: {
            register: function (t) {
              e.droppables[t.descriptor.id] = t
            },
            unregister: function (t) {
              var r = i(t.descriptor.id)
              r && t.uniqueId === r.uniqueId && delete e.droppables[t.descriptor.id]
            },
            getById: function (e) {
              var t = i(e)
              return t || L(!1), t
            },
            findById: i,
            exists: function (e) {
              return Boolean(i(e))
            },
            getAllByType: function (t) {
              return ne(e.droppables).filter(function (e) {
                return e.descriptor.type === t
              })
            },
          },
          subscribe: function (e) {
            return (
              t.push(e),
              function () {
                var r = t.indexOf(e)
                ;-1 !== r && t.splice(r, 1)
              }
            )
          },
          clean: function () {
            ;(e.draggables = {}), (e.droppables = {}), (t.length = 0)
          },
        }
      }
      var Kr = i.a.createContext(null),
        Zr = function () {
          var e = document.body
          return e || L(!1), e
        },
        Qr = {
          position: 'absolute',
          width: '1px',
          height: '1px',
          margin: '-1px',
          border: '0',
          padding: '0',
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          'clip-path': 'inset(100%)',
        }
      var $r = 0,
        en = { separator: '::' }
      function tn(e, t) {
        return (
          void 0 === t && (t = en),
          d(
            function () {
              return '' + e + t.separator + $r++
            },
            [t.separator, e],
          )
        )
      }
      var rn = i.a.createContext(null)
      function nn(e) {
        0
      }
      function an(e, t) {
        nn()
      }
      function on() {
        an()
      }
      function ln(e) {
        var t = Object(n.useRef)(e)
        return (
          Object(n.useEffect)(function () {
            t.current = e
          }),
          t
        )
      }
      var cn,
        un = (((cn = {})[13] = !0), (cn[9] = !0), cn),
        dn = function (e) {
          un[e.keyCode] && e.preventDefault()
        },
        sn = (function () {
          var e = 'visibilitychange'
          return 'undefined' == typeof document
            ? e
            : ae([e, 'ms' + e, 'webkit' + e, 'moz' + e, 'o' + e], function (e) {
                return 'on' + e in document
              }) || e
        })()
      var pn,
        fn = { type: 'IDLE' }
      function gn(e) {
        var t = e.cancel,
          r = e.completed,
          n = e.getPhase,
          i = e.setPhase
        return [
          {
            eventName: 'mousemove',
            fn: function (e) {
              var t = e.button,
                r = e.clientX,
                a = e.clientY
              if (0 === t) {
                var o = { x: r, y: a },
                  l = n()
                if ('DRAGGING' === l.type) return e.preventDefault(), void l.actions.move(o)
                'PENDING' !== l.type && L(!1)
                var c = l.point
                if (((u = c), (d = o), Math.abs(d.x - u.x) >= 5 || Math.abs(d.y - u.y) >= 5)) {
                  var u, d
                  e.preventDefault()
                  var s = l.actions.fluidLift(o)
                  i({ type: 'DRAGGING', actions: s })
                }
              }
            },
          },
          {
            eventName: 'mouseup',
            fn: function (e) {
              var i = n()
              'DRAGGING' === i.type ? (e.preventDefault(), i.actions.drop({ shouldBlockNextClick: !0 }), r()) : t()
            },
          },
          {
            eventName: 'mousedown',
            fn: function (e) {
              'DRAGGING' === n().type && e.preventDefault(), t()
            },
          },
          {
            eventName: 'keydown',
            fn: function (e) {
              if ('PENDING' !== n().type) return 27 === e.keyCode ? (e.preventDefault(), void t()) : void dn(e)
              t()
            },
          },
          { eventName: 'resize', fn: t },
          {
            eventName: 'scroll',
            options: { passive: !0, capture: !1 },
            fn: function () {
              'PENDING' === n().type && t()
            },
          },
          {
            eventName: 'webkitmouseforcedown',
            fn: function (e) {
              var r = n()
              'IDLE' === r.type && L(!1), r.actions.shouldRespectForcePress() ? t() : e.preventDefault()
            },
          },
          { eventName: sn, fn: t },
        ]
      }
      function bn() {}
      var vn = (((pn = {})[34] = !0), (pn[33] = !0), (pn[36] = !0), (pn[35] = !0), pn)
      function mn(e, t) {
        function r() {
          t(), e.cancel()
        }
        return [
          {
            eventName: 'keydown',
            fn: function (n) {
              return 27 === n.keyCode
                ? (n.preventDefault(), void r())
                : 32 === n.keyCode
                ? (n.preventDefault(), t(), void e.drop())
                : 40 === n.keyCode
                ? (n.preventDefault(), void e.moveDown())
                : 38 === n.keyCode
                ? (n.preventDefault(), void e.moveUp())
                : 39 === n.keyCode
                ? (n.preventDefault(), void e.moveRight())
                : 37 === n.keyCode
                ? (n.preventDefault(), void e.moveLeft())
                : void (vn[n.keyCode] ? n.preventDefault() : dn(n))
            },
          },
          { eventName: 'mousedown', fn: r },
          { eventName: 'mouseup', fn: r },
          { eventName: 'click', fn: r },
          { eventName: 'touchstart', fn: r },
          { eventName: 'resize', fn: r },
          { eventName: 'wheel', fn: r, options: { passive: !0 } },
          { eventName: sn, fn: r },
        ]
      }
      var hn = { type: 'IDLE' }
      var yn = { input: !0, button: !0, textarea: !0, select: !0, option: !0, optgroup: !0, video: !0, audio: !0 }
      function In(e, t) {
        if (null == t) return !1
        if (Boolean(yn[t.tagName.toLowerCase()])) return !0
        var r = t.getAttribute('contenteditable')
        return 'true' === r || '' === r || (t !== e && In(e, t.parentElement))
      }
      function Dn(e, t) {
        var r = t.target
        return !!Yr(r) && In(e, r)
      }
      var xn = function (e) {
        return f(e.getBoundingClientRect()).center
      }
      var En = (function () {
        var e = 'matches'
        return 'undefined' == typeof document
          ? e
          : ae([e, 'msMatchesSelector', 'webkitMatchesSelector'], function (e) {
              return e in Element.prototype
            }) || e
      })()
      function wn(e, t) {
        return null == e ? null : e[En](t) ? e : wn(e.parentElement, t)
      }
      function On(e, t) {
        return e.closest ? e.closest(t) : wn(e, t)
      }
      function Cn(e, t) {
        var r,
          n = t.target
        if (!((r = n) instanceof zr(r).Element)) return null
        var i = On(
          n,
          (function (e) {
            return '[' + jr.contextId + '="' + e + '"]'
          })(e),
        )
        return i && Yr(i) ? i : null
      }
      function An(e) {
        e.preventDefault()
      }
      function Bn(e) {
        var t = e.expected,
          r = e.phase,
          n = e.isLockActive
        e.shouldWarn
        return !!n() && t === r
      }
      function Rn(e) {
        var t = e.lockAPI,
          r = e.store,
          n = e.registry,
          i = e.draggableId
        if (t.isClaimed()) return !1
        var a = n.draggable.findById(i)
        return !!a && !!a.options.isEnabled && !!fr(r.getState(), i)
      }
      function Nn(e) {
        var t = e.lockAPI,
          r = e.contextId,
          n = e.store,
          i = e.registry,
          a = e.draggableId,
          l = e.forceSensorStop,
          c = e.sourceEvent
        if (!Rn({ lockAPI: t, store: n, registry: i, draggableId: a })) return null
        var u = i.draggable.getById(a),
          d = (function (e, t) {
            var r = '[' + _r.contextId + '="' + e + '"]',
              n = ae(oe(document.querySelectorAll(r)), function (e) {
                return e.getAttribute(_r.id) === t
              })
            return n && Yr(n) ? n : null
          })(r, u.descriptor.id)
        if (!d) return null
        if (c && !u.options.canDragInteractiveElements && Dn(d, c)) return null
        var s = t.claim(l || R),
          p = 'PRE_DRAG'
        function f() {
          return u.options.shouldRespectForcePress
        }
        function g() {
          return t.isActive(s)
        }
        var b = function (e, t) {
          Bn({ expected: e, phase: p, isLockActive: g, shouldWarn: !0 }) && n.dispatch(t())
        }.bind(null, 'DRAGGING')
        function v(e) {
          function r() {
            t.release(), (p = 'COMPLETED')
          }
          function i(t, i) {
            if ((void 0 === i && (i = { shouldBlockNextClick: !1 }), e.cleanup(), i.shouldBlockNextClick)) {
              var a = N(window, [{ eventName: 'click', fn: An, options: { once: !0, passive: !1, capture: !0 } }])
              setTimeout(a)
            }
            r(), n.dispatch(Pt({ reason: t }))
          }
          return (
            'PRE_DRAG' !== p && (r(), 'PRE_DRAG' !== p && L(!1)),
            n.dispatch(
              (function (e) {
                return { type: 'LIFT', payload: e }
              })(e.liftActionArgs),
            ),
            (p = 'DRAGGING'),
            Object(o.a)(
              {
                isActive: function () {
                  return Bn({ expected: 'DRAGGING', phase: p, isLockActive: g, shouldWarn: !1 })
                },
                shouldRespectForcePress: f,
                drop: function (e) {
                  return i('DROP', e)
                },
                cancel: function (e) {
                  return i('CANCEL', e)
                },
              },
              e.actions,
            )
          )
        }
        return {
          isActive: function () {
            return Bn({ expected: 'PRE_DRAG', phase: p, isLockActive: g, shouldWarn: !1 })
          },
          shouldRespectForcePress: f,
          fluidLift: function (e) {
            var t = O(function (e) {
                b(function () {
                  return Ct({ client: e })
                })
              }),
              r = v({
                liftActionArgs: { id: a, clientSelection: e, movementMode: 'FLUID' },
                cleanup: function () {
                  return t.cancel()
                },
                actions: { move: t },
              })
            return Object(o.a)({}, r, { move: t })
          },
          snapLift: function () {
            var e = {
              moveUp: function () {
                return b(At)
              },
              moveRight: function () {
                return b(Rt)
              },
              moveDown: function () {
                return b(Bt)
              },
              moveLeft: function () {
                return b(Nt)
              },
            }
            return v({
              liftActionArgs: { id: a, clientSelection: xn(d), movementMode: 'SNAP' },
              cleanup: R,
              actions: e,
            })
          },
          abort: function () {
            Bn({ expected: 'PRE_DRAG', phase: p, isLockActive: g, shouldWarn: !0 }) && t.release()
          },
        }
      }
      var Sn = [
        function (e) {
          var t = Object(n.useRef)(fn),
            r = Object(n.useRef)(R),
            i = d(
              function () {
                return {
                  eventName: 'mousedown',
                  fn: function (t) {
                    if (!t.defaultPrevented && 0 === t.button && !(t.ctrlKey || t.metaKey || t.shiftKey || t.altKey)) {
                      var n = e.findClosestDraggableId(t)
                      if (n) {
                        var i = e.tryGetLock(n, l, { sourceEvent: t })
                        if (i) {
                          t.preventDefault()
                          var a = { x: t.clientX, y: t.clientY }
                          r.current(), p(i, a)
                        }
                      }
                    }
                  },
                }
              },
              [e],
            ),
            a = d(
              function () {
                return {
                  eventName: 'webkitmouseforcewillbegin',
                  fn: function (t) {
                    if (!t.defaultPrevented) {
                      var r = e.findClosestDraggableId(t)
                      if (r) {
                        var n = e.findOptionsForDraggable(r)
                        n && (n.shouldRespectForcePress || (e.canGetLock(r) && t.preventDefault()))
                      }
                    }
                  },
                }
              },
              [e],
            ),
            o = s(
              function () {
                r.current = N(window, [a, i], { passive: !1, capture: !0 })
              },
              [a, i],
            ),
            l = s(
              function () {
                'IDLE' !== t.current.type && ((t.current = fn), r.current(), o())
              },
              [o],
            ),
            c = s(
              function () {
                var e = t.current
                l(),
                  'DRAGGING' === e.type && e.actions.cancel({ shouldBlockNextClick: !0 }),
                  'PENDING' === e.type && e.actions.abort()
              },
              [l],
            ),
            u = s(
              function () {
                var e = gn({
                  cancel: c,
                  completed: l,
                  getPhase: function () {
                    return t.current
                  },
                  setPhase: function (e) {
                    t.current = e
                  },
                })
                r.current = N(window, e, { capture: !0, passive: !1 })
              },
              [c, l],
            ),
            p = s(
              function (e, r) {
                'IDLE' !== t.current.type && L(!1), (t.current = { type: 'PENDING', point: r, actions: e }), u()
              },
              [u],
            )
          Ur(
            function () {
              return (
                o(),
                function () {
                  r.current()
                }
              )
            },
            [o],
          )
        },
        function (e) {
          var t = Object(n.useRef)(bn),
            r = d(
              function () {
                return {
                  eventName: 'keydown',
                  fn: function (r) {
                    if (!r.defaultPrevented && 32 === r.keyCode) {
                      var n = e.findClosestDraggableId(r)
                      if (n) {
                        var a = e.tryGetLock(n, c, { sourceEvent: r })
                        if (a) {
                          r.preventDefault()
                          var o = !0,
                            l = a.snapLift()
                          t.current(), (t.current = N(window, mn(l, c), { capture: !0, passive: !1 }))
                        }
                      }
                    }
                    function c() {
                      o || L(!1), (o = !1), t.current(), i()
                    }
                  },
                }
              },
              [e],
            ),
            i = s(
              function () {
                t.current = N(window, [r], { passive: !1, capture: !0 })
              },
              [r],
            )
          Ur(
            function () {
              return (
                i(),
                function () {
                  t.current()
                }
              )
            },
            [i],
          )
        },
        function (e) {
          var t = Object(n.useRef)(hn),
            r = Object(n.useRef)(R),
            i = s(function () {
              return t.current
            }, []),
            a = s(function (e) {
              t.current = e
            }, []),
            o = d(
              function () {
                return {
                  eventName: 'touchstart',
                  fn: function (t) {
                    if (!t.defaultPrevented) {
                      var n = e.findClosestDraggableId(t)
                      if (n) {
                        var i = e.tryGetLock(n, c, { sourceEvent: t })
                        if (i) {
                          var a = t.touches[0],
                            o = { x: a.clientX, y: a.clientY }
                          r.current(), g(i, o)
                        }
                      }
                    }
                  },
                }
              },
              [e],
            ),
            l = s(
              function () {
                r.current = N(window, [o], { capture: !0, passive: !1 })
              },
              [o],
            ),
            c = s(
              function () {
                var e = t.current
                'IDLE' !== e.type && ('PENDING' === e.type && clearTimeout(e.longPressTimerId), a(hn), r.current(), l())
              },
              [l, a],
            ),
            u = s(
              function () {
                var e = t.current
                c(),
                  'DRAGGING' === e.type && e.actions.cancel({ shouldBlockNextClick: !0 }),
                  'PENDING' === e.type && e.actions.abort()
              },
              [c],
            ),
            p = s(
              function () {
                var e = { capture: !0, passive: !1 },
                  t = { cancel: u, completed: c, getPhase: i },
                  n = N(
                    window,
                    (function (e) {
                      var t = e.cancel,
                        r = e.completed,
                        n = e.getPhase
                      return [
                        {
                          eventName: 'touchmove',
                          options: { capture: !1 },
                          fn: function (e) {
                            var r = n()
                            if ('DRAGGING' === r.type) {
                              r.hasMoved = !0
                              var i = e.touches[0],
                                a = { x: i.clientX, y: i.clientY }
                              e.preventDefault(), r.actions.move(a)
                            } else t()
                          },
                        },
                        {
                          eventName: 'touchend',
                          fn: function (e) {
                            var i = n()
                            'DRAGGING' === i.type
                              ? (e.preventDefault(), i.actions.drop({ shouldBlockNextClick: !0 }), r())
                              : t()
                          },
                        },
                        {
                          eventName: 'touchcancel',
                          fn: function (e) {
                            'DRAGGING' === n().type ? (e.preventDefault(), t()) : t()
                          },
                        },
                        {
                          eventName: 'touchforcechange',
                          fn: function (e) {
                            var r = n()
                            'IDLE' === r.type && L(!1)
                            var i = e.touches[0]
                            if (i && i.force >= 0.15) {
                              var a = r.actions.shouldRespectForcePress()
                              if ('PENDING' !== r.type)
                                return a ? (r.hasMoved ? void e.preventDefault() : void t()) : void e.preventDefault()
                              a && t()
                            }
                          },
                        },
                        { eventName: sn, fn: t },
                      ]
                    })(t),
                    e,
                  ),
                  a = N(
                    window,
                    (function (e) {
                      var t = e.cancel,
                        r = e.getPhase
                      return [
                        { eventName: 'orientationchange', fn: t },
                        { eventName: 'resize', fn: t },
                        {
                          eventName: 'contextmenu',
                          fn: function (e) {
                            e.preventDefault()
                          },
                        },
                        {
                          eventName: 'keydown',
                          fn: function (e) {
                            'DRAGGING' === r().type ? (27 === e.keyCode && e.preventDefault(), t()) : t()
                          },
                        },
                        { eventName: sn, fn: t },
                      ]
                    })(t),
                    e,
                  )
                r.current = function () {
                  n(), a()
                }
              },
              [u, i, c],
            ),
            f = s(
              function () {
                var e = i()
                'PENDING' !== e.type && L(!1)
                var t = e.actions.fluidLift(e.point)
                a({ type: 'DRAGGING', actions: t, hasMoved: !1 })
              },
              [i, a],
            ),
            g = s(
              function (e, t) {
                'IDLE' !== i().type && L(!1)
                var r = setTimeout(f, 120)
                a({ type: 'PENDING', point: t, actions: e, longPressTimerId: r }), p()
              },
              [p, i, a, f],
            )
          Ur(
            function () {
              return (
                l(),
                function () {
                  r.current()
                  var e = i()
                  'PENDING' === e.type && (clearTimeout(e.longPressTimerId), a(hn))
                }
              )
            },
            [i, l, a],
          ),
            Ur(function () {
              return N(window, [{ eventName: 'touchmove', fn: function () {}, options: { capture: !1, passive: !1 } }])
            }, [])
        },
      ]
      function Pn(e) {
        var t = e.contextId,
          r = e.store,
          i = e.registry,
          a = e.customSensors,
          o = e.enableDefaultSensors,
          l = [].concat(o ? Sn : [], a || []),
          c = Object(n.useState)(function () {
            return (function () {
              var e = null
              function t() {
                e || L(!1), (e = null)
              }
              return {
                isClaimed: function () {
                  return Boolean(e)
                },
                isActive: function (t) {
                  return t === e
                },
                claim: function (t) {
                  e && L(!1)
                  var r = { abandon: t }
                  return (e = r), r
                },
                release: t,
                tryAbandon: function () {
                  e && (e.abandon(), t())
                },
              }
            })()
          })[0],
          u = s(
            function (e, t) {
              e.isDragging && !t.isDragging && c.tryAbandon()
            },
            [c],
          )
        Ur(
          function () {
            var e = r.getState()
            return r.subscribe(function () {
              var t = r.getState()
              u(e, t), (e = t)
            })
          },
          [c, r, u],
        ),
          Ur(
            function () {
              return c.tryAbandon
            },
            [c.tryAbandon],
          )
        var p = s(
            function (e) {
              return Rn({ lockAPI: c, registry: i, store: r, draggableId: e })
            },
            [c, i, r],
          ),
          f = s(
            function (e, n, a) {
              return Nn({
                lockAPI: c,
                registry: i,
                contextId: t,
                store: r,
                draggableId: e,
                forceSensorStop: n,
                sourceEvent: a && a.sourceEvent ? a.sourceEvent : null,
              })
            },
            [t, c, i, r],
          ),
          g = s(
            function (e) {
              return (function (e, t) {
                var r = Cn(e, t)
                return r ? r.getAttribute(jr.draggableId) : null
              })(t, e)
            },
            [t],
          ),
          b = s(
            function (e) {
              var t = i.draggable.findById(e)
              return t ? t.options : null
            },
            [i.draggable],
          ),
          v = s(
            function () {
              c.isClaimed() &&
                (c.tryAbandon(), 'IDLE' !== r.getState().phase && r.dispatch({ type: 'FLUSH', payload: null }))
            },
            [c, r],
          ),
          m = s(c.isClaimed, [c]),
          h = d(
            function () {
              return {
                canGetLock: p,
                tryGetLock: f,
                findClosestDraggableId: g,
                findOptionsForDraggable: b,
                tryReleaseLock: v,
                isLockClaimed: m,
              }
            },
            [p, f, g, b, v, m],
          )
        nn()
        for (var y = 0; y < l.length; y++) l[y](h)
      }
      function Ln(e) {
        return e.current || L(!1), e.current
      }
      function Tn(e) {
        var t = e.contextId,
          r = e.setCallbacks,
          a = e.sensors,
          u = e.nonce,
          p = e.dragHandleUsageInstructions,
          f = Object(n.useRef)(null)
        on()
        var g = ln(e),
          b = s(
            function () {
              return (function (e) {
                return {
                  onBeforeCapture: e.onBeforeCapture,
                  onBeforeDragStart: e.onBeforeDragStart,
                  onDragStart: e.onDragStart,
                  onDragEnd: e.onDragEnd,
                  onDragUpdate: e.onDragUpdate,
                }
              })(g.current)
            },
            [g],
          ),
          v = (function (e) {
            var t = d(
                function () {
                  return (function (e) {
                    return 'rbd-announcement-' + e
                  })(e)
                },
                [e],
              ),
              r = Object(n.useRef)(null)
            return (
              Object(n.useEffect)(
                function () {
                  var e = document.createElement('div')
                  return (
                    (r.current = e),
                    (e.id = t),
                    e.setAttribute('aria-live', 'assertive'),
                    e.setAttribute('aria-atomic', 'true'),
                    Object(o.a)(e.style, Qr),
                    Zr().appendChild(e),
                    function () {
                      setTimeout(function () {
                        var t = Zr()
                        t.contains(e) && t.removeChild(e), e === r.current && (r.current = null)
                      })
                    }
                  )
                },
                [t],
              ),
              s(function (e) {
                var t = r.current
                t && (t.textContent = e)
              }, [])
            )
          })(t),
          m = (function (e) {
            var t = e.contextId,
              r = e.text,
              i = tn('hidden-text', { separator: '-' }),
              a = d(
                function () {
                  return 'rbd-hidden-text-' + (e = { contextId: t, uniqueId: i }).contextId + '-' + e.uniqueId
                  var e
                },
                [i, t],
              )
            return (
              Object(n.useEffect)(
                function () {
                  var e = document.createElement('div')
                  return (
                    (e.id = a),
                    (e.textContent = r),
                    (e.style.display = 'none'),
                    Zr().appendChild(e),
                    function () {
                      var t = Zr()
                      t.contains(e) && t.removeChild(e)
                    }
                  )
                },
                [a, r],
              ),
              a
            )
          })({ contextId: t, text: p }),
          h = qr(t, u),
          y = s(function (e) {
            Ln(f).dispatch(e)
          }, []),
          I = d(
            function () {
              return Object(l.b)(
                {
                  publishWhileDragging: Dt,
                  updateDroppableScroll: Et,
                  updateDroppableIsEnabled: wt,
                  updateDroppableIsCombineEnabled: Ot,
                  collectionStarting: xt,
                },
                y,
              )
            },
            [y],
          ),
          D = (function () {
            var e = d(Xr, [])
            return (
              Object(n.useEffect)(
                function () {
                  return function () {
                    requestAnimationFrame(e.clean)
                  }
                },
                [e],
              ),
              e
            )
          })(),
          x = d(
            function () {
              return pr(D, I)
            },
            [D, I],
          ),
          E = d(
            function () {
              return Mr(
                Object(o.a)({ scrollWindow: gr, scrollDroppable: x.scrollDroppable }, Object(l.b)({ move: Ct }, y)),
              )
            },
            [x.scrollDroppable, y],
          ),
          w = (function (e) {
            var t = Object(n.useRef)({}),
              r = Object(n.useRef)(null),
              i = Object(n.useRef)(null),
              a = Object(n.useRef)(!1),
              o = s(function (e, r) {
                var n = { id: e, focus: r }
                return (
                  (t.current[e] = n),
                  function () {
                    var r = t.current
                    r[e] !== n && delete r[e]
                  }
                )
              }, []),
              l = s(
                function (t) {
                  var r = Jr(e, t)
                  r && r !== document.activeElement && r.focus()
                },
                [e],
              ),
              c = s(function (e, t) {
                r.current === e && (r.current = t)
              }, []),
              u = s(
                function () {
                  i.current ||
                    (a.current &&
                      (i.current = requestAnimationFrame(function () {
                        i.current = null
                        var e = r.current
                        e && l(e)
                      })))
                },
                [l],
              ),
              p = s(function (e) {
                r.current = null
                var t = document.activeElement
                t && t.getAttribute(jr.draggableId) === e && (r.current = e)
              }, [])
            return (
              Ur(function () {
                return (
                  (a.current = !0),
                  function () {
                    a.current = !1
                    var e = i.current
                    e && cancelAnimationFrame(e)
                  }
                )
              }, []),
              d(
                function () {
                  return { register: o, tryRecordFocus: p, tryRestoreFocusRecorded: u, tryShiftRecord: c }
                },
                [o, p, u, c],
              )
            )
          })(t),
          O = d(
            function () {
              return ir({
                announce: v,
                autoScroller: E,
                dimensionMarshal: x,
                focusMarshal: w,
                getResponders: b,
                styleMarshal: h,
              })
            },
            [v, E, x, w, b, h],
          )
        f.current = O
        var C = s(function () {
            var e = Ln(f)
            'IDLE' !== e.getState().phase && e.dispatch({ type: 'FLUSH', payload: null })
          }, []),
          A = s(function () {
            var e = Ln(f).getState()
            return e.isDragging || 'DROP_ANIMATING' === e.phase
          }, [])
        r(
          d(
            function () {
              return { isDragging: A, tryAbort: C }
            },
            [A, C],
          ),
        )
        var B = s(function (e) {
            return fr(Ln(f).getState(), e)
          }, []),
          R = s(function () {
            return et(Ln(f).getState())
          }, []),
          N = d(
            function () {
              return {
                marshal: x,
                focus: w,
                contextId: t,
                canLift: B,
                isMovementAllowed: R,
                dragHandleUsageInstructionsId: m,
                registry: D,
              }
            },
            [t, x, m, w, B, R, D],
          )
        return (
          Pn({
            contextId: t,
            store: O,
            registry: D,
            customSensors: a,
            enableDefaultSensors: !1 !== e.enableDefaultSensors,
          }),
          Object(n.useEffect)(
            function () {
              return C
            },
            [C],
          ),
          i.a.createElement(rn.Provider, { value: N }, i.a.createElement(c.a, { context: Kr, store: O }, e.children))
        )
      }
      var Gn = 0
      function Mn(e) {
        var t = d(function () {
            return '' + Gn++
          }, []),
          r = e.dragHandleUsageInstructions || F
        return i.a.createElement(T, null, function (n) {
          return i.a.createElement(
            Tn,
            {
              nonce: e.nonce,
              contextId: t,
              setCallbacks: n,
              dragHandleUsageInstructions: r,
              enableDefaultSensors: e.enableDefaultSensors,
              sensors: e.sensors,
              onBeforeCapture: e.onBeforeCapture,
              onBeforeDragStart: e.onBeforeDragStart,
              onDragStart: e.onDragStart,
              onDragUpdate: e.onDragUpdate,
              onDragEnd: e.onDragEnd,
            },
            e.children,
          )
        })
      }
      var jn = function (e) {
          return function (t) {
            return e === t
          }
        },
        _n = jn('scroll'),
        Fn = jn('auto'),
        kn =
          (jn('visible'),
          function (e, t) {
            return t(e.overflowX) || t(e.overflowY)
          }),
        Wn = function (e) {
          var t = window.getComputedStyle(e),
            r = { overflowX: t.overflowX, overflowY: t.overflowY }
          return kn(r, _n) || kn(r, Fn)
        },
        Un = function e(t) {
          return null == t || t === document.body || t === document.documentElement
            ? null
            : Wn(t)
            ? t
            : e(t.parentElement)
        },
        Hn = function (e) {
          return { x: e.scrollLeft, y: e.scrollTop }
        },
        Vn = function e(t) {
          return !!t && ('fixed' === window.getComputedStyle(t).position || e(t.parentElement))
        },
        qn = function (e) {
          return { closestScrollable: Un(e), isFixedOnPage: Vn(e) }
        },
        zn = function (e) {
          var t = e.ref,
            r = e.descriptor,
            n = e.env,
            i = e.windowScroll,
            a = e.direction,
            o = e.isDropDisabled,
            l = e.isCombineEnabled,
            c = e.shouldClipSubject,
            u = n.closestScrollable,
            d = (function (e, t) {
              var r = x(e)
              if (!t) return r
              if (e !== t) return r
              var n = r.paddingBox.top - t.scrollTop,
                i = r.paddingBox.left - t.scrollLeft,
                a = n + t.scrollHeight,
                o = i + t.scrollWidth,
                l = g({ top: n, right: o, bottom: a, left: i }, r.border)
              return m({ borderBox: l, margin: r.margin, border: r.border, padding: r.padding })
            })(t, u),
            s = I(d, i),
            p = (function () {
              if (!u) return null
              var e = x(u),
                t = { scrollHeight: u.scrollHeight, scrollWidth: u.scrollWidth }
              return { client: e, page: I(e, i), scroll: Hn(u), scrollSize: t, shouldClipSubject: c }
            })()
          return (function (e) {
            var t = e.descriptor,
              r = e.isEnabled,
              n = e.isCombineEnabled,
              i = e.isFixedOnPage,
              a = e.direction,
              o = e.client,
              l = e.page,
              c = e.closest,
              u = (function () {
                if (!c) return null
                var e = c.scrollSize,
                  t = c.client,
                  r = ar({
                    scrollHeight: e.scrollHeight,
                    scrollWidth: e.scrollWidth,
                    height: t.paddingBox.height,
                    width: t.paddingBox.width,
                  })
                return {
                  pageMarginBox: c.page.marginBox,
                  frameClient: t,
                  scrollSize: e,
                  shouldClipSubject: c.shouldClipSubject,
                  scroll: { initial: c.scroll, current: c.scroll, max: r, diff: { value: H, displacement: H } },
                }
              })(),
              d = 'vertical' === a ? xe : Ee
            return {
              descriptor: t,
              isCombineEnabled: n,
              isFixedOnPage: i,
              axis: d,
              isEnabled: r,
              client: o,
              page: l,
              frame: u,
              subject: te({ page: l, withPlaceholder: null, axis: d, frame: u }),
            }
          })({
            descriptor: r,
            isEnabled: !o,
            isCombineEnabled: l,
            isFixedOnPage: n.isFixedOnPage,
            direction: a,
            client: d,
            page: s,
            closest: p,
          })
        },
        Yn = { passive: !1 },
        Jn = { passive: !0 },
        Xn = function (e) {
          return e.shouldPublishImmediately ? Yn : Jn
        }
      function Kn(e) {
        var t = Object(n.useContext)(e)
        return t || L(!1), t
      }
      var Zn = function (e) {
        return (e && e.env.closestScrollable) || null
      }
      function Qn() {}
      var $n = { width: 0, height: 0, margin: { top: 0, right: 0, bottom: 0, left: 0 } },
        ei = function (e) {
          var t = e.isAnimatingOpenOnMount,
            r = e.placeholder,
            n = e.animate,
            i = (function (e) {
              var t = e.isAnimatingOpenOnMount,
                r = e.placeholder,
                n = e.animate
              return t || 'close' === n
                ? $n
                : { height: r.client.borderBox.height, width: r.client.borderBox.width, margin: r.client.margin }
            })({ isAnimatingOpenOnMount: t, placeholder: r, animate: n })
          return {
            display: r.display,
            boxSizing: 'border-box',
            width: i.width,
            height: i.height,
            marginTop: i.margin.top,
            marginRight: i.margin.right,
            marginBottom: i.margin.bottom,
            marginLeft: i.margin.left,
            flexShrink: '0',
            flexGrow: '0',
            pointerEvents: 'none',
            transition: 'none' !== n ? _t.placeholder : null,
          }
        }
      var ti = i.a.memo(function (e) {
          var t = Object(n.useRef)(null),
            r = s(function () {
              t.current && (clearTimeout(t.current), (t.current = null))
            }, []),
            a = e.animate,
            o = e.onTransitionEnd,
            l = e.onClose,
            c = e.contextId,
            u = Object(n.useState)('open' === e.animate),
            d = u[0],
            p = u[1]
          Object(n.useEffect)(
            function () {
              return d
                ? 'open' !== a
                  ? (r(), p(!1), Qn)
                  : t.current
                  ? Qn
                  : ((t.current = setTimeout(function () {
                      ;(t.current = null), p(!1)
                    })),
                    r)
                : Qn
            },
            [a, d, r],
          )
          var f = s(
              function (e) {
                'height' === e.propertyName && (o(), 'close' === a && l())
              },
              [a, l, o],
            ),
            g = ei({ isAnimatingOpenOnMount: d, animate: e.animate, placeholder: e.placeholder })
          return i.a.createElement(e.placeholder.tagName, {
            style: g,
            'data-rbd-placeholder-context-id': c,
            onTransitionEnd: f,
            ref: e.innerRef,
          })
        }),
        ri = i.a.createContext(null)
      var ni = (function (e) {
          function t() {
            for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).state = {
                isVisible: Boolean(t.props.on),
                data: t.props.on,
                animate: t.props.shouldAnimate && t.props.on ? 'open' : 'none',
              }),
              (t.onClose = function () {
                'close' === t.state.animate && t.setState({ isVisible: !1 })
              }),
              t
            )
          }
          return (
            Object(a.a)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.shouldAnimate
                ? e.on
                  ? { isVisible: !0, data: e.on, animate: 'open' }
                  : t.isVisible
                  ? { isVisible: !0, data: t.data, animate: 'close' }
                  : { isVisible: !1, animate: 'close', data: null }
                : { isVisible: Boolean(e.on), data: e.on, animate: 'none' }
            }),
            (t.prototype.render = function () {
              if (!this.state.isVisible) return null
              var e = { onClose: this.onClose, data: this.state.data, animate: this.state.animate }
              return this.props.children(e)
            }),
            t
          )
        })(i.a.PureComponent),
        ii = 5e3,
        ai = 4500,
        oi = function (e, t) {
          return t ? _t.drop(t.duration) : e ? _t.snap : _t.fluid
        },
        li = function (e, t) {
          return e ? (t ? Gt.drop : Gt.combining) : null
        }
      function ci(e) {
        return 'DRAGGING' === e.type
          ? ((n = (r = e).dimension.client),
            (i = r.offset),
            (a = r.combineWith),
            (o = r.dropping),
            (l = Boolean(a)),
            (c = (function (e) {
              return null != e.forceShouldAnimate ? e.forceShouldAnimate : 'SNAP' === e.mode
            })(r)),
            (u = Boolean(o)),
            (d = u ? Wt(i, l) : kt(i)),
            {
              position: 'fixed',
              top: n.marginBox.top,
              left: n.marginBox.left,
              boxSizing: 'border-box',
              width: n.borderBox.width,
              height: n.borderBox.height,
              transition: oi(c, o),
              transform: d,
              opacity: li(l, u),
              zIndex: u ? ai : ii,
              pointerEvents: 'none',
            })
          : { transform: kt((t = e).offset), transition: t.shouldAnimateDisplacement ? null : 'none' }
        var t, r, n, i, a, o, l, c, u, d
      }
      function ui(e) {
        var t = tn('draggable'),
          r = e.descriptor,
          i = e.registry,
          a = e.getDraggableRef,
          o = e.canDragInteractiveElements,
          l = e.shouldRespectForcePress,
          c = e.isEnabled,
          u = d(
            function () {
              return { canDragInteractiveElements: o, shouldRespectForcePress: l, isEnabled: c }
            },
            [o, c, l],
          ),
          p = s(
            function (e) {
              var t = a()
              return (
                t || L(!1),
                (function (e, t, r) {
                  void 0 === r && (r = H)
                  var n = window.getComputedStyle(t),
                    i = t.getBoundingClientRect(),
                    a = D(i, n),
                    o = I(a, r)
                  return {
                    descriptor: e,
                    placeholder: { client: a, tagName: t.tagName.toLowerCase(), display: n.display },
                    displaceBy: { x: a.marginBox.width, y: a.marginBox.height },
                    client: a,
                    page: o,
                  }
                })(r, t, e)
              )
            },
            [r, a],
          ),
          f = d(
            function () {
              return { uniqueId: t, descriptor: r, options: u, getDimension: p }
            },
            [r, p, u, t],
          ),
          g = Object(n.useRef)(f),
          b = Object(n.useRef)(!0)
        Ur(
          function () {
            return (
              i.draggable.register(g.current),
              function () {
                return i.draggable.unregister(g.current)
              }
            )
          },
          [i.draggable],
        ),
          Ur(
            function () {
              if (b.current) b.current = !1
              else {
                var e = g.current
                ;(g.current = f), i.draggable.update(f, e)
              }
            },
            [f, i.draggable],
          )
      }
      function di(e, t, r) {
        an()
      }
      function si(e) {
        e.preventDefault()
      }
      var pi = function (e, t) {
          return e === t
        },
        fi = function (e) {
          var t = e.combine,
            r = e.destination
          return r ? r.droppableId : t ? t.droppableId : null
        }
      function gi(e) {
        return {
          isDragging: !1,
          isDropAnimating: !1,
          isClone: !1,
          dropAnimation: null,
          mode: null,
          draggingOver: null,
          combineTargetFor: e,
          combineWith: null,
        }
      }
      var bi = {
        mapped: {
          type: 'SECONDARY',
          offset: H,
          combineTargetFor: null,
          shouldAnimateDisplacement: !0,
          snapshot: gi(null),
        },
      }
      var vi = { dropAnimationFinished: Lt },
        mi = Object(c.b)(
          function () {
            var e,
              t,
              r,
              n =
                ((e = w(function (e, t) {
                  return { x: e, y: t }
                })),
                (t = w(function (e, t, r, n, i) {
                  return {
                    isDragging: !0,
                    isClone: t,
                    isDropAnimating: Boolean(i),
                    dropAnimation: i,
                    mode: e,
                    draggingOver: r,
                    combineWith: n,
                    combineTargetFor: null,
                  }
                })),
                (r = w(function (e, r, n, i, a, o, l) {
                  return {
                    mapped: {
                      type: 'DRAGGING',
                      dropping: null,
                      draggingOver: a,
                      combineWith: o,
                      mode: r,
                      offset: e,
                      dimension: n,
                      forceShouldAnimate: l,
                      snapshot: t(r, i, a, o, null),
                    },
                  }
                })),
                function (n, i) {
                  if (n.isDragging) {
                    if (n.critical.draggable.id !== i.draggableId) return null
                    var a = n.current.client.offset,
                      o = n.dimensions.draggables[i.draggableId],
                      l = Qe(n.impact),
                      c = (d = n.impact).at && 'COMBINE' === d.at.type ? d.at.combine.draggableId : null,
                      u = n.forceShouldAnimate
                    return r(e(a.x, a.y), n.movementMode, o, i.isClone, l, c, u)
                  }
                  var d
                  if ('DROP_ANIMATING' === n.phase) {
                    var s = n.completed
                    if (s.result.draggableId !== i.draggableId) return null
                    var p = i.isClone,
                      f = n.dimensions.draggables[i.draggableId],
                      g = s.result,
                      b = g.mode,
                      v = fi(g),
                      m = (function (e) {
                        return e.combine ? e.combine.draggableId : null
                      })(g),
                      h = {
                        duration: n.dropDuration,
                        curve: Tt,
                        moveTo: n.newHomeClientOffset,
                        opacity: m ? Gt.drop : null,
                        scale: m ? Mt.drop : null,
                      }
                    return {
                      mapped: {
                        type: 'DRAGGING',
                        offset: n.newHomeClientOffset,
                        dimension: f,
                        dropping: h,
                        draggingOver: v,
                        combineWith: m,
                        mode: b,
                        forceShouldAnimate: null,
                        snapshot: t(b, p, v, m, h),
                      },
                    }
                  }
                  return null
                }),
              i = (function () {
                var e = w(function (e, t) {
                    return { x: e, y: t }
                  }),
                  t = w(gi),
                  r = w(function (e, r, n) {
                    return (
                      void 0 === r && (r = null),
                      {
                        mapped: {
                          type: 'SECONDARY',
                          offset: e,
                          combineTargetFor: r,
                          shouldAnimateDisplacement: n,
                          snapshot: t(r),
                        },
                      }
                    )
                  }),
                  n = function (e) {
                    return e ? r(H, e, !0) : null
                  },
                  i = function (t, i, a, o) {
                    var l = a.displaced.visible[t],
                      c = Boolean(o.inVirtualList && o.effected[t]),
                      u = fe(a),
                      d = u && u.draggableId === t ? i : null
                    if (!l) {
                      if (!c) return n(d)
                      if (a.displaced.invisible[t]) return null
                      var s = Y(o.displacedBy.point),
                        p = e(s.x, s.y)
                      return r(p, d, !0)
                    }
                    if (c) return n(d)
                    var f = a.displacedBy.point,
                      g = e(f.x, f.y)
                    return r(g, d, l.shouldAnimate)
                  }
                return function (e, t) {
                  if (e.isDragging)
                    return e.critical.draggable.id === t.draggableId
                      ? null
                      : i(t.draggableId, e.critical.draggable.id, e.impact, e.afterCritical)
                  if ('DROP_ANIMATING' === e.phase) {
                    var r = e.completed
                    return r.result.draggableId === t.draggableId
                      ? null
                      : i(t.draggableId, r.result.draggableId, r.impact, r.afterCritical)
                  }
                  return null
                }
              })()
            return function (e, t) {
              return n(e, t) || i(e, t) || bi
            }
          },
          vi,
          null,
          { context: Kr, pure: !0, areStatePropsEqual: pi },
        )(function (e) {
          var t = Object(n.useRef)(null),
            r = s(function (e) {
              t.current = e
            }, []),
            i = s(function () {
              return t.current
            }, []),
            a = Kn(rn),
            o = a.contextId,
            l = a.dragHandleUsageInstructionsId,
            c = a.registry,
            u = Kn(ri),
            p = u.type,
            f = u.droppableId,
            g = d(
              function () {
                return { id: e.draggableId, index: e.index, type: p, droppableId: f }
              },
              [e.draggableId, e.index, p, f],
            ),
            b = e.children,
            v = e.draggableId,
            m = e.isEnabled,
            h = e.shouldRespectForcePress,
            y = e.canDragInteractiveElements,
            I = e.isClone,
            D = e.mapped,
            x = e.dropAnimationFinished
          di(),
            nn(),
            I ||
              ui(
                d(
                  function () {
                    return {
                      descriptor: g,
                      registry: c,
                      getDraggableRef: i,
                      canDragInteractiveElements: y,
                      shouldRespectForcePress: h,
                      isEnabled: m,
                    }
                  },
                  [g, c, i, y, h, m],
                ),
              )
          var E = d(
              function () {
                return m
                  ? {
                      tabIndex: 0,
                      role: 'button',
                      'aria-describedby': l,
                      'data-rbd-drag-handle-draggable-id': v,
                      'data-rbd-drag-handle-context-id': o,
                      draggable: !1,
                      onDragStart: si,
                    }
                  : null
              },
              [o, l, v, m],
            ),
            w = s(
              function (e) {
                'DRAGGING' === D.type && D.dropping && 'transform' === e.propertyName && x()
              },
              [x, D],
            ),
            O = d(
              function () {
                var e = ci(D),
                  t = 'DRAGGING' === D.type && D.dropping ? w : null
                return {
                  innerRef: r,
                  draggableProps: {
                    'data-rbd-draggable-context-id': o,
                    'data-rbd-draggable-id': v,
                    style: e,
                    onTransitionEnd: t,
                  },
                  dragHandleProps: E,
                }
              },
              [o, E, v, D, w, r],
            ),
            C = d(
              function () {
                return { draggableId: g.id, type: g.type, source: { index: g.index, droppableId: g.droppableId } }
              },
              [g.droppableId, g.id, g.index, g.type],
            )
          return b(O, D.snapshot, C)
        })
      function hi(e) {
        return Kn(ri).isUsingCloneFor !== e.draggableId || e.isClone ? i.a.createElement(mi, e) : null
      }
      function yi(e) {
        var t = 'boolean' != typeof e.isDragDisabled || !e.isDragDisabled,
          r = Boolean(e.disableInteractiveElementBlocking),
          n = Boolean(e.shouldRespectForcePress)
        return i.a.createElement(
          hi,
          Object(o.a)({}, e, { isClone: !1, isEnabled: t, canDragInteractiveElements: r, shouldRespectForcePress: n }),
        )
      }
      var Ii = function (e, t) {
          return e === t.droppable.type
        },
        Di = function (e, t) {
          return t.draggables[e.draggable.id]
        },
        xi = {
          updateViewportMaxScroll: function (e) {
            return { type: 'UPDATE_VIEWPORT_MAX_SCROLL', payload: e }
          },
        }
      var Ei = {
          mode: 'standard',
          type: 'DEFAULT',
          direction: 'vertical',
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          renderClone: null,
          getContainerForClone: function () {
            return document.body || L(!1), document.body
          },
        },
        wi = Object(c.b)(
          function () {
            var e = {
                placeholder: null,
                shouldAnimatePlaceholder: !0,
                snapshot: {
                  isDraggingOver: !1,
                  draggingOverWith: null,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !1,
                },
                useClone: null,
              },
              t = Object(o.a)({}, e, { shouldAnimatePlaceholder: !1 }),
              r = w(function (e) {
                return { draggableId: e.id, type: e.type, source: { index: e.index, droppableId: e.droppableId } }
              }),
              n = w(function (n, i, a, o, l, c) {
                var u = l.descriptor.id
                if (l.descriptor.droppableId === n) {
                  var d = c ? { render: c, dragging: r(l.descriptor) } : null,
                    s = {
                      isDraggingOver: a,
                      draggingOverWith: a ? u : null,
                      draggingFromThisWith: u,
                      isUsingPlaceholder: !0,
                    }
                  return { placeholder: l.placeholder, shouldAnimatePlaceholder: !1, snapshot: s, useClone: d }
                }
                if (!i) return t
                if (!o) return e
                var p = { isDraggingOver: a, draggingOverWith: u, draggingFromThisWith: null, isUsingPlaceholder: !0 }
                return { placeholder: l.placeholder, shouldAnimatePlaceholder: !0, snapshot: p, useClone: null }
              })
            return function (r, i) {
              var a = i.droppableId,
                o = i.type,
                l = !i.isDropDisabled,
                c = i.renderClone
              if (r.isDragging) {
                var u = r.critical
                if (!Ii(o, u)) return t
                var d = Di(u, r.dimensions),
                  s = Qe(r.impact) === a
                return n(a, l, s, s, d, c)
              }
              if ('DROP_ANIMATING' === r.phase) {
                var p = r.completed
                if (!Ii(o, p.critical)) return t
                var f = Di(p.critical, r.dimensions)
                return n(a, l, fi(p.result) === a, Qe(p.impact) === a, f, c)
              }
              if ('IDLE' === r.phase && r.completed && !r.shouldFlush) {
                var g = r.completed
                if (!Ii(o, g.critical)) return t
                var b = Qe(g.impact) === a,
                  v = Boolean(g.impact.at && 'COMBINE' === g.impact.at.type),
                  m = g.critical.droppable.id === a
                return b ? (v ? e : t) : m ? e : t
              }
              return t
            }
          },
          xi,
          null,
          { context: Kr, pure: !0, areStatePropsEqual: pi },
        )(function (e) {
          var t = Object(n.useContext)(rn)
          t || L(!1)
          var r = t.contextId,
            a = t.isMovementAllowed,
            o = Object(n.useRef)(null),
            l = Object(n.useRef)(null),
            c = e.children,
            u = e.droppableId,
            p = e.type,
            f = e.mode,
            g = e.direction,
            b = e.ignoreContainerClipping,
            v = e.isDropDisabled,
            m = e.isCombineEnabled,
            h = e.snapshot,
            y = e.useClone,
            I = e.updateViewportMaxScroll,
            D = e.getContainerForClone,
            x = s(function () {
              return o.current
            }, []),
            E = s(function (e) {
              o.current = e
            }, []),
            C =
              (s(function () {
                return l.current
              }, []),
              s(function (e) {
                l.current = e
              }, []))
          an()
          var B = s(
            function () {
              a() && I({ maxScroll: lr() })
            },
            [a, I],
          )
          !(function (e) {
            var t = Object(n.useRef)(null),
              r = Kn(rn),
              i = tn('droppable'),
              a = r.registry,
              o = r.marshal,
              l = ln(e),
              c = d(
                function () {
                  return { id: e.droppableId, type: e.type, mode: e.mode }
                },
                [e.droppableId, e.mode, e.type],
              ),
              u = Object(n.useRef)(c),
              p = d(
                function () {
                  return w(function (e, r) {
                    t.current || L(!1)
                    var n = { x: e, y: r }
                    o.updateDroppableScroll(c.id, n)
                  })
                },
                [c.id, o],
              ),
              f = s(function () {
                var e = t.current
                return e && e.env.closestScrollable ? Hn(e.env.closestScrollable) : H
              }, []),
              g = s(
                function () {
                  var e = f()
                  p(e.x, e.y)
                },
                [f, p],
              ),
              b = d(
                function () {
                  return O(g)
                },
                [g],
              ),
              v = s(
                function () {
                  var e = t.current,
                    r = Zn(e)
                  ;(e && r) || L(!1), e.scrollOptions.shouldPublishImmediately ? g() : b()
                },
                [b, g],
              ),
              m = s(
                function (e, n) {
                  t.current && L(!1)
                  var i = l.current,
                    a = i.getDroppableRef()
                  a || L(!1)
                  var o = qn(a),
                    u = { ref: a, descriptor: c, env: o, scrollOptions: n }
                  t.current = u
                  var d = zn({
                      ref: a,
                      descriptor: c,
                      env: o,
                      windowScroll: e,
                      direction: i.direction,
                      isDropDisabled: i.isDropDisabled,
                      isCombineEnabled: i.isCombineEnabled,
                      shouldClipSubject: !i.ignoreContainerClipping,
                    }),
                    s = o.closestScrollable
                  return (
                    s &&
                      (s.setAttribute(kr.contextId, r.contextId), s.addEventListener('scroll', v, Xn(u.scrollOptions))),
                    d
                  )
                },
                [r.contextId, c, v, l],
              ),
              h = s(function () {
                var e = t.current,
                  r = Zn(e)
                return (e && r) || L(!1), Hn(r)
              }, []),
              y = s(
                function () {
                  var e = t.current
                  e || L(!1)
                  var r = Zn(e)
                  ;(t.current = null),
                    r &&
                      (b.cancel(),
                      r.removeAttribute(kr.contextId),
                      r.removeEventListener('scroll', v, Xn(e.scrollOptions)))
                },
                [v, b],
              ),
              I = s(function (e) {
                var r = t.current
                r || L(!1)
                var n = Zn(r)
                n || L(!1), (n.scrollTop += e.y), (n.scrollLeft += e.x)
              }, []),
              D = d(
                function () {
                  return { getDimensionAndWatchScroll: m, getScrollWhileDragging: h, dragStopped: y, scroll: I }
                },
                [y, m, h, I],
              ),
              x = d(
                function () {
                  return { uniqueId: i, descriptor: c, callbacks: D }
                },
                [D, c, i],
              )
            Ur(
              function () {
                return (
                  (u.current = x.descriptor),
                  a.droppable.register(x),
                  function () {
                    t.current && y(), a.droppable.unregister(x)
                  }
                )
              },
              [D, c, y, x, o, a.droppable],
            ),
              Ur(
                function () {
                  t.current && o.updateDroppableIsEnabled(u.current.id, !e.isDropDisabled)
                },
                [e.isDropDisabled, o],
              ),
              Ur(
                function () {
                  t.current && o.updateDroppableIsCombineEnabled(u.current.id, e.isCombineEnabled)
                },
                [e.isCombineEnabled, o],
              )
          })({
            droppableId: u,
            type: p,
            mode: f,
            direction: g,
            isDropDisabled: v,
            isCombineEnabled: m,
            ignoreContainerClipping: b,
            getDroppableRef: x,
          })
          var R = i.a.createElement(ni, { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder }, function (e) {
              var t = e.onClose,
                n = e.data,
                a = e.animate
              return i.a.createElement(ti, {
                placeholder: n,
                onClose: t,
                innerRef: C,
                animate: a,
                contextId: r,
                onTransitionEnd: B,
              })
            }),
            N = d(
              function () {
                return {
                  innerRef: E,
                  placeholder: R,
                  droppableProps: { 'data-rbd-droppable-id': u, 'data-rbd-droppable-context-id': r },
                }
              },
              [r, u, R, E],
            ),
            S = y ? y.dragging.draggableId : null,
            P = d(
              function () {
                return { droppableId: u, type: p, isUsingCloneFor: S }
              },
              [u, S, p],
            )
          return i.a.createElement(
            ri.Provider,
            { value: P },
            c(N, h),
            (function () {
              if (!y) return null
              var e = y.dragging,
                t = y.render,
                r = i.a.createElement(
                  hi,
                  {
                    draggableId: e.draggableId,
                    index: e.source.index,
                    isClone: !0,
                    isEnabled: !0,
                    shouldRespectForcePress: !1,
                    canDragInteractiveElements: !0,
                  },
                  function (r, n) {
                    return t(r, n, e)
                  },
                )
              return A.a.createPortal(r, D())
            })(),
          )
        })
      wi.defaultProps = Ei
    },
    dNrE: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('bPu0')
      t.default = n.c
    },
    tPNk: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('bPu0')
      t.default = n.a
    },
  },
])
//# sourceMappingURL=WIPED
