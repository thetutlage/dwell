'use strict'

const ponder = require('../index')
const chai = require('chai')
const expect = chai.expect

describe('Inspect Constructor', function () {

  it('should inspect class constructor', function () {

    class Users {
      constructor (foo) {

      }
    }
    expect(ponder.inspect(Users.toString())).deep.equal(['foo'])
  })

  it('should inspect class constructor to fetch multiple arguments', function () {

    class Users {
      constructor (foo,bar) {

      }
    }
    expect(ponder.inspect(Users.toString())).deep.equal(['foo','bar'])
  })

  it('should ignore work when there is no white space in constructor function', function () {

    class Users {
      constructor(foo,bar) {

      }
    }
    expect(ponder.inspect(Users.toString())).deep.equal(['foo','bar'])
  })

  it('should inspect function constructor', function () {

    const klass = `function (foo) {}`
    expect(ponder.inspect(klass)).deep.equal(['foo'])
  })

  it('should inspect function constructor with multiple arguments', function () {

    function Foo(foo,baz) {}
    expect(ponder.inspect(Foo.toString())).deep.equal(['foo','baz'])
  })

  it('should inspect function constructor with named functions', function () {

    function Bar(foo,baz) {}
    expect(ponder.inspect(Bar.toString())).deep.equal(['foo','baz'])
  })

  it('should inspect function constructor when there is no space in function defination', function () {

    const klass = `function(foo,baz) {}`
    expect(ponder.inspect(klass)).deep.equal(['foo','baz'])
  })

})