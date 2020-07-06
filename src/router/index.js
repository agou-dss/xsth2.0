import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = resolve => require(['@/views/Home.vue'], resolve);
// const Home = () => import('@/views/Home')
const Future = resolve => require(['@/views/Future.vue'], resolve);
// const Future = () => import('@/views/Future.vue')
const orderList = resolve => require(['@/views/Orderlist.vue'], resolve);
// const orderList = () => import('@/views/Orderlist.vue')
const orderDetail = resolve => require(['@/views/Orderdetail.vue'], resolve);
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    component: Home,
    meta: { name: '产品详情', icon: '我的订单', path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MTU3MWFhYi0wMzE4LWMxNGItOTc4Yy1mOGE5ZWUxZGNkY2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1NTc0RkU2QThGMTFFQUE3QkFGNkRBMzc5RTI0QjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1NTc0RkQ2QThGMTFFQUE3QkFGNkRBMzc5RTI0QjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2JkN2VjZWItOGZjOC0xMzQ0LWFhMDktNDJlMGEyZWUzMWMyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZWYyOTljM2QtNmE3YS0xMWVhLTgwYzEtYTZhOTM1MTZjNDAwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sV6NqwAAAzpJREFUeNqMlctLalEUxtPsYRBFWhTloLKyiEqiQUlBEhVFhE4b9B/1Bzhy5KQwShoFIlSiFESURE81e7+L0l7m/Z3OxXs6nfSuwWHvfdb+9tprfevbqlQqlaNk5+fnZ2dn19fXT09PTPPz88vKyvR6vcFgKCwsVNyikmEx3d7e3tjYuL29VX+Z6svEAd/c3Ny6urrW1taSkpJMWA8PD4uLiycnJ+wpKChgT2VlZWlpKdO3t7ebmxuCvbq6AlSj0ZjN5ubmZsYKWJeXl9PT06+vr1qttqenp6WlJS8v7+dF7u7u1tfXY7EYB9TW1uLJ4BsWeXG5XACRjtHR0eLi4pyMdnBw4Pf7GRC7xWIRFwXIZDI5NzeXSCRqamrsdntWIKy+vt5qtTI4PDzc39//h8UJFxcXRUVFNpuNeiluPjo68vl80uRWV1d3dXV9fn6ura3F43EB6/39PRAIsDQ0NPRbsaPR6MLCQigUosTS9aampoqKCjKzs7MjYG1uboKq0+kaGxsVgSKRiMfj+fj4aGhoMJlM30igUkEOggWLRGn29vaYdHR0KAKFw+H5+XkcQBkYGEiXLG2kmNu8vLwIfDw+PsaV8ikCzc7OEhEhDw4O/gQSQ+OapAgmaOCLOJc5USC3240TRBseHlYEEg0yEw04arwZycp3f38PbylLeXn5yMhIBiCMHgCEfKkBYsQ22VF9fX38omlWV1czc40k4Cl0K8xkBL9kHt3d3f39/fzyer3BYDADFn2KG62uhnLEBYN+Ov0nHNIEAtlQwxq8f7tIVjia/PHxERVA2tSdnZ2MTk9Pd3d3s8JtbW3J/tJA/EJ8qICgU+gGQc7MzNANGeDQMqPRKF2nq0gOVW5ra/urORRxamoKkQN+cnKSExQRqTqimp5CcghIEREMsW0E4nDHiYkJKEbrOp3O5+dnRSwpEDojCifi097eLtdVetjhcKDFsGRsbAwP6WYpjZeWlkgcV6Nu4+Pjabdveg/LUFdR70EEjj6l2HijlNSe7KCo0JIVy5dJz5O/QyRlZWVleXmZ86XPj/SLZvT29lZVVWV500SjrFAEnSBGHiemCAubITb1ocMUE/pHgAEAkQX7eICHGkYAAAAASUVORK5CYII=' }
  },
  {
    path: '/future/:id',
    component: Future,
    meta: { name: '预约', icon: '', path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MTU3MWFhYi0wMzE4LWMxNGItOTc4Yy1mOGE5ZWUxZGNkY2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1NTc0RkU2QThGMTFFQUE3QkFGNkRBMzc5RTI0QjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1NTc0RkQ2QThGMTFFQUE3QkFGNkRBMzc5RTI0QjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2JkN2VjZWItOGZjOC0xMzQ0LWFhMDktNDJlMGEyZWUzMWMyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZWYyOTljM2QtNmE3YS0xMWVhLTgwYzEtYTZhOTM1MTZjNDAwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sV6NqwAAAzpJREFUeNqMlctLalEUxtPsYRBFWhTloLKyiEqiQUlBEhVFhE4b9B/1Bzhy5KQwShoFIlSiFESURE81e7+L0l7m/Z3OxXs6nfSuwWHvfdb+9tprfevbqlQqlaNk5+fnZ2dn19fXT09PTPPz88vKyvR6vcFgKCwsVNyikmEx3d7e3tjYuL29VX+Z6svEAd/c3Ny6urrW1taSkpJMWA8PD4uLiycnJ+wpKChgT2VlZWlpKdO3t7ebmxuCvbq6AlSj0ZjN5ubmZsYKWJeXl9PT06+vr1qttqenp6WlJS8v7+dF7u7u1tfXY7EYB9TW1uLJ4BsWeXG5XACRjtHR0eLi4pyMdnBw4Pf7GRC7xWIRFwXIZDI5NzeXSCRqamrsdntWIKy+vt5qtTI4PDzc39//h8UJFxcXRUVFNpuNeiluPjo68vl80uRWV1d3dXV9fn6ura3F43EB6/39PRAIsDQ0NPRbsaPR6MLCQigUosTS9aampoqKCjKzs7MjYG1uboKq0+kaGxsVgSKRiMfj+fj4aGhoMJlM30igUkEOggWLRGn29vaYdHR0KAKFw+H5+XkcQBkYGEiXLG2kmNu8vLwIfDw+PsaV8ikCzc7OEhEhDw4O/gQSQ+OapAgmaOCLOJc5USC3240TRBseHlYEEg0yEw04arwZycp3f38PbylLeXn5yMhIBiCMHgCEfKkBYsQ22VF9fX38omlWV1czc40k4Cl0K8xkBL9kHt3d3f39/fzyer3BYDADFn2KG62uhnLEBYN+Ov0nHNIEAtlQwxq8f7tIVjia/PHxERVA2tSdnZ2MTk9Pd3d3s8JtbW3J/tJA/EJ8qICgU+gGQc7MzNANGeDQMqPRKF2nq0gOVW5ra/urORRxamoKkQN+cnKSExQRqTqimp5CcghIEREMsW0E4nDHiYkJKEbrOp3O5+dnRSwpEDojCifi097eLtdVetjhcKDFsGRsbAwP6WYpjZeWlkgcV6Nu4+Pjabdveg/LUFdR70EEjj6l2HijlNSe7KCo0JIVy5dJz5O/QyRlZWVleXmZ86XPj/SLZvT29lZVVWV500SjrFAEnSBGHiemCAubITb1ocMUE/pHgAEAkQX7eICHGkYAAAAASUVORK5CYII=' }
  },
  {
    path: '/orderlist',
    component: orderList,
    meta: { name: '订单', icon: '', path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MTU3MWFhYi0wMzE4LWMxNGItOTc4Yy1mOGE5ZWUxZGNkY2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1NTc0RkU2QThGMTFFQUE3QkFGNkRBMzc5RTI0QjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1NTc0RkQ2QThGMTFFQUE3QkFGNkRBMzc5RTI0QjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2JkN2VjZWItOGZjOC0xMzQ0LWFhMDktNDJlMGEyZWUzMWMyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZWYyOTljM2QtNmE3YS0xMWVhLTgwYzEtYTZhOTM1MTZjNDAwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sV6NqwAAAzpJREFUeNqMlctLalEUxtPsYRBFWhTloLKyiEqiQUlBEhVFhE4b9B/1Bzhy5KQwShoFIlSiFESURE81e7+L0l7m/Z3OxXs6nfSuwWHvfdb+9tprfevbqlQqlaNk5+fnZ2dn19fXT09PTPPz88vKyvR6vcFgKCwsVNyikmEx3d7e3tjYuL29VX+Z6svEAd/c3Ny6urrW1taSkpJMWA8PD4uLiycnJ+wpKChgT2VlZWlpKdO3t7ebmxuCvbq6AlSj0ZjN5ubmZsYKWJeXl9PT06+vr1qttqenp6WlJS8v7+dF7u7u1tfXY7EYB9TW1uLJ4BsWeXG5XACRjtHR0eLi4pyMdnBw4Pf7GRC7xWIRFwXIZDI5NzeXSCRqamrsdntWIKy+vt5qtTI4PDzc39//h8UJFxcXRUVFNpuNeiluPjo68vl80uRWV1d3dXV9fn6ura3F43EB6/39PRAIsDQ0NPRbsaPR6MLCQigUosTS9aampoqKCjKzs7MjYG1uboKq0+kaGxsVgSKRiMfj+fj4aGhoMJlM30igUkEOggWLRGn29vaYdHR0KAKFw+H5+XkcQBkYGEiXLG2kmNu8vLwIfDw+PsaV8ikCzc7OEhEhDw4O/gQSQ+OapAgmaOCLOJc5USC3240TRBseHlYEEg0yEw04arwZycp3f38PbylLeXn5yMhIBiCMHgCEfKkBYsQ22VF9fX38omlWV1czc40k4Cl0K8xkBL9kHt3d3f39/fzyer3BYDADFn2KG62uhnLEBYN+Ov0nHNIEAtlQwxq8f7tIVjia/PHxERVA2tSdnZ2MTk9Pd3d3s8JtbW3J/tJA/EJ8qICgU+gGQc7MzNANGeDQMqPRKF2nq0gOVW5ra/urORRxamoKkQN+cnKSExQRqTqimp5CcghIEREMsW0E4nDHiYkJKEbrOp3O5+dnRSwpEDojCifi097eLtdVetjhcKDFsGRsbAwP6WYpjZeWlkgcV6Nu4+Pjabdveg/LUFdR70EEjj6l2HijlNSe7KCo0JIVy5dJz5O/QyRlZWVleXmZ86XPj/SLZvT29lZVVWV500SjrFAEnSBGHiemCAubITb1ocMUE/pHgAEAkQX7eICHGkYAAAAASUVORK5CYII=' }
  },
  {
    path: '/orderDetail/:id',
    component: orderDetail,
    meta: { name: '订单详情', icon: '', path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MTU3MWFhYi0wMzE4LWMxNGItOTc4Yy1mOGE5ZWUxZGNkY2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1NTc0RkU2QThGMTFFQUE3QkFGNkRBMzc5RTI0QjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1NTc0RkQ2QThGMTFFQUE3QkFGNkRBMzc5RTI0QjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2JkN2VjZWItOGZjOC0xMzQ0LWFhMDktNDJlMGEyZWUzMWMyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZWYyOTljM2QtNmE3YS0xMWVhLTgwYzEtYTZhOTM1MTZjNDAwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sV6NqwAAAzpJREFUeNqMlctLalEUxtPsYRBFWhTloLKyiEqiQUlBEhVFhE4b9B/1Bzhy5KQwShoFIlSiFESURE81e7+L0l7m/Z3OxXs6nfSuwWHvfdb+9tprfevbqlQqlaNk5+fnZ2dn19fXT09PTPPz88vKyvR6vcFgKCwsVNyikmEx3d7e3tjYuL29VX+Z6svEAd/c3Ny6urrW1taSkpJMWA8PD4uLiycnJ+wpKChgT2VlZWlpKdO3t7ebmxuCvbq6AlSj0ZjN5ubmZsYKWJeXl9PT06+vr1qttqenp6WlJS8v7+dF7u7u1tfXY7EYB9TW1uLJ4BsWeXG5XACRjtHR0eLi4pyMdnBw4Pf7GRC7xWIRFwXIZDI5NzeXSCRqamrsdntWIKy+vt5qtTI4PDzc39//h8UJFxcXRUVFNpuNeiluPjo68vl80uRWV1d3dXV9fn6ura3F43EB6/39PRAIsDQ0NPRbsaPR6MLCQigUosTS9aampoqKCjKzs7MjYG1uboKq0+kaGxsVgSKRiMfj+fj4aGhoMJlM30igUkEOggWLRGn29vaYdHR0KAKFw+H5+XkcQBkYGEiXLG2kmNu8vLwIfDw+PsaV8ikCzc7OEhEhDw4O/gQSQ+OapAgmaOCLOJc5USC3240TRBseHlYEEg0yEw04arwZycp3f38PbylLeXn5yMhIBiCMHgCEfKkBYsQ22VF9fX38omlWV1czc40k4Cl0K8xkBL9kHt3d3f39/fzyer3BYDADFn2KG62uhnLEBYN+Ov0nHNIEAtlQwxq8f7tIVjia/PHxERVA2tSdnZ2MTk9Pd3d3s8JtbW3J/tJA/EJ8qICgU+gGQc7MzNANGeDQMqPRKF2nq0gOVW5ra/urORRxamoKkQN+cnKSExQRqTqimp5CcghIEREMsW0E4nDHiYkJKEbrOp3O5+dnRSwpEDojCifi097eLtdVetjhcKDFsGRsbAwP6WYpjZeWlkgcV6Nu4+Pjabdveg/LUFdR70EEjj6l2HijlNSe7KCo0JIVy5dJz5O/QyRlZWVleXmZ86XPj/SLZvT29lZVVWV500SjrFAEnSBGHiemCAubITb1ocMUE/pHgAEAkQX7eICHGkYAAAAASUVORK5CYII=' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
