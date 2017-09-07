import { del, get, post, put, service } from '../..';

@service
export default class AController {
  @get('/')
  static get = async (params, ctx) => {
    return { msg: 'get success with a.list'}
  }

  @post('/params/:id')
  static params = async (params, ctx) => {
    return { msg: 'get success with a.params', params}
  }

  @get()
  static ctx = async (params, ctx) => {
    ctx.body = "<span>hello world!!</span>"
  }

  @post('/')
  static post = async () => {
    return { msg: 'post success with a.post'}
  }

  @put('/')
  static put = async () => {
    return { msg: 'put success with a.put'}
  }

  @del('/')
  static del = async () => {
    return { msg: 'post success with a.del'}
  }
}
