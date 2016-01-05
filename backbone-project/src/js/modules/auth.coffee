define (require, exports, module)->
  $ = require 'jquery'
  require 'cookie'

  cookieName = 'userinfo'

  exports =
    getUser: ()->
      user = Cookies.get cookieName
      if !user
        return null
      if typeof user is 'string'
        return JSON.parse user
      else
        return user
      null
    setUser: (user)->
      Cookies.set cookieName, user
    checkLogin: ->
      user = this.getUser()
      if user isnt null and user.hasOwnProperty 'id'
        return true
      false

