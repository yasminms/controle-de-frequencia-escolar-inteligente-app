import toastr from 'toastr'

const toast = (type, message) => {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-bottom-right',
    preventDuplicates: false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
    toastClass: 'toast-style',
  }

  toastr[type](message)
}

const success = message => {
  toast('success', message)
}

const warning = message => {
  toast('warning', message)
}

const error = message => {
  toast('error', message)
}

const info = message => {
  toast('info', message)
}

export { success, warning, error, info }
