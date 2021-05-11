import dateRangePicker from './date-range-picker'

const DateRangePicker = {
  install (Vue) {
    Vue.component(dateRangePicker.name, dateRangePicker)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.DateRangePicker = DateRangePicker
  DateRangePicker.install(window.Vue)
}

export default DateRangePicker

