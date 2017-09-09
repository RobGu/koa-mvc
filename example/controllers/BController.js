import { del, get, post, put, service } from '../../src';

@service
export default class BController {
  @get()
  static list = async () => {
    return { msg: 'success with b.list'}
  }
}
