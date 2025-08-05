class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error('Невозможно создатьб экземпляр обстрактного класса BaseComponents!')
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
    },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI()
        }

        return true
      },
    })
  }

  /* Перерисовка UI в ответ на изменение состояния */

  updateUI() {
    throw new Error('Необходимо реализовать метод updateUI')
  }
}

export default BaseComponent